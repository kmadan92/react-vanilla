import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Image, Button } from './index.js';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

export default function Header() {
  const userLoggedIn = useSelector((state) => state.auth.isUserLoggedIn);

  const navItems = [
    {
      name: 'Dashboard',
      slug: '/dashboard',
      active: userLoggedIn,
    },
    {
      name: 'Project',
      slug: '/project',
      active: userLoggedIn,
    },
    {
      name: 'Sign-In',
      slug: '/signin',
      active: !userLoggedIn,
    },
    {
      name: 'Sign-Up',
      slug: '/signup',
      active: !userLoggedIn,
    },
  ];

  return (
    <>
      <div className="w-full px-4 py-2 flex items-center bg-blue-950">
        {/* Logo */}
        <div className=" text-xl flex-col text-white">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg"
            alt="Microsoft Azure Logo"
            className="h-10"
          />
          Fleet Management Platform
        </div>

        {/* Navigation */}
        <nav className="md:flex space-x-6 ml-30">
          {navItems.map((nav) =>
            nav.active ? (
              <div key={nav.name}>
                <NavLink
                  to={nav.slug}
                  className={({ isActive }) =>
                    isActive
                      ? 'text-white text-xl font-bold rounded transition-all duration-300 ease-in-out'
                      : 'text-blue-400 text-lg rounded ease-in hover:text-blue-300 hover:text-xl transition-all duration-300'
                  }
                >
                  {nav.name}
                </NavLink>
              </div>
            ) : null
          )}
        </nav>

        <div className="flex-grow max-w-md ml-20">
          <input
            type="text"
            placeholder="Ask Debug Copilot..."
            className="w-full p-3 rounded-2xl bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
          />
        </div>

        {/* Mobile Menu Button (optional) */}
        <button
          className="md:hidden text-gray-600 hover:text-black"
          aria-label="Open menu"
        >
          ☰
        </button>
      </div>
    </>
  );
}
