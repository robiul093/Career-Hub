import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {

    const [jobs, setJob] = useState([]);
    const [dataLength, setDataLength] = useState([4]);

    useEffect(() =>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJob(data));
    },[])
    
    return (
        <div>
            <h2 className="text-4xl text-[#1A1919] font-bold text-center mb-4">Featured Jobs</h2>
            <p className='text-center font-medium text-[#757575]'>Explore thousands of job opportunities with all the information you need. Its your future</p>

            <div className="lg:grid grid-cols-2 gap-6">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>

            <div className={dataLength === jobs.length && 'hidden' }>
                <button 
                onClick={() => setDataLength(jobs.length)}
                className="btn btn-primary text-center text-lg font-bold my-8">Show All Data</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;