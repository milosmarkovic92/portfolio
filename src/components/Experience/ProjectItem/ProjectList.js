import React from 'react';
import PropTypes from 'prop-types';
import Project, { ProjectPropTypes } from './Project';

const ProjectList = (props) =>
    props.projects.map(
        (projectProps, index) =>
            index > 0
                ? <React.Fragment
                    key={projectProps.name}
                >
                    <hr />
                    <Project
                        name={projectProps.name}
                        description={projectProps.description}
                        skills={projectProps.skills}
                    />
                </React.Fragment>
                : <Project
                    key={projectProps.name}
                    name={projectProps.name}
                    description={projectProps.description}
                    skills={projectProps.skills}
                />
    );

ProjectList.propTypes = {
    skills: PropTypes.arrayOf(PropTypes.string),
    projects: PropTypes.arrayOf(PropTypes.shape(ProjectPropTypes))
}

export default ProjectList;