import React from 'react';
import PropTypes from 'prop-types';
import Color from 'color';
import Html5Icon from '../../Icons/html5';
import ReactIcon from '../../Icons/react';
import Css3Icon from '../../Icons/css3';
import ReduxIcon from '../../Icons/redux';
import JavaScriptIcon from '../../Icons/javaScript';
import jQueryIcon from '../../Icons/jQuery';
import './SkillList.css';

const Icons = {
    Html5: Html5Icon,
    ReactJS: ReactIcon,
    Css3: Css3Icon,
    Redux: ReduxIcon,
    JavaScript: JavaScriptIcon,
    jQuery: jQueryIcon
}

const Skill = (props) => {
    const IconComponent = Icons[props.name];
    return (
        <div className="skills-slide">
            <div className="skill"
                key={props.caption} onClick={() =>
                    props.onSelectSkill(props.caption + props.captionTwo, props.name)} >
                <div className="icon-container">
                    {IconComponent && <IconComponent/>}
                </div>
                <h4 style={{ color: props.color }}>{props.caption}
                    <span style={{ color: Color(props.color).darken(0.4) }}>
                        {props.captionTwo}
                    </span>
                </h4>
                <div className='progress-container'
                    style={{ backgroundColor: Color(props.color).darken(0.4) }}>
                    <div className='progress-bar'
                        style={{ backgroundColor: props.color, width: props.progress + '%' }}>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const SkillPropTypes = {
    onSelectSkill: PropTypes.func,
    image: PropTypes.string,
    caption: PropTypes.string,
    captionTwo: PropTypes.string,
    progress: PropTypes.number
}

Skill.propTypes = SkillPropTypes;

export default Skill;