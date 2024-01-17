import React, { useState } from "react";
import Modal from "./Modal";

export default function Journey() {
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    technology: "",
    type: "",
    overview: "",
  });

  const openModal = (title, technology, type, overview) => {
    setModal(true);
    setModalContent({ title, technology, type, overview });
  };

  const closeModal = () => {
    setModal(false);
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
              "Step into the world of captivating digital storytelling with my personally designed and developed animated portfolio. Fusing the power of React JS, SCSS, and GSAP animations, I've crafted a dynamic showcase that transcends the ordinary. Every element, from custom animations to intricate SVG images, has been meticulously curated to resonate with the essence of my work. From ideation to execution, this project embodies my dedication to delivering high-quality design and seamless interactivity, all while highlighting my skills in frontend development and visual creativity. Dive into a visual journey that's not only a portfolio but a testament to the art of digital expression"
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
                "- 삼성청년 SW 아카데미 자율 프로젝트 지역 3등 수상 <br> - 부산 서면 / 양산의 꽃가게에서 실제 오프라인 서비스 제공 <br> - 구매자 시점 메인 페이지 / 가이드 페이지 / ai 체험 페이지 / 예약 페이지 / 가게 목록 페이지 / qr 인식 편지지 기능 개발 <br> - Recoil을 이용해 Client-Side 전역에서 필요한 상태 (Data) 를 관리 <br> - React-Query 를 이용한 비동기 데이터 캐싱 관리 및 코드 최적화<br> - Css를 이용한 애니메이션 구현"
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
              "- 삼성청년 SW 아카데미 자율 프로젝트 지역 3등 수상 <br> - 부산 서면 / 양산의 꽃가게에서 실제 오프라인 서비스 제공 <br> - 구매자 시점 메인 페이지 / 가이드 페이지 / ai 체험 페이지 / 예약 페이지 / 가게 목록 페이지 / qr 인식 편지지 기능 개발 <br> - Recoil을 이용해 Client-Side 전역에서 필요한 상태 (Data) 를 관리 <br> - React-Query 를 이용한 비동기 데이터 캐싱 관리 및 코드 최적화<br> - Css를 이용한 애니메이션 구현"
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
              "Step into the world of capt into the world of capt into the world of capt into the world of capt into the world of capt into the world of capt into the world of capt into the world of capt into the world of capt into the world of capt into the world of capt into the world of capt into the world of capt into the world of capt into the world of capt into the world of capt into the world of capt into the world of capt into the world of capt into the world of capt into the world of capt into the world of capt into the world of capt into the world of captivating digital storytelling with my personally designed and developed animated portfolio. Fusing the power of React JS, SCSS, and GSAP animations, I've crafted a dynamic showcase that transcends the ordinary. Every element, from custom animations to intricate SVG images, has been meticulously curated to resonate with the essence of my work. From ideation to execution, this project embodies my dedication to delivering high-quality design and seamless interactivity, all while highlighting my skills in frontend development and visual creativity. Dive into a visual journey that's not only a portfolio but a testament to the art of digital expression"
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
              "React, SCSS, GSAP, ScrollTrigger",
              "삼성청년 SW 아카데미",
              "Step into the world of captivating digital storytelling with my personally designed and developed animated portfolio. Fusing the power of React JS, SCSS, and GSAP animations, I've crafted a dynamic showcase that transcends the ordinary. Every element, from custom animations to intricate SVG images, has been meticulously curated to resonate with the essence of my work. From ideation to execution, this project embodies my dedication to delivering high-quality design and seamless interactivity, all while highlighting my skills in frontend development and visual creativity. Dive into a visual journey that's not only a portfolio but a testament to the art of digital expression"
            )
          }
        >
          <img src="images\ssafy_thumbnail.png" alt="ssafy_thumbnail" />
        </div>
      </div>
    </div>
  );
}
