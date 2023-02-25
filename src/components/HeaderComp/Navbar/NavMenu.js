import React from 'react';
import NavItem from './NavItem';

function NavMenu() {
    const navItems = [
        { label: 'Categories', href: '#' },
        { label: 'Hot offers', href: '#' },
        { label: 'Gift boxes', href: '#' },
        { label: 'Projects', href: '#' },
        { label: 'Menu item', href: '#' },
        { label: 'Menu name', href: '#' },
        {
            label: 'Others',
            dropdown: true,
            dropdownItems: [
                { label: 'Submenu one', href: '#' },
                { label: 'Submenu two', href: '#' },
                { label: 'Submenu three', href: '#' },
            ],
        },
    ];

    return (
        <div className="collapse navbar-collapse" id="navbar_main">
            <ul className="navbar-nav">
                {navItems.map((item, index) => (
                    <NavItem key={index} {...item} />
                ))}
            </ul>
        </div>
    );
}


export default NavMenu;
