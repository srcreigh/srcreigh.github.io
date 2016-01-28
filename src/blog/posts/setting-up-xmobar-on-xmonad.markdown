---
template: post.jade
title: Setting up xmobar on xmonad
date: 2013-06-15
prettydate: June 15, 2013
tags:
- xmonad
- xmobar
- linux
- ubuntu
- weather
- plugin
- hiding
- behind
- windows
- solution
tumblr_url: http://srcreigh.tumblr.com/post/53028332841/setting-up-xmobar-on-xmonad
---
<p>Everybody who has encountered me while I&#8217;m using a computer has probably been shown my wonderful window manager, <a href="http://xmonad.org/" target="_blank">xmonad</a>. I had been using it <em>without</em> <a href="http://projects.haskell.org/xmobar/" target="_blank">xmobar</a>, which is a neat info-bar, for a fairly significant reason: <strong>Whenever xmobar was run, it would hide behind other windows.</strong> Additionally, after I fixed that, I was annoyed that <strong>there was no easy-to-find configuration for the weather plugin.</strong> This blog post will talk about how these things were fixed.<!-- more --></p>

<h3>Hiding Behind Other Windows</h3>
<p>Ideally, my workspace would look something like this.<br/><a href="http://i.imgur.com/iJZVgDK.png" target="_blank"><img alt="xmonad workspace screenshot. hello world c program on the left and command line with the previously mentioned program being compiled and ran on the right" src="http://i.imgur.com/iJZVgDK.png" width="720"/></a></p>

<p>(two notes about this picture: first, I might have to post another blog post about taking screenshots with xmonad. second, hopefully my ideal workspace will have me doing cooler programs than &#8220;Hello, World!&#8221;)</p>
<p>Unfortunately, before I got it working, when I ran xmobar it would come up, but the other windows would be drawn over xmobar, and I would only be able to see it when I did not have any windows open.</p>
<p><strong>Solution:</strong> I came across <a href="https://bbs.archlinux.org/viewtopic.php?id=123589" target="_blank">this forum post</a>, from which I was able to gather a few things: </p>
<p>1. I needed to change some of the settings in xmonad to deal with the fact that the windows were to be drawn such that xmobar would be seen;</p>
<p>2. the program launcher for dmenu might have to be changed.</p>
<p>Now, I had been using the <a href="http://www.haskell.org/haskellwiki/Xmonad/Config_archive/Template_xmonad.hs_%280.9%29" target="_blank">sample xmonad config file</a> which was found on their website. These settings are to be saved in ~/.xmonad/xmonad.hs, and compiled and run with MOD+P. After looking at some code posted in that forum, I replaced the line in the sample config (which I can imagine just starts xmonad),</p>

<pre class="source-haskell">main <span class="sy0">=</span> xmonad defaults</pre>
<p></p>
<p>with the following:</p>

<pre class="source-haskell"><code>main = do
    xmonad defaults
        { manageHook = manageDocks &lt;+&gt; manageHook defaultConfig
        , layoutHook = avoidStruts  $  layoutHook defaultConfig
        }</code></pre>
<p></p>
<p>which, when saved and compiled, worked! Hurray!</p>
<h3>The Weather Plugin and its Cryptic Settings</h3>
<p>In the sample config which I linked to earlier, it provides some default usage of a weather plugin for xmobar. I&#8217;ll post it here; this would be saved in the file ~/.xmobarrc, and if changed, you save it and restart xmobar:</p>

<pre>Config { font = "-misc-fixed-*-*-*-*-10-*-*-*-*-*-*-*"
       , bgColor = "black"
       , fgColor = "grey"
       , position = Top
       , lowerOnStart = True
<strong>       , commands = [ Run Weather "EGPF" ["-t","&lt;station&gt;: &lt;tempC&gt;C","-L","18","-H","25","--normal","green","--high","red","--low","lightblue"] 36000</strong>
                    , Run Network "eth0" ["-L","0","-H","32","--normal","green","--high","red"] 10
                    , Run Network "eth1" ["-L","0","-H","32","--normal","green","--high","red"] 10
                    , Run Cpu ["-L","3","-H","50","--normal","green","--high","red"] 10
                    , Run Memory ["-t","Mem: &lt;usedratio&gt;%"] 10
                    , Run Swap [] 10
                    , Run Com "uname" ["-s","-r"] "" 36000
                    , Run Date "%a %b %_d %Y %H:%M:%S" "date" 10
                    ]
       , sepChar = "%"
       , alignSep = "}{"
<strong>       , template = "%cpu% | %memory% * %swap% | %eth0% - %eth1% }{ &lt;fc=#ee9a00&gt;%date%&lt;/fc&gt;| %EGPF% | %uname%"</strong>
       }</pre>
<p></p>
<p>(here I&#8217;ve bolded the significant lines)</p>
<p>Turns out the &#8220;EGPF&#8221;, which you&#8217;ll see is in both of the bolded lines, is some kind of weather code, which the script ends up using to get the weather data. I put my google skills to use and figured out that these are a kind of weather code called ICAO. Furthermore, I was able to find a <a href="http://aviationweather.gov/static/adds/metars/stations.txt" target="_blank">great list of cities and their weather codes</a>. I was then able to find &#8220;Waterloo&#8221; by searching the file, and when I replaced &#8220;EGPF&#8221; with &#8220;KALO&#8221;, and saved the file and restarted xmobar, it worked!</p>
<p><strong>Conclusion</strong></p>
<p>So, my xmonad window manager got a little sweeter last night when I figured this stuff out. I know this isn&#8217;t a be all end all guide for how to make xmonad and xmobar work together, but hopefully if you&#8217;ve had either of these problems you can extrapolate and figure it out. There is still a lot more customization to do; I&#8217;ll post about them when appropriate. I might also make a short post about screenshots in xmonad.</p>
<p>/src/reigh</p>
