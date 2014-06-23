---
title: Preparing for UW Co-op, Part I
date: 2014-06-18
template: post.jade
preamble: >
  This is the first post of several that I am writing with the help
  of my friends Charles Lin, Evy Kassirer, and Liam Horne. This series is 
  being released in order to help incoming University of Waterloo Computer 
  Science or Software Engineering students prepare for the competitive 
  co-op program at Waterloo.
---

[last year]: /blog/posts/write-a-function-coop-coop-copo-cpoo-ocop/)
[reddit thread]: http://www.reddit.com/r/uwaterloo/comments/vzd9u/what_should_i_do_to_prepare_for_my_first_year_in/)
[tabbr]: https://chrome.google.com/webstore/detail/tabbr/pnlmkddpdkjapnghefahkniilfnodcol

All throughout the year, students like me from the University of Waterloo who study Computer Science, Software Engineering, and related programs are co-oping (Americans, read: interning) all around North America. From Canadian companies like Shopify, Kik and Thalmic Labs to big-name Silicon Valley companies such as Google, Microsoft and Apple to startups going through Y-Combinator, you'll find students from the University of Waterloo. I think this is fantastic, and I am very pleased to be a part of it all. 

As you might imagine, the co-op system at Waterloo is very competitive. Although there are hundreds of positions available every term for CS/SE students, not everyone finds a co-op job in their first one or two terms. Other students do get a co-op job, they find that the job is unsatisfactory (&ldquo;I have three interviews, but they&rsquo;re only for QA positions&rdquo;). With my current experience and the experience of a handful of friends of mine, several posts (this being the first) will be written in order to help incoming UW students prepare for their co-op experience. 


## About Us
In making this post, lots of ideas were thrown around between me and a few friends of mine. First, a little about me: I am just finishing up my second year at UW studying Computer Science. I've just spent 8 months working at the ex-Google and ex-Amazon founded GIF messaging startup [Relay](http://relay.im) in Toronto as a Software Engineering Intern. I wrote a lot of code, worked closely with an incredible team, and learned a lot things about a lot of things. It was A Good Job&trade;. 

Having public discussions about good things to learn and do for UW co-op is really becoming a habit of mine; here is a [reddit thread][] I started, asking for cool things to do to prepare for UW co-op before I arrived. Right after getting my co-op job at Relay last summer (2013), I wrote [this blog post][last year] to talk about things I did that seemed to help score me that great first job. 

Liam Horne, Evy Kassirer, and Charles Lin are the friends that I talked to about this post. They're all in CS co-op at UW, and they are all doing awesome things on co-op this summer. Liam, in his second year, is Lead Developer at Piinpoint, a UW Velocity startup. They are in the in the current Y-Combinator batch. Evy is in California right now, interning at Google. She has just finished first year. (Aside: Evy could be considered a success story for this kind of discussion. She told me that [the post I made last year][last year] helped her a lot). Lastly, in his second year, my friend Charles is hacking monetization at LinkedIn in California for his second co-op term.

## Introduction
This post is about the development environment. However, before I talk about that I want to introduce a few themes that I feel I will return to again and again throughout these posts.

### 1. The Importance of Research Skills
When you&rsquo;re configuring and using software tools every day, dozens of little errors will come up. Sometimes you will be able to read them and understand what to do; `git` for example is usually pretty good at providing suggestions. Now, in the other case, having smart people around you to help you figure this stuff out can be useful. In fact, sometimes it&rsquo;s the only way to get the answer. This is especially true when you are using technologies or processes that are local to a certain company, team, or environment; sometimes the information just isn&rsquo;t readily available. However, most of the time when you&rsquo;re stuck you will want to be able to figure these out using services like Google and StackOverflow, or communities and archives like IRC channels and mailing lists.

