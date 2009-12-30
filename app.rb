require 'rubygems'
require 'sinatra'

get '/' do
  @stylesheet = @env['HTTP_USER_AGENT'].match(/iPhone/) ? 'iphone.css' : 'master.css'

  birthday = Date.strptime("1985-02-04")
  @age = (Date.today - birthday).to_i / 365
  	
  erb :layout
end

get '/linked/*' do
  redirect "http://brandonweiss.s3.amazonaws.com/linked/#{params[:splat]}", 301
end