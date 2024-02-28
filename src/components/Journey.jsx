import React, { useState } from "react";
import Modal from "./Modal";

export default function Journey() {
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    technology: "",
    type: "",
    overview: "",
    url: "",
  });

  const openModal = (title, technology, type, overview, url) => {
    setModal(true);
    setModalContent({ title, technology, type, overview, url });
  };

  const closeModal = () => {
    setModal(false);
  };

  const formatOverview = (overview) => {
    return overview.split("\n").map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  };

  return (
    <div id="journey">
      <div className="thumbnail_box">
        <div className="journey_thumbnail">
          <img src="images/intro_logo.png" alt="intro_logo" />
        </div>
        <div className="journey_title">Journey</div>
        <div className="journey_description">
          역량을 기르기 위한 교육과 경험들 입니다
        </div>
      </div>
      <div className="contents_wrapper_right">
        <div className="contents_detail_right">
          <span class="number">01</span>
          <br />
          <span class="title">PORTFOLIO</span>
          <br />
        </div>
        <div
          className="contents_thumbnail"
          onClick={() =>
            openModal(
              "Portfolio",
              "React, SCSS, GSAP, ScrollTrigger",
              "Personal Portfolio",
              "Step into the world of captivating digital storytelling with my personally designed and developed animated portfolio. Fusing the power of React JS, SCSS, and GSAP animations, I've crafted a dynamic showcase that transcends the ordinary. Every element, from custom animations to intricate SVG images, has been meticulously curated to resonate with the essence of my work. From ideation to execution, this project embodies my dedication to delivering high-quality design and seamless interactivity, all while highlighting my skills in frontend development and visual creativity. Dive into a visual journey that's not only a portfolio but a testament to the art of digital expression",
              "https://choechanggeun-portfolio.vercel.app/"
            )
          }
        >
          <img src="images\portfolio_thumbnail.png" alt="portfolio_thumbnail" />
        </div>
        {modal && (
          <Modal
            title={modalContent.title}
            technology={modalContent.technology}
            type={modalContent.type}
            overview={modalContent.overview}
            url={modalContent.url}
            closeModal={closeModal}
          ></Modal>
        )}
      </div>
      <div className="contents_wrapper_left">
        <div className="contents_thumbnail">
          <img
            src="images\flowery_thumbnail.png"
            alt="flowery_thumbnail"
            onClick={() =>
              openModal(
                "FLOWERY",
                "React, SCSS, GSAP, ScrollTrigger",
                "SSAFY 자율 프로젝트 (6인)",
                formatOverview(`
                - 삼성청년 SW 아카데미 자율 프로젝트 지역 3등 수상
                - 부산 서면 / 양산의 꽃가게에서 실제 오프라인 서비스 제공
                - Recoil을 이용해 Client-Side 전역에서 필요한 상태 (Data) 를 관리
                - React-Query 를 이용한 비동기 데이터 캐싱 관리 및 코드 최적화
                - Css를 이용한 애니메이션 구현
                - 개발 페이지
                      구매자 메인
                      가이드
                      ai 체험
                      예약
                      가게 목록
                      qr 인식 편지지
                `),
                "https://daum.net"
              )
            }
          />
        </div>
        <div className="contents_detail_left">
          <span class="number">02</span>
          <br />
          <span class="title">FLOWERY</span>
          <br />
        </div>
      </div>
      <div className="contents_wrapper_right">
        <div className="contents_detail_right">
          <span class="number">03</span>
          <br />
          <span class="title">TRACER</span>
          <br />
        </div>
        <div
          className="contents_thumbnail"
          onClick={() =>
            openModal(
              "TRACER",
              "React, SCSS, GSAP, ScrollTrigger",
              "SSAFY 특화 프로젝트 (6인)",
              formatOverview(`
              - 삼성청년 SW 아카데미 특화 프로젝트 지역 2등 수상
              - 랜딩 / 데일리 키워드 / 데일리 뉴스 / 검색 / 뉴스 목록 & 페이지네이션 기능 개발
              - React-Query 를 이용한 비동기 데이터 캐싱 관리 및 코드 최적화
              - 오픈소스 Chart.js 를 이용한 Canvas 기반 통계 Data Visualization
              `),
              "https://github.com/Tracer-E204/Tracer"
            )
          }
        >
          <img src="images\tracer_thumbnail.png" alt="tracer_thumbnail" />
        </div>
      </div>
      <div className="contents_wrapper_left">
        <div
          className="contents_thumbnail"
          onClick={() =>
            openModal(
              "PATPAT",
              "React, SCSS, GSAP, ScrollTrigger",
              "Personal Portfolio",
              formatOverview(`
              - 삼성청년 SW 아카데미 자율 프로젝트 지역 3등 수상
              - 부산 서면 / 양산의 꽃가게에서 실제 오프라인 서비스 제공
              - 구매자 시점 메인 페이지 / 가이드 페이지 / ai 체험 페이지 / 예약 페이지 / 가게 목록 페이지 / qr 인식 편지지 기능 개발
              - Recoil을 이용해 Client-Side 전역에서 필요한 상태 (Data) 를 관리
              - React-Query 를 이용한 비동기 데이터 캐싱 관리 및 코드 최적화
              - Css를 이용한 애니메이션 구현
              `),
              "https://github.com/PATPAT-E104/PATPAT"
            )
          }
        >
          <img src="images\patpat_thumbnail.png" alt="patpat_thumbnail" />
        </div>

        <div className="contents_detail_left">
          <span class="number">04</span>
          <br />
          <span class="title">PATPAT</span>
          <br />
        </div>
      </div>
      <div className="contents_wrapper_right">
        <div className="contents_detail_right">
          <span className="number">05</span>
          <br />
          <span className="title">SSAFY</span>
          <br />
        </div>
        <div
          className="contents_thumbnail"
          onClick={() =>
            openModal(
              "SSAFY",
              "Algorithm, Git, Figma, Jira",
              "삼성청년 SW 아카데미",
              formatOverview(`
              - 삼성청년 SW 아카데미 자율 프로젝트 지역 3등 수상
              - 부산 서면 / 양산의 꽃가게에서 실제 오프라인 서비스 제공
              - 구매자 시점 메인 페이지 / 가이드 페이지 / ai 체험 페이지 / 예약 페이지 / 가게 목록 페이지 / qr 인식 편지지 기능 개발
              - Recoil을 이용해 Client-Side 전역에서 필요한 상태 (Data) 를 관리
              - React-Query 를 이용한 비동기 데이터 캐싱 관리 및 코드 최적화
              - Css를 이용한 애니메이션 구현
              `),
              "https://www.ssafy.com/ksp/jsp/swp/swpMain.jsp"
            )
          }
        >
          <img src="images\ssafy_thumbnail.png" alt="ssafy_thumbnail" />
        </div>
      </div>
    </div>
  );
}
