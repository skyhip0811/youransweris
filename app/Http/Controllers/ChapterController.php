<?php

namespace App\Http\Controllers;
use App\Books;
use App\Chapters;
use Illuminate\Http\Response;
use Illuminate\Http\Request;
use App\User;
use App\BooksType;
use App\Likes;
use App\comments;

use Illuminate\Support\Facades\Auth;

class ChapterController extends Controller
{
    //
    public function chapterdetail(Request $request,$chapter_id)
    {	

    	$chapter = Chapters::where('id',$chapter_id)->first();
    	$chapter->readnum+=1;
    	$chapter->save();
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
	    		$answers = Chapters::where('previous_chapter_id',$chapter_id)->withCount('like')->get();

	    	}
	    	$redirect_chapter = '';
	    	if($chapter->redirect){
	    		$redirect_chapter = Chapters::where('id',$chapter->redirect)->first();
	    	}

	    	if(Auth::check()){
	    		$user = Auth::user();
	    		$like = Likes::where("user_id",$user->id)->where("chapter_id",$chapter_id)->where('status',1)->first();
	    		if($like){
	    			$liked = 1;
	    		}else{
	    			$liked = 0;
	    		}
	    	}else{
	    		$liked = 0;
	    	}

	    	$comments = comments::where('chapter_id',$chapter->id)->with("user")->get();


	    	return response()->view('chapterdetail',['liked'=>$liked ,'likes'=>$chapter->like->count(), 'redirect_chapter'=>$redirect_chapter,'answers'=>$answers,'chapter'=>$chapter, 'book'=>$book, 'previous_chapter'=>$previous_chapter,'first_chapter_name'=>$first_chapter_name,'aurthor'=>$aurthor ,'comments'=>$comments]);
    	}else{
    		return abort(404);
    	}
	}

	public function bookdetail(Request $request,$book_id){
		$book = Books::where('id',$book_id)->first();

		if($book){
			$aurthor = User::where('id',$book->author_id)->first();
			$other_aurthors = Chapters::select('aurthor_id')->where('book_id',$book_id)->where('aurthor_id','!=',$book->author_id)->groupBy('aurthor_id')->get();
			$count = Chapters::where('book_id',$book_id)->count();
			// return $all_chapters;
			$first_chapter = Chapters::where('previous_chapter_id',0)->where('book_id',$book->id)->first();
			$first_chapter->readnum+=1;
    		$first_chapter->save();
			$answers = [];
			if(!$first_chapter->endchapter){
	    		$answers = Chapters::where('previous_chapter_id',$first_chapter->id)->withCount("like")->get();
	    	}

	    	if(Auth::check()){
	    		$user = Auth::user();
	    		$like = Likes::where("user_id",$user->id)->where("chapter_id",$first_chapter->id)->where('status',1)->first();
	    		if($like){
	    			$liked = 1;
	    		}else{
	    			$liked = 0;
	    		}
	    	}else{
	    		$liked = 0;
	    	}



	    	$comments = comments::where('chapter_id',$first_chapter->id)->with("user")->get();


	    	return response()->view('bookdetail',['liked'=>$liked ,'likes'=>$first_chapter->like->count(),'answers'=>$answers,'chapter'=>$first_chapter, 'book'=>$book,'aurthor'=>$aurthor ,'other_aurthors'=>$other_aurthors, 'chapter_count'=>$count,'comments'=>$comments]);
		}else{
			return abort(404);
		}
	}

	public function categorylist(Request $request,$category_id){
		$category = BooksType::where('id',$category_id)->first();
		if($category){
			$books = Books::where('type_id',$category_id)->get();
			return response()->view('category',['category'=>$category, 'books'=>$books]);
		}else{
			return abort(404);
		}
		
	}

	public function createchapter_get(Request $request, $previous_chapter_id)
    {
        $previous_chapter = Chapters::where('id',$previous_chapter_id)->first();
        $chapters = Chapters::select('id','name')->where('book_id',$previous_chapter->book_id)->get();
        $chapters_options = [];

        foreach ($chapters as $key => $value) {
            $chapter =  new \stdClass();
            $chapter->label = $value->name;
            $chapter->value = $value->id;
          array_push($chapters_options,$chapter);
        }
        if($previous_chapter){
            $book = Books::where('id',$previous_chapter->book_id)->first();
            return response()->view('createchapter', [
            'previous_chapter' => $previous_chapter,
            'book_name' => $book->name,
            'chapters_options' =>  $chapters_options
            ]);

        }else{
            return abort(404);
        }
        

        
    }
}
