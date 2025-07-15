import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useTheme } from 'next-themes';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from 'next/image';
import AnimatedUnderline from '@/components/ui/AnimatedUnderline';
import BookingCalendar from '@/components/BookingCalendar';
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import { cn } from '@/lib/utils';

const techStack = [
  { name: "JavaScript", category: "Languages" },
  { name: "TypeScript", category: "Languages" },
  { name: "Node.js", category: "Languages" },
  { name: "Java", category: "Languages" },
  { name: "Go", category: "Languages" },
  { name: "Python", category: "Languages" },
  { name: "Ruby", category: "Languages" },
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "HTML", category: "Frontend" },
  { name: "CSS", category: "Frontend" },
  { name: "REST API", category: "Backend" },
  { name: "GraphQL", category: "Backend" },
  { name: "Spring Boot", category: "Backend" },
  { name: "gRPC", category: "Backend" },
  { name: "RabbitMQ", category: "Backend" },
  { name: "Kafka", category: "Backend" },
  { name: "MongoDB", category: "Database" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MySQL", category: "Database" },
  { name: "AWS DynamoDB", category: "Database" },
  { name: "Redis", category: "Database" },
  { name: "AWS", category: "Cloud" },
  { name: "Google Cloud", category: "Cloud" },
  { name: "Docker", category: "Cloud" },
  { name: "Kubernetes", category: "Cloud" },
  { name: "Serverless", category: "Cloud" },
  { name: "Datadog", category: "Monitoring" },
  { name: "Splunk", category: "Monitoring" },
  { name: "Sentry", category: "Monitoring" },
  { name: "Grafana", category: "Monitoring" },
  { name: "Agile methodologies", category: "Project Management" },
  { name: "JIRA", category: "Project Management" },
  { name: "Confluence", category: "Project Management" },
  { name: "GitHub", category: "Project Management" },
  { name: "Bitbucket", category: "Project Management" },
  { name: "OpenAI API", category: "AI Technologies" },
  { name: "OpenRouter", category: "AI Technologies" },
  { name: "Whisper", category: "AI Technologies" },
  { name: "Xendit", category: "Payment Processing" },
  { name: "Lemonsqueezy", category: "Payment Processing" },
];

