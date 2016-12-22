require 'sinatra/base'
require 'json'
require 'pry'

class TempApp < Sinatra::Base

  set :public_folder, proc { File.join(root) }
  # use Rack::Session::Cookie

  enable :sessions
  set :session_secret, 'my secret'

  get '/' do
    'Hello TempApp!'
  end

  post "/temperature" do
    headers 'Access-Control-Allow-Origin' => '*'
    session[:temp] = params[:temperature];
    session[:test] = "hi"
  end

  get "/temperature.json" do
    headers 'Access-Control-Allow-Origin' => '*'
    temperature = session[:temp] || 20.to_s
    content_type :json
    { temperature: temperature }.to_json
  end



  # start the server if ruby file executed directly
  run! if app_file == $0
end
