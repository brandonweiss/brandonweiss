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
  use Rack::Static, urls: ["/assets"], root: Dir.pwd

  run lambda { |env|
    headers = {
      "Content-Type"  => "text/html",
      "Cache-Control" => "public, max-age=86400"
    }
    body = File.open("#{Dir.pwd}/index.html", File::RDONLY).read

    [200, headers, [body]]
  }
end
