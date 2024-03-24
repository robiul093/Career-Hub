import { Link, useLoaderData, useParams } from "react-router-dom";
import { AiTwotoneDollarCircle } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localStorage";

const JobDetails = () => {

    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id == idInt)
    // console.log(jobs, job);

    const handelApplyJob = () => {

        saveJobApplication(idInt)
        
        toast("Successfully  applied!");
    }

    return (
        <div>
            <h2 className="text-3xl text-[#1A1919] font-bold text-center my-14">Job Details</h2>

            <div className="grid gap-6 grid-cols-6">
                <div className="col-span-4">
                    <h2 className="text-[#1A1919] font-bold mb-6">Job Description: <span className="text-[#757575] font-medium text-sm">{job.job_description}</span>
                    </h2>

                    <h2 className="text-[#1A1919] font-bold mb-6">Job Responsibility: <span className="text-[#757575] font-medium text-sm">{job.job_responsibility}</span>
                    </h2>

                    <h2 className="text-[#1A1919] font-bold mb-6">Educational Requirements: <br /><span className="text-[#757575] font-medium text-sm mt-3">{job.educational_requirements}</span>
                    </h2>

                    <h2 className="text-[#1A1919] font-bold mb-6">Experiences: <br /><span className="text-[#757575] font-medium text-sm mt-3">{job.experiences}</span>
                    </h2>
                </div>

                <div className="col-span-2">
                    <div className="bg-[#9873FF33] p-4 rounded-xl">
                        <h2 className="text-xl font-bold text-[#1A1919] mb-2">Job Details</h2>

                        <div className="flex justify-start items-center gap-1 mb-4">
                            <AiTwotoneDollarCircle className="text-2xl text-[#7E90FE] "></AiTwotoneDollarCircle>
                            <h4 className="text-xl font-semibold text-[#474747] " >Sallery: <span className="text-xl text-[#757575] font-medium ">{job.salary}</span></h4>
                        </div>

                        <div className="flex justify-start items-start gap-1 mb-4">
                            <IoCalendarOutline className="text-2xl text-[#7E90FE]"></IoCalendarOutline>
                            <h4 className="text-xl font-semibold text-[#474747] " >Job Title: <span className="text-xl text-[#757575] font-medium ">{job.job_title}</span></h4>
                        </div>

                        {/* phone */}
                        <div className="flex justify-start items-start gap-1 mb-4">
                            <IoCalendarOutline className="text-2xl text-[#7E90FE]"></IoCalendarOutline>
                            <h4 className="text-xl font-semibold text-[#474747] " >Phone: <span className="text-xl text-[#757575] font-medium ">{job.contact_information.phone}</span></h4>
                        </div>

                        <div className="flex justify-start items-start gap-1 mb-4">
                            <IoCalendarOutline className="text-2xl text-[#7E90FE]"></IoCalendarOutline>
                            <h4 className="text-xl font-semibold text-[#474747] " >Email: <span className="text-xl text-[#757575] font-medium ">{job.contact_information.email}</span></h4>
                        </div>

                        <div className="flex justify-start items-start gap-1 mb-4">
                            <IoCalendarOutline className="text-3xl text-[#7E90FE]"></IoCalendarOutline>
                            <h4 className="text-xl font-semibold text-[#474747] " >Address: <span className="text-xl text-[#757575] font-medium ">{job.contact_information.address}</span></h4>
                        </div>

                        <h2 className="text-xl font-bold text-[#1A1919] mb-6 mt-8">Contact Information</h2>

                    </div>

                    <Link ><button onClick={handelApplyJob} className="text-white text-xl font-extrabold bg-[#7E90FE] px-12 py-3 w-full rounded-xl my-7">Apply Now</button></Link>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;