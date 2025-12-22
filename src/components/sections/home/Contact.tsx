'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Clock, MessageSquare, Send } from 'lucide-react';
import { useFormSubmit } from '@/hooks/useFormSubmit';

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
  formTitle: 'Send us a Message',
  formSubtitle: 'Fill out the form below and we\'ll get back to you within 24 hours.',
} as const;

type ContactProps = Partial<typeof DEFAULT_CONTACT>;

export default function Contact(props: ContactProps) {
  const config = { ...DEFAULT_CONTACT, ...props };
  const { handleSubmit, isSubmitting, isSuccess, message } = useFormSubmit();

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

        <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
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
            <div className="bg-muted/50 rounded-2xl p-8">
              <h4 className="font-semibold mb-6 text-foreground text-xl">Why Choose EP WMs?</h4>
              <div className="grid gap-4 sm:grid-cols-1">
                {config.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3">
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

          {/* Contact Form */}
          <div className="space-y-8">
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">
                    <span data-editable="formTitle">{config.formTitle}</span>
                  </h3>
                  <p className="text-muted-foreground">
                    <span data-editable="formSubtitle">{config.formSubtitle}</span>
                  </p>
                </div>

                {/* Success/Error Message */}
                {message && (
                  <div className={`mb-6 p-4 rounded-lg ${
                    isSuccess 
                      ? 'bg-green-50 text-green-800 border border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800'
                      : 'bg-red-50 text-red-800 border border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800'
                  }`}>
                    {message}
                  </div>
                )}

                <form onSubmit={handleSubmit} data-form-id="contact-form" className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        placeholder="John"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        placeholder="Doe"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="john.doe@company.com"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Your Company Name"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      placeholder="How can we help you?"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Tell us more about your workforce management needs..."
                      rows={5}
                      disabled={isSubmitting}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 group"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
