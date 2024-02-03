import Logo from '../assets/images/dev-tag.svg'

const MainLogo = (props) => {
	
	return(
		<>
		<img src={Logo} alt={props.alt} />
		</>
	)
	
}
export default MainLogo