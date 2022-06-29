import {memo} from "react";
import styled from 'styled-components';
import '../css/profile.css';
import ProfileImage from "../components/ProfileImage";
import {Col, Divider, Row} from "antd";



export const PageTitle = styled.h1`
  color: #4d92c4;
`;


const Profile = memo((props) => {


    return (
        <div className={'wrapper'}>
            <div className={"inner-wrapper"}>
                <div className='page'>

                    <div className='page-header'>
                        <PageTitle className='page-title'>
                        </PageTitle>
                    </div>

                    <div className='page-content'>
                        <Divider orientation="left">PROFILE.</Divider>

                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                            <Col span={8}>
                                <ProfileImage />
                            </Col>

                            <Col span={16} style={{ marginTop: '5%' }} >
                                <dl className="profile-list" >
                                    <dt className="profile-title">이름</dt>
                                    <dd className="profile-description">김태훈</dd>

                                    <dt className="profile-title">연락처</dt>
                                    <dd className="profile-description">010-9944-8296</dd>

                                    <dt className="profile-title">이메일</dt>
                                    <dd className="profile-description">zppy13@gmail.com</dd>

                                    <dt className="profile-title">Github</dt>
                                    <dd className="profile-description">
                                        <a href={'https://github.com/Tae-h'}>
                                            https://github.com/Tae-h
                                        </a>
                                    </dd>
                                </dl>
                            </Col>

                        </Row>

                        <Divider orientation="left">EDUCATION.</Divider>
                        <dl className='career-list'>
                            <dt className='career-title'>
                                - 빅데이터 분석 교육과정 수료
                            </dt>
                            <dd className="career-meta">
                                <span className="career-date">
                                    <time dateTime="2005-02-01T00:00:00+00:00">2018년 6월</time>
                                    – <time dateTime="2010-08-01T00:00:00+00:00">2018년 10월</time>
                                </span>
                            </dd>

                            <dt className='career-title'>
                                - 가톨릭 관동대학교 수학교육과 학사
                            </dt>
                            <dd className="career-meta">
                                <span className="career-date">
                                    <time dateTime="2005-02-01T00:00:00+00:00">2013년 3월</time>
                                    – <time dateTime="2010-08-01T00:00:00+00:00">2017년 8월</time>
                                </span>
                            </dd>

                            <dt className='career-title'>
                                - 둔촌 고등학교 졸업
                            </dt>
                            <dd className="career-meta">
                            <span className="career-date">
                                <time dateTime="2005-02-01T00:00:00+00:00">2006년 3월</time>
                                – <time dateTime="2010-08-01T00:00:00+00:00">2009년 2월</time>
                            </span>
                            </dd>
                        </dl>

                        <Divider orientation="left">LICENSE.</Divider>
                        <dl className='career-list'>
                            <dt className='career-title'>
                                정보처리기사 자격증
                            </dt>
                            <dd className="career-meta">
                                <span className="career-date">
                                    <time dateTime="2005-02-01T00:00:00+00:00">- 2021년 6월 취득</time>
                                </span>
                            </dd>
                        </dl>

                        <Divider orientation="left">SKILLS.</Divider>
                        <dl className='career-list'>
                            <dt className='career-title'>
                                - Language.
                            </dt>
                            <dd className="career-skills">
                                Java8, Javascript(ES5, ES6), TypeScript, HTML5, CSS3
                            </dd>

                            <dt className='career-title'>
                                - Framework / Library.
                            </dt>
                            <dd className="career-skills">
                                eGovFrame, Spring4, Spring Boot, Node.js, React.js, Vue.js, Angular10, JSP, Jquery
                            </dd>

                            <dt className='career-title'>
                                - Build.
                            </dt>
                            <dd className="career-skills">
                                Maven, Gradle, Jenkins
                            </dd>

                            <dt className='career-title'>
                                - DBMS.
                            </dt>
                            <dd className="career-skills">
                                Oracle, MySql, MariaDB, MsSql
                            </dd>

                            <dt className='career-title'>
                                - Tool.
                            </dt>
                            <dd className="career-skills">
                                Git, GitHub, Gitlab, JUnit4, eclipse, vsCode,
                                Postman, Intellij, Webstorm, dataGrip
                            </dd>

                            <dt className='career-title'>
                                - Etc.
                            </dt>
                            <dd className="career-skills">
                                Naver-Cloud, AWS(EC2), Nginx, ElasticSearch, Tomcat
                            </dd>
                        </dl>

                    </div>


                </div>
            </div>
        </div>
    )
});

Profile.displayName = 'Profile';

export default Profile;
