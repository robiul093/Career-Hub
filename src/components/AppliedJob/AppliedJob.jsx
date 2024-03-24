import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const AppliedJob = ({ job }) => {

    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;

    return (
        <div className="card card-compact bg-base-100 shadow-xl p-5 my-4">
            <div className=" flex justify-between items-center">
                <div className="flex gap-5 items-center">
                    <figure><img className="w-[150px] " src={logo} alt="Shoes" /></figure>
                    <div>
                        <h2 className="card-title">{job_title}</h2>
                        <p className="text-lg font-semibold text-[#757575] "> {company_name} </p>
                        <div className="flex gap-6">
                            <button className="btn bg-transparent text-[#7E90FE] font-bold border-2 border-[#7E90FE] px-7 py-2">{remote_or_onsite}</button>
                            <button className="btn bg-transparent text-[#7E90FE] font-bold border-2 border-[#7E90FE]">{job_type}</button>
                        </div>

                        <div className="flex gap-4 text-lg font-semibold text-[#757575] ">
                            <div className="flex items-center gap-3">
                                <IoLocationOutline />
                                <p>{location}</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <AiOutlineDollarCircle />
                                <p>salary: {salary}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-actions justify-end">
                    <Link>
                        <button className="btn btn-primary bg-[#9873FF] px-8 py-2 text-white font-bold border-0 text-lg ">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AppliedJob;