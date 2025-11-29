# File Organizer using CLI (Node.js)

A simple command-line tool that organizes files based on their extension types.  
It automatically creates folders according to categories and moves files into their respective directories.

---

## Features

✔️ Automatically creates a **Source** folder and generates sample files  
✔️ Generates category folders (Images, Videos, Documents, etc.)  
✔️ Classifies each file based on its extension  
✔️ Copies files from Source to their respective category folders  
✔️ Works entirely with Node.js **FS** and **Path** modules

---

## Technologies Used

- **Node.js**
- **fs (File System) module**
- **path module**

---

## Folder Structure

```js
File_Organizer_using_CLI/
│
├─ output/
│ ├─ SourceDir/ # Input files
│ └─ OrganizedDir/ # Categorized files
│      ├─ images/
│      ├─ documents/
│      └─ videos/
│
├─ utilities.js # Contains files array + categories object
├─ fileOrganizer_using_fs&path_module.js # Main file organizer logic
└─ README.md
```

---

## How It Works ?

### Step 1 — Create `SourceDir` & Generate Files

The script:

- Checks if `SourceDir` exists
- Creates it if missing
- Writes sample files using `fs.writeFileSync()`

```js
const newpath = path.join(sourceDir, file);
const content = `It is a ${file}`;
fs.writeFileSync(newpath, content);
```

### Step 2 — Create Category Folders

Each category in utilities.js becomes a folder inside OrganizedDir.

Example category object:

```js
{
  images: [".jpg", ".png"],
  videos: [".mp4", ".mkv"],
  documents: [".pdf", ".txt"]
}
```

Generates:

```js
OrganizedDir/
├─ images/
├─ videos/
└─ documents/
```

### Step 3 — Detect File Category

Determine category based on extension:

```js
const extension = path.extname(file);
if (values.includes(extension)) return key;
```

### Step 4 — Copy Files to Correct Folder

```js
const DestPath = path.join(dir, file);
fs.copyFileSync(SourcePath, DestPath);
```

## utilities.js Example (sample)

```js
const files = ["profile.jpg", "notes.txt", "movie.mp4", "data.pdf"];

const categories = {
  images: [".jpg", ".jpeg", ".png", ".gif", ".webp"],
  documents: [".txt", ".pdf", ".docx"],
  videos: [".mp4", ".mkv", ".avi"],
};

module.exports = { files, categories };
```

## How to Run ?

### Install Node.js (if not installed)

**Windows Download :**
https://nodejs.org/en/download

---

### Clone the Repository

```bash
git clone https://github.com/Pritom07/Node.JS_Core-concept_Explorer.git
cd Node.JS_Core-concept_Explorer\File_Organizer_using_CLI
```

### Run the Script

```js
node "fileOrganizer_using_fs&path_module.js"
```
