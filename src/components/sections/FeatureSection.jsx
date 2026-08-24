import Container from "../ui/Container";
import { featuresData } from "../../data/featuresData";

export default function FeatureSection() {
    return (
        <Container className="features">
            <div className="features__intro">
                <h2 className="features__title">What's different about Manage?</h2>
                <p className="features__description">Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.</p>
            </div>
            <ol className="features__list">
                {featuresData.map((feature) => (
                    <li key={feature.id} className="features__item">
                        <div className="features__item-header">
                            <span className="features__item-number">{feature.number}</span>
                            <h3 className="features__item-title">{feature.title}</h3>
                        </div>
                        <p className="features__item-description">{feature.description}</p>
                    </li>
                ))}
            </ol>
        </Container>
    )
}