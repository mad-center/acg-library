# Website

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

## Development
### Installation

```console
yarn install
```

### Local Development

```console
yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

For Windows 10 local build and deploy to remote:
```bash
cmd /C "set "GIT_USER=wdpm" && yarn deploy"
```
If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

For Github actions deploy:
```bash
git checkout -b documentation
# make changes then push to documentation branch
```
