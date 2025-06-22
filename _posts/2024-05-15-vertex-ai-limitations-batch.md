---
title: "Limitations and Challenges in Vertex AI for Industrial-Scale – Batch Predictions"
categories:
    - Blog
tags:
    - ML/AI
layout: post
permalink: /blog/vertex-ai-limitations-batch/
---

This post is part of [a series on Vertex AI](/blog/vertex-ai/) and the limitations I encountered while using it to serve ML models at production scale. If you haven’t read the first post on [Online Predictions](/blog/vertex-ai-limitations-online), that’s a good starting point.

In this second post, I’ll focus on batch predictions, a core component in many real-world ML workflows; especially in industrialized R&D contexts like drug discovery. Think screening >10M molecules every other week. When inference isn’t time-sensitive, batch jobs are supposed to help reduce overhead and costs.

In theory, batch predictions on Vertex AI should make that easy. In practice, they came with a surprising number of constraints and quirks.

Let’s walk through them.
