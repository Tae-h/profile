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
  align-items: flex-start;
`


const HeaderComponent = memo(() => {

    return (
        <Header className={'site-header'}>
            <div className={'wrapper'}>
                <div className='site-title'>
                    <ProfileImage />
                </div>


                <nav className="site-nav">
                    <NavStyled>
                        <Link to="/" className='page-link active'>
                            Profile
                        </Link>
                        <Link to="/pages/resume" className='page-link'>
                            경력 기술서
                        </Link>
                    </NavStyled>

                </nav>
            </div>
        </Header>
    )
});

export default HeaderComponent;