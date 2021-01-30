import React, { useState, useEffect, Link } from 'react';
import { Main } from '../components';

export default function MainContainer() {

    const [jobs, setJobs] = useState([]);
    console.log(jobs);

                const getJobList = async() => {
                    const LIST_OF_JOBS_URL = "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=ruby&page=1"
                    const res = await fetch(LIST_OF_JOBS_URL);
                    const data = await res.json();
                    setJobs(data);
                }
                
    useEffect(() => {
        getJobList();
    }, [])

    return (
        <Main>
            <Main.Section>
            {jobs.map((job) => {
                const days = new Date(job.created_at).toDateString;
                return (
                    <Main.Link to={`/job/${job.id}`} key={job.id}>
                            <Main.Card key={job.id}>
                                <Main.Logo src={job.company_logo} alt="job"/> 
                                <Main.Info>
                                    <div>{job.company}</div>
                                    <div>{job.title}</div>
                                    <Main.Button>{job.type}</Main.Button>
                                </Main.Info>
                                <div>
                                    <div>{job.location}</div>
                                    <div>{days}</div>
                                    {/* <div>{new Date(job.created_at).toDateString}</div> */}
                                </div>
                            </Main.Card>
                    </Main.Link>
                )
            })}
            </Main.Section>
        </Main>
    )
}