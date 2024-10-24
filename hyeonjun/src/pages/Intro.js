import React from 'react';
import '../css/Intro.css'; // CSS 파일을 별도로 만들어 스타일을 추가할 수 있습니다.

const Intro = () => {
  return (
    <div className="flex-container">
      <img
        src="../images/icon/face_icon.png" // 이미지 URL을 여기에 입력하세요.
        alt="Profile"
        className="profile-image-face"
      />
      <h1 className='jaro-paragraph mt' >Hello, My Name Is HyeonJun Seo!</h1>
      <h2 className='jaro-paragraph'>Nice To Meet You.</h2>
    </div>
  );
};

export default Intro;