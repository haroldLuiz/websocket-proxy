# websocket-proxy
Messy, not optimized, transparent websocket proxy on node.js to migrate from php ajax

Got a project on my hands that was using a loop with ajax do update some info every 1 second and was consuming too much resource/bandwith, so i decided to use use a websocket.

Decided to use socket.io as the websocket server, and made it translate the websocket in internal (127.0.0.1) http requests, resulting in:
* No changes for the application backend
* Small changes on the application frontend javascript (main.js)
* apache proxy to send websockets requests on port 443 to internal port 3000 on the socket.io


Considerations:
* I am almost sure this consumes more processing than the ajax alternative. (Very small chance that it saves processing power since there is less traffic to be SSL encrypted? maybe?).
* It consumes less "internet" bandwith, specially if you are properly setting/using all security http headers.
* Till now this is working perfectly on my server/project, i don't check github often, and accept this code as is, feel free to use any of this code what was created by me however you feel like.
* I am putting here on github because even if it is not optimized or messy, if this was on github before i created this, it would have saved me a lot of time, and maybe this incentivizes someone to actually create something equal or similar but optimized and clean?
