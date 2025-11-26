"use client";

import React, { JSX, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const QuoteSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z
    .string()
    .min(7, "Invalid phone")
    .regex(/^[0-9()+-\s]+$/, "Invalid phone characters"),
  timeframe: z.string().min(1, "Please choose timeframe"),
  size: z.string().min(1, "Please choose size"),
  quantity: z.string().min(1, "Please choose quantity"),
  project: z.string().min(10, "Please describe your project (min 10 chars)"),
});

type QuoteForm = z.infer<typeof QuoteSchema>;

const container = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.04 } },
};
const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.36 } },
};

export default function Page8(): JSX.Element {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<QuoteForm>({
    resolver: zodResolver(QuoteSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      timeframe: "",
      size: "",
      quantity: "",
      project: "",
    },
  });

  async function onSubmit(data: QuoteForm) {
    setSubmitting(true);
    await new Promise((res) => setTimeout(res, 700));
    setSubmitting(false);
    setSuccess(true);
    reset();
  }

  return (
    <section className="py-12 bg-white min-h-screen overflow-x-hidden">
      <div className="max-w-5xl mx-auto px-6">
        {/* Title */}
        <motion.div 
          initial="hidden" 
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={container} 
          className="text-center mb-8"
        >
          <motion.h2 variants={item} className="text-4xl md:text-3xl font-bold tracking-tight uppercase">
            Request a Quote
          </motion.h2>
        </motion.div>

        <motion.form
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
        >
          <Card className="bg-transparent border-0 shadow-none p-0">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Name */}
                <motion.div variants={item} className="w-full">
                  <Label htmlFor="name" className="flex items-center justify-between">
                    <span>Name</span>
                  </Label>
                  <Input
                    id="name"
                    {...register("name")}
                    className="mt-2 w-full py-6 px-3"
                    placeholder="Your name"
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
                </motion.div>

                {/* Email */}
                <motion.div variants={item} className="w-full">
                  <Label htmlFor="email" className="flex items-center justify-between">
                    <span>E-mail</span>
                  </Label>
                  <Input
                    id="email"
                    {...register("email")}
                    className="mt-2 w-full py-6 px-3"
                    placeholder="you@domain.com"
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
                </motion.div>

                {/* Phone Number */}
                <motion.div variants={item} className="w-full">
                  <Label htmlFor="phone" className="flex items-center justify-between">
                    <span>Phone Number</span>
                  </Label>
                  <Input id="phone" {...register("phone")} className="mt-2 w-full py-6 px-3" placeholder="+91 98..." />
                  {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>}
                </motion.div>

                {/* Timeframe */}
                <motion.div variants={item} className="w-full">
                  <Label htmlFor="timeframe" className="flex items-center justify-between">
                    <span>Time Frame <span className="text-red-600 ml-1">*</span></span>
                  </Label>

                  <Controller
                    control={control}
                    name="timeframe"
                    render={({ field }) => (
                      <Select onValueChange={(val) => field.onChange(val)} value={field.value}>
                        <SelectTrigger id="timeframe" className="mt-2 w-full py-6">
                          <SelectValue placeholder="Choose Time Frame" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-2 weeks">1-2 weeks</SelectItem>
                          <SelectItem value="3-4 weeks">3-4 weeks</SelectItem>
                          <SelectItem value="1-2 months">1-2 months</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.timeframe && <p className="mt-1 text-xs text-red-600">{errors.timeframe.message}</p>}
                </motion.div>

                {/* Size */}
                <motion.div variants={item} className="w-full">
                  <Label htmlFor="size" className="flex items-center justify-between">
                    <span>Size <span className="text-red-600 ml-1">*</span></span>
                  </Label>

                  <Controller
                    control={control}
                    name="size"
                    render={({ field }) => (
                      <Select onValueChange={(val) => field.onChange(val)} value={field.value}>
                        <SelectTrigger id="size" className="mt-2 w-full py-6">
                          <SelectValue placeholder="Choose Size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="small">Small</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="large">Large</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.size && <p className="mt-1 text-xs text-red-600">{errors.size.message}</p>}
                </motion.div>

                {/* Quantity */}
                <motion.div variants={item} className="w-full">
                  <Label htmlFor="quantity" className="flex items-center justify-between">
                    <span>Quantity <span className="text-red-600 ml-1">*</span></span>
                  </Label>

                  <Controller
                    control={control}
                    name="quantity"
                    render={({ field }) => (
                      <Select onValueChange={(val) => field.onChange(val)} value={field.value}>
                        <SelectTrigger id="quantity" className="mt-2 w-full py-6">
                          <SelectValue placeholder="Choose Quantity" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1</SelectItem>
                          <SelectItem value="5">5</SelectItem>
                          <SelectItem value="10">10</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.quantity && <p className="mt-1 text-xs text-red-600">{errors.quantity.message}</p>}
                </motion.div>

                {/* Project description */}
                <motion.div className="md:col-span-2" variants={item}>
                  <Label htmlFor="project" className="flex items-center justify-between">
                    <span>Please Describe Your Project <span className="text-red-600 ml-1">*</span></span>
                  </Label>
                  <Textarea id="project" {...register("project")} className="mt-2 w-full py-3 px-3 min-h-[140px]" />
                  {errors.project && <p className="mt-1 text-xs text-red-600">{errors.project.message}</p>}
                </motion.div>
              </div>

              <div className="mt-6 flex items-center justify-center">
                <div className="text-xs max-w-[60%]">
                  By submitting this form you agree to our{" "}
                  <a className="underline" href="/terms">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a className="underline" href="/privacy">
                    Privacy Policy
                  </a>
                  .
                </div>
              </div>
              <div className="flex w-full justify-center mt-10">
                <Button type="submit" className="px-6 bg-[#1959AC] text-white" disabled={submitting}>
                  {submitting ? "Submitting..." : "Request Quote"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.form>

        {/* Success modal */}
        {success && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/40" onClick={() => setSuccess(false)} />
            <motion.div initial={{ y: 18, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.18 }} className="relative z-10 bg-white rounded-lg p-6 shadow-lg w-[90%] max-w-md">
              <h3 className="text-lg font-semibold">Submitted</h3>
              <p className="mt-2 text-sm text-slate-600">Thanks — your quote request was submitted successfully.</p>
              <div className="mt-4 flex justify-end">
                <Button onClick={() => setSuccess(false)}>Close</Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}