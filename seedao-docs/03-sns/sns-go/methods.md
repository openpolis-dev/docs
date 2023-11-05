---
sidebar_position: 1
sidebar_label: Methods
---

# Methods

#### 1.1 Resolve addr from sns

```go
var addr string = sns.Resolve("abc.seedao")
```

If the sns is not registered, it will return `0x0000000000000000000000000000000000000000` (zero address).

This method has an equivalent version: `func ResolveWithRPC(sns, rpc string) string`, but you can use your own rpc endpoint, for example:

```go
var addr string = sns.ResolveWithRPC("abc.seedao", "https://eth-mainnet.g.alchemy.com/v2/H43zK7UnIN2v7u2ZoTbizIPnXkylKIZl")
```

#### 1.2 Resolve sns from addr

```go
var sns string = sns.Name("0x123...789")
```

If the address has no sns, it will return `""` (empty string).

This method also has an equivalent version: `func NameWithRPC(addr, rpc string) (sns string)`, but you can use your own rpc endpoint.

#### 2.1 Batch resolve addr from sns

```go
var addrArr []string = sns.Resolves([]string{"abc.seedao", "def.seedao"})
```

If the sns is not registered, it will return `0x0000000000000000000000000000000000000000` (zero address).

This method also has an equivalent version: `func ResolvesWithRPC(sns []string, rpc string) []string`, but you can use your own rpc endpoint.

#### 2.2 Batch resolve sns from addr

```go
var nameList []string = sns.Names([]string{"0x123...789", "0x456...654"})
```

If the address has no sns, it will return `""` (empty string).

This method also has an equivalent version: `func NamesWithRPC(addr []string, rpc string) []string`, but you can use your own rpc endpoint.
