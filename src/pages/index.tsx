import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useTheme } from 'next-themes';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "lucide-react";
import { motion } from "framer-motion";
import Image from 'next/image';
import AnimatedUnderline from '@/components/ui/AnimatedUnderline';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Head>
        <title>PT Fadlan Solusi Teknologi</title>
        <meta name="description" content="PT Fadlan Solusi Teknologi - Building technology solutions for the future." />
      </Head>

      <header className="text-gray-900 dark:text-white py-2 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-3xl font-bold"><AnimatedUnderline>PT Fadlan Solusi Teknologi</AnimatedUnderline></h1>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="rounded-full"
          >
            {theme === 'dark' ? <SunIcon className="h-[1.2rem] w-[1.2rem]" /> : <MoonIcon className="h-[1.2rem] w-[1.2rem]" />}
          </Button>
        </div>
      </header>

      <main className="container mx-auto p-3">
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="my-6 text-center"
        >
          <h2 className="text-4xl font-bold mb-3"><AnimatedUnderline>About the Company</AnimatedUnderline></h2>
          <Card>
            <CardContent className="pt-3">
              <p className="text-lg">
                Fadlan Solusi Teknologi is a company that mainly focuses on solving problems through software technology. One of the primary solutions we offer is Software as a Service (SaaS), providing software solutions to help people solve real-life problems.
              </p>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="my-6 text-center"
        >
          <h2 className="text-4xl font-bold mb-3"><AnimatedUnderline>About the Founder</AnimatedUnderline></h2>
          <Card>
            <CardContent className="pt-3">
              <p className="text-lg">
                Hi, I&apos;m Mochamad Lutfi Fadlan, the founder of PT Fadlan Solusi Teknologi. With almost 8 years of experience as a software engineer and 6 years as a tech leader, I have built and managed complex applications and engineering teams. My journey includes significant contributions at Xendit and Vida, where I led projects that handled millions of transactions and scaled engineering teams effectively.
              </p>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="my-6"
        >
          <h2 className="text-4xl font-bold mb-3 text-center"><AnimatedUnderline>Launched SaaS</AnimatedUnderline></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <h3 className="text-2xl font-semibold">unsubscribeall - Reclaim Your Inbox</h3>
              </CardHeader>
              <CardContent>
                <Image src="/unsubscribeall.png" alt="unsubscribeall" width={400} height={300} className="w-full h-48 object-cover mb-4 rounded-md" layout="responsive" />
                <p className="text-lg">
                unsubscribeall helps users manage their email subscriptions by allowing them to easily unsubscribe from unwanted emails in just a few clicks.
                </p>
                <Button className="mt-4" asChild>
                  <a href="https://unsubscribeall.co" target="_blank">Visit unsubscribeall</a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h3 className="text-2xl font-semibold">Goldofolio - An Antam Gold Portfolio Tracker</h3>
              </CardHeader>
              <CardContent>
                <Image src="/goldofolio.png" alt="Goldofolio" width={400} height={300} className="w-full h-48 object-cover mb-4 rounded-md" layout="responsive" />
                <p className="text-lg">
                  Goldofolio helps users track their physical gold portfolios effortlessly. It offers an intuitive dashboard to manage their gold investments.
                </p>
                <Button className="mt-4" asChild>
                  <a href="https://goldofolio.vercel.app/" target="_blank">Visit Goldofolio</a>
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <h3 className="text-2xl font-semibold">Last Day Message Generator</h3>
              </CardHeader>
              <CardContent>
                <Image src="/last-working-day.png" alt="Last Day Message Generator" width={400} height={300} className="w-full h-48 object-cover mb-4 rounded-md" layout="responsive" />
                <p className="text-lg">
                  Automatically generate personalized goodbye messages for your last day at the company.
                </p>
                <Button className="mt-4" asChild>
                  <a href="https://last-working-day.vercel.app/" target="_blank">Try It Out</a>
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <h3 className="text-2xl font-semibold">Food Recommendator</h3>
              </CardHeader>
              <CardContent> 
                <Image src="/food-recommendation.png" alt="Food Recommendator" width={400} height={300} className="w-full h-48 object-cover mb-4 rounded-md" layout="responsive" />
                <p className="text-lg">
                  Generate food and drink recommendations based on user location and language input.
                </p>
                <Button className="mt-4" asChild>
                  <a href="https://food-recommendation-app.vercel.app/" target="_blank">Get Recommendations</a>
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <h3 className="text-2xl font-semibold">Code Obfuscator</h3>
              </CardHeader>
              <CardContent>
                <Image src="/code-obfuscator.png" alt="Code Obfuscator" width={400} height={300} className="w-full h-48 object-cover mb-4 rounded-md" layout="responsive" />
                <p className="text-lg">
                  Obfuscate code based on code and obfuscated word input.
                </p>
                <Button className="mt-4" asChild>
                  <a href="https://code-obfuscation.vercel.app/" target="_blank">Obfuscate Code</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="my-6"
        >
          <h2 className="text-4xl font-bold mb-3 text-center"><AnimatedUnderline>Founder&apos;s Experience</AnimatedUnderline></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <h3 className="text-xl font-semibold">Engineering Manager - Vida</h3>
              </CardHeader>
              <CardContent>
                <p>Developed, maintained, & scaled digital signature, digital stamp, and sign platform products. Led team&apos;s roadmap delivery along with managing engineers & QA and solving clients issues & escalations. Contributed to 20% of company&apos;s revenue</p> 
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <h3 className="text-xl font-semibold">Staff Software Engineer - Cashboard</h3>
              </CardHeader>
              <CardContent>
                <p>Automated finance reporting from multiple accounting sources for customers. Designed, built, and deployed backend web application & infrastructure from scratch</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <h3 className="text-xl font-semibold">Engineering Manager - Xendit</h3>
              </CardHeader>
              <CardContent>
                <p>Managed payments team which offered reliable & scalable services to power Xendit&apos;s cash & bank-based money-in (Virtual Account and Retail Outlet) and served hundreds of customers with total millions of transactions count and hundreds of millions dollars transactions volume. Achieved all-time high TPV. Contributed to 40% of company&apos;s revenue</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <h3 className="text-xl font-semibold">Technical Lead - Xendit</h3>
              </CardHeader>
              <CardContent>
                <p>Led Billing team to design & build billing system from the ground up, enabled product fees management, automated monthly billing statement generation for customers, and automated monthly transaction reports for investors. Enabled merchant to rotate and manage API keys independently from the merchant dashboard</p>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="my-6 text-center"
        >
          <h2 className="text-4xl font-bold mb-3"><AnimatedUnderline>Contact</AnimatedUnderline></h2>
          <Card>
            <CardContent className="pt-3">
              <p className="text-lg">Mochamad Lutfi Fadlan</p>
              <p className="text-lg">mochamadlutfifadlan@gmail.com</p>
              <Button className="mt-4" asChild>
                <a href="https://www.linkedin.com/in/lutfifadlan/" target="_blank">
                  LinkedIn Profile
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.section>
      </main>

      <footer className="text-gray-900 dark:text-white py-3 text-center shadow-md">
        <p>&copy; 2024 PT Fadlan Solusi Teknologi. All rights reserved.</p>
      </footer>
    </div>
  );
}
