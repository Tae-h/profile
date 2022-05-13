import {memo} from "react";
import {Layout} from "antd";
import '../css/Header.css';
import {Link} from "react-router-dom";
const {Header} = Layout;



const HeaderComponent = memo(() => {

    return (
        <Header className={'site-header'}>
            <div className={'wrapper'}>
                header!!

                <nav className="site-nav">
                    <Link to="/">
                        프로필
                    </Link>
                    <Link to="/pages/resume">
                        경력 기술서
                    </Link>
                </nav>
            </div>
        </Header>
    )
});

export default HeaderComponent;