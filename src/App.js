// import Header from './components/Header.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Category from './components/Category.jsx'
import CardsContainer from './components/CardsContainer.jsx'
import ClientList from './components/ClientList.jsx'
import Footer from './components/Footer.jsx'
import navData from './data/navData.js'
import cardsData from './data/cardsData.js'
import clientsData from './data/clientsData.js'
import Form from './components/Form.jsx'
import './css/app.css'

function App() {
	return (
		<div className='App'>
			<Navbar linkData={navData} />
			<Hero />
			<Category />
			<CardsContainer cardsData={cardsData}/>
			<ClientList clientsData={clientsData}/>
			<Form />
			<Footer linkData={navData} />
		</div>
	)
}

export default App
