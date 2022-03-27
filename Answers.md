## Technical questions

How long did you spend on the backend coding test? 
What would you add to your solution if you had more time?
What would've been your architecture choice for this kind of application without our example?
- 2 hours.
- I would have added tests (jest), CLI options to choose the start date, change 2 minor issues I encountered.
- Most likely a web interface that stores the result in a database.
---
How can you handle post midnight cases to be displayed on the same day and not the next one?
- It is handled, though, I took the decision to keep, in the timeslot, the initial date of the session, but then realized while doing the front that it would be easier to have the real date in the slot to be able to disable timeslots that already happened (haven't had time to change it).
---
How long did you spend on the frontend coding test? What were your biggest difficulties?
- A bit more than an hour
- `scrollIntoView` (not used to ref templates in Vue 3)
---
How would you track down a performance issue in production? Have you ever had to do this?
- In production, issues were usually raised through monitoring tools (I've used Grafana, Datadog and AWS trace/log/metrics), then reproduced and fixed from a dev env.
---

## Bonus questions

How are you feeling about our game and locations?
- It does look really nice, I've been planning on trying it out soon.
---
Are you a gamer? Which games do you play?
- Yep, mostly online fps (Apex, Csgo, Valorant) but also a bit of solo games.
---
Do you know livestreaming? RTMP?
- I do watch a lot of streams and I heard about RMTP but I've never used/implemented it.