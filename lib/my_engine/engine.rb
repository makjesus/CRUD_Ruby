module MyEngine
  class Engine < ::Rails::Engine
    isolate_namespace MyEngine

    initializer 'my_engine.assets.precompile' do |app|
      app.config.assets.precompile += %w( my_engine/application.css my_engine/application.js )
    end
  end
end
