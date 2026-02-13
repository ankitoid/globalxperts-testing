export default function JobFilters({
  employmentTypes,
  categories,
  jobLevel,
  setJobLevel,
  employmentType,
  setEmploymentType,
  category,
  setCategory,
  jobs
}) {
  // ⭐ Merge API categories + Default categories
  const allCategories = Array.from(
    new Set([ ...categories])
  );

  return (
    <aside className="bg-[#F8FFFA] border border-gray-200 rounded-2xl p-6 h-fit">

      {/* ─── EMPLOYMENT TYPE ─────────────────────── */}
      <h3 className="font-semibold text-gray-900 mb-4 text-[15px]">Type of Employment</h3>

      <div className="space-y-3 mb-6">
        {employmentTypes.map(type => {
          const count =
            type === "All"
              ? jobs.length
              : jobs.filter(j => j.employments_types_detail?.name === type).length;

          return (
            <label key={type} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                className="accent-green-600"
                checked={employmentType === type}
                onChange={() => setEmploymentType(type)}
              />
              <span className="text-sm text-gray-700">
                {type} ({count})
              </span>
            </label>
          );
        })}
      </div>

      <hr className="my-4 border-gray-300" />

      {/* ─── JOB CATEGORIES ─────────────────────── */}
      <h3 className="font-semibold text-gray-900 mb-4 text-[15px]">Job Categories</h3>

      <div className="space-y-3 mb-6">
        {allCategories.map(c => {
          const count =
            c === "All"
              ? jobs.length
              : jobs.filter(j => j.teams_detail?.name === c).length || 0;

          return (
            <label key={c} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                className="accent-green-600"
                checked={category === c}
                onChange={() => setCategory(c)}
              />
              <span className="text-sm text-gray-700">
                {c} ({count})
              </span>
            </label>
          );
        })}
      </div>

      <hr className="my-4 border-gray-300" />

      {/* ─── JOB LEVEL ─────────────────────── */}
      <h3 className="font-semibold text-gray-900 mb-4 text-[15px]">Job Level</h3>

      <div className="space-y-3">
        {[
          "All",
          "Fresher (0-1)",
          "Entry Level (1-3)",
          "Mid Level (3-5)",
          "Senior Level (5+)"
        ].map(level => (
          <label key={level} className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              className="accent-green-600"
              checked={jobLevel === level}
              onChange={() => setJobLevel(level)}
            />
            <span className="text-sm text-gray-700">{level}</span>
          </label>
        ))}
      </div>

    </aside>
  );
}
