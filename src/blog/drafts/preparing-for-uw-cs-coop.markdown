---
title: Preparing for UW Co-op
date: 2014-06-18
template: post.jade
---

All throughout the year, University of Waterloo students in 
Computer Science, Software Engineering, and
related programs are co-oping (Americans, read: interning) 
all around North America. 
From Canadian companies like Shopify, Kik and Thalmic Labs to big-name 
Silicon Valley companies
such as Google, Microsoft and Apple to startups going through Y-Combinator, 
you'll find
students from the University of Waterloo. The following
information is meant to give them some direction and insight.

## About Us
In making this post, lots of ideas were thrown around between me and a few 
friends of mine.
First, a little about me: I am just finishing up my second year
at UW studying Computer Science. I've spent two co-op terms at the
ex-Google and ex-Amazon founded GIF messaging startup [Relay](http://relay.im) 
in Toronto as a Software Engineering Intern.
I wrote a lot of code, worked closely with an incredible team,
and learned a lot things about a lot of things. It was A Good Job&trade;. 

Having public discussions about good things to learn and do for UW co-op is 
becoming a habit of mine; here is a 
[reddit thread](http://www.reddit.com/r/uwaterloo/comments/vzd9u/what_should_i_do_to_prepare_for_my_first_year_in/) 
I started, asking for cool things to do to prepare for UW co-op in June 2012.
Right after getting my co-op job at Relay last summer (2013), I made 
[this blog post](/blog/posts/write-a-function-coop-coop-copo-cpoo-ocop/)
to talk about things I did that seemed to help score me that great first job.
Those two pages are good examples of things that have influenced me, so
I recommend that you read them; in addition to being pretty good resources,
they might also provide a little context for this post.

Liam Horne, Evy Kassirer, and Charles Lin are the friends that I talked
to about this post.
They're all in CS co-op at UW, and they are all doing awesome
things on co-op this summer.
Liam, in his second year, is Lead Developer at Piinpoint, a 
UW Velocity startup. They are in the in the current Y-Combinator batch. 
Evy is in California right now, interning 
at Google. She has just finished first year. (Aside: Evy could be considered a 
success story for this kind of discussion. She told me that the post I made 
last year helped her a lot). Lastly, in his second year, my friend Charles is hacking 
monetization at LinkedIn in California for his second co-op term.

What follows is an ordered list of topics. Things closer 
to the end of the list may depend on things that are earlier in the list.
Also, though these will hopefully give you some direction, self-direction
is important. It&rsquo;s on you to go find your own answers when you
can't install your text editor, when the `python` command is not
found, when you need to parse a JSON string in Java, etc. 99% of the time
you can use Google to find the answers to these questions. The other 1% of
the time, you should utilize your network of smart people (peers, 
mentors, professors) or ask a new question on Stack Overflow to get the
answer.

Don&rsquo;t worry about taking notes; I will put a more concise ordered
list at the bottom.

## 1. Get Hacking (your development environment)

### Meta-hacking
I called this first topic &ldquo;Get Hacking...&rdquo; because installing
a new operating system and learning how to use new tools isn't usually a trivial
thing to do. You will get stuck at some point. I know I just said this,
but it&rsquo;s so important you&rsquo;re going to hear it again: learn how 
to use Google / StackOverflow to solve problems. Are you getting an error 
message? Copy the error into Google. Is your installation freezing? 
Describe the situation in a Google search. Is nothing relevant coming up?
Maybe you have the wrong idea about how to accomplish this task; take it one
level up and search for that instead (for example, go from &ldquo;ctrl-c
doesn&rsquo;t work in Vim&rdquo; to &ldquo;how to copy text in Vim&rdquo;).

This skill will let you accomplish a lot on your own. It will also help
keep you from asking people questions all the time. It&rsquo;s very important
(that&rsquo;s a third time I&rsquo;ve said it so you know it must be true);
so learn how to do it.

### Operating System
Most of you incoming students use Windows and Mac operating systems on 
your computers.
Waterloo (and Liam and I) encourage use of some Unix-based operating system. 
A lot of really great development tools (text editors, compilers, build tools)
are available on Unix-based operating systems.
Mac OSX is Unix-based; those of you with Windows laptops can dual-boot a 
Linux distro (or alternatively, virtualize it with VirtualBox).
I have always had success with [Ubuntu](www.ubuntu.com/), and I have 
also always heard good things about [Linux Mint](www.linuxmint.com) 
and [Fedora](fedoraproject.org).

If you want to dual boot the operating system alongside OSX or Windows,
you should Google a tutorial: &ldquo;how to dual-boot $DISTRO and
$YOUR\_OS&rdquo;. If you run into any issues setting up your wireless
internet adapter or your graphics card, this is a fantastic opportunity
for you to learn how to figure things out on your own; Google, Stack Overflow,
try something, and repeat if it didn&rsuo;t work.

Begrudgingly, I will mention that you probably don&rsquo;t *absolutely
have to* use a Unix-based operating system. Development tools exist on Windows,
and they probably don&rsquo;t all suck. I just don&rsquo;t really know how
to give much direction there.

### Scripting and other tools
If you don&rsquo;t use Windows, then learning how to bash (read: 
learn what bash commands and scripts are, and how to create them) is probably 
a good idea. Liam, helpfully, made some 
[very good notes](https://raw.githubusercontent.com/snario/course_notes/master/cs246/cs246.pdf)
for a CS course at Waterloo that introduces bash scripting and other tools.
Unfortunately for anyone who takes a co-op term before taking CS246, they
won&rsquo;t know any scripting when applying for co-op jobs that first round!
Anyway, I won&rsquo;t talk about bash at all here. Just go read Liam&rsquo;s
notes.

If you have written any code before, then you have either used an IDE or a
text editor. IDEs are usually fairly specific to what programming language you 
use,
while text editors are universal. Personally, I have only ever used IDEs
when making mobile apps; for all other text editing (writing code, writing
HTML which is not code, writing this blog post, etc) I use Vim, a text editor.
When you spend your day editing text, you might as well have tools that
give you more features than a basic text editor, such as Notepad.
You will want to be able to easily find and replace text, copy and
delete lines and text very quickly, have syntax highlighting for your code, 
and more; this is what a text editor (or IDE) give you. 

A good (and hip) text editor with low barrier to entry
is Sublime Text. It has a strong community, a bunch of good features,
and is easy to use. Two 
(the two, essentially) advanced text editors are Vim and Emacs. You will 
probably choose one at some point in the future, but I wouldn&rsquo;t touch
these complex, beautiful creatures until after you&rsquo;ve written some code; 
you most likely won&rsquo;t appreciate them enough to stick with them.

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

**Searching**: for when you need to find all the places in all your files of code 
where you
used your girlfriend&rsquo;s or boyfriend&rsquo;s name as a variable identifier
because you need to change them all because you broke up.... or something
* `grep`: use regular expressions to search text
* `find`: search for files in a directory hierarchy
* *package managers*: sometimes have search builtin

**Window Management**: A lot of people I know (including myself) like to use 
these things called
tiling window managers. Do you know how in Windows you can use WINDOWS+LEFT
or something to make a window fill the left half of your screen, or how in 
OSX you just absolutely can&rsquo;t do that at all without using a 
third party 
tool?  Tiling window managers just focus on letting you do that. They&rsquo;re 
nice to use,
but take a little while to learn. This might be another one of those
takes-some-context-to-appreciate kind of things.
* `xmonad`: My only experience with tiling window managers. It tiles windows,
and also can be configured quite extensively (although not very nicely)
* Awesome Window Manager / `awm`: Cool people I know use this one too, so it
migth be worth a try.

**Writing documents**: Need to write HTML but hate HTML, or wonder how they make 
the Euclid math contest have such pretty math symbols?
* Markdown: A simple document format for writing html
* pandoc: Convert documents between formats (markdown, HTML, every single other
document format that exists, etc.)
* LaTeX: A typesetting system for writing beautiful PDF documents. Has great
support for typesetting math, code, has several drawing libraries for diagrams, 
etc. I like to typeset my math assignments in LaTeX, I wrote my resume in LaTeX,
Liam&rsquo;s course notes are in LaTeX (and he has a tutorial on his blog about
it).












