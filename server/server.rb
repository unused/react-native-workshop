
require 'uri'
require 'date'
require 'sinatra'
require 'httparty'

unless ENV.key? 'API_KEY'
  puts 'Please provide API_KEY environment variable'
  exit 1
end

class OpenWeatherAPI
  include HTTParty
  base_uri 'api.openweathermap.org'
  format :plain

  def self.fetch(city)
    query = URI.encode_www_form({ q: city }.merge(params))
    get "/data/2.5/forecast/daily?#{query}"
  end

  def self.params
    {
      cnt: 10,
      mode: 'json',
      units: 'Metric',
      APPID: ENV['API_KEY']
    }
  end
end

get '/' do
  OpenWeatherAPI.fetch(params.fetch('q')).body
end

class FakeWeatherData

  # limited attributes generation
  def generate_for(city)
    {
      city: city,
      cnt: 10,
      list: [*1..10].map { |i| generate_entry(i) }
    }
  end

  def generate_entry(i)
    {
      dt: (Date.today - i).to_time.to_i,
      temp: { day: [*-10..40].sample },
      weather: [{ main: %w[Clear Clouds Rain].sample }]
    }
  end
end

get '/faker' do
  FakeWeatherData.new.generate_for(params.fetch('q')).to_json.to_s
end
