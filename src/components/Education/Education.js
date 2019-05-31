import React from 'react';
import './Education.css';
import Color from 'color';

const Education = () => {
    return (
        <div className="segment-wrapper segment-wrapper-education">
            <div className="segment-arch" />
            <div className="segment-container-edu">
                <div className="education-slide">
                    <h1 className="center-align-edu">EDUCATION AND WORK EXPERIENCE</h1>
                    <div className="left-align grid-container-edu">
                        <p className="edu-item1">2018 -  </p>
                        <p className="edu-item2"
                            style={{ color: Color('#ada9a9').darken(0.2) }}>
                            Junior FrontEnd Developer at <i>Software-Nation. </i>
                        Role: <span style={{ color: Color('white').darken(0.2) }}>ReactJS developer</span>
                        </p>
                        <p className="edu-item3">2012 - 2018 </p>
                        <p className="edu-item4"
                            style={{ color: Color('#ada9a9').darken(0.2) }}>
                            The School of Electrical and Computer Engineering of Applied Studies, Belgrade.
                        Study program: <span style={{ color: Color('white').darken(0.2) }}>Computer Engineering</span>
                        </p>
                        <p className="edu-item5">2007 - 2011 </p>
                        <p className="edu-item6"
                            style={{ color: Color('#ada9a9').darken(0.2) }}>
                            Technical School Mladenovac.
                        Study program: <span style={{ color: Color('white').darken(0.2) }}>Computer Technican</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education;