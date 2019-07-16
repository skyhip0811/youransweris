<?php

namespace App\Http\Controllers;
use App\Books;
use App\Chapters;
use Illuminate\Http\Response;
use Illuminate\Http\Request;
use App\User;

class ChapterController extends Controller
{
    //
    public function chapterdetail(Request $request,$chapter_id)
    {
    	return response()->view('chapterdetail');
    }
}
