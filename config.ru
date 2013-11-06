ENV["RACK_ENV"] ||= "development"

require "rubygems"
require "bundler"
Bundler.require(:default, ENV["RACK_ENV"].to_sym)

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
  routes = {
    "/"                            => "index.html",
    "/founderscard"                => "founderscard.html",
    "/founderscard/manifest.plist" => "founderscard_manifest.plist"
  }

  use Rack::Static, urls: routes,      root: "public"
  use Rack::Static, urls: ["/assets"], root: Dir.pwd

  run lambda { |env|
    [301, { "Location" => "http://brandonweiss.me" }, []]
  }
end
