function NavItem({ label, href, dropdown = false, dropdownItems = [] }) {
    if (dropdown) {
        return (
            <li className="nav-item dropdown">
                <a className="dropdown-toggle nav-link" href="#" data-bs-toggle="dropdown">
                    {label}
                </a>
                <ul className="dropdown-menu">
                    {dropdownItems.map((item, index) => (
                        <li key={index}>
                            <a className="dropdown-item" href={item.href}>
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </li>
        );
    } else {
        return (
            <li className="nav-item">
                <a className="nav-link" href={href}>
                    {label}
                </a>
            </li>
        );
    }
}
export default NavItem;