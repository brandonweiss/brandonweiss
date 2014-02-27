class LatestPost < Middleman::Extension

  def initialize(app, options_hash = {}, &block)
    super

    app.before do
      file = File.read("./source/latest_post.json")
      post = JSON.load(file)

      app.set :latest_post_title, post["title"]
      app.set :latest_post_date,  Date.parse(post["date"]).strftime("%B %d, %Y")
      app.set :latest_post_body,  post["body"]
    end
  end
  # alias_method :included, :registered

end

::Middleman::Extensions.register(:latest_post, LatestPost)

set :fonts_dir,  "assets/fonts"
set :images_dir, "assets/images"
set :js_dir,     "assets/javascripts"
set :css_dir,    "assets/stylesheets"

activate :latest_post
activate :autoprefixer, browsers: ["last 2 versions", "Explorer >= 9"]
