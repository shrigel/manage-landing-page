import Button from "../ui/Button";
import Container from "../ui/Container";

export default function CtaSection() {
    return (
        <section className="cta">
            <Container className="cta__container">
                <h2 className="cta__title">Simplify how your team works today.</h2>
                <Button variant="inverted">Get Started</Button>
            </Container>
        </section>
    );
}