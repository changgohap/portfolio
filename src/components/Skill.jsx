import React from "react";

export default function Skill() {
  return (
    <div id="skill">
      <div className="thumbnail_box">
        <div className="skill_thumbnail">
          <img src="images/intro_logo.png" alt="intro_logo" />
        </div>
        <div className="skill_title">SKILLS</div>
        <div className="skill_description">
          My focused technologies: areas I have used and am currently studying
          <div className="text-border"> </div>
        </div>
      </div>
      <div className="detail_box">
        <div className="skill_contents">
          <div className="skill_category">
            <span>Core</span>
          </div>
          <div className="skill_box">
            <div className="skill_name">
              <span>HTML</span>
            </div>
            <div className="skill_name">
              <span>CSS</span>
            </div>
            <div className="skill_name">
              <span>JS</span>
            </div>
          </div>
        </div>
        <div className="skill_contents">
          <div className="skill_category">
            <span>Frameworks & Libraries</span>
          </div>

          <div className="skill_box">
            <div className="skill_name">
              <span>React</span>
            </div>
            <div className="skill_name">
              <span>Redux</span>
            </div>
            <div className="skill_name">
              <span>SCSS</span>
            </div>
          </div>
        </div>
        <div className="skill_contents">
          <div className="skill_category">
            <span>Tools & Platforms</span>
          </div>

          <div className="skill_box">
            <div className="skill_name">
              <span>Git</span>
            </div>
            <div className="skill_name">
              <span>Figma</span>
            </div>
            <div className="skill_name">
              <span>Vercel</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
