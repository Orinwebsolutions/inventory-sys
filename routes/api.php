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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/products', 'ProductsController@store');
// Route::post('/products', 'ProductsController@store')->name('products.store');
// Route::get('/products/{expense}', 'ProductsController@show')->name('products.show');
// Route::put('/products/{expense}', 'ProductsController@update')->name('products.update');
// Route::delete('/products/{expense}', 'ProductsController@destory')->name('products.destroy');
Route::get('/product/categories', 'ProductsController@getCategories');
