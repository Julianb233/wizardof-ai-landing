import { Brain, Cog, MessageSquareCode, Target, Users, TrendingUp, Zap, Sparkles, LucideIcon } from "lucide-react";

export interface Service {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  size: "large" | "medium" | "small";
  gradient: string;
  glow: string;
  // SEO fields
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  // Page content
  heroHeadline: string;
  heroSubheadline: string;
  benefits: {
    title: string;
    description: string;
  }[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  useCases: string[];
  cta: string;
}

export const services: Service[] = [
  {
    slug: "ai-strategy-consulting",
    title: "AI Strategy & Consulting",
    description: "Custom AI roadmaps that align with your business goals and drive scalable growth.",
    icon: Brain,
    size: "large",
    gradient: "from-cosmic-cyan to-nebula-purple",
    glow: "rgba(34, 211, 238, 0.5)",
    metaTitle: "AI Strategy & Consulting Services | WizardOf.ai",
    metaDescription: "Get a custom AI roadmap tailored to your business goals. Expert AI strategy consulting that drives scalable growth and maximizes ROI. Book your free consultation.",
    keywords: ["AI strategy", "AI consulting", "artificial intelligence consultant", "AI roadmap", "business AI strategy", "AI transformation"],
    heroHeadline: "Transform Your Business with a Clear AI Strategy",
    heroSubheadline: "Stop guessing. Get a custom AI roadmap that aligns with your goals and delivers measurable results.",
    benefits: [
      { title: "Custom AI Roadmap", description: "A tailored strategy document outlining exactly which AI solutions will drive the most value for your specific business." },
      { title: "ROI Projections", description: "Clear financial projections showing expected returns, cost savings, and revenue increases from AI implementation." },
      { title: "Prioritized Action Plan", description: "Know exactly what to implement first, second, and third based on impact and feasibility." },
      { title: "Risk Mitigation", description: "Identify potential pitfalls before they become problems with comprehensive risk assessment." }
    ],
    process: [
      { step: 1, title: "Discovery Call", description: "We dive deep into your business, challenges, and goals to understand where AI can make the biggest impact." },
      { step: 2, title: "Audit & Analysis", description: "Comprehensive review of your current tech stack, processes, and data infrastructure." },
      { step: 3, title: "Strategy Development", description: "Custom AI roadmap created with prioritized initiatives, timelines, and resource requirements." },
      { step: 4, title: "Implementation Support", description: "Ongoing guidance as you execute the strategy, ensuring smooth adoption and measurable results." }
    ],
    useCases: [
      "Identifying automation opportunities across your organization",
      "Evaluating build vs. buy decisions for AI solutions",
      "Creating an AI governance framework",
      "Training leadership on AI capabilities and limitations",
      "Competitive analysis of AI adoption in your industry"
    ],
    cta: "Book Your Free AI Strategy Session"
  },
  {
    slug: "backend-automation",
    title: "Backend Automation",
    description: "Streamline operations and boost productivity with intelligent automation systems.",
    icon: Cog,
    size: "medium",
    gradient: "from-nebula-purple to-cosmic-pink",
    glow: "rgba(168, 85, 247, 0.5)",
    metaTitle: "Backend Automation Services | AI-Powered Operations | WizardOf.ai",
    metaDescription: "Automate your backend operations with AI. Reduce manual work by 70%, eliminate errors, and scale your business without adding headcount.",
    keywords: ["backend automation", "business process automation", "AI automation", "workflow automation", "operations automation", "intelligent automation"],
    heroHeadline: "Automate Your Backend. Scale Without Limits.",
    heroSubheadline: "Stop drowning in manual processes. Let AI handle the repetitive work while you focus on growth.",
    benefits: [
      { title: "70% Less Manual Work", description: "Automate repetitive tasks and free your team to focus on high-value activities." },
      { title: "Zero Human Errors", description: "Eliminate costly mistakes with precise, consistent automated workflows." },
      { title: "24/7 Operations", description: "Your automated systems work around the clock, even when your team is sleeping." },
      { title: "Infinite Scalability", description: "Handle 10x the volume without 10x the headcount." }
    ],
    process: [
      { step: 1, title: "Process Mapping", description: "We document your current workflows and identify automation opportunities." },
      { step: 2, title: "System Design", description: "Architect the automation solution with your existing tech stack in mind." },
      { step: 3, title: "Build & Test", description: "Develop the automation and rigorously test in a sandbox environment." },
      { step: 4, title: "Deploy & Monitor", description: "Go live with monitoring dashboards and ongoing optimization." }
    ],
    useCases: [
      "Automated data entry and validation",
      "Invoice processing and reconciliation",
      "Inventory management and reordering",
      "Customer data synchronization across platforms",
      "Report generation and distribution"
    ],
    cta: "Automate Your Operations Now"
  },
  {
    slug: "custom-bot-development",
    title: "Custom Bot Development",
    description: "AI-powered chatbots and assistants that engage customers 24/7.",
    icon: MessageSquareCode,
    size: "medium",
    gradient: "from-cosmic-pink to-cosmic-magenta",
    glow: "rgba(236, 72, 153, 0.5)",
    metaTitle: "Custom AI Chatbot Development | 24/7 Customer Engagement | WizardOf.ai",
    metaDescription: "Build AI chatbots that actually convert. Custom-built bots for sales, support, and lead qualification. Engage customers 24/7 and never miss an opportunity.",
    keywords: ["AI chatbot development", "custom chatbot", "conversational AI", "customer service bot", "sales chatbot", "lead qualification bot"],
    heroHeadline: "AI Bots That Convert, Not Just Chat",
    heroSubheadline: "Custom-built intelligent assistants that engage, qualify, and convert visitors around the clock.",
    benefits: [
      { title: "24/7 Availability", description: "Never miss a lead again. Your bot works nights, weekends, and holidays." },
      { title: "Instant Response", description: "Sub-second response times keep visitors engaged and moving through your funnel." },
      { title: "Qualified Leads Only", description: "AI qualification ensures your sales team only talks to ready-to-buy prospects." },
      { title: "Brand Voice Match", description: "Bots trained on your brand voice for consistent, on-brand conversations." }
    ],
    process: [
      { step: 1, title: "Conversation Design", description: "Map out the ideal customer journey and conversation flows." },
      { step: 2, title: "Knowledge Base Setup", description: "Train the bot on your products, services, FAQs, and brand voice." },
      { step: 3, title: "Integration & Testing", description: "Connect to your CRM, calendar, and other tools. Rigorous testing." },
      { step: 4, title: "Launch & Optimize", description: "Go live and continuously improve based on real conversations." }
    ],
    useCases: [
      "Website lead capture and qualification",
      "Customer support and FAQ handling",
      "Appointment booking and scheduling",
      "Product recommendations and upselling",
      "Onboarding and user activation"
    ],
    cta: "Build Your AI Bot Today"
  },
  {
    slug: "lead-qualification",
    title: "Lead Qualification",
    description: "Automated lead scoring and nurturing that converts prospects into customers.",
    icon: Target,
    size: "small",
    gradient: "from-cosmic-magenta to-cosmic-cyan",
    glow: "rgba(232, 121, 249, 0.5)",
    metaTitle: "AI Lead Qualification & Scoring | Convert More Leads | WizardOf.ai",
    metaDescription: "Stop wasting time on cold leads. AI-powered lead qualification scores and nurtures prospects automatically, so your sales team closes more deals.",
    keywords: ["lead qualification", "lead scoring AI", "sales automation", "lead nurturing", "prospect qualification", "AI sales"],
    heroHeadline: "Qualify Leads Instantly. Close Deals Faster.",
    heroSubheadline: "Let AI handle lead scoring and nurturing while your sales team focuses on closing.",
    benefits: [
      { title: "40% Higher Close Rate", description: "Sales teams armed with AI-qualified leads close at dramatically higher rates." },
      { title: "Instant Qualification", description: "Know within seconds if a lead is worth pursuing." },
      { title: "Automated Nurturing", description: "Cold leads get warmed up automatically until they're ready to buy." },
      { title: "Zero Leads Lost", description: "Every lead is captured, scored, and followed up on. Nothing falls through the cracks." }
    ],
    process: [
      { step: 1, title: "Scoring Model Design", description: "Define your ideal customer profile and create a custom scoring algorithm." },
      { step: 2, title: "Integration Setup", description: "Connect with your CRM, website, and marketing tools." },
      { step: 3, title: "Nurture Sequence Creation", description: "Build automated email and messaging sequences for different lead scores." },
      { step: 4, title: "Continuous Optimization", description: "Refine the model based on actual conversion data." }
    ],
    useCases: [
      "Inbound lead scoring and routing",
      "Demo request qualification",
      "Event lead follow-up automation",
      "Re-engagement of dormant leads",
      "Sales-ready lead alerting"
    ],
    cta: "Qualify Leads Automatically"
  },
  {
    slug: "executive-ai-systems",
    title: "Executive AI Systems",
    description: "Enterprise-grade automation for C-suite decision support.",
    icon: Users,
    size: "small",
    gradient: "from-cosmic-cyan to-cosmic-pink",
    glow: "rgba(34, 211, 238, 0.5)",
    metaTitle: "Executive AI Systems | C-Suite Automation | WizardOf.ai",
    metaDescription: "Enterprise-grade AI systems for executives. Reclaim 10+ hours per week with intelligent automation for decision support, scheduling, and information synthesis.",
    keywords: ["executive AI", "C-suite automation", "enterprise AI", "executive assistant AI", "decision support AI", "leadership automation"],
    heroHeadline: "AI for the C-Suite. Reclaim Your Time.",
    heroSubheadline: "Executive-grade systems that give you 10+ hours back every week while improving decision quality.",
    benefits: [
      { title: "10+ Hours Saved Weekly", description: "Automate calendar management, email triage, and information gathering." },
      { title: "Better Decisions, Faster", description: "AI-synthesized briefings give you the insights you need in seconds." },
      { title: "Enterprise Security", description: "Bank-level encryption and compliance with your security requirements." },
      { title: "Seamless Integration", description: "Works with your existing tools - Outlook, Slack, Salesforce, and more." }
    ],
    process: [
      { step: 1, title: "Executive Interview", description: "Deep dive into your daily workflows, pain points, and priorities." },
      { step: 2, title: "System Architecture", description: "Design a secure, enterprise-grade automation framework." },
      { step: 3, title: "Phased Rollout", description: "Deploy in stages with full training and support." },
      { step: 4, title: "Optimization Loop", description: "Continuous improvement based on your feedback and changing needs." }
    ],
    useCases: [
      "Intelligent calendar management",
      "Email prioritization and drafting",
      "Meeting preparation and briefings",
      "Research and competitive intelligence",
      "Board report automation"
    ],
    cta: "Upgrade Your Executive Workflow"
  },
  {
    slug: "process-optimization",
    title: "Process Optimization",
    description: "Identify bottlenecks and implement AI solutions for maximum efficiency.",
    icon: TrendingUp,
    size: "small",
    gradient: "from-nebula-purple to-cosmic-cyan",
    glow: "rgba(168, 85, 247, 0.5)",
    metaTitle: "AI Process Optimization | Eliminate Bottlenecks | WizardOf.ai",
    metaDescription: "Find and fix inefficiencies in your business processes with AI. Data-driven optimization that reduces costs, speeds up delivery, and improves quality.",
    keywords: ["process optimization", "business process improvement", "AI optimization", "workflow optimization", "efficiency consulting", "bottleneck analysis"],
    heroHeadline: "Find Bottlenecks. Fix Them Forever.",
    heroSubheadline: "Data-driven process optimization that delivers measurable efficiency gains.",
    benefits: [
      { title: "Hidden Inefficiencies Exposed", description: "AI analysis reveals bottlenecks you didn't know existed." },
      { title: "30% Average Cost Reduction", description: "Optimized processes mean less waste and lower operational costs." },
      { title: "Faster Delivery", description: "Streamlined workflows get products and services to customers faster." },
      { title: "Continuous Improvement", description: "Monitoring systems ensure processes stay optimized over time." }
    ],
    process: [
      { step: 1, title: "Process Mining", description: "Analyze your actual process data to understand how work really flows." },
      { step: 2, title: "Bottleneck Identification", description: "Pinpoint exactly where delays, errors, and waste occur." },
      { step: 3, title: "Optimization Design", description: "Create targeted solutions for each identified issue." },
      { step: 4, title: "Implementation & Measurement", description: "Deploy changes and track improvements with clear metrics." }
    ],
    useCases: [
      "Supply chain optimization",
      "Customer service workflow improvement",
      "Order fulfillment acceleration",
      "Cross-departmental handoff efficiency",
      "Quality control process enhancement"
    ],
    cta: "Optimize Your Processes"
  },
  {
    slug: "marketing-automation",
    title: "Marketing Automation",
    description: "AI-driven content and campaign automation that scales your reach.",
    icon: Zap,
    size: "medium",
    gradient: "from-cosmic-pink to-nebula-purple",
    glow: "rgba(236, 72, 153, 0.5)",
    metaTitle: "AI Marketing Automation | Scale Your Reach | WizardOf.ai",
    metaDescription: "Automate your marketing with AI. From content creation to campaign optimization, scale your marketing efforts without scaling your team.",
    keywords: ["marketing automation", "AI marketing", "content automation", "campaign automation", "marketing AI", "automated marketing"],
    heroHeadline: "Marketing That Runs Itself",
    heroSubheadline: "AI-powered automation that creates, distributes, and optimizes your marketing at scale.",
    benefits: [
      { title: "10x Content Output", description: "AI-assisted content creation multiplies your team's productivity." },
      { title: "Personalization at Scale", description: "Deliver personalized messages to every segment without manual work." },
      { title: "Optimized Campaigns", description: "AI continuously tests and improves your campaigns for better ROI." },
      { title: "Multi-Channel Automation", description: "Coordinated campaigns across email, social, ads, and more." }
    ],
    process: [
      { step: 1, title: "Marketing Audit", description: "Assess your current marketing stack, content, and campaigns." },
      { step: 2, title: "Automation Strategy", description: "Design the automation architecture and content workflows." },
      { step: 3, title: "Tool Integration", description: "Connect and configure your marketing tools for automated workflows." },
      { step: 4, title: "Launch & Scale", description: "Go live and continuously expand automation coverage." }
    ],
    useCases: [
      "Email campaign automation and personalization",
      "Social media content scheduling and optimization",
      "Ad campaign management and bidding",
      "Content repurposing across channels",
      "Marketing analytics and reporting"
    ],
    cta: "Automate Your Marketing"
  },
  {
    slug: "ai-integration",
    title: "AI Integration",
    description: "Seamlessly integrate AI capabilities into your existing tech stack.",
    icon: Sparkles,
    size: "small",
    gradient: "from-cosmic-cyan via-nebula-purple to-cosmic-pink",
    glow: "rgba(34, 211, 238, 0.5)",
    metaTitle: "AI Integration Services | Connect AI to Your Stack | WizardOf.ai",
    metaDescription: "Integrate AI capabilities into your existing systems. Custom API integrations, data pipelines, and AI model deployment that works with your tech stack.",
    keywords: ["AI integration", "API integration", "AI implementation", "system integration", "AI deployment", "AI infrastructure"],
    heroHeadline: "Add AI to Your Existing Stack",
    heroSubheadline: "Seamless integration of AI capabilities into the tools and systems you already use.",
    benefits: [
      { title: "No Rip and Replace", description: "AI adds to your existing stack - no need to replace working systems." },
      { title: "Custom APIs", description: "Tailored integration points designed for your specific use cases." },
      { title: "Real-Time Data Flow", description: "AI models connected to live data for up-to-the-minute intelligence." },
      { title: "Future-Proof Architecture", description: "Built for scalability and easy upgrades as AI evolves." }
    ],
    process: [
      { step: 1, title: "Technical Discovery", description: "Map your current architecture and integration requirements." },
      { step: 2, title: "Integration Design", description: "Architect the AI integration with security and performance in mind." },
      { step: 3, title: "Development & Testing", description: "Build the integration with comprehensive testing." },
      { step: 4, title: "Deployment & Monitoring", description: "Production deployment with performance monitoring and support." }
    ],
    useCases: [
      "CRM AI enhancement",
      "ERP intelligent automation",
      "Custom AI model deployment",
      "Third-party AI API integration",
      "Data pipeline AI augmentation"
    ],
    cta: "Integrate AI Into Your Stack"
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
