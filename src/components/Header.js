import {memo, useEffect, useState} from "react";
import {Layout, Menu} from "antd";
import '../css/Header.css';
import ProfileImage from "./ProfileImage";
import styled from 'styled-components';
import {HomeOutlined, IdcardOutlined, ProfileOutlined} from "@ant-design/icons";
const {Header} = Layout;


const NavStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const HeaderComponent = memo(({setPage}) => {

    const [profileActive, setProfileActive] = useState( '');
    const [resumeActive, setResumeActive] = useState( '');


    useEffect(() => {

    }, [])

    const clickProfile = (e) => {

        setPage('profile');
    }

    const clickCareer = (e) => {

        setPage('resume');
    }

    return (
        <Header className={'site-header'}>

            <Menu mode="horizontal" theme="light" defaultSelectedKeys={["profile"]} style={{width: '100%'}}>
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
