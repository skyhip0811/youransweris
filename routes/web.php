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

Route::get('/', function () {
    return view('homepage');
});

Route::get('/chapter', function () {
    return view('charterdetail');
});
Route::get('/book', function () {
    return view('bookdetail');
});

Route::get('/category', function () {
    return view('category');
});