<?php

use App\Cart;
use App\Product;
use Illuminate\Http\Request;

Route::group(['prefix' => '/auth', ['middleware' => 'throttle:20,5']], function() {
    Route::post('/register', 'Auth\RegisterController@register');
    Route::post('/login', 'Auth\LoginController@login');
});

Route::group(['middleware' => 'jwt.auth'], function() {
    Route::get('/user', 'UserController@index');

    Route::get('/auth/logout', 'UserController@logout');
    
    Route::get('/cart', 'ProductsCartController@index');
    Route::post('/cart', 'ProductsCartController@store');
    Route::delete('/cart/{productId}', 'ProductsCartController@destroy');
    Route::delete('/cart', 'ProductsCartController@destroyAll');
});

Route::get('/products', 'ProductsController@index');
Route::get('/products/{product}', 'ProductsController@show');
