---
title: MCP
date: 2025-05-27 09:29:02
description: 
tags: 
aliases: 
draft: true
---
The following post includes information from Huggingface's [MCP Course](https://huggingface.co/mcp-course) notes.
## Prerequisites 
The following courses are not mandatory to complete. But it is a good practice to have knowledge about how language processing works and agentic models work. The following courses are both available on Hugging Face.

1. LLM Course (access on [HF](https://huggingface.co/learn/llm-course/chapter1/1))
2. AI Agents Course (access on [HF](https://huggingface.co/learn/agents-course/unit0/introduction))
## Session 1
### 0. Welcome
[Hello World Video](https://www.youtube.com/watch?v=p4q6LI-2yZ8) Session video
[Hugging Face MCP Course](https://huggingface.co/mcp-course) Session Content

### 1. Introduction to  Model Context Protocol
MCP is a standardized protocol that acts as a universal connector or integration layer between AI models/agents and external tools, data sources, or services. It enables AI agents to access contextual information, APIs, databases, or other resources in a standardized, scalable way.

The Model Context Protocol (MCP) facilitates the integration of artificial intelligence models with external data repositories, instruments, and environments, thereby enabling the fluid exchange of information and functionalities between AI systems and the expansive digital ecosystem. Such interoperability is essential for fostering the development and widespread implementation of genuinely beneficial AI applications.

MCP helps solve the issue of an AI system's agentic capabilities. Because of **Integration Problems**, running an AI app for multiple purposes other than just chatting is challenging.

The **M×N Integration Problem** means trying to link M different AI apps with N different outside tools or data sources without a common method.

Using MCP improves the [[Developer Experience]] in a positive way by reducing the friction for the developer.

>MCP transforms this into an M+N problem by providing a standard interface: each AI application implements the client side of MCP once, and each tool/data source implements the server side once. This dramatically reduces integration complexity and maintenance burden.

![[2025-mcp01.jpeg]]
>Each AI application implements the client side of MCP once, and each tool/data source implements the server side once.
### 2. MCP Terminology
In MCP, there's a setup similar to how things work with HTTP or OSC. It uses a standard syntax in order to access and connect external tools. it includes both a client and a server.

- **Host**: The user-facing AI applications through which end-users directly interact are characterized by their direct engagement with users. These include hosted solutions such as Anthropic’s Claude Desktop, AI-enhanced Integrated Development Environments (IDEs) like Cursor, inference libraries such as Hugging Face Python SDK, and custom applications developed using frameworks like LangChain or smolagents. In this architecture, hosts establish connections to MCP Servers and manage the interaction flow between user queries, LLM processing steps, and external tool executions efficiently.
    
- **Client**: A part of the host application responsible for managing interactions with a particular MCP Server. Each Client establishes a one-to-one connection with one Server, managing the protocol-specific aspects of MCP communication and serving as a bridge between the Host’s internal processes and the external Server.

- **Server**: The MCP protocol facilitates access to external tools, resources, and prompts provided by external programs or services.


### 3. Architectural Components of MCP
[Continue From Here](https://huggingface.co/learn/mcp-course/unit1/architectural-components)

## Sources
[Welcome to the 🤗 Model Context Protocol (MCP) Course - Hugging Face MCP Course](https://huggingface.co/learn/mcp-course/unit0/introduction)

