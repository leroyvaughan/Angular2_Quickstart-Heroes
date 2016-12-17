# Angular2 "Tour of Heroes" Tutorial (my rendition)

**This is not the perfect arrangement for your application. It is not designed for production.
It exists primarily to get you started quickly with learning and prototyping in Angular**

We are unlikely to accept suggestions about how to grow this QuickStart into something it is not.
Please keep that in mind before posting issues and PRs.



##This is my rendition...meaning I handtyped the TypeScript (not copied) and I changed the layout structure of the app a bit to group files together by feature.  *Also, mock heroes is still in there.  I used the in-memory data service, but didn't remove the original mock-heroes file.

What I did do was to take this a step further and make my own Angular2 app.  It's a trimmed down version of this but it uses Observables instead of Promise and I did a little bit of prettying up.



## Prerequisites

Node.js and npm are essential to Angular development. 
    
<a href="https://docs.npmjs.com/getting-started/installing-node" target="_blank" title="Installing Node.js and updating npm">
Get it now</a> if it's not already installed on your machine.
 
**Verify that you are running at least node `v4.x.x` and npm `3.x.x`**
by running `node -v` and `npm -v` in a terminal/console window.
Older versions produce errors.

We recommend [nvm](https://github.com/creationix/nvm) for managing multiple versions of node and npm.

## Create a new project based on the QuickStart

Clone this repo into new project folder (e.g., `my-proj`).
```bash
git clone  https://github.com/angular/quickstart  my-proj
cd my-proj
```



```bash
npm install
npm start
```

The `npm start` command first compiles the application, 
then simultaneously re-compiles and runs the `lite-server`.
Both the compiler and the server watch for file changes.

Shut it down manually with `Ctrl-C`.

