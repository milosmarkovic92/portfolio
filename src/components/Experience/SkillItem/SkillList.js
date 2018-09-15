import React from 'react';
import PropTypes from 'prop-types';
import Skill, { SkillPropTypes } from './Skill';

const SkillList = (props) => props.skills.map(skillProps =>
    <Skill
        key={skillProps.caption}
        {...skillProps}
        onSelectSkill={props.onSelectSkill}
        selectedImage={skillProps.name}
    />
);

SkillList.propTypes = {
    skills: PropTypes.arrayOf(PropTypes.shape(SkillPropTypes)),
    onSelectSkill: PropTypes.func
}

export default SkillList;
