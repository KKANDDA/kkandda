import React from 'react';
import '../css/TechStack.css';

const TechStack = () => {
    return (
        <>
            <div >
                <div className='skills-container'>
                    <div>
                        <div className="skills-container-back">
                            <img
                                src="../images/icon/back_icon.png" // 이미지 URL을 여기에 입력하세요.
                                alt="Profile"
                                className="image-container-back"
                            />
                            <div className='jaro-heading'>
                                <p className='margin-top'>Spring</p>
                                <p>JPA</p>
                                <p>Java</p>
                                <p>Mysql</p>
                                {/* <p>Docker</p>
                                <p>Jenkins</p>
                                <p>Aws</p>
                                <p>Vercel</p> */}
                            </div>
                        </div>
                        <div>
                            <div className="skills-container-front">
                                <img
                                    src="../images/icon/front_icon.png" // 이미지 URL을 여기에 입력하세요.
                                    alt="Profile"
                                    className="image-container-back"
                                />
                                <div className='jaro-heading'>
                                    <p className='margin-top'>React</p>
                                    <p>flutter</p>
                                    <p>HTML</p>
                                    <p>CSS</p>
                                    <p>J.S</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default TechStack;