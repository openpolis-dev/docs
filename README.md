# The doc site of SeeDAO Polis

SeeDAO Polis Docs contains everything about the SeeDAO Polis Project. You can check and find all the questions regarding the SeeDAO Polis Project. 


The current website is https://docs.seedao.tech/

## How-To-Contribute

***The original `docs` is abandoned, the `seedao-docs` is the main folder for all the docs, due to some unclear issues we found.***

- Add new content

Just add your markdown file in `seedao-docs` with the correct folder and correct format. More format details can be found [here](https://docusaurus.io/).

- Add new API docs

Just put your `openapi` description file in the folder you want, and please follow the rule to modify the category.

## Build & Test

Install packages.
```
$ yarn
```

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.


```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.


## Ref
This website is built using [Docusaurus 2](https://docusaurus.io/) and [Docusaurus-OpenAPI](https://github.com/cloud-annotations/docusaurus-openapi), please check these docs for details.
