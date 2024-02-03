import { Link } from 'react-router-dom';
import MainNav from './Nav.jsx';
import MainLogo from './Logo.jsx';

const Header = () => {
	
	return(
		<header>
			<div className="plywood">
				<div className="corps">
					<Link className="logo" to="/">
						<MainLogo alt="Demo" />
					</Link>
					<MainNav />
				</div>
			</div>
		</header>
	);
	
}


export default Header