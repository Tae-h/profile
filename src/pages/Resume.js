import {memo} from "react";
import { StarTwoTone} from "@ant-design/icons";
import '../css/resume.css';
import {PageTitle} from "./Profile";





const Resume = memo(() => {

    return (
        <div className={'wrapper'}>
            <div className={"inner-wrapper"}>
                <div className='page'>

                    <div className='page-header'>
                        <PageTitle className='page-title'>
                            Work Experience.
                        </PageTitle>
                        <p className='page-subtitle'>
                            4년차 웹 개발자 김태훈입니다.
                        </p>
                        <div>
                            웹 표준에 맞춰 의미 있는 구조를 가지며, 다양한 환경에 반응하도록 디자인과 UX를 구현하고, (검색엔진을 포함하여) 모두가 접근 가능한 웹사이트를 만들기 위해 노력하고 있습니다.
                        </div>
                    </div>

                    <div className='page-content'>

                        <h5>Project</h5>
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

                        <div className='line-content'/>

                        <h5>SKILL.</h5>
                        <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                        </ul>

                        <div className='line-content'/>

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

