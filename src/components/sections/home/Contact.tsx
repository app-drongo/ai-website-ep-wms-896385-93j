'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react';
import { useState } from 'react';
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
  formFields: [
    {
      name: 'firstName',
      label: 'First Name',
      type: 'text',
      placeholder: 'John',
      required: true,
    },
    {
      name: 'lastName',
      label: 'Last Name',
      type: 'text',
      placeholder: 'Doe',
      required: true,
    },
    {
      name: 'email',
      label: 'Email Address',
      type: 'email',
      placeholder: 'john@company.com',
      required: true,
    },
    {
      name: 'company',
      label: 'Company',
      type: 'text',
      placeholder: 'Your Company',
      required: false,
    },
    {
      name: 'phone',
      label: 'Phone Number',
      type: 'tel',
      placeholder: '+1 (555) 123-4567',
      required: false,
    },
    {
      name: 'message',
      label: 'Message',
      type: 'textarea',
      placeholder: 'Tell us about your workforce management needs...',
      required: true,
    },
  ],
  ctaText: 'Send Message',
  benefits: [
    '24-hour response guarantee',
    'Free consultation included',
    'Custom demo available',
  ],
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
      Send,
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

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
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
            <div className="bg-muted/50 rounded-2xl p-6">
              <h4 className="font-semibold mb-4 text-foreground">Why Choose EP WMs?</h4>
              <div className="space-y-3">
                {config.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="bg-primary/20 text-primary p-1 rounded-full">
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
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Send us a Message</h3>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              {/* Success/Error Message */}
              {message && (
                <div
                  className={`mb-6 p-4 rounded-lg ${
                    isSuccess
                      ? 'bg-green-50 text-green-800 border border-green-200'
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}
                >
                  {message}
                </div>
              )}

              <form onSubmit={handleSubmit} data-form-id="contact" className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  {config.formFields.slice(0, 2).map((field, idx) => (
                    <div key={field.name}>
                      <label htmlFor={field.name} className="block text-sm font-medium mb-2">
                        <span data-editable={`formFields[${idx}].label`}>{field.label}</span>
                        {field.required && <span className="text-destructive ml-1">*</span>}
                      </label>
                      <Input
                        id={field.name}
                        name={field.name}
                        type={field.type}
                        placeholder={field.placeholder}
                        required={field.required}
                        className="w-full"
                        data-editable-placeholder={`formFields[${idx}].placeholder`}
                      />
                    </div>
                  ))}
                </div>

                {config.formFields.slice(2, 5).map((field, idx) => (
                  <div key={field.name}>
                    <label htmlFor={field.name} className="block text-sm font-medium mb-2">
                      <span data-editable={`formFields[${idx + 2}].label`}>{field.label}</span>
                      {field.required && <span className="text-destructive ml-1">*</span>}
                    </label>
                    <Input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      required={field.required}
                      className="w-full"
                      data-editable-placeholder={`formFields[${idx + 2}].placeholder`}
                    />
                  </div>
                ))}

                {/* Message field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    <span data-editable="formFields[5].label">
                      {config.formFields[5].label}
                    </span>
                    <span className="text-destructive ml-1">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder={config.formFields[5].placeholder}
                    required
                    rows={4}
                    className="w-full"
                    data-editable-placeholder="formFields[5].placeholder"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      <span data-editable="ctaText">{config.ctaText}</span>
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
