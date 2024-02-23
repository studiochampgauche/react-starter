import { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

const Metas = () => {
    
    const { pathname } = useLocation();
    
    window.metadata = {
        siteName: 'My App',
        robots: {
            index: true,
            follow: true,
            'max-image-preview': 'large'
        }
    }
    
    useEffect(() => {
        
        /*
        * Title
        */
        const title = () => {
            
            document.title = pathname === '/' ? window.metadata.siteName : window.metadata.pageName + ' - ' + window.metadata.siteName;
            
        }
        title();
        
        
        /*
        * Robots
        */
        const robots = () => {
            
            if(!window.metadata.robots || !Object.keys(window.metadata.robots).length) return;
            
            
            let meta = document.querySelector('meta[name=robots]');
            if(!meta){
                
                meta = document.createElement('meta');
                meta.name = 'robots';
                
                document.head.prepend(meta);
                
            }
            
            meta.content = Object.keys(window.metadata.robots).map(key => {
                
                const value = window.metadata.robots[key];
                
                return value ? (value !== true ? `${key}:${value}` : key) : value;
                
            })
            .filter(value => value)
            .join(', ');
            
        }
        robots();
        
		
		
		return () => {
			
		}
		
		
	}, [pathname]);
	
	
	
	
	return;
	
}
export default Metas;