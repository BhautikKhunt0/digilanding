'use client'

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { insertContactSchema, type InsertContact } from "@/shared/schema";

export default function ContactSection() {
  const { toast } = useToast();
  
  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      budgetRange: "",
      message: "",
    },
  });

  const submitContactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. We'll get back to you soon.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Error sending message",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContact) => {
    submitContactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl lg:text-6xl font-montserrat font-black text-deep-black mb-8">
              LET'S <span className="text-gradient">CREATE</span>
              <br />TOGETHER
            </h2>
            <p className="text-xl text-charcoal mb-12 leading-relaxed">
              Ready to transform your digital presence? Let's discuss how we can elevate your brand and drive meaningful results.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center">
                <div className="w-16 h-16 bg-vibrant-orange rounded-2xl flex items-center justify-center mr-6">
                  <Phone className="text-white text-xl" />
                </div>
                <div>
                  <div className="font-montserrat font-bold text-deep-black text-lg">Call Us</div>
                  <div className="text-charcoal">+1 (555) 123-4567</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-16 h-16 bg-accent-teal rounded-2xl flex items-center justify-center mr-6">
                  <Mail className="text-white text-xl" />
                </div>
                <div>
                  <div className="font-montserrat font-bold text-deep-black text-lg">Email Us</div>
                  <div className="text-charcoal">hello@nexusdigital.com</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-16 h-16 bg-highlight-purple rounded-2xl flex items-center justify-center mr-6">
                  <MapPin className="text-white text-xl" />
                </div>
                <div>
                  <div className="font-montserrat font-bold text-deep-black text-lg">Visit Us</div>
                  <div className="text-charcoal">123 Innovation Drive, San Francisco, CA</div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            className="bg-deep-black rounded-3xl p-12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-montserrat font-bold text-white mb-8">Start Your Project</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="First Name"
                            {...field}
                            className="bg-white bg-opacity-10 border border-white border-opacity-20 rounded-xl px-6 py-4 text-white placeholder-gray-400 focus:border-vibrant-orange"
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Last Name"
                            {...field}
                            className="bg-white bg-opacity-10 border border-white border-opacity-20 rounded-xl px-6 py-4 text-white placeholder-gray-400 focus:border-vibrant-orange"
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Email Address"
                          {...field}
                          className="bg-white bg-opacity-10 border border-white border-opacity-20 rounded-xl px-6 py-4 text-white placeholder-gray-400 focus:border-vibrant-orange"
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Company Name"
                          {...field}
                          className="bg-white bg-opacity-10 border border-white border-opacity-20 rounded-xl px-6 py-4 text-white placeholder-gray-400 focus:border-vibrant-orange"
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="budgetRange"
                  render={({ field }) => (
                    <FormItem>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-white bg-opacity-10 border border-white border-opacity-20 rounded-xl px-6 py-4 text-white focus:border-vibrant-orange">
                            <SelectValue placeholder="Select Budget Range" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="10k-25k">$10K - $25K</SelectItem>
                          <SelectItem value="25k-50k">$25K - $50K</SelectItem>
                          <SelectItem value="50k-100k">$50K - $100K</SelectItem>
                          <SelectItem value="100k+">$100K+</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          rows={4}
                          placeholder="Tell us about your project..."
                          {...field}
                          className="bg-white bg-opacity-10 border border-white border-opacity-20 rounded-xl px-6 py-4 text-white placeholder-gray-400 focus:border-vibrant-orange resize-none"
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit"
                  disabled={submitContactMutation.isPending}
                  className="w-full bg-gradient-to-r from-vibrant-orange to-highlight-purple text-white font-montserrat font-bold py-4 rounded-xl hover:opacity-90 transition-all duration-300 hover:scale-105"
                >
                  {submitContactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
