import fs from "fs";
import path from "path";

// Get folder name and component name from command line arguments
const folderName = process.argv[2];
const componentName = process.argv[3];

if (!folderName || !componentName) {
  console.log("❌ Please provide both folder and component names");
  process.exit(1);
}

// Define the folder path based on the folder name provided
const folderPath = `./src/${folderName}`;

// Define the component code
const componentCode = `import React from "react";

const ${componentName} = () => {
  return <div>${componentName} Component</div>;
};

export default ${componentName};
`;

// Create the folder if it doesn't exist
if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath, { recursive: true });
  console.log(`✅ Folder ${folderPath} created`);
}

// Define the file path for the component inside the new folder
const filePath = path.join(folderPath, `${componentName}.jsx`);

// Write the component code to the new file
fs.writeFileSync(filePath, componentCode);
console.log(`✅ Component ${componentName} created at ${filePath}, Smart Boy !!`);
