---
template: post.jade
title: 8tracks, meet mpd. mpd, meet 8tracks.
date: 2013-08-17
tags:
- 8tracks
- download
- linux
- mpd
- music
tumblr_url: http://srcreigh.tumblr.com/post/58509248707/8tracks-meet-mpd-mpd-meet-8tracks
---

At school, we use <a href="http://www.musicpd.org/" target="_blank">mpd</a> to play music, and, largely, <a href="http://ncmpcpp.rybczak.net/" target="_blank">ncmpcpp</a> for our mpd client. Though we have an extensive music library, sometimes the internet is our friend when it comes to music: some songs might only be available on youtube, for example. I use the 8tracks platform a lot at home and on the go to listen to music when I don&#8217;t feel like making up a playlist. This post will be about our method of queueing youtube videos and also the 8tracks mpd client which I wrote today.<!-- more --></p>

<p>First, you might be interested in how we queue youtube videos into mpd. There&#8217;s a neat program called <a href="http://quvi.sourceforge.net/" target="_blank">quvi</a> which parses various web pages and produces a stream; installing and looking at the man page will give you an idea of it&#8217;s use. The command we use to queue youtube videos is,</p>

<blockquote>
<p>quvi &#8220;foo&#8221; &#8212;exec &#8216;mpc add %u&#8217;</p>
</blockquote>

<p>(where foo is a youtube video link)</p>

<p>It wouldn&#8217;t be an exaggeration to say that integrating 8tracks is a lot more involved. Though there might be some way of hacking the flash stream of the 8tracks website, as quvi does with youtube links, doing it the vanilla way requires several queries to the <a href="http://8tracks.com/developers/api" target="_blank">8tracks developer API</a> and a small amount of library fiddling. It&#8217;s all pretty standard: one query to get the playlist data, one query to get a play token, and two queries per song (one to get the song, another to notify 8tracks of a &#8220;performance&#8221; of the song for royalties and such).</p>

<p>I don&#8217;t think that it would be sufficiently interesting to go through technical details; it was just a matter of typing the right incantations to python to have all the libraries (xml, urllib2, os.system, etc) and the 8tracks API fit together correctly. <span>The script ended up being only about 120 lines, and the project can be found</span><span> </span><a href="https://github.com/srcreigh/mpd-8tracks" target="_blank">on my github account</a><span>. If you&#8217;d like to use it, you&#8217;ll have to &#8220;create your own client&#8221; &#8212;- <a href="http://8tracks.com/developers" target="_blank">register as a developer</a> to get an API key, plug it together with the script, and voila!</span></p>

<p>Remember to read the <a href="http://8tracks.com/terms" target="_blank">8tracks terms of use</a> and examine/edit the script as you see fit in order to <strong>be sure that your usage of the script doesn&#8217;t violate the aforementioned terms</strong>; I take no responsibility for your usage of my script.</p>

<p>Enjoy!</p>
