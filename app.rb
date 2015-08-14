require 'sinatra'
require 'sass'

configure do
  set :scss, {:style => :compressed, :debug_info => false}
end

get '/css/:name.css' do |name|
  content_type :css
  scss "sass/#{name}".to_sym, :layout => false
end

get '/' do
  @companies = [
                { name: "McDonalds", employees: 500000, ceo_salary: 50000000, average: 16, minumum: 10,
                  image: "http://img3.wikia.nocookie.net/__cb20120307000443/logopedia/images/e/e9/Mcdonalds-95-logo.png" }]

  erb :index, :layout => :default_layout
end
