---
title: A RackUnit Customization Guide
date: 2014-05-24
template: post.jade
preamble: > 
    
---

Racket is my programming language of choice for completing various
[CS 241](https://www.student.cs.uwaterloo.ca/~cs241/) assignments. 
Where C and C++ are the two other options, after finishing most of the 
[assembler assignment](https://www.student.cs.uwaterloo.ca/~cs241/a3/),
I have no regrets in my choice of language. However, one thing that was
a little tricky was figuring out how to set up custom unit testing checks
with the [RackUnit](http://docs.racket-lang.org/rackunit/index.html?tag=(mod-path._.%27racket.%27)
unit testing library. This article will serve as a guide for how to define
your own `check` macros using the RackUnit API.

One of the main reasons why I chose Racket was because it has a standard
unit testing module. Unit testing is practical when writing this assembler,
and I imagine it will be necessary when working on the compilar at the end of
the course.

The [Quick Start Guide for RackUnit](http://docs.racket-lang.org/rackunit/quick-start.html?tag=(mod-path._.%27racket.%27)
is a short guide about the basics of RackUnit. For example, to write
a test-case for the associativity of addition, we might write the following
Racket code.

```racket
(require rackunit)

(test-case
  "associativity of addition"
  (check-equal? (+ (+ 1 2) 3) (+ 1 (+ 2 3)))
  (check-equal? (+ 10 (+ 11 12)) (+ (+ 10 11) 12)))
```

If the test cases pass, they won't print anything; however, if we write
a test case that fails, it will report the failure for
