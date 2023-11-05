---
sidebar_position: 0
---

# Overview

SNS JS is the JavaScript API wrapper for [SeeDAO Name Service](https://github.com/Taoist-Labs/sns).

# Install

[![npm version](https://badge.fury.io/js/@seedao%2Fsns-js.svg)](https://badge.fury.io/js/@seedao%2Fsns-js)

#### 1. npm package

Install:

```shell
$ npm i @seedao/sns-js
```

Then, import `sns` from package:

```typescript
import sns from "@seedao/sns-js";

// then you can use `sns.Xxx()` to call functions, for example `const n = await sns.resolve("abc.seedao")`
```

#### 2. Browser with `iife` format

```html
<script src="https://cdn.jsdelivr.net/npm/@seedao/sns-js@<VERSION>/dist/iife/index.min.js"></script>
<script>
  // then you can use `sns.Xxx()` to call functions, for example `sns.resolve("abc.seedao").then((n) => { console.log("name: ", n) })`
</script>
```

> Note: `<VERSION>` should be replaced with the version you want to use, for example using `1.0.0`: `https://cdn.jsdelivr.net/npm/@seedao/sns-js@1.0.0/dist/iife/index.min.js`

#### 3. Browser with `esm` format

```html
<script type="module">
  import sns from "https://cdn.jsdelivr.net/npm/@seedao/sns-js@<VERSION>/dist/esm/index.min.js";
  // then you can use `sns.Xxx()` to call functions, for example `const n = await sns.resolve("abc.seedao")`
</script>
```

> Note: `<VERSION>` should be replaced with the version you want to use, for example using `1.0.0`: `https://cdn.jsdelivr.net/npm/@seedao/sns-js@1.0.0/dist/iife/index.min.js`