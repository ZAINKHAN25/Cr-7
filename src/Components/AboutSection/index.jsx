import React from 'react';
import "./app.css"

function AboutSection() {
    return (
        <div className='AboutSection mt-5' id='about'>
            <h2>About Ronaldo:</h2>
            <span className='spanOfAbout'>Cristiano Ronaldo dos Santos Aveiro GOIH ComM is a Portuguese professional footballer who plays as a forward for and captains both Saudi Pro League club Al Nassr and the Portugal national team.</span>

            <div className="subAbout mt-5">

                <div className="subLineOfSubAbout">
                    <span className='FirstSubLineOfSA'>Born:</span>
                    <span className='SecondSubLineOfSA'>February 5, 1985 (age 39 years), Hospital Dr. Nélio Mendonça, Funchal, Portugal.</span>
                </div>
                <div className="subLineOfSubAbout">
                    <span className='FirstSubLineOfSA'>Current teams:</span>
                    <span className='SecondSubLineOfSA'>Al-Nassr FC (#7 / Forward), Portugal national football team (#7 / Forward).</span>
                </div>
                <div className="subLineOfSubAbout">
                    <span className='FirstSubLineOfSA'>Children:</span>
                    <span className='SecondSubLineOfSA'>Angel dos Santos Aveiro.</span>
                </div>
                <div className="subLineOfSubAbout">
                    <span className='FirstSubLineOfSA'>Height:</span>
                    <span className='SecondSubLineOfSA'>1.87 m.</span>
                </div>
                <div className="subLineOfSubAbout">
                    <span className='FirstSubLineOfSA'>Parents:</span>
                    <span className='SecondSubLineOfSA'>José Dinis Aveiro, Maria Dolores dos Santos Viveiros da Aveiro.</span>
                </div>
                <div className="subLineOfSubAbout">
                    <span className='FirstSubLineOfSA'>Salary:</span>
                    <span className='SecondSubLineOfSA'>200 million EUR (2024).</span>
                </div>
                <div className="subLineOfSubAbout">
                    <span className='FirstSubLineOfSA'>Partner:</span>
                    <span className='SecondSubLineOfSA'>Georgina Rodríguez (2016-ongoing).</span>
                </div>

            </div>

        </div>
    )
}

export default AboutSection;