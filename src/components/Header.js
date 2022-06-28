import {memo} from "react";
import {Layout, Menu} from "antd";
import '../css/Header.css';
import {IdcardOutlined, ProfileOutlined} from "@ant-design/icons";
const {Header} = Layout;




const HeaderComponent = memo(({setPage}) => {



    const clickProfile = (e) => {

        setPage('profile');
    }

    const clickCareer = (e) => {

        setPage('resume');
    }

    return (
        <Header className={'site-header'}>
            <span style={{ fontFamily: 'serif', fontSize: ''}}>DEVELOPER</span>
            <Menu mode="horizontal" theme="light" defaultSelectedKeys={["profile"]} style={{width: '100%', justifyContent: 'end'}}>
                <Menu.Item key="profile" icon={<IdcardOutlined />} title="profile" onClick={ clickProfile}>
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
