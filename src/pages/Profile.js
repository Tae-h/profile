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
                            4년 차 개발자로 작은 SI 회사에서 웹과 앱 서비스를 개발/배포/운영하였습니다.
                            주로 웹 개발을 담당했으며 필요에 따라 PM(Project Manager) 역할을 하기도 하였습니다.
                            작은 규모의 팀에 첫 번째 개발자로 입사하여 50억 투자를 유치하고 40명 규모의 팀으로 성장할 때까지 필요한 기술 역량을 책임졌던 경험이 있습니다.
                            <br />
                            <br />
                            비즈니스 성장에 기여하는 일을 최우선으로 합니다.
                            이를 위해 빠르게 개발하고 배포하여 딜리버리하는 역량과 데이터를 활용하여 유저를 이해하는 역량을 쌓고자 노력해왔습니다.
                            또한, 큰 임팩트는 혼자가 아닌 함께 만들 수 있다고 생각하기에 다양한 직무의 구성원들과 적극적으로 커뮤니케이션하며 협업해왔습니다.
                            <br />
                            <br />
                            반복되는 일을 자동화하고 비효율적인 프로세스를 개선하는 일을 좋아합니다.
                            운영팀의 단순/루틴 업무 시간을 줄이기 위해 지속적으로 백오피스를 개발하여 운영팀 업무 시간을 주당 70시간 이상 줄였던 경험이 있습니다.
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
                                (주)이브레인소프트 ( 구 윈드폴 )
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

                        <div className='line-content'/>

                        <h5>Education.</h5>
                        <dl className='career-list'>
                            <dt className='career-title'>
                                빅데이터 분석 교육과정 수료
                            </dt>
                            <dd className="career-meta">
                                <span className="career-date">
                                    <time dateTime="2005-02-01T00:00:00+00:00">2018년 6월</time>
                                    – <time dateTime="2010-08-01T00:00:00+00:00">2018년 10월</time>
                                </span>
                            </dd>

                            <dt className='career-title'>
                                가톨릭 관동대학교 수학교육과 학사
                            </dt>
                            <dd className="career-meta">
                                <span className="career-date">
                                    <time dateTime="2005-02-01T00:00:00+00:00">2013년 3월</time>
                                    – <time dateTime="2010-08-01T00:00:00+00:00">2017년 8월</time>
                                </span>
                            </dd>

                            <dt className='career-title'>
                                둔촌 고등학교
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
                                    <time dateTime="2005-02-01T00:00:00+00:00">- 2021년 8월 취득</time>
                                </span>
                            </dd>
                        </dl>

                    </div>


                </div>
            </div>
        </div>
    )
});

export default Profile;