For example: are you getting a cryptic error message? Copy the error into Google. Is your installation freezing? Describe the situation in a Google search. Is nothing relevant coming up for your best search query? Maybe you have the wrong idea about how to accomplish this task. Take it one level up and search for that instead (for example, go from &ldquo;ctrl-c doesn&rsquo;t work in Vim&rdquo; to &ldquo;how to copy text in Vim&rdquo;). Cryptic error messages are unhelpful, but there is a huge online community that usually has an answer for you. In addition to Google, some open source projects have things like IRC channels and mailing list archives that you can use to figure things out.

I&rsquo;m not only giving you this advice since you are (most likely) beginners and have a lot to learn. Most software developers, even senior software developers, are googling around all the time. They do it to set up a development environment, or to learn how to fix some random inconsistency in an API or framework, or to look up documentation for some system framework, etc. The [tabbr][] Google Chrome extension didn&rsquo;t get 2nd place at MHacks II for theoretical purposes; having tons of browser tabs open at once is commonplace when there are dozens of little configuration details here and there that you need to know.

### 2. You don&rsquo;t have to know everything, but you should try to know of everything
This series is going to be introduction after introduction to new ideas, technology, and processes that you might not have ever heard of. It is a lot stuff. However, it is good preparation for what is to come. Software Engineering and Computer Science are huge disciplines. You have to get used to the idea that you won&rsquo;t know everything; having a solid amount of breadth knowledge and understanding is a massive undertaking in itself, so don&rsquo;t think you have to take it all in at once.

That being said, it is always very useful to know what kinds of tools, libraries, processes, paradigms, etc. already exist and what they&rsquo;re good for. If you don&rsquo;, one thing you might end up doing is create a tool that already exists. Although this might be a good exercise, in general you don&rsquo;t want to waste your time remaking things. Another danger is giving up on a project because you need to do something that a) you don&rsquo;t know a tool exists to help you with and b) that is too difficult to write on your own. 

In spirit of all this, the next part of this post talks about stuff you may not know about: operating systems, scripting, text editors, and other development tools.

## Your Development Environment
### Operating System
Most of you incoming students use Windows or OSX operating systems on your computers. The University of Waterloo (and Liam and I) encourage the use of a Unix-like operating system. The reason why Unix-like operating systems are popular for developers is because a lot of really great development tools (text editors, compilers, build tools) are available on them. Unix itself is an operating system that was invented a while ago by the same two guys who created the C programming language. 

Mac OSX itself is Unix-based, but Windows is not. Linux is a free, Unix-like operating system. It is also open-source technology, so there are many branches of it. These are called distributions, or &ldquo;distros&rdquo;. Those of you that use Mac OSX don&rsquo;t really have to install Linux, as most of the tools available on Linux are also available on OSX. However, those of you that use Windows will want to have access to Linux. 

In terms of which Linux distro you should use, I have always had success with [Ubuntu](www.ubuntu.com/), and I have also always heard good things about [Linux Mint](www.linuxmint.com) and [Fedora](fedoraproject.org).
If you want to dual boot a Linux distro alongside OSX or Windows, you should Google a tutorial: &ldquo;how to dual-boot $DISTRO and $YOUR\_OS&rdquo;. If you run into any issues setting up your wireless internet adapter or your graphics card, this is a fantastic opportunity for you to develop your research skills: Google, Stack Overflow, try something, and repeat if it didn&rsquo;t work.

