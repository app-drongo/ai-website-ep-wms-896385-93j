'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_NAVIGATION = {
  logo: {
    text: 'EP WMs',
    href: '/',
  },
  links: [
    { text: 'Features', href: '#features' },
    { text: 'Pricing', href: '#pricing' },
    { text: 'Contact', href: '#contact' },
  ],
  cta: {
    text: 'Get Started',
    href: '/signup',
  },
} as const;

type NavigationProps = Partial<typeof DEFAULT_NAVIGATION>;

export default function Navigation(props: NavigationProps) {
  const config = { ...DEFAULT_NAVIGATION, ...props };
  const navigate = useSmartNavigation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogoClick = () => {
    navigate(config.logo.href);
  };

  const handleLinkClick = (href: string) => {
    navigate(href);
    setIsMenuOpen(false);
  };

  const handleCtaClick = () => {
    navigate(config.cta.href);
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={handleLogoClick}
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
              data-editable-href="logo.href"
              data-href={config.logo.href}
            >
              <div className="w-8 h-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="32"
                  height="32"
                  viewBox="0 0 375 374.999991"
                  preserveAspectRatio="xMidYMid meet"
                  version="1.0"
                  className="w-full h-full"
                >
                  <defs>
                    <clipPath id="854e2f6887">
                      <path d="M 109.3125 76.109375 L 222 76.109375 L 222 202 L 109.3125 202 Z M 109.3125 76.109375 " clipRule="nonzero"/>
                    </clipPath>
                  </defs>
                  <rect x="-37.5" width="450" fill="#ffffff" y="-37.499999" height="449.999989" fillOpacity="1"/>
                  <rect x="-37.5" width="450" fill="#fbf9ff" y="-37.499999" height="449.999989" fillOpacity="1"/>
                  <path fill="#7a9fdd" d="M 219.929688 138.292969 L 185.878906 206.359375 L 147.878906 205.347656 L 116.964844 155.304688 L 116.648438 158.546875 L 114.207031 191.671875 L 168.234375 237.761719 L 192.996094 239.964844 L 193.050781 239.96875 L 193.082031 239.957031 L 210.539062 230.84375 L 227.902344 137.703125 Z M 219.929688 138.292969 " fillOpacity="1" fillRule="nonzero"/>
                  <path fill="#7a9fdd" d="M 255.230469 108.410156 L 255.203125 108.355469 L 255.179688 108.335938 L 238.558594 97.777344 L 149.21875 129.316406 L 153.710938 135.921875 L 229.683594 131.375 L 247.808594 164.792969 L 219.929688 216.585938 L 222.898438 215.238281 L 252.800781 200.792969 L 265.703125 130.949219 Z M 255.230469 108.410156 " fillOpacity="1" fillRule="nonzero"/>
                  <g clipPath="url(#854e2f6887)">
                    <path fill="#7a9fdd" d="M 184.769531 194.457031 L 142.84375 130.929688 L 162.722656 98.527344 L 221.515625 96.773438 L 218.867188 94.882812 L 191.402344 76.203125 L 124.46875 99.953125 L 110.1875 120.292969 L 110.148438 120.339844 L 110.144531 120.367188 L 109.3125 140.050781 L 181.292969 201.648438 Z M 184.769531 194.457031 " fillOpacity="1" fillRule="nonzero"/>
                  </g>
                  <g fill="#004aad" fillOpacity="1">
                    <g transform="translate(108.473457, 279.543145)">
                      <path d="M 22.972656 0 L 32.171875 0 L 21.164062 -33.363281 L 10.773438 -33.363281 L -0.238281 0 L 9.007812 0 L 10.4375 -4.8125 L 21.542969 -4.8125 Z M 12.628906 -12.152344 L 15.96875 -23.496094 L 19.351562 -12.152344 Z M 12.628906 -12.152344 "/>
                    </g>
                  </g>
                  <g fill="#000000" fillOpacity="1">
                    <g transform="translate(139.024236, 279.543145)">
                      <path d="M 26.167969 0 L 17.539062 -12.152344 L 25.832031 -23.832031 L 16.871094 -23.832031 L 13.058594 -18.445312 L 9.246094 -23.832031 L 0.332031 -23.832031 L 8.625 -12.152344 L 0 0 L 8.914062 0 L 13.058594 -5.863281 L 17.207031 0 Z M 26.167969 0 "/>
                    </g>
                  </g>
                  <g fill="#000000" fillOpacity="1">
                    <g transform="translate(163.759586, 279.543145)">
                      <path d="M 6.242188 -25.785156 C 8.722656 -25.785156 10.820312 -27.882812 10.820312 -30.359375 C 10.820312 -32.839844 8.722656 -34.890625 6.242188 -34.890625 C 3.765625 -34.890625 1.667969 -32.839844 1.667969 -30.359375 C 1.667969 -27.882812 3.765625 -25.785156 6.242188 -25.785156 Z M 2.289062 0 L 10.199219 0 L 10.199219 -23.832031 L 2.289062 -23.832031 Z M 2.289062 0 "/>
                    </g>
                  </g>
                  <g fill="#000000" fillOpacity="1">
                    <g transform="translate(174.816467, 279.543145)">
                      <path d="M 13.871094 0.667969 C 20.972656 0.667969 26.59375 -4.8125 26.59375 -11.914062 C 26.59375 -19.015625 20.972656 -24.5 13.871094 -24.5 C 6.816406 -24.5 1.144531 -19.015625 1.144531 -11.914062 C 1.144531 -4.8125 6.863281 0.667969 13.871094 0.667969 Z M 13.871094 -6.957031 C 11.152344 -6.957031 9.105469 -8.960938 9.105469 -11.914062 C 9.105469 -14.871094 11.152344 -16.871094 13.871094 -16.871094 C 16.632812 -16.871094 18.683594 -14.871094 18.683594 -11.914062 C 18.683594 -8.960938 16.632812 -6.957031 13.871094 -6.957031 Z M 13.871094 -6.957031 "/>
                    </g>
                  </g>
                  <g fill="#000000" fillOpacity="1">
                    <g transform="translate(201.172254, 279.543145)">
                      <path d="M 29.644531 -24.5 C 26.355469 -24.5 24.210938 -23.257812 22.734375 -21.449219 C 21.449219 -23.402344 19.445312 -24.5 16.632812 -24.5 C 13.582031 -24.5 11.488281 -23.308594 10.199219 -21.589844 L 10.199219 -23.832031 L 2.289062 -23.832031 L 2.289062 0 L 10.199219 0 L 10.199219 -13.011719 C 10.199219 -15.394531 11.296875 -17.015625 13.488281 -17.015625 C 15.492188 -17.015625 16.492188 -15.730469 16.492188 -13.679688 L 16.492188 0 L 24.402344 0 L 24.402344 -13.011719 C 24.402344 -15.394531 25.453125 -17.015625 27.691406 -17.015625 C 29.695312 -17.015625 30.648438 -15.730469 30.648438 -13.679688 L 30.648438 0 L 38.605469 0 L 38.605469 -14.585938 C 38.605469 -20.78125 35.128906 -24.5 29.644531 -24.5 Z M 29.644531 -24.5 "/>
                    </g>
                  </g>
                  <g fill="#000000" fillOpacity="1">
                    <g transform="translate(240.348627, 279.543145)">
                      <path d="M 17.398438 -23.832031 L 13.679688 -10.007812 L 8.863281 -23.832031 L 0 -23.832031 L 9.53125 -0.761719 C 8.484375 1.382812 7.007812 2.097656 3.621094 2.097656 L 3.621094 9.53125 C 10.960938 9.867188 15.492188 6.863281 18.015625 -0.382812 L 26.167969 -23.832031 Z M 17.398438 -23.832031 "/>
                    </g>
                  </g>
                </svg>
              </div>
              <span className="text-xl font-bold text-foreground" data-editable="logo.text">
                {config.logo.text}
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {config.links.map((link, index) => (
                <button
                  key={index}
                  onClick={() => handleLinkClick(link.href)}
                  className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  data-editable={`links[${index}].text`}
                  data-editable-href={`links[${index}].href`}
                  data-href={link.href}
                >
                  {link.text}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button
              onClick={handleCtaClick}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              data-editable="cta.text"
              data-editable-href="cta.href"
              data-href={config.cta.href}
            >
              {config.cta.text}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-border">
              {config.links.map((link, index) => (
                <button
                  key={index}
                  onClick={() => handleLinkClick(link.href)}
                  className="text-muted-foreground hover:text-foreground block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors"
                  data-editable={`links[${index}].text`}
                  data-editable-href={`links[${index}].href`}
                  data-href={link.href}
                >
                  {link.text}
                </button>
              ))}
              <div className="pt-4">
                <Button
                  onClick={handleCtaClick}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  data-editable="cta.text"
                  data-editable-href="cta.href"
                  data-href={config.cta.href}
                >
                  {config.cta.text}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}