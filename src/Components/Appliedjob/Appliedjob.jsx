const Appliedjob = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;

  return (
    <div className="flex items-center border-2 border-blue-400 justify-between">
      <div className="border-2 rounded-md bg-gray-300">
        <div className="p-10">
          <img src={logo} alt="" srcSet="" />
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <div>
          <h2 className="text-xl font-bold">{job_title}</h2>
        </div>
        <div>
          <h2>{company_name}</h2>
        </div>
        <div className="flex gap-5">
          <div className="border-2 px-2 py-1 border-blue-300 text-blue-500">
            <button type="button">{remote_or_onsite}</button>
          </div>
          <div className="border-2 px-2 py-1 border-blue-300 text-blue-500">
            <button type="button">{job_type}</button>
          </div>
        </div>
        <div className="flex gap-5">
          <div>
            <h2>{location}</h2>
          </div>
          <div>
            <h2>{salary}</h2>
          </div>
        </div>
      </div>
      <div>
        <h2>
          <p className="p-3 border-2 bg-blue-500 text-white mr-10">View Details</p>
        </h2>
      </div>
    </div>
  );
};

export default Appliedjob;
