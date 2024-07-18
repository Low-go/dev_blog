Breadth First Search

07-15-2024

Today was pretty productive, I still wish I did more. 
Lets see what I learned

I was studying the thousand island problem on leetcode, part of the blind 75, and apparently
the way to solve it is to do a breadth first search. So I had to brush up on
my knowledge of it. Basically think of a node tree, and it relies on a queue to make this work,

It grabs the first letter, queue's it, then pops it and gets the two letters underneath. Now itll go to the first letter it got
and pop it and grab its children, but before it does anything with that letters children it will need to hit the
next letter that was a child of the first, because that one was queued first.

First one in, first one out.

This algorith has an emphasis on a horizontal reach first over a vertical one.

I was learning this in an attempt to get better at leetcode, since I have been applying for jobs and need the skills for technical interviews.
But sometimes it feels that no matter how much I learn I don't feel like I know enough or as much as I would like.

I also made some progress on my portfolio website. I decided to discard my initial navbar and instead use the navbar and first section
from a previous website I had made for a class following a tutorial. I really liked it so just trying to translate it onto the exiting code
structure I have on the site

GitHub: https://github.com/Low-go/portfolio