import React from 'react';
import './app.css';

import { currentTeams, previosTeams } from "./Clubs.js"

function ClubsSection() {
    return (
        <div id='clubs' className='ClubsSection'>
            <h2 className='h2OfClubsSection'>Clubs:</h2>

            {/* Current Teams */}
            <div className='currentTeamsLine mb-3'>
                {
                    currentTeams.map(
                        (x, i) => {
                            return (
                                <div className='currentTeamsDiv my-5 mx-3 px-2 py-4' key={i}>
                                    <img className='mb-3' src={x?.imgLogo} alt="" />
                                    <h2 className='headingOfCurrentTeams'>{x?.teamName}</h2>
                                    <p className='mt-3 fs-5'>{x?.dateOfTeam}</p>
                                </div>
                            )
                        }
                    )
                }
            </div>

            {/* Previos Teams */}
            <div className='previousTeamsLine mb-5'>
                {
                    previosTeams.map(
                        (x, i) => {
                            return (
                                <div className='previosTeamsDiv mx-3 my-3 py-5 px-4' key={i}>
                                    <img src={x?.imgLogo} alt="" />
                                    <h3 className='headingOfPreviosTeams mt-2'>{x?.teamName}</h3>
                                    <p className='mt-3 fs-5'>{x?.dateOfTeam}</p>
                                </div>
                            )
                        }
                    )
                }
            </div>

        </div>
    )
}

export default ClubsSection