const fs = require('fs');
const path = require('path');
const util = require('util');

const less = require('less');
const CleanCSS = require('clean-css');

const renderLess = util.promisify(less.render);
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const delimiter = /<%\s*content\s*%>/;

async function lessToCss(lessFile) {
  const lessRendered = await renderLess(lessFile, {});
  const resultCSS = lessRendered.css.toString();
  const result = await new CleanCSS({ format: 'beautify' }).minify(resultCSS);
  return result.styles;
}

const templateFile = path.join(__dirname, './less-template.tmpl');

async function lessRender(sourceFile) {
  const template = await readFile(templateFile, 'utf-8');
  const file = await readFile(sourceFile, 'utf-8');
  const match = delimiter.exec(template);
  if (!match) {
    throw new Error(
      `Template file ${templateFile} did not contain template delimiters`
    );
  }
  console.log(`Processing ${sourceFile}`);
  const replacement = await lessToCss(file);
  const newContent = template.replace(delimiter, replacement);
  const outputFile = sourceFile
    .replace('.less', '.styles.js')
    .replace('less', 'src');
  return writeFile(outputFile, newContent, 'utf-8');
}

exports.lessRender = lessRender;
