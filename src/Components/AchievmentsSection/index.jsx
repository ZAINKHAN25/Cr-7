import React from 'react';
import "./app.css";

import achievements from './Achievments.js';

function AchievmentSection() {
  return (
    <div id="achiements" className='AchievmentSection'>
      <h2 className='h2OfAchievmentSection'>Achievments:</h2>

      <div className="achiementsDiv">
        {
          achievements.map(
            (x, i) => {
              return (
                <div className='singleAchiement my-5 mx-3 px-2 py-4' key={i}>
                  <img className='mb-3' src={x?.imgOfAchievements} alt="" />
                  <h3 className='headingOfAchievements'>{x?.achievementName}</h3>
                  <p className='mt-3 fs-5'>{x?.quantityOfAchievments}</p>
                </div>
              )
            }
          )
        }
      </div>
      <a className='showMoreBtn px-5 py-2 mt-5' target='blank' href="https://en.wikipedia.org/wiki/List_of_career_achievements_by_Cristiano_Ronaldo">Show More</a>
    </div>
  )
}

export default AchievmentSection;