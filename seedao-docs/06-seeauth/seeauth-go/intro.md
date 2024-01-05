---
sidebar_position: 0
---

## Overview

For Third-Part Server, validate user with SeeAuth service, and return the user credentials for accessing his/her data.

## Install

![GitHub go.mod Go version (subdirectory of monorepo)](https://img.shields.io/github/go-mod/go-version/Taoist-Labs/see-auth-go)
![GitHub release (with filter)](https://img.shields.io/github/v/release/Taoist-Labs/see-auth-go)

```shell
$ go get github.com/Taoist-Labs/see-auth-go
```

## Usage

Use `SeeDAOAuth(...)` function to authenticate user with SeeAuth service.

```go
// SeeDAOAuth authenticates with SeeAuth service
// `recipient` parameter is fixed to `0x0000000000000000000000000000000000000000`
// `seeAuth` parameter is the `SeeAuth` object, it is parsed from the http request body.
// It returns the wallet address if the authentication is successful, otherwise it returns an error
func SeeDAOAuth(recipient string, seeAuth *SeeAuth) (string, error)
```

For example(using [Fiber](https://gofiber.io/) framework):

```go
package main

import (
	seeauth "github.com/Taoist-Labs/see-auth-go"
	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()

    app.Post("/seeauth", func(c *fiber.Ctx) error {
        var req seeauth.SeeAuth
        if err := c.BodyParser(&req); err != nil {
            return err
        }

        wallet, err := seeauth.SeeDAOAuth("0x0000000000000000000000000000000000000000", &req)
        if err != nil {
            return err
        }

        return c.JSON(struct {
            Wallet string `json:"wallet"`
            Token  string `json:"token"`
        }{
            Wallet: wallet,
            Token:  "jwt token",
        })
    })
}
```

## Testing

Open [https://seeauth-web.deno.dev/](https://seeauth-web.deno.dev/) and fill your seeauth api url at **Third-Server-SeeAuth-Endpoint**, and then click the **With SeeAuth** button to test.

![seeauth](https://docs.seedao.tech/img/seeauth.png)
