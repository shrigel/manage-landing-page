import Container from './components/ui/Container'
import Button from './components/ui/Button'
import Logo from './components/ui/Logo'
import NavBar from './components/layout/NavBar'
import HeroSection from './components/sections/HeroSection'
import FeatureSection from './components/sections/FeatureSection'

function App() {
	return (
		<>
			<NavBar />
			<main>
				<HeroSection />
				<FeatureSection />
			</main>
		</>
	)
}

export default App
