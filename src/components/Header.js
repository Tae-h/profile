import {memo, useEffect, useState} from "react";
import {Layout} from "antd";
import '../css/Header.css';
import ProfileImage from "./ProfileImage";
import styled from 'styled-components';
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
        setProfileActive('active');
        setResumeActive('');
    }, [])

    const clickProfile = (e) => {
        setProfileActive('active');
        setResumeActive('');
        setPage('profile');
    }

    const clickResume = (e) => {
        setProfileActive('');
        setResumeActive('active');
        setPage('resume');
    }

    return (
        <Header className={'site-header'}>
            <div className={'wrapper'}>
                <div className='site-title'>
                    <ProfileImage />
                </div>

                <nav className="site-nav">

                    <NavStyled>
                        <div className={'page-link ' + profileActive} onClick={ clickProfile }>
                            Profile
                        </div>
                        <div className={'page-link ' + resumeActive} onClick={ clickResume }>
                            Work-Experience
                        </div>
                    </NavStyled>
                </nav>
            </div>
        </Header>

    )
});

HeaderComponent.displayName = 'HeaderComponent';

export default HeaderComponent;