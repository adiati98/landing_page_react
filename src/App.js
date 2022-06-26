// import Header from './components/Header.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Footer from './components/Footer.jsx'
import navData from './data/navData.js'
import './css/app.css'

function App() {
	return (
		<div className='App'>
			<Navbar linkData={navData} />
			<Hero />
			<Footer linkData={navData} />
		</div>
	)
}

export default App
