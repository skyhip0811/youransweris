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

        $latest_chapters = Chapters::orderBy('created_at', 'desc')->take(10)->get();
        foreach ($latest_chapters as $key => $value) {
            $time = strtotime($value->updated_at);
            $newformat = date('m-d H:i',$time);
            $latest_chapters[$key]->newdate = $newformat;
        }

        $most_like_chapters = Chapters::withCount('like')->orderBy('like_count', 'desc')->paginate(5); 

        $books_with_most_chapters = Books::orderBy('total_chapter_numbers','desc')->take(10)->get();

        return view('homepage', ['most_like_chapters'=>$most_like_chapters,'latest_chapters'=>$latest_chapters,'books_with_most_chapters'=>$books_with_most_chapters]);
    }

    public function recent(){
        return view('recent',['recent_chapters'=>[]]);
    }
}
