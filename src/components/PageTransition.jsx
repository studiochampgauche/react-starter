import React, { useEffect, useState, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { gsap } from "gsap";

const PageTransition = ({ children }) => {
	
	
	const navigate = useNavigate();
	const location = useLocation();
	
	const [isLeaving, setIsLeaving] = useState(false);
	const [isEntering, setIsEntering] = useState(false);
	const canTransit = useRef(true);
	const to = useRef(null);
	
	
	useEffect(() => {
		
		
		document.querySelectorAll('a, .transit').forEach(item => {
			
			item.addEventListener('click', (e) => {
				
				e.preventDefault();
				
				if(!canTransit.current) return;
				canTransit.current = false;
				
				
				to.current = item.hasAttribute('href') ? item.getAttribute('href') : (item.getAttribute('data-to') ? item.getAttribute('data-to') : null);
				
				if(!to.current) return;
				
				setIsLeaving(true);
				
				console.log(location.pathname);
				
			});
			
		});
		
		
	});
	
	
	useEffect(() => {
		
		if(!isLeaving) return;
		
		gsap.to('main', 1, {
			opacity: 0,
			onComplete: () => {
				
				setIsLeaving(false);
				setIsEntering(true);
				
				
				navigate(to.current);
				
			}
		});
		
		
	}, [isLeaving]);
	
	
	useEffect(() => {
		
		if(!isEntering) return;
		
		gsap.to('main', .2, {
			opacity: 1,
			onComplete: () => {
				
				setIsEntering(false);
				canTransit.current = true;
				
			}
		});
		
		
	}, [isEntering]);
	
	return(
		 <>
			{children}
		</>
	)
	
}
export default PageTransition