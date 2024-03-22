import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id == idInt);

    console.log(job, id);
    
    const handleApplyJob = () => {
        toast('you have appied succesfully');
    }


  return (
    <div>
      <h2 className="text-xl font-bold text-center mb-5">
        Job Details: {job.job_title}
      </h2>
      <div className="grid gap-4 md:grid-cols-4">
        <div className="border md:col-span-3 space-y-8 p-10">
          <h2>
            <span className="font-bold">job_description:</span>
            {job.job_description}
          </h2>
          <h2>
            <span className="font-bold">job_responsibility:</span>
            {job.job_responsibility}
          </h2>
          <h2>
            <span className="font-bold">educational_requirements:</span>
            {job.educational_requirements}
          </h2>
          <h2>
            <span className="font-bold">experiences: </span>
            {job.experiences}
          </h2>
        </div>
        <div className="border bg-blue-100">
          <div className="space-y-2 mb-5 p-10">
            <h2 className="text-xl font-bold">Job Details</h2>
            <hr></hr>
            <h2>
              <span className="font-bold">Salary: </span>
              {job.salary}
            </h2>
            <h2>
              <span className="font-bold">Job title: </span>
              {job.job_title}
            </h2>

            <h2 className="text-xl font-bold mt-5">Contact Information</h2>
            <hr />

            <h2>
              <span className="font-bold">Phone:</span>
              {job.contact_information.phone}
            </h2>
            <h2>
              <span className="font-bold">Email:</span>
              {job.contact_information.email}
            </h2>
            <h2>
              <span className="font-bold">Address:</span>
              {job.contact_information.address}
            </h2>
          </div>

          <div>
            <button
              type="button" onClick={handleApplyJob}
              
              className="btn w-full bg-blue-500 text-white text-2xl"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;
