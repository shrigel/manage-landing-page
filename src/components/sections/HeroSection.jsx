import Container from "../ui/Container"
import Button from "../ui/Button"
import heroImage from "../../images/illustration-intro.svg"

export default function HeroSection() {
    return (
        <section className="hero">
            <Container className="hero__container">
                <img src={heroImage} alt="Hero Image" className="hero__image" />
                <div className="hero__content">
                    <h1 className="hero__title">Bring everyone together to build better products.</h1>
                    <p className="hero__description">Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
                    <Button>Get Started</Button>
                </div>
            </Container>
        </section>
    )
}