<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Response;
use App\BooksType;
use App\Books;
use App\Chapters;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        // $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */


    public function index()
    {
        $latest_chapters = Chapters::orderBy('updated_at', 'desc')->take(10)->get();
        foreach ($latest_chapters as $key => $value) {
            $time = strtotime($value->updated_at);
            $newformat = date('m-d H:i',$time);
            $latest_chapters[$key]->newdate = $newformat;
        }

        $books_with_most_chapters = Books::orderBy('total_chapter_numbers','desc')->take(10)->get();

        return view('homepage', ['latest_chapters'=>$latest_chapters,'books_with_most_chapters'=>$books_with_most_chapters]);
    }
}
