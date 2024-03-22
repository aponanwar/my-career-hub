import userimage from "../../assets/images/user.png";

const Banner = () => {
  return (
    <div className="flex w-10/12 mx-auto items-center mb-5">
      <div className="flex w-5/12 flex-col space-y-5">
        <div>
          <h2 className="text-6xl font-extrabold mb-5">
            One Step <br></br> Closer To Your{" "}
            <span className="text-blue-500">Dream Job</span>
          </h2>
        </div>
        <div>
          <p className="mb-10">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
        </div>
        <div>
          <p className="p-5 bg-blue-500 inline rounded-md mt-6 text-white font-bold">Get Started</p>
        </div>
      </div>
      <div className="w-7/12">
        <img src={userimage} alt="" srcSet="" />
      </div>
    </div>
  );
};

export default Banner;
