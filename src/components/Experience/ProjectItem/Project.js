import React from 'react';
import PropTypes from 'prop-types';
import './ProjectList.css';
import Color from 'color';

const Project = (props) => (
    <div key={props.name}>
        <div className="grid-container">
            <p className="project-item1">name </p>
            <p className="project-item2"
                style={{ color: Color('#ada9a9').darken(0.2) }}>
                {props.name}
            </p>
            <p className="project-item3">description </p>
            <p className="project-item4"
                style={{ color: Color('#ada9a9').darken(0.2) }}>
                {props.description}
            </p>
            <p className="project-item5">skills used </p>
            <p className="project-item6"
                style={{ color: Color('#ada9a9').darken(0.2) }}>
                {props.skills.join(', ')}
            </p>
        </div>
    </div>
);

export const ProjectPropTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    skills: PropTypes.arrayOf(PropTypes.string)
}

Project.propTypes = ProjectPropTypes;

export default Project;