###
# Compass
###

# Change Compass configuration
# compass_config do |config|
#   config.output_style = :compact
# end

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", :layout => false
#
# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

# Proxy pages (https://middlemanapp.com/advanced/dynamic_pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", :locals => {
#  :which_fake_page => "Rendering a fake page with a local variable" }

###
# Helpers
###

# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload
end

# Methods defined in the helpers block are available in templates
helpers do
  def nav_active(path)
    current_page.path == path ? {:class => "active"} : {}
  end

  def show_nav
    pages = Array.new
    sitemap.resources.find_all { |r| r.data.title }.each do |page|
      pages.push page
    end
    return pages
  end

  def sub_pages(page)
    sitemap.resources.find_all { |r| r.data.parent }.each do |resource|
      resource.path
    end
  end
end

require 'breakpoint'

set :index_file, 'index.html'

set :css_dir, 'assets/stylesheets'

set :js_dir, 'assets/javascripts'

set :images_dir, 'assets/images'

activate :directory_indexes
activate :syntax
activate :sprockets
activate :navtree do |options|
  options.ignore_dir += ['partials']
  options.automatic_tree_updates = false;
end

redirect "index.html", to: "/general/colors.html"

# Build-specific configuration
configure :build do
  activate :minify_css

  # Minify Javascript on build
  # activate :minify_javascript

  # Enable cache buster
  # activate :asset_hash

  # Use relative URLs
  activate :relative_assets

  # Or use a different image path
  # set :http_prefix, "/Content/images/"
end
