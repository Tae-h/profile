import {memo} from "react";
import {Layout, Image} from "antd";
import '../css/Header.css';
import {Link} from "react-router-dom";
import ProfileImage from "./ProfileImage";
import styled from 'styled-components';
const {Header} = Layout;


const NavStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`


const HeaderComponent = memo(() => {

    return (
        <Header className={'site-header'}>
            <div className={'wrapper'}>
                <ProfileImage />

                <nav className="site-nav">
                    <NavStyled>
                        <Link to="/">
                            프로필
                        </Link>
                        <Link to="/pages/resume">
                            경력 기술서
                        </Link>
                    </NavStyled>

                </nav>
            </div>
        </Header>
    )
});

export default HeaderComponent;