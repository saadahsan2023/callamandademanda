'use client';

import * as React from 'react';
import { useState } from 'react';
import { ChevronDown, Menu, X, Search, Phone } from 'lucide-react';
import { cn } from '../src/lib/utils';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems = [
    { name: 'About Us', hasDropdown: true },
    { name: 'Practice Areas', hasDropdown: true },
    { name: 'Reviews', hasDropdown: false },
    { name: 'Results', hasDropdown: false },
    { name: 'Locations', hasDropdown: true },
    { name: 'Resources', hasDropdown: true },
    { name: 'Contact Us', hasDropdown: false },
  ];

  const dropdownContent: Record<string, any> = {
    'About Us': [
      { title: 'Our Team', items: ['Amanda Demanda', 'Anthony Atala', 'Kielan Sabotrit'] },
      { title: 'Community Events', items: ['Back to School Donation Drive', 'Nochebuena'] },
      { title: 'In The Media', items: [] },
      { title: 'Ayúdame Amanda Demanda', items: ['Scholarships'] },
    ],
    'Practice Areas': [
      'Car Accidents',
      'Truck Accidents',
      'Uber & Lyft Accidents',
      'Slip & Fall Accidents',
      'Medical Malpractice',
      'Pedestrian Accidents',
      'Wrongful Death',
    ],
    'Locations': [
      { group: 'Florida', items: ['Miami', 'Fort Lauderdale', 'Tampa', 'Orlando', 'Jacksonville', 'Hollywood', 'Pembroke Pines'] },
      { group: 'Texas', items: ['Houston', 'Dallas', 'Katy', 'Odessa'] },
    ],
    'Resources': ['FAQs', 'Blog', 'News', 'Videos'],
  };

  const handleMouseEnter = (itemName: string) => {
    if (navItems.find(item => item.name === itemName)?.hasDropdown) {
      setActiveDropdown(itemName);
    }
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const renderDropdownContent = (itemName: string) => {
    const content = dropdownContent[itemName];
    if (!content) return null;

    if (itemName === 'About Us') {
      return (
        <div className="grid grid-cols-4 gap-8 p-8">
          {content.map((section: any, idx: number) => (
            <div key={idx}>
              <h3 className="font-semibold text-gray-900 mb-3">{section.title}</h3>
              {section.items.length > 0 && (
                <ul className="space-y-2">
                  {section.items.map((item: string, itemIdx: number) => (
                    <li key={itemIdx}>
                      <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors text-sm">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      );
    }

    if (itemName === 'Practice Areas') {
      return (
        <div className="p-8">
          <ul className="grid grid-cols-2 gap-x-8 gap-y-3">
            {content.map((item: string, idx: number) => (
              <li key={idx}>
                <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors text-sm">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      );
    }

    if (itemName === 'Locations') {
      return (
        <div className="grid grid-cols-2 gap-8 p-8">
          {content.map((location: any, idx: number) => (
            <div key={idx}>
              <h3 className="font-semibold text-gray-900 mb-3">{location.group}</h3>
              <ul className="space-y-2">
                {location.items.map((item: string, itemIdx: number) => (
                  <li key={itemIdx}>
                    <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    }

    if (itemName === 'Resources') {
      return (
        <div className="p-8">
          <ul className="space-y-3">
            {content.map((item: string, idx: number) => (
              <li key={idx}>
                <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors text-sm">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      );
    }

    return null;
  };

  return (
    <header className="bg-[#001c3d] text-white relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center gap-6">
            <a href="/" className="flex items-center gap-4" aria-label="Amanda Demanda Injury Lawyers">
              <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0">
                <div className="text-center">
                  <div className="text-[#001c3d] text-[10px] font-bold leading-tight">ATTORNEY</div>
                  <div className="text-[#001c3d] text-lg font-bold leading-none">Dade</div>
                  <div className="text-[#001c3d] text-[8px] leading-tight">FAVORITE</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <svg className="h-16 w-auto" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M20 60 L40 20 L60 60 M28 48 L52 48" stroke="#ff0099" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M40 20 L40 60" stroke="#ff0099" strokeWidth="3" strokeLinecap="round" />
                  <circle cx="40" cy="40" r="35" stroke="#ff0099" strokeWidth="2" />
                </svg>

                <div className="text-left">
                  <div className="text-2xl font-bold tracking-tight">AMANDA DEMANDA</div>
                  <div className="text-xs tracking-widest text-pink-500">INJURY LAWYERS</div>
                </div>
              </div>
            </a>
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <button
              className="text-pink-500 hover:text-pink-400 transition-colors font-medium text-sm uppercase tracking-wide"
              aria-label="Switch to Spanish"
            >
              SE HABLA ESPAÑOL
            </button>

            <a
              href="tel:1-844-DEMANDA"
              className="flex items-center gap-2 text-2xl font-bold hover:text-pink-500 transition-colors"
              aria-label="Call 1-844-DEMANDA"
            >
              <Phone className="h-6 w-6" aria-hidden="true" />
              <span>CALL 1-844-DEMANDA</span>
            </a>

            <button
              className="hover:text-pink-500 transition-colors"
              aria-label="Search"
            >
              <Search className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <nav className="border-t border-white/10" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hidden lg:flex items-center justify-center gap-8 py-4">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={cn(
                    "flex items-center gap-1 text-sm font-medium hover:text-pink-500 transition-colors",
                    activeDropdown === item.name && "text-pink-500"
                  )}
                  aria-expanded={activeDropdown === item.name}
                  aria-haspopup={item.hasDropdown}
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform",
                        activeDropdown === item.name && "rotate-180"
                      )}
                      aria-hidden="true"
                    />
                  )}
                </button>

                {item.hasDropdown && activeDropdown === item.name && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-white text-gray-900 rounded-lg shadow-xl min-w-[600px] z-50">
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45" />
                    {renderDropdownContent(item.name)}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#001c3d] border-t border-white/10">
          <nav className="px-4 py-6 space-y-4" aria-label="Mobile navigation">
            <div className="flex flex-col gap-4 mb-6">
              <button className="text-pink-500 hover:text-pink-400 transition-colors font-medium text-sm uppercase tracking-wide text-left">
                SE HABLA ESPAÑOL
              </button>

              <a
                href="tel:1-844-DEMANDA"
                className="flex items-center gap-2 text-xl font-bold hover:text-pink-500 transition-colors"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                <span>CALL 1-844-DEMANDA</span>
              </a>
            </div>

            {navItems.map((item) => (
              <div key={item.name}>
                <button
                  className="flex items-center justify-between w-full text-left py-2 hover:text-pink-500 transition-colors"
                  onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                  aria-expanded={activeDropdown === item.name}
                >
                  <span className="font-medium">{item.name}</span>
                  {item.hasDropdown && (
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform",
                        activeDropdown === item.name && "rotate-180"
                      )}
                      aria-hidden="true"
                    />
                  )}
                </button>

                {item.hasDropdown && activeDropdown === item.name && (
                  <div className="pl-4 py-2 space-y-2 text-sm">
                    {Array.isArray(dropdownContent[item.name]) &&
                      dropdownContent[item.name].map((content: any, idx: number) => (
                        <div key={idx}>
                          {typeof content === 'string' ? (
                            <a href="#" className="block py-1 text-gray-300 hover:text-pink-500">
                              {content}
                            </a>
                          ) : content.title ? (
                            <div className="py-2">
                              <div className="font-semibold text-white mb-1">{content.title}</div>
                              {content.items?.map((subItem: string, subIdx: number) => (
                                <a key={subIdx} href="#" className="block py-1 text-gray-300 hover:text-pink-500 pl-2">
                                  {subItem}
                                </a>
                              ))}
                            </div>
                          ) : content.group ? (
                            <div className="py-2">
                              <div className="font-semibold text-white mb-1">{content.group}</div>
                              {content.items?.map((subItem: string, subIdx: number) => (
                                <a key={subIdx} href="#" className="block py-1 text-gray-300 hover:text-pink-500 pl-2">
                                  {subItem}
                                </a>
                              ))}
                            </div>
                          ) : null}
                        </div>
                      ))
                    }
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
