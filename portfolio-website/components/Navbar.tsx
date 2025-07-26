'use client'; // This is crucial because it uses state and hooks

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Icons from './Icons';


const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Education', href: '/education' },
    { name: 'Contact', href: '/contact' }
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname(); // Hook to get the current URL path

    const NavLink = ({ item }: { item: { name: string, href: string } }) => {
        const isActive = pathname === item.href;
        return (
            <Link
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`w-full text-left md:w-auto md:text-center block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                    isActive ? 'bg-cyan-500 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
            >
                {item.name}
            </Link>
        );
    };

    return (
        <nav className="bg-gray-800/80 backdrop-blur-sm sticky top-0 z-50 ">
            <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="font-bold text-white text-xl">A. Pezhman</Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navItems.map(item => <NavLink key={item.name} item={item} />)}
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700"
                        >
                            {isOpen ? <Icons name="x" className="block h-6 w-6" /> : <Icons name="menu" className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navItems.map(item => <NavLink key={item.name} item={item} />)}
                    </div>
                </div>
            )}
        </nav>
    );
}