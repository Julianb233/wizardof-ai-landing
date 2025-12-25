/**
 * AI Agent Workflow Templates
 * Generated from Claude Flow agent coordination system
 *
 * Based on:
 * - /root/.claude-flow/agent-coordination/named-agents.json
 * - /root/.claude-flow/agent-coordination/capability-registry.json
 * - /root/.claude-flow/mcp-factory/training-templates.json
 */

export interface WorkflowTemplate {
  id: string;
  name: string;
  category: 'coding' | 'content' | 'operations' | 'security' | 'architecture' | 'research';
  description: string;
  imageUrl: string;
  workflow: {
    steps: Array<{
      step: number;
      agent: string;
      action: string;
    }>;
  };
  benefits: string[];
  implementation: {
    difficulty: 'beginner' | 'intermediate' | 'advanced';
    timeToImplement: string;
    prerequisites: string[];
  };
  agents: string[];
  downloads: number;
  tags?: string[];
}

export const templates: WorkflowTemplate[] = [
  {
    id: 'full-stack-development',
    name: 'Full Stack Development Pipeline',
    category: 'coding',
    description: 'End-to-end feature development workflow coordinating frontend, backend, testing, and deployment with multiple specialized agents.',
    imageUrl: '/templates/full-stack-dev.svg',
    workflow: {
      steps: [
        {
          step: 1,
          agent: 'Marcus-Orchestrator',
          action: 'Break down feature requirements into frontend, backend, and database tasks'
        },
        {
          step: 2,
          agent: 'Archie-Architect',
          action: 'Design system architecture, API contracts, and database schema'
        },
        {
          step: 3,
          agent: 'Dana-Database',
          action: 'Create optimized database schema with migrations and indexes'
        },
        {
          step: 4,
          agent: 'Tyler-TypeScript',
          action: 'Implement backend API endpoints with TypeScript and proper type safety'
        },
        {
          step: 5,
          agent: 'Fiona-Frontend',
          action: 'Build responsive UI components with React, Next.js, and Tailwind CSS'
        },
        {
          step: 6,
          agent: 'Tessa-Tester',
          action: 'Write comprehensive unit, integration, and E2E tests with >90% coverage'
        },
        {
          step: 7,
          agent: 'Rex-Reviewer',
          action: 'Perform code review for quality, performance, and best practices'
        },
        {
          step: 8,
          agent: 'Sage-Security',
          action: 'Run security audit for vulnerabilities and OWASP compliance'
        },
        {
          step: 9,
          agent: 'Petra-DevOps',
          action: 'Deploy to production with CI/CD pipeline and monitoring setup'
        }
      ]
    },
    benefits: [
      'Coordinated multi-agent approach ensures consistency across stack layers',
      'Built-in quality gates at each stage (testing, review, security)',
      'Automated deployment pipeline reduces manual errors',
      'Type-safe implementation from database to UI',
      'Scalable architecture designed by specialized architect agent'
    ],
    implementation: {
      difficulty: 'advanced',
      timeToImplement: '2-4 hours',
      prerequisites: [
        'Project initialized with Next.js or similar framework',
        'Database connection configured (PostgreSQL/MySQL)',
        'CI/CD pipeline setup (GitHub Actions)',
        'Testing framework installed (Jest, Playwright)',
        'Development and production environments'
      ]
    },
    agents: [
      'Marcus-Orchestrator',
      'Archie-Architect',
      'Dana-Database',
      'Tyler-TypeScript',
      'Fiona-Frontend',
      'Tessa-Tester',
      'Rex-Reviewer',
      'Sage-Security',
      'Petra-DevOps'
    ],
    downloads: 8234,
    tags: ['full-stack', 'typescript', 'react', 'nextjs', 'testing', 'devops', 'popular']
  },

  {
    id: 'github-operations-workflow',
    name: 'GitHub Operations Automation',
    category: 'operations',
    description: 'Automated GitHub workflow for issue tracking, PR management, code review, and CI/CD monitoring using GitHub MCP integration.',
    imageUrl: '/templates/github-ops.svg',
    workflow: {
      steps: [
        {
          step: 1,
          agent: 'Marcus-Orchestrator',
          action: 'Scan repository for new issues, PRs, and failed CI runs'
        },
        {
          step: 2,
          agent: 'Helena-Memory',
          action: 'Retrieve project context and recent development history'
        },
        {
          step: 3,
          agent: 'Diana-Debugger',
          action: 'Analyze failed CI/CD runs and identify root causes'
        },
        {
          step: 4,
          agent: 'Rex-Reviewer',
          action: 'Review open PRs for code quality, security, and best practices'
        },
        {
          step: 5,
          agent: 'Tessa-Tester',
          action: 'Add missing tests and improve test coverage for new code'
        },
        {
          step: 6,
          agent: 'Gina-Guide',
          action: 'Update documentation for new features and API changes'
        },
        {
          step: 7,
          agent: 'Marcus-Orchestrator',
          action: 'Create summary report and post to GitHub issue with findings'
        }
      ]
    },
    benefits: [
      'Automated PR review reduces manual code review time by 60%',
      'Early detection of CI/CD failures with root cause analysis',
      'Consistent code quality standards enforcement',
      'Automatic documentation updates for new changes',
      'Integration with GitHub API for seamless workflow'
    ],
    implementation: {
      difficulty: 'intermediate',
      timeToImplement: '1-2 hours',
      prerequisites: [
        'GitHub repository with admin access',
        'GitHub MCP server configured',
        'CI/CD pipeline setup (GitHub Actions)',
        'Branch protection rules configured',
        'Test suite in place'
      ]
    },
    agents: [
      'Marcus-Orchestrator',
      'Helena-Memory',
      'Diana-Debugger',
      'Rex-Reviewer',
      'Tessa-Tester',
      'Gina-Guide'
    ],
    downloads: 5621,
    tags: ['github', 'operations', 'automation', 'ci-cd', 'code-review']
  },

  {
    id: 'content-creation-pipeline',
    name: 'Content Creation & Distribution Pipeline',
    category: 'content',
    description: 'Multi-channel content workflow for creating, optimizing, and distributing marketing content across platforms with brand consistency.',
    imageUrl: '/templates/content-pipeline.svg',
    workflow: {
      steps: [
        {
          step: 1,
          agent: 'Morgan-Marketing',
          action: 'Research trending topics and competitor content for target audience'
        },
        {
          step: 2,
          agent: 'Bella-Branding',
          action: 'Ensure brand voice, tone, and visual guidelines are applied'
        },
        {
          step: 3,
          agent: 'Scarlett-Script',
          action: 'Create engaging video scripts with hooks, storytelling, and CTAs'
        },
        {
          step: 4,
          agent: 'Sophie-Social',
          action: 'Generate social media posts optimized for each platform (Twitter, LinkedIn, Instagram)'
        },
        {
          step: 5,
          agent: 'Gina-Guide',
          action: 'Write SEO-optimized blog posts and how-to guides'
        },
        {
          step: 6,
          agent: 'Morgan-Marketing',
          action: 'Optimize content for conversions with A/B testing recommendations'
        },
        {
          step: 7,
          agent: 'Sophie-Social',
          action: 'Schedule content distribution across channels with analytics tracking'
        }
      ]
    },
    benefits: [
      'Consistent brand voice across all content channels',
      'SEO-optimized content for better search rankings',
      'Multi-platform content adaptation (blog, social, video)',
      'Data-driven content strategy with analytics integration',
      'Automated content calendar and scheduling'
    ],
    implementation: {
      difficulty: 'intermediate',
      timeToImplement: '2-3 hours',
      prerequisites: [
        'Brand guidelines document',
        'Target audience personas defined',
        'Social media accounts connected',
        'Content management system (CMS) setup',
        'Analytics tracking configured'
      ]
    },
    agents: [
      'Morgan-Marketing',
      'Bella-Branding',
      'Scarlett-Script',
      'Sophie-Social',
      'Gina-Guide'
    ],
    downloads: 4892,
    tags: ['content', 'marketing', 'social-media', 'seo', 'branding']
  },

  {
    id: 'security-audit-workflow',
    name: 'Comprehensive Security Audit',
    category: 'security',
    description: 'Multi-layer security assessment covering code vulnerabilities, dependency scanning, penetration testing, and compliance verification.',
    imageUrl: '/templates/security-audit.svg',
    workflow: {
      steps: [
        {
          step: 1,
          agent: 'Sage-Security',
          action: 'Scan codebase for OWASP Top 10 vulnerabilities and security anti-patterns'
        },
        {
          step: 2,
          agent: 'Sage-Security',
          action: 'Analyze dependencies for known CVEs using npm audit and Snyk'
        },
        {
          step: 3,
          agent: 'Rex-Reviewer',
          action: 'Review authentication and authorization implementations'
        },
        {
          step: 4,
          agent: 'Dana-Database',
          action: 'Audit database security: SQL injection risks, access controls, encryption'
        },
        {
          step: 5,
          agent: 'Petra-DevOps',
          action: 'Review infrastructure security: secrets management, network policies, container security'
        },
        {
          step: 6,
          agent: 'Sage-Security',
          action: 'Perform penetration testing simulation for common attack vectors'
        },
        {
          step: 7,
          agent: 'Gina-Guide',
          action: 'Generate security report with findings, severity ratings, and remediation steps'
        },
        {
          step: 8,
          agent: 'Sage-Security',
          action: 'Create compliance checklist for GDPR, SOC2, and industry standards'
        }
      ]
    },
    benefits: [
      'Comprehensive security coverage across code, dependencies, and infrastructure',
      'Automated vulnerability scanning with prioritized remediation',
      'Compliance verification for GDPR, SOC2, HIPAA standards',
      'Detailed security report with actionable recommendations',
      'Continuous monitoring integration for ongoing security'
    ],
    implementation: {
      difficulty: 'advanced',
      timeToImplement: '3-5 hours',
      prerequisites: [
        'Access to production and staging environments',
        'Security scanning tools installed (Snyk, OWASP ZAP)',
        'Secrets management system configured',
        'CI/CD pipeline with security gates',
        'Compliance requirements documented'
      ]
    },
    agents: [
      'Sage-Security',
      'Rex-Reviewer',
      'Dana-Database',
      'Petra-DevOps',
      'Gina-Guide'
    ],
    downloads: 3456,
    tags: ['security', 'audit', 'compliance', 'penetration-testing', 'owasp']
  },

  {
    id: 'project-orchestration',
    name: 'Project Orchestration & Coordination',
    category: 'architecture',
    description: 'Master orchestration workflow for coordinating multiple agents, managing dependencies, and ensuring project milestones are met.',
    imageUrl: '/templates/project-orchestration.svg',
    workflow: {
      steps: [
        {
          step: 1,
          agent: 'Marcus-Orchestrator',
          action: 'Parse project requirements and create task dependency graph'
        },
        {
          step: 2,
          agent: 'Archie-Architect',
          action: 'Design high-level architecture and define service boundaries'
        },
        {
          step: 3,
          agent: 'Helena-Memory',
          action: 'Load project context, team velocity, and historical patterns'
        },
        {
          step: 4,
          agent: 'Marcus-Orchestrator',
          action: 'Assign tasks to specialized agents based on capabilities and workload'
        },
        {
          step: 5,
          agent: 'Otto-Observer',
          action: 'Set up monitoring for agent progress, blockers, and completion status'
        },
        {
          step: 6,
          agent: 'Marcus-Orchestrator',
          action: 'Coordinate agent communication via shared memory namespaces'
        },
        {
          step: 7,
          agent: 'Diana-Debugger',
          action: 'Handle agent failures and blockers with automatic retry strategies'
        },
        {
          step: 8,
          agent: 'Marcus-Orchestrator',
          action: 'Aggregate agent outputs and ensure milestone completion'
        },
        {
          step: 9,
          agent: 'Gina-Guide',
          action: 'Generate project status report with completion metrics'
        }
      ]
    },
    benefits: [
      'Intelligent task routing based on agent capabilities and specializations',
      'Parallel execution of independent tasks for faster completion',
      'Automatic dependency management and task sequencing',
      'Real-time progress monitoring with blocker detection',
      'Scalable coordination for large multi-agent projects'
    ],
    implementation: {
      difficulty: 'advanced',
      timeToImplement: '4-6 hours',
      prerequisites: [
        'Claude Flow memory system configured',
        'Named agent registry populated',
        'Agent capability mapping defined',
        'Project management system integration (Linear, Notion)',
        'Communication channels setup (Slack notifications)'
      ]
    },
    agents: [
      'Marcus-Orchestrator',
      'Archie-Architect',
      'Helena-Memory',
      'Otto-Observer',
      'Diana-Debugger',
      'Gina-Guide'
    ],
    downloads: 6178,
    tags: ['orchestration', 'coordination', 'project-management', 'multi-agent', 'architecture']
  },

  {
    id: 'api-integration-research',
    name: 'API Integration Research & Implementation',
    category: 'research',
    description: 'Research-driven workflow for discovering, evaluating, and implementing third-party API integrations with MCP servers.',
    imageUrl: '/templates/api-integration.svg',
    workflow: {
      steps: [
        {
          step: 1,
          agent: 'Helena-Memory',
          action: 'Search existing integrations and API documentation in knowledge base'
        },
        {
          step: 2,
          agent: 'Marcus-Orchestrator',
          action: 'Research API capabilities, rate limits, and authentication methods'
        },
        {
          step: 3,
          agent: 'Archie-Architect',
          action: 'Design integration architecture and data flow patterns'
        },
        {
          step: 4,
          agent: 'Adam-API',
          action: 'Document API endpoints, request/response schemas, and error handling'
        },
        {
          step: 5,
          agent: 'Tyler-TypeScript',
          action: 'Implement MCP server with type-safe API client'
        },
        {
          step: 6,
          agent: 'Tessa-Tester',
          action: 'Create integration tests with mock API responses'
        },
        {
          step: 7,
          agent: 'Sage-Security',
          action: 'Audit API security: credential storage, rate limiting, data validation'
        },
        {
          step: 8,
          agent: 'Gina-Guide',
          action: 'Write usage documentation and example workflows'
        }
      ]
    },
    benefits: [
      'Systematic API evaluation and integration planning',
      'Type-safe implementation with comprehensive error handling',
      'Automated testing with mock servers for reliability',
      'Security-first approach to credential management',
      'Reusable MCP server for team-wide API access'
    ],
    implementation: {
      difficulty: 'intermediate',
      timeToImplement: '2-4 hours',
      prerequisites: [
        'API credentials and documentation access',
        'MCP server template project',
        'TypeScript environment configured',
        'Testing framework setup',
        'Secrets management system'
      ]
    },
    agents: [
      'Helena-Memory',
      'Marcus-Orchestrator',
      'Archie-Architect',
      'Adam-API',
      'Tyler-TypeScript',
      'Tessa-Tester',
      'Sage-Security',
      'Gina-Guide'
    ],
    downloads: 4123,
    tags: ['api', 'integration', 'research', 'mcp', 'documentation']
  },

  {
    id: 'python-data-pipeline',
    name: 'Python Data Processing Pipeline',
    category: 'coding',
    description: 'Build scalable data pipelines with Python for ETL, data analysis, and machine learning workflows with performance optimization.',
    imageUrl: '/templates/python-pipeline.svg',
    workflow: {
      steps: [
        {
          step: 1,
          agent: 'Peter-Python',
          action: 'Design data pipeline architecture with async I/O and parallel processing'
        },
        {
          step: 2,
          agent: 'Dana-Database',
          action: 'Optimize database queries and design efficient data schemas'
        },
        {
          step: 3,
          agent: 'Peter-Python',
          action: 'Implement ETL logic with Pandas, NumPy, and async libraries'
        },
        {
          step: 4,
          agent: 'Peter-Python',
          action: 'Add data validation, error handling, and retry mechanisms'
        },
        {
          step: 5,
          agent: 'Tessa-Tester',
          action: 'Write unit tests with pytest and property-based testing'
        },
        {
          step: 6,
          agent: 'Otto-Observer',
          action: 'Set up monitoring with structured logging and metrics'
        },
        {
          step: 7,
          agent: 'Petra-DevOps',
          action: 'Containerize with Docker and deploy to Kubernetes'
        }
      ]
    },
    benefits: [
      'High-performance async data processing',
      'Scalable architecture for large datasets',
      'Comprehensive error handling and retry logic',
      'Production-ready monitoring and alerting',
      'Containerized deployment for portability'
    ],
    implementation: {
      difficulty: 'advanced',
      timeToImplement: '3-5 hours',
      prerequisites: [
        'Python 3.12+ environment',
        'Database connection (PostgreSQL/MongoDB)',
        'Docker and Kubernetes access',
        'Data sources configured',
        'Monitoring infrastructure'
      ]
    },
    agents: [
      'Peter-Python',
      'Dana-Database',
      'Tessa-Tester',
      'Otto-Observer',
      'Petra-DevOps'
    ],
    downloads: 3789,
    tags: ['python', 'data-pipeline', 'etl', 'async', 'machine-learning']
  },

  {
    id: 'kubernetes-deployment',
    name: 'Kubernetes Deployment & Scaling',
    category: 'operations',
    description: 'Production-grade Kubernetes deployment with auto-scaling, health checks, monitoring, and zero-downtime updates.',
    imageUrl: '/templates/kubernetes-deploy.svg',
    workflow: {
      steps: [
        {
          step: 1,
          agent: 'Kirk-Kubernetes',
          action: 'Design Kubernetes manifests: Deployments, Services, Ingress, ConfigMaps'
        },
        {
          step: 2,
          agent: 'Petra-DevOps',
          action: 'Configure CI/CD pipeline with automated testing and deployment'
        },
        {
          step: 3,
          agent: 'Kirk-Kubernetes',
          action: 'Implement horizontal pod autoscaling (HPA) based on metrics'
        },
        {
          step: 4,
          agent: 'Sage-Security',
          action: 'Configure network policies, RBAC, and secrets management'
        },
        {
          step: 5,
          agent: 'Otto-Observer',
          action: 'Set up Prometheus monitoring and Grafana dashboards'
        },
        {
          step: 6,
          agent: 'Kirk-Kubernetes',
          action: 'Implement rolling updates with health checks and readiness probes'
        },
        {
          step: 7,
          agent: 'Diana-Debugger',
          action: 'Test failover scenarios and disaster recovery procedures'
        }
      ]
    },
    benefits: [
      'Zero-downtime deployments with rolling updates',
      'Automatic scaling based on CPU/memory/custom metrics',
      'Comprehensive monitoring and alerting',
      'Secure by default with network policies and RBAC',
      'Production-ready infrastructure as code'
    ],
    implementation: {
      difficulty: 'advanced',
      timeToImplement: '4-6 hours',
      prerequisites: [
        'Kubernetes cluster access (EKS, GKE, or AKS)',
        'Docker images built and pushed to registry',
        'Helm charts or Kustomize configurations',
        'Monitoring stack installed (Prometheus, Grafana)',
        'SSL certificates and DNS configured'
      ]
    },
    agents: [
      'Kirk-Kubernetes',
      'Petra-DevOps',
      'Sage-Security',
      'Otto-Observer',
      'Diana-Debugger'
    ],
    downloads: 2934,
    tags: ['kubernetes', 'devops', 'deployment', 'scaling', 'monitoring']
  },

  {
    id: 'documentation-generation',
    name: 'Automated Documentation Generation',
    category: 'content',
    description: 'Generate comprehensive technical documentation including API references, architecture guides, and tutorials with code examples.',
    imageUrl: '/templates/documentation.svg',
    workflow: {
      steps: [
        {
          step: 1,
          agent: 'Helena-Memory',
          action: 'Extract project context, architecture decisions, and API contracts'
        },
        {
          step: 2,
          agent: 'Adam-API',
          action: 'Generate OpenAPI/Swagger documentation from code annotations'
        },
        {
          step: 3,
          agent: 'Gina-Guide',
          action: 'Write getting started guides, tutorials, and best practices'
        },
        {
          step: 4,
          agent: 'Archie-Architect',
          action: 'Create architecture diagrams and system design documentation'
        },
        {
          step: 5,
          agent: 'Tyler-TypeScript',
          action: 'Generate code examples and usage snippets with proper typing'
        },
        {
          step: 6,
          agent: 'Tessa-Tester',
          action: 'Ensure all code examples are tested and working'
        },
        {
          step: 7,
          agent: 'Gina-Guide',
          action: 'Build searchable documentation site with versioning'
        }
      ]
    },
    benefits: [
      'Always up-to-date documentation generated from code',
      'Consistent documentation format across projects',
      'Interactive API documentation with try-it-now features',
      'Tested code examples that actually work',
      'Searchable and versioned documentation site'
    ],
    implementation: {
      difficulty: 'intermediate',
      timeToImplement: '2-3 hours',
      prerequisites: [
        'Code annotations for API documentation',
        'Documentation framework (Docusaurus, VitePress)',
        'CI/CD pipeline for doc deployment',
        'Examples directory with test coverage',
        'Hosting platform (Vercel, Netlify, GitHub Pages)'
      ]
    },
    agents: [
      'Helena-Memory',
      'Adam-API',
      'Gina-Guide',
      'Archie-Architect',
      'Tyler-TypeScript',
      'Tessa-Tester'
    ],
    downloads: 4567,
    tags: ['documentation', 'api-docs', 'technical-writing', 'automation']
  },

  {
    id: 'tdd-workflow',
    name: 'Test-Driven Development (TDD) Workflow',
    category: 'coding',
    description: 'Implement features using strict TDD methodology: write tests first, implement minimal code, refactor for quality.',
    imageUrl: '/templates/tdd-workflow.svg',
    workflow: {
      steps: [
        {
          step: 1,
          agent: 'Tessa-Tester',
          action: 'Write failing tests that specify expected behavior (Red phase)'
        },
        {
          step: 2,
          agent: 'Tyler-TypeScript',
          action: 'Implement minimal code to make tests pass (Green phase)'
        },
        {
          step: 3,
          agent: 'Rex-Reviewer',
          action: 'Refactor code for readability, performance, and maintainability'
        },
        {
          step: 4,
          agent: 'Tessa-Tester',
          action: 'Add edge case tests and property-based tests'
        },
        {
          step: 5,
          agent: 'Rex-Reviewer',
          action: 'Review test coverage and suggest missing test scenarios'
        },
        {
          step: 6,
          agent: 'Diana-Debugger',
          action: 'Analyze test failures and identify regression issues'
        },
        {
          step: 7,
          agent: 'Tessa-Tester',
          action: 'Generate coverage report and ensure >90% code coverage'
        }
      ]
    },
    benefits: [
      'Higher code quality through test-first approach',
      'Better design decisions driven by testability',
      'Comprehensive test coverage from the start',
      'Faster debugging with clear test specifications',
      'Reduced regression bugs in production'
    ],
    implementation: {
      difficulty: 'intermediate',
      timeToImplement: '1-2 hours per feature',
      prerequisites: [
        'Testing framework configured (Jest, Vitest)',
        'Code coverage tools setup',
        'CI/CD pipeline with test gates',
        'Team agreement on TDD practices',
        'Property-based testing library (fast-check)'
      ]
    },
    agents: [
      'Tessa-Tester',
      'Tyler-TypeScript',
      'Rex-Reviewer',
      'Diana-Debugger'
    ],
    downloads: 5234,
    tags: ['tdd', 'testing', 'quality-assurance', 'best-practices', 'coding']
  }
];

