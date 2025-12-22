'use client';

import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_FOOTER = {
  brand: 'EP WMs',
  description: 'Optimize Enterprise Workforce Performance at Scale with AI-powered workforce management solutions.',
  links: {
    product: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Demo', href: '/demo' },
      { label: 'API', href: '/api' },
    ],
    company: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '#contact' },
      { label: 'Careers', href: '/careers' },
      { label: 'Blog', href: '/blog' },
    ],
    support: [
      { label: 'Help Center', href: '/help' },
      { label: 'Documentation', href: '/docs' },
      { label: 'Status', href: '/status' },
      { label: 'Community', href: '/community' },
    ],
    legal: [
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
      { label: 'Security', href: '/security' },
      { label: 'Compliance', href: '/compliance' },
    ],
  },
  social: [
    { label: 'Twitter', href: 'https://twitter.com/epwms' },
    { label: 'LinkedIn', href: 'https://linkedin.com/company/epwms' },
    { label: 'GitHub', href: 'https://github.com/epwms' },
  ],
  copyright: '© 2024 EP WMs. All rights reserved.',
} as const;

type FooterProps = Partial<typeof DEFAULT_FOOTER>;

export default function Footer(props: FooterProps) {
  const config = { ...DEFAULT_FOOTER, ...props };
  const navigate = useSmartNavigation();

  const handleLinkClick = (href: string) => {
    navigate(href);
  };

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <button
                onClick={() => navigate('/')}
                className="text-2xl font-bold text-foreground hover:text-primary transition-colors"
                data-editable="brand"
              >
                {config.brand}
              </button>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              <span data-editable="description">{config.description}</span>
            </p>
            <div className="flex space-x-4">
              {config.social.map((social, idx) => (
                <button
                  key={idx}
                  onClick={() => handleLinkClick(social.href)}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-editable={`social[${idx}].label`}
                  data-editable-href={`social[${idx}].href`}
                  data-href={social.href}
                >
                  {social.label}
                </button>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Product</h3>
            <ul className="space-y-2">
              {config.links.product.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    data-editable={`links.product[${idx}].label`}
                    data-editable-href={`links.product[${idx}].href`}
                    data-href={link.href}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              {config.links.company.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    data-editable={`links.company[${idx}].label`}
                    data-editable-href={`links.company[${idx}].href`}
                    data-href={link.href}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-2">
              {config.links.support.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    data-editable={`links.support[${idx}].label`}
                    data-editable-href={`links.support[${idx}].href`}
                    data-href={link.href}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            <span data-editable="copyright">{config.copyright}</span>
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            {config.links.legal.map((link, idx) => (
              <button
                key={idx}
                onClick={() => handleLinkClick(link.href)}
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
                data-editable={`links.legal[${idx}].label`}
                data-editable-href={`links.legal[${idx}].href`}
                data-href={link.href}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
