<h1 align="center"> ⚛️ Template TS REACT airbnb</h1>

## Linters

```sh
$ npx eslint --init
# > 3 opcion con stilos > es6 > react > typescript > airbnb> json > no
> yarn add -D eslint-plugin-react @typescript-eslint/eslint-plugin eslint-config-airbnb eslint eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react-hooks @typescript-eslint/parser
> yarn add -D eslint-config-prettier prettier
```

- modificar el [.eslintrc.json](.eslintrc.json)
- crear [.eslintignore](.eslintignore)
- crear [.prettierrc.json](.prettierrc.json) y [.prettierignore](.prettierignore)
- agregar eslintcache a [.gitignore](.gitignore)
- instalar [lint-staged](https://github.com/okonet/lint-staged#installation-and-setup) `npx mrm@2 lint-staged`

## baseUrl

[Craco alias](https://www.npmjs.com/package/craco-alias#examples)

```sh
$ yarn add @craco/craco
$ yarn add -D craco-alias
```

- crear [tsconfig.extend.json](tsconfig.extend.json)
- modificar extends [tsconfig.json](tsconfig.json)
- crear [craco.config.js](craco.config.js)
- modificar scripts [package.json](package.json)
