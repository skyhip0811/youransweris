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

Route::get('/', 'HomeController@index');

Route::get('/chapter', function () {
    return view('charterdetail');
});
Route::get('/book', function () {
    return view('bookdetail');
});

Route::get('/category', function () {
    return view('category');
});

Route::get('/searchbooks', function () {
    return view('searchbooks');
});

Route::get('/createchapter', function () {
    return view('createchapter');
});

// Route::get('/createbook', function () {
//     return view('createbook');
// })->middleware('auth');

Route::get('/createbook','MemberController@createbook_get');
Route::post('/createbook','MemberController@createbook_post');

Route::get('/login', function () {
    return view('login');
})->middleware('guest');

Route::get('/register', function () {
    return view('register');
})->middleware('guest');

Route::get('/logout', 'Auth\LoginController@logout');

Route::post('/register', 'Auth\RegisterController@register');

Route::post('/login', 'Auth\LoginController@login')->name('login');

Route::post('upload',function(){
	return response()->json(['message'=>"success"]);
});