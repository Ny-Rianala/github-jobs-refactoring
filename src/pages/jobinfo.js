import React, { useContext } from "react";
import { useParams } from "react-router";
import { Context } from "../context"; 


export default function JobInfo() {
    const { jobs } = useContext(Context);
    console.log(jobs);
    const { jobInfo } = useParams();
    console.log(jobInfo);

    const job = jobs !== [] && jobs.find(job => job.id == jobInfo);

    return (
        <div>
            <p>hello</p>
            <img src={job?.company_logo}/> 
            <div>{job?.company}</div>
            <p>{job?.description}</p>
        </div>
    )
}