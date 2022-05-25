import './App.css';
import {useEffect, useState} from "react";
import Profile from "./pages/Profile";
import './css/common.css'
import Resume from "./pages/Resume";
import HeaderComponent from "./components/Header";
import FooterComponent from "./components/Footer";
import {Layout} from "antd";
import {Content} from "antd/es/layout/layout";
import {Helmet} from "react-helmet";


function App() {
    const [page, setPage] = useState('profile');

    /*useEffect(() => {
        document.title = "안녕하세요! 김태훈입니다. | 웹 개발";
    }, []);*/


    const renderPage = () => {

        if ( page === 'profile' ) {
            return <Profile />
        } else {
            return <Resume />
        }
    }

  return (
      <>
          <Layout>
              <Helmet>
                  <title>안녕하세요! 김태훈입니다. | 웹 개발</title>
                  <meta property="og:title" content='[Profile] 안녕하세요! 김태훈입니다.' />
                  <meta property="og:description" content='이력서 및 경력기술서' />
                  <meta property="og:url" content="https://tae-h.github.io/profile/" />
                  <meta property="og:image" content='https://tae-h.github.io/profile/favicon.ico' />
              </Helmet>

              <HeaderComponent setPage={setPage}/>

              <Content className='site-main'>
                  { renderPage() }
              </Content>

              <FooterComponent />
          </Layout>
      </>

  );
}

export default App;
