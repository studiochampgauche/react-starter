import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

const MainNav = (props) => {
	
	const navItems = [
		{title: 'Teste 1', to: '/test1'},
		{title: 'Teste 2', to: '/test2'}
	];
	
	useEffect(() => {
		
		/*
		* Events here
		*/
		
		return () => {
			
			/*
			* Kill events here
			*/
			
		}
		
	});
	
	return(
		<nav>
			<ul>
			{
				navItems.map((item, i) => (
					<li key={i}>
						<Link to={item.to}>{item.title}</Link>
					</li>
				))
			}
			</ul>
			<div className="ham-menu">
				<span></span>
				<span></span>
				<span></span>
			</div>
		</nav>
	)
	
}
export default MainNav