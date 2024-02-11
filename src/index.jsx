import React, { StrictMode } from 'react'
//import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PageTransition from './components/PageTransition.jsx'
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
			<PageTransition>
				<Header />
				<div id="pageWrapper">
					<div id="pageContent">
						<main>
							<Routes>
								<Route path="/" exact element={<HomePage />} />
								<Route path="*" element={<NotFoundPage />} />
							</Routes>
						</main>
					</div>
				</div>
				<Footer />
			</PageTransition>
		</Router>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);