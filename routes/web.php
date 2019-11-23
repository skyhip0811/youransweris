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



// Route::get('/category', function () {
//     return view('category');
// });

Route::get('/searchbooks', function () {
    return view('searchbooks');
});


Route::get('/createbook','MemberController@createbook_get');
Route::post('/createbook','MemberController@createbook_post');


Route::get('/createchapter/{previous_chapter_id}','MemberController@createchapter_get');
Route::post('/createchapter/{previous_chapter_id}','MemberController@createchapter_post');
Route::get('/likechapter/{chapter_id}','MemberController@likechapter_post');
Route::get('/chapter/{chapter_id}','ChapterController@chapterdetail');

Route::get('/book/{book_id}','ChapterController@bookdetail');

Route::get('/category/{category_id}','ChapterController@categorylist');

Route::get('/login', function () {
    return view('login');
})->middleware('guest');

Route::get('/register', function () {
    return view('register');
})->middleware('guest');

Route::get('/logout', 'Auth\LoginController@logout');

Route::post('/register', 'Auth\RegisterController@register')->name('register');

Route::post('/login', 'Auth\LoginController@login')->name('login');

Route::post('upload',function(){
	return response()->json(['message'=>"success"]);
});