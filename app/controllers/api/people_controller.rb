class Api::PeopleController < ApplicationController
  def index
    render :json =>
    '{"people": [{"id": 1, "first_name": "Justin", "last_name": "Faulkner"}, {"id": 2, "first_name": "Bill", "last_name": "Clinton"}]}'
  end

  def show
    if params["id"] == "1"
      data = '{"id": 1, "first_name": "Justin", "last_name": "Faulkner", "birthday": "January 1, 1970"}'
    elsif params["id"] == "2"
      data = '{"id": 2, "first_name": "Bill", "last_name": "Clinton", "birthday": "December 31, 1901"}'
    end
    render :json => "{'person': #{data}}"
  end
end