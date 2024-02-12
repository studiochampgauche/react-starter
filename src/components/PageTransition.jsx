import React, { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { gsap } from "gsap";

const PageTransition = ({ children }) => {
	
	
	const navigateRef = useRef(useNavigate());
	
	const [isLeaving, setIsLeaving] = useState(false);
	const [isEntering, setIsEntering] = useState(false);
	const canTransit = useRef(true);
	const to = useRef(null);
	
	
	useEffect(() => {
		
		const elements = document.querySelectorAll('[data-transition=true]');
		if(!elements.length) return;
		
		
		const events = [];
		
		elements.forEach(item => {
			
			const handleClick = (e) => {
			
				e.preventDefault();

				if(!canTransit.current) return;
				canTransit.current = false;


				to.current = item.getAttribute('href') || item.getAttribute('data-to');

				if(!to.current) return;

				setIsLeaving(true);
				
			}
			
			
			item.addEventListener('click', handleClick);
			events.push({element: item, event: handleClick});
			
		});
		
		
		
		return () => {
			
			if(!events.length) return;
			
			events.forEach(({ element, event }) => {
				
				element.removeEventListener('click', event);
				
			});
			
		}
		
		
	});
	
	
	useEffect(() => {
		
		if(!isLeaving) return;
		
		const tl = gsap.timeline({
			onComplete: () => {
				
				setIsLeaving(false);
				setIsEntering(true);
				
				
				navigateRef.current(to.current);
				
			}
		});
		
		
		tl
		.to('main', .2, {
			opacity: 0
		});
		
		
		return () => {
			
			tl.kill();
			
		}
		
		
	}, [isLeaving]);
	
	
	useEffect(() => {
		
		if(!isEntering) return;
		
		
		const tl = gsap.timeline({
			onComplete: () => {
				
				setIsEntering(false);
				canTransit.current = true;
				
			}
		});
		
		tl
		.to('main', .2, {
			opacity: 1
		});
		
		
		return () => {
			
			tl.kill();
			
		}
		
		
	}, [isEntering]);
	
	
	return(
		 <>
			{children}
		</>
	)
	
}
export default PageTransition