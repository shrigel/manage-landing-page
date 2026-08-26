import NavBar from './components/layout/NavBar'
import HeroSection from './components/sections/HeroSection'
import FeatureSection from './components/sections/FeatureSection'
import TestimonialsSection from './components/sections/TestimonialsSection'

function App() {
	return (
		<>
			<NavBar />
			<main>
				<HeroSection />
				<FeatureSection />
				<TestimonialsSection />
			</main>
		</>
	)
}

export default App
