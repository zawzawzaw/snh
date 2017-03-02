<?php
// deploy.php

set('default_stage', 'staging');

server('clientsmanic', '103.25.203.155', 2307)
    ->user('manicssh')
    ->password('M4n1c!')
    ->stage('staging')
    ->env('deploy_path', '/var/www/vhosts/manic.com.sg/clients.manic.com.sg/snh/html');

set('repository', 'https://github.com/zawzawzaw/snh.git');
env('branch', 'master');

task('deploy:staging', function() {
    writeln('<info>Deploying...</info>');
    $appFiles = [
        'bin',
        'source/css',
        'source/js',
        'source/less'
    ];
    $deployPath = env('deploy_path');

    foreach ($appFiles as $file)
    {
        upload($file, "{$deployPath}/{$file}");
    }

    cd($deployPath);
    // run("composer update --no-dev --prefer-dist --optimize-autoloader");

    // run("chown -R www-data:www-data app/storage");
    // set('writable_dirs', ['app/storage']);

    writeln('<info>Deployment is done.</info>');
})->desc('Deploy application to staging.');