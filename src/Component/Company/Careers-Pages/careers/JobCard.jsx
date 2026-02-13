import { TfiBag } from "react-icons/tfi";
import { formatEmploymentType, getJobLevel } from "./helpers";
import { MdWatchLater } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function JobCard({ job }) {
  const employment = formatEmploymentType(job.employments_types_detail?.name);
  const team = job.teams_detail?.name || "Unknown";
  const experience = getJobLevel(job.Experience_required);
  const navigate = useNavigate();

  function openJob() {
    navigate(`/job/${job.job_id}`, { state: { job } });
  }

  return (
    <div className="bg-white border rounded-2xl p-5 shadow-sm hover:shadow-lg transition flex gap-8 items-start">

      {/* LOGO */}
      <div className="w-[65px] h-[65px] rounded-full bg-gray-100 flex items-center justify-center">
        <span className="text-3xl font-bold text-green-600">
          {job.title.charAt(0)}
        </span>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1">
        <h3 className="font-semibold text-[18px] text-gray-900">{job.title}</h3>
        <p className="text-gray-500 text-sm">{team}</p>

        <div className="flex items-center gap-5 mt-2 text-gray-600 text-sm">
          <div className="flex items-center gap-1">
            <span>
              <MdWatchLater />

            </span>
            <span>{employment}</span>
          </div>

          <div className="flex items-center gap-1">
            <span><TfiBag />
            </span>
            <span>{experience}</span>
          </div>
        </div>

        {/* SKILLS */}
        <div className="flex gap-2 flex-wrap mt-3">
          {job.skills_details?.map(skill => (
            <span
              key={skill.id}
              className="bg-gray-200 px-3 py-1 text-xs rounded-full text-gray-700"
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="text-right w-[180px]">
        <button
          onClick={openJob}
          className="border border-gray-300 px-6 py-2 rounded-full font-medium hover:bg-gray-100"
        >
          Apply Job
        </button>


        <div className="mt-3 text-sm font-medium text-gray-600">
          {Math.floor(Math.random() * 80) + 20} Candidates Applied
        </div>

        <div className="w-full h-[6px] bg-gray-200 rounded-full mt-2">
          <div
            className="h-full bg-green-600 rounded-full"
            style={{ width: `${Math.floor(Math.random() * 30) }%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
