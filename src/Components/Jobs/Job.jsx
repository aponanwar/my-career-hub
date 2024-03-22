import { IoLocationOutline } from "react-icons/io5";
import { FaSackDollar } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Job = ({ job }) => {
    const {
      id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure className="flex">
        <img className="mt-10" src={logo} alt="Shoes" />
      </figure>
      <div className="card-body space-y-4 ml-5 mb-5">
        <h2 className="card-title">{job_title}</h2>
        <p className="text-2xl flex">{company_name}</p>
        <div className="text-[#7e90fe] text-2xl flex">
          <button className="px-5 py-2 font-bold border-2 rounded-md border-blue-300 mr-4">
            {remote_or_onsite}
          </button>
          <button className="px-5 py-2 font-bold border-2 rounded-md border-blue-300 mr-4">
            {job_type}
          </button>
        </div>
        <div className="flex gap-8 text-xl">
          <div className="flex items-center gap-2">
            <IoLocationOutline />
            {location}
          </div>
          <div className="flex items-center gap-2">
            <FaSackDollar />
            {salary}
          </div>
        </div>
        <div className="card-actions">
          <Link to={`/job/${id}`}>
            <button className="btn bg-blue-500 text-xl px-4 py-2 text-white">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Job;
