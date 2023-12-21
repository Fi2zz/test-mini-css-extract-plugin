# 🚀 Welcome to your new awesome project!

This project has been created using **webpack-cli**, you can now run

```

npm install
npm run build
```

or

```
yarn
yarn build
```

to bundle your application

# Test input

```css
/* case 1:      */
@import url("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css")
	screen and (min-width: 640px);
/* case 2:    */
@import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
	screen and (min-width: 640px);
/* case 3 */
@import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
	screen;
/* case 4 */
@import url("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css")
screen;
/* case  5 */
@import url("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css")
	layer(some-layer) screen and (max-width: 1024px);

/* case  6 */

@import url("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css")
	layer screen and (max-width: 1024px);

/* case  7 */

@import url("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css")
	layer supports(flex: inline) screen and (max-width: 1024px);

/* case 10 */
@import /* webpackIgnore:true */
	url("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css")
	screen and (max-width: 1024px);
/* case  9 */
@import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css";

/* case 10 */
@import url("./test-css-import.css") screen and (min-width: 640px);
```

# Test result

```css
    @import url(https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css) screen and (min-width: 640px) 	/*  expected ';' here */
    @import url(https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css) screen and (min-width: 640px) 	/*  expected ';' here */
    @import url(https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css) screen /*  expected ';' here */
    @import	url(https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css) screen    /*  expected ';' here */
    @import url(https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css) screen and (max-width: 1024px)  /*  expected ';' here */
    @import	url(https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css) screen and (max-width: 1024px) /*  expected ';' here */
    @import url(https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css) screen and (max-width: 1024px)    /*  expected ';' here */
    /* normal case */
    @import	url(https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css);
    @media screen and (min-width: 640px) {
        #test-css-import {
            width: 100px;
            height: 100px;
            color: red;
        }
    }
/* case 1:      */
/* case 2:    */
/* case 3 */
/* case 4 */
/* case  5 */

/* case  6 */

/* case  7 */

/* case 10 */
/* normal case */
@import /* webpackIgnore:true */	url("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css")	screen and (max-width: 1024px);
/* case  9 */

/* case 10 */
```