const experiences = [
  {
    title: "Software Engineer",
    company: "Summit (Singapore)",
    period: "Nov 2024 - Mar 2025",
    type: "Part-time, Remote",
    achievements: [
      "Migrated payment processing from synchronous to asynchronous flow using Redis queue",
      "Implemented SQS queue with backoff-retry mechanism for handling Nium auth issues and webhook processing",
      "Integrated endpoints with unified API platform (merge.dev) to create new accounting experience"
    ],
    technologies: ["Go", "MySQL", "Docker", "gRPC", "AWS", "Redis", "Kafka"]
  },
  {
    title: "Founder and CTO",
    company: "Lutfifadlan",
    period: "Aug 2024 - Nov 2024",
    type: "Full-time, Remote",
    achievements: [
      "Developed 'Last Working Day': AI-powered tool for generating personalized farewell messages ($3 USD revenue)",
      "Created 'Let's Focus': Modern to-do list application helping users prioritize important tasks",
      "Built 'Unsubscribe All': Tool for managing email subscriptions across multiple mailing lists",
      "Developed 'Goldofolio': Web app for tracking Antam gold prices and portfolio performance"
    ],
    technologies: [ "React", "Tailwind", "Next.js", "TypeScript", "MongoDB", "Supabase", "NextAuth", "Vercel", "Sentry", "OpenAI", "OpenRouter", "Whisper",
      "Lemonsqueezy", "Xendit", "Plunk", "Google Analytics", "Umami", "Seline"]
  },
  {
    title: "Engineering Manager",
    company: "Vida (Jakarta, Indonesia)",
    period: "Jan 2023 - Sep 2024",
    type: "Full-time, Hybrid",
    achievements: [
      "Led digital signature teams handling 1M+ monthly transactions with 99%+ uptime, driving 20% of company revenue",
      "Managed and maintained 9+ digital signature products—Sign Inline, Sign Inline PoA (Power of Attorney), CSC (Cloud Signature Consortium), Vida Web/Mobile, eMeterai API/Desktop, eSeal, Sign iFrame—ensure optimal functionality and stability",
      "Proposed and aligned 5+ quarterly technical roadmap items with engineering leadership and product management",
      "Collaborated with CTO on quarterly capacity planning to secure resources aligned with team roadmaps and deliverables",
      "Orchestrated Kubernetes migration for 5+ services across 3 environments with minimal downtime, removing manual deployments",
      "Led technical planning and integrated Sign Inline, Sign Inline PoA, and CSC with centralized billing system via Kafka and Lago",
      "Contributed to Vida Sign Open API MVP by updating authorization flow allowing client to access document signing workflow APIs",
      "Implemented back-off retry for Sign Inline and PoA transactions, reducing failure rates and improving product’s reliability",
      "Led incubation projects including Vida Web/Mobile MVP, Indonesia notary election system, and major bank credit cards PoC",
      "Created 10+ SOPs and resolved 100+ production tickets, becoming a digital signature domain expert within the company",
      "Led and mentor 13+ engineers; led scrum ceremonies including sprint planning, retrospectives, grooming, and technical planning",
      "Delivered bi-weekly Sprint Reviews to VP of Engineering and CTO, summarizing progress, key achievements, and challenges",
      "Served as Certificate Authority Admin on Trusted Committee, conducting 3+ key ceremonies critical for audits and major projects",
      "Reviewed 50+ code changes and 10+ technical documentations from team members to ensure quality and consistency"
    ],
    technologies: ["Java", "Spring Boot", "Datadog", "Bitbucket", "Jenkins", "ArgoCD", "Kafka"]
  },
  {
    title: "Staff Software Engineer",
    company: "Cashboard (New York, USA)",
    period: "Feb 2022 - Nov 2022",
    type: "Full-time, Remote",
    achievements: [
      "Led end-to-end Hotglue integration to ingest and process 1M+ transactions per job from accounting providers such as Netsuite",
      "Implemented backend and infrastructure using Serverless Stack to automate data ingestion and transformation",
      "Built database integration and GraphQL API for frontend access to normalized accounting data",
      "Developed a QuickBooks parser and a playground UI to test and validate structured data retrieval via the QuickBooks API",
      "Designed an event-driven pipeline to orchestrate Hotglue jobs, process CSVs from S3, insert formatted records into DynamoDB"
    ],
    technologies: ["Node.js", "TypeScript", "React", "Next.js", "AWS Lambda", "DynamoDB", "GraphQL", "Serverless Stack", "Git Actions"]
  },
  {
    title: "Engineering Manager",
    company: "Xendit (Jakarta, Indonesia)",
    period: "Jan 2021 - Jan 2022",
    type: "Full-time, Remote",
    achievements: [
      "Managed payments team delivering Virtual Account and Retail Outlet solutions processing 2M+ monthly transactions",
      "Aligned 25+ roadmap items with company priorities and team goals in collaboration with PM, CTO, CPO, and CEO",
      "Mentored and developed 2 Tech Leads to take over my previous responsibilities, enabling them to lead teams independently",
      "Managed 13 direct reports, driving performance through 1:1s, personalized growth plans, and feedback based on level outcomes",
      "Owned biannual resourcing and capacity planning to ensure enough engineering bandwidth for roadmap delivery",
      "Led team performance reviews, provided level-based feedback for 8+ engineers, and aligned results with the CTO",
      "Promoted 1 Senior Engineer to Staff, 1 Intermediate to Tech Lead, and 1 Junior to Intermediate; hired 2+ Intermediate Engineers",
      "Proposed talent development initiatives targeting skill gaps by level and hosted 5+ training sessions for the entire engineering org",
      "Contributed to 3+ monthly engineering newsletters, highlighting team wins, learnings, and recognizing high-impact contributors",
      "Responsible for monthly Business Area Review for Virtual Account and Retail Outlet products, providing monthly engineering success metrics, highlights/lowlights of engineering executions of the team, and collaborated with CTO to address major issues",
      "Drove technical direction by proposing 10+ key technical roadmap items and aligning with the Principal Engineer on strategy"
    ],
  },
  {
    title: "Senior Technical Lead",
    company: "Xendit (Jakarta, Indonesia)",
    period: "Jul 2019 - Dec 2020",
    type: "Full-time, On-site",
    achievements: [
      "Led and managed payments team delivering Virtual Account and Retail Outlet solutions processing 1M+ monthly transactions",
      "Acted as engineering manager, conducting performance evaluations and writing level outcomes feedback for 6+ engineers",
      "Successfully hired 10+ software engineers after conducting 30+ interviews across full-time, contract, and part-time positions",
      "Worked with 3+ senior engineers to implement VA backend re-architecture enhancing reliability, scalability, and maintainability",
      "Pioneered Agile Pods methodology within the team, which was subsequently adopted company-wide across the engineering org",
      "Grew and restructured team from 5 to 20+ members (staff to junior) into 3 specialized sub-teams while providing mentorship",
      "Implemented end-to-end observability with Datadog, PagerDuty, and Slack—reducing detection time to <30 minutes and tracking 10+ key metrics including latency, requests per second, service uptime, transaction success/failure rates, and anomaly detections",
      "Led 15+ incident responses and post-mortems following established frameworks, achieving >80% action item resolution rate",
      "Boosted reliability with automated payment reconciliation, auto-recovery for 5+ payment failures, backoff-retries for third-party errors, queuing RabbitMQ messages during provider outages, and automated status page updates—cutting manual ops by 70%",
      "Led migration of 5+ critical services to AWS EKS (Kubernetes), improving reliability and deployments while reducing cloud costs",
      "Integrated 5+ new payment channels, partnering closely with stakeholders throughout integration, UAT, and production release.",
      "Eliminated 3+ manual deployment services interacting with the local cloud provider and banks—fully automating all deployments",
    ],
    technologies: ["Node.js", "TypeScript", "Go", "Datadog", "Splunk", "PostgreSQL", "Kubernetes", "MongoDB", "AWS", "RabbitMQ", "Kafka", "Launch Darkly"]
  },
  {
    title: "Senior Software Engineer and Technical Lead",
    company: "Xendit (Jakarta, Indonesia)",
    period: "Feb 2019 - Jul 2019",
    type: "Full-time, On-site",
    achievements: [
      "Led API team delivering gateway services handling 5M+ monthly requests and a callback system processing 2M+ monthly events",
      "Led and grew the API team by hiring 2 engineers, mentoring 3+ engineers and 1 QA, and delivering 3+ roadmap items per quarter",
      "Built backend for API key rotation and management, integrated with dashboard to improve security and reduce ops work",
      "Strengthened API key security by introducing granular permissions (read/write) and product scope separation",
      "Reduced technical debt by decoupling and rewriting API auth logic into a TypeScript service with 80%+ test coverage",
      "Independently executed 2+ database migrations to support API key permissions and product scoping with zero downtime",
      "Resolved 20+ production issues, fixed 3+ bugs related to auth and callback, and become a domain expert in API auth & callback"
    ],
    technologies: ["Node.js", "TypeScript", "JavaScript", "React", "RabbitMQ", "AWS", "MongoDB", "PostgreSQL", "Kibana", "ElasticSearch", "Kubernetes", "GCP"]
  },
  {
    title: "Technical Lead",
    company: "Xendit (Jakarta, Indonesia)",
    period: "Jul 2017 - Feb 2019",
    type: "Full-time, On-site",
    achievements: [
     "Led billing team to deliver 15+ billing features and functionalities based of quarterly product and technical roadmap items",
     "Automated billing fees collection, generating over $200k in revenue and eliminating 100% manual ops work",
     "Designed and built a billing system to automatically pull monthly transactions data across 8+ products, generate 300+ billing statement PDFs with tax invoices, send email notifications, and display the billing statements on the dashboard",
     "Ensure monthly billing statement data accurately matches ledger transactions, product transactions, and fee configurations",
     "Supported billing infrastructure for 8+ products—disbursement, batch disbursement, virtual accounts, retail outlets, invoices, bank account validation, credit cards, and e-wallets—covering both direct and indirect billing models with tiered pricing structures",
     "Performed 10+ database migrations to generate 1000+ past monthly billing statements PDFs, and enable fees configuration",
     "Rewrote billing service to centralize logic from 10+ services using TypeScript and best practices with 100% test coverage",
     "Gathered and validated 15+ requirements with PM, Finance, CPO, and CTO to align product and technical scopes",
     "Wrote 10+ technical specifications, architecture, and system design for building the billing system and features from scratch",
     "Reviewed 60+ code changes and 10+ technical specifications that are written by team members and other teams",
     "Led and mentor 3+ engineers; led scrum ceremonies including sprint planning, retrospectives, grooming, and technical planning",
     "Resolved 50+ billing-related customer issues while serving as a key domain expert in billing systems and operations",
     "Implemented billing system and successfully migrated billing data to Instamoney, a newly acquired entity under Xendit",
     "Integrated 3+ billing features into Admin Dashboard, enabling CS team to resolve billing inquiries independently",
     "Simultaneously led the Invoice team to improve UX, maintain reliability, and integrate new payment channels",
     "Provide actionable feedback to engineers to foster growth in both technical skills and soft skills. Report directly to the CTO"
    ],
    technologies: ["Node.js", "TypeScript", "JavaScript", "React", "MongoDB", "RabbitMQ", "AWS", "LogDNA", "Sentry", "Cucumber"],
  },
  {
    title: "Software Engineer",
    company: "Xendit (Jakarta, Indonesia)",
    period: "Oct 2016 - Jun 2017",
    type: "Full-time, On-site",
    achievements: [
      "Designed and built Virtual Account Top-up, Batch Disbursement, and Unique Amount payments having >3k monthly transactions",
      "Resolved 50+ customer production tickets which mainly related to disbursement, incoming payments, and merchant onboarding",
      "Fixed 10+ existing production bugs, performed root cause analysis of found major issues, and automated manual tasks",
      "Wrote 5+ technical specifications to implement/modify product features which include high and low level implementations",
      "Designed, implemented, and shipped user management features enabling approval flows for batch disbursement features",
      "Participated in DevOps shifts to monitor service availability, track production errors, and implement short and long-term solutions",
      "Proposed technical solutions and process improvement feedback to CTO. Report directly to CTO",
      "Interacted directly with customers to solve production issues, guide API integration, and help go live on production",
      "Wrote QA scenarios and performed UAT ensuring all scenarios passed also met product and technical requirements"
    ],
    technologies: ["Node.js", "TypeScript", "JavaScript", "React", "MongoDB", "AWS", "Jenkins"]
  }
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

  const TechBadge = ({ tech }: { tech: { name: string; category: string } }) => (
    <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2">
      {tech.name}
    </span>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Head>
        <title>Mochamad Lutfi Fadlan - Software Engineer Portfolio</title>
        <meta name="description" content="Mochamad Lutfi Fadlan - Engineering Manager, Technical Lead, and Staff Software Engineer with 8+ years of experience building scalable applications." />
      </Head>

      <header className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white py-4 shadow-md relative z-10">
        <div className="container mx-auto flex justify-between items-center px-6">
          <div className="flex items-center justify-center space-x-2">
            <Image src={"/logo.svg"} alt="Mochamad Lutfi Fadlan" width={40} height={40} />
            <h1 className="text-3xl font-bold">
              <AnimatedUnderline>Mochamad Lutfi Fadlan</AnimatedUnderline>
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
          <h2 className="text-4xl font-bold mb-6"><AnimatedUnderline>About Me</AnimatedUnderline></h2>
          <Card className="shadow-lg max-w-7xl mx-auto">
            <CardContent className="pt-4">
              <p className="text-lg leading-relaxed">
                Hi I&apos;m Lutfi, an Engineering Manager, Technical Lead, and Staff Software Engineer with 8+ years of experience building and scaling complex applications across startup stages from pre-seed to unicorn. Led teams of up to 20+ engineers, delivering reliable, high-uptime products handling millions of monthly transactions. Skilled in backend and full-stack development, cloud infrastructure, and agile methodologies. Passionate about leveraging AI to boost productivity and experienced in rapidly building MVPs to validate ideas.
              </p>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold mb-6 text-center"><AnimatedUnderline>Professional Experience</AnimatedUnderline></h2>
          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <Card key={idx} className="shadow-lg">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <p className="text-lg text-blue-600 dark:text-blue-400">{exp.company}</p>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-2 md:mt-0 md:text-right">
                      <p>{exp.period}</p>
                      <p>{exp.type}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 mb-4">
                    {exp.achievements.map((achievement, achieveIdx) => (
                      <li key={achieveIdx} className="text-gray-700 dark:text-gray-300">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4">
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Technologies:</p>
                    <div className="flex flex-wrap">
                      {exp.technologies?.map((tech, techIdx) => (
                        <span key={techIdx} className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded text-xs mr-2 mb-2">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-6"><AnimatedUnderline>Technology Stack</AnimatedUnderline></h2>
          <Card className="shadow-lg max-w-7xl mx-auto">
            <CardContent className="pt-6">
              {["Languages", "Frontend", "Backend", "Database", "Cloud", "Monitoring", "Project Management", "AI Technologies", "Payment Processing"].map(category => (
                <div key={category} className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 text-left">{category}</h3>
                  <div className="flex flex-wrap">
                    {techStack
                      .filter(tech => tech.category === category)
                      .map((tech, idx) => (
                        <TechBadge key={idx} tech={tech} />
                      ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-6"><AnimatedUnderline>Personal Projects</AnimatedUnderline></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "SoloDevKit",
                description: "A comprehensive toolkit designed for solo developers.",
                image: "/solodevkit.png",
                url: "https://solodevkit.xyz"
              },
              {
                title: "Supakeep | Supabase Keep-Alive",
                description: "Keep your Supabase projects active and prevent them from being paused due to inactivity.",
                image: "/supakeep.png",
                url: "https://supakeep.xyz"
              },
              {
                title: "SyncPoint",
                description: "Intelligent and reliable appointment management platform that ease collaboration and prevents schedule conflicts",
                image: "/syncpoint.png",
                url: "https://appointment-ui.lutfifadlan.com"
              },
              {
                title: "Joblet",
                description: "Simple job board platform for job seekers and employers.",
                image: "/joblet.png",
                url: "https://joblet-omega.vercel.app"
              },
              {
                title: "Issue Tracker",
                description: "Track and manage issues efficiently with modern issue tracking system.",
                image: "/issue-tracker.png",
                url: "https://issue-dashboard.lutfifadlan.com"
              },
              {
                title: "JustCodeIt",
                description: "Practice coding by typing the real world and open source code projects.",
                image: "/justcodeit.png",
                url: "https://justcodeit-ui.lutfifadlan.com"
              },
              {
                title: "Launch Craft",
                description: "Generate optimized launch copy for popular product launch platforms.",
                image: "/launch-craft.png",
                url: "https://launchcraft.xyz"
              },
              {
                title: "InspireMe",
                description: "Motivational wallpapers generator.",
                image: "/inspireme.png",
                url: "https://inspireme.site"
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
                title: "CleanMate",
                description: "Lightning-fast macOS disk cleaner that scans 30,000+ files per second. Safe, smart cleanup for cache, temp files, and dev artifacts.",
                image: "/cleanmate.png",
                url: "https://cleanmate.site"
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
              <p className="text-lg">Tangerang, Banten, Indonesia</p>
              <div className="flex justify-center space-x-4 mt-4">
                <Button asChild>
                  <a href="https://www.linkedin.com/in/lutfifadlan/" target="_blank">
                    LinkedIn Profile
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://lutfifadlan.com" target="_blank">
                    Personal Website
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </main>

      <footer className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white py-6 text-center shadow-md relative z-10">
        <p>&copy; 2025 Mochamad Lutfi Fadlan. All rights reserved.</p>
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