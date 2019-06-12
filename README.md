Core Static
====

### What is it?
Core is a static HTML site generator (fork it and start a project).  
Try the demo: https://apps.colinr.com/core/

### Features

1. Critical CSS loading (100/100 on Google PageSpeed)
2. HTML template generation via [Nunjucks](https://mozilla.github.io/nunjucks/)
3. ES6 module bundling via Babel and webpack
4. Supports Internet Explorer 8 (yikes)

### Initial setup

Install Node.JS v12.4+

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
