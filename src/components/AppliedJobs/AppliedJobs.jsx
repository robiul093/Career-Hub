import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localStorage";
import AppliedJob from "../AppliedJob/AppliedJob";
import { FaAngleDown } from "react-icons/fa";


const AppliedJobs = () => {

    const jobs = useLoaderData();
    const [appliedJob, setAppliedJob] = useState([]);
    const [displayAllJob, setDisplayAllJob] = useState([]);


    const handelJobsFilter = filter =>{
        if(filter === 'all'){
            setDisplayAllJob(appliedJob)
        }
        else if(filter === 'remote'){
            const remoteJobs = appliedJob.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayAllJob(remoteJobs)
        }
        else if(filter === 'Onsite'){
            const onsiteJob = appliedJob.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayAllJob(onsiteJob)
        }
    }
    
    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length) {

            const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id))
            // console.log(jobsApplied);
            setAppliedJob(jobsApplied)
            setDisplayAllJob(jobsApplied)
        }
    }, [])

    return (
        <div>
            <h2 className="text-3xl text-[#1A1919] font-bold text-center my-14">Job I Applied</h2>

            <div className="flex justify-end mb-8">
                <details className="dropdown">
                    <summary className="m-1 btn">Filter By <FaAngleDown />
                    </summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={() => handelJobsFilter('all')}><a>All</a></li>
                        <li onClick={() => handelJobsFilter('remote')}><a>Remote</a></li>
                        <li onClick={() => handelJobsFilter('Onsite')}><a>On Site</a></li>
                    </ul>
                </details>
            </div>

            <div >
                {
                    displayAllJob.map(job => <AppliedJob key={job.id} job={job}></AppliedJob>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;