import { useEffect } from 'react'
import { Link } from 'react-router-dom';

const MainNav = () => {
	
	const navItems = [
		{title: 'Home', to: '/', 'data-transition': true},
		{title: '404 error Page', to: '/test2', 'data-transition': true}
	];
	
	useEffect(() => {
        
        
		
		return () => {
            
            
			
		}
		
	});
	
	return(
		<nav>
			<ul>
			{
				navItems.map(({ title, ...attr }, i) => (
                    
					<li key={i}>
						<Link {...attr}>{title}</Link>
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