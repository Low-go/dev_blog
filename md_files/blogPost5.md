Horrible HackerRank Run Through

07-29-2024

I was given a HackerRank invitation for one of the companies I applied for.
Now this wasn't anything new because I had done some HackerRank problems in the past when I was originally applying for
internships, which unfortunately I had to stop applying at the time due to some things that had occured in my personal life. Funny enough you can see a gap in my github repository during that time reflecting that, but that is beyond the point. 

I am hoping to receive more programming trial runs and hopefully interviews soon enough but what caught me this time was that I have never seen questions this difficult in any leetcode problem, school assessment or previous HackerRanks in my life. Like many Software Engineers I think I am prone to have strong imposter syndrome, and lots of moments of self doubt. But the two questions just felt so absurd that any dounts about myself left and instead I was just doubting the company that offered the questions itself. They felt like high level Hackathon questions but I am just applying to entry level jobs. It took me 20 minutes to fully understand what the first question was even asking.

It was a pretty sad attempt, and although I don't fully blame myself, that self doubt those creep in, am I good enough to get a job, to acheive my dreams and be able to work in this field and live in the United States or Canada. I know I lack a lot, but at the same time I definitely try more than many around me.

In the end nothing I can do, just have to get back up and keep trying, and thats what I have been doing. So far I feel I have found some consistency with my programming life much the same way I have with my fitness lifestyle. I have been able to steadily apply to 3-5 jobs daily, exclusing weekends. And I devote soem time to work on my portfolio website or leetcode questions every day, again excluding weekends. Not to mention my other job that I actively program in also.

Speaking of that I made some progress today, its funny cause something I have learned programming is that no matter how easy you think a project is, probably multiply its difficulty by like 5 and thats how hard it'll actually be.

I was able to figure out partially some issues with my backend. For some reason my backend was communicating with OpenAI api and receiving text properly, but in the front end it was not displayed and even stranger is that the input text from the user would dissapear from the designated window screen. After messing around I found out my initiation of Django Session state through my models was causing this, how I have no idea, but when commented out it would work as intended. I suspect it has something to do with the session id not being passed around between frontend and backend properly, I believe whats possibly happening is that session state is not being maintained so each time the user input is dissapearing because it believes a new session has been initiated. I was able to understand a bit of that after I logged myself as an admin in django and checked the sessions and chatmessage objects that was created. Work ended around that time so that probably will go into tomorrows todo list. But before I fix the session stuff I might just properly configure frontend to stream since thats the biggest question mark I have, just finding code for the backend to stream was hard enough.

Lastly, the github code for today was a final project I had in my full stack class. The look of the site is ugly and the functionality is so so so meh, but I am lowkey proud of it because it has almost 70 commits, involved a lot of research and helped me understand full stack development sio much better, all the while introducing me to things like express and docker. So I feel proud not of the outcome but of the journey of learning it provided me. It was in a private repository so I just made a public one and pushed it and all of its commits. 




GitHub: https://github.com/Low-go/FullStack_SocialMedia_Website