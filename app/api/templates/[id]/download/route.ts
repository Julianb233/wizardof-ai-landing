import { NextRequest, NextResponse } from 'next/server';
import { getTemplateById } from '@/lib/templates/template-data';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const template = getTemplateById(id);

    if (!template) {
      return NextResponse.json(
        { error: 'Template not found' },
        { status: 404 }
      );
    }

    // Transform template into AI orchestration workflow format
    const workflowExport = {
      metadata: {
        id: template.id,
        name: template.name,
        version: '1.0.0',
        category: template.category,
        description: template.description,
        difficulty: template.implementation.difficulty,
        estimatedTime: template.implementation.timeToImplement,
        exportedAt: new Date().toISOString(),
        compatibleWith: [
          'Claude Flow',
          'AI Agent Orchestration Systems',
          'Multi-Agent Frameworks'
        ]
      },

      prerequisites: {
        required: template.implementation.prerequisites,
        recommended: [
          'Claude API access or compatible AI model',
          'Multi-agent orchestration framework',
          'Development environment matching stack requirements'
        ]
      },

      agents: template.agents.map(agentName => ({
        name: agentName,
        required: true,
        role: agentName.split('-')[1] || 'Specialist',
        capabilities: getAgentCapabilities(agentName)
      })),

      workflow: {
        type: 'sequential',
        description: `Automated ${template.name.toLowerCase()} workflow`,
        steps: template.workflow.steps.map((step, index) => ({
          id: `step-${index + 1}`,
          order: step.step,
          agent: step.agent,
          action: step.action,
          dependencies: index > 0 ? [`step-${index}`] : [],
          outputs: getStepOutputs(step.agent, step.action),
          errorHandling: {
            retryStrategy: 'exponential-backoff',
            maxRetries: 3,
            fallbackAgent: getFallbackAgent(step.agent)
          }
        }))
      },

      benefits: template.benefits,

      implementation: {
        quickStart: {
          description: 'Get started with this template in minutes',
          steps: [
            {
              step: 1,
              title: 'Import Template',
              command: `ai-orchestrator import ${template.id}.json`,
              description: 'Load template into your AI orchestration system'
            },
            {
              step: 2,
              title: 'Configure Agents',
              command: 'ai-orchestrator agents:configure',
              description: 'Set up required agents with proper credentials'
            },
            {
              step: 3,
              title: 'Validate Prerequisites',
              command: 'ai-orchestrator validate:prerequisites',
              description: 'Ensure all requirements are met'
            },
            {
              step: 4,
              title: 'Run Workflow',
              command: `ai-orchestrator run ${template.id}`,
              description: 'Execute the automated workflow'
            }
          ]
        },

        customization: {
          configFile: `./${template.id}-config.json`,
          options: [
            'Agent model selection (Claude, GPT-4, etc.)',
            'Execution mode (sequential, parallel, hybrid)',
            'Output formatting and destinations',
            'Notification preferences',
            'Error handling strategies'
          ]
        },

        monitoring: {
          trackMetrics: [
            'Workflow execution time',
            'Individual agent performance',
            'Success/failure rates',
            'Token usage and costs',
            'Output quality scores'
          ],
          dashboardUrl: '/dashboard/workflows',
          alerting: {
            channels: ['email', 'slack', 'webhook'],
            conditions: [
              'Workflow failure',
              'Agent timeout',
              'Quality threshold not met'
            ]
          }
        }
      },

      examples: {
        basicUsage: generateBasicExample(template),
        advancedUsage: generateAdvancedExample(template),
        customConfiguration: generateCustomConfig(template)
      },

      tags: template.tags || [],

      resources: {
        documentation: `/docs/templates/${template.id}`,
        videoTutorial: `/tutorials/${template.id}`,
        communityForum: `/community/templates/${template.id}`,
        support: 'support@wizardofai.com'
      },

      license: {
        type: 'MIT',
        terms: 'Free to use with Wizard of AI subscription',
        attribution: 'Powered by Wizard of AI Agent Templates'
      }
    };

    // Set headers for file download
    const headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set('Content-Disposition', `attachment; filename="${template.id}-workflow.json"`);
    headers.set('X-Template-Name', template.name);
    headers.set('X-Template-Version', '1.0.0');

    return new NextResponse(JSON.stringify(workflowExport, null, 2), {
      status: 200,
      headers
    });

  } catch (error) {
    console.error('Template download error:', error);
    return NextResponse.json(
      { error: 'Failed to generate template export' },
      { status: 500 }
    );
  }
}

// Helper functions to enhance template data

