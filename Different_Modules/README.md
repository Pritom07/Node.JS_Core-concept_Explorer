# Different Node.js Modules Practice

This folder contains practice scripts and explorations of various Node.js core modules: `fs`, `path`, `os`, and `crypto`.  
Below are the methods explored with their parameters, purpose and example.

---

## FS Module

| Method                                        | Parameters                                 | Purpose                                             | Example                                                          |
| --------------------------------------------- | ------------------------------------------ | --------------------------------------------------- | ---------------------------------------------------------------- |
| `fs.readFileSync(path, options)`              | `path`, `options={encoding, flag}`         | Reads file content **synchronously**                | `fs.readFileSync("test.txt", "utf-8") // => "Hello"`             |
| `fs.readFile(path, options, callback)`        | `path`, `options`, `callback(err, data)`   | Reads file **asynchronously**                       | `fs.readFile("data.txt","utf-8",(err,data)=>console.log(data));` |
| `fs.writeFileSync(file, data, options)`       | `file`, `data`, `options`                  | Writes content to file (creates/overwrite) **sync** | `fs.writeFileSync("log.txt","Hello World");`                     |
| `fs.writeFile(file, data, options, callback)` | `file`, `data`, `options`, `callback(err)` | Writes content **async**                            | `fs.writeFile("app.txt","Test",(err)=>console.log("Done"));`     |
| `fs.appendFileSync(file, data, options)`      | `file`, `data`                             | Appends text to existing file                       | `fs.appendFileSync("log.txt","\\nNew line added");`              |
| `fs.unlinkSync(path)`                         | `path`                                     | Deletes a file                                      | `fs.unlinkSync("old.txt");`                                      |
| `fs.existsSync(path)`                         | `path`                                     | Checks path existence                               | `fs.existsSync("images") // => true/false`                       |
| `fs.mkdirSync(path, options)`                 | `path`, `{ recursive:true }`               | Creates directory                                   | `fs.mkdirSync("docs/sub", {recursive:true});`                    |
| `fs.readdirSync(path, options)`               | `path`                                     | Reads directory items                               | `fs.readdirSync("./images") // => ['a.png','b.png']`             |
| `fs.statSync(path)`                           | `path`                                     | Get metadata (size, isFile, isDir…)                 | `const stat = fs.statSync("readme.md"); stat.isFile() // true`   |

---

## Path Module

| Method / Property         | Parameters   | Purpose                                                           | Example                                                                                                         |
| ------------------------- | ------------ | ----------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `__dirname`               | -            | Returns the absolute directory path of the current executing file | `console.log(__dirname); // C:/Users/.../project`                                                               |
| `__filename`              | -            | Returns the absolute file path of the current executing file      | `console.log(__filename); // C:/Users/.../project/index.js`                                                     |
| `path.dirname(path)`      | `path`       | Returns the parent directory of a given path                      | `path.dirname("C:/app/src/index.js") // => C:/app/src`                                                          |
| `path.basename(path)`     | `path`       | Returns the filename or last part of a path                       | `path.basename("/home/user/app.js") // => app.js`                                                               |
| `path.extname(path)`      | `path`       | Returns the file extension (with dot)                             | `path.extname("data.csv") // => .csv`                                                                           |
| `path.parse(path)`        | `path`       | Breaks a path into components: root, dir, base, name, ext         | `path.parse("C:/app/server.js") // => { root:'C:/', dir:'C:/app', base:'server.js', ext:'.js', name:'server' }` |
| `path.format(pathObject)` | `pathObject` | Builds a full path string from an object                          | `path.format({ dir:'C:/app', name:'server', ext:'.js' }) // => C:/app/server.js`                                |
| `path.join(...paths)`     | `...paths`   | Joins multiple segments into a normalized path                    | `path.join("folder","assets","img.png") // => folder/assets/img.png`                                            |

---

## OS Module

| Method / Property    | Parameters | Purpose                                                   | Example                                           |
| -------------------- | ---------- | --------------------------------------------------------- | ------------------------------------------------- |
| `os.hostname()`      | -          | Returns the hostname of the OS                            | `os.hostname() // => "DESKTOP-12345"`             |
| `os.release()`       | -          | Returns OS version/release                                | `os.release() // => "10.0.19045"`                 |
| `os.platform()`      | -          | Returns platform (`win32`, `linux`, etc.)                 | `os.platform() // => "win32"`                     |
| `os.type()`          | -          | Returns OS name (`Windows_NT`, `Linux`)                   | `os.type() // => "Windows_NT"`                    |
| `os.arch()`          | -          | CPU architecture (`x64`, `arm`)                           | `os.arch() // => "x64"`                           |
| `os.totalmem()`      | -          | Total RAM in bytes                                        | `os.totalmem() // => 17179869184`                 |
| `os.freemem()`       | -          | Free RAM in bytes                                         | `os.freemem() // => 7894512640`                   |
| `os.cpus()`          | -          | Array of CPU core objects                                 | `os.cpus()[0] // => { model, speed, times }`      |
| `os.cpus().length`   | -          | Number of CPU cores                                       | `os.cpus().length // => 8`                        |
| `os.cpus()[0].model` | -          | Model of first CPU core                                   | `os.cpus()[0].model // => "Intel(R) Core(TM) i5"` |
| `os.cpus()[0].speed` | -          | Speed (MHz) of first CPU core                             | `os.cpus()[0].speed // => 2400`                   |
| `os.uptime()`        | -          | System uptime (seconds) / Running time since last restart | `os.uptime() // => 53000`                         |

---

## Crypto Module

| Method                                              | Parameters                   | Purpose                          | Example                                           |
| --------------------------------------------------- | ---------------------------- | -------------------------------- | ------------------------------------------------- |
| `crypto.createHash(algorithm)`                      | `'sha256'`, `'sha512'`, etc. | Creates a hash generator         | `crypto.createHash("sha256")`                     |
| `.update(data)`                                     | String / Buffer              | Feeds hash with data             | `.update("password")`                             |
| `.digest(encoding)`                                 | `'hex'`, `'base64'`, etc.    | Final output of hash             | `.digest("hex")`                                  |
| `crypto.createCipheriv(algorithm, key, iv)`         | `algorithm`, `key`, `iv`     | Creates encryption cipher        | `crypto.createCipheriv("aes-256-cbc", key, iv)`   |
| `.update(data, inputEncoding, outputEncoding)`      | plain text, encodings        | Encrypts data                    | `.update("Hello","utf8","hex")`                   |
| `.final(outputEncoding)`                            | encoding                     | Final encrypted chunk            | `.final("hex")`                                   |
| `crypto.createDecipheriv(algorithm, key, iv)`       | `algorithm`, `key`, `iv`     | Creates decryption cipher        | `crypto.createDecipheriv("aes-256-cbc", key, iv)` |
| `.update(encrypted, inputEncoding, outputEncoding)` | encrypted text, encodings    | Decrypts part of data            | `.update(data,"hex","utf8")`                      |
| `.final(outputEncoding)`                            | encoding                     | Returns remaining decrypted data | `.final("utf8")`                                  |

---
