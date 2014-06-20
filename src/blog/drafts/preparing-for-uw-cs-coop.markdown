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

All throughout the year, students like me from the University of Waterloo 
who study Computer Science, Software Engineering, and
related programs are co-oping (Americans, read: interning) 
all around North America. 
From Canadian companies like Shopify, Kik and Thalmic Labs to big-name 
Silicon Valley companies
such as Google, Microsoft and Apple to startups going through Y-Combinator, 
you'll find students from the University of Waterloo. I think this is
fantastic, and I am very pleased to be a part of it all.

As you might imagine, the co-op system at Waterloo is very competitive.
Although there are hundreds of positions available every term for CS/SE
students, not everyone finds a co-op job in their first one or
two terms. Other students do get a co-op job, but a job they find is
unsatisfactory
(&ldquo;I have three interviews, but they&rsquo;re for only QA positions&rdquo;). 
With my current experience and the experience of a handful of friends of mine,
several posts (this being the first) will be written in order to help incoming 
UW students prepare for their co-op experience.

After I introduce myself and my friends, I will talk about a few themes that
I feel are really important: microresearch skills, and not having to know
everything. Last, I&rswuo;ll present some thoughts we have about development
environments: Unix-based operating systems, text editors, and other tools.

## About Us
In making this post, lots of ideas were thrown around between me and a few 
friends of mine.
First, a little about me: I am just finishing up my second year
at UW studying Computer Science. I've just spent 8 months working
at the ex-Google and ex-Amazon founded GIF messaging startup 
[Relay](http://relay.im) in Toronto as a Software Engineering Intern.
I wrote a lot of code, worked closely with an incredible team,
and learned a lot things about a lot of things. It was A Good Job&trade;. 

Having public discussions about good things to learn and do for UW co-op is 
really becoming a habit of mine; here is a [reddit thread][]
I started, asking for cool things to do to prepare for UW co-op before I 
arrived.  Right after getting my co-op job at Relay last summer (2013), I 
wrote [this blog post][last year] to talk about things I did that seemed 
to help score me that great first job.

Liam Horne, Evy Kassirer, and Charles Lin are the friends that I talked
to about this post. They're all in CS co-op at UW, and they are all doing awesome
things on co-op this summer. Liam, in his second year, is Lead Developer 
at Piinpoint, a UW Velocity startup. They are in the in the current 
Y-Combinator batch. Evy is in California right now, interning 
at Google. She has just finished first year. (Aside: Evy could be considered a 
success story for this kind of discussion. She told me that 
[the post I made last year][last year] helped her a lot). Lastly, in his 
second year, my friend Charles is hacking monetization at LinkedIn in California 
for his second co-op term.

## Introduction
This post is about the development environment. But before I talk about that,
I want to introduce a few themes that I feel I will return to again and again 
throughout these posts.

### 1. The Importance of Microresearch Skills
And by this, I mean being 
able to use Google, StackExchange, mailing lists, and more to find
solutions to problems. This is absolutely crucial.

For example: are you getting an error message? Copy the error into Google. 
Is your installation freezing? 
Describe the situation in a Google search. Is nothing relevant coming up
for your best search query?
Maybe you have the wrong idea about how to accomplish this task. Take it one
level up and search for that instead (for example, go from &ldquo;ctrl-c
doesn&rsquo;t work in Vim&rdquo; to &ldquo;how to copy text in Vim&rdquo;).
Additionally, if you&rsquo;re working with open-source technology, they 
will very likely have an IRC channel or a mailing list, which can 
also be leveraged.

Having smart people around you to help you figure stuff out is useful.
In fact, sometimes it&rsquo;s the only way to get the answer (this is
especially true when you are using technologies or processes that are
local to a certain company, team, or environment; sometimes the 
information just isn&rsquo;t readily available).
However, most of the time you will want to be able to figure these out on
your own. Don&rsquo;t let yourself leave this skill underdeveloped by
asking for help all the time.

I&rsquo;m not only giving you this advice since you are most likely
beginners and have a lot to learn. Most software developers, even
senior software developers, are googling around all the time
to set up a development environment, to learn how to fix some random 
inconsistency in an API or framework, to look up documentation for some 
system framework, or to do other things. The [tabbr][] 
Google Chrome extension didn&rsquo;t get 2nd place at MHacks II for 
theoretical purposes.

### 2. You don&rsquo;t have to know everything 
This series is going
to be introduction after introduction to new ideas, technology, and 
processes that you might not have ever heard of. An ambitious reader
might think &ldquo;Hey, it isn&rsquo;t really *that* much, I bet I can
seriously do all this stuff this summer.&rdquo; 

## Your Development Environment

### Operating System
Most of you incoming students use Windows or Mac operating systems on 
your computers.
The University of Waterloo (and Liam and I) encourage the use of a
Unix-based operating system. 
A lot of really great development tools (text editors, compilers, build tools)
are available on Unix-based operating systems.
Mac OSX itself is Unix-based, and those of you with Windows laptops can 
dual-boot a Linux distro (or alternatively, virtualize one with VirtualBox).
I have always had success with [Ubuntu](www.ubuntu.com/), and I have
also always heard good things about [Linux Mint](www.linuxmint.com)
and [Fedora](fedoraproject.org).

If you want to dual boot the operating system alongside OSX or Windows,
you should Google a tutorial: &ldquo;how to dual-boot $DISTRO and
$YOUR\_OS&rdquo;. If you run into any issues setting up your wireless
internet adapter or your graphics card, this is a fantastic opportunity
for you to learn how to figure things out on your own; Google, Stack Overflow,
try something, and repeat if it didn&rsquo;t work.

Begrudgingly, I will mention that you probably don&rsquo;t absolutely
*have* to use a Unix-based operating system. Development tools exist on Windows,
and they probably don&rsquo;t all suck. I just don&rsquo;t really know how
give any direction relating to development on Windows, as most of my 
experience is on Unix-based operating systems.

### Scripting, Text Editors, and other tools
If you don&rsquo;t use Windows, then learning how to bash (read: 
learn what bash commands and scripts are, and how to create them) is probably 
a good idea. Liam, helpfully, made some 
[very good notes](https://raw.githubusercontent.com/snario/course_notes/master/cs246/cs246.pdf)
for a CS course at Waterloo that introduces bash scripting and other tools.
Unfortunately for anyone who takes a co-op term before taking CS246, they
won&rsquo;t know any scripting when applying for co-op jobs that first round!
Anyway, I won&rsquo;t talk about bash at all here. Just go read Liam&rsquo;s
notes.

First, text editors.
If you have written any code before, then you have either used an IDE or a
text editor (or a REPL, I guess). IDEs are usually fairly specific to what 
programming language you use,
while text editors are universal. For all things other than
making mobile apps, (i.e. writing code, writing
HTML/markdown/LaTeX which are not code, writing this blog post, etc) 
I use Vim, a text editor.
Essentially, when you spend your day editing text, you might as well have 
tools that
give you more features than a basic text editor (an example of a basic text
editor being Notepad).
You will want to be able to easily find and replace text, copy and
delete lines and text very quickly, have syntax highlighting for your code, 
and more; this is what a text editor (or IDE) can give you. 

A good (and hip) starting text editor is Sublime Text. 
It has a strong community, a bunch of good features,
and is easy to use. You might actually not need to move to a different
editor; Liam uses Sublime. However, I have to also mention two 
(the two, essentially) advanced text editors: Vim and Emacs. You
may choose one at some point in the future, but I wouldn&rsquo;t touch
these tools until after you&rsquo;ve written some code
and want something more powerful (but harder to learn).

Here is a quick summary of all the other tools
that come to my mind and what they&rsquo;re used for. So, if you encounter
a problem, you can think &ldquo;oowh, shane mentioned something about how to
solve $PROBLEM using $TOOL, I should learn how to $TOOL&rdquo;. I don&rsquo;t
thing you should learn all these tools right away; just know that they exist
and what they&rsquo;re used for, so you can learn then when you need to use 
them.

**Package Managers**: Used for installing programs and programming libraries.
* *Ubuntu/Linux Mint*: `apt-get`, Ubuntu Software Center. Can install things
like programming language environments, Vim, window managers, hardware
drivers, etc. for a Ubuntu or any other (here&rsquo;s a new word) Debian system.
* *OSX*: Homebrew, MacPorts. I believe these package managers are incompatible
with each other, but they make it very easy to install programming languages, 
libraries, tools, and other programs.
* *Language specific*: Used to install libraries that are specific to a 
programming language.
    * Python: `pip`
    * Node.JS: `npm`
    * Ruby: `gem`
    * Others: Google &ldquo;$LANG package manager&rdquo;.

**Build tools**: Used to automate the building of large projects.
* GNU Make / `make`: You will be taught how to use this tool in CS246, and
you might not need it until then. It is used for automating the building
of large programs via the command line and configuration files.
* IDEs: IDEs (as the name suggestions, &ldquo;Integrated Development 
Environments&ldquo;) usually include build tools that are hidden from you.
They&rsquo;re what run when you click &ldquo;Run&rdquo;.
* [Jekyll](http://jekyllrb.com/): Jekyll is what is called a *static site 
generator*. It is a build
tool for web pages. You can set up your pages with templates and other
useful things, potentially making website development easier and more 
maintainable.
* [Metalsmith](http://metalsmith.io): Another static site generator. 
It&rsquo;s a bit of an underdog, but it&rsquo;s the static site generator 
that I use, and I enjoy it a lot.

**Searching Files**
* `grep`: use regular expressions to search text
* `find`: search for files in a directory hierarchy
* *package managers*: sometimes have search builtin

**Window Management**: Arrange all the windows on your display so you can see
all of them, virtual desktops, etc.
* `xmonad`: My only experience with tiling window managers. It tiles windows,
and also can be configured quite extensively (although not very nicely)
* Awesome Window Manager / `awm`: Cool people I know use this one too, so it
migth be worth a try.

**Writing documents**
* Markdown: A simple document format for writing html
* pandoc: Convert documents between formats (markdown, HTML, every single other
document format that exists, etc.)
* LaTeX: A typesetting system for writing beautiful PDF documents. Has great
support for typesetting math, code, has several drawing libraries for diagrams, 
etc. I like to typeset my math assignments in LaTeX, I wrote my resume in LaTeX,
Liam&rsquo;s course notes are in LaTeX (and he has a tutorial on his blog about
it).

