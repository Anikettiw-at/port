'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from "@/hooks/use-toast"; // Import useToast
import React, { useState } from 'react';

export function ContactSection() {
    const { toast } = useToast(); // Initialize toast
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission (replace with actual API call if needed)
        console.log("Form Data:", formData);
        await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay

        setIsSubmitting(false);
        setFormData({ name: '', email: '', message: '' }); // Clear form

        // Show success toast
        toast({
          title: "Message Sent!",
          description: "Thanks for reaching out. I'll get back to you soon.",
          variant: "default", // Or 'success' if you customize variants
        });
    };


  return (
    <section id="contact" className="space-y-8 scroll-mt-14 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-primary">Get In Touch</h2>
      <p className="text-center text-muted-foreground">
        Have a project in mind or just want to say hi? Feel free to send me a message.
      </p>
      <Card>
        <CardHeader>
          <CardTitle>Contact Me</CardTitle>
          <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
             <CardContent className="space-y-4">
                 <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="name">Name</Label>
                    <Input type="text" id="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} disabled={isSubmitting}/>
                </div>
                <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" id="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} disabled={isSubmitting}/>
                </div>
                 <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Your Message" required rows={5} value={formData.message} onChange={handleChange} disabled={isSubmitting}/>
                 </div>
            </CardContent>
             <CardFooter>
                 <Button type="submit" className="w-full" disabled={isSubmitting}>
                     {isSubmitting ? 'Sending...' : 'Send Message'}
                 </Button>
             </CardFooter>
        </form>
      </Card>
    </section>
  );
}
