require 'rubygems'
require 'bundler'
Bundler.require(:default, ENV['RACK_ENV'])

require 'date'
require './app'

run App
