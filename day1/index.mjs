import fs from 'fs';
import path from 'path';
import solution from './solution.mjs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, 'input.txt');

fs.readFile(filePath, 'utf8', (err, data) => {
  const values = data.split('\n');
  const output = solution(values);
  console.log(output);
});
