---
title:  "Cybera Data Science Fellowship: Building a Markov Decission Process from scratch"
categories:
    - Blog
tags:
    - Data Science
layout: post
permalink: /blog/cybera-fellowship/
---


Markov Decision Processes (MDP) are a type of Reinforcement Learning (RL) problem, where there is an agent (_Ai_) who interacts with an environment. The environment, in return, provides rewards. Based on this reward, the agent changes its state, and therefore new decisions taken by the agent will be influenced by them. The following diagram summarizes a MDP applicable to Hockey AI:

<p style="text-align:center;">
<img src="/assets/images/MDP_diagram.png" class='center' width=400 alt=MDP_hockey/>
</p>


Let's see each one of the variables involved in the MDP model with more detail:
- Agent: (Player)
Agents interact with the environment by actions (𝐴A) and receive rewards based on them. At each step 𝑡 the agent:
- Receives observation 𝑂𝑡.
- Receives (immediate) scalar reward 𝑅𝑡.
- Executes action 𝐴𝑡.
- Environment: (League)
- Receives action 𝐴𝑡.
- Emits observation 𝑂𝑡+1Ot+1
- Generates reward 𝑅𝑡+1Rt+1
- Reward: (Stipend, Scholarship, Salary)

### Definition
An MDP (Markov Decision Process) is defined as a triple 𝑀=(𝑆,𝐴,𝑃) with:
- A countable not-empty set of states 𝑠∈𝑆.
- a countable not-empty set of actions 𝑎∈𝐴.
- and a transition probability kernel.


### Calculating transition probability
I also wrote a class called `TransitionMatrix` that allow us to calculate the probability of a player to move from one league to another. 

<p style="text-align:center;">
<img src="/assets/images/transition_matrix.png" class='center' width=600 />
</p>

To calculate the transition probability matrix, we first need to order our the data. In this way we guarantee that the calculated probability corresponds to the transition betwwen `previous_league` and `next_league`. Since our model will consider age, league name and league level only, we can simply transform these features from the transition `DataFrame`.

### Reward function
For our reward function, we considered the following ranking for league levels:

<p style="text-align:center;">
<img src="/assets/images/reward_function.png" class='center' width=400 />
</p>


The reward function I proposed calculates an exponential reward when transitioning to an upper league, with a penalty if the league is in the bottom of the list, among the possible leagues in that level. The ranking of the leagues by level goes according to the ordered lists:


## Deliverables
My derivables during the Cybera Data Science fellowship included:

* Data Processing:

* Model Building:

* Documentation:

<p style="text-align:center;">
<img src="/assets/images/cybera_deliverables.png" class='center' width=700 />
</p>


 

### Next steps
- To continue building the engine <br>
The availability of libraries for reinforcement learning is currently very limited. The model here presented required a brand new engine to calculate probabilities. Although here we present an initial approach, it needs further improvement, in particular, to tune the reward function considering a more complex set of parameters.

- To improve transition probability calculation <br>
To improve the calculated probabilities, a next step is to calculate the transition probabilities as a function of the location of the player (feature placeOfBirth from the EliteProspects API). That would allow us to identify possible team targets that the player could focus on. After that, the probability could be further calculated by adding player statistics.

- To improve the reward function definition <br>
Another point to consider in order to improve the current model is by tuning the reward function. This can be achieved by assessing the probability of the player getting/holding a scholarship, as a function of the league name, league level, player stats, and team. Finally, a function that takes into account the cost of joining a certain league could also improve the current RL - MDP model.

### Conclusion

