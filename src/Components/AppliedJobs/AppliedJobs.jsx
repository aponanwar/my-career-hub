import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localstorage";
import Appliedjob from "../Appliedjob/Appliedjob";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedjobs, setAppliedjobs] = useState([]);
  const [displayjobs, setDisplayjobs] = useState([]);

  const handleJobsFilter = (filter) => {
    if (filter === "all") {
      setDisplayjobs(appliedjobs);
    } else if (filter === "remote") {
      const remoteJobs = appliedjobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayjobs(remoteJobs);
    } else if (filter === "onsite") {
      const onsiteJobs = appliedjobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayjobs(onsiteJobs);
    }
  };

  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    if (jobs.length > 0) {
      // const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id))

      const jobsApplied = [];
      for (const id of storedJobIds) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          jobsApplied.push(job);
        }
      }

      setAppliedjobs(jobsApplied);
      setDisplayjobs(jobsApplied);
      //   console.log(jobs, storedJobIds, jobsApplied);
    }
  }, []);

  return (
    <div>
      <h2 className="text-center font-bold mt-10 mb-5">
        Applied JOBS: {appliedjobs.length}
      </h2>
      <div className="text-center">
        <details className="dropdown">
          <summary className="m-1 btn">Filter By</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li onClick={() => handleJobsFilter("all")}>
              <a>All</a>
            </li>
            <li onClick={() => handleJobsFilter("remote")}>
              <a>Remote</a>
            </li>
            <li onClick={() => handleJobsFilter("onsite")}>
              <a>OnSite</a>
            </li>
          </ul>
        </details>
      </div>

      <ul className="border p-5 gap-3 text-center space-y-5">
        {displayjobs.map(job => <Appliedjob key={job.id} job={job}></Appliedjob>)}
      </ul>
    </div>
  );
};

export default AppliedJobs;
