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
    	$chapter = Chapters::where('id',$chapter_id)->first();

    	if($chapter){
    		$aurthor = User::where('id',$chapter->aurthor_id)->first();
    		$previous_chapter = Chapters::where('id',$chapter->previous_chapter_id)->first();
	    	$book = Books::where('id',$chapter->book_id)->first();
	    	$first_chapter_name = '';
	    	if($chapter->previous_chapter_id != 0){
	    		$first_chapter = Chapters::where('previous_chapter_id',0)->where('book_id',$chapter->book_id)->first();
	    		$first_chapter_name = $first_chapter->name;
	    	}
	    	$answers = [];
	    	if(!$chapter->endchapter){
	    		$answers = Chapters::where('previous_chapter_id',$chapter_id)->get();

	    	}
	    	return response()->view('chapterdetail',['answers'=>$answers,'chapter'=>$chapter, 'book'=>$book, 'previous_chapter'=>$previous_chapter,'first_chapter_name'=>$first_chapter_name,'aurthor'=>$aurthor]);
    	}else{
    		return abort(404);
    	}
	}

	public function bookdetail(Request $request,$book_id){
		$book = Books::where('id',$book_id)->first();
		if($book){
			$aurthor = User::where('id',$book->aurthor_id)->first();
			$first_chapter = Chapters::where('previous_chapter_id',0)->where('book_id',$book->id)->first();
			$answers = [];
			if(!$first_chapter->endchapter){
	    		$answers = Chapters::where('previous_chapter_id',$first_chapter->id)->get();
	    	}

	    	return response()->view('bookdetail',['answers'=>$answers,'chapter'=>$first_chapter, 'book'=>$book,'aurthor'=>$aurthor]);
		}else{
			return abort(404);
		}
	}
}
