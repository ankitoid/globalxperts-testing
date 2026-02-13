import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
    PlusCircle,
    Trash2,
    User,
    GraduationCap,
    Briefcase,
    Globe,
    Phone,
    Mail,
    MapPin,
    CheckCircle,
    ArrowLeft,
    Laptop,
    AlertCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function CandidateForm() {
    const navigate = useNavigate();

    const queryParams = new URLSearchParams(window.location.search);
    const jobIdFromQuery = queryParams.get("jobId");

    const [allJobs, setAllJobs] = useState([]);
    const [selectedRole, setSelectedRole] = useState("");
    const [selectedJobTitle, setSelectedJobTitle] = useState("");
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState({});
    const [loading, setLoading] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [cvFile, setCvFile] = useState(null);
    const [errors, setErrors] = useState({});
    const [countryList, setCountryList] = useState([]);
    const [stateList, setStateList] = useState([]);
    const [globalLoading, setGlobalLoading] = useState(false);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await api.get("/create_job/country-states/");
                setCountryList(response.data.data);
            } catch (error) {
                console.error("Error fetching countries:", error);
            }
        };

        fetchCountries();
    }, []);

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        country: "",
        state: "",
        city: "",
        expectedCTC: "",
        totalExperience: "",
        github: "",
        linkedin: "",
    });



    const [education, setEducation] = useState([
        { qualification: "", start: "", end: "", field: "", college: "", score: "" },
    ]);

    const [experience, setExperience] = useState([
        { role: "", org: "", location: "", ctc: "", highlights: "" },
    ]);

    const [noticePeriod, setNoticePeriod] = useState("No");
    const [noticePeriodDays, setNoticePeriodDays] = useState("");
    const [lastWorkingDay, setLastWorkingDay] = useState("");
    const [languages, setLanguages] = useState([]);

    const languageOptions = ["Hindi", "French", "Spanish", "German", "English", "Other"];

    // Validation functions
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePhone = (phone) => {
        const phoneRegex = /^[0-9]{10,15}$/;
        return phoneRegex.test(phone.replace(/[\s+-]/g, ''));
    };

    const validateField = (name, value) => {
        let error = '';

        switch (name) {
            case 'fullName':
                if (!value.trim()) {
                    error = 'Full name is required';
                } else if (value.trim().length < 2) {
                    error = 'Name must be at least 2 characters';
                } else if (!/^[a-zA-Z\s]+$/.test(value)) {
                    error = 'Name should contain only letters';
                }
                break;

            case 'email':
                if (!value) {
                    error = 'Email is required';
                } else if (!validateEmail(value)) {
                    error = 'Invalid email format';
                }
                break;

            case 'phone':
                if (!value) {
                    error = 'Phone number is required';
                } else if (!validatePhone(value)) {
                    error = 'Phone must be 10-15 digits';
                }
                break;

            case 'expectedCTC':
                if (value && (isNaN(value) || parseFloat(value) < 0)) {
                    error = 'CTC must be a positive number';
                } else if (value && parseFloat(value) > 500) {
                    error = 'Please enter a realistic CTC value';
                }
                break;

            case 'totalExperience':
                if (value && (isNaN(value) || parseFloat(value) < 0)) {
                    error = 'Experience must be a positive number';
                } else if (value && parseFloat(value) > 50) {
                    error = 'Experience must be less than 50 years';
                }
                break;

            case 'country':
                if (value && value.trim().length < 2) {
                    error = 'Please enter a valid country name';
                }
                break;

            case 'state':
                if (value && value.trim().length < 2) {
                    error = 'Please enter a valid state name';
                }
                break;

            case 'city':
                if (value && value.trim().length < 2) {
                    error = 'Please enter a valid city name';
                }
                break;

            default:
                break;
        }

        return error;
    };

    // Auto-select role when coming from JobDetails page
    useEffect(() => {
        if (allJobs.length > 0 && jobIdFromQuery) {
            const match = allJobs.find(j => j.id === parseInt(jobIdFromQuery));

            if (match) {
                setSelectedRole(match.id.toString());
                setSelectedJobTitle(match.title);
                fetchQuestions(match.id);
                setErrors(prev => ({ ...prev, role: "" })); // clear error
            }
        }
    }, [allJobs, jobIdFromQuery]);


    // Fetch all jobs on component mount
    useEffect(() => {
        const fetchJobs = async () => {
            try {
                setGlobalLoading(true);
                const response = await api.get("/create_job/addjob/");
                const data = response.data;

                if (data.results?.data) {
                    const activeJobs = data.results.data.filter(job => job.is_active);
                    setAllJobs(activeJobs);
                }
            } catch (error) {
                toast.error("Failed to fetch jobs. Please try again.");
            } finally {
                setGlobalLoading(false);
            }
        };

        fetchJobs();
    }, []);


    // Fetch questions when role is selected
    const fetchQuestions = async (jobId) => {
        setLoading(true);
        setGlobalLoading(true);

        setQuestions([]);
        setAnswers({});

        try {
            const response = await api.get(`/create_job/jobs/${jobId}/questions/`);
            const data = response.data;

            if (data.status === "success" && data.data.length > 0) {
                const unique = data.data.filter(
                    (q, i, arr) =>
                        arr.findIndex(
                            (x) => x.label === q.label && x.order === q.order && x.section === q.section
                        ) === i
                );

                setQuestions(unique);

                const initialAnswers = {};
                unique.forEach(q => {
                    if (q.question_type === "slider") initialAnswers[q.id] = q.options?.min || 1;
                    else if (q.question_type === "multiselect") initialAnswers[q.id] = [];
                    else initialAnswers[q.id] = "";
                });

                setAnswers(initialAnswers);
            }
        } catch (err) {
            toast.error("Failed to load questions");
        } finally {
            setLoading(false);
            setGlobalLoading(false);
        }
    };


    const handleRoleChange = (e) => {
        const jobId = e.target.value;
        setSelectedRole(jobId);

        // Clear role error when a role is selected
        if (jobId) {
            setErrors(prev => ({ ...prev, role: '' }));
            const selectedJob = allJobs.find(job => job.id === parseInt(jobId));
            setSelectedJobTitle(selectedJob ? selectedJob.title : "");
            fetchQuestions(jobId);
        } else {
            setSelectedJobTitle("");
            setQuestions([]);
            setAnswers({});
        }
    };

    const handleAnswerChange = (questionId, value, questionType) => {
        if (questionType === "multiselect") {
            const currentValues = answers[questionId] || [];
            if (currentValues.includes(value)) {
                setAnswers({
                    ...answers,
                    [questionId]: currentValues.filter(v => v !== value)
                });
            } else {
                setAnswers({
                    ...answers,
                    [questionId]: [...currentValues, value]
                });
            }
        } else {
            setAnswers({
                ...answers,
                [questionId]: value
            });
        }

        // Clear error for this question
        setErrors(prev => {
            const newErrors = { ...prev };
            delete newErrors[`question_${questionId}`];
            return newErrors;
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));

        // Load states when selecting a country
        if (name === "country") {
            const selected = countryList.find(c => c.country_name === value);

            if (selected) {
                setStateList(selected.states);  // update states
            } else {
                setStateList([]); // clear
            }

            setFormData(prev => ({
                ...prev,
                state: ""  // reset state field
            }));
        }
    };


    const updateEducation = (index, field, value) => {
        const updated = [...education];
        updated[index][field] = value;
        setEducation(updated);

        // Clear education errors for this index
        setErrors(prev => {
            const newErrors = { ...prev };
            delete newErrors[`edu_${index}_${field}`];
            return newErrors;
        });
    };

    const updateExperience = (index, field, value) => {
        const updated = [...experience];
        updated[index][field] = value;
        setExperience(updated);

        // Clear experience errors for this index
        setErrors(prev => {
            const newErrors = { ...prev };
            delete newErrors[`exp_${index}_${field}`];
            return newErrors;
        });
    };

    const addEdu = () =>
        setEducation([
            ...education,
            { qualification: "", start: "", end: "", field: "", college: "", score: "" },
        ]);

    const removeEdu = (i) => {
        if (education.length > 1) {
            setEducation(education.filter((_, idx) => idx !== i));
            // Clear errors for removed education entry
            setErrors(prev => {
                const newErrors = { ...prev };
                Object.keys(newErrors).forEach(key => {
                    if (key.startsWith(`edu_${i}_`)) {
                        delete newErrors[key];
                    }
                });
                return newErrors;
            });
        }
    };

    const addExp = () =>
        setExperience([
            ...experience,
            { role: "", org: "", location: "", ctc: "", highlights: "" },
        ]);

    const removeExp = (i) => {
        if (experience.length > 1) {
            setExperience(experience.filter((_, idx) => idx !== i));
            // Clear errors for removed experience entry
            setErrors(prev => {
                const newErrors = { ...prev };
                Object.keys(newErrors).forEach(key => {
                    if (key.startsWith(`exp_${i}_`)) {
                        delete newErrors[key];
                    }
                });
                return newErrors;
            });
        }
    };

    const toggleLanguage = (lang) => {
        if (languages.includes(lang))
            setLanguages(languages.filter((l) => l !== lang));
        else setLanguages([...languages, lang]);
    };

    // Build Tech_Experience object from questions and answers
    const buildTechExperience = () => {
        const techExp = {};

        questions.forEach(question => {
            const answer = answers[question.id];

            // For radio questions asking about experience (Yes/No)
            if (question.question_type === "radio" && question.label.toLowerCase().includes("experience")) {
                const techName = question.label.replace(/Do you have (?:any )?experience with /i, "").replace(/\?/g, "").trim();

                if (!techExp[techName]) {
                    techExp[techName] = {};
                }
                techExp[techName].experience = answer || "No";
            }

            // For slider questions asking for rating
            if (question.question_type === "slider" && question.label.toLowerCase().includes("rate")) {
                const techName = question.label.replace(/Rate yourself in /i, "").trim();

                if (!techExp[techName]) {
                    techExp[techName] = {};
                }
                techExp[techName].rating = parseInt(answer) || 0;
            }

            // For text/textarea questions (store as additional info)
            if ((question.question_type === "text" || question.question_type === "textarea") && answer) {
                const techName = question.label;
                techExp[techName] = {
                    experience: "Yes",
                    details: answer
                };
            }

            // For multiselect questions (store as array)
            if (question.question_type === "multiselect" && answer && answer.length > 0) {
                const techName = question.label;
                techExp[techName] = {
                    experience: "Yes",
                    skills: answer
                };
            }

            // For select questions
            if (question.question_type === "select" && answer) {
                const techName = question.label;
                techExp[techName] = {
                    experience: "Yes",
                    value: answer
                };
            }
        });

        return techExp;
    };

    // Comprehensive form validation
    const validateForm = () => {
        const newErrors = {};

        // Role validation
        if (!selectedRole) {
            newErrors.role = 'Please select a role';
        }

        // Personal Information validation
        if (!formData.fullName.trim()) {
            newErrors.fullName = 'Full name is required';
        } else if (formData.fullName.trim().length < 2) {
            newErrors.fullName = 'Name must be at least 2 characters';
        } else if (!/^[a-zA-Z\s]+$/.test(formData.fullName)) {
            newErrors.fullName = 'Name should contain only letters';
        }

        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Invalid email format';
        }

        if (!formData.phone) {
            newErrors.phone = 'Phone number is required';
        } else if (!validatePhone(formData.phone)) {
            newErrors.phone = 'Phone must be 10-15 digits';
        }

        // Optional field validations
        if (formData.expectedCTC && (isNaN(formData.expectedCTC) || parseFloat(formData.expectedCTC) < 0)) {
            newErrors.expectedCTC = 'CTC must be a positive number';
        }

        if (formData.totalExperience && (isNaN(formData.totalExperience) || parseFloat(formData.totalExperience) < 0)) {
            newErrors.totalExperience = 'Experience must be a positive number';
        }

        // Education validation
        education.forEach((edu, index) => {
            if (edu.qualification || edu.field || edu.college) {
                if (!edu.qualification) {
                    newErrors[`edu_${index}_qualification`] = 'Qualification is required';
                }
                if (!edu.field) {
                    newErrors[`edu_${index}_field`] = 'Field of study is required';
                }
                if (edu.score && (isNaN(edu.score) || parseFloat(edu.score) < 0 || parseFloat(edu.score) > 100)) {
                    newErrors[`edu_${index}_score`] = 'Score must be between 0-100';
                }
                if (edu.start && edu.end && new Date(edu.start) > new Date(edu.end)) {
                    newErrors[`edu_${index}_end`] = 'End date must be after start date';
                }
            }
        });

        // Experience validation
        experience.forEach((exp, index) => {
            if (exp.role || exp.org || exp.ctc) {
                if (!exp.role) {
                    newErrors[`exp_${index}_role`] = 'Role is required';
                }
                if (!exp.org) {
                    newErrors[`exp_${index}_org`] = 'Organization is required';
                }
                if (exp.ctc && (isNaN(exp.ctc) || parseFloat(exp.ctc) < 0)) {
                    newErrors[`exp_${index}_ctc`] = 'CTC must be a positive number';
                }
            }
        });

        // Notice period validation
        if (noticePeriod === "Yes" && !lastWorkingDay) {
            newErrors.lastWorkingDay = 'Please specify last working day';
        }

        if (noticePeriod === "No" && !noticePeriodDays) {
            newErrors.noticePeriodDays = 'Please specify notice period duration';
        } else if (noticePeriod === "No" && noticePeriodDays && (isNaN(noticePeriodDays) || parseInt(noticePeriodDays) < 0)) {
            newErrors.noticePeriodDays = 'Notice period must be a positive number';
        }

        // CV file validation
        if (cvFile) {
            const allowedTypes = ['.pdf', '.doc', '.docx'];
            const fileExtension = cvFile.name.substring(cvFile.name.lastIndexOf('.')).toLowerCase();
            if (!allowedTypes.includes(fileExtension)) {
                newErrors.cvFile = 'Only PDF, DOC, or DOCX files are allowed';
            }
            if (cvFile.size > 5 * 1024 * 1024) {
                newErrors.cvFile = 'File size must be less than 5MB';
            }
        }

        // Role-based questions validation
        questions.forEach(question => {
            if (question.required) {
                const answer = answers[question.id];
                if (!answer || (Array.isArray(answer) && answer.length === 0) || answer === "") {
                    newErrors[`question_${question.id}`] = `This field is required`;
                }
            }
        });

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate form
        if (!validateForm()) {
            toast.error("Please fix the errors in the form before submitting.");
            // Scroll to first error
            const firstErrorElement = document.querySelector('.border-red-500');
            if (firstErrorElement) {
                firstErrorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            return;
        }

        setSubmitting(true);
        setGlobalLoading(true);

        try {
            const now = new Date();
            const ist = new Date(now.getTime() + 5.5 * 60 * 60 * 1000);
            const submittedAtIST =
                ist.toISOString().replace("T", " ").substring(0, 19) + " IST";

            const submissionData = {
                Name: formData.fullName,
                Email: formData.email,
                Phone: formData.phone,
                Country: formData.country || "",
                State: formData.state || "",
                Location: formData.city || "",
                Role_Type: selectedJobTitle,
                status: "Scouting",
                "Languages Known": languages,
                "Expected_CTC_INR": formData.expectedCTC || "10",
                "Total_Experience": formData.totalExperience || "0",
                "GitHub_Profile": formData.github || "",
                "LinkedIn_Profile": formData.linkedin || "",

                Education_History: education.map((e) => ({
                    Qualification: e.qualification,
                    Specialisation: e.field,
                    University: e.college,
                    Start_Date: e.start,
                    End_Date: e.end,
                    Score: e.score,
                    Currently_Studying: false,
                })),

                Professional_Experience: experience.map((exp) => ({
                    Role: exp.role,
                    Organisation: exp.org,
                    Location: exp.location,
                    Start_Date: "",
                    End_Date: null,
                    CTC_INR: exp.ctc,
                    Is_Current: true,
                    Responsibilities: exp.highlights,
                })),

                "Serving Notice Period": noticePeriod,
                "Notice Period Days":
                    noticePeriod === "No" ? parseInt(noticePeriodDays) || null : null,
                "Last Working Day": noticePeriod === "Yes" ? lastWorkingDay : null,

                Tech_Experience: buildTechExperience(),
                Submitted_At_IST: submittedAtIST,
            };

            // Create FormData with three parts
            const fd = new FormData();

            // 1. form_name
            fd.append("form_name", "gxi_form");

            // 2. submission_data as JSON string
            fd.append("submission_data", JSON.stringify(submissionData));

            // 3. cv_upload (file) - only if file exists
            if (cvFile instanceof File) {
                fd.append("cv_upload", cvFile, cvFile.name);
            }

            // Debug: Log what we're sending
            console.log("📦 FormData Contents:");
            for (let pair of fd.entries()) {
                if (pair[1] instanceof File) {
                    console.log(`${pair[0]}: [File: ${pair[1].name}]`);
                } else {
                    console.log(`${pair[0]}:`, pair[1]);
                }
            }

            const response = await fetch(
                "http://3.85.242.139:8003/api/form_data/public/submit-form/",
                {
                    method: "POST",
                   
                    body: fd,
                }
            );

            const result = await response.json();
            console.log("✅ SERVER RESPONSE:", result);

            if (!response.ok) {
                throw new Error(result.message || JSON.stringify(result.errors || result));
            }

            toast.success("Candidate submitted successfully!");

        } catch (err) {
            console.error("❌ Submission Error:", err);
            console.error("❌ Error Response:", err.response?.data);
            toast.error(`Submission failed: ${err.message}`);
        } finally {
            setSubmitting(false);
            setGlobalLoading(false);
        }
    };

    const handleResumeUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;
        setGlobalLoading(true);

        try {
            const fd = new FormData();
            fd.append("resume", file);

            const res = await fetch("http://3.85.242.139:8003/api/create_job/resume-ai-parse/", {
                method: "POST",
                body: fd,
            });

            const data = await res.json();
            console.log("Resume Parsed:", data);

            if (!data.parsed) {
                toast.error("Failed to parse resume.");
                return;
            }

            const parsed = data.parsed;

            // Auto-fill personal info
            setFormData((prev) => ({
                ...prev,
                fullName: parsed.name || "",
                email: parsed.email || "",
                phone: parsed.phone || "",
                totalExperience: parsed.total_experience?.replace("years", "").trim() || "",
            }));

            // Auto-fill Education
            if (parsed.education?.length > 0) {
                setEducation(
                    parsed.education.map((edu) => ({
                        qualification: edu.degree || "",
                        field: "",
                        college: edu.university || "",
                        start: "",
                        end: "",
                        score: "",
                    }))
                );
            }

            // Auto-fill Experience
            if (parsed.experience?.length > 0) {
                setExperience(
                    parsed.experience.map((exp) => ({
                        role: exp.role || "",
                        org: exp.company || "",
                        location: "",
                        ctc: "",
                        highlights: exp.description || "",
                    }))
                );
            }

            toast.success("Resume parsed and form auto-filled.");

        } catch (error) {
            toast.error("Error uploading resume.");
        } finally {
            setGlobalLoading(false);
        }
    };

    return (
        <>
            {globalLoading && <Loader />}
            <div className="min-h-screen bg-gradient-to-r from-emerald-50 via-white to-emerald-50 p-6 text-sm">
                <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6 border border-gray-200">


                    <form onSubmit={handleSubmit} noValidate>
                        <div className="flex justify-between ">

                            <input
                                type="file"
                                id="resumeUpload"
                                accept=".pdf,.doc,.docx"
                                className="hidden"
                                onChange={handleResumeUpload}
                            />

                            <label
                                htmlFor="resumeUpload"
                                className="cursor-pointer bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-1 rounded-md text-sm shadow flex items-center "
                            >
                                Upload Resume (Auto-Fill)
                            </label>
                        </div>

                        <SectionTitle icon={<User className="text-emerald-500" />} title="Personal Information" />

                        <div className="grid grid-cols-2 gap-4 ">
                            <div>
                                <label className="text-xs font-medium text-gray-700">Select Role *</label>
                                <select
                                    className={`w-full border ${errors.role ? 'border-red-500' : 'border-emerald-300'} px-2 py-2 rounded-md mt-1 bg-white text-sm focus:border-emerald-600 focus:outline-none`}
                                    value={selectedRole}
                                    onChange={handleRoleChange}
                                    required
                                >
                                    <option value="">Select a role</option>
                                    {allJobs.map((job) => (
                                        <option key={job.id} value={job.id}>{job.title}</option>
                                    ))}
                                    <option value="2">Business Analyst</option>
                                    <option value="17">Optimization Engineer</option>
                                    <option value="19">Software Development Engineer (SDE)</option>
                                    <option value="1">Software Development Engineer in Testing (SDET)</option>
                                </select>
                                {errors.role && (
                                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                                        <AlertCircle size={12} />
                                        {errors.role}
                                    </p>
                                )}
                            </div>

                            <FormInput
                                label="Full Name"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                placeholder="Enter full name"
                                error={errors.fullName}
                                required
                            />



                            <FormInput
                                label="Email ID"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                icon={<Mail size={14} />}
                                placeholder="email@example.com"
                                error={errors.email}
                                required
                            />
                            <FormInput
                                label="Phone Number"
                                name="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={handleInputChange}
                                icon={<Phone size={14} />}
                                placeholder="+91 XXXXX XXXXX"
                                error={errors.phone}
                                required
                            />


                            {/* Country Dropdown */}
                            <div>
                                <label className="text-xs font-medium text-gray-700">Country</label>
                                <select
                                    name="country"
                                    value={formData.country}
                                    onChange={handleInputChange}
                                    className={`w-full border ${errors.country ? 'border-red-500' : 'border-emerald-300'} px-2 py-2 rounded-md mt-1 bg-white text-sm`}
                                >
                                    <option value="">Select Country</option>

                                    {countryList.map((country) => (
                                        <option key={country.id} value={country.country_name}>
                                            {country.country_name}
                                        </option>
                                    ))}
                                </select>

                                {errors.country && (
                                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                                        <AlertCircle size={12} />
                                        {errors.country}
                                    </p>
                                )}
                            </div>
                            {/* State Dropdown */}
                            <div>
                                <label className="text-xs font-medium text-gray-700">State</label>
                                <select
                                    name="state"
                                    value={formData.state}
                                    onChange={handleInputChange}
                                    className={`w-full border focus:border-emerald-600 ${errors.state ? 'border-red-500' : 'border-emerald-300'} px-2 py-2 rounded-md mt-1 bg-white text-sm`}
                                >
                                    <option value="">Select State</option>

                                    {stateList.length === 0 ? (
                                        <option disabled>No states available</option>
                                    ) : (
                                        stateList.map(state => (
                                            <option key={state.id} value={state.state_name}>
                                                {state.state_name}
                                            </option>
                                        ))
                                    )}
                                </select>
                                {errors.state && (
                                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                                        <AlertCircle size={12} />
                                        {errors.state}
                                    </p>
                                )}
                            </div>

                            <div className="col-span-2">
                                <FormInput
                                    label="City / Location"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleInputChange}
                                    icon={<MapPin size={14} />}
                                    placeholder="Mumbai, India"
                                    error={errors.city}
                                />
                            </div>
                        </div>

                        <Divider />

                        <SectionTitle icon={<Globe className="text-emerald-500" />} title="Languages" />

                        <div className="flex flex-wrap gap-2 mt-3 text-xs">
                            {languageOptions.map((lang) => (
                                <span
                                    key={lang}
                                    onClick={() => toggleLanguage(lang)}
                                    className={`px-3 py-1 rounded-full cursor-pointer border text-xs transition
                  ${languages.includes(lang) ? "bg-emerald-600 text-white border-emerald-600" : "bg-white text-gray-700 border-gray-300 hover:border-emerald-400"}
                `}
                                >
                                    {lang}
                                </span>
                            ))}
                        </div>

                        <div className="grid grid-cols-2 gap-6">

                            {/* Expected CTC */}
                            <div className="flex flex-col">
                                <SectionTitle
                                    icon={<Briefcase className="text-emerald-500" />}
                                    title="Expected CTC (in Lakhs)"
                                />
                                <FormInput
                                    name="expectedCTC"
                                    type="number"
                                    value={formData.expectedCTC}
                                    onChange={handleInputChange}
                                    placeholder="Enter expected CTC"
                                    error={errors.expectedCTC}
                                    min="0"
                                    step="1"
                                />
                            </div>

                            {/* Total Experience */}
                            <div className="flex flex-col">
                                <SectionTitle
                                    icon={<Briefcase className="text-emerald-500" />}
                                    title="Total Experience (in Years)"
                                />
                                <FormInput
                                    name="totalExperience"
                                    type="number"
                                    value={formData.totalExperience}
                                    onChange={handleInputChange}
                                    placeholder="Enter total experience"
                                    error={errors.totalExperience}
                                    min="0"
                                    step="1"
                                />
                            </div>

                        </div>

                        <div className="grid grid-cols-2 gap-6">

                            {/* GitHub Profile */}
                            <div className="flex flex-col">
                                <SectionTitle
                                    icon={<Globe className="text-emerald-500" />}
                                    title="GitHub Profile Link"
                                />
                                <FormInput
                                    name="github"
                                    type="url"
                                    value={formData.github || ""}
                                    onChange={handleInputChange}
                                    placeholder="https://github.com/username"
                                    error={errors.github}
                                />
                            </div>

                            {/* LinkedIn Profile */}
                            <div className="flex flex-col">
                                <SectionTitle
                                    icon={<Globe className="text-emerald-500" />}
                                    title="LinkedIn Profile Link"
                                />
                                <FormInput
                                    name="linkedin"
                                    type="url"
                                    value={formData.linkedin || ""}
                                    onChange={handleInputChange}
                                    placeholder="https://www.linkedin.com/in/username"
                                    error={errors.linkedin}
                                />
                            </div>

                        </div>


                        <Divider />


                        <SectionTitle icon={<GraduationCap className="text-emerald-500" />} title="Education Details" />

                        {education.map((edu, index) => (
                            <div key={index} className="border border-gray-200 rounded-lg p-4 bg-gray-50 mt-3 relative">
                                {education.length > 1 && (
                                    <div className="absolute right-2 top-2 cursor-pointer" onClick={() => removeEdu(index)}>
                                        <Trash2 size={14} className="text-red-500 hover:text-red-700" />
                                    </div>
                                )}

                                <h3 className="font-medium text-gray-700 mb-2">Education #{index + 1}</h3>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <input
                                            placeholder="Qualification"
                                            value={edu.qualification}
                                            onChange={(e) => updateEducation(index, 'qualification', e.target.value)}
                                            className={`w-full p-2 border ${errors[`edu_${index}_qualification`] ? 'border-red-500' : 'border-emerald-300'} rounded-md text-sm focus:border-emerald-600 focus:outline-none`}
                                        />
                                        {errors[`edu_${index}_qualification`] && (
                                            <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle size={12} />{errors[`edu_${index}_qualification`]}</p>
                                        )}
                                    </div>

                                    <div>
                                        <input
                                            placeholder="Field of Study"
                                            value={edu.field}
                                            onChange={(e) => updateEducation(index, 'field', e.target.value)}
                                            className={`w-full p-2 border ${errors[`edu_${index}_field`] ? 'border-red-500' : 'border-emerald-300'} rounded-md text-sm focus:border-emerald-600 focus:outline-none`}
                                        />
                                        {errors[`edu_${index}_field`] && (
                                            <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle size={12} />{errors[`edu_${index}_field`]}</p>
                                        )}
                                    </div>

                                    <input
                                        type="date"
                                        placeholder="Start Date"
                                        value={edu.start}
                                        onChange={(e) => updateEducation(index, 'start', e.target.value)}
                                        className="p-2 border border-emerald-300 rounded-md text-sm focus:border-emerald-600 focus:outline-none"
                                    />

                                    <div>
                                        <input
                                            type="date"
                                            placeholder="End Date"
                                            value={edu.end}
                                            onChange={(e) => updateEducation(index, 'end', e.target.value)}
                                            className={`w-full p-2 border ${errors[`edu_${index}_end`] ? 'border-red-500' : 'border-emerald-300'} rounded-md text-sm focus:border-emerald-600 focus:outline-none`}
                                        />
                                        {errors[`edu_${index}_end`] && (
                                            <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle size={12} />{errors[`edu_${index}_end`]}</p>
                                        )}
                                    </div>

                                    <input
                                        placeholder="College / University"
                                        value={edu.college}
                                        onChange={(e) => updateEducation(index, 'college', e.target.value)}
                                        className="col-span-2 p-2 border border-emerald-300 rounded-md text-sm focus:border-emerald-600 focus:outline-none"
                                    />

                                    <div className="col-span-2">
                                        <input
                                            placeholder="Percentage / CGPA"
                                            value={edu.score}
                                            onChange={(e) => updateEducation(index, 'score', e.target.value)}
                                            className={`w-full p-2 border ${errors[`edu_${index}_score`] ? 'border-red-500' : 'border-emerald-300'} rounded-md text-sm focus:border-emerald-600 focus:outline-none`}
                                        />
                                        {errors[`edu_${index}_score`] && (
                                            <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle size={12} />{errors[`edu_${index}_score`]}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}

                        <AddButton label="Add Education" onClick={addEdu} />

                        <Divider />

                        <SectionTitle icon={<Briefcase className="text-emerald-500" />} title="Professional Details" />

                        {experience.map((exp, index) => (
                            <div key={index} className="border border-gray-200 rounded-lg p-4 bg-gray-50 mt-3 relative">
                                {experience.length > 1 && (
                                    <div className="absolute right-2 top-2 cursor-pointer" onClick={() => removeExp(index)}>
                                        <Trash2 size={14} className="text-red-500 hover:text-red-700" />
                                    </div>
                                )}

                                <h3 className="font-medium text-gray-700 mb-2">Experience #{index + 1}</h3>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <input
                                            placeholder="Role / Designation"
                                            value={exp.role}
                                            onChange={(e) => updateExperience(index, 'role', e.target.value)}
                                            className={`w-full p-2 border ${errors[`exp_${index}_role`] ? 'border-red-500' : 'border-emerald-300'} rounded-md text-sm focus:border-emerald-600 focus:outline-none`}
                                        />
                                        {errors[`exp_${index}_role`] && (
                                            <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle size={12} />{errors[`exp_${index}_role`]}</p>
                                        )}
                                    </div>

                                    <div>
                                        <input
                                            placeholder="Organisation"
                                            value={exp.org}
                                            onChange={(e) => updateExperience(index, 'org', e.target.value)}
                                            className={`w-full p-2 border ${errors[`exp_${index}_org`] ? 'border-red-500' : 'border-emerald-300'} rounded-md text-sm focus:border-emerald-600 focus:outline-none`}
                                        />
                                        {errors[`exp_${index}_org`] && (
                                            <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle size={12} />{errors[`exp_${index}_org`]}</p>
                                        )}
                                    </div>

                                    <input
                                        placeholder="Location (City, Country)"
                                        value={exp.location}
                                        onChange={(e) => updateExperience(index, 'location', e.target.value)}
                                        className="col-span-2 p-2 border border-emerald-300 rounded-md text-sm focus:border-emerald-600 focus:outline-none"
                                    />

                                    <div className="col-span-2">
                                        <input
                                            placeholder="Current / Last CTC (INR)"
                                            value={exp.ctc}
                                            onChange={(e) => updateExperience(index, 'ctc', e.target.value)}
                                            className={`w-full p-2 border ${errors[`exp_${index}_ctc`] ? 'border-red-500' : 'border-emerald-300'} rounded-md text-sm focus:border-emerald-600 focus:outline-none`}
                                        />
                                        {errors[`exp_${index}_ctc`] && (
                                            <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle size={12} />{errors[`exp_${index}_ctc`]}</p>
                                        )}
                                    </div>

                                    <textarea
                                        placeholder="Key Responsibilities"
                                        value={exp.highlights}
                                        onChange={(e) => updateExperience(index, 'highlights', e.target.value)}
                                        className="col-span-2 p-2 border border-emerald-300 rounded-md text-sm focus:border-emerald-600 focus:outline-none h-20"
                                    />
                                </div>
                            </div>
                        ))}

                        <AddButton label="Add Experience" onClick={addExp} />

                        <Divider />

                        {/* Role-Based Skills Questions Section */}
                        {selectedRole && (
                            <>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="rounded-lg mb-6"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <Laptop size={24} className="text-emerald-500" />
                                        <h2 className="text-xl font-bold text-gray-800">Role-Based Skills Assessment</h2>
                                    </div>

                                    {loading ? (
                                        <div className="text-center py-8 text-gray-500">Loading questions...</div>
                                    ) : questions.length === 0 ? (
                                        <div className="text-center py-8 text-gray-400">
                                            No questions available for this role.
                                        </div>
                                    ) : (
                                        <div className="space-y-6">
                                            {[...new Set(questions.map(q => q.section))].map(section => (
                                                <div key={section} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                                    <div className="flex items-center gap-2 mb-4">
                                                        <div className="w-8 h-8 bg-emerald-600 rounded flex items-center justify-center text-white text-sm font-bold">
                                                            {section.charAt(0)}
                                                        </div>
                                                        <h3 className="text-lg font-semibold text-gray-700">{section}</h3>
                                                    </div>

                                                    <div className="space-y-4">
                                                        {questions
                                                            .filter(q => q.section === section)
                                                            .sort((a, b) => a.order - b.order)
                                                            .map((question) => (
                                                                <div key={question.id} className="bg-white p-4 rounded-lg border border-gray-200">
                                                                    <label className="text-sm font-medium text-gray-700 block mb-3">
                                                                        {question.label}
                                                                        {question.required && <span className="text-red-500 ml-1">*</span>}
                                                                    </label>

                                                                    {question.question_type === "radio" && question.options && (
                                                                        <div>
                                                                            <div className="flex gap-6">
                                                                                {Object.entries(question.options).map(([key, value]) => (
                                                                                    <label key={key} className="flex items-center gap-2 cursor-pointer">
                                                                                        <input
                                                                                            type="radio"
                                                                                            name={`question-${question.id}`}
                                                                                            value={key}
                                                                                            checked={answers[question.id] === key}
                                                                                            onChange={(e) => handleAnswerChange(question.id, e.target.value, "radio")}
                                                                                            className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
                                                                                            required={question.required}
                                                                                        />
                                                                                        <span className="text-sm text-gray-700">{value}</span>
                                                                                    </label>
                                                                                ))}
                                                                            </div>
                                                                            {errors[`question_${question.id}`] && (
                                                                                <p className="text-xs text-red-500 mt-2 flex items-center gap-1"><AlertCircle size={12} />{errors[`question_${question.id}`]}</p>
                                                                            )}
                                                                        </div>
                                                                    )}

                                                                    {question.question_type === "select" && question.options && (
                                                                        <div>
                                                                            <select
                                                                                value={answers[question.id] || ""}
                                                                                onChange={(e) => handleAnswerChange(question.id, e.target.value, "select")}
                                                                                className={`w-full p-2 border ${errors[`question_${question.id}`] ? 'border-red-500' : 'border-emerald-300'} rounded-md text-sm focus:border-emerald-600 focus:outline-none bg-white`}
                                                                                required={question.required}
                                                                            >
                                                                                <option value="">-- Select an option --</option>
                                                                                {Object.entries(question.options).map(([key, value]) => (
                                                                                    <option key={key} value={key}>{value}</option>
                                                                                ))}
                                                                            </select>
                                                                            {errors[`question_${question.id}`] && (
                                                                                <p className="text-xs text-red-500 mt-2 flex items-center gap-1"><AlertCircle size={12} />{errors[`question_${question.id}`]}</p>
                                                                            )}
                                                                        </div>
                                                                    )}

                                                                    {question.question_type === "slider" && question.options && (
                                                                        <div className="space-y-2">
                                                                            <div className="flex justify-between text-xs text-gray-600">
                                                                                <span>Min: {question.options.min}</span>
                                                                                <span className="font-bold text-emerald-600">
                                                                                    Selected: {answers[question.id] || question.options.min}
                                                                                </span>
                                                                                <span>Max: {question.options.max}</span>
                                                                            </div>
                                                                            <input
                                                                                type="range"
                                                                                min={question.options.min}
                                                                                max={question.options.max}
                                                                                value={answers[question.id] || question.options.min}
                                                                                onChange={(e) => handleAnswerChange(question.id, e.target.value, "slider")}
                                                                                className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                                                                            />
                                                                        </div>
                                                                    )}

                                                                    {question.question_type === "multiselect" && question.options && (
                                                                        <div>
                                                                            <div className="flex flex-wrap gap-2">
                                                                                {Object.entries(question.options).map(([key, value]) => {
                                                                                    const isSelected = (answers[question.id] || []).includes(key);
                                                                                    return (
                                                                                        <button
                                                                                            key={key}
                                                                                            type="button"
                                                                                            onClick={() => handleAnswerChange(question.id, key, "multiselect")}
                                                                                            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${isSelected
                                                                                                    ? "bg-emerald-600 text-white"
                                                                                                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                                                                                }`}
                                                                                        >
                                                                                            {value}
                                                                                        </button>
                                                                                    );
                                                                                })}
                                                                            </div>
                                                                            {errors[`question_${question.id}`] && (
                                                                                <p className="text-xs text-red-500 mt-2 flex items-center gap-1"><AlertCircle size={12} />{errors[`question_${question.id}`]}</p>
                                                                            )}
                                                                        </div>
                                                                    )}

                                                                    {question.question_type === "text" && (
                                                                        <div>
                                                                            <input
                                                                                type="text"
                                                                                value={answers[question.id] || ""}
                                                                                onChange={(e) => handleAnswerChange(question.id, e.target.value, "text")}
                                                                                className={`w-full p-2 border ${errors[`question_${question.id}`] ? 'border-red-500' : 'border-emerald-300'} rounded-md text-sm focus:border-emerald-600 focus:outline-none`}
                                                                                placeholder="Enter your answer..."
                                                                                required={question.required}
                                                                            />
                                                                            {errors[`question_${question.id}`] && (
                                                                                <p className="text-xs text-red-500 mt-2 flex items-center gap-1"><AlertCircle size={12} />{errors[`question_${question.id}`]}</p>
                                                                            )}
                                                                        </div>
                                                                    )}

                                                                    {question.question_type === "textarea" && (
                                                                        <div>
                                                                            <textarea
                                                                                value={answers[question.id] || ""}
                                                                                onChange={(e) => handleAnswerChange(question.id, e.target.value, "textarea")}
                                                                                className={`w-full p-2 border ${errors[`question_${question.id}`] ? 'border-red-500' : 'border-emerald-300'} rounded-md text-sm focus:border-emerald-600 focus:outline-none h-24 resize-none`}
                                                                                placeholder="Enter your answer..."
                                                                                required={question.required}
                                                                            />
                                                                            {errors[`question_${question.id}`] && (
                                                                                <p className="text-xs text-red-500 mt-2 flex items-center gap-1"><AlertCircle size={12} />{errors[`question_${question.id}`]}</p>
                                                                            )}
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </motion.div>

                                <Divider />
                            </>
                        )}

                        <SectionTitle icon={<Globe className="text-emerald-500" />} title="Availability" />

                        <div className="mt-3">
                            <label className="font-medium text-gray-700 text-xs">Serving Notice Period?</label>

                            <div className="flex gap-4 mt-2 text-gray-600 text-sm">
                                <label className="flex items-center gap-1 cursor-pointer">
                                    <input
                                        type="radio"
                                        className="text-emerald-600 accent-emerald-600 focus:ring-emerald-600"
                                        checked={noticePeriod === "Yes"}
                                        onChange={() => {
                                            setNoticePeriod("Yes");
                                            setErrors(prev => ({ ...prev, noticePeriodDays: '' }));
                                        }}
                                    />
                                    Yes
                                </label>

                                <label className="flex items-center gap-1 cursor-pointer">
                                    <input
                                        type="radio"
                                        className="text-emerald-600 accent-emerald-600 focus:ring-emerald-600"
                                        checked={noticePeriod === "No"}
                                        onChange={() => {
                                            setNoticePeriod("No");
                                            setErrors(prev => ({ ...prev, lastWorkingDay: '' }));
                                        }}
                                    />
                                    No
                                </label>
                            </div>

                            {noticePeriod === "Yes" && (
                                <div className="mt-3">
                                    <label className="font-medium text-gray-700 text-xs">Last Working Day : </label>
                                    <input
                                        type="date"
                                        value={lastWorkingDay}
                                        onChange={(e) => {
                                            setLastWorkingDay(e.target.value);
                                            setErrors(prev => ({ ...prev, lastWorkingDay: '' }));
                                        }}
                                        className={`mt-1 w-1/3 p-2 ml-2 border ${errors.lastWorkingDay ? 'border-red-500' : 'border-emerald-300'} rounded-md text-sm focus:border-emerald-600 focus:outline-none`}
                                    />
                                    {errors.lastWorkingDay && (
                                        <p className="text-xs text-red-500 mt-2 flex items-center gap-1"><AlertCircle size={12} />{errors.lastWorkingDay}</p>
                                    )}
                                </div>
                            )}

                            {noticePeriod === "No" && (
                                <div className="mt-3">
                                    <label className="font-medium text-gray-700 text-xs">Notice Period Duration (in Days) :</label>
                                    <input
                                        type="number"
                                        value={noticePeriodDays}
                                        onChange={(e) => {
                                            setNoticePeriodDays(e.target.value);
                                            if (e.target.value && (isNaN(e.target.value) || parseInt(e.target.value) < 0)) {
                                                setErrors(prev => ({ ...prev, noticePeriodDays: 'Must be a positive number' }));
                                            } else {
                                                setErrors(prev => ({ ...prev, noticePeriodDays: '' }));
                                            }
                                        }}
                                        className={`mt-1 w-40 p-2 ml-2 border ${errors.noticePeriodDays ? 'border-red-500' : 'border-emerald-300'} rounded-md text-sm focus:border-emerald-600 focus:outline-none`}
                                        placeholder="e.g., 30"
                                        min="0"
                                    />
                                    {errors.noticePeriodDays && (
                                        <p className="text-xs text-red-500 mt-2 flex items-center gap-1"><AlertCircle size={12} />{errors.noticePeriodDays}</p>
                                    )}
                                </div>
                            )}
                        </div>

                        <Divider />

                        <SectionTitle
                            icon={<Briefcase className="text-emerald-500" />}
                            title="Upload CV (PDF / DOCX)"
                        />

                        <div className="mt-3">
                            <input
                                type="file"
                                accept=".pdf,.doc,.docx"
                                required={true}
                                onChange={(e) => {
                                    const file = e.target.files[0];
                                    if (file) {
                                        // Validate file size (max 5MB)
                                        if (file.size > 5 * 1024 * 1024) {
                                            setErrors(prev => ({ ...prev, cvFile: 'File size must be less than 5MB' }));
                                            e.target.value = null;
                                            setCvFile(null);
                                            return;
                                        }

                                        // Validate file type
                                        const allowedTypes = ['.pdf', '.doc', '.docx'];
                                        const fileExtension = file.name.substring(file.name.lastIndexOf('.')).toLowerCase();
                                        if (!allowedTypes.includes(fileExtension)) {
                                            setErrors(prev => ({ ...prev, cvFile: 'Only PDF, DOC, or DOCX files are allowed' }));
                                            e.target.value = null;
                                            setCvFile(null);
                                            return;
                                        }

                                        setErrors(prev => ({ ...prev, cvFile: '' }));
                                        setCvFile(file);
                                    }
                                }}
                                className={`border ${errors.cvFile ? 'border-red-500' : 'border-emerald-300'} p-2 rounded-md text-sm`}
                            />

                            {cvFile && !errors.cvFile && (
                                <p className="text-xs mt-2 text-emerald-700 flex items-center gap-2">
                                    <CheckCircle size={14} />
                                    Selected: <strong>{cvFile.name}</strong> ({(cvFile.size / 1024).toFixed(2)} KB)
                                </p>
                            )}

                            {errors.cvFile && (
                                <p className="text-xs text-red-500 mt-2 flex items-center gap-1"><AlertCircle size={12} />{errors.cvFile}</p>
                            )}
                        </div>

                        <Divider />

                        {/* Show summary of errors if any exist */}
                        {Object.keys(errors).length > 0 && (
                            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                                <div className="flex items-center gap-2 mb-2">
                                    <AlertCircle size={16} className="text-red-600" />
                                    <h3 className="font-semibold text-red-800 text-sm">Please fill all required fields correctly:</h3>
                                </div>
                                <ul className="list-disc list-inside text-xs text-red-700 space-y-1">
                                    {Object.entries(errors).map(([key, value]) => (
                                        value && <li key={key}>{value}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <div className="flex justify-end mt-2">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                disabled={submitting}
                                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg text-sm font-medium shadow-md flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {submitting ? (
                                    <>
                                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                                        Submitting...
                                    </>
                                ) : (
                                    <>
                                        <CheckCircle size={16} /> Submit Candidate
                                    </>
                                )}
                            </motion.button>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer className="mt-8" />
        </>
    );
}

const SectionTitle = ({ icon, title }) => (
    <div className="flex items-center gap-2 mt-6">
        <div className="text-[#0f3b2f] text-lg">{icon}</div>
        <h2 className="text-lg font-semibold text-[#0f3b2f]">{title}</h2>
    </div>
);

const Divider = () => <hr className="my-6 border-gray-200" />;

const FormInput = ({ label, icon, className, error, required, ...props }) => (
    <div className={className}>
        <label className="text-xs font-medium text-gray-700">
            {label} {required && <span className="text-red-500">*</span>}
        </label>
        <div className={`flex items-center border ${error ? 'border-red-500' : 'border-emerald-300'} px-2 py-1 rounded-md mt-1 bg-white focus-within:border-2 ${error ? 'focus-within:border-red-600' : 'focus-within:border-emerald-600'}`}>
            {icon && <div className="mr-2 text-gray-500">{icon}</div>}
            <input
                className="w-full outline-none text-gray-800 text-sm"
                required={required}
                {...props}
            />
        </div>
        {error && <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle size={12} />{error}</p>}
    </div>
);

const AddButton = ({ label, onClick }) => (
    <button
        type="button"
        onClick={onClick}
        className="flex items-center gap-1 bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1.5 rounded-md mt-3 text-xs shadow"
    >
        <PlusCircle size={14} /> {label}
    </button>
); 
