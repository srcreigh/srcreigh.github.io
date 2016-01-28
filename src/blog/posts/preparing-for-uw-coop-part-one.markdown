---
title: Preparing for UW Co-op, Part I
date: 2014-06-18
prettydate: June 18, 2014
template: post.jade
preamble: This is the first post of several that I am writing with the help of my friends Charles Lin, Evy Kassirer, Liam Horne, and others. This series is being released in order to help incoming University of Waterloo Computer Science or Software Engineering students prepare for the competitive co-op program at Waterloo.
---

All throughout the year, students like myself from the University of Waterloo who study Computer Science, Software Engineering, and related programs are co-oping (Americans, read: interning) all around North America. From Canadian companies like Shopify, Kik and Thalmic Labs to big-name Silicon Valley companies such as Google, Microsoft and Apple to startups going through Y-Combinator, you'll find students from the University of Waterloo. I think this is fantastic, and I am very pleased to be a part of it all. 

As you might imagine, the co-op program at Waterloo is very competitive. Although there are hundreds of positions available every term for CS/SE students, not everyone gets a co-op job in their first one or two terms. Even some students that do get a co-op job find that their job is unsatisfactory (&ldquo;I have three interviews, but they&rsquo;re only for QA positions&rdquo;). It&rsquo;s really not that students aren&rsquo;t good enough, it&rsquo;s just that they&rsquo;re unprepared to show employers how awesome they are. Things like having a handful of side projects to put on your resume and being able to set up a development environment can make all the difference when you don&rsquo;t have any previous work experience.

A closely related problem to students not being prepared for co-op is that they don&rsquo;t know what to spend their summer doing. I was one of those students two years ago, when I started this [reddit thread][] to get some ideas. With my current experience and the experience of a handful of friends of mine, I&rsquo;ve decided to take some of those a step further. Several posts (this being the first) will be written in order to help incoming UW students use any free time they have this summer to prepare for their co-op experience.

