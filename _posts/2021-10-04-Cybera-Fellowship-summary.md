---
title:  "Cybera Data Science Fellowship: Building a recommender system."
categories:
    - Blog
tags:
    - Data Science
layout: post
# permalink: /blog/cybera-fellowship/
---

In the Cybera Data Science Fellowship I worked with [HockeyAI] (Actionable Insight) to build a recommender system for student-atheletes using ML and AI. The main question to answer is: What is the best possible career path for a student-athelete interested in playing in the professional hockey leagues in NorthAmerica?

For example, imagine you are a 14 y/o and you are currently playing in the under-15 (U15) league level and you are interested in playing in the professional hockey leagues in the world. Which in this case, reacching the AHL or the NHL is a paramount in your career. Since the best possible career path depends on your age, geographical location, performance in previous seasons, among other factor, our interest is to build a recommender system that optimizes your career path to help your reach the professional hockey leagues. 

In the following sections, I offer some details of the [approach](#approach) we followed, some points to consider to build our RL model with a bit of the theory behind it, possible [next steps](#next-steps), and my [derivables](#deliverables) during the fellowship.

## Approach

<p style="text-align:center;">
<img src="/assets/images/DS_workflow.png" class='center' width=500 alt=MDP_hockey/>
</p>

In this project, we followed the [Agile] methodology in combination with a standard Data Science workflow, as shown in the figure above. Since this was a remote position, we also used [Docker] to deploy the JupyterLab containers to guarantee the same environment on the cloud. Given the timeline of our project, my work was focused on the first two steps: data cleaning and model building.

For model building, I opted for a Reinforcement Learning (RL) approach. In contrast to unsupervised learning models, RL aims to maximize the reward of the agent instead of finding similarities and differences between data points. The ability of RL models to optimize rewards is a distinguishable feature, aligned with our overall aim with HockeyAI. 

To offer a better description of my contribution to HockeyAI, in the next section, I will introduce Markov Decision Processes, the backbone of our RL model.

## Markov Decision Processes
In Markov Decision Processes (MDP) there is an agent who interacts with an environment and the environment, in return, provides rewards. Based on this reward, the agent changes its state, and therefore new decisions taken by the agent will be influenced by the environment. 

The MDP following diagram summarizes a MDP applicable to Hockey AI:

<p style="text-align:center;">
<img src="/assets/images/MDP_diagram.png" class='center' width=500 alt=MDP_hockey/>
</p>

Let's see each one of the variables involved in the MDP model with more detail:

* Agent: <br>
Agents interact with the environment by actions and receive rewards based on them. At each step $t$ the agent:

    * Receives observation $O_t$.
    * Receives (immediate) scalar reward $R_t$.
    * Executes action $A_t$.


* Environment:<br>

    * Receives action $A_t$
    * Emits observation $O_{t+1}$
    * Generates reward $R_{t+1}$

In


#### Definition
An MDP (Markov Decision Process) is defined as a triple $M=(S,A,P_0)$ with

- A countable not-empty set of states $s\in S$,

- a countable not-empty set of actions $a\in A$,

- and a transition probability kernel,

where $P_0: P_0$ assigns to each state-action pair $(S=s,A=a)\in S x A$ a probability measure over $SxR: P_0(\cdot | s,a)$ that satisifies: for $U \in SxR$ is $P_0(U|s,a)$ the probability that the next states and the reward $R$ belongs to the set $U$ given that the current state is $s$ and the action taken is $A$.

#### The Markov Property state
The Markov property state is given by:

P[𝑆𝑡+1,𝑅𝑡+1|𝑆𝑡;𝐴𝑡]=P[𝑆𝑡+1,𝑅𝑡+1 | 𝑆1,𝐴1,...,𝑆𝑡−1,𝐴𝑡−1,𝑆𝑡;𝐴𝑡] ,

where  𝐴𝑡  is the action executed by the player at time  𝑡 , and  𝑆𝑡  is the state of the player at time  𝑡 .

#### Reward function

* Transition: <br>
We define transition as the change of the agent (player) from one state to another.

* Transition Probability: <br>
The probability that the player will jump from one league to another is called transition probability. 

### Calculating transition probability
I also wrote a class called `TransitionMatrix` that allow us to calculate the probability of a player to move from one league to another. 

<p style="text-align:center;">
<img src="/assets/images/TransitionMatrix.png" class='center' width=700 />
</p>

To calculate the transition probability matrix, we first need to order the data. In this way we guarantee that the calculated probability corresponds to the transition betwwen `previous_league` and `next_league`. Since our model will consider age, league name and league level only, we can simply transform these features from the transition `DataFrame`.

### Reward function
For our reward function, we considered the following ranking for league levels:

<p style="text-align:center;">
<img src="/assets/images/reward_function.png" class='center' width=400 />
</p>

The reward function I proposed calculates an exponential reward when transitioning to an upper league, with a penalty if the league is in the bottom of the list, among the possible leagues in that level. The ranking of the leagues by level goes according to the ordered lists:

```python3
ordered_professional = ['NHL', 'AHL', 'ECHL', 'SPHL']

ordered_college = ['NCAA', 'NCAA III', 'ACHA', 'ACHA II', 
                   'ACHA III', 'OHL', 'QMJHL', 'USports']

ordered_junior = ['USHL', 'WHL', 'NAHL', 'AJHL', 'BCHL', 
                  'OJHL', 'SJHL', 'CapJHL', 'KIJHL', 'EHL', 
                  'NA3HL', 'EOJHL', 'GOJHL', 'USPHL Premier', 
                  'USPHL Elite']

ordered_u_16_18 = ['T1EHL 18U', 'AEHL U18', 'QM18AAA', 
                   'CSSHL U18', 'T1EHL 16UA', 'AEHL U16']

ordered_u_15_prep = ['USHS-Prep', 'AEHL U15',  'CSSHL U15', 
                     'ALLIANCE U15', 'BC U15', 'NOHL U15']
```

### Next steps
- To continue building the engine <br>
The availability of libraries for reinforcement learning is currently very limited. The model here presented required a brand new engine to calculate probabilities. Although here we present an initial approach, it needs further improvement, in particular to tune the reward function considering a more complex set of parameters.

- To improve transition probability calculation <br>
To improve the calculated probabilities, a next step is to calculate the transition probabilities as a function of the location of the player (feature placeOfBirth from the EliteProspects API). That would allow us to identify possible team targets that the player could focus on. After that, the probability could be further calculated by adding player statistics.

- To improve the reward function definition <br>
Another point to consider in order to improve the current model is by tuning the reward function. This can be achieved by assessing the probability of the player getting/holding a scholarship, as a function of the league name, league level, player stats, and team. Finally, a function that takes into account the cost of joining a certain league could also improve the current RL - MDP model.

<p style="text-align:center;">
<img src="/assets/images/next_steps.png" class='center' width=600 />
</p>

### Deliverables
My derivables during the Cybera Data Science Fellowship can be classified in three main groups: data processing, model building, and documentation.

* Data Processing:<br>
To process the data extracted from the [EliteProspects] API, I wrote the `CleanerBase.py` class and the `RetrieveData.py` script that automates data retrieval and optimize data cleaning by splitting, dropping, and assign keywords to obtain a simplified `DataFrame`.

* Model Building:<br>
During the development of the model, I wrote the `ComputeTransition.py` class that calculates transitions between states given a Markov stochastic decission process by determining frequencies of events to then compute probabilities of the transition between hockey leagues. This class also includes a transition matrix object that derives the stochastic matrix of a Markov chain, to help computing probabilities. I also delivered the `RewardsFunction.py` script that calculates the exponential reward function for every transition to an upper league.

* Documentation:<br>
All the development was documented in four separate jupyter notebooks, identified by the assigned [Agile] story name. The content included in the notebook include a detailed explanation and a step-by-step description of the inital Exploratory Data Analysis (EDA), model building, and the  results obtained with their respective data visualization in form of static heatmaps.


<p style="text-align:center;">
<img src="/assets/images/cybera_deliverables.png" class='center' width=700 />
</p>


### Conclusions
- The MDP model built for HockeyAI allows the calculation of transition probability matrix between two sets of leagues, not necessarily consecutive. 
- In this project, I provided a class to compute transition matrices. This, in combination with the reward functions, helps to recommend a career path for hockey players.
- MDP models are a suitable approach to reach the goals from Hockey AI. The accuracy of this model depends on the size of the dataset (here used with 250K entries) and other factors such as the features used to calculate the transition probability between hockey leagues. 

The Cybera fellowship was a very pleasant experience. It offered an opportunity to work in a Data Science team to solve real-life problems. 

[HockeyAI]: https://www.hockeyai.tech/
[EliteProspects]: https://www.eliteprospects.com/
[Docker]: https://www.docker.com/
[Agile]: https://www.atlassian.com/agile
