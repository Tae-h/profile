import {memo} from "react";
import {Layout} from "antd";
import HeaderComponent from "./Header";
import FooterComponent from "./Footer";
import '../css/common.css';
const {Content} = Layout;




const AppLayout = memo(({ children }) => {

    return (

        <Layout>
            <HeaderComponent />

            <Content className='site-main'>
                {children}
            </Content>

            <FooterComponent />
        </Layout>

    )
});

AppLayout.displayName = 'AppLayout';

export default AppLayout;