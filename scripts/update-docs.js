import fs from 'fs';
import { execSync } from 'child_process';
import path from 'path';

const projectRoot = process.cwd();

function updateChangelog() {
    console.log('Updating CHANGE.md...');
    try {
        const logs = execSync('git log --pretty=format:"- %s (%h) - %cd" --date=short -n 20').toString();
        const content = `# Change Log

All notable changes to this project will be documented in this file.

## Recent History
${logs}
`;
        fs.writeFileSync(path.join(projectRoot, 'CHANGE.md'), content);
    } catch (error) {
        console.error('Failed to update changelog (maybe no git commits yet?):', error.message);
    }
}

function updateGeminiContext() {
    console.log('Updating GEMINI.md...');
    const geminiPath = path.join(projectRoot, 'GEMINI.md');
    
    // Read existing content to preserve top sections if needed, 
    // or just overwrite with a structured template.
    // For now, we regenerate the structure section.

    let structure = '';
    try {
        // Use 'find' or similar, but node's readdir is cross-platform safer if recursive function.
        // For simplicity, let's use a shell command for tree if available, or a simple custom walker.
        // We'll use a simple custom walker to avoid 'tree' dependency.
        
        const getStructure = (dir, prefix = '') => {
            let output = '';
            const items = fs.readdirSync(dir, { withFileTypes: true });
            // Filter
            const filtered = items.filter(item => 
                !item.name.startsWith('.') && 
                item.name !== 'node_modules' &&
                item.name !== 'dist' &&
                item.name !== 'build'
            );
            
            filtered.forEach((item, index) => {
                const isLast = index === filtered.length - 1;
                const connector = isLast ? '└── ' : '├── ';
                output += `${prefix}${connector}${item.name}
`;
                if (item.isDirectory()) {
                    output += getStructure(path.join(dir, item.name), `${prefix}${isLast ? '    ' : '│   '}`);
                }
            });
            return output;
        };

        structure = getStructure(projectRoot);
    } catch (e) {
        structure = 'Error generating structure: ' + e.message;
    }

    const content = `# Gemini Context

This file contains context and instructions for the Gemini CLI agent working on this project.

## Project Overview
- **Name**: blog
- **Type**: SvelteKit Application
- **Language**: TypeScript
- **Last Updated**: ${new Date().toLocaleString()}

## Tech Stack
- SvelteKit
- Vite
- TypeScript
- NPM

## Conventions
- Use 
 npm 
 for package management.
- Prefer TypeScript interfaces for props.
- Follow Svelte 5 snippets and runes syntax where applicable.

## Current Project Structure


${structure}

`;
    fs.writeFileSync(geminiPath, content);
}

updateChangelog();
updateGeminiContext();
console.log('Documentation updated successfully.');
