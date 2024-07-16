# Create React App Counter App

## What Is This?

The flutter counter app, but in react. Meant as a comparison between the two, just incase someone actually learned flutter, before they learned React. Hey, it's possible!

## Getting Started

### Install npm via nvm

React requires npm, the node package manager, and node. We can install all of these, plus a way to switch between versions, with the nvm (node version manager).

From their site:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

Once you have this, time to get a node version. I recommend the latest Long-Term Support release.

You can confirm which one that is, by typing:

```bash
nvm ls-remote
```

Once you've identified the LTS, install it:

```bash
nvm install 20.15
```

Yay! You have node!

### Install dependencies

If you're using THIS project, all you have to do is download, then change into the directory of this repo with the terminal. Then, type:

```
npm install
```

This will install the dependencies required for this project, which includes all of react.

### Run the app

Like any node project, you can type in the terminal:

```
npm run
```

To see which scripts are available to you. In this case, we'll use `start`, which starts the development environment:
```
npm run start
```

Make changes to the files, see how react hot-reloads the results.

## Author

James Robert Perih <james@hotdang.ca>
