require 'rubygems'
require 'bundler'
Bundler.setup

require 'sinatra'
require 'date'
require 'app'

run Sinatra::Application
