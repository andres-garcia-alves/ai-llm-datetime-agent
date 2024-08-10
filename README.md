# ChatGPT LLM Datetime Agent

A ChatGPT-4o chatbot agent specialized in datetime.

&nbsp;

### Motivation

Specialized chatbots (agents) can be created based on ChatGPT and similars.  

ChatGPT is based on public internet data from year 2021. This have some implications, for instance:

- Its answers could lead to outdated techniques or libraries in the case of source code generation.
- Its answers cound not include **real-time data**, eg: stock data, datetime data, and so on...
- Its answers cound not include **custom data** retrieved from private-owned APIs, and so on...

But, ChatGPT LLM can be "teached" with custom funtions... enabling it to use them in its answers in adition to its own knownledge.  
With this in mind, now ChatGPT could inlude real-time data by calling public o private-owned APIs, for instance: to turn CharGPT into a specialized chatbot.

More info:  
https://platform.openai.com/docs/guides/function-calling

For this demo project, I'm connecting ChatGPT with WorldTimeAPI, enableing it to retrieve the current local time for a given location around the globe.

More info:  
https://worldtimeapi.org/  
https://worldtimeapi.org/api/timezone/

&nbsp;

### Screenshots

| ChatGTP (Standard)                                  | ChatGTP + WorldTimeAPI                              |
|-----------------------------------------------------|-----------------------------------------------------|
| ![](Resources/01-chat-gpt.png)                      | ![](Resources/02-chat-gpt-agent.png)                |

See 'Rescources' sub-folder for more pictures & videos of the project.

&nbsp;

### Version History

v1.0 (2024.08.10) - Initial release.  

&nbsp;

This is the first public release of this project.
Developed for subject 'Introducción a la Inteligencia Artificial', at Instituto Superior Santo Domingo (ISSD), Argentina.  

This source code is licensed under MIT licence.  
Please send me your feedback about this project: andres.garcia.alves@gmail.com
