'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react';

const DEFAULT_CONTACT = {
  sectionTitle: 'Get in Touch with Our Team',
  sectionSubtitle: 'Ready to transform your workforce management? Contact us today for a personalized demo and consultation.',
  contactInfo: [
    {
      icon: 'Mail',
      title: 'Email Us',
      value: 'hello@epwms.com',
      description: 'Send us an email anytime',
    },
    {
      icon: 'Phone',
      title: 'Call Us',
      value: '+1 (555) 123-4567',
      description: 'Mon-Fri from 8am to 6pm',
    },
    {
      icon: 'MapPin',
      title: 'Visit Us',
      value: '123 Business Ave, Suite 100',
      description: 'San Francisco, CA 94105',
    },
    {
      icon: 'Clock',
      title: 'Business Hours',
      value: 'Monday - Friday',
      description: '8:00 AM - 6:00 PM PST',
    },
  ],
  benefits: [
    '24-hour response guarantee',
    'Free consultation included',
    'Custom demo available',
  ],
} as const;

type ContactProps = Partial<typeof DEFAULT_CONTACT>;

export default function Contact(props: ContactProps) {
  const config = { ...DEFAULT_CONTACT, ...props };

  const getIcon = (iconName: string) => {
    const iconMap = {
      Mail,
      Phone,
      MapPin,
      Clock,
      MessageSquare,
    };
    const IconComponent = iconMap[iconName as keyof typeof iconMap] || Mail;
    return <IconComponent className="h-5 w-5" />;
  };

  return (
    <section id="contact" className="bg-background text-foreground py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span data-editable="sectionTitle">{config.sectionTitle}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            <span data-editable="sectionSubtitle">{config.sectionSubtitle}</span>
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center justify-center gap-2">
                <MessageSquare className="h-6 w-6 text-primary" />
                Contact Information
              </h3>
              <div className="grid gap-6 sm:grid-cols-2">
                {config.contactInfo.map((info, idx) => (
                  <Card key={idx} className="bg-card border-border hover:bg-accent/5 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 text-primary p-3 rounded-lg">
                          {getIcon(info.icon)}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">
                            <span data-editable={`contactInfo[${idx}].title`}>{info.title}</span>
                          </h4>
                          <p className="text-foreground font-medium">
                            <span data-editable={`contactInfo[${idx}].value`}>{info.value}</span>
                          </p>
                          <p className="text-muted-foreground text-sm">
                            <span data-editable={`contactInfo[${idx}].description`}>
                              {info.description}
                            </span>
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-muted/50 rounded-2xl p-8 text-center">
              <h4 className="font-semibold mb-6 text-foreground text-xl">Why Choose EP WMs?</h4>
              <div className="grid gap-4 sm:grid-cols-3">
                {config.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center justify-center gap-3">
                    <div className="bg-primary/20 text-primary p-2 rounded-full">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                    </div>
                    <span className="text-sm text-muted-foreground">
                      <span data-editable={`benefits[${idx}]`}>{benefit}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
