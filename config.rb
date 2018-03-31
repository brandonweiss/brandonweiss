# frozen_string_literal: true

activate :directory_indexes
activate :livereload
activate :external_pipeline, {
  name: :brunch,
  command: build? ? "brunch build" : "brunch watch",
  source: "./tmp/dist",
  latency: 1,
}

helpers do

  def spacer(height)
    content_tag(:div, nil, style: "height: #{height};")
  end

end
