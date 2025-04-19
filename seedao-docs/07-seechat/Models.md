---
sidebar_position: 0
---

# Models

A token, the smallest unit of text that the model recognizes, can be a word, a number, or even a punctuation mark. We
will counted based on the total number of input and output tokens by the model.

# Models' Details

<table class="apiTable_e8hp">
    <thead>
        <tr>
            <th>MODEL</th>
            <th>deepseek-chat</th>
            <th>deepseek-reasoner</th>
        </tr>
    </thead>
    <tbody>
        <tr id="minHeadingLevel" tabindex="0">
            <td>
                CONTEXT LENGTH
            </td>
            <td>64K</td>
            <td>64K</td>
        </tr>
        <tr>
            <td>
                MAX COT(Chain of Thought) TOKENS 
            </td>
            <td>-</td>
            <td>32K</td>
        </tr>
        <tr>
            <td>
               MAX OUTPUT TOKENS
            </td>
            <td>8K</td>
            <td>8K</td>
        </tr>
    </tbody>
</table>

### Tips
-  The deepseek-chat model points to ```DeepSeek-V3```. The ```deepseek-reasoner``` model points to DeepSeek-R1.

-   ***MAX OUTPUT TOKENS:*** Integer between 1 and 8192. The maximum number of tokens that can be generated in the chat completion. The total length of input tokens and generated tokens is limited by the model's context length. If max_tokens is not specified, the default value 4096 is used.
