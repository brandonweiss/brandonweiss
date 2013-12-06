ENV["RACK_ENV"] ||= "development"

require "rubygems"
require "bundler"
Bundler.setup(:default, ENV["RACK_ENV"].to_sym)

require "middleman/rack"

map "/linked" do
  run lambda { |env|
    headers = {
      "Content-Type" => "text/html",
      "Location"     => "http://brandonweiss.s3.amazonaws.com/linked#{env['PATH_INFO']}"
    }

    [301, headers, []]
  }
end

if ENV["RACK_ENV"] == "development"
  run Middleman.server
else
  require "rack/contrib/try_static"

  use ::Rack::TryStatic, root: "build",
                         urls: %w[/],
                         try:  [".html", "index.html", "/index.html"]

  run lambda { |env|
    [404, { "Content-Type" => "text/plain" }, ["File not found."]]
  }
end
