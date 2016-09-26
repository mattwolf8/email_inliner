# EMAIL BUILD PROCESS
############################################
## Features

### Inliner:
* CSS (stylesheets, sass, style tags in the head)
* HTML Attributes

### Templating:
* swig for readable code

############################################
## Terminal Commands

### INSTALL
* open terminal from the folders root (sass_inliner_swig)
* Install Dependencies: `$ npm install`

### WATCH SRC & BUILD TO TEMP
### WATCH TEMP & BUILD TO DIST
`$ gulp watch`

############################################

## FOLDER STRUCTURE

### Active Development Version (Sass & Swig)
* local code: `src/index.html`
* local code template: `src/_partials/`

### Temp Development Version (Compiled from Sass and Swig)
* build files from src to:
* `temp/style.css`
* `temp/index.html`

### Distribution Version (inline css into index.html from temp folder)
* `dist/index.html`
# email_inliner
