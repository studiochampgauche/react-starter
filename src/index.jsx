import { StrictMode } from 'react'
//import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Metas from './components/Metas.jsx'
import Scroller from './components/Scroller.jsx'
import Transitor from './components/Transitor.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import HomePage from './pages/HomePage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import './assets/scss/main.scss'

const mainNode = document.getElementById('viewport');
const root = createRoot(mainNode);


const App = () => {
    
	return (
		<Router>
            <Metas />
            <Header />
            <Scroller>
                <Transitor>
                    
                    <Routes>
                        <Route path="/" exact element={<HomePage />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                    
                    <Footer />
                    
                </Transitor>
            </Scroller>
		</Router>
	);
    
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);