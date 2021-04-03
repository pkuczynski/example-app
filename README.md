# Example App

This repository represents setup for an example application built using React and Nodejs.

## Setup

### Node

This app requires node version described in [.nvmrc](.nvmrc). It is recommended to use a [nvm](https://github.com/creationix/nvm) (Node Version Manager) together with [avn](https://github.com/wbyoung/avn) (Automatic Version Switching for Node).

With this setup whenever you enter project folder correct version of Node will be automatically selected (and installed if required).

**Note:** `nvm` installed from Homebrew is not supported and does not work well with `avn`.

Follow these steps to perform the setup:

1. Install [nvm](https://github.com/creationix/nvm)

        curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash

2. Restart terminal
3. Install required node

        echo .nvmrc | nvm install

4. Install [avn](https://github.com/wbyoung/avn) and avn-nvm

        npm install -g avn avn-nvm
        avn setup

5. Restart terminal

### Npm@7

This project is utilizing `worspaces` feature introduced by npm 7 (default from node )

## Core concepts

// TODO: describe convention over configuration concept
// TODO: describe router concept - where route definition is close to controller
// TODO: describe controller concept
// TODO: describe ajv schemas
