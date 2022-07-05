require 'capistrano/setup'
require 'capistrano/deploy'
require 'capistrano/scm/git'
require 'capistrano/rake'
install_plugin Capistrano::SCM::Git
require 'capistrano/bundler'
require 'capistrano/rvm'
require 'capistrano/rails'
require 'capistrano/puma'
install_plugin Capistrano::Puma
require 'capistrano/nginx'

set :rvm_type, :user
set :rvm_ruby_version, '3.0.0'

Dir.glob("lib/capistrano/tasks/*.rake").each { |r| import r }
