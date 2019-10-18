# Introduction

This is an example application that shows how to add the Wayke Ecom React component to a non-react application.

Some things to note:

* Adding the entire React framework will be heavy and affect the loading time of the non-react website
* Make sure to configure the webpack build step according to your own requirements, so that the final build is production ready (i.e. we don't take responsibility of that)


## Prerequisites

* nodejs + npm


## Build

* In the root dir, run `npm install`
* Then run `npm run build`

The result is in the `build` folder.


## Usage

You can now open the `example.html` file and test the Wayke Ecom React component.
In the html-file you can then see how you should implement the component on your own site.

Note: You will of course have to configure `__ecomApiAddress` and `__ecomDevData` yourself to match prod/test environment and to add dynamic vehicle data.


## Resources

Consider the following repositories for more information:

* https://github.com/wayke-se/wayke-ecom-react
* https://github.com/wayke-se/wayke-ecom-js