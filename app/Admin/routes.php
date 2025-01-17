<?php

use Illuminate\Routing\Router;

Admin::routes();

Route::group([
    'prefix'        => config('admin.route.prefix'),
    'namespace'     => config('admin.route.namespace'),
    'middleware'    => config('admin.route.middleware'),
], function (Router $router) {

    $router->get('/', 'HomeController@index')->name('admin.home');
    $router->resource('users', UserController::class);
    $router->resource('books', BooksController::class);
    $router->resource('books-types', BooksTypeController::class);
    $router->resource('chapters', ChaptersController::class);
    $router->resource('user-reads', UserReadController::class);
    $router->resource('likes', LikesController::class);

});
