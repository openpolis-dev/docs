---
sidebar_position: 0
---

## Overview

For Third-Part Server, validate user with SeeAuth service, and return the user credentials for accessing his/her data.

## Install

[![npm version](https://badge.fury.io/js/@seedao%2Fsee-auth.svg)](https://badge.fury.io/js/@seedao%2Fsee-auth)

```shell
$ npm i @seedao/see-auth
```

## Usage

Use `async function auth3rd(recipient: string, seeAuth: SeeAuth): Promise<string>` function to authenticate user with SeeAuth service, if validate success this function will return user's wallet address, otherwise throw error.

For example(using [Hono](https://hono.dev/) framework):

```typescript
import { Hono } from "hono/mod.ts";
import { auth3rd, SeeAuth } from "see-auth";

const app = new Hono();
app.post("/seeauth", async (c) => {
  // get `SeeAuth` from request body
  const seeAuth = (await c.req.json()) as SeeAuth;

  // call `auth3rd(...)` function to validate user with SeeAuth service
  try {
    const loginWallet = await auth3rd("0x0000000000000000000000000000000000000000", seeAuth);
    
    return c.json({
      token: "<jwt token>",
    });
  } catch (e) {
    console.error(e);
    // @ts-ignore
    return c.json({
      error: e.message,
    });
  }
});
```

## Testing

Open [https://seeauth-web.deno.dev/](https://seeauth-web.deno.dev/) and fill your seeauth api url at **Third-Server-SeeAuth-Endpoint**, and then click the **With SeeAuth** button to test.

![seeauth](https://docs.seedao.tech/img/seeauth.png)
