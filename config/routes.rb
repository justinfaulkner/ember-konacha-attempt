EmberKonachaAttempt::Application.routes.draw do
  namespace :api do
    resources :people
  end

  root to: "home#index"
  match "/*path" => "home#index"
end
