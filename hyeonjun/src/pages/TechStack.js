import React from 'react';
import '../css/TechStack.css';

const TechStack = () => {
    return(
        <>
            <div >
                <div className='skills-container'>
                    <table>
                        <tbody className="jaro-heading skills-container">
                            <td >
                                <img
                                    src="../images/icon/back_icon.png" // 이미지 URL을 여기에 입력하세요.
                                    alt="Profile"
                                    className="image-container-back"
                                />

                                <div>
                                    <p className='margin-top'>Spring</p>
                                    <p>JPA</p>
                                    <p>Java</p>
                                    <p>Mysql</p>
                                    <p>Docker</p>
                                    <p>Jenkins</p>
                                    <p>Aws</p>
                                    <p>Vercel</p>
                                </div>
                            </td>
                            <td>
                                <div >
                                    <img
                                        src="../images/icon/front_icon.png" // 이미지 URL을 여기에 입력하세요.
                                        alt="Profile"
                                        className="image-container-back"
                                    />
                                    <div>
                                        <p className='margin-top'>React</p>
                                        <p>flutter</p>
                                        <p>HTML</p>
                                        <p>CSS</p>
                                        <p>J.S</p>
                                    </div>
                                </div>
                            </td>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};
export default TechStack;