import NavBar from './components/layout/NavBar'
import HeroSection from './components/sections/HeroSection'
import FeatureSection from './components/sections/FeatureSection'
import TestimonialsSection from './components/sections/TestimonialsSection'
import CtaSection from './components/sections/CtaSection'
import Footer from './components/layout/Footer'

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
			<Footer />
		</>
	)
}

export default App
