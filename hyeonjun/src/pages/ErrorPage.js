import React from 'react';
import '../css/ErrorPage.css'; // 기존 CSS 파일을 사용해도 됩니다.
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {

  const navigate = useNavigate();

  const moveToMain = () => {
    navigate('/main');
  }

  return (
    
      <div className="error-container">
        <img
          src="../images/icon/face_icon.png" // 이미지 URL을 여기에 입력하세요.
          alt="Profile"
          className="profile-image-face"
          onClick={moveToMain}
        />
        <h1 className='text-container jaro-heading'>JeoNun SinIp GyeoValJalpNiDa.</h1>
      </div>
   

  );
};

export default ErrorPage;