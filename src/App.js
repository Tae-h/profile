import './App.css';
import { useState} from "react";
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
