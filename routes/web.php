<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Auth::routes();

//Start Back End
Route::group(['namespace' => 'VipLandmark\BackEnd', 'middleware'=>'auth'], function(){
	Route::get('/admin/home', 'HomeController@index');
	Route::get('/admin/{path?}', 'HomeController@index');
});
//End Back End

//Start Front End
Route::group(['namespace' => 'VipLandmark\FrontEnd'], function(){
    Route::get('/', 'HomeController@index');
	Route::get('/{path}', 'HomeController@index');
});
//End Front End