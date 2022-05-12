import {memo} from "react";
import {Layout} from "antd";
import styled from 'styled-components';
import HeaderComponent from "./Header";
import FooterComponent from "./Footer";
const {Content} = Layout;




const AppLayout = memo(({ children }) => {

    return (

        <Layout>
            <HeaderComponent />
            <Content>
                {children}
            </Content>
            <FooterComponent />
        </Layout>

    )
});

export default AppLayout;