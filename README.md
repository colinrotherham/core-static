Core Static
====

### What is it?
Core is a static HTML site generator (fork it and start a project).  
Try the demo: https://apps.colinr.com/core/

### Features

1. Critical CSS loading (100/100 on Google PageSpeed)
2. HTML template generation via Assemble.io
3. ES6 module bundling via Babel and webpack
4. Sass, JavaScript and HTML linting
5. Supports Internet Explorer 8 (yikes)

### Initial setup

Install Node.JS

As root/administrator:

```
npm install -g gulp-cli
```

Install dependencies automatically by running:
```
npm install
```

### Building
All files for deployment copied to `/dist/`

Output a build.
```
npm run build
```

Output a development build, proxied via BrowserSync:
```
npm run dev
```

### Testing
Run tests on the build’s HTML output

```
npm test
```
