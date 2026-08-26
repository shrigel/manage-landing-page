import NavBar from './components/layout/NavBar'
import HeroSection from './components/sections/HeroSection'
import FeatureSection from './components/sections/FeatureSection'
import TestimonialsSection from './components/sections/TestimonialsSection'
import CtaSection from './components/sections/CtaSection'

function App() {
	return (
		<>
			<NavBar />
			<main>
				<HeroSection />
				<FeatureSection />
				<TestimonialsSection />
				<CtaSection />
			</main>
		</>
	)
}

export default App
