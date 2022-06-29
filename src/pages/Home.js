import {PageTitle} from "./Profile";

const Home = () => {

    return (
        <div className={'wrapper'}>
            <div className={"inner-wrapper"}>
                <div className='page'>

                    <div className='page-header'>
                        <PageTitle className='page-title'>
                            INTRODUCE.
                        </PageTitle>

                        <p className='page-subtitle'>
                            노력하는 개발자 김태훈입니다.
                        </p>

                        <div className='sub-introduce' >
                            4년 차 개발자로 작은 SI 회사에서 웹 서비스를 개발/배포/운영하였습니다.<br />
                            Front, Back 구분 없이 개발을 담당했으며 필요에 따라 PM(Project Manager) 역할을 하기도 하였습니다.
                            <br />
                            <br />
                            반복되는 일을 자동화하고 비효율적인 프로세스를 개선하는 일을 좋아합니다.<br />
                            운영팀의 단순/루틴 업무 시간을 줄이기 위해 지속적으로 백오피스를 개발하여 운영팀 업무 시간을 줄였던 경험이 있습니다.
                            <br />

                        </div>

                    </div>


                </div>
            </div>

        </div>
    )

}

export default Home;
