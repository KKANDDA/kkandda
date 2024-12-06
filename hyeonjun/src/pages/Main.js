import React from 'react';
import '../css/Main.css'; // 기존 CSS 파일을 사용해도 됩니다.

const Main = () => {
    return (
        <>
            <div className='main-container'>
                <div className="main-container-row">
                    <img
                        src="../images/icon/git_icon.png" // 이미지 URL을 여기에 입력하세요.
                        alt="Profile"
                        className="profile-image-icon"
                    />
                    <h1 className='text-container jaro-heading'>https://github.com/KKANDDA</h1>
                </div>

                <div className="main-container-row">
                    <img
                        src="../images/icon/notion_icon.png" // 이미지 URL을 여기에 입력하세요.
                        alt="Profile"
                        className="profile-image-icon"
                    />
                    <h1 className='text-container jaro-heading'>https://www.notion.so/ohgiraffers/01bd798425c94dcaa5b904f286a63cae</h1>
                </div>


                <div className="main-container-row">
                    <img
                        src="../images/icon/info_icon.png" // 이미지 URL을 여기에 입력하세요.
                        alt="Profile"
                        className="profile-image-icon"
                    />
                    <h1 className='text-container jaro-heading'>A rather long self-introduction</h1>
                </div>


                <div className="main-container-row">
                    <img
                        src="../images/icon/tech_icon.png" // 이미지 URL을 여기에 입력하세요.
                        alt="Profile"
                        className="profile-image-icon"
                    />
                    <h1 className='text-container jaro-heading'>list of acquired skills</h1>
                </div>
                <img
                    src="../images/icon/face_icon.png" // 이미지 URL을 여기에 입력하세요.
                    alt="Profile"
                    className="profile-image-face main-container-img "
                />


            </div>
        </>
    );
};

export default Main;