---
title: "Screening the Enamine Real Database at Recursion"
categories:
  - Portfolio
layout: portfolio-post
permalink: /portfolio/ml-engineering/36b-compound-virtual-screening
hide: true
public-announcement: https://ir.recursion.com/news-releases/news-release-details/recursion-bridges-protein-and-chemical-space-massive-protein
blog-post: /blog/36b-compound-screening/
---


<div class="post-header">
</div>


### Technologies
- HPC / SLURM
- PyTorch

### Summary
After acquiring Cyclica in 2023, Recursion set out to perform the largest structure-based virtual screen ever attempted: evaluating 36 billion virtual compounds from the Enamine Real database against roughly 100 protein targets. I was part of Cyclica at the time of the acquisition and later joined the team at Recursion that helped turn this vision into reality. Using the MatchMaker model, Recursion generated over 2.8 quadrillion protein–ligand predictions, ultimately producing AI-curated, synthesis-ready libraries. This project brought together deep learning, structural biology, and hyperscale compute to push the boundaries of virtual drug discovery.


### What did I do?
- Tested configurations across 63 NVIDIA DGX H100s to maximize throughput and minimize latency.
- Tuned GPU workloads on [BioHive-1], Recursion’s on-prem super computer.
- Ensured that billions of compound–target pairs could be screened efficiently.
- Celebrated in a [LinkedIn Post]! 🎉


[LinkedIn Post]: https://www.linkedin.com/posts/estefania-ojeda_breaking-biotech-artificialintelligence-activity-7094768470088695808-5ZG0?utm_source=share&utm_medium=member_desktop&rcm=ACoAABLO5xsBTFi9gR4AU0lEwkRw36K3vfswb6Y
[Biohive-1]: https://www.top500.org/system/179939/