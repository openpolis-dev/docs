---
id: intro
title: 🖐️ Intro
sidebar_label: Intro
sidebar_position: 0
---

## Overview

SeeDAO Profile Protocol Application is also named as SeePASS.

The SeePASS service encompasses two distinct scopes of data: profile and seepass.
These scopes provide developers with different sets of information,
allowing them to tailor their requests based on their specific requirements.

The profile endpoint focuses on retrieving user data that is typically presented within the SeeDAO App.
This includes essential details such as the user's nickname,
avatar link, email address, and social media account information. 

On the other hand, the seepass endpoint offers a broader range of data,
including information stored on the blockchain. This encompasses assets such as SEED NFTs, SBT,
and other relevant on-chain data. Developers who require access to blockchain-specific 
information can leverage the seepass endpoint to retrieve and utilize this data within their applications.

## Sample Response

The request detail and fields description can be found in the endpoint specified document,
here are sample response data will be retured by the endpoints.

### Profile Data

```json
{
    "wallet": "<Wallet Address>",
    "nickname": "<Nickname>",
    "bio": "<Personal BIO>",
    "sns_name": "<SNS>",
    "avatar": "<avatar imamge url>",
    "email": "<email>",
    "snRecords": [
        {
            "network": "wechat",
            "identity": ""
        },
        {
            "network": "discord",
            "identity": ""
        },
        {
            "network": "twitter",
            "identity": ""
        },
        {
            "network": "mirror",
            "identity": ""
        }
    ]
}
```

### SeePASS Data

```json
{
    "sns": "<SNS>",
    "wallet": "<Wallet Address>",
    "avatar": "<Avatar Image URL>",
    "email": "<Email>",
    "nickname": "<Nickname>",
    "bio": "<Personal BIO>",
    "roles": [
        "NODE_S4",
        "NODE_S2",
        "NODE_S3",
        "CITYHALL_S3",
        "SEEDAO_MEMBER"
    ],
    "scr": {
        "amount": "704165",
        "contract_addr": "0xc74DEE15a4700D5df797bDD3982EE649A3Bb8c6C"
    },
    "level": {
        "current_lv": "4",
        "next_lv": "5",
        "scr_to_next_lv": "295835",
        "upgrade_percent": "57.73"
    },
    "seed": [
        {
            "token_id": "499",
            "contract_addr": "0x30093266E34a816a53e302bE3e59a93B52792FD4",
            "contract_type": "erc721",
            "image_uri": "ipfs://bafybeihwciazjns5wjehd3464ipqzxn2kzutazj2ovk3bol4oxjvpcl5za/499_3.png",
            "token_amount": "1"
        }
    ],
    "sbt": [
        {
            "token_id": "42",
            "contract_addr": "0x2221F5d189c611B09D7f7382Ce557ec66365C8fc",
            "contract_type": "erc1155",
            "image_uri": "",
            "token_amount": "1",
            "collection_name": null,
            "name": "SeeDAO",
            "symbol": "",
            "metadata": {}
        },
        {
            "token_id": "1",
            "contract_addr": "0x2221F5d189c611B09D7f7382Ce557ec66365C8fc",
            "contract_type": "erc1155",
            "image_uri": "https://storage.googleapis.com/ensoul-labs-image/FkboaQ7VEAI_3Nd 1.png",
            "token_amount": "1",
            "collection_name": null,
            "name": "SeeDAO社区大会2.0第0期 - 参与者",
            "symbol": "",
            "metadata": {
                "name": "SeeDAO社区大会2.0第0期 - 参与者",
                "image": "https://storage.googleapis.com/ensoul-labs-image/FkboaQ7VEAI_3Nd 1.png",
                "properties": {
                    "category": "社区大会"
                },
                "description": "SeeDAO社区大会2.0第0期参会成员"
            }
        },
        {
            "token_id": "11",
            "contract_addr": "0x2221F5d189c611B09D7f7382Ce557ec66365C8fc",
            "contract_type": "erc1155",
            "image_uri": "https://storage.googleapis.com/ensoul-labs-image/11x386picture.jpg",
            "token_amount": "1",
            "collection_name": null,
            "name": " SeeDAO研发公会 - 2023Q1 Tech Department Attender",
            "symbol": "",
            "metadata": {
                "name": " SeeDAO研发公会 - 2023Q1 Tech Department Attender",
                "image": "https://storage.googleapis.com/ensoul-labs-image/11x386picture.jpg",
                "properties": {
                    "category": "研发公会"
                },
                "description": "2023年Q1研发公会参与者，感谢各位的积极参与。"
            }
        }
    ],
    "social_accounts": [
        {
            "network": "wechat",
            "identity": ""
        },
        {
            "network": "discord",
            "identity": ""
        },
        {
            "network": "twitter",
            "identity": ""
        },
        {
            "network": "mirror",
            "identity": ""
        }
    ]
}

```