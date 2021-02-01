import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { Main } from '../components';
import { Context } from "../context";
import * as ROUTES from '../constants/routes';

export default function MainContainer() {
    const { jobs } = useContext(Context);

    return (
        <Main>
            <Main.Section>
            {jobs.map((job) => {
                // const days = new Date(job.created_at).toDateString;
                return (
                    <Main.Wrapper key={job.id}>
                            <Link to={`/${job.id}`}>
                                <Main.Card>
                                    <Main.Logo src={job.company_logo} alt="job"/> 
                                    <Main.Info>
                                        <div>{job.company}</div>
                                        <div>{job.title}</div>
                                        <Main.Button>{job.type}</Main.Button>
                                    </Main.Info>
                                    <div>
                                        <div>{job.location}</div>
                                        {/* <div>{days}</div> */}
                                        {/* <div>{new Date(job.created_at).toDateString}</div> */}
                                    </div>
                                </Main.Card>
                            </Link> 
                    </Main.Wrapper>
                )
            })}
            </Main.Section>
        </Main>
    )
}