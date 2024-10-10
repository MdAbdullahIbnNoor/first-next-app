import Link from 'next/link'
import React from 'react'

const Footer = () => {

    const links = [
        { title: 'Home', path: '/' },
        { title: 'About Us', path: '/about' },
        { title: 'Contact Us', path: '/contact' }
    ];

    return (
        <footer className="bg-blue-700 text-white py-8">
            <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
                <p>&copy; {new Date().getFullYear()} School Management System. All rights reserved.</p>
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
        </footer>
    )
}

export default Footer