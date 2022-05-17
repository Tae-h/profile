import {memo} from "react";
import AppLayout from "../components/AppLayout";
import {StarTwoTone} from "@ant-design/icons";


const Profile = memo(() => {


    return (
        <div className={'wrapper'}>
            <div className={"inner-wrapper"}>
                <div className='page'>

                    <div className='page-header'>
                        <h1 className='page-title'>
                            프로필
                        </h1>
                        <p className='page-subtitle'>안녕하세요. 웹 개발자 김태훈입니다.</p>
                    </div>

                    <div className='page-content'>
                        <h5>프로필</h5>
                        <dl className="profile-list">
                            <dt className="profile-title">이름</dt>
                            <dd className="profile-description">김태훈</dd>

                            <dt className="profile-title">연락처</dt>
                            <dd className="profile-description">010-9944-8296</dd>

                            <dt className="profile-title">이메일</dt>
                            <dd className="profile-description">zppy13@gmail.com</dd>

                            <dt className="profile-title">Github</dt>
                            <dd className="profile-description">https://github.com/Tae-h</dd>
                        </dl>

                        <h5>경력</h5>
                        <dl className='career-list'>
                            <dt className='career-title'>
                                이브레인소프트 ( 구 윈드폴 )
                            </dt>
                            <dd className="career-meta">
                                <span className="career-date">
                                    <time dateTime="2005-02-01T00:00:00+00:00">
                                        2019년 1월</time>
                                    – <time dateTime="2010-08-01T00:00:00+00:00">
                                          2022년 4월</time>
                                </span>
                            </dd>
                            <dd className="career-description">3년의 띵스플로우 서비스 개발을 마무리하고 다시 프리랜서로 일하고 있습니다.</dd>
                        </dl>

                        <h5>학력</h5>
                        <dl className='career-list'>
                            <dt className='career-title'>
                                가톨릭 관동대학교 수학교육과 학사
                            </dt>
                            <dd className="career-meta">
                                <span className="career-date">
                                    <time dateTime="2005-02-01T00:00:00+00:00">
                                        2013년 3월</time>
                                    – <time dateTime="2010-08-01T00:00:00+00:00">
                                          2017년 8월</time>
                                </span>
                            </dd>

                            <dt className='career-title'>
                                둔촌 고등학교
                            </dt>
                            <dd className="career-meta">
                            <span className="career-date">
                                <time dateTime="2005-02-01T00:00:00+00:00">
                                    2006년 3월</time>
                                – <time dateTime="2010-08-01T00:00:00+00:00">
                                      2009년 2월</time>
                            </span>
                            </dd>
                        </dl>

                        <h5>전문기술</h5>
                        <p>프로젝트 진행시 사용한 기술 및 사용도구입니다.</p>
                        <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                        </ul>

                        <hr />



                    </div>


                </div>
            </div>
        </div>
    )
});

export default Profile;
