import React from 'react';
import Link from "next/link";

const Navbar = () => {
    const links = [
        { title: 'Home', path: '/' },
        { title: 'About Us', path: '/about' },
        { title: 'Contact Us', path: '/contact' }
    ];

    return (
        <nav className="bg-blue-700 text-white p-8">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-3xl font-bold">School Management System</div>
                <div>
                    <ul className="flex space-x-4">
                        {links.map((link) => (
                            <li key={link.path}>
                                <Link href={link.path} className="hover:text-gray-200">
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
