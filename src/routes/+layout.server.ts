import yaml from 'js-yaml';
import fs from 'fs';
import path from 'path';

export const load = async () => {
  try {
    const configPath = path.resolve('src/lib/data/config.yaml');
    const fileContents = fs.readFileSync(configPath, 'utf8');
    const data = yaml.load(fileContents) as { menu: { main: any[], social: any[] }, widgets: any };
    return {
      menu: data.menu.main,
      social: data.menu.social,
      widgets: data.widgets
    };
  } catch (e) {
    console.error('Error loading config.yaml:', e);
    return {
      menu: [],
      social: [],
      widgets: {}
    };
  }
};
