# AI Agent Workflow Templates

This directory contains pre-built workflow templates for AI agent orchestration systems.

## Overview

These JSON files define complete multi-agent workflows that can be imported into:
- Claude Flow
- AI Agent Orchestration Systems
- Multi-Agent Frameworks
- Custom agent coordination systems

## Available Workflows

1. **full-stack-development.json** - Complete feature development pipeline (9 agents)
2. **github-operations-workflow.json** - GitHub automation workflow (6 agents)
3. **content-creation-pipeline.json** - Content production workflow (5 agents)
4. **security-audit-workflow.json** - Security testing workflow (5 agents)
5. **project-orchestration.json** - Project coordination workflow (6 agents)
6. **api-integration-research.json** - API research workflow (4 agents)
7. **python-data-pipeline.json** - Data pipeline workflow (5 agents)
8. **kubernetes-deployment.json** - K8s deployment workflow (4 agents)
9. **documentation-generation.json** - Docs creation workflow (3 agents)
10. **tdd-workflow.json** - Test-driven development workflow (4 agents)

## Usage

### Direct Download
```bash
curl -O https://wizardof-ai-landing.vercel.app/workflows/full-stack-development.json
```

### Import to Claude Flow
```bash
claude-flow import workflows/full-stack-development.json
```

### Programmatic Access
```javascript
const workflow = await fetch('https://wizardof-ai-landing.vercel.app/workflows/full-stack-development.json')
  .then(res => res.json());
```

## Structure

Each workflow JSON contains:
- **metadata**: ID, name, version, category, difficulty, estimated time
- **agents**: List of required named agents with roles
- **workflow**: Sequential steps with agent assignments and actions
- **benefits**: Key advantages of using this workflow
- **implementation**: Prerequisites and setup requirements
- **tags**: Searchable tags for categorization
- **license**: Usage terms and attribution

## Named Agents

Workflows reference specialized agents like:
- Marcus-Orchestrator: Task coordination
- Tyler-TypeScript: TypeScript/JavaScript development
- Archie-Architect: System design
- Dana-Database: Database operations
- Fiona-Frontend: UI development
- Tessa-Tester: Testing automation
- Rex-Reviewer: Code review
- Sage-Security: Security auditing
- Petra-DevOps: Deployment automation
- And many more...

## Customization

All workflows can be customized by:
1. Modifying agent assignments
2. Adding/removing steps
3. Adjusting execution order
4. Changing prerequisites
5. Updating configurations

## Support

For questions or custom workflow requests:
- Website: https://wizardof-ai-landing.vercel.app
- Email: support@wizardofai.com
- Templates: https://wizardof-ai-landing.vercel.app/templates

## License

MIT License - Free to use with Wizard of AI subscription
Powered by Wizard of AI Agent Templates
