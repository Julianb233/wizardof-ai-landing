#!/usr/bin/env node

/**
 * Vercel Deployment Script
 * Deploys the WizardOf.ai landing page to Vercel
 */

const { spawn } = require('child_process');
const path = require('path');

const projectDir = __dirname;

// Run Vercel deploy
console.log('Starting Vercel deployment...');
console.log(`Project directory: ${projectDir}`);

// Try deployment with --prod flag
const deploy = spawn('vercel', ['deploy', '--prod', '--confirm'], {
  cwd: projectDir,
  stdio: 'inherit',
  shell: true
});

deploy.on('close', (code) => {
  if (code === 0) {
    console.log('\n✓ Deployment successful!');
    process.exit(0);
  } else {
    console.error(`\n✗ Deployment failed with code ${code}`);
    process.exit(1);
  }
});

deploy.on('error', (error) => {
  console.error('Error during deployment:', error.message);
  process.exit(1);
});
