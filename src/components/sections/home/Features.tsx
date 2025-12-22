'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, BarChart3, Clock, Shield, Zap, Target } from 'lucide-react';

const DEFAULT_FEATURES = {
  sectionTitle: 'Powerful Features for Modern Workforce Management',
  sectionSubtitle: 'Everything you need to optimize your enterprise workforce operations',
  features: [
    {
      icon: 'Users',
      title: 'Smart Employee Scheduling',
      description:
        'AI-powered scheduling that optimizes workforce allocation based on demand forecasting and employee preferences.',
      badge: 'Core Feature',
    },
    {
      icon: 'BarChart3',
      title: 'Performance Analytics',
      description:
        'Real-time dashboards and comprehensive reporting to track productivity, engagement, and operational efficiency.',
      badge: 'Analytics',
    },
    {
      icon: 'Clock',
      title: 'Time & Attendance Tracking',
      description:
        'Automated time tracking with biometric integration, overtime management, and compliance monitoring.',
      badge: 'Automation',
    },
    {
      icon: 'Shield',
      title: 'Compliance Management',
      description:
        'Built-in compliance tools for labor laws, safety regulations, and industry-specific requirements.',
      badge: 'Security',
    },
    {
      icon: 'Zap',
      title: 'Workflow Automation',
      description:
        'Streamline HR processes with intelligent automation for onboarding, approvals, and task management.',
      badge: 'Efficiency',
    },
    {
      icon: 'Target',
      title: 'Goal Management',
      description:
        'Set, track, and achieve organizational objectives with integrated performance management tools.',
      badge: 'Strategy',
    },
  ],
} as const;

type FeaturesProps = Partial<typeof DEFAULT_FEATURES>;

export default function Features(props: FeaturesProps) {
  const config = { ...DEFAULT_FEATURES, ...props };

  const getIcon = (iconName: string) => {
    const iconMap = {
      Users,
      BarChart3,
      Clock,
      Shield,
      Zap,
      Target,
    };
    const IconComponent = iconMap[iconName as keyof typeof iconMap] || Users;
    return <IconComponent className="h-8 w-8" />;
  };

  const getBadgeVariant = (badge: string) => {
    const variantMap: Record<string, 'default' | 'secondary' | 'destructive' | 'outline'> = {
      'Core Feature': 'default',
      Analytics: 'secondary',
      Automation: 'outline',
      Security: 'destructive',
      Efficiency: 'secondary',
      Strategy: 'outline',
    };
    return variantMap[badge] || 'default';
  };

  return (
    <section id="features" className="bg-background text-foreground py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span data-editable="sectionTitle">{config.sectionTitle}</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            <span data-editable="sectionSubtitle">{config.sectionSubtitle}</span>
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {config.features.map((feature, idx) => (
            <Card
              key={idx}
              className="bg-card text-card-foreground border-border hover:bg-accent/5 transition-colors duration-300 group"
            >
              <CardContent className="p-8">
                {/* Icon and Badge */}
                <div className="flex items-start justify-between mb-6">
                  <div className="bg-primary/10 text-primary p-3 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    {getIcon(feature.icon)}
                  </div>
                  <Badge variant={getBadgeVariant(feature.badge)} className="text-xs">
                    <span data-editable={`features[${idx}].badge`}>{feature.badge}</span>
                  </Badge>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">
                    <span data-editable={`features[${idx}].title`}>{feature.title}</span>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    <span data-editable={`features[${idx}].description`}>
                      {feature.description}
                    </span>
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-muted/50 text-muted-foreground rounded-2xl p-8 sm:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">
              Ready to Transform Your Workforce?
            </h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of enterprises already using our platform to optimize their workforce
              management operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="bg-primary/10 text-primary px-6 py-3 rounded-lg font-medium">
                ✓ 30-day free trial
              </div>
              <div className="bg-primary/10 text-primary px-6 py-3 rounded-lg font-medium">
                ✓ No credit card required
              </div>
              <div className="bg-primary/10 text-primary px-6 py-3 rounded-lg font-medium">
                ✓ Enterprise support
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
