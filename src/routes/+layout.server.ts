import yaml from 'js-yaml';
import fs from 'fs';
import path from 'path';

export const load = async () => {
  try {
    const menuPath = path.resolve('src/lib/data/menu.yaml');
    const fileContents = fs.readFileSync(menuPath, 'utf8');
    const data = yaml.load(fileContents) as { main: any[]; social: any[] };
    return {
      menu: data.main,
      social: data.social
    };
  } catch (e) {
    console.error('Error loading menu.yaml:', e);
    return {
      menu: [],
      social: []
    };
  }
};
