const currentDir = import.meta.dir;
const currentFile = import.meta.file;
const currentFilePath = import.meta.path;
const isCurrentFileTheEntryPoint = import.meta.main;
const figletResolutionValue = import.meta.resolveSync('figlet');

console.log(`
Current Directory: ${currentDir}
Current File: ${currentFile}
Current File Path: ${currentFilePath}
Entry Point: ${isCurrentFileTheEntryPoint}
Figlet Resolution: ${figletResolutionValue}
`);
