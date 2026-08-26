import { useState } from "react";
import Logo from "../ui/Logo";
import Button from "../ui/Button";
import Container from "../ui/Container";
import MobileMenu from "./MobileMenu";
import { headerNavLinks } from "../../data/navLinks";
import iconHamburger from "../../images/icon-hamburger.svg";
import iconClose from "../../images/icon-close.svg";

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prevState) => !prevState);
    };


    return (
        <header className="header">
            <Container>
                <nav className="nav">
                    <Logo />

                    <ul className="nav__menu--desktop">
                        {headerNavLinks.map((link) => (
                            <li key={link.id}>
                                <a href={link.href} className="nav__link">
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <Button className="nav__cta--desktop">Get Started</Button>

                    <button
                        className="nav__toggle"
                        onClick={toggleMenu}
                        aria-expanded={isMenuOpen}
                        aria-label="Toggle navigation">
                        <img src={isMenuOpen ? iconClose : iconHamburger} alt="" />
                    </button>
                </nav>
            </Container>

            {isMenuOpen && <MobileMenu links={headerNavLinks} onClose={() => setIsMenuOpen(false)} />}
        </header>
    )
}