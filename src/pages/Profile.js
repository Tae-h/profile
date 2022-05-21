import {memo} from "react";
import styled from 'styled-components';
import '../css/profile.css';

export const PageTitle = styled.h1`
  color: #4d92c4;
`;


const Profile = memo(() => {


    return (
        <div className={'wrapper'}>
            <div className={"inner-wrapper"}>
                <div className='page'>

                    <div className='page-header'>
                        <PageTitle className='page-title'>
                            INTRODUCE.
                        </PageTitle>
                        <p className='page-subtitle'>
                            4년차 웹 개발자 김태훈입니다.
                        </p>
                        <div className='sub-introduce'>
                            4년 차 개발자로 작은 SI 회사에서 웹 서비스를 개발/배포/운영하였습니다.<br />
                            주로 Front, Back 구분 없이 개발을 담당했으며 필요에 따라 PM(Project Manager) 역할을 하기도 하였습니다.
                            <br />
                            <br />
                            반복되는 일을 자동화하고 비효율적인 프로세스를 개선하는 일을 좋아합니다.<br />
                            운영팀의 단순/루틴 업무 시간을 줄이기 위해 지속적으로 백오피스를 개발하여 운영팀 업무 시간을 줄였던 경험이 있습니다.
                            <br />

                        </div>
                    </div>

                    <div className='page-content'>
                        <h5>Profile</h5>
                        <dl className="profile-list">
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

                        <div className='line-content'/>

                        <h5>Career</h5>
                        <dl className='career-list'>
                            <dt className='career-title'>
                                (주)이브레인소프트 (구 윈드폴)
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
                                - 2018년, 웹 개발 공부를 시작하여 2019년도에 입사하여 현재까지 다양한 경험을 쌓을 수 있었습니다.
                                현재까지 계속 현업에서 개발을 하시고 끊임없이 공부하시는 팀장님의 모습을 보며 제가 지향해야할 개발자의 모습을 배울 수 있었습니다.
                            </dd>
                        </dl>

                        <div className='line-content'/>

                        <h5>Education.</h5>
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

                        <div className='line-content'/>

                        <h5>License.</h5>
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

                        <div className='line-content'/>

                        <h5>Skills.</h5>
                        <dl className='career-list'>
                            <dt className='career-title'>
                                - Front-End.
                            </dt>
                            <dd className="career-description">
                                React.js, Vue.js, Angular10, TypeScript, JSP
                            </dd>

                            <dt className='career-title'>
                                - Back-End.
                            </dt>
                            <dd className="career-description">
                                Spring4, Spring Boot, 전자정부프레임워크, Node.js
                            </dd>

                            <dt className='career-title'>
                                - Database.
                            </dt>
                            <dd className="career-description">
                                Oracle, MySql, MariaDB, MsSql
                            </dd>

                            <dt className='career-title'>
                                - Etc.
                            </dt>
                            <dd className="career-description">
                                Naver-Cloud, AWS(EC2), Nginx, Jenkins, ElasticSearch
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
