---
title: Publications and others
permalink: /portfolio/publications-and-others/
layout: page
hide: true
icon: fa-book-open
category: portfolio-item
---


# Publications

- _**Barreto-Ojeda E.**_, (2021). MDAnalysis MembraneCurvature Tool (Version 0.0.2) [Computer software].

- D. P. Tieleman, B. I. Sejdiu, E. A. Cino, P. Smith, _**E. Barreto-Ojeda**_, H. M. Khan, V. Corradi. (2021) Insights into lipid-protein interactions from computer simulations. Biophys. Rev. https://doi.org/10.1007/s12551-021-00876-9

- **Barreto-Ojeda, E.**_, Corradi, V., Gu, R.-X., Tieleman, D.P. Coarse-grained molecular dynamics simulations reveal lipid access pathways in P-glycoprotein. J. Gen. Physiol. 150, 417–429 (2018). [doi.org/10.1085/jgp.201711907](https://rupress.org/jgp/article/150/3/417/43698/Coarse-grained-molecular-dynamics-simulations)


# Conferences
- **Chair and speaker at the 64th Annual Meeting of The Biophysical Society**. <br>
Barreto-Ojeda E., Bassereau P., Levy D., Tieleman D.P.
Interplay Between Membrane Curvature and Conformational States in ABC Transporters. Biophys. J., 118 (3):25a-26a (2020). 


# Talks 


As invited speaker: <br>
- When shape matters. Bogota, Colombia (2020)
Electrodynamics I. Universidad Nacional de Colombia. Physics Department.
- Lipids Pathways and Lipid-protein interactions in P-glycoprotein. Paris, France (2017).
ABC transporters meeting at the Institut de Biologie Physico-Chimie (IBPC). 
University Paris-Diderot, Paris 7.
- Lipid access pathways in P-glycoprotein determined by coarse-grained molecular dynamics simulations. Lisbon, Portugal (2018). Lisbon Biophysics Meeting at Insituto Tecnico Superior.
Universidade de Lisboa.



# Awards
- Student Research Achievement Award. **The Biophysical Society**. United States (2018). <br>
- Globalink Research Award. **MITACS**. Canada/France (2018).
- Dr. Jeanette Nicholls Graduate Scholarship. The University of Calgary. Canada (2017).
- Instituto Balseiro Scholarship. Comision Nacional de Energia Atomica. Argentina (2014).



<div>
{% for _page in site.pages %}
    {% if _page.category == 'portfolio-item' %}  
        <a href="{{site.baseurl}}/portfolio/{{_page.title|slugify}}/">{{_page.title}}
        </a>
        <br>
    {% endif %}
{% endfor %}
</div>

