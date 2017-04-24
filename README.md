[![Build Status](https://travis-ci.org/mcalthrop/cv.svg?branch=master)](https://travis-ci.org/mcalthrop/cv)

# Matt Calthrop: CV

_Source code for my online CV_

## Overview

This codebase contains the source for my online CV: [cv.mattcalthrop.com](http://cv.mattcalthrop.com/).

It uses the following features:

- [Yarn](https://yarnpkg.com/en/) for dependency management
- [ES2015/ES6](https://babeljs.io/learn-es2015/)
- [Eslint](http://eslint.org/) for linting
- [AngularJS](https://angularjs.org/) as the SPA framework
- [SkeletonCSS](http://getskeleton.com/) for the design framework
- [Contentful](https://www.contentful.com/) for hosting the content
- [Travis](https://travis-ci.org/mcalthrop/cv) for CI testing
- [Heroku](https://www.heroku.com/) for deployment and hosting

## Setup

### Install yarn

Follow the instructions here:

[yarnpkg.com/en/docs/install](https://yarnpkg.com/en/docs/install)

### Install NodeJS packages

Install the NodeJS packages:

``` sh
$ yarn
```

## Running the app

> App code is in the `public` directory.

### During development

In a terminal tab, you can use `nodemon`:

``` sh
$ yarn nodemon
```

To check if the API is running, browse to:

[localhost:7000/api](http://localhost:7000/)

## Tests

### All

To run all tests:

``` sh
$ yarn test
```

### Linting

> Check the `.eslint` file for the Eslint rules.

The Javascript code can be linted as follows:

``` sh
$ yarn lint
```

And to auto-correct any errors that can be corrected:

``` sh
$ yarn lint:fix
```
