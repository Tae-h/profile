import './App.css';
import { useState} from "react";
import Profile from "./pages/Profile";
import './css/common.css'
import HeaderComponent from "./components/Header";
import FooterComponent from "./components/Footer";
import {Layout} from "antd";
import {Content} from "antd/es/layout/layout";
import {Helmet} from "react-helmet";
import Home from "./pages/Home";
import Career from "./pages/Career";


function App() {
    const [page, setPage] = useState('home');


    const renderPage = () => {

        if ( page === 'profile' ) {
            return <Profile />
        } else if ( page === 'career') {
            return <Career />
        } else {
            return <Home />
        }
    }

  return (
      <>
          <Layout>
              <Helmet>
                  <title>Taehoon Kim - Developer</title>
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
