# config valid for current version and patch releases of Capistrano
lock "~> 3.17.0"

set :application,             'spc'
set :user,                    'deploy'
set :stages,                  %w(production)
set :repo_url,                'git@github.com:asmlvsk/spc-landing-page.git'
set :branch,                  :main
set :app_path,                "/home/#{fetch(:user)}/apps/#{fetch(:application)}"
set :deploy_to,               "#{fetch(:app_path)}/"
set :linked_files,            ["config/master.key",'.env']
set :linked_dirs,             %w{log tmp/pids tmp/cache tmp/sockets vendor/bundle storage public/system public/uploads public/assets bundle node_modules}
set :pty,                     true
set :puma_rackup,             -> { File.join(current_path, 'config.ru') }
set :puma_state,              "#{shared_path}/tmp/pids/puma.state"
set :puma_pid,                "#{shared_path}/tmp/pids/puma.pid"
set :puma_bind,               ['tcp://0.0.0.0:3000', "unix://#{shared_path}/tmp/sockets/puma.sock"]
set :puma_conf,               "#{shared_path}/puma.rb"
set :puma_access_log,         "#{shared_path}/log/puma_error.log"
set :puma_error_log,          "#{shared_path}/log/puma_access.log"
set :puma_role,               :app
set :puma_threads,            [0, 8]
set :puma_workers,            4
set :puma_worker_timeout,     nil
set :puma_init_active_record, true
set :puma_preload_app,        false
set :bundle_without,          %w{test}
set :puma_phased_restart,     false

set :nginx_service_path,        '/etc/init.d/nginx'
set :nginx_log_path,            "#{shared_path}/log"
set :nginx_application_name,    "#{fetch :application}-api_#{fetch :stage}"
set :nginx_template,            "#{stage_config_path}/templates/api.nginx.erb"
set :nginx_use_ssl,             false
set :nginx_read_timeout,        120
set :app_server_socket,         "//#{shared_path}/tmp/sockets/puma.sock"

set :disallow_pushing, false
set :format, :pretty
