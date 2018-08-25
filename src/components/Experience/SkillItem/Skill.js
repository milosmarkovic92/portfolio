import React from 'react';
import PropTypes from 'prop-types';
import Color from 'color';
import './SkillList.css';

const Skill = (props) => (
    <div key={props.caption} onClick={ () => props.onSelectSkill(props.caption, props.image) } >
        <img src={props.image} alt='' />
        <h4 style={{ color: props.color }}>{props.caption}</h4>
        <div className='progress-container'
            style={{ backgroundColor: Color(props.color).darken(0.5) }}>
            <div className='progress-bar'
                style={{ backgroundColor: props.color, width: props.progress + '%' }}>
            </div>
        </div>
    </div>
);

export const SkillPropTypes = {
    onSelectSkill: PropTypes.func,
    image: PropTypes.string,
    caption: PropTypes.string,
    progress: PropTypes.number
}

Skill.propTypes = SkillPropTypes;

export default Skill;