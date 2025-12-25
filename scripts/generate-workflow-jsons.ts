import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';
import { templates } from '../lib/templates/template-data';

// Create workflows directory
const workflowsDir = join(__dirname, '../public/workflows');
try {
  mkdirSync(workflowsDir, { recursive: true });
} catch (error) {
  // Directory might already exist
}

// Generate JSON file for each template
templates.forEach((template) => {
  const workflow = {
    metadata: {
      id: template.id,
      name: template.name,
      version: '1.0.0',
      category: template.category,
      description: template.description,
      difficulty: template.implementation.difficulty,
      estimatedTime: template.implementation.timeToImplement,
      generatedAt: new Date().toISOString(),
      compatibleWith: [
        'Claude Flow',
        'AI Agent Orchestration Systems',
        'Multi-Agent Frameworks'
      ]
    },

    agents: template.agents.map(agentName => ({
      name: agentName,
      required: true,
      role: agentName.split('-')[1] || 'Specialist'
    })),

    workflow: {
      type: 'sequential',
      description: `Automated ${template.name.toLowerCase()} workflow`,
      steps: template.workflow.steps
    },

    benefits: template.benefits,

    implementation: {
      difficulty: template.implementation.difficulty,
      timeToImplement: template.implementation.timeToImplement,
      prerequisites: template.implementation.prerequisites
    },

    tags: template.tags || [],

    license: {
      type: 'MIT',
      terms: 'Free to use with Wizard of AI subscription',
      attribution: 'Powered by Wizard of AI Agent Templates'
    }
  };

  const filename = `${template.id}.json`;
  const filepath = join(workflowsDir, filename);

  writeFileSync(filepath, JSON.stringify(workflow, null, 2));
  console.log(`✅ Generated: ${filename}`);
});

console.log(`\n🎉 Generated ${templates.length} workflow JSON files in /public/workflows/`);
