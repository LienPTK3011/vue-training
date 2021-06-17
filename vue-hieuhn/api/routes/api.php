<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/create', 'Api\UserController@create');
Route::get('/lists', 'Api\UserController@lists');
Route::get('/delete/{id}', 'Api\UserController@deleteItem');
Route::get('/item/{id}', 'Api\UserController@item');
Route::post('/update', 'Api\UserController@update');
Route::post('/search', 'Api\UserController@search');