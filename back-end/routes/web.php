<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get(
    '/home',
    [
        'uses' => 'MainController@home',
        'as' => 'main-home'
    ]
    );

$router->post(
    '/',
    [
        'uses' => 'ProductController@add',
        'as' => 'product-add'
    ]
    );

$router->get(
    '/{id}',
    [
        'uses' => 'ProductController@item',
        'as' => 'product-item'
    ]
    );

$router->patch(
    '/{id}',
    [
        'uses' => 'ProductController@update',
        'as' => 'product-update'
    ]
    );

$router->get(
    '/search',
    [
        'uses' => 'ProductController@search',
        'as' => 'product-search'
    ]
    );




