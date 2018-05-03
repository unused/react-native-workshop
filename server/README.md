
# workshop weather server

A ruby webserver providing weather data, as proxy for openweathermap or
generated fake data.

```sh
$ bundle install # install dependencies (sinatra, httparty)
$ bundle exec ruby server.rb # start server on port 4567
```

```
GET REQUEST localhost:4567/?q=London
JSON: { }

GET REQUEST localhost:4567/faker?q=London
JSON: { }
```