### Scripting, Text Editors, and other tools
Learning how to use the command line and write bash scripts is a very useful skill. Liam, helpfully, has made some [very good notes](http://lihorne.com/course-notes/) for CS246, which is a course at Waterloo that introduces bash scripting and other tools. Once you have access to a Unix-like operating system, you should try some of that stuff out.

One important tool in a software developer&rsquo;s toolbelt is the text editor. For all things other than making mobile apps, (i.e. writing code, writing HTML/markdown/LaTeX which are not code, writing this blog post, etc) I use Vim, which a text editor. Essentially, when you spend your day editing text, you might as well have tools that are more powerful than basic text editors like Notepad. You will want to be able to easily find and replace text, copy and delete lines and text very quickly, have syntax highlighting for your code, and more; this is what a text editor can give you. 

A good (and hip) starting text editor is Sublime Text. It has a strong community, a bunch of good features, and is easy to use. You might actually not need to move to a different editor; Liam uses Sublime. However, I have to also mention two (the two, essentially) advanced text editors: Vim and Emacs. You may choose one at some point in the future, but I wouldn&rsquo;t touch these tools until after you&rsquo;ve written some code and want something more powerful (but harder to learn).

Here is a quick summary of a bunch of other useful tools, and what they are used for. Keep these in mind; you will very likely encounter problems that these tools can solve. I don&rsquo;t thing you should learn all these tools right away. Just know that they exist and what they&rsquo;re used for, so you can learn then when you need to use them.

**Package Managers**: Used for installing programs and programming libraries. 
* *Ubuntu*: `apt-get`, Ubuntu Software Center. Can install things like programming language environments, Vim, window managers, hardware drivers, etc. for a Ubuntu or any other (here&rsquo;s a new word) Debian system. 
* *OSX*: [Homebrew](http://brew.sh), [MacPorts](http://macports.org). These package managers make it very easy to install programming languages, libraries, tools, and others on OSX.
* *Language specific*: Used to install libraries that are specific to a programming language.
  * Python: `pip`.
  * NodeJS: `npm`.
  * Ruby: `gem`.
  * Others: Google &ldquo;$LANG package manager&rdquo;.

**Build tools**: Used to automate the building of large projects.
* GNU Make / `make`: You will be taught how to use this tool in CS246, and you might not need it until then. It is used for automating the building of large programs via the command line and configuration files.
* [Jekyll](http://jekyllrb.com/): Jekyll is what is called a *static site generator*. It is a build tool for web pages. You can set up your pages with templates and other useful things, potentially making website development easier and more maintainable.
* [Metalsmith](http://metalsmith.io): Another static site generator. It&rsquo;s a bit of an underdog, but it&rsquo;s the static site generator that I use, and I enjoy it a lot.

**Compilers**: Used to compile high-level code to machine code.
* `gcc`: GNU Compiler Collection. Contains compilers for C, C++, Objective-C, Go, and more.

**Searching Files**: Search for things in files.
* `grep`: use regular expressions to search text.
* `find`: search for files in a directory hierarchy.
* *package managers*: sometimes have search builtin to help you easily find packages.

**Window Management**: Tools that help you efficiently use your screen space.
* `xmonad`: My only experience with tiling window managers. It tiles windows, and also can be configured quite extensively.
* Awesome Window Manager / `awm`: Cool people I know use this one too, so it migth be worth a try.

**Writing documents**: Typesetting math homework, blog posts, etc.
* [Markdown](http://daringfireball.net/projects/markdown/): A simple document format for writing html.
* [pandoc](http://johnmacfarlane.net/pandoc/): Convert documents between formats (i.e. HTML, markdown, LaTex, many others).
* [LaTeX](http://www.latex-project.org/): A typesetting system for writing beautiful PDF documents. Has great support for typesetting math, code, has several drawing libraries for diagrams, etc. I like to typeset my math assignments in LaTeX, I wrote my resume in LaTeX, Liam&rsquo;s course notes are in LaTeX (and he has [a tutorial on his blog about it](http://lihorne.com/blog/2014/02/01/typesetting-course-notes-with-latex/)).

**Version Control Systems**: Keep track of changes in your work over time.
* [Git](http://git-scm.com/): An industry standard for version control these days. I have never used another version control system, but you should read more about it at the website. This will be covered more in another post.

**Source Code Hosting**: Keep a remote backup of your source code / have an online portfolio of some code that you&rsquo;ve written. These usually work alongside a version control system, which is usually Git.
* [Github](http://github.com): A very popular source code hosting service. Has issue-tracking, pull requests (for easy collaboration), forking (allows you to make a copy of someone&rsquo;s codebase in order for you to make your own modifications to it). Serves extremely well as an online software engineering portfolio, which will be talked about more in a later post. 
* [Bitbucket](http://bitbucket.com): A source code hosting service that is a lot like Github. It generally has a subset of features that Github offers, but it gives students free private repositories which is pretty cool.
