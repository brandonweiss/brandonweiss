require "rake"

namespace :assets do

  desc "Precompile assets"
  task :precompile do
    Rake::Task["assets:clean"].invoke
    sh "bundle exec middleman build"
  end

  desc "Remove compiled files"
  task :clean do
    sh "rm -rf #{File.dirname(__FILE__)}/build/*"
  end

end

namespace :docker do

  desc "Build Docker image"
  task :build do
    sh "docker build -t brandonweiss/brandonweiss ."
  end

  desc "Push Docker image"
  task :push do
    sh "docker push brandonweiss/brandonweiss"
  end

end

desc "Update blog post"
task :update_blog_post do
  require "httparty"

  response    = HTTParty.get("http://anti-pattern.com/feed")
  latest_post = response.parsed_response["feed"]["entry"].first

  post = {
    title: latest_post["title"],
    date:  latest_post["updated"],
    body:  latest_post["content"]["__content__"]
  }

  File.open("./source/latest_post.json", "w") do |file|
    file.write(post.to_json)
  end
end
