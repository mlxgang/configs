# pet projects configs
A small repository with configurations for development.

# Stylelint

A CSS linter for applying best practices and grouping related properties.

### Install:

```bash
npm install --save-dev stylelint stylelint-config-standard stylelint-order stylelint-semantic-groups
```
Then copy `stylelint.config.js` to root directory. Don\`t forget check that `package.json` has property `"type": "module"`

### Usage:

```bash
npx stylelint "**/*.css"
```

P.S. WebStorm supports Stylelint natively. For VS Code, you need to install an [extension](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
