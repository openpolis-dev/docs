---
sidebar_position: 1
---
# Token Usage Calculation
Tokens are the basic units used by the model to process natural language text and serve as our billing metric. You can think of them as equivalent to "words" or "characters." 

As a general reference, the conversion ratio between tokens and characters is roughly:

- 1 English character ≈ 0.3 tokens

- 1 Chinese character ≈ 0.6 tokens

However, since tokenization varies across different models, the exact ratio may differ. The actual token count for each processing task will be provided in the API response under the usage field, which should be treated as the authoritative reference.
