# TeamSnap Mega Tournament!

The TeamSnap mega tournament is the biggest tournament of the year. The TeamSnap Mega Tournment repo (this repo) runs the entire tournament. Or, it would if it fully worked!

This application is a VERY old application that we're dusting off for the occasion. Additionally it's missing several key features and it's up to you to add those features and save the tournament!

## Save the tournament!

We're missing several key features for this tournament to go off without a hitch and it's up to you to help us add them! (Note: There is no actual tournament and no children or families will be disappointed if a feature doesnt make it in).

We need you to modify the code to support the following:
- Our original architect was extremely against using a Database (In memory is faster, they said!), but our data isn't saved across application restarts. We need you to persist the Teams data to the database.
- We're hoping to integrate with an API to display Team Information on the scoreboard during the tournament, but for the integration needs us to expose an endpoint that gets all the information for a specific team. They're pretty flexible with what that endpoint looks like, so feel free to do what feels best!
- Our frontend dashboard is supposed to be pulling the teams from the web server, but what we're seeing on the frontend doesn't always make sense with whats in the database. Any chance you can investigate that, too?

Our values have changed over the years, and we really like good UX and well tested code! Please feel free to add/modify tests and (if you find yourself in the frontend) the UX to however you see fit! As a reminder, this is a fully open API, so don't worry about implementing anything like OAUTH, but It wouldn't hurt to have an idea as to how you would!

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
$ docker-compose run --rm backend bundle exec rails db:reset

# Tests
$ docker-compose run --rm backend bundle exec rspec

# Start
$ docker-compose up -d

# Open frontend
$ open http://localhost:80 # You'll see yaichi page, then click any app

# Check backend API
$ curl -H 'Host: backend.localhost' http://localhost/greetings/hello
```

You can access the react app at `frontend.localhost` and the rails API at `backend.localhost`
