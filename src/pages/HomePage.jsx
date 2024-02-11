import { useEffect } from 'react'
import { Link } from 'react-router-dom';


const HomePage = () => {
	
	useEffect(() => {
		
		document.title = 'Mon app'
		
		
		return () => {
			
			/*
			* Kill Instance and Events here.
			*/
			
		}
		
	})
	
	return(
		<>
			<p>Is front</p>
			<Link to="/test1" data-transition="true">Go 404</Link>
			<section id="h__intro">
				<div className="corps">
					
				</div>
			</section>
		</>
	);
	
}

export default HomePage