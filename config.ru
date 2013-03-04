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

    links = {
      "Sqoot"         => "http://www.sqoot.com",
      "MyZeus"        => "http://myze.us",
      "Expensieve"    => "http://expensieve.com",
      "Arrival"       => "http://arrival.io",
      "write"         => "http://anti-pattern.com",
      "tweet"         => "http://twitter.com/brandon_weiss",
      "code"          => "http://github.com/brandonweiss",
      "listen"        => "http://www.rdio.com/people/brandonweiss",
      "take pictures" => "http://instagram.com/brandonweiss",
      "collect"       => "http://pinterest.com/brandonweiss",
      "friendly"      => "http://facebook.com/brandon.weiss",
      "email me"      => "mailto:brandon@anti-pattern.com"
    }

    body = File.open("#{Dir.pwd}/index.html", File::RDONLY).read
    body.gsub!(/\{\{([\w\s]+)\}\}/) do |match|
      capture = match.match(/\{\{([\w\s]+)\}\}/)[1]
      "<a class='#{capture}' href='#{links[capture]}'>#{capture}</a>"
    end

    [200, headers, [body]]
  }
end
