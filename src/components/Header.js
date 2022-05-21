import {memo, useEffect, useState} from "react";
import {Layout} from "antd";
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

    const [profileActive, setProfileActive] = useState( '');
    const [resumeActive, setResumeActive] = useState( '');

    useEffect(() => {
        let currentPath = window.location.pathname;
        let pathArr = currentPath.split('/');

        if ( pathArr[pathArr.length -1 ] === 'profile' ) {
            clickProfile();
        } else {
            clickResume();
        }

    }, [])

    const clickProfile = (e) => {
        setProfileActive('active');
        setResumeActive('');
    }

    const clickResume = (e) => {
        setProfileActive('');
        setResumeActive('active');
    }

    return (
        <Header className={'site-header'}>
            <div className={'wrapper'}>
                <div className='site-title'>
                    <ProfileImage />
                </div>

                <nav className="site-nav">

                    <NavStyled>
                        <Link to="/profile" className={'page-link ' + profileActive} onClick={ clickProfile }>
                            Profile
                        </Link>
                        <Link to="/profile/resume" className={'page-link ' + resumeActive} onClick={ clickResume }>
                            Work-Experience
                        </Link>
                    </NavStyled>

                </nav>
            </div>
        </Header>

    )
});

HeaderComponent.displayName = 'HeaderComponent';

export default HeaderComponent;