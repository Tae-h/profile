import {memo, useState} from "react";
import {Image, Layout, Menu} from "antd";
import '../css/Header.css';
import {IdcardOutlined, ProfileOutlined} from "@ant-design/icons";
import sproutImage from '../assets/images/icon-sprout.png';
const {Header} = Layout;





const HeaderComponent = memo(({setPage}) => {

    const [selected, setSelected] = useState([]);

    const clickProfile = (e) => {
        setPage('profile');
        setSelected(['profile']);
    }

    const clickCareer = (e) => {
        setPage('career');
        setSelected(['career']);
    }

    const clickHome = (e) => {
        setPage('home');
        setSelected([]);
    }

    return (
        <Header className={'site-header'}>
            <span style={{ fontFamily: 'serif'}}>
                <a href="#" onClick={clickHome}>DEVELOPER</a>
            </span>
            <Image src={sproutImage} preview={false} style={{ marginLeft: '10px', height: '50%' }}/>


            <div>

            </div>
            <Menu mode="horizontal" theme="light" selectedKeys={selected} style={{width: '100%', justifyContent: 'end'}}>
                <Menu.Item key="profile" icon={<IdcardOutlined />} title="profile" onClick={ clickProfile } >
                    PROFILE
                </Menu.Item>

                <Menu.Item key="career" icon={<ProfileOutlined />} title="CAREERS" onClick={ clickCareer }>
                    CAREERS
                </Menu.Item>
            </Menu>
        </Header>

    )
});




HeaderComponent.displayName = 'HeaderComponent';

export default HeaderComponent;
