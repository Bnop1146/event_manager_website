import { useState, useEffect } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '../assets/images/Mie new logo.png';

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
  const [isScrolled, setIsScrolled] = useState(false); // State to track scroll position

  const handleLinkClick = (href) => {
    setActiveLink(href); // Update active link on click
  };

  // Effect to handle scroll event and set background color on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Disclosure as="nav" className={classNames(
      'fixed top-0 w-full z-50 transition-colors duration-300',
      isScrolled ? 'bg-white shadow-lg pb-4' : 'bg-transparent'
    )}>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 pt-4">
        <div className="relative flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex flex-1 items-center justify-center sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img alt="Your Company" src={logo} className="h-16 w-auto" />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-secondary-color hover:bg-secondary-color hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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
                    isScrolled ? (
                      activeLink === item.href
                        ? 'text-secondary-color' // Active link color when scrolled
                        : 'text-black hover:text-secondary-color' // Non-active link color when scrolled
                    ) : (
                      activeLink === item.href
                        ? 'text-secondary-color' // Active link color when not scrolled
                        : 'text-white hover:text-secondary-color' // Non-active link color when not scrolled
                    ),
                    'relative px-3 py-2 text-sm font-bold transition-all duration-300',
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
        className="sm:hidden bg-regal-purple mt-4 transition-all duration-300 ease-out transform origin-top" // Background added to mobile menu
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
                  ? ''
                  : 'text-white hover:bg-secondary-color hover:text-white',
                'block rounded-md px-3 py-2 text-white font-medium',
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
