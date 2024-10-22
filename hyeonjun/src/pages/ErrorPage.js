import React from 'react';
import './Intro.css'; // 기존 CSS 파일을 사용해도 됩니다.

const ErrorPage = () => {
  return (
    <div className="intro-container-row">
      <img
        src="../images/icon/face_icon.png" // 이미지 URL을 여기에 입력하세요.
        alt="Profile"
        className="profile-image"
      />
      <h1 className='text-container-row jaro-heading'>JeoNun SinIp GyeoValJalpNiDa.</h1>
    </div>
  );
};

export default ErrorPage;