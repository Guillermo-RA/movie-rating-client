import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import ScrollToTop from "./helpers/scroll-to-top";
import WebRouter from "./components/WebRouter/web-router";

// TODO Establecer el resto de rutas en el .env
const App = () => {
    return (
            <div className='app-container'>
                <Header/>
                <div className='main'>
                    <ScrollToTop />
                    <WebRouter />
                </div>
                <Footer/>
            </div>
    )
}

export default App;
