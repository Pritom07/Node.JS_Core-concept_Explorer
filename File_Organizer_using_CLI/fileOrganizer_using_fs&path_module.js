const fs = require("fs");
const path = require("path");
const { categories, files } = require("./utilities.js");

const sourceDir = "./File_Organizer_using_CLI/output/SourceDir";
const organizedDir = "./File_Organizer_using_CLI/output/OrganizedDir";

/*Source Directory Code*/
//--------------------------->>

const addingFiles = (files) => {
  if (!fs.existsSync(sourceDir)) {
    fs.mkdirSync(sourceDir, { recursive: true }, (err) => {
      if (err) {
        console.log(`Error Happened : ${err.message}`);
        return;
      }
    });
  }
  files.forEach((file) => {
    const newpath = path.join(sourceDir, file);
    const content = `It is a ${file}`;
    fs.writeFileSync(newpath, content);
  });
};
addingFiles(files);

/*Organized Directory Code*/
//--------------------------->>

const addingFolders = (categories) => {
  const categoryKeys = Object.keys(categories);
  if (!fs.existsSync(organizedDir)) {
    fs.mkdirSync(organizedDir, { recursive: true }, (err) => {
      if (err) {
        console.log(`Error Occured : ${err.message}`);
        return;
      }
    });
  }
  categoryKeys.forEach((category) => {
    const newpath = path.join(organizedDir, category);
    fs.mkdir(newpath, (err) => {
      if (err) {
        console.log(`Error Occured : ${err.message}`);
        return;
      }
    });
  });
};
addingFolders(categories);

const getCategory = (file, categories) => {
  const extension = path.extname(file);
  for (let [key, values] of Object.entries(categories)) {
    if (values.includes(extension)) {
      return key;
    }
  }
};

const sourceDirFiles = fs.readdirSync(sourceDir);

sourceDirFiles.forEach((file) => {
  const fileCategory = getCategory(file, categories);
  const SourcePath = path.join(sourceDir, file);
  const stat = fs.statSync(SourcePath);
  if (stat.isDirectory()) {
    return;
  } else {
    const categoriesArray = Object.keys(categories);
    categoriesArray.forEach((category) => {
      const dir = path.join(organizedDir, category);
      if (category === fileCategory) {
        const DestPath = path.join(dir, file);
        fs.copyFileSync(SourcePath, DestPath);
      }
    });
  }
});