function getAgentCapabilities(agentName: string): string[] {
  const capabilityMap: Record<string, string[]> = {
    'Marcus-Orchestrator': ['coordination', 'task-planning', 'resource-allocation'],
    'Tyler-TypeScript': ['typescript', 'javascript', 'nodejs', 'react', 'testing'],
    'Archie-Architect': ['system-design', 'api-design', 'scalability', 'architecture'],
    'Dana-Database': ['database-design', 'optimization', 'migrations', 'sql'],
    'Fiona-Frontend': ['react', 'nextjs', 'ui-components', 'styling', 'accessibility'],
    'Tessa-Tester': ['unit-testing', 'integration-testing', 'e2e-testing', 'coverage'],
    'Rex-Reviewer': ['code-review', 'quality-assurance', 'best-practices', 'refactoring'],
    'Sage-Security': ['security-audit', 'vulnerability-scanning', 'compliance', 'penetration-testing'],
    'Petra-DevOps': ['deployment', 'ci-cd', 'infrastructure', 'monitoring'],
    'Helena-Memory': ['context-retrieval', 'knowledge-management', 'history-tracking'],
    'Diana-Debugger': ['debugging', 'error-analysis', 'profiling', 'troubleshooting'],
    'Otto-Observer': ['monitoring', 'logging', 'alerting', 'metrics'],
    'Peter-Python': ['python', 'data-processing', 'ml-engineering', 'async-io'],
    'Adam-API': ['api-documentation', 'openapi', 'technical-writing'],
    'Kirk-Kubernetes': ['kubernetes', 'container-orchestration', 'scaling', 'helm'],
    'Morgan-Marketing': ['marketing-strategy', 'campaigns', 'analytics', 'seo'],
    'Sophie-Social': ['social-media', 'content-creation', 'engagement', 'scheduling'],
    'Scarlett-Script': ['script-writing', 'storytelling', 'video-content', 'hooks'],
    'Gina-Guide': ['documentation', 'tutorials', 'technical-writing', 'examples'],
    'Bella-Branding': ['branding', 'brand-voice', 'visual-identity', 'consistency']
  };

  return capabilityMap[agentName] || ['specialized-task-execution'];
}

function getStepOutputs(agent: string, action: string): string[] {
  if (action.includes('design') || action.includes('architecture')) {
    return ['architecture-diagram', 'technical-specifications', 'api-contracts'];
  }
  if (action.includes('test')) {
    return ['test-results', 'coverage-report', 'test-files'];
  }
  if (action.includes('deploy')) {
    return ['deployment-logs', 'monitoring-urls', 'health-check-results'];
  }
  if (action.includes('review')) {
    return ['code-review-comments', 'quality-metrics', 'improvement-suggestions'];
  }
  return ['task-completion-status', 'generated-artifacts', 'execution-logs'];
}

function getFallbackAgent(agent: string): string {
  const fallbacks: Record<string, string> = {
    'Tyler-TypeScript': 'Peter-Python',
    'Fiona-Frontend': 'Tyler-TypeScript',
    'Dana-Database': 'Archie-Architect',
    'Tessa-Tester': 'Rex-Reviewer',
    'Petra-DevOps': 'Kirk-Kubernetes'
  };

  return fallbacks[agent] || 'Marcus-Orchestrator';
}

function generateBasicExample(template: { id: string; name: string }): string {
  return `// Basic usage example
import { AIOrchestrator } from '@wizardofai/orchestrator';

const orchestrator = new AIOrchestrator();

// Load and execute template
async function runWorkflow() {
  const template = await orchestrator.loadTemplate('${template.id}');
  const result = await orchestrator.execute(template);

  console.log('Workflow completed:', result);
}

runWorkflow();`;
}

function generateAdvancedExample(template: { id: string }): string {
  return `// Advanced usage with custom configuration
import { AIOrchestrator, WorkflowConfig } from '@wizardofai/orchestrator';

const orchestrator = new AIOrchestrator();

const config: WorkflowConfig = {
  template: '${template.id}',
  agents: {
    model: 'claude-3-opus-20240229',
    temperature: 0.7,
    maxTokens: 4096
  },
  execution: {
    mode: 'parallel',
    maxConcurrency: 3,
    timeout: 300000 // 5 minutes
  },
  monitoring: {
    enabled: true,
    metricsEndpoint: '/api/metrics',
    alertOnFailure: true
  },
  output: {
    format: 'json',
    destination: './outputs/${template.id}',
    includeMetadata: true
  }
};

async function runAdvancedWorkflow() {
  const result = await orchestrator.executeWithConfig(config);

  // Access individual agent outputs
  for (const step of result.steps) {
    console.log(\`\${step.agent}: \${step.status}\`);
    console.log(\`Output:\`, step.output);
  }

  // Check quality metrics
  console.log('Quality Score:', result.metrics.qualityScore);
  console.log('Total Time:', result.metrics.executionTime);
}

runAdvancedWorkflow();`;
}

function generateCustomConfig(template: { id: string; name: string }): string {
  return `{
  "templateId": "${template.id}",
  "name": "${template.name}",
  "customizations": {
    "agents": {
      "preferredModel": "claude-3-opus-20240229",
      "fallbackModel": "claude-3-sonnet-20240229",
      "temperature": 0.7,
      "systemPrompts": {
        "custom": "Your custom system prompt here"
      }
    },
    "workflow": {
      "executionMode": "sequential",
      "stopOnError": false,
      "retryFailedSteps": true,
      "saveIntermediateOutputs": true
    },
    "notifications": {
      "email": "your-email@example.com",
      "slack": {
        "webhook": "https://hooks.slack.com/services/YOUR/WEBHOOK",
        "channel": "#ai-workflows"
      },
      "onComplete": true,
      "onError": true
    },
    "storage": {
      "provider": "s3",
      "bucket": "your-workflow-outputs",
      "region": "us-east-1"
    }
  }
}`;
}
