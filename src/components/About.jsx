import React from "react";
import sinwook from "../assets/images/KakaoTalk_20231129_161021175.jpg";

export default function About() {
  return (
    <div id="about">
      <div className="overview">
        <p className="overview_title">
          반갑습니다, 프론트엔드 개발자가 되기 위해 꾸준한 프로젝트 경험과
          학습을 병행하고 있는 지원자 최창근입니다.
        </p>
        <ol className="overview_box">
          <li>
            <img className="overview_picture" src={sinwook} alt="sinwook" />
          </li>
        </ol>
      </div>
      <div className="introduce">
        <p>
          'Talent wins games, but teamwork and intelligence wins championships.'
          제가 가장 좋아하는 마이클조던의 격언입니다. 소속감과 책임감을 중시하며
          팀에 기여하기 위해 노력하는것이 즐겁습니다. 새로운 환경에서 필요한
          기술을 빠르게 학습하고 적용하는 프론트엔드 개발자가 되겠습니다.
        </p>
      </div>
    </div>
  );
}
