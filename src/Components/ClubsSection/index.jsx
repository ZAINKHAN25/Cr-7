import React from 'react';
import './app.css';

import { currentTeams, previosTeams } from "./Clubs.js"

function ClubsSection() {
    return (
        <div className='ClubsSection'>
            <h2 className='h2OfClubsSection'>Clubs:</h2>

            {/* Current Teams */}
            <div className='currentTeamsLine mb-5'>
                {
                    currentTeams.map(
                        (x, i) => {
                            return (
                                <div className='currentTeamsDiv mx-5' key={i}>
                                    <img src={x?.imgLogo} alt="" />
                                    <h2 className='headingOfCurrentTeams'>{x?.teamName}</h2>
                                    <p className='mt-3 fs-4'>{x?.dateOfTeam}</p>
                                </div>
                            )
                        }
                    )
                }
            </div>
            {/* Previos Teams */}
            {
                previosTeams.map(
                    (x, i) => {
                        return (
                            <div className='previosTeamsDiv' key={i}>
                                <img src={x?.imgLogo} alt="" />
                                <h2>{x?.teamName}</h2>
                                <p>{x?.dateOfTeam}</p>
                            </div>
                        )
                    }
                )
            }


        </div>
    )
}

export default ClubsSection