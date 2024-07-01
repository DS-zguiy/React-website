import fs from 'fs';
import path from 'path';
import {globSync} from 'glob';

// 递归读取对象的所有键，生成类型定义
const generateTypes = (obj: any, parentKey: string = ''): string[] => {
  return Object.keys(obj).map(key => {
    const fullKey = parentKey ? `${parentKey}.${key}` : key;
    if (typeof obj[key] === 'object') {
      return generateTypes(obj[key], fullKey);
    }
    return `${fullKey}: string;`;
  }).flat();
};

// 生成类型定义文件
const generateTypeDefinitions = (localesPath: string) => {
  const files = globSync(`${localesPath}/**/*.json`);
  let types = 'interface Translations {\n';
  console.log(localesPath);
  files.forEach(file => {
    const content = JSON.parse(fs.readFileSync(file, 'utf8'));
    const relativePath = path.relative(localesPath, file).replace(/\.json$/, '').replace(/\\/g, '.').replace(/\//g, '.');
    types += `  ${relativePath}: {\n    ${generateTypes(content).join('\n    ')}\n  };\n`;
 
    
  });

  types += '\n}';

  const outputPath = path.resolve(__dirname, 'src','utils','i18n', 'translations.d.ts');
  fs.writeFileSync(outputPath, types);
  console.log('类型定义文件生成成功:', outputPath);
};

generateTypeDefinitions(path.resolve(__dirname,'public', 'locales'));
