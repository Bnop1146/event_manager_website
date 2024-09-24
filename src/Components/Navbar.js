import { useState } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '../assets/images/Mie_logo.png';

const navigationItems = [
  { name: 'Hjem', href: '#home' },
  { name: 'Om Mig', href: '#about' },
  { name: 'Portfølje', href: '#portfolio' },
  { name: 'Tjenester', href: '#services' },
  { name: 'Kontakt', href: '#contact' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function Navbar() {
  const [activeLink, setActiveLink] = useState('#home'); // Set default active link

  const handleLinkClick = (href) => {
    setActiveLink(href); // Update active link on click
  };

  return (
    <Disclosure as="nav" className="bg-white-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-1">
        <div className="relative flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex flex-1 items-center justify-center sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img alt="Your Company" src={logo} className="h-16 w-auto" />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => handleLinkClick(item.href)}
                  aria-current={activeLink === item.href ? 'page' : undefined}
                  className={classNames(
                    'underline-active', // Apply the hover and active effect class
                    activeLink === item.href
                      ? 'text-regal-purple'
                      : 'text-black hover:text-regal-purple',
                    'relative px-3 py-2 text-sm font-medium transition-all duration-300',
                  )}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      <DisclosurePanel
        className="sm:hidden transition-all duration-300 ease-out transform origin-top"
        enter="transition duration-300 ease-out"
        enterFrom="opacity-0 transform -translate-y-4"
        enterTo="opacity-100 transform translate-y-0"
        leave="transition duration-200 ease-in"
        leaveFrom="opacity-100 transform translate-y-0"
        leaveTo="opacity-0 transform -translate-y-4"
      >
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigationItems.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              onClick={() => handleLinkClick(item.href)}
              aria-current={activeLink === item.href ? 'page' : undefined}
              className={classNames(
                'underline-active', // Apply the hover effect class
                activeLink === item.href
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}

export default Navbar;
