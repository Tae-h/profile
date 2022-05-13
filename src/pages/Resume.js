import {memo} from "react";
import { StarTwoTone} from "@ant-design/icons";
import styled from 'styled-components';
import '../css/resume.css';


const CareerSkillsTitle = styled.h3`
    margin-top: 10%;
`;



const Resume = memo(() => {

    return (
        <div className={'wrapper'}>
            <div className={"inner-wrapper"}>
                <div className='page'>

                    <div className='page-header'>
                        <h1 className='page-title'>
                            이력서 및 경력기술서
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

                            <dt className="profile-title">Git</dt>
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
                        <CareerSkillsTitle>경력 기술서</CareerSkillsTitle>
                        <p>
                            웹 표준에 맞춰 의미 있는 구조를 가지며, 다양한 환경에 반응하도록 디자인과 UX를 구현하고, (검색엔진을 포함하여) 모두가 접근 가능한 웹사이트를 만들기 위해 노력하고 있습니다.
                        </p>

                        <br/><br/>

                        <h5>프로젝트</h5>
                        <p>다양한 형태의 웹사이트와 모바일 웹, 반응형 웹 그리고 웹 접근성 프로젝트까지 풍부한 개발 경험을 가지고 있습니다. </p>

                        <dl className='career-list'>

                            <dt className='career-title'>
                               - 유니드잡 고도화 프로젝트 <StarTwoTone twoToneColor="#eb2f96" />
                            </dt>
                            <dd className="career-meta">
                                <span className="career-date">
                                    <time dateTime="2005-02-01T00:00:00+00:00">
                                        2019년 1월</time>
                                    – <time dateTime="2010-08-01T00:00:00+00:00">
                                          2022년 4월</time>
                                </span>
                            </dd>
                            <dd className="career-description">
                                3년의 띵스플로우 서비스 개발을 마무리하고 다시 프리랜서로 일하고 있습니다.
                                3년의 띵스플로우 서비스 개발을 마무리하고 다시 프리랜서로 일하고 있습니다.
                                3년의 띵스플로우 서비스 개발을 마무리하고 다시 프리랜서로 일하고 있습니다.
                            </dd>

                            <dt className='career-title'>
                                - 유니드잡 고도화 프로젝트 <StarTwoTone twoToneColor="#eb2f96" />
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

                            <dt className='career-title'>
                                - 유니드잡 고도화 프로젝트 <StarTwoTone twoToneColor="#eb2f96" />
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

                            <dt className='career-title'>
                                - 유니드잡 고도화 프로젝트 <StarTwoTone twoToneColor="#eb2f96" />
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
                        <br/><br/>

                        <h5>남김글</h5>
                        <p className='behind-text'>
                            능동적으로 프로젝트를 수행하고 다양한 기술과 협업 능력을 높이며 프론트엔드 웹 개발자가 지녀야 할 자질을 쌓아왔습니다.
                            항상 새로운 기술에 대한 관심과 배우고자 하는 열망을 바탕으로 업무에 임하겠습니다.
                        </p>
                    </div>


                </div>
            </div>
        </div>
    )
});

export default Resume;

