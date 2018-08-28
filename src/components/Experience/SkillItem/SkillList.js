import React from 'react';
import PropTypes from 'prop-types';
import Skill, { SkillPropTypes } from './Skill';

const SkillList = (props) => props.skills.map(skillProps =>
    <Skill
        key={skillProps.caption}
        captionTwo={skillProps.captionTwo}
        image={skillProps.image}
        caption={skillProps.caption}
        color={skillProps.color}
        progress={skillProps.progress}
        onSelectSkill={props.onSelectSkill}
    />
);

SkillList.propTypes = {
    skills: PropTypes.arrayOf(PropTypes.shape(SkillPropTypes)),
    onSelectSkill: PropTypes.func
}

export default SkillList;
