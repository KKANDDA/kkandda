import React from 'react';
import './ErrorPage.css'; // 기존 CSS 파일을 사용해도 됩니다.

const ErrorPage = () => {
  return (
    <div className='flex-container'>
      <div className="grid-container">
      <img
        src="../images/icon/face_icon.png" // 이미지 URL을 여기에 입력하세요.
        alt="Profile"
        className="profile-image-face"
      />
      <h1 className='text-container jaro-heading'>JeoNun SinIp GyeoValJalpNiDa.</h1>
    </div>
    </div>
    
  );
};

export default ErrorPage;