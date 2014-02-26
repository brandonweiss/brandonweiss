require "httparty"

class LatestPost < Middleman::Extension

  def initialize(app, options_hash = {}, &block)
    super

    app.before do
      response    = HTTParty.get("http://anti-pattern.com/feed")
      latest_post = response.parsed_response["feed"]["entry"].first

      app.set :latest_post_title, latest_post["title"]
      app.set :latest_post_date,  Date.parse(latest_post["updated"]).strftime("%B %d, %Y")
      app.set :latest_post_body,  latest_post["content"]["__content__"]
    end
  end
  # alias_method :included, :registered

end

::Middleman::Extensions.register(:latest_post, LatestPost)

# Use Rails-like assets hierarchy
set :fonts_dir,  'assets/fonts'
set :images_dir, 'assets/images'
set :js_dir,     'assets/javascripts'
set :css_dir,    'assets/stylesheets'

activate :latest_post
activate :autoprefixer, browsers: ["last 2 versions", "Explorer >= 9"]
