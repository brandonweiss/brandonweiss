ENV["RACK_ENV"] ||= "development"

require "rubygems"
require "bundler"
Bundler.require(:default, ENV["RACK_ENV"].to_sym)

require "date"

map "/linked" do
  run lambda { |env|
    headers = {
      "Content-Type" => "text/html",
      "Location"     => "http://brandonweiss.s3.amazonaws.com/linked#{env['PATH_INFO']}"
    }

    [301, headers, []]
  }
end

map "/" do
  use Rack::Static, urls: ["/images", "/javascripts", "/stylesheets"], root: Dir.pwd

  run lambda { |env|
    headers = {
      "Content-Type"  => "text/html",
      "Cache-Control" => "public, max-age=86400"
    }

    birthday = Date.strptime('1985-02-04', '%F')
    age      = (Date.today - birthday).to_i / 365

    file = File.open("#{Dir.pwd}/index.haml", File::RDONLY)
    body = Haml::Engine.new(file.read).render(Object.new, { age: age })

    [200, headers, [body]]
  }
end
