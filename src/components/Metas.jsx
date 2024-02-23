import { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

const Metas = () => {
    
    const { pathname } = useLocation();
    
    window.metadata = {
        siteName: 'My App'
    }
    
    useEffect(() => {
        
        /*
        * Change Metas
        */
        document.title = window.metadata.pageName + ' - ' + window.metadata.siteName;
        
		
		
		return () => {
			
		}
		
		
	}, [pathname]);
	
	
	
	
	return;
	
}
export default Metas;