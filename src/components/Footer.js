import {memo} from "react";
import {Layout} from "antd";
import styled from 'styled-components';
import '../css/Footer.css';
import {GithubFilled, MailOutlined} from '@ant-design/icons';


const {Footer} = Layout;

const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const ContactStyled = styled.div`
  order: 2;
  white-space: nowrap;
  font-size: 2rem;
  margin-left: 2rem;
`;



const FooterTitle = styled.div`
  order: 1;
  display: none;
`;

const FooterComponent = memo(() => {

    return (
        <Footer className={'site-footer'}>
            <FooterWrapper className={'wrapper'}>
                {/* footer title */}
                <FooterTitle>

                </FooterTitle>

                {/* footer-contact */}
                <ContactStyled>

                    <a href="https://github.com/Tae-h" className="contact-link footer-icons" aria-label="Visit github">
                        <GithubFilled />
                    </a>

                    <a href="mailto:zppy13@gmail.com" className="contact-link circle footer-icons" aria-label="Send email">
                        <MailOutlined />
                    </a>

                </ContactStyled>

                {/* footer-copyright */}
                <div className={'footer-copyright'}>
                    © Taehoon Kim
                </div>

            </FooterWrapper>
        </Footer>
    )
});

export default FooterComponent;