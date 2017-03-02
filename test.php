<?php 
set('default_stage', 'staging');
set('repository', 'https://github.com/zawzawzaw/snh.git');
env('branch', 'master');
env('deploy_path', '/var/www/vhosts/manic.com.sg/clients.manic.com.sg/snh/html');

server('clientsmanic', '103.25.203.155', 2307)
    ->user('manicssh')
    ->password('M4n1c!')
    ->stage('staging');

task('deploy:started', function() {
    writeln('<info>Deploying...</info>');
});

task('deploy:done', function() {
    writeln('<info>Deployment is done.</info>');
});

before('deploy:staging', 'deploy:started');
after('deploy:staging', 'deploy:done');

task('deploy:upload', function() {
    $appFiles = [
        'bin',
        'source/css',
        'source/js',
        'source/less',
    ];
    $deployPath = env('deploy_path');

    foreach ($appFiles as $file)
    {
        upload($file, "{$deployPath}/{$file}");
    }
});

task('deploy:writable_dirs', function() {
    $deployPath = env('deploy_path');
    cd($deployPath);

    run("chown -R www-data:www-data app/storage");
    set('writable_dirs', ['app/storage']);
});

task('deploy:composer', function() {
    $deployPath = env('deploy_path');
    cd($deployPath);

    run("composer update --no-dev --prefer-dist --optimize-autoloader");
});

task('deploy:staging', [
    'deploy:upload'
    // 'deploy:writable_dirs',
    // 'deploy:composer',
]);
?>