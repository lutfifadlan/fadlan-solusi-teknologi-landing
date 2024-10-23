import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useTheme } from 'next-themes';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from 'next/image';
import AnimatedUnderline from '@/components/ui/AnimatedUnderline';
import IconCloud from "@/components/magicui/icon-cloud";
import BookingCalendar from '@/components/BookingCalendar';
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import { cn } from '@/lib/utils';

const cloudIconSlugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "nextdotjs",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "go",
  "python",
  "rubyonrails",
  "aws",
  "gcp",
  "mongodb",
  "postgresql",
  "dynamodb",
  "redis",
  "docker",
  "kubernetes",
  "serverless",
  "rabbitmq",
  "graphql",
  "git",
  "github",
  "bitbucket",
  "jira",
  "confluence",
  "datadog",
  "splunk",
  "sentry",
  "grafana",
  "jenkins",
  "argo",
  "buddy",
  "seed",
  "githubactions",
  "sst"
];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const ImageModal = ({ src, alt, onClose }: { src: string, alt: string, onClose: () => void }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div className="relative max-w-4xl max-h-[90vh] overflow-auto">
        <Image
          src={src}
          alt={alt}
          width={800}
          height={600}
          className="object-contain"
          onClick={(e) => e.stopPropagation()}
        />
        <Button
          className="absolute top-2 right-2 bg-gray-800 dark:bg-gray-200 rounded-full"
          size="icon"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Head>
        <title>PT Fadlan Solusi Teknologi</title>
        <meta name="description" content="PT Fadlan Solusi Teknologi - Building technology solutions for the future." />
      </Head>

      <header className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white py-4 shadow-md relative z-10">
        <div className="container mx-auto flex justify-between items-center px-6">
          <div className="flex items-center justify-center space-x-2">
            <Image src={"/logo.svg"} alt="PT Fadlan Solusi Teknologi" width={40} height={40} />
            <h1 className="text-3xl font-bold">
              <AnimatedUnderline>PT Fadlan Solusi Teknologi</AnimatedUnderline>
            </h1>
          </div>
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

      <div className="fixed inset-0 h-full w-full skew-y-12">
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          )}
        />
      </div>

      <main className="container mx-auto p-4 space-y-12 relative z-10">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-6"><AnimatedUnderline>About the Company</AnimatedUnderline></h2>
          <Card className="shadow-lg max-w-7xl mx-auto">
            <CardContent className="pt-4">
              <p className="text-lg leading-relaxed">
                Fadlan Solusi Teknologi focuses on solving problems through software technology, offering SaaS solutions to address real-life challenges.
              </p>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold mb-6 text-center"><AnimatedUnderline>About the Founder</AnimatedUnderline></h2>
          <Card className="shadow-lg max-w-7xl mx-auto">
            <CardContent className="pt-4">
            <p className="text-lg leading-relaxed">
              I am Mochamad Lutfi Fadlan, the founder of PT Fadlan Solusi Teknologi. 
              With over 8 years of experience in software engineering and leadership, 
              I have worked with startups at all stages—from pre-seed to unicorn—holding 
              key roles at companies like Xendit, Vida, and Cashboard. I focus on building reliable and scalable software systems that
              can efficiently process millions of transactions, ensuring they meet the needs of clients at various scales.
              <br/><br/>

              As an Engineering Manager, I have led teams at Xendit to power vital 
              services like Virtual Accounts and Retail Outlets, significantly 
              boosting revenue and helping the company scale. At Vida, I played a 
              key role in expanding digital signature and stamp platforms, processing 
              over a million transactions monthly.<br/><br/>

              My mission is to leverage technology to solve complex problems, build 
              efficient systems, and create real-world impact. I am passionate about 
              using tech to drive growth, enhance user experiences, and bring 
              innovative solutions to life.
            </p>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-6"><AnimatedUnderline>Launched SaaS</AnimatedUnderline></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Make Card heights consistent */}
            {[
              {
                title: "Launch Craft",
                description: "Generate optimized launch copy for popular product launch platforms.",
                image: "/launch-craft.png",
                url: "https://launchcraft.xyz"
              },
              {
                title: "Indie Boilerplate",
                description: "A boilerplate for indie hackers to launch their product faster.",
                image: "/indie-boilerplate.png",
                url: "https://indie-boilerplate.lutfifadlan.com"
              },
              {
                title: "Let's Focus",
                description: "A simple, modern, and powerful to-do list app to help you stay focused.",
                image: "/lets-focus.png",
                url: "https://letsfocus.today/"
              },
              {
                title: "LastWorkingDay",
                description: "Generate farewell messages for your last working day with ease.",
                image: "/last-working-day.png",
                url: "https://lastworkingday.co/"
              },
              {
                title: "unsubscribeall",
                description: "Easily manage and unsubscribe from unwanted emails.",
                image: "/unsubscribeall.png",
                url: "https://unsubscribeall.co"
              },
              {
                title: "Goldofolio",
                description: "Track your Antam gold investments effortlessly.",
                image: "/goldofolio.png",
                url: "https://goldofolio.vercel.app/"
              },
              {
                title: "Booknook",
                description: "Your personal library management system.",
                image: "/booknook.png",
                url: "https://booknook-iota.vercel.app/"
              },
              {
                title: "Yuknaikgunung",
                description: "Plan your next mountain adventure with AI-powered itineraries.",
                image: "/yuknaikgunung.png",
                url: "https://yuknaikgunung.vercel.app/"
              },
              {
                title: "Food Recommendator",
                description: "Generate food and drink recommendations based on user location.",
                image: "/food-recommendation.png",
                url: "https://food-recommendation-app.vercel.app/"
              },
              {
                title: "Code Obfuscator",
                description: "Obfuscate code based on input.",
                image: "/code-obfuscator.png",
                url: "https://code-obfuscation.vercel.app/"
              },
              {
                title: "Indonesia Independence Day 79th",
                description: "Shows you a brief history of Indonesia's independence day.",
                image: "/indonesia-independence.png",
                url: "https://indonesia-independence-79.vercel.app/"
              }
            ].map((project, idx) => (
              <Card key={idx} className="h-full flex flex-col shadow-md">
                <CardHeader>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div 
                    className="cursor-pointer"
                    onClick={() => setSelectedImage(project.image)}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover mb-4 rounded-md"
                    />
                  </div>
                  <p className="text-lg">{project.description}</p>
                </CardContent>
                <Button className="mt-4" asChild>
                  <a href={project.url} target="_blank">Visit</a>
                </Button>
              </Card>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-6"><AnimatedUnderline>Founder&apos;s Experience</AnimatedUnderline></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="h-full shadow-md">
              <CardHeader>
                <h3 className="text-xl font-semibold">Engineering Manager - Vida</h3>
              </CardHeader>
              <CardContent>
                <p>Developed, maintained, & scaled digital signature, digital stamp, and sign platform products. Led team&apos;s roadmap delivery along with managing engineers & QA and solving clients issues & escalations. Contributed to 20% of company&apos;s revenue</p>
              </CardContent>
            </Card>

            <Card className="h-full shadow-md">
              <CardHeader>
                <h3 className="text-xl font-semibold">Staff Software Engineer - Cashboard</h3>
              </CardHeader>
              <CardContent>
                <p>Automated finance reporting from multiple accounting sources for customers. Designed, built, and deployed backend web application & infrastructure from scratch</p>
              </CardContent>
            </Card>

            <Card className="h-full shadow-md">
              <CardHeader>
                <h3 className="text-xl font-semibold">Engineering Manager - Xendit</h3>
              </CardHeader>
              <CardContent>
                <p>Managed payments team which offered reliable & scalable services to power Xendit&apos;s cash & bank-based money-in (Virtual Account and Retail Outlet) and served hundreds of customers with total millions of transactions count and hundreds of millions dollars transactions volume. Achieved all-time high TPV. Contributed to 40% of company&apos;s revenue</p>
              </CardContent>
            </Card>

            <Card className="h-full shadow-md">
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
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-6"><AnimatedUnderline>Technologies I have Worked With</AnimatedUnderline></h2>
          <IconCloud iconSlugs={cloudIconSlugs} />
        </motion.section>

        <BookingCalendar/>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-6"><AnimatedUnderline>Contact</AnimatedUnderline></h2>
          <Card className="shadow-lg max-w-xl mx-auto">
            <CardContent className="pt-4">
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

      <footer className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white py-6 text-center shadow-md relative z-10">
        <p>&copy; 2024 PT Fadlan Solusi Teknologi. All rights reserved.</p>
      </footer>

      <AnimatePresence>
        {selectedImage && (
          <ImageModal
            src={selectedImage}
            alt="Full screen image"
            onClose={() => setSelectedImage(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
