import {
  Rocket,
  Users,
  ShoppingCart,
  Video,
  Megaphone,
  Briefcase,
  LucideIcon
} from "lucide-react";

export interface Audience {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  glow: string;
  // SEO fields
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  // Page content
  painPoints: {
    title: string;
    description: string;
  }[];
  solutions: {
    title: string;
    description: string;
  }[];
  testimonialPlaceholder: string;
  cta: string;
}

export const audiences: Audience[] = [
  {
    slug: "entrepreneurs",
    title: "Entrepreneurs & Founders",
    subtitle: "Scale Your Vision with AI",
    description: "From startup to scaleup, leverage AI to automate operations, accelerate growth, and compete with enterprise-level efficiency.",
    icon: Rocket,
    gradient: "from-cosmic-cyan to-nebula-purple",
    glow: "rgba(34, 211, 238, 0.5)",
    metaTitle: "AI Solutions for Entrepreneurs & Founders | WizardOf.ai",
    metaDescription: "Scale your startup with AI automation. Custom AI solutions for entrepreneurs and founders looking to accelerate growth, reduce costs, and compete at enterprise level.",
    keywords: [
      "AI for startups",
      "entrepreneur AI solutions",
      "startup automation",
      "founder AI tools",
      "scale startup with AI",
      "AI business growth"
    ],
    painPoints: [
      {
        title: "Limited Resources, Unlimited Ambition",
        description: "You're competing against companies with 10x your headcount and budget. Every hour spent on manual tasks is an hour not spent on growth."
      },
      {
        title: "Scaling Bottlenecks",
        description: "Your current processes work for 10 customers, but they'll break at 100. You need systems that scale without linear cost increases."
      },
      {
        title: "Wearing Too Many Hats",
        description: "As a founder, you're the CEO, CTO, CMO, and janitor. You need to multiply yourself without burning out or sacrificing quality."
      },
      {
        title: "Cash Flow Constraints",
        description: "Every dollar counts. Traditional hiring and scaling strategies eat cash faster than revenue grows. You need leverage without the overhead."
      }
    ],
    solutions: [
      {
        title: "AI-Powered Operations",
        description: "Automate customer onboarding, support, invoicing, and reporting. Give your 3-person team the output of a 30-person team."
      },
      {
        title: "Intelligent Lead Generation",
        description: "AI chatbots that qualify leads 24/7, automated outreach that feels personal, and data-driven insights that tell you exactly where to focus."
      },
      {
        title: "Scalable Systems from Day One",
        description: "Build infrastructure that grows with you. Systems designed to handle 10x growth without 10x complexity or costs."
      },
      {
        title: "ROI-Focused Strategy",
        description: "Every AI implementation is measured against revenue impact and cost savings. We prioritize quick wins that fund longer-term initiatives."
      }
    ],
    testimonialPlaceholder: "Julian helped us automate our entire customer onboarding process. What used to take 3 days now happens in 10 minutes. We're scaling faster than ever without adding headcount.",
    cta: "Scale Your Startup with AI"
  },
  {
    slug: "coaches",
    title: "Coaches & Consultants",
    subtitle: "Multiply Your Impact Without Multiplying Your Hours",
    description: "Deliver personalized client experiences at scale with AI-powered automation, content creation, and client management systems.",
    icon: Users,
    gradient: "from-nebula-purple to-cosmic-pink",
    glow: "rgba(168, 85, 247, 0.5)",
    metaTitle: "AI for Coaches & Consultants | Scale Your Practice | WizardOf.ai",
    metaDescription: "Serve more clients without working more hours. AI automation for coaches and consultants: client management, content creation, and personalized delivery at scale.",
    keywords: [
      "AI for coaches",
      "consultant automation",
      "coaching practice AI",
      "scale coaching business",
      "AI client management",
      "automated coaching tools"
    ],
    painPoints: [
      {
        title: "Trading Hours for Dollars",
        description: "Your income is capped by your available time. You can't scale a service-based business when you're the only service provider."
      },
      {
        title: "Repetitive Client Questions",
        description: "You answer the same questions every week, create similar materials for different clients, and spend hours on administrative tasks that don't move the needle."
      },
      {
        title: "Client Follow-Up Falls Through Cracks",
        description: "Between sessions, clients lose momentum. You don't have time to provide the ongoing support they need to stay on track."
      },
      {
        title: "Content Creation Burnout",
        description: "Your audience expects regular valuable content, but creating it consistently takes time away from client delivery and business development."
      }
    ],
    solutions: [
      {
        title: "AI Client Support Assistant",
        description: "24/7 chatbot trained on your methodology answers common questions, provides resources, and keeps clients engaged between sessions."
      },
      {
        title: "Automated Content Engine",
        description: "Repurpose your sessions, workshops, and insights into blog posts, social content, email sequences, and lead magnets with AI assistance."
      },
      {
        title: "Intelligent Client Onboarding",
        description: "Automated intake forms, personalized welcome sequences, and AI-generated preparation materials that make every client feel VIP."
      },
      {
        title: "Group Program Automation",
        description: "Deliver personalized experiences to cohorts of 50+ clients with AI-customized content, automated check-ins, and progress tracking."
      }
    ],
    testimonialPlaceholder: "I went from serving 15 one-on-one clients to running a group program with 80 people, and the experience is MORE personalized thanks to Julian's AI systems. My revenue tripled while my workload decreased.",
    cta: "Multiply Your Coaching Impact"
  },
  {
    slug: "ecommerce",
    title: "E-commerce Owners",
    subtitle: "Automate Your Store, Accelerate Your Growth",
    description: "From inventory management to customer service, use AI to run your e-commerce business on autopilot while you focus on scaling.",
    icon: ShoppingCart,
    gradient: "from-cosmic-pink to-cosmic-magenta",
    glow: "rgba(236, 72, 153, 0.5)",
    metaTitle: "AI for E-commerce | Automate Your Online Store | WizardOf.ai",
    metaDescription: "Automate inventory, customer service, marketing, and operations for your e-commerce store. AI solutions that increase sales and reduce manual work.",
    keywords: [
      "AI for e-commerce",
      "online store automation",
      "e-commerce AI tools",
      "automated inventory management",
      "AI customer service",
      "e-commerce optimization"
    ],
    painPoints: [
      {
        title: "Overwhelmed by Customer Service",
        description: "Answering the same product questions, tracking orders, and handling returns consumes hours every day. You're drowning in support tickets instead of growing the business."
      },
      {
        title: "Inventory Management Chaos",
        description: "Stockouts kill sales. Overstock kills cash flow. You need real-time visibility and predictive ordering but can't afford enterprise software."
      },
      {
        title: "Cart Abandonment Killing Revenue",
        description: "60%+ of carts abandoned. You know there's revenue there but lack the systems to recover those lost sales systematically."
      },
      {
        title: "Marketing That Doesn't Scale",
        description: "Manual email campaigns, generic product recommendations, and one-size-fits-all promotions leave money on the table. You need personalization without complexity."
      }
    ],
    solutions: [
      {
        title: "AI Customer Service Bot",
        description: "Handle order tracking, product questions, returns, and recommendations 24/7. Resolve 70%+ of inquiries instantly without human intervention."
      },
      {
        title: "Predictive Inventory System",
        description: "AI forecasts demand, triggers reorders automatically, and optimizes stock levels based on seasonality, trends, and historical data."
      },
      {
        title: "Abandoned Cart Recovery",
        description: "Intelligent automation that sends personalized recovery sequences, dynamic discounts, and product recommendations that convert browsers into buyers."
      },
      {
        title: "Hyper-Personalized Marketing",
        description: "AI-driven product recommendations, dynamic email content, and automated campaigns that adapt to individual customer behavior."
      }
    ],
    testimonialPlaceholder: "Our customer service costs dropped 60% and response times went from hours to seconds. The AI handles routine questions flawlessly, and our team focuses on complex issues and VIP customers.",
    cta: "Automate Your E-commerce Store"
  },
  {
    slug: "creators",
    title: "Content Creators",
    subtitle: "Create More, Stress Less",
    description: "Amplify your creative output with AI tools that handle editing, repurposing, optimization, and distribution while you focus on creating.",
    icon: Video,
    gradient: "from-cosmic-magenta to-cosmic-cyan",
    glow: "rgba(232, 121, 249, 0.5)",
    metaTitle: "AI for Content Creators | Amplify Your Output | WizardOf.ai",
    metaDescription: "Create 10x more content without working 10x harder. AI tools for creators: video editing, repurposing, SEO optimization, and multi-platform distribution.",
    keywords: [
      "AI for content creators",
      "creator AI tools",
      "content automation",
      "AI video editing",
      "content repurposing AI",
      "creator productivity tools"
    ],
    painPoints: [
      {
        title: "Content Treadmill Burnout",
        description: "The algorithm demands daily content. You're editing videos at midnight, scheduling posts at dawn, and sacrificing quality for quantity just to stay visible."
      },
      {
        title: "Platform Juggling Exhaustion",
        description: "YouTube, TikTok, Instagram, Twitter, LinkedIn, newsletter - each platform needs unique content. You're creating once and distributing poorly or creating 6x for each platform."
      },
      {
        title: "Ideas Everywhere, Organization Nowhere",
        description: "Brilliant ideas in voice memos, screenshots, and random notes that never become content. You're losing gold because you can't keep up with your own creativity."
      },
      {
        title: "Growth Plateaus",
        description: "You're producing quality content but SEO, thumbnails, titles, and descriptions are guesswork. You know optimization matters but don't have time to master it."
      }
    ],
    solutions: [
      {
        title: "AI Content Repurposing Engine",
        description: "Turn one long-form video into 20+ pieces: shorts, tweets, LinkedIn posts, blog articles, email newsletters, and audiograms. Create once, distribute everywhere."
      },
      {
        title: "Intelligent Editing Assistant",
        description: "AI cuts silences, adds captions, suggests B-roll placement, and handles first-pass editing. You focus on the creative direction, not the tedious execution."
      },
      {
        title: "SEO Optimization Wizard",
        description: "AI generates optimized titles, descriptions, tags, and thumbnails based on trending topics and proven patterns in your niche."
      },
      {
        title: "Content Idea Vault",
        description: "Capture ideas anywhere, AI organizes them, suggests combinations, and even drafts outlines. Never lose a great idea again."
      }
    ],
    testimonialPlaceholder: "I was making 3 videos a week and drowning. Now I make 5 videos a week and have time for family dinners. The AI handles all the repurposing and distribution. My reach tripled.",
    cta: "Amplify Your Creative Output"
  },
  {
    slug: "agencies",
    title: "Agencies & Marketing Teams",
    subtitle: "Deliver More Campaigns, Faster Results",
    description: "Scale your agency's capabilities with AI-powered campaign automation, client reporting, and content production that delivers results.",
    icon: Megaphone,
    gradient: "from-cosmic-cyan to-cosmic-pink",
    glow: "rgba(34, 211, 238, 0.5)",
    metaTitle: "AI for Marketing Agencies | Scale Your Team | WizardOf.ai",
    metaDescription: "Scale your agency with AI automation. Deliver more campaigns, better results, and detailed reporting without increasing headcount or burning out your team.",
    keywords: [
      "AI for agencies",
      "marketing agency automation",
      "agency AI tools",
      "scale marketing agency",
      "automated client reporting",
      "agency productivity AI"
    ],
    painPoints: [
      {
        title: "Client Demands Exceed Capacity",
        description: "Every client wants more: more content, more campaigns, more platforms, more reporting. Your team is maxed out, but you can't afford to hire fast enough."
      },
      {
        title: "Reporting Eats Billable Hours",
        description: "20+ hours per month creating client reports that summarize data from 6 different platforms. That's revenue-generating time spent on administrative tasks."
      },
      {
        title: "Inconsistent Campaign Performance",
        description: "Some campaigns crush it, others flop. You're relying on individual talent rather than repeatable systems, making scaling unpredictable."
      },
      {
        title: "Client Churn from Slow Delivery",
        description: "Clients leave because you can't keep up with their growth. Onboarding new clients takes weeks, campaign launches are delayed, and opportunities are missed."
      }
    ],
    solutions: [
      {
        title: "Automated Reporting Dashboard",
        description: "AI pulls data from all platforms, generates insights, creates branded reports, and schedules distribution. 20 hours of work becomes 20 minutes."
      },
      {
        title: "Campaign Automation Engine",
        description: "Template-based campaign systems with AI optimization. Launch new campaigns in hours instead of weeks, with performance that matches your best work."
      },
      {
        title: "AI Creative Assistant",
        description: "Generate ad copy variations, social content calendars, email sequences, and landing page content at scale. Your team edits and approves instead of creating from scratch."
      },
      {
        title: "Client Onboarding Automation",
        description: "From contract to first campaign in 48 hours. Automated intake, strategy generation, asset collection, and campaign setup."
      }
    ],
    testimonialPlaceholder: "We went from managing 8 clients to 25 clients with the same team size. Our margins improved because reporting and campaign setup are now mostly automated. Client satisfaction is at all-time highs.",
    cta: "Scale Your Agency with AI"
  },
  {
    slug: "executives",
    title: "Executives & C-Suite",
    subtitle: "Reclaim Your Time, Amplify Your Impact",
    description: "Enterprise-grade AI systems that handle your information overload, automate decisions, and give you back hours every week.",
    icon: Briefcase,
    gradient: "from-nebula-purple to-cosmic-cyan",
    glow: "rgba(168, 85, 247, 0.5)",
    metaTitle: "AI for Executives & C-Suite | Executive Automation | WizardOf.ai",
    metaDescription: "Enterprise AI systems for executives. Reclaim 10+ hours per week with intelligent automation for decision support, scheduling, email, and information synthesis.",
    keywords: [
      "AI for executives",
      "C-suite automation",
      "executive AI assistant",
      "leadership automation",
      "executive productivity AI",
      "CEO AI tools"
    ],
    painPoints: [
      {
        title: "Drowning in Information",
        description: "200+ emails daily, Slack pings every 5 minutes, reports from every department, industry news, competitor updates. You can't synthesize it all and still have time to lead."
      },
      {
        title: "Calendar Controls You",
        description: "Back-to-back meetings leave no time for strategic thinking. Every scheduling request requires 10 emails. Your assistant is overwhelmed managing your calendar alone."
      },
      {
        title: "Decision Fatigue",
        description: "Every day brings dozens of decisions, but you lack consolidated data. Information is scattered across platforms, making confident decisions time-consuming."
      },
      {
        title: "Communication Bottleneck",
        description: "Your team waits hours or days for responses. You're the bottleneck, but there aren't enough hours to respond thoughtfully to everyone who needs your input."
      }
    ],
    solutions: [
      {
        title: "AI Executive Assistant",
        description: "Intelligent email triage and drafting, automated calendar optimization, meeting preparation briefs, and priority-based information routing."
      },
      {
        title: "Decision Support System",
        description: "AI synthesizes data from all your business systems into executive briefings. Get the full picture in 5 minutes instead of 5 hours."
      },
      {
        title: "Intelligent Information Routing",
        description: "AI filters, prioritizes, and summarizes incoming information. Only critical items reach you directly. Everything else is handled or delegated automatically."
      },
      {
        title: "Automated Board Reporting",
        description: "AI generates board decks, financial summaries, and strategic updates from live data. Monthly reporting goes from 2 days to 2 hours."
      }
    ],
    testimonialPlaceholder: "I got back 12 hours per week. My AI system handles email triage, calendar management, and report generation. I'm finally spending time on strategy instead of administration.",
    cta: "Elevate Your Executive Workflow"
  }
];

export function getAudienceBySlug(slug: string): Audience | undefined {
  return audiences.find((a) => a.slug === slug);
}

export function getAllAudienceSlugs(): string[] {
  return audiences.map((a) => a.slug);
}
