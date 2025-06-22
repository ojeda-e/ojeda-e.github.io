---
title: "Limitations and Challenges in Vertex AI for Industrial-Scale - Online Predictions"
categories:
    - Blog
tags:
    - ML/AI
layout: post
permalink: /blog/vertex-ai-limitations-online/
---

_This post details the main blockers I ran into while serving ML models, what they mean and its possible workarounds._

Vertex AI is a platform provided by Google Cloud. It offers managed services for training and deploying ML models. In my case, I initially used it for model serving at Recursion. I discovered that once I moved beyond demos and implemented for real-world use cases, I hit some very real (and painful) limitations.

While enabling endpoints  in Vertex AI for production to serve our chemistry property prediction models, I ran into a series of limitations, both technical and process-related, that I consider are worth documenting. This post details the main blockers I ran into while serving ML models, what they mean and its possible workarounds. If you’re considering Vertex AI for production workloads, hopefully this gives you some useful perspective.

In this first post of a Vertex AI series, I am going to focus on the limitations I experience working with Vertex AI while serving models for online predictions. I also have a post that describes the limitations for batch predictions, as well as the Model Registry.

Before diving into the specific limitations, I’ll quickly outline the kind of models I was working with. Nothing particularly exotic: these were transformer-based models for molecular graphs, fine-tuned with proprietary Recursion data to predict chemistry-related properties. The full details are in the published paper is [here](https://www.nature.com/articles/s41467-024-53751-y).


### Limitation 1: Request timeout

Since our fine-tuned models take SMILES as input and outputs a probability, when serving the model, we provide input instances as a list of SMILES, each represented as a string. 

While serving our model on Vertex AI endpoints, we found a timeout when sending 1,000 samples. We identified the default 60-second request timeout is insufficient for running predictions at scale. For context, the models could only process ~600 SMILES per request—well below the 1M SMILES per cycle we expect. Keep in mind, in an industriliazed workflow in Drug Discovery, we should screen about 10M of compounds on a bi-weekly basis.  

Example error:

```bash
503 Took too long to respond when processing endpoint <endpointID>, deployed model id: <modelID>
```
<br>
**What this means:** Vertex AI’s default settings aren’t well-suited for large-scale, high-throughput inference out of the box. If your model takes longer than 60 seconds per request, you’re going to hit a wall unless you adapt your approach.


#### Workaround

To work around this limitation, we explored a few options. The most immediate fix is to split the input into smaller batches that stay under the 60-second inference limit. Alternatively, if real-time responses aren’t critical, using Vertex AI’s batch prediction pipelines can be a better fit for large-scale inference. For longer requests, it’s also possible to reach out to Google Cloud support and request a timeout increase. Lastly, there’s always the route of optimizing the model itself—tweaking inference performance at the software level to squeeze more throughput out of each request.

