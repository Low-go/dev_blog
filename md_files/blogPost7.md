Successfully employed Session Managment

08-15-2024

Was finally able to add session management to the JFS_Database Navigator. Till now I still do not know why I was getting the error I was getting with Django’s session management, but I ended up giving up on it and decided to do my own way of manually adding a session. Here is how the logic works.

The front end when sending the user input to the backend also sends a “clientid”, it can be empty (and will be the first time), in my backend if it receives an empty client id it will create one using uuid, this session will have messages appended to it and be thrown into firebase. Now if the client id does exist (we check firebase for it) we grab that existing history from firebase as contect and later append to it. Of course when a response is sent back the client id is also sent with it.

This methodology ensures multiple requests at the same time while also keeping each user history, session, and conversation context separate. Of course I tested this with like 4 different tabs open, both private and normal, and the server was able to handle it but I want to see later if it manages a larger scope.

So user sessions are distinct per tab since they are saved in SessionStorage on the client side, and they remove the clientid on browser refresh. Lastly after that was implemented I was able to correctly stream from backend to frontend using Django.https streaming response. Admitedly I had to use Ai more for this one but like always its not like they are intelligent enough to make a correct output immediately. I had to look at their answers, see how I could integrate it with the current system, test myself why certain things would not work.

So backend is almost complete, just need to work on CSFR tokens but while I do that I will help setup the environment for a coworker so they can tackle the frontend visuals since they were so excited about that. I’ma post the github link but its probably private for now.


GitHub: https://github.com/Low-go/JFS_dataBaseNavigator