import React, { useEffect, useMemo, useState, useRef } from "react";
import { useParams, useLocation, Link, useNavigate } from "react-router-dom";
import {
  HiOutlineClock,
  HiOutlineHome,
  HiOutlineBriefcase,
  HiOutlineArrowLeft,
  HiOutlineUpload,
} from "react-icons/hi";

const API_URL = "http://3.85.242.139:8003/api/create_job/public/jobs/";

/* ---------------------------
  Helpers
----------------------------*/
function cleanHTML(html) {
  if (!html) return "";
  // basic sanitization (strip styles)
  return html
    .replace(/<\s*style[^>]*>.*?<\s*\/\s*style\s*>/gsi, "")
    .replace(/background-color:\s*[^;]+;?/gi, "")
    .replace(/color:\s*[^;]+;?/gi, "")
    .replace(/font-size:\s*[^;]+;?/gi, "");
}

const DRAFT_KEY = (jobId) => `jobApplicationDraft::${jobId || "unknownJob"}`;

function formatEmploymentType(type) {
  if (!type) return "Unknown";
  return type.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

/* ---------------------------
  Main Page (export default)
----------------------------*/
export default function JobDetails() {
  const { slug } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [job, setJob] = useState(location.state?.job ?? null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (job) return;
    let cancelled = false;

    async function load() {
      setLoading(true);
      try {
        const res = await fetch(API_URL);
        const json = await res.json();
        const arr = json?.results?.data ?? [];
        const match = arr.find(
          (j) => (j.job_id || String(j.id)) === decodeURIComponent(slug)
        );
        if (!cancelled) setJob(match);
      } catch (err) {
        console.error(err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => (cancelled = true);
  }, [slug, job]);

  if (loading || !job) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-700 text-lg bg-gradient-to-r from-emerald-50 via-white to-emerald-50 animate-pulse">
        Loading job…
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-emerald-50/40 pb-12">
      {/* Hero */}
      <div className="relative">
        <div className="h-44 md:h-56 w-full bg-[url('/job-hero.jpg')] bg-cover bg-center rounded-b-2xl" />
        {/* overlay logo */}
        <div className="max-w-6xl mx-auto -mt-10 px-6 flex items-start gap-6">
          <div className="bg-white rounded-lg p-4 shadow-lg w-24 h-24 flex items-center justify-center">
            <div className="w-14 h-14 rounded-md flex items-center justify-center bg-emerald-600 text-white text-xl font-bold">
              {job.title?.charAt(0) ?? "J"}
            </div>
          </div>

          <div className="bg-white flex-1 p-4 rounded-lg shadow-lg flex flex-col justify-center">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-gray-500">GlobalXperts</div>
                <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
                  {job.title}
                </h1>
                <div className="text-sm text-gray-500 mt-1">
                  <span className="mr-3">
                    <strong className="text-gray-700">{formatEmploymentType(job.employments_types_detail?.name)}</strong>
                  </span>
                  <span className="mr-3">{job.work_mode || "Remote"}</span>
                  <span className="text-gray-400">•</span>
                  <span className="ml-3 text-sm text-emerald-600">{job.Salary_range}</span>
                </div>
              </div>

              <div className="hidden md:flex items-center gap-3">
                <button
                  onClick={() => navigate("/careers")}
                  className="text-sm px-4 py-2 rounded-md border bg-white hover:bg-gray-50"
                >
                  ← Back to Careers
                </button>

                {/* Apply button opens form (scroll or focus) */}
                <a
                  href="#applicationForm"
                  className="px-4 py-2 bg-emerald-600 text-white rounded-md shadow hover:bg-emerald-700 text-sm"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Description */}
        <div className="lg:col-span-7 col-span-1">
          <JobDescription job={job} />
        </div>

        {/* Right: Multi-step Form */}
        <div id="applicationForm" className="lg:col-span-5 col-span-1">
          <div className="sticky top-6">
            <ApplicationForm job={job} />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------
  JobDescription component
----------------------------*/
function JobDescription({ job }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow p-8 prose max-w-none">
      <div className="flex items-start gap-6">
        <div className="flex-1">
          <h2 className="text-2xl font-semibold">{job.title}</h2>
          <p className="text-sm text-gray-500 mt-1">{job.job_id} • {job.teams_detail?.name}</p>
        </div>
      </div>

      <hr className="my-4" />

      {/* Minimum qualifications (if present) */}
      <div dangerouslySetInnerHTML={{ __html: cleanHTML(job.Description || "") }} />
    </div>
  );
}

/* ---------------------------
  ApplicationForm (main right card)
----------------------------*/
function ApplicationForm({ job }) {
  const jobKey = useMemo(() => DRAFT_KEY(job.job_id || job.id), [job]);
  const initial = useMemo(() => loadDraft(jobKey), [jobKey]);

  const [step, setStep] = useState(initial?.step ?? 0);
  const [saving, setSaving] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Form state
  const [form, setForm] = useState({
    personal: {
      fullName: initial?.personal?.fullName ?? "",
      email: initial?.personal?.email ?? "",
      phone: initial?.personal?.phone ?? "",
      role: initial?.personal?.role ?? job.title ?? "",
      country: initial?.personal?.country ?? "",
      city: initial?.personal?.city ?? "",
      languages: initial?.personal?.languages ?? [], // array
      linkedin: initial?.personal?.linkedin ?? "",
      github: initial?.personal?.github ?? "",
      address: initial?.personal?.address ?? "",
    },
    education: initial?.education ?? [
      { degree: "", college: "", graduationYear: "", percentage: "", branch: "" },
    ],
    experience: initial?.experience ?? [
      { yearsOfExperience: "", company: "", title: "", currentCTC: "", expectedCTC: "", skills: [] },
    ],
    availability: {
      noticePeriod: initial?.availability?.noticePeriod ?? "No",
      noticePeriodDuration: initial?.availability?.noticePeriodDuration ?? "",
      joiningDate: initial?.availability?.joiningDate ?? "",
      resumeFileMeta: initial?.availability?.resumeFileMeta ?? null,
      portfolioFileMeta: initial?.availability?.portfolioFileMeta ?? null,
    },
  });

  // validation summary
  const [validationSummary, setValidationSummary] = useState([]);

  // autosave (debounced)
  const timerRef = useRef(null);
  useEffect(() => {
    // debounce 1.2s
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      saveDraft(jobKey, { step, ...form });
    }, 1200);

    return () => clearTimeout(timerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form, step]);

  function handlePersonalChange(k, v) {
    setForm((s) => ({ ...s, personal: { ...s.personal, [k]: v } }));
  }

  function handleEducationChange(idx, key, value) {
    setForm((s) => {
      const ed = [...s.education];
      ed[idx] = { ...ed[idx], [key]: value };
      return { ...s, education: ed };
    });
  }

  function addEducation() {
    setForm((s) => ({ ...s, education: [...s.education, { degree: "", college: "", graduationYear: "", percentage: "", branch: "" }] }));
  }
  function removeEducation(i) {
    setForm((s) => ({ ...s, education: s.education.filter((_, idx) => idx !== i) }));
  }

  function handleExperienceChange(idx, key, value) {
    setForm((s) => {
      const ex = [...s.experience];
      ex[idx] = { ...ex[idx], [key]: value };
      return { ...s, experience: ex };
    });
  }
  function addExperience() {
    setForm((s) => ({ ...s, experience: [...s.experience, { yearsOfExperience: "", company: "", title: "", currentCTC: "", expectedCTC: "", skills: [] }] }));
  }
  function removeExperience(i) {
    setForm((s) => ({ ...s, experience: s.experience.filter((_, idx) => idx !== i) }));
  }

  function handleAvailabilityChange(k, v) {
    setForm((s) => ({ ...s, availability: { ...s.availability, [k]: v } }));
  }

  function updateResumeMeta(meta) {
    setForm((s) => ({ ...s, availability: { ...s.availability, resumeFileMeta: meta } }));
  }
  function updatePortfolioMeta(meta) {
    setForm((s) => ({ ...s, availability: { ...s.availability, portfolioFileMeta: meta } }));
  }

  // Languages logic (checkbox multiple + "other" input)
  function toggleLanguage(lang) {
    setForm((s) => {
      const arr = new Set(s.personal.languages || []);
      if (arr.has(lang)) arr.delete(lang);
      else arr.add(lang);
      return { ...s, personal: { ...s.personal, languages: Array.from(arr) } };
    });
  }

  /* --------------------
     Validation per step
  ---------------------*/
  function validateStep(currentStep = step) {
    const issues = [];

    if (currentStep === 0) {
      const p = form.personal;
      if (!p.fullName) issues.push("Personal: Full name is required");
      if (!p.email || !/^\S+@\S+\.\S+$/.test(p.email)) issues.push("Personal: Valid email is required");
      if (!p.phone) issues.push("Personal: Phone number is required");
    }

    if (currentStep === 1) {
      // at least one education with degree + college
      const ok = form.education.some((e) => e.degree && e.college);
      if (!ok) issues.push("Education: Add at least one education with degree and college");
    }

    if (currentStep === 2) {
      // experience can be empty, but if entries exist they should have years and company
      const bad = form.experience.some((e) => e.yearsOfExperience === "" || e.company === "");
      if (bad) issues.push("Experience: Fill years and company for experience entries or remove them");
    }

    if (currentStep === 3) {
      // resume required
      if (!form.availability.resumeFileMeta) issues.push("Availability: Resume is required");
    }

    setValidationSummary(issues);
    return issues.length === 0;
  }

  async function goNext() {
    const ok = validateStep(step);
    if (!ok) return;

    setStep((s) => Math.min(4, s + 1));
  }

  function goBack() {
    setStep((s) => Math.max(0, s - 1));
  }

  function saveDraftNow() {
    setSaving(true);
    saveDraft(jobKey, { step, ...form });
    setTimeout(() => setSaving(false), 500);
  }

  async function handleSubmit() {
    // validate all steps
    let allOk = true;
    const allIssues = [];

    for (let st = 0; st <= 3; st++) {
      const prevStep = step;
      setStep(st); // quick feedback
      const ok = validateAll(st);
      if (!ok) {
        allOk = false;
        allIssues.push(...validationSummary);
      }
      setStep(prevStep);
    }

    if (!allOk) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // Construct submission payload
    const payload = {
      jobId: job.job_id || job.id,
      personal: form.personal,
      education: form.education,
      experience: form.experience,
      availability: {
        ...form.availability,
      },
      submittedAt: new Date().toISOString(),
    };

    // Simulate network submit
    console.log("Submitting application:", payload);
    setSubmitted(true);
    // remove draft
    localStorage.removeItem(jobKey);

    // In real app, POST to server here
    return true;
  }

  // validate helper that doesn't set step-based summary override
  function validateAll(s) {
    // reuse validateStep but avoid mutating step state
    const issues = [];
    if (s === 0) {
      const p = form.personal;
      if (!p.fullName) issues.push("Personal: Full name is required");
      if (!p.email || !/^\S+@\S+\.\S+$/.test(p.email)) issues.push("Personal: Valid email is required");
      if (!p.phone) issues.push("Personal: Phone number is required");
    }
    if (s === 1) {
      const ok = form.education.some((e) => e.degree && e.college);
      if (!ok) issues.push("Education: Add at least one education with degree and college");
    }
    if (s === 2) {
      const bad = form.experience.some((e) => e.yearsOfExperience === "" || e.company === "");
      if (bad) issues.push("Experience: Fill years and company for experience entries or remove them");
    }
    if (s === 3) {
      if (!form.availability.resumeFileMeta) issues.push("Availability: Resume is required");
    }

    setValidationSummary(issues);
    return issues.length === 0;
  }

  // file handlers (we store only meta and keep files in memory)
  const fileRefs = useRef({ resumeFile: null, portfolioFile: null });

  function handleFilePick(e, which) {
    const f = e.target.files?.[0];
    if (!f) return;
    const meta = { name: f.name, size: f.size, type: f.type, lastModified: f.lastModified };
    if (which === "resume") {
      fileRefs.current.resumeFile = f;
      updateResumeMeta(meta);
    } else {
      fileRefs.current.portfolioFile = f;
      updatePortfolioMeta(meta);
    }
  }

  function removeFile(which) {
    if (which === "resume") {
      fileRefs.current.resumeFile = null;
      updateResumeMeta(null);
    } else {
      fileRefs.current.portfolioFile = null;
      updatePortfolioMeta(null);
    }
  }

  /* -----------------------------
     Render
  ------------------------------*/
  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow p-6 animate-[fadeSlideUp_0.45s_ease-out_forwards]">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-xs text-gray-500">Applying for</div>
          <div className="font-semibold">{job.title}</div>
          <div className="text-sm text-gray-500">{job.teams_detail?.name} • {job.job_id}</div>
        </div>

        <div className="text-right">
          <div className="text-sm text-gray-500">Step</div>
          <div className="font-semibold text-emerald-600">{step + 1} / 5</div>
        </div>
      </div>

      {/* Step progress bar */}
      <div className="flex items-center gap-2 mb-4">
        {["Personal", "Education", "Professional", "Availability", "Review"].map((label, i) => (
          <div key={label} className={`flex-1 text-xs text-center py-2 rounded-full ${i <= step ? "bg-emerald-600 text-white" : "bg-gray-100 text-gray-600"}`}>
            {label}
          </div>
        ))}
      </div>

      {/* Step content */}
      <div className="min-h-[220px]">
        {step === 0 && (
          <StepPersonal
            data={form.personal}
            onChange={handlePersonalChange}
            toggleLanguage={toggleLanguage}
          />
        )}

        {step === 1 && (
          <StepEducation
            entries={form.education}
            onChange={handleEducationChange}
            add={addEducation}
            remove={removeEducation}
          />
        )}

        {step === 2 && (
          <StepExperience
            entries={form.experience}
            onChange={handleExperienceChange}
            add={addExperience}
            remove={removeExperience}
          />
        )}

        {step === 3 && (
          <StepAvailability
            availability={form.availability}
            onChange={handleAvailabilityChange}
            onFilePick={handleFilePick}
            removeFile={removeFile}
          />
        )}

        {step === 4 && (
          <StepReview form={form} job={job} />
        )}
      </div>

      {/* Validation summary */}
      {validationSummary.length > 0 && (
        <div className="mt-4 p-3 bg-red-50 border border-red-100 text-red-700 text-sm rounded">
          <strong className="block mb-1">Validation issues:</strong>
          <ul className="list-disc list-inside">
            {validationSummary.map((it, i) => <li key={i}>{it}</li>)}
          </ul>
        </div>
      )}

      {/* Actions */}
      <div className="mt-4 flex flex-col sm:flex-row justify-between gap-3">
        <div className="flex items-center gap-2">
          <button
            onClick={saveDraftNow}
            type="button"
            className="px-3 py-2 text-sm border rounded text-gray-700 bg-gray-50 hover:bg-gray-100"
            aria-label="Save draft"
          >
            Save Draft
          </button>

          <div className="text-xs text-gray-500">{saving ? "Saving..." : "Auto-saves every 1s"}</div>
        </div>

        <div className="flex gap-2">
          {step > 0 && (
            <button onClick={goBack} className="px-4 py-2 border rounded text-gray-700 bg-white hover:bg-gray-50">
              Back
            </button>
          )}

          {step < 4 && (
            <button onClick={goNext} className="px-4 py-2 bg-emerald-600 text-white rounded shadow">
              Next
            </button>
          )}

          {step === 4 && (
            <button onClick={handleSubmit} className="px-4 py-2 bg-blue-600 text-white rounded shadow">
              Submit Application
            </button>
          )}
        </div>
      </div>

      {submitted && (
        <div className="mt-4 p-3 bg-green-50 border border-green-100 text-green-700 rounded">
          Application submitted. We will contact you via email.
        </div>
      )}

      <style>{`
        @keyframes fadeSlideUp {
          0% { opacity: 0; transform: translateY(14px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

/* ---------------------------
  Step components
----------------------------*/

function StepPersonal({ data, onChange, toggleLanguage }) {
  const languages = ["English", "Hindi", "Spanish", "Other"];
  const otherLang = data.languages?.find(l => !languages.includes(l)) ?? "";

  return (
    <div className="space-y-3">
      <label className="block">
        <div className="text-sm font-medium text-gray-700">Full Name *</div>
        <input value={data.fullName} onChange={e => onChange("fullName", e.target.value)} className="mt-1 w-full border rounded p-2 text-sm" placeholder="Enter full name" />
      </label>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <label>
          <div className="text-sm text-gray-700">Email *</div>
          <input value={data.email} onChange={e => onChange("email", e.target.value)} className="mt-1 w-full border rounded p-2 text-sm" placeholder="you@example.com" />
        </label>

        <label>
          <div className="text-sm text-gray-700">Phone *</div>
          <input value={data.phone} onChange={e => onChange("phone", e.target.value)} className="mt-1 w-full border rounded p-2 text-sm" placeholder="+91 9xxxxxxxxx" />
        </label>
      </div>

      <label>
        <div className="text-sm text-gray-700">Role</div>
        <input value={data.role} onChange={e => onChange("role", e.target.value)} className="mt-1 w-full border rounded p-2 text-sm" />
      </label>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <label>
          <div className="text-sm text-gray-700">Country</div>
          <input value={data.country} onChange={e => onChange("country", e.target.value)} className="mt-1 w-full border rounded p-2 text-sm" />
        </label>

        <label>
          <div className="text-sm text-gray-700">City</div>
          <input value={data.city} onChange={e => onChange("city", e.target.value)} className="mt-1 w-full border rounded p-2 text-sm" />
        </label>
      </div>

      <div>
        <div className="text-sm text-gray-700 mb-1">Languages</div>
        <div className="flex flex-wrap gap-2">
          {["English", "Hindi", "Spanish"].map(lang => {
            const checked = (data.languages || []).includes(lang);
            return (
              <label key={lang} className={`px-3 py-1 rounded-full cursor-pointer border ${checked ? "bg-emerald-600 text-white" : "bg-white text-gray-700"}`}>
                <input type="checkbox" className="hidden" checked={checked} onChange={() => toggleLanguage(lang)} />
                {lang}
              </label>
            );
          })}
        </div>

        <div className="mt-2">
          <input placeholder="Other languages (comma separated)" value={otherLang} onChange={e => {
            const val = e.target.value;
            const rest = (data.languages || []).filter(l => ["English","Hindi","Spanish"].includes(l));
            const newList = val ? [...rest, val] : rest;
            onChange("languages", newList);
          }} className="mt-1 w-full border rounded p-2 text-sm" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <label>
          <div className="text-sm text-gray-700">LinkedIn</div>
          <input value={data.linkedin} onChange={e => onChange("linkedin", e.target.value)} className="mt-1 w-full border rounded p-2 text-sm" placeholder="https://linkedin.com/..." />
        </label>

        <label>
          <div className="text-sm text-gray-700">GitHub</div>
          <input value={data.github} onChange={e => onChange("github", e.target.value)} className="mt-1 w-full border rounded p-2 text-sm" placeholder="https://github.com/..." />
        </label>
      </div>

      <label>
        <div className="text-sm text-gray-700">Address</div>
        <textarea value={data.address} onChange={e => onChange("address", e.target.value)} rows={2} className="mt-1 w-full border rounded p-2 text-sm" />
      </label>
    </div>
  );
}

function StepEducation({ entries, onChange, add, remove }) {
  return (
    <div className="space-y-4">
      <div className="text-sm text-gray-600">Add one or more education entries</div>

      {entries.map((e, idx) => (
        <div key={idx} className="border rounded p-3">
          <div className="flex justify-between items-center">
            <div className="text-sm font-medium">Education #{idx + 1}</div>
            <div className="flex gap-2">
              <button onClick={() => remove(idx)} className="text-xs px-2 py-1 border rounded text-red-600">Remove</button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
            <input value={e.degree} onChange={ev => onChange(idx, "degree", ev.target.value)} placeholder="Degree (B.Tech, MSc...)" className="border p-2 rounded text-sm" />
            <input value={e.college} onChange={ev => onChange(idx, "college", ev.target.value)} placeholder="College / University" className="border p-2 rounded text-sm" />
            <input value={e.graduationYear} onChange={ev => onChange(idx, "graduationYear", ev.target.value)} placeholder="Graduation Year" className="border p-2 rounded text-sm" />
            <input value={e.percentage} onChange={ev => onChange(idx, "percentage", ev.target.value)} placeholder="Percentage / CGPA" className="border p-2 rounded text-sm" />
            <input value={e.branch} onChange={ev => onChange(idx, "branch", ev.target.value)} placeholder="Branch / Major" className="border p-2 rounded text-sm col-span-1 sm:col-span-2" />
          </div>
        </div>
      ))}

      <div>
        <button onClick={add} className="px-3 py-2 bg-emerald-600 text-white rounded text-sm">Add Education</button>
      </div>
    </div>
  );
}

function StepExperience({ entries, onChange, add, remove }) {
  return (
    <div className="space-y-4">
      <div className="text-sm text-gray-600">Add professional experience entries (optional)</div>
      {entries.map((e, idx) => (
        <div key={idx} className="border rounded p-3">
          <div className="flex justify-between items-center">
            <div className="text-sm font-medium">Experience #{idx + 1}</div>
            <div className="flex gap-2">
              <button onClick={() => remove(idx)} className="text-xs px-2 py-1 border rounded text-red-600">Remove</button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
            <input value={e.yearsOfExperience} onChange={ev => onChange(idx, "yearsOfExperience", ev.target.value)} placeholder="Years (e.g., 2)" className="border p-2 rounded text-sm" />
            <input value={e.company} onChange={ev => onChange(idx, "company", ev.target.value)} placeholder="Company" className="border p-2 rounded text-sm" />
            <input value={e.title} onChange={ev => onChange(idx, "title", ev.target.value)} placeholder="Job Title" className="border p-2 rounded text-sm" />
            <input value={e.currentCTC} onChange={ev => onChange(idx, "currentCTC", ev.target.value)} placeholder="Current CTC" className="border p-2 rounded text-sm" />
            <input value={e.expectedCTC} onChange={ev => onChange(idx, "expectedCTC", ev.target.value)} placeholder="Expected CTC" className="border p-2 rounded text-sm" />
            <input value={(e.skills || []).join(", ")} onChange={ev => onChange(idx, "skills", ev.target.value.split(",").map(s => s.trim()))} placeholder="Skills (comma separated)" className="border p-2 rounded text-sm col-span-1 sm:col-span-2" />
          </div>
        </div>
      ))}

      <div>
        <button onClick={add} className="px-3 py-2 bg-emerald-600 text-white rounded text-sm">Add Experience</button>
      </div>
    </div>
  );
}

function StepAvailability({ availability, onChange, onFilePick, removeFile }) {
  return (
    <div className="space-y-4">
      <div className="text-sm text-gray-600">Availability & Upload</div>

      <div className="flex items-center gap-3">
        <div className="text-sm text-gray-700">Are you currently serving a notice period?</div>
        <div className="flex gap-2">
          <label className={`px-3 py-1 rounded-full cursor-pointer border ${availability.noticePeriod === "Yes" ? "bg-emerald-600 text-white" : "bg-white text-gray-700"}`}>
            <input type="radio" className="hidden" checked={availability.noticePeriod === "Yes"} onChange={() => onChange("noticePeriod", "Yes")} />
            Yes
          </label>
          <label className={`px-3 py-1 rounded-full cursor-pointer border ${availability.noticePeriod === "No" ? "bg-emerald-600 text-white" : "bg-white text-gray-700"}`}>
            <input type="radio" className="hidden" checked={availability.noticePeriod === "No"} onChange={() => onChange("noticePeriod", "No")} />
            No
          </label>
        </div>
      </div>

      {availability.noticePeriod === "Yes" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <input value={availability.noticePeriodDuration} onChange={e => onChange("noticePeriodDuration", e.target.value)} placeholder="Notice period (days)" className="border p-2 rounded text-sm" />
          <input value={availability.joiningDate} onChange={e => onChange("joiningDate", e.target.value)} placeholder="Earliest Joining Date (YYYY-MM-DD)" className="border p-2 rounded text-sm" />
        </div>
      )}

      <div>
        <div className="text-sm text-gray-700 mb-2">Upload Resume (PDF / DOC) *</div>
        {!availability.resumeFileMeta ? (
          <div className="flex items-center gap-2">
            <label className="flex items-center gap-2 cursor-pointer px-3 py-2 border rounded bg-white hover:bg-gray-50">
              <HiOutlineUpload />
              <span className="text-sm">Choose file</span>
              <input type="file" accept=".pdf,.doc,.docx" onChange={(e) => onFilePick(e, "resume")} className="hidden" />
            </label>
            <span className="text-sm text-gray-500">Max 10MB</span>
          </div>
        ) : (
          <div className="flex items-center justify-between border rounded p-2">
            <div className="text-sm">{availability.resumeFileMeta.name}</div>
            <div className="flex gap-2">
              <button onClick={() => removeFile("resume")} className="text-xs px-2 py-1 border rounded text-red-600">Remove</button>
            </div>
          </div>
        )}
      </div>

      <div>
        <div className="text-sm text-gray-700 mb-2">Upload Portfolio (optional)</div>
        {!availability.portfolioFileMeta ? (
          <div className="flex items-center gap-2">
            <label className="flex items-center gap-2 cursor-pointer px-3 py-2 border rounded bg-white hover:bg-gray-50">
              <HiOutlineUpload />
              <span className="text-sm">Choose file</span>
              <input type="file" accept=".pdf,.doc,.docx,.zip" onChange={(e) => onFilePick(e, "portfolio")} className="hidden" />
            </label>
            <span className="text-sm text-gray-500">Max 20MB</span>
          </div>
        ) : (
          <div className="flex items-center justify-between border rounded p-2">
            <div className="text-sm">{availability.portfolioFileMeta.name}</div>
            <div className="flex gap-2">
              <button onClick={() => removeFile("portfolio")} className="text-xs px-2 py-1 border rounded text-red-600">Remove</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function StepReview({ form, job }) {
  return (
    <div className="space-y-4">
      <div className="text-sm text-gray-700">Review your submission</div>

      <div className="border rounded p-3">
        <div className="text-sm font-medium mb-2">Personal</div>
        <div className="text-sm"><strong>Name:</strong> {form.personal.fullName}</div>
        <div className="text-sm"><strong>Email:</strong> {form.personal.email}</div>
        <div className="text-sm"><strong>Phone:</strong> {form.personal.phone}</div>
        <div className="text-sm"><strong>Role:</strong> {form.personal.role}</div>
        <div className="text-sm"><strong>Location:</strong> {form.personal.city}, {form.personal.country}</div>
      </div>

      <div className="border rounded p-3">
        <div className="text-sm font-medium mb-2">Education</div>
        {form.education.map((e, i) => (
          <div key={i} className="text-sm mb-2">
            <div><strong>{e.degree}</strong> — {e.college} ({e.graduationYear})</div>
            <div className="text-xs text-gray-500">{e.branch} • {e.percentage}</div>
          </div>
        ))}
      </div>

      <div className="border rounded p-3">
        <div className="text-sm font-medium mb-2">Experience</div>
        {form.experience.map((ex, i) => (
          <div key={i} className="text-sm mb-2">
            <div><strong>{ex.title}</strong> — {ex.company}</div>
            <div className="text-xs text-gray-500">{ex.yearsOfExperience} years • Current: {ex.currentCTC} • Expected: {ex.expectedCTC}</div>
            <div className="text-xs text-gray-500">Skills: {(ex.skills || []).join(", ")}</div>
          </div>
        ))}
      </div>

      <div className="border rounded p-3">
        <div className="text-sm font-medium mb-2">Availability & Files</div>
        <div className="text-sm">Notice period: {form.availability.noticePeriod}{form.availability.noticePeriod === "Yes" ? ` — ${form.availability.noticePeriodDuration} days` : ""}</div>
        <div className="text-sm">Earliest joining date: {form.availability.joiningDate}</div>
        <div className="text-sm">Resume: {form.availability.resumeFileMeta?.name ?? "Not uploaded"}</div>
        <div className="text-sm">Portfolio: {form.availability.portfolioFileMeta?.name ?? "Not uploaded"}</div>
      </div>
    </div>
  );
}

/* ---------------------------
  LocalStorage helpers
----------------------------*/
function saveDraft(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify({ ts: Date.now(), ...data }));
  } catch (e) {
    console.warn("Failed to save draft:", e);
  }
}

function loadDraft(key) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    // remove ts
    const { ts, ...rest } = parsed;
    return rest;
  } catch (e) {
    return null;
  }
}
