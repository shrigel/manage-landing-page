import Container from "../ui/Container"
import Button from "../ui/Button"
import heroImage from "../../images/illustration-intro.svg"

export default function HeroSection() {
    return (
        <Container className="hero-section">
            <img src={heroImage} alt="Hero Image" className="hero-section__image" />
            <div className="hero-section__content">
                <h1 className="hero-section__title">Bring everyone together to build better products.</h1>
                <p className="hero-section__description">Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
                <Button>Get Started</Button>
            </div>
        </Container>
    )
}