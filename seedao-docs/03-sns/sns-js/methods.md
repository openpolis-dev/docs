---
sidebar_position: 1
sidebar_label: Methods
---

# Methods

#### 1.1 Resolve addr from sns

```typescript
const addr: string = await sns.resolve("abc.seedao")
```

If the sns is not registered, it will return `0x0000000000000000000000000000000000000000` (zero address).

This method also supports an optional parameter to specify the rpc endpoint: `async function resolve(sns: string, rpc?: string): Promise<string>`, for example:

```typescript
const addr: string = await sns.resolve("abc.seedao", "https://eth-mainnet.g.alchemy.com/v2/H43zK7UnIN2v7u2ZoTbizIPnXkylKIZl")
```

#### 1.2 Resolve sns from addr

```typescript
const sns: string = await sns.name("0x123...789")
```

If the address has no sns, it will return `""` (empty string).

This method also supports an optional parameter to specify the rpc endpoint.

#### 2.1 Batch resolve addr from sns

```typescript
const addrArr: string[] = await sns.resolves(["abc.seedao", "def.seedao"]);
```

If the sns is not registered, it will return `0x0000000000000000000000000000000000000000` (zero address).

This method also supports an optional parameter to specify the rpc endpoint.

#### 2.2 Batch resolve sns from addr

```typescript
const snsArr: string[] = await sns.names(["0x123...789", "0x456...654"]);
```

If the address has no sns, it will return `""` (empty string).

This method also supports an optional parameter to specify the rpc endpoint.
