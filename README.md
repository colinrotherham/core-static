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
Install _nvm_ (Node Version Manager)
https://github.com/nvm-sh/nvm#installation-and-update

Install the latest Node.js 12 LTS release using _nvm_:

```console
nvm install
```

Install dependencies automatically by running:
```
npm ci
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
Run quality checks on your code:

```
npm test
```
