import {memo} from "react";
import {Layout} from "antd";
import '../css/Header.css';
import {BrowserRouter, Link, Router} from "react-router-dom";
const {Header} = Layout;





const HeaderComponent = memo(() => {

    return (
        <Header className={'site-header'}>
            <div className={'wrapper'}>
                header!!

                <nav className="site-nav">
                    <BrowserRouter>
                        <Link to="/">
                            Profile
                        </Link>
                        <Link to="/pages/resume">
                            Career SKills
                        </Link>
                    </BrowserRouter>
                </nav>
            </div>
        </Header>
    )
});

export default HeaderComponent;