# get '/', :agent => /iPhone/ do
#   erb :iphone
# end

class App < Sinatra::Base
  get '/' do
    birthday = Date.strptime('1985-02-04', '%F')
    @age = (Date.today - birthday).to_i / 365

    haml :index
  end

  get '/linked/*' do
    redirect "http://brandonweiss.s3.amazonaws.com/linked/#{params[:splat]}", 301
  end
end
