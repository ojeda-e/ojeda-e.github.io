---
title:  "Automating tests with tox"
categories:
    - Blog
tags:
    - Best Practices
    - Python
layout: page
permalink: /blog/automating-tests-with-tox/
---

A glimpse into `tox`, a versatile open-source tool that can be used to automate
tests while minimizing mismatch between local and CI runs.

I came across [tox] after starting my recent position at Cyclica as a
computational scientist. As part of our software development practices, we use
`tox` to automate Python tests in our Machine Learning (ML) pipelines. I was
surprised with how easy it is to get started with `tox`, and with the diverse
features `tox` offers. In this blog post, I would like to provide an overview
of this neat tool: [why we should use it](#why-tox), [how it
works](#what-is-tox-and-how-does-it-work), how easy it is to [install],
[configure](#configuration) and [run], while highlighting some of the neatest [features] I have
identified so far. 

 Although `tox` is very versitile and it can be used for
[multiple purposes](https://github.com/tox-dev/tox#tox-can-be-used-for-), I will
focus on `tox` as a too to automate tests.

## Why `tox`?
As a software developer, for me running tests was always a task
exclusively performed by [pytest], where tests are run locally and after they
successfully pass, changes are pushed to the remote repository where the
Continuous Integration (CI) environment runs the tests again. Several times, despite my
tests passing locally, they were failing in the CI. For example,

* I have a `localenv` with a specific version of Python where my test pass
locally. Assume that I have Python 3.8. The CI runs a matrix of Python versions,
and the CI fails because my code is not compatible with Python 3.10. 

* We are usually limited to one Operating System (OS) on our workstation or we
work in the absence of virtual machines. However, the CI runs tests across different OS
and fails in those we can’t test locally. In my case, I have a laptop with
MacOS and a desktop with Linux. More often that I would have liked, CI was
failing when running tests on Windows. 

* There is an environment variable that needs to be set and we
don’t know in advance.  

These discrepancies when running tests, locally vs. CI, are very common in
production code in Python, and it is here where the `tox` project offers a
solution: `tox` runs tests in a clean environment, offering reliable and
consistent results between local results and those from the CI.

## What is `tox` and how does it work? 

Tox is an open-source project that provides a convenient way to run commands in
isolated environments.

As mentioned before, my focus here is on `tox` as a tool to create isolated
environments to run tests, then we can get the same behaviour both locally and
in the CI.

### Under the hood
What tox does in the background can be roughly split into four main steps:

1. Creates virtual environment.
2. Installs dependencies in virtual environment. 
3. Runs commands.
4. Returns output (for each environment created).

<img src="/assets/images/tox-diagram.png" alt="tox-steps"
width="900"/>

`tox` will run steps 1 to 3 according to what the user provides in a config
file (See [configuration] for more details). This means, `tox`
is easily customizable and the configuration is human readable. 

## Getting Started with `tox`

### Installation

`tox` is available via `pip`, so installation is very straightforward. Running
`pip install tox` will take care of everything. One big plus of `tox` is its few
[dependencies], which makes it a light package and fast to install. 

### Configuration

There are three approaches to configure `tox`. The first one is by adding a
`tox.ini` file in the root of the project. The second one is by adding a
`tool.tox` section in the `pyproject.toml` configuration file. The third one is
by adding a `setup.cfg` file. The first one is my preferred way because it is
nicely condensed in a single file and the design of `tox` makes this config file
very easy to read.

A minimal example that illustrates how to configure a `tox.ini` file to create
environments using Python 3.6 and Python 3.7 with `pytest` as a dependency is
shown below:

{% highlight ini %}
[tox]
envlist = py36,py37                # python versions

[testenv]
deps = pytest                      # test suite
commands = pytest my_tests.py
{% endhighlight %}

Configuration of tox in an [INI] file structure is makes it very easy. Each
executable block can be identified by square brackets. The first part is what we
called global settings, which are contained in the first section called `[tox]`.
In the example provided above, there is only one item in the global settings,
`envlist`, which tells tox which environments to create when we run `tox` from
the command line (Step 1). In this case we run Python 3.6 and Python 3.7. The
second section, `[testenv]`, tells `tox` what dependencies to install in our
environments. This is specified in the `deps` variable. Here we are telling tox
to install [pytest] (Step 2). Then, with the environments we created and the
dependencies installed, we then tell `tox` to run `pytest my_tests.py` (Step 3).

For more options to configure a `tox.ini` file, check out some [examples]
available in the official documentation.

### Running

To run a `tox.ini` file from the root of the working directory, we simply run
`tox` from the terminal. This means that `tox` will create the environments,
install the dependencies, and run the commands provided in the configuration.
Once tox finishes, it will provide an output (Step 4) that looks like this:

```
$ tox
✔ OK py36 in 9.533 seconds
✔ OK py37 in 9.453 seconds
___________________________ summary ___________________________________
  py36: commands succeeded
  py37: commands succeeded
  congratulations :)
```

Although most of the times it is enough with `tox`, the CLI offers dozen of
customizable options. Here a few examples of the ones I find useful in my
day-to-day work:

- Run against specified environments (For example, Python 3.6)
```
tox -e py36
```

- Force to create virtual environments (For example, an environment with Python 3.6).
```
tox --recreate py36
```

- Force to use an alternative URL address to download packages.
```
tox -i https://pypi.my-alternative-index.org
```

- Create and run multiple virtual environments in parallel (For
  example, to run py36 and py37 in parallel).   
```
tox --parallel --recreate py36 py37
```

- Show the output of the parallel environments mentioned above:
```
tox --parallel-live --recreate py36 py37
```

The `tox` command-line interface (CLI) is very easy to use and versatile, which makes tox easy
to use on your local workspace. You can check all the CLI options with `tox -h`.


### Features

There are several attributes that make tox an interesting package to automate
tests.

* Good user experience: <br>
As mentioned before, tox was design to be very easy to
install, configure and use. The syntax is clear, not redundant and intuitive.

* Compatibility:<br>
`tox` allows to automate test runs across different OS,
Unix-based and Windows, and different versions of Python, from 2.7 (!) to 3.10.
Tox is also very useful to tests against different dependency versions.

* Condensed reports: <br>
After each run, `tox` offers a summary output with clear messages. Errors are easy to 
spot and if the runs is successful, it will print a `congratulations :)` message.

* CI Integration: <br>
The [official tox documentation](https://tox.wiki/en/latest/index.html) offers
dozens of plugins to integrate with CI, including Travis, Ansible, GitHub actions,
among many others. The documentation is easy to navigate and it is clear. Give it a try! 

If you are developing a package tool, consider implementing [tox] for your next release!

[tox]: https://tox.wiki/en/latest/
[Cyclica]: https://cyclicarx.com/
[overview]: #what-is-tox-and-how-does-it-work
[dependencies]: https://github.com/tox-dev/tox/blob/7a0a2d0af68b1979caf042fbca68b5289845f335/setup.cfg#L44
[install]: #installation
[run]: #running
[configuration]: #configuration
[features]: #features
[pytest]: https://docs.pytest.org/en/stable/
[INI]: https://docs.python.org/3/library/configparser.html#supported-ini-file-structure
[examples]: https://tox.wiki/en/latest/examples.html