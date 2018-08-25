import React from 'react';
import './Education.css';

const Education = () => {
    return (
        <div className="segment-wrapper segment-wrapper-education">
            <div className="segment-arch" />
            <div className="segment-container-edu">
                <h1 className="center-align-edu">EDUCATION</h1>
                <div className="left-align grid-container-edu">
                    <p className="edu-item1">2012 - 2018 </p>
                    <p className="edu-item2">
                        The School of Electrical and Computer Engineering of Applied Studies, Belgrade.
                        Study program: Computer Engineering
                    </p>
                    <p className="edu-item3">2007 - 2011 </p>
                    <p className="edu-item4"> Technical School Mladenovac.
                        Study program: Computer Technican
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Education;