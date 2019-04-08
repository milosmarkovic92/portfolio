import React, { Component } from 'react';
import ProjectList from '../Experience/ProjectItem/ProjectList';
import SkillList from '../Experience/SkillItem/SkillList';
import PROJECTS from '../../constants/projects.json';
import SKILLS from '../../constants/skills.json';
import * as Icons from '../Icons';
import CancelIcon from '../Icons/cancel';
import './ExperienceSegment.css';

class ExperienceSegment extends Component {
    state = {
        selectedSkill: '',
        projects: [],
        selectedImage: ''
    }

    skillChangeHandler = (newSkill, newImage) => {
        this.setState({
            selectedSkill: newSkill,
            projects: newSkill  // if new skill === '' it is falsy
                ? PROJECTS.filter(project => project.skills.includes(newSkill))
                : [],
            selectedImage: newImage
        })
    }

    render() {
        const { selectedSkill, projects } = this.state;
        const SelectedSkillIcon = Icons[selectedSkill];
        return selectedSkill
            ? <div className='segment-wrapper segment-wrapper-projects'>
                <div className="segment-arch" />
                <div className="segment-container-pro">
                    <div className='project-slide'>
                        <div>
                            <span className="span-container">
                                <CancelIcon
                                    className="circle"
                                    onClick={() => this.skillChangeHandler('')} />
                                <SelectedSkillIcon className="icon-container"/>
                            </span>
                        </div>
                        <ProjectList
                            skill={selectedSkill}
                            projects={projects}
                        />
                    </div>
                </div>
            </div>
            : <div className='segment-wrapper segment-wrapper-skills'>
                <div className="segment-arch" />
                <div className="segment-container">
                    <SkillList
                        skills={SKILLS}
                        onSelectSkill={this.skillChangeHandler}
                    />
                </div>
            </div>
    }
}

export default ExperienceSegment;