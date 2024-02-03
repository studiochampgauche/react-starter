import { useEffect } from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
	
	useEffect(() => {
		
		document.title = 'Erreur 404 - Mon app'
		
	})
	
	return(
		<>
			<p>Is 404</p>
			<Link to="/">Go Home</Link>
		</>
	);
	
}

export default NotFound