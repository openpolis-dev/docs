---
sidebar_position: 0
---

# Overview

For web front, user need to sign message and request third part server's auth api for getting third part server's user credentials, then user can use the credentials to access his/her data.

# Install

[![npm version](https://badge.fury.io/js/@seedao%2Fsee-auth.svg)](https://badge.fury.io/js/@seedao%2Fsee-auth)

```shell
$ npm i @seedao/see-auth
```

# Usage

Has tow ways:

* `seeAuthWithSigner(...)`: use `signer` to sign message especially
* `seeAuthSignMessageFn(...)`: use `signMessageFn` function to sign message especially

#### 1. sign message use `signer`

example:

```typescript
import { seeAuthWithSigner } from "@seedao/see-auth";

const domain = window.location.host;
const uri = window.location.origin;
const chainId = 1;

interface ThirdAuthResp {
  token: string
}
const resp: ThirdAuthResp = await seeAuthWithSigner<ThirdAuthResp>(domain, uri, chainId, "https://3rd.deno.dev/seeauth", signer);
```

`seeAuthWithSigner(...)` function's signature is:

```typescript
async function seeAuthWithSigner<T>(domain: string, uri: string, chainId: number, authEndpoint: string, signer: Signer): Promise<T>
```

* `domain`: the domain of the web site, common use `const domain = window.location.host`.
* `uri`: the uri of the web site, common use `const uri = window.location.origin`.
* `chainId`: the chain id of blockchain.
* `authEndpoint`: the third part server's auth api endpoint, for example: `https://3rd.deno.dev/seeauth`
* `signer`: the signer, for example: `const provider: BrowserProvider = new BrowserProvider(window.ethereum); const signer = await provider.getSigner();`
* the `T` generic type is the response type of the third part server's auth api endpoint, for example: `interface Resp3rd { token: string }`

If you just want get SeeAuth server's response, and request third part server's auth api by yourself, you can use `seeAuthWithSigner2(...)` function:

```typescript
import { seeAuthWithSigner2 } from "@seedao/see-auth";

const domain = window.location.host;
const uri = window.location.origin;
const chainId = 1;

const resp: SeeAuth = await seeAuthWithSigner2(domain, uri, chainId, signer);
```

`seeAuthWithSigner2(...)` function's signature is:

```typescript
async function seeAuthWithSigner2(domain: string, uri: string, chainId: number, signer: Signer): Promise<SeeAuth>;
```

* `domain`: the domain of the web site, common use `const domain = window.location.host`.
* `uri`: the uri of the web site, common use `const uri = window.location.origin`.
* `chainId`: the chain id of blockchain.
* `signer`: the signer, for example: `const provider: BrowserProvider = new BrowserProvider(window.ethereum); const signer = await provider.getSigner();`
* function's return type is `SeeAuth` object, it contains everything you need to request third part server's auth api

#### 2. sign message use `signMessageFn`

example:

```typescript
import { seeAuthSignMessageFn } from "@seedao/see-auth";

const domain = window.location.host;
const uri = window.location.origin;
const chainId = 1;

const resp: ThirdAuthResp = await seeAuthSignMessageFn<ThirdAuthResp>(domain, uri, chainId, signer.address, "https://3rd.deno.dev/seeauth", async (message: string | Uint8Array) => {
  return await signer.signMessage(message);
});
```

`seeAuthSignMessageFn(...)` function's signature is:

```typescript
async function seeAuthSignMessageFn<T>(domain: string, uri: string, chainId: number, address: string, authEndpoint: string, signMessageFn: (message: string | Uint8Array) => Promise<string>): Promise<T>;
```

* `domain`: the domain of the web site, common use `const domain = window.location.host`.
* `uri`: the uri of the web site, common use `const uri = window.location.origin`.
* `chainId`: the chain id of blockchain.
* `address` is the address of which signed the message
* `authEndpoint`: the third part server's auth api endpoint, for example: `https://3rd.deno.dev/seeauth`
* `signMessageFn` is the function which implements sign message
* the `T` generic type is the response type of the third part server's auth api endpoint, for example: `interface Resp3rd { token: string }`

If you just want get SeeAuth server's response, and request third part server's auth api by yourself, you can use `seeAuthSignMessageFn2(...)` function:

```typescript
import { seeAuthSignMessageFn2 } from "@seedao/see-auth";

const domain = window.location.host;
const uri = window.location.origin;
const chainId = 1;

const resp: SeeAuth = await seeAuthSignMessageFn2(domain, uri, chainId, signer.address, async (message: string | Uint8Array) => {
  return await signer.signMessage(message);
});
```

`seeAuthSignMessageFn2(...)` function's signature is:

```typescript
async function seeAuthSignMessageFn2(domain: string, uri: string, chainId: number, address: string, signMessageFn: (message: string | Uint8Array) => Promise<string>): Promise<SeeAuth>;
```

* `domain`: the domain of the web site, common use `const domain = window.location.host`.
* `uri`: the uri of the web site, common use `const uri = window.location.origin`.
* `chainId`: the chain id of blockchain.
* `address` is the address of which signed the message
* `signMessageFn` is the function which implements sign message
* function's return type is `SeeAuth` object, it contains everything you need to request third part server's auth api
