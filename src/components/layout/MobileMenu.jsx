export default function MobileMenu({ links, onClose }) {
    return (
        <div className="nav__overlay" onClick={onClose}>
            <div className="nav__mobile-card" onClick={(e) => e.stopPropagation()}>
                <ul className="nav__mobile-list">
                    {links.map((link) => (
                        <li key={link.id} className="nav__mobile-item">
                            <a href={link.href} className="nav__mobile-link" onClick={onClose}>
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
