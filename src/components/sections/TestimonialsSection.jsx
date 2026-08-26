import { testimonialsData } from "../../data/testimonialsData"
import useEmblaCarousel from "embla-carousel-react";
import Button from "../ui/Button";
import { useEffect, useState } from "react";

export default function TestimonialsSection() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on('select', () => {
            setSelectedIndex(emblaApi.selectedScrollSnap());
        });
    }, [emblaApi]);

    return (
        <section className="testimonials">
            <h2 className="testimonials__title">What they've said</h2>

            <div className="testimonials__viewport" ref={emblaRef}>
                <div className="testimonials__slide">
                    {testimonialsData.map((testi) => (
                        <div className="testimonials__card" key={testi.id}>
                            <img className="testimonials__avatar" src={testi.avatar} alt={testi.name} />
                            <h3 className="testimonials__name">{testi.name}</h3>
                            <p className="testimonials__quote">{testi.quote}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="testimonials__dots">
                {testimonialsData.map((_, index) => (
                    <button
                        key={index}
                        className={`testimonials__dot ${selectedIndex === index ? 'testimonials__dot--active' : ''}`}
                        onClick={() => emblaApi?.scrollTo(index)}
                    />
                ))}
            </div>

            <Button>Get Started</Button>
        </section >
    )
}