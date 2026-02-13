import React, { useEffect, useState } from "react";
import JobCard from "./JobCard";
import JobFilters from "./JobFilters";
import { getJobLevel } from "./helpers";

const API_URL = "http://3.85.242.139:8003/api/create_job/public/jobs/";

export default function CareersPage() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [query, setQuery] = useState("");
  const [employmentType, setEmploymentType] = useState("All");
  const [category, setCategory] = useState("All");
  const [jobLevel, setJobLevel] = useState("All");

  const [categories, setCategories] = useState([]);
  const [employmentTypes, setEmploymentTypes] = useState([]);

  const [page, setPage] = useState(1);
  const PAGE_SIZE = 10;

  useEffect(() => setPage(1), [query, employmentType, category, jobLevel]);

  useEffect(() => {
    let cancelled = false;

    async function loadJobs() {
      setLoading(true);
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("Failed job fetch");
        const json = await res.json();

        const arr = json?.results?.data ?? [];
        arr.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

        if (!cancelled) {
          setJobs(arr);

          const cat = [...new Set(arr.map(j => j.teams_detail?.name).filter(Boolean))];
          setCategories(["All", ...cat]);

          const emp = [...new Set(arr.map(j => j.employments_types_detail?.name).filter(Boolean))];
          setEmploymentTypes(["All", ...emp]);
        }
      } catch (err) {
        if (!cancelled) setError(err.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadJobs();
    return () => (cancelled = true);
  }, []);

  const filteredJobs = jobs.filter(job => {
    const text = query.toLowerCase();

    if (employmentType !== "All" && job.employments_types_detail?.name !== employmentType)
      return false;

    if (category !== "All" && job.teams_detail?.name !== category)
      return false;

    if (jobLevel !== "All" && getJobLevel(job.Experience_required) !== jobLevel)
      return false;

    if (
      text &&
      !(
        job.title?.toLowerCase().includes(text) ||
        (job.skills_details || []).some(skill =>
          skill.name.toLowerCase().includes(text)
        )
      )
    )
      return false;

    return true;
  });

  const paginated = filteredJobs.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const totalPages = Math.ceil(filteredJobs.length / PAGE_SIZE);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1400px] mx-auto px-6 py-10">

        {/* HEADER */}
        <div className="flex items-center justify-between">
          <h1 className="text-[22px] font-semibold text-gray-900">Filter By</h1>

          {/* <p className="text-gray-700 text-[15px]">
            All <span className="font-semibold">{jobs.length}</span> Jobs Found
          </p> */}

          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Sort:</span>
            <select className="border px-3 py-1 rounded-lg text-sm">
              <option>Newly Uploaded</option>
            </select>
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 mt-8">

          {/* FILTER PANEL */}
          <JobFilters
            employmentTypes={employmentTypes}
            categories={categories}
            jobLevel={jobLevel}
            setJobLevel={setJobLevel}
            employmentType={employmentType}
            setEmploymentType={setEmploymentType}
            category={category}
            setCategory={setCategory}
            jobs={jobs}
          />

          {/* JOB LIST */}
          <div className="lg:col-span-3 space-y-6">
            <input
              placeholder="Search job title or skills..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              className="w-full border px-4 py-2 rounded-lg shadow-sm focus:ring"
            />

            {loading && <div className="text-center py-8">Loading...</div>}
            {error && <div className="text-center text-red-500 py-8">{error}</div>}

            {!loading && paginated.length === 0 && (
              <div className="text-center text-gray-500 py-10">No jobs found</div>
            )}

            {paginated.map(job => (
              <JobCard key={job.id} job={job} />
            ))}

            {/* PAGINATION */}
            <div className="flex justify-center gap-4 pt-6">
              <button
                disabled={page === 1}
                onClick={() => setPage(p => p - 1)}
                className={`px-4 py-2 rounded-lg border ${
                  page === 1 ? "opacity-40 cursor-not-allowed" : "bg-gray-800 text-white"
                }`}
              >
                ← Previous
              </button>

              <span className="text-gray-700">
                Page {page} of {totalPages}
              </span>

              <button
                disabled={page === totalPages}
                onClick={() => setPage(p => p + 1)}
                className={`px-4 py-2 rounded-lg border ${
                  page === totalPages
                    ? "opacity-40 cursor-not-allowed"
                    : "bg-gray-800 text-white"
                }`}
              >
                Next →
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
