import { useEffect, useState } from "react";
import Job from "../Jobs/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);

  const [datalength, setDatalength] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div className="text-center">
      <h2 className="text-5xl font-bold text-center'">
        Featured Jobs: {jobs.length}
      </h2>
      <p>
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid grid-cols-2 gap-6 mb-10">
        {jobs.slice(0, datalength).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>

      <div className={datalength === jobs.length && "hidden"}>
        <button
          onClick={() => setDatalength(jobs.length)}
          className="btn bg-blue-500 text-2xl text-white mb-10"
        >
          See All Jobs
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
