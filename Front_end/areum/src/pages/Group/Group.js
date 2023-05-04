import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./Group.css";

function Group() {
  const [searchText, setSearchText] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchText);
  };

  return (
    <div className='group'>
            <div className="header">
            <Link to="/"><h1>Logo</h1></Link>
                <ui className="header-menu">
                <li><Link to="/Lab" style={{ textDecoration: "none" }}> 연구실 </Link></li>
                 <li><Link to="/Group" style={{ textDecoration: "none" }}> 동아리 </Link></li>
                 <li><Link to="/Study" style={{ textDecoration: "none" }}> 스터디 </Link></li>
                </ui>
        <div className="header-buttons">
            <Link to ="signIn">
            <button className="signin-btn">로그인</button>
            </Link>
            <Link to ="signUp">
            <button className="signup-btn">회원가입</button>
            </Link>
        </div>
    </div>
    <div class="header-content">
    <div className="left-container">
<div className="login-box">
  <div className="profile">
    <div className="profile-circle"></div>
    <span>로그인하세요.</span>
  </div>
  <div className="login-button">
  <Link to ="signIn">
    <button>로그인</button>
    </Link>
  </div>
</div>
</div>

        <div className="right-container">

        <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="# 모임 검색"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button type="submit">검색</button>
          </form>

    <div className="content123">
            <div className="top-content">
              <div className="top-content-header">
                <h2>동아리</h2>
                <hr />
                <p>총 12 개</p>
              </div>
              <hr className="content-divider" />
            </div>
            <div className="contents">
              <div className="group-content">
                <h4>게시글 제목 1</h4>
                <h8>게시글 내용 1</h8>
                <hr className="content-divider" />
              </div>
              <div className="group-content">
              <h4>게시글 제목 2</h4>
                <h8>게시글 내용 2</h8>
                <hr className="content-divider" />
              </div>
              <div className="group-content">
              <h4>게시글 제목 3</h4>
                <h8>게시글 내용 3</h8>
                <hr className="content-divider" />
              </div>
              <div className="group-content">
              <h4>게시글 제목 4</h4>
                <h8>게시글 내용 4</h8>
                <hr className="content-divider" />
              </div>
              <div className="group-content">
              <h4>게시글 제목 5</h4>
                <h8>게시글 내용 5</h8>
                <hr className="content-divider" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Group;