/**
 * Get templates by category
 */
export function getTemplatesByCategory(category: WorkflowTemplate['category']): WorkflowTemplate[] {
  return templates.filter(template => template.category === category);
}

/**
 * Get most popular templates
 */
export function getPopularTemplates(limit: number = 5): WorkflowTemplate[] {
  return [...templates]
    .sort((a, b) => b.downloads - a.downloads)
    .slice(0, limit);
}

/**
 * Get template by ID
 */
export function getTemplateById(id: string): WorkflowTemplate | undefined {
  return templates.find(template => template.id === id);
}

/**
 * Search templates by name or description
 */
export function searchTemplates(query: string): WorkflowTemplate[] {
  const lowerQuery = query.toLowerCase();
  return templates.filter(template =>
    template.name.toLowerCase().includes(lowerQuery) ||
    template.description.toLowerCase().includes(lowerQuery) ||
    template.tags?.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}

/**
 * Get templates by difficulty
 */
export function getTemplatesByDifficulty(difficulty: WorkflowTemplate['implementation']['difficulty']): WorkflowTemplate[] {
  return templates.filter(template => template.implementation.difficulty === difficulty);
}

/**
 * Agent information from named-agents registry
 */
export interface AgentInfo {
  name: string;
  role: string;
  tier: 'core' | 'quality' | 'specialized' | 'business';
  capabilities: string[];
  complexity: 'medium' | 'high' | 'expert';
}

export const agentRegistry: Record<string, AgentInfo> = {
  'Marcus-Orchestrator': {
    name: 'Marcus-Orchestrator',
    role: 'Multi-agent coordination',
    tier: 'core',
    capabilities: ['task-management', 'resource-planning', 'workflow-orchestration'],
    complexity: 'expert'
  },
  'Tyler-TypeScript': {
    name: 'Tyler-TypeScript',
    role: 'TypeScript/JavaScript development',
    tier: 'core',
    capabilities: ['typescript', 'javascript', 'nodejs', 'react', 'nextjs', 'testing'],
    complexity: 'high'
  },
  'Rex-Reviewer': {
    name: 'Rex-Reviewer',
    role: 'Code review and quality assurance',
    tier: 'core',
    capabilities: ['code-review', 'best-practices', 'security-review', 'refactoring'],
    complexity: 'high'
  },
  'Diana-Debugger': {
    name: 'Diana-Debugger',
    role: 'Bug investigation and troubleshooting',
    tier: 'core',
    capabilities: ['debugging', 'error-analysis', 'root-cause-analysis', 'profiling'],
    complexity: 'high'
  },
  'Archie-Architect': {
    name: 'Archie-Architect',
    role: 'System design and architecture',
    tier: 'core',
    capabilities: ['system-design', 'api-design', 'microservices', 'distributed-systems'],
    complexity: 'expert'
  },
  'Tessa-Tester': {
    name: 'Tessa-Tester',
    role: 'Test automation and quality',
    tier: 'quality',
    capabilities: ['unit-testing', 'integration-testing', 'e2e-testing', 'tdd', 'coverage'],
    complexity: 'high'
  },
  'Petra-DevOps': {
    name: 'Petra-DevOps',
    role: 'Deployment and infrastructure',
    tier: 'quality',
    capabilities: ['docker', 'kubernetes', 'ci-cd', 'monitoring', 'infrastructure'],
    complexity: 'high'
  },
  'Helena-Memory': {
    name: 'Helena-Memory',
    role: 'Context and history management',
    tier: 'quality',
    capabilities: ['context-management', 'knowledge-retrieval', 'history-tracking'],
    complexity: 'high'
  },
  'Sage-Security': {
    name: 'Sage-Security',
    role: 'Security audits and compliance',
    tier: 'quality',
    capabilities: ['vulnerability-scanning', 'penetration-testing', 'owasp', 'compliance'],
    complexity: 'expert'
  },
  'Otto-Observer': {
    name: 'Otto-Observer',
    role: 'Monitoring and observability',
    tier: 'quality',
    capabilities: ['monitoring', 'logging', 'alerting', 'performance-metrics'],
    complexity: 'high'
  },
  'Peter-Python': {
    name: 'Peter-Python',
    role: 'Python development',
    tier: 'specialized',
    capabilities: ['python', 'fastapi', 'django', 'data-analysis', 'ml-engineering'],
    complexity: 'high'
  },
  'Dana-Database': {
    name: 'Dana-Database',
    role: 'Database design and optimization',
    tier: 'specialized',
    capabilities: ['database-design', 'sql', 'postgresql', 'optimization', 'migration'],
    complexity: 'expert'
  },
  'Fiona-Frontend': {
    name: 'Fiona-Frontend',
    role: 'Frontend UI development',
    tier: 'specialized',
    capabilities: ['react', 'nextjs', 'css', 'tailwind', 'accessibility', 'responsive-design'],
    complexity: 'high'
  },
  'Adam-API': {
    name: 'Adam-API',
    role: 'API documentation',
    tier: 'specialized',
    capabilities: ['api-documentation', 'openapi', 'swagger', 'technical-writing'],
    complexity: 'high'
  },
  'Kirk-Kubernetes': {
    name: 'Kirk-Kubernetes',
    role: 'Container orchestration',
    tier: 'specialized',
    capabilities: ['kubernetes', 'helm', 'container-orchestration', 'scaling'],
    complexity: 'expert'
  },
  'Morgan-Marketing': {
    name: 'Morgan-Marketing',
    role: 'Marketing campaigns',
    tier: 'business',
    capabilities: ['marketing-strategy', 'campaigns', 'analytics', 'conversion-optimization'],
    complexity: 'high'
  },
  'Sophie-Social': {
    name: 'Sophie-Social',
    role: 'Social media content',
    tier: 'business',
    capabilities: ['social-media', 'content-creation', 'engagement', 'platform-optimization'],
    complexity: 'high'
  },
  'Scarlett-Script': {
    name: 'Scarlett-Script',
    role: 'Video scripts and storytelling',
    tier: 'business',
    capabilities: ['script-writing', 'storytelling', 'video-content', 'hooks'],
    complexity: 'high'
  },
  'Gina-Guide': {
    name: 'Gina-Guide',
    role: 'Technical documentation',
    tier: 'business',
    capabilities: ['technical-writing', 'documentation', 'tutorials', 'guides'],
    complexity: 'high'
  },
  'Bella-Branding': {
    name: 'Bella-Branding',
    role: 'Brand consistency',
    tier: 'business',
    capabilities: ['branding', 'brand-voice', 'visual-identity', 'consistency'],
    complexity: 'high'
  }
};

/**
 * Get agent information by name
 */
export function getAgentInfo(agentName: string): AgentInfo | undefined {
  return agentRegistry[agentName];
}

/**
 * Get all agents by tier
 */
export function getAgentsByTier(tier: AgentInfo['tier']): AgentInfo[] {
  return Object.values(agentRegistry).filter(agent => agent.tier === tier);
}

/**
 * Category metadata for template filtering
 */
export const categoryMetadata = {
  coding: {
    name: 'Coding',
    description: 'Development workflows for full-stack, backend, and frontend',
    icon: 'code',
    color: 'blue'
  },
  content: {
    name: 'Content',
    description: 'Content creation, marketing, and documentation workflows',
    icon: 'pencil',
    color: 'purple'
  },
  operations: {
    name: 'Operations',
    description: 'DevOps, deployment, and automation workflows',
    icon: 'cog',
    color: 'green'
  },
  security: {
    name: 'Security',
    description: 'Security audits, compliance, and vulnerability scanning',
    icon: 'shield',
    color: 'red'
  },
  architecture: {
    name: 'Architecture',
    description: 'System design, orchestration, and technical leadership',
    icon: 'building',
    color: 'indigo'
  },
  research: {
    name: 'Research',
    description: 'API research, documentation, and integration workflows',
    icon: 'search',
    color: 'orange'
  }
} as const;
