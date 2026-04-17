'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CircleCheck as CheckCircle2, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function ApplyForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    opportunityType: '',
    investment: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: 'Application Submitted Successfully!',
        description: 'Our team will contact you within 24 hours.',
      });
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        city: '',
        opportunityType: '',
        investment: '',
        message: '',
      });
    }, 1500);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section id="apply" className="py-24 bg-gradient-to-br from-neutral-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl font-bold text-neutral-900 mb-4">
            Start Your Journey
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Fill out the form below and our team will get in touch with you
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="animate-fade-in-up">
            <Card className="border-2 border-neutral-200 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Application Form</CardTitle>
                <CardDescription>
                  Please provide your details and we&apos;ll reach out to you soon
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      required
                      className="h-12"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        required
                        className="h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      placeholder="Enter your city"
                      value={formData.city}
                      onChange={(e) => handleChange('city', e.target.value)}
                      required
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="opportunityType">Opportunity Type *</Label>
                    <Select
                      value={formData.opportunityType}
                      onValueChange={(value) => handleChange('opportunityType', value)}
                      required
                    >
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select opportunity type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="franchise">Franchise</SelectItem>
                        <SelectItem value="wholesale">Wholesale</SelectItem>
                        <SelectItem value="shop-in-shop">Shop-in-Shop</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="investment">Investment Capacity *</Label>
                    <Select
                      value={formData.investment}
                      onValueChange={(value) => handleChange('investment', value)}
                      required
                    >
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select investment range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5-10">₹5-10 Lakhs</SelectItem>
                        <SelectItem value="10-15">₹10-15 Lakhs</SelectItem>
                        <SelectItem value="15-25">₹15-25 Lakhs</SelectItem>
                        <SelectItem value="25+">₹25+ Lakhs</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message (Optional)</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your plans..."
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      rows={4}
                      className="resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full h-12 bg-neutral-900 hover:bg-neutral-800 text-white group"
                  >
                    {isSubmitting ? (
                      'Submitting...'
                    ) : (
                      <>
                        Submit Application
                        <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6 animate-fade-in-up animation-delay-300">
            <Card className="border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-white">
              <CardHeader>
                <CardTitle className="text-xl">What Happens Next?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    step: '1',
                    title: 'Initial Review',
                    description: 'We review your application within 24 hours',
                  },
                  {
                    step: '2',
                    title: 'Discussion Call',
                    description: 'Our team schedules a call to discuss opportunities',
                  },
                  {
                    step: '3',
                    title: 'Site Visit',
                    description: 'Visit our existing stores and understand the business',
                  },
                  {
                    step: '4',
                    title: 'Agreement',
                    description: 'Finalize terms and sign the partnership agreement',
                  },
                ].map((item, index) => (
                  <div
                    key={item.step}
                    className="flex gap-4 p-4 rounded-lg bg-white/80 hover:bg-white transition-all duration-300 hover:shadow-md"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold">
                        {item.step}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-neutral-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-2 border-neutral-200">
              <CardHeader>
                <CardTitle className="text-xl">Why Choose D-Cotton?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  'Established brand with proven track record',
                  'Comprehensive training and support',
                  'High-quality products and materials',
                  'Marketing and promotional assistance',
                  'Attractive profit margins',
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-700">{benefit}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
