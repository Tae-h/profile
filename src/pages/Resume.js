import {memo} from "react";
import {StarFilled, StarTwoTone} from "@ant-design/icons";
import '../css/resume.css';


const Resume = memo(() => {

    return (
        <div className={'wrapper'}>
            <div className={"inner-wrapper"}>
                <div className='page'>

                    <div className='page-content'>

                        <h5>Project</h5>
                        <p>다양한 형태의 웹사이트와 모바일 웹, 반응형 웹 그리고 웹 접근성 프로젝트까지 풍부한 개발 경험을 가지고 있습니다. </p>

                        <dl className='career-list'>

                            <dt className='career-title'>
                               - 유니드잡 고도화 프로젝트 <StarFilled  style={{color: '#f7d72a'}} />
                            </dt>
                            <dd className="career-meta">
                                <span className="career-date">
                                    <time dateTime="2005-02-01T00:00:00+00:00">
                                        2021년 6월</time>
                                    – <time dateTime="2010-08-01T00:00:00+00:00">
                                          2022년 3월</time>
                                </span>
                            </dd>
                            <dd className="career-description">
                                <a href="https://www.uneedjob.co.kr">https://www.uneedjob.co.kr</a>
                                <li>
                                    오래된 서비스로 인한 프로젝트 고도화
                                    <ol>
                                        <li>개발서버 사내서버에서 naver-cloud 서버로 이전</li>
                                        <li>개발서버 운영서버와 똑같이 구성 및 배포 - tomcat, jenkins, scouter(모니터링), elasticSearch 설치</li>
                                        <li>https 적용</li>
                                        <li>spring 에서 spring boot 변경</li>
                                    </ol>
                                </li>
                                <li>ElasticSearch 의 matching score 를 이용한 인터뷰 매칭 서비스 개발(BackOffice) - 사용자 화면도 개발 추후 오픈 예정</li>
                                <li>프로젝트 고도화 및 인터뷰 매칭 서비스 개발 따른 PM, 개발 업무 - 기획, DB설계, 개발</li>
                                <li>KaKao AlimTalk Api, email 첨부파일 전송 Api 개발</li>
                                <li>관리자(BackOffice) - aspose 를 이용한 세금 계산서(excel), 업무협약서(word) 자동완성 및 다운로드 기능 개발</li>
                                <p>Spring Boot, JSP, Jquery, Vue.js, MySql, Jenkins, Ubuntu, Nginx, </p>
                            </dd>

                            <dt className='career-title'>
                                - 포들리 (유기, 반려동물, 반려가족, 전문가 연결 서비스) <StarFilled  style={{color: '#f7d72a'}} /><br/>
                            </dt>
                            <dd className="career-meta">
                                <span className="career-date">
                                    <time dateTime="2005-02-01T00:00:00+00:00">
                                        2021년 2월</time>
                                    – <time dateTime="2010-08-01T00:00:00+00:00">
                                          2021년 5월</time>
                                </span>
                            </dd>
                            <dd className="career-description">
                                <a href="https://www.pawdly.com/">https://www.pawdly.com</a>
                                <li>포들리 파트너스, 사용자 앱 화면 개발</li>
                                <li>포들리 관리자 사이트 화면, back-end api 개발</li>
                                <li>아임포트 휴대폰 본인인증 서비스 개발</li>
                                <li>사용자 및 관리자 Kakao 알림톡 api 연동, Stibee 이메일 서비스 api 연동</li>
                                <p>Vue.js, MySql, Spring Boot(Gradle)</p>
                            </dd>

                            <dt className='career-title'>
                                - 세이브 더 칠드런 (sck)
                            </dt>
                            <dd className="career-meta">
                                <span className="career-date">
                                    <time dateTime="2005-02-01T00:00:00+00:00">
                                        2021년 1월</time>
                                    – <time dateTime="2010-08-01T00:00:00+00:00">
                                          2021년 3월</time>
                                </span>
                            </dd>
                            <dd className="career-description">
                                <li>세이브 더 칠드런 BackOffice 이메일 템플릿 적용 자동화 개발</li>
                            </dd>

                            <dt className='career-title'>
                                - SSG건설 빌리브 라이프 주거 서비스 <StarFilled  style={{color: '#f7d72a'}} />
                            </dt>
                            <dd className="career-meta">
                                <span className="career-date">
                                    <time dateTime="2005-02-01T00:00:00+00:00">
                                        2020년 6월</time>
                                    – <time dateTime="2010-08-01T00:00:00+00:00">
                                          2020년 12월</time>
                                </span>
                            </dd>
                            <dd className="career-description">
                                <a href="https://villiv.co.kr/main">https://villiv.co.kr/main</a>
                                <p>App Store, Google store 에서 villiv 검색</p>
                                <li>업무용 Back Office 개발, 주거 서비스 등록 및 관리</li>
                                <li>Ionic Framework(Angular10) 를 이용한 앱 화면 개발</li>
                                <li>Back-End Api 개발</li>
                                <p>Angular10(Typescript), Ionic Framework, Oracle, eXERD</p>
                            </dd>

                            <dt className='career-title'>
                                - SSG L&B 주류 서비스 유지, 운영
                            </dt>
                            <dd className="career-meta">
                                <span className="career-date">
                                    <time dateTime="2005-02-01T00:00:00+00:00">
                                        2020년 1월</time>
                                    – <time dateTime="2010-08-01T00:00:00+00:00">
                                          2020년 4월</time>
                                </span>
                            </dd>
                            <dd className="career-description">
                                Web: <a href="http://www.shinsegae-lnb.com/">http://www.shinsegae-lnb.com/</a>,
                                Mobile: <a href="http://m.promo.shinsegae-lnb.com/">http://m.promo.shinsegae-lnb.com/</a>
                                <li>SSG L&B 주류 서비스 유지 및 운영 - 주류 등록 및 화면 개발</li>
                                <li>개발 서버 이전 - data 이전, windowServer 이용하여 배포</li>
                                <p>Spring4, MsSql, JPA(Hibernate), JSP </p>
                            </dd>

                            <dt className='career-title'>
                                - 이마트 에브리데이 앱 프리권시 서비스 개발 <StarFilled  style={{color: '#f7d72a'}} />
                            </dt>
                            <dd className="career-meta">
                                <span className="career-date">
                                    <time dateTime="2005-02-01T00:00:00+00:00">
                                        2020년 2월</time>
                                    – <time dateTime="2010-08-01T00:00:00+00:00">
                                          2020년 6월</time>
                                </span>
                            </dd>
                            <dd className="career-description">
                                <li>spring batch 를 이용한 데이터 초기화 업무</li>
                                <li>프리퀀시용 이벤트 개발 - 프리퀀시 db 설계 및 Back-End Api(REST 이용) 개발, Vue.js를 이용한 화면 개발</li>
                                <p>Spring Batch, Vue.js, Oracle, Javascript</p>
                            </dd>

                            <dt className='career-title'>
                                - 이마트 에브리데이 서비스 유지 및 운영 <StarFilled  style={{color: '#f7d72a'}} />
                            </dt>
                            <dd className="career-meta">
                                <span className="career-date">
                                    <time dateTime="2005-02-01T00:00:00+00:00">
                                        2019년 2월</time>
                                    – <time dateTime="2010-08-01T00:00:00+00:00">
                                          2020년 2월</time>
                                </span>
                            </dd>
                            <dd className="career-description">
                                <a href="https://m.emarteveryday.co.kr">https://m.emarteveryday.co.kr</a>
                                <li>에브리데이 앱 이벤트용 화면 개발, 앱 사용자 및 이벤트 실적 추출</li>
                                <li>이벤트 당첨자 자동 추출 기능 개발</li>
                                <li>이벤트용 쿠폰 엑셀 업로드 기능 개발</li>
                                <li>자주 진행하는 이벤트 템플릿화 개발 - 이벤트 등록시 업무시간 줄임</li>
                                <p>eGovFrame, java7, Oracle, Jenkins, JSP, HTML5, Javascript, Vue,js</p>
                            </dd>

                        </dl>


                        <div className='line-content'/>

                        <h5>Behind.</h5>
                        <p className='behind-text'>
                            능동적으로 프로젝트를 수행하고 다양한 기술과 협업 능력을 높이며 웹 개발자가 지녀야 할 자질을 쌓아왔습니다.
                            항상 새로운 기술에 대한 관심과 배우고자 하는 열망을 바탕으로 업무에 임하겠습니다.
                        </p>

                    </div>


                </div>
            </div>
        </div>
    )
});

Resume.displayName = 'Resume';

export default Resume;

