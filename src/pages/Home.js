import {PageTitle} from "./Profile";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {useRef} from "react";
import {Button, Card, Col, Divider, Row, Timeline} from "antd";
import {ArrowLeftOutlined, ArrowRightOutlined, SmileOutlined} from "@ant-design/icons";



const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const Home = () => {

    const slider = useRef(null);

    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const next = () => {
        slider.current.slickNext();
    }
    const previous = () => {
        slider.current.slickPrev();
    }


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

                        {/*<div className='sub-introduce' >
                            4년 차 개발자로 작은 SI 회사에서 웹 서비스를 개발/배포/운영하였습니다.<br />
                            Front, Back 구분 없이 개발을 담당했으며 필요에 따라 PM(Project Manager) 역할을 하기도 하였습니다.
                            <br />
                            <br />
                            반복되는 일을 자동화하고 비효율적인 프로세스를 개선하는 일을 좋아합니다.<br />
                            운영팀의 단순/루틴 업무 시간을 줄이기 위해 지속적으로 백오피스를 개발하여 운영팀 업무 시간을 줄였던 경험이 있습니다.
                            <br />

                        </div>*/}

                    </div>
                    {/* slick */}
                    <div className='page-content'>
                        <Slider {...settings} ref={slider} style={{border: '1px solid black', height: '400px'}}>
                            <div style={{height: '100%'}}>
                                <div style={contentStyle}>1</div>
                            </div>

                            <div>
                                <Card hoverable>
                                    <p>Card content</p>
                                    <p>Card content</p>
                                    <p>Card content</p>
                                </Card>
                            </div>

                            <div>
                                <h3>4</h3>
                            </div>

                        </Slider>

                        <div style={{ textAlign: "center", marginTop: '24px', marginBottom: '24px' }}>
                            <Button
                                onClick={ previous }
                                icon={<ArrowLeftOutlined />}
                                shape={"circle"}
                            />

                            <span style={{marginLeft: '24px', marginRight: '24px'}}>1/3</span>

                            <Button
                                className="button"
                                onClick={ next }
                                icon={<ArrowRightOutlined />}
                                shape={"circle"}
                            />

                        </div>


                        <Divider orientation="left" >EXPERIENCE.</Divider>
                        {/* Row */}
                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{ justifyContent: 'center' }}>
                            <Col span={8} style={{alignItems: 'center'}}>
                                <Card hoverable
                                      cover={
                                        <div style={{backgroundColor: 'rgba(0,0,0,.5)'}}>
                                            <img alt="frontend"
                                                  style={{height: '250px', width: '100%', backgroundSize: 'cover'}}
                                                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>
                                        </div>}
                                >
                                    <Timeline>
                                        <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
                                        <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
                                        <Timeline.Item color="red">
                                            <p>Solve initial network problems 1</p>
                                            <p>Solve initial network problems 2</p>
                                            <p>Solve initial network problems 3 2015-09-01</p>
                                        </Timeline.Item>
                                        <Timeline.Item>
                                            <p>Technical testing 1</p>
                                            <p>Technical testing 2</p>
                                            <p>Technical testing 3 2015-09-01</p>
                                        </Timeline.Item>
                                        <Timeline.Item color="gray">
                                            <p>Technical testing 1</p>
                                            <p>Technical testing 2</p>
                                            <p>Technical testing 3 2015-09-01</p>
                                        </Timeline.Item>
                                        <Timeline.Item color="gray">
                                            <p>Technical testing 1</p>
                                            <p>Technical testing 2</p>
                                            <p>Technical testing 3 2015-09-01</p>
                                        </Timeline.Item>
                                        <Timeline.Item color="#00CCFF" dot={<SmileOutlined />}>
                                            <p>Custom color testing</p>
                                        </Timeline.Item>
                                    </Timeline>
                                </Card>
                            </Col>

                            <Col span={8}>
                                <Card hoverable
                                      cover={<img alt="frontend"
                                                  style={{height: '250px'}}
                                                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
                                >
                                    <Timeline>
                                        <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
                                        <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
                                        <Timeline.Item color="red">
                                            <p>Solve initial network problems 1</p>
                                            <p>Solve initial network problems 2</p>
                                            <p>Solve initial network problems 3 2015-09-01</p>
                                        </Timeline.Item>
                                        <Timeline.Item>
                                            <p>Technical testing 1</p>
                                            <p>Technical testing 2</p>
                                            <p>Technical testing 3 2015-09-01</p>
                                        </Timeline.Item>
                                        <Timeline.Item color="gray">
                                            <p>Technical testing 1</p>
                                            <p>Technical testing 2</p>
                                            <p>Technical testing 3 2015-09-01</p>
                                        </Timeline.Item>
                                        <Timeline.Item color="gray">
                                            <p>Technical testing 1</p>
                                            <p>Technical testing 2</p>
                                            <p>Technical testing 3 2015-09-01</p>
                                        </Timeline.Item>
                                        <Timeline.Item color="#00CCFF" dot={<SmileOutlined />}>
                                            <p>Custom color testing</p>
                                        </Timeline.Item>
                                    </Timeline>
                                </Card>
                            </Col>

                            <Col span={8}>
                                <Card hoverable
                                      cover={<img alt="관심"
                                                  style={{height: '250px'}}
                                                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                                      />}
                                >
                                    <Timeline>
                                        <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
                                        <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
                                        <Timeline.Item color="red">
                                            <p>Solve initial network problems 1</p>
                                            <p>Solve initial network problems 2</p>
                                            <p>Solve initial network problems 3 2015-09-01</p>
                                        </Timeline.Item>
                                        <Timeline.Item>
                                            <p>Technical testing 1</p>
                                            <p>Technical testing 2</p>
                                            <p>Technical testing 3 2015-09-01</p>
                                        </Timeline.Item>
                                        <Timeline.Item color="gray">
                                            <p>Technical testing 1</p>
                                            <p>Technical testing 2</p>
                                            <p>Technical testing 3 2015-09-01</p>
                                        </Timeline.Item>
                                        <Timeline.Item color="gray">
                                            <p>Technical testing 1</p>
                                            <p>Technical testing 2</p>
                                            <p>Technical testing 3 2015-09-01</p>
                                        </Timeline.Item>
                                        <Timeline.Item color="#00CCFF" dot={<SmileOutlined />}>
                                            <p>Custom color testing</p>
                                        </Timeline.Item>
                                    </Timeline>
                                </Card>
                            </Col>

                        </Row>

                    </div>


                </div>
            </div>

        </div>
    )

}

export default Home;

