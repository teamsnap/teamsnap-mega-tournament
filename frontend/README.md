# TeamSnap Mega Tournament!

The TeamSnap mega tournament is the biggest tournament of the year. The TeamSnap Mega Tournment repo (this repo) runs the entire tournament. Or, it would if it fully worked!

This application is a VERY old application that we're dusting off for the occasion. Additionally it's missing several key features and it's up to you to add those features and save the tournament!

## Save the tournament!

We're missing several key features for this tournament to go off without a hitch and it's up to you to help us add them! (Note: There is no actual tournament and no children or families will be disappointed if a feature doesnt make it in).

We need you to modify the code to support the following:
- The Tournament Organizer needs all new teams who sign up to have a team captain, so we need to capture their first and last name on sign up.
- When we look at the team list, we need to see the team captain's first and last name.
- Changes don't have to look pretty, but they shouldn't be worse than anything else on the page.
- Our teams are supposed to be pulling data from our API, but anytime we submit our form, we dont see our data in the database. If you have time, can you investigate that, too?

Our values have changed over the years, and we really like good UX and well tested code! Please feel free to add/modify tests and the UX to however you see fit!

The Tournament starts in 2 hours and its far more important for you to come out and watch the games than it is to fix all these issues, so don't spend more than 2 hours on this :) It's okay if you don't finish everything, we can tackle anything that's left before the next tournament.

Oh! We'd love to use this code for next year's tournament too, so feel free to clean up anything that seems like poor coding decisions.

## About the Exercise

At TeamSnap, one of our core values is fun so try to have fun with the project too. We know the code can be a bit frustrating, but try to have enjoy the fact that this app looks straight out of the 90's and know that we strive for much better code in our actual production applications at TeamSnap.

## Your Arsenal

**Here are the tools that you have available to you in this project**

- [Ruby](https://www.ruby-lang.org/en/) 2.7.1
- [Rails](https://rubyonrails.org/) 6.0.3
- [React.js](https://reactjs.org/) 16.13.1
- [Redux](https://redux.js.org/) 4.0.5
- [TypeScript](https://www.typescriptlang.org/) 4.0.3
- [Docker](https://docs.docker.com/)
- [PostgreSQL](https://www.postgresql.org/) 11

## Usage

```shell
$ git clone https://github.com/teamsnap/teamsnap-mega-tournament.git && cd teamsnap-mega-tournament

# Setup
$ docker-compose run frontend yarn
$ docker-compose run backend bundle exec rake db:create

# Start
$ docker-compose up -d

# Open frontend
$ open http://localhost:80 # You'll see yaichi page, then click any app

# Check backend API
$ curl -H 'Host: backend.localhost' http://localhost/greetings/hello
```

You can access the react app at `frontend.localhost` and the rails API at `backend.localhost`
