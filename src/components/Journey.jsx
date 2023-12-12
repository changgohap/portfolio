import React from "react";

export default function Journey() {
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
        <div className="contents_detail">
          <span class="number">01</span>
          <br />
          <span class="title">PORTFOLIO</span>
        </div>
        <div className="contents_thumbnail">
          <img src="images\portfolio_thumbnail.png" alt="portfolio_thumbnail" />
        </div>
      </div>
      <div className="contents_wrapper_left">
        <div className="contents_detail">
          <span class="number">02</span>
          <br />
          <span class="title">FLOWERY</span>
        </div>
        <div className="contents_thumbnail">
          <img src="images\flowery_thumbnail.png" alt="flowery_thumbnail" />
        </div>
      </div>
      <div className="contents_wrapper_right">
        <div className="contents_detail">
          <span class="number">03</span>
          <br />
          <span class="title">TRACER</span>
        </div>
        <div className="contents_thumbnail">
          <img src="images\tracer_thumbnail.png" alt="tracer_thumbnail" />
        </div>
      </div>
      <div className="contents_wrapper_left">
        <div className="contents_detail">
          <span class="number">04</span>
          <br />
          <span class="title">PATPAT</span>
        </div>
        <div className="contents_thumbnail">
          <img src="images\patpat_thumbnail.png" alt="patpat_thumbnail" />
        </div>
      </div>
      <div className="contents_wrapper_right">
        <div className="contents_detail">
          <span class="number">05</span>
          <br />
          <span class="title">SSAFY</span>
        </div>
        <div className="contents_thumbnail">
          <img src="images\ssafy_thumbnail.png" alt="ssafy_thumbnail" />
        </div>
      </div>
    </div>
  );
}
