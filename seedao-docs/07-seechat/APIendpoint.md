---
sidebar_position: 2
---
# API Endpoints Overview
This guide provides essential information on how to interact with the API endpoints effectively to achieve seamless integration and automation using our models.

### Authentication

To ensure secure access to the API, authentication is required 🛡️. You can authenticate your API requests using the Bearer Token mechanism. Obtain your API key from Profile > SeeChat in the SeeDAO OS.

### 💬 Chat Completions
Supports streaming responses and multi-turn conversations

```shell
POST /v1/chat/completions
```

```shell
export API_KEY="<Your API KEY>"
export API_ENDPOINT="<Your Endpoint>"

curl -X POST $API_ENDPOINT/api/chat/completions \
-H "Authorization: Bearer $API_KEY" \
-H "Content-Type: application/json" \
-d '{
      "model":"deepseek-reasoner",
      "stream": true,
      "messages": [
        {
          "role": "user",
          "content": "Why is the sky blue?"
        }
      ]
    }'
```