So, incoming students, this is what you should expect from this post: after introducing myself and my friends, I&rsquo;m going to talk about two important things that you should keep in mind when learning stuff this summer: independent research skills, and handling the fact that there&rsquo;s always going to be too many things to learn about. Following that, I&rsquo;m going to talk to you about development environments, and give you a super brief overview of a bunch of useful tools. Last, there will be a list of things you can actually do for the next few weeks. In case you get lost in the middle of this post and stop reading, you should know that you&rsquo;re always free to ask me questions on [Facebook](http://facebook.com/srcreigh) or [Twitter](http://twitter.com/srcreigh)!

## About Us
In making this post, lots of ideas were thrown around between me and a few friends of mine. First, a little about me: I am just finishing up my second year at UW studying Computer Science. I've just spent 8 months working at the ex-Google and ex-Amazon founded GIF messaging startup [Relay](http://relay.im) in Toronto as a Software Engineering Intern. I wrote a lot of code, worked closely with an incredible team, and learned a lot things about a lot of things. It was A Good Job&trade;. 

Having public discussions about good things to learn and do for UW co-op is really becoming a habit of mine. There is the aforementioned [reddit thread][] I started, asking for cool things to do to prepare for UW co-op before I arrived, and right after getting my co-op job at Relay last summer (2013), I wrote [this blog post][last year] to talk about things I did that seemed to help score me that great first job. 

Liam Horne, Evy Kassirer, and Charles Lin are some of the friends that I spoke to about this post. They're all in CS co-op at UW, and they are all doing awesome things on co-op this summer. Liam, in his second year, is Lead Developer at Piinpoint, a UW Velocity startup. They are in the current Y-Combinator batch. Evy has just finished first year, and is in California right now, interning at Google. Evy could be considered a success story for this kind of discussion; she&rsquo;s told me that [the post I made last year][last year] helped her a lot. Lastly, in his second year, my friend Charles is hacking monetization at LinkedIn in California for his second co-op term.

In addition to those three, various friends of mine helped edit, revise and give thoughts about this post. Thanks to Sankarshan, Angelina, Jacob, Robert, Heming, and Bryan.

## Introduction
This post is about the development environment. However, before I talk about that I want to introduce a few themes that I feel I will return to again and again throughout these posts.

### 1. The Importance of Research Skills
When you&rsquo;re configuring and using software tools every day, dozens of little errors will come up. Sometimes you will be able to read them and understand what to do; `git`, for example, is usually pretty good at providing suggestions. Now, in case you can&rsquo;t understand what to do with an error message, having knowledgable people around you to help you figure these things out can be useful. In fact, sometimes it&rsquo;s the only way to get the answer. This is especially true when you are using technologies or processes that are local to a certain company, team, or environment; sometimes the information just isn&rsquo;t readily available. However, most of the time when you&rsquo;re stuck you will want to be able to figure these out using services like Google and StackOverflow, or communities and archives like IRC channels and mailing lists.

For example: are you getting a cryptic error message? Copy the error into Google. Is your installation freezing? Describe the situation in a Google search. Is nothing relevant coming up for your best search query? Maybe you have the wrong idea about how to accomplish this task. Take it one level up and search for that instead (for example, go from &ldquo;ctrl-c doesn&rsquo;t work in Vim&rdquo; to &ldquo;how to copy text in Vim&rdquo;). Cryptic error messages are unhelpful, but there is a huge online community that usually has an answer for you. In addition to Google, some open source projects have things like IRC channels and mailing list archives that you can use to figure things out.

I&rsquo;m not only giving you this advice because you are (most likely) beginners and have a lot to learn. Most software developers, even senior software developers, are googling around all the time. They do it to set up a development environment, or to learn how to fix some random inconsistency in an API or framework, or to look up documentation for some system framework, etc. The [tabbr][] Google Chrome extension didn&rsquo;t get 2nd place at the MHacks II hackathon for theoretical purposes; having tons of browser tabs open at once is commonplace when there are dozens of little configuration details here and there that you need to know.

### 2. You don&rsquo;t have to know everything, but you should try to know of everything
This series is going to be introduction after introduction to new ideas, technology, and processes that you may not have ever heard of. There are a *lot* of things. I&rsquo;d love to tell you that this will end once you learn all the things I tell you to learn, but that would be a lie. Software Engineering and Computer Science are huge disciplines. You have to get used to the idea that you won&rsquo;t know everything there is to know. Heck, I don&rsquo;t even feel like I know a lot of things and I&rsquo;ve been at this thing for at least two years now.

That being said, it is always very useful to know what kinds of tools, libraries, processes, paradigms, etc. already exist and what they&rsquo;re good for. The reason why it&rsquo;s useful to know *of* tools is because it guides your learning. Sometimes, when you encounter a problem, you&rsquo;ll recall a tool you&rsquo;ve heard of that solves it. You can then learn more about that tool in order to solve your problem in a nice way. Additionally, if you ever run out of things to learn or do, you can think about all the cool-sounding stuff you&rsquo;ve heard about, and decide what to learn about next. If you don&rsquo;t know of tools, however, you might end up creating a tool that already exists (although this might be a good exercise, in general you don&rsquo;t want to waste your time remaking things). Another danger is giving up on a project because you need a tool you don&rsquo;t know exists.

An extremely valuable resource for getting high-level overviews of new tools is [Hacker News](http://news.ycombinator.com). It is a bit like a subreddit that is very tech-oriented. You&rsquo;ll see posts about new versions of programming languages (Go, Swift, and Javascript are pretty hot these days), tutorials for things like concurrent programming or functional programming, lots of stuff about startups and startup founders, and maybe even this post! Reading Hacker News semi-regularly is a great way to stay up to date on all the things that are going on in the tech world.

In spirit of all this, the next part of this post talks about things you may not know about: Unix-like operating systems, scripting, text editors, and other development tools. The &ldquo;other development tools&rdquo; section in particular was written with this idea in mind: it is a huge list of tools that you shouldn&rsquo;t learn about right away, but just be aware of while you learn and do other things.

## Your Development Environment
### Operating System
Most of you incoming students use Windows or OS X operating systems on your computers. The University of Waterloo (and Liam and I) encourage the use of a Unix-like operating system. The reason why Unix-like operating systems are popular for developers is because a lot of really great development tools (text editors, compilers, build tools) are available on them. Unix itself is an operating system that was invented a while ago by the same two guys who created the C programming language. 

OS X itself is Unix-based, but Windows is not. Linux is a free, Unix-like operating system. It is also open-source technology, so there are many branches of it; these are called distributions, or &ldquo;distros&rdquo;. Those of you that use OS X don&rsquo;t really have to install Linux, as most of the tools available on Linux are also available on OS X. However, those of you that use Windows will want to have access to a distribution of Linux. 

In terms of which Linux distro you should use, I have always had success with [Ubuntu](www.ubuntu.com/), and I have also always heard good things about [Linux Mint](www.linuxmint.com) and [Fedora](fedoraproject.org).
If you want to dual boot a Linux distro alongside OS X or Windows, you should Google a tutorial: &ldquo;how to dual-boot $DISTRO and $YOUR\_OS&rdquo;. If you run into any issues setting up your wireless internet adapter or your graphics card, this is a fantastic opportunity for you to develop your research skills: Google something, read about it on a Stack Overflow page, try it, and repeat if it didn&rsquo;t work.

### Scripting and Text Editors
Learning how to use the command line and write bash scripts is a very useful skill. Liam, helpfully, has made some [very good notes](http://lihorne.com/course-notes/) for CS246, which is a course at Waterloo that introduces bash scripting and other tools. Once you have access to a Unix-like operating system, you should check out those notes and try some of those things out.

Another important tool in a software developer&rsquo;s toolbelt is the text editor. For most things, i.e. writing code, writing HTML / LaTeX (which are not code), writing this blog post, etc. I use Vim, which is a text editor. Essentially, when you spend your day editing text, you might as well have tools that are more powerful than basic text editors like Notepad. You will want to be able to easily find and replace text, copy and delete lines and text very quickly, have syntax highlighting for your code, and more; this is what a text editor can give you. Another great feature of powerful text editors is file management. For example, it is usually very easy to open another file alongside the one you&rsquo;re currently working with, in order to work with both of them at once.

A good (and hip) starting text editor is Sublime Text. It has a strong community, a bunch of good features, and is easy to use. You might actually not need to move to a different editor; Liam uses Sublime and likes it a lot. I also have to mention two (the only two, essentially) advanced text editors: Vim and Emacs. You may choose one at some point in the future, but I wouldn&rsquo;t touch these tools until after you&rsquo;ve written some code and want something more powerful (at the cost of being harder to learn).

### Other Tools
Here is a quick summary of a bunch of other useful tools, and what they are used for. Keep these in mind; you will very likely encounter problems that these tools can solve. You shouldn&rsquo;t learn all these tools right away. Just know that they exist and what they&rsquo;re used for, so you can learn them when you encounted a need for them.

**Build tools**: Used to automate the building of large projects.
* GNU Make / `make`: You will be taught how to use this tool in CS246, and you might not need it until then. It is used for automating the building of large programs via the command line and configuration files.
* [Jekyll](http://jekyllrb.com/): Jekyll is what is called a *static site generator*. It is a build tool for web pages. You can set up your pages with templates and other useful things, potentially making website development easier and more maintainable.
* [Metalsmith](http://metalsmith.io): Another static site generator. It&rsquo;s a bit of an underdog, but it&rsquo;s the static site generator that I use, and I enjoy it a lot.

**Compilers**: Used to compile high-level code to machine code.
* `gcc`: GNU Compiler Collection. Contains compilers for C, C++, Objective-C, Go, and more.

**Debugging**: When your code has bugs, these tools help you discover what those bugs are.
* [Valgrind](http://valgrind.org): Checks your code for memory leaks, provides a cache and branch prediction profiler, and more.
* [GDB](http://www.gnu.org/software/gdb/): Allows you to step through the code of a program, or determine at what line it has crashed at.

**Difftools**: When you&rsquo;ve made changes to some code, it is sometimes helpful to review what has changed before, for example, pushing your code up to Github.
* [`diff`](http://www.gnu.org/software/diffutils/): A command-line tool for examining the differences between two files. Great for quick and dirty diffing.
* [DiffMerge](https://sourcegear.com/diffmerge/): A visual difftool. This is what I used at Relay! It&rsquo;s really pretty and gets the job done.

**Document Writing / Typesetting**: Typesetting math homework, blog posts, etc.
* [Markdown](http://daringfireball.net/projects/markdown/): A simple document format for writing html.
* [pandoc](http://johnmacfarlane.net/pandoc/): Convert documents between formats (i.e. HTML, markdown, LaTex, many others).
* [LaTeX](http://www.latex-project.org/): A typesetting system for writing beautiful PDF documents. Has great support for typesetting math, code, has several drawing libraries for diagrams, etc. I like to typeset my math assignments in it, I wrote my resume in it, Liam&rsquo;s course notes are in it (and he has [a tutorial on his blog about it](http://lihorne.com/blog/2014/02/01/typesetting-course-notes-with-latex/)).

**Online Backup Services**: Back up your files, so if something happens to your computer then you will be able to recover them.
* [Dropbox](http://dropbox.com): This software adds a folder to your computer that is automatically synced with the cloud. You can access files on one computer and see them on the other, and also access your files with the Dropbox web application.

**Package Managers**: Used for installing programs and programming libraries. 
* *Ubuntu*: `apt-get`, Ubuntu Software Center. Can install things like programming language environments, Vim, window managers, hardware drivers, etc. for a Ubuntu or any other (here&rsquo;s a new word) Debian system. 
* *OS X*: [Homebrew](http://brew.sh), [MacPorts](http://macports.org). These package managers make it very easy to install programming languages, libraries, tools, and others on OS X.
* *Language specific*: Used to install libraries that are specific to a programming language.
  * Python: `pip`.
  * NodeJS: `npm`.
  * Ruby: `gem`.
  * Others: Google &ldquo;$LANG package manager&rdquo;.

**Project Management**: Keep track of all the tasks in a project.
* [Trello](http://trello.com): A free project management service. Allows you to organize your individual or team projects easily using little cards. This is a great product for being free; other services such as [Pivotal Tracker](http://www.pivotaltracker.com/) offer similar services, but aren&rsquo;t free.

**Searching Files**: Search for things in files.
* `grep`: use regular expressions to search text.
* `find`: search for files in a directory hierarchy.
* *package managers*: sometimes have search builtin to help you easily find packages.

**Source Code Hosting**: Keep a remote backup of your source code / have an online portfolio of some code that you&rsquo;ve written. These usually work alongside a version control system, which is usually Git.
* [Github](http://github.com): A very popular source code hosting service. Has issue-tracking, pull requests (for easy collaboration), forking (allows you to make a copy of someone&rsquo;s codebase in order for you to make your own modifications to it). Serves extremely well as an online software engineering portfolio, which will be talked about more in a later post. 
* [Bitbucket](http://bitbucket.com): A source code hosting service that is a lot like Github. It generally only has a subset of features that Github offers, but it gives students tons of free private repositories, which is pretty cool. I wrote [an enamoured blog post about this](/blog/posts/bitbucket-my-love/) when I found out about the good private repositories deal for students.

**Version Control Systems**: Keep track of changes in your work over time.
* [Git](http://git-scm.com/): An industry standard for version control these days. I have never used another version control system, but you should read more about it at the website. This will be covered more in another post.

**Window Management**: Tools that help you efficiently use your screen space.
* `xmonad`: My only experience with tiling window managers. It tiles windows, and also can be configured quite extensively.
* Awesome Window Manager / `awm`: Cool people I know use this one too, so it might be worth a try.

### An Actionable List
You&rsquo;re probably all wondering what you should actually *do*. Here&rsquo;s the first list of actionable items for you to consider (it&rsquo;s partially ordered):

* Do some research as to what Linux distro you want to use (Note: OS X users don&rsquo;t *have* to do this, but they may benefit from it, even though OS X is Unix-based).
* Read up on how to dual boot your chosen distro with Windows / OS X.
* Install your distro alongside Windows / OS X.
* Install Sublime Text II, and try it out. 
    * If you know any programming languages or scripting languages, try writing a program / script in Sublime Text II 
    * Bonus: figure out how to run your program from the command line. For C/C++/Java you will have to compile it and run the executable, for Python/Ruby you can use an interpreter. You can probably figure this out via Google. If you&rsquo;re using C/C++ then Liam&rsquo;s CS246 notes can probably help you out.
* Get acquainted with bash / using the command line (also known as the shell). [Liam's notes for CS246](http://lihorne.com/course-notes) are a pretty good reference, and [linuxcommand.org](http://linuxcommand.org/lc3_learning_the_shell.php) is another really good resource.
* (Optional) Learn how to use grep. The CS246 notes should cover this as well.
    * suggestion: `/usr/share/dict/words` is a fun place to try `grep` out; it&rsquo;s a file that just contains most English words for each line. Try to get all the words that start with `b`, or all the words that contain `evy` as a substring.
* (Optional, tricky) Set up XMonad. A good guide is [here](http://xmonad.org/tour.html).

## Conclusion
First, I just want to reiterate that we know how many things there to learn. It was a lot for us to take in and learn when we were in your shoes, too. You will get stuck a lot, just like we did. But if you persevere, you will come out knowing a lot of really cool, useful things. 

If you want to learn about something I&rsquo;ve included in these posts but can&rsquo;t find a good resource to learn from, please let me know! I&rsquo;ll admit, sometimes the things Google gives you aren&rsquo;t really approachable to beginners (for example, I tried Googling bash tutorials and didn&rsquo;t like some of the things I clicked on). You can [tweet at me](http://twitter.com/srcreigh), [message me on facebook](http://facebook.com/srcreigh), or, even better, [post on the 2014 UW Math / CS frosh group](https://www.facebook.com/groups/469583689835057/). If you hunt down Evy on facebook, I&rsquo;m certain she&rsquo;ll also help you out. Remember: don&rsquo;t be scared to say that you couldn&rsquo;t figure something out. It&rsquo;s most likely something that most of us got stuck on, too.

This was Part I. In the future, I want to cover things like online programming courses you can take, github profiles, personal projects, open source, hackathons, and more. If you want a taste of what is to come, click around on [the github repository for this website](http://github.com/srcreigh/srcreigh.github.io). If you click around, you can see [all the commits I&rsquo;ve made](https://github.com/srcreigh/srcreigh.github.io/commits/source), the [git branch that this website is served from on Github pages](https://github.com/srcreigh/srcreigh.github.io/tree/master), and some of [my other projects](http://github.com/srcreigh). Until then, good luck setting up your development environment!

[last year]: /blog/posts/write-a-function-coop-coop-copo-cpoo-ocop/
[reddit thread]: http://www.reddit.com/r/uwaterloo/comments/vzd9u/what_should_i_do_to_prepare_for_my_first_year_in/
[tabbr]: https://chrome.google.com/webstore/detail/tabbr/pnlmkddpdkjapnghefahkniilfnodcol
