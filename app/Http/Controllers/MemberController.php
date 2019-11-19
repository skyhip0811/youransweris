<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\User;
use Illuminate\Http\Response;
use App\BooksType;
use App\Books;
use App\Likes;
use App\Chapters;
use Illuminate\Support\Facades\Validator;

class MemberController extends Controller
{
    //
    public function __construct()
    {
        $this->middleware('auth');
    }

    protected function createbbok_validator(array $data)
    {
        return Validator::make($data, [
            'name' => ['required', 'string', 'max:8', 'min:2', 'unique:books'],
            'desc' =>['required','string', 'min:5' , 'max:30'],
            'type' => ['required','int'],
            'chaptername' => ['required', 'string', 'max:8', 'min:2'],
            'content' => ['required', 'string', 'min:100', 'max:3000'],
            'question' => ['required', 'string', 'min:2', 'max:50'],
            'cover' => ['required']
        ]);
    }



    protected function createbook(array $data)
    {
        $id = Auth::user()->id;
        return Books::create([
            'name' => $data['name'],
            'author_id' => $id,
            'desc' => $data['desc'],
            'type_id' => $data['type'],
            'cover' => $data['cover'],
            'total_chapter_numbers' => 0
        ]);
    }

    protected function createchapter(array $data){

        $id = Auth::user()->id;
        if(array_key_exists('redirect_option', $data)){
           
            $data['redirect'] = $data['redirect_id'];
        }else{
            
             $data['redirect'] =null;
        }

        $chapter = Chapters::create([
            'name' => $data['chaptername'],
            'aurthor_id' => $id,
            'content' => $data['content'],
            'question' => $data['question'],
            'answer' => $data['answer'],
            'endchapter' => $data['endchapter'],
            'previous_chapter_id' =>$data['previous_chapter_id'],
            'book_id' => $data['book_id'],
            'additionalinfo' =>$data['additionalinfo'],
            'level'=> $data['level'],
            'redirect'=>$data['redirect']

        ]);

        if($chapter){
            $book = Books::find($data['book_id']);
            if($data['level'] > $book->max_level){
                $book->max_level = $data['level'];
            }
            $book->total_chapter_numbers += 1;

            $book->save();
        }

    }

    public function createbook_get(Request $request)
    {
    	$BooksTypes = BooksType::all();
        $options = [];
        foreach ($BooksTypes as $key => $item) {
            # 
            $obj = (object) [ 'value'=> $item->id , 'label'=> $item->cn_name];
            array_push($options, $obj);
        }
    	return response()->view('createbook',['options'=>$options]);
    }

    public function createbook_post(Request $request)
    {
        $data =  $request->all();
        if($request->file){
            $file = $request->file->store('public');
            $filename = $request->file->hashName();
            $data['cover'] = $filename;
        }
        
        $this->createbbok_validator($data)->validate();
        
        $book = $this->createbook($data);
        $data['book_id'] = $book->id;
        $data['endchapter'] = false;
        $data['previous_chapter_id'] = 0;
        $data['answer'] = '';
        $data['level'] = 1;
        $chapter = $this->createchapter($data);
        return $book;

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

    protected function createchapter_validator(array $data){
        return Validator::make($data, [
            'chaptername' => ['required', 'string', 'max:8', 'min:2'],
            'content' => ['required', 'string', 'min:100', 'max:3000'],
            'answer' => ['required', 'string', 'min:2', 'max:30'],
        ]);
    }

    public function createchapter_post(Request $request, $previous_chapter_id)
    {
        $previous_chapter = Chapters::where('id',$previous_chapter_id)->first();

        if($previous_chapter){
            $data = $request->all();
            $this->createchapter_validator($data)->validate();
            $data['previous_chapter_id'] = $previous_chapter_id;
            $data['level'] = $previous_chapter->level +1;
            $data['book_id'] = $previous_chapter->book_id;
            $chapter = $this->createchapter($data);
            return $chapter;

        }else{
             return abort(404);
        }
        

    }

    public function likechapter_post(Request $request, $chapter_id)
    {   $user_id = Auth::user()->id;
        $like = Likes::where('chapter_id',$chapter_id)->where("user_id",$user_id)->first();
        if(!$like){
            $like = Likes::create(['user_id'=>$user_id,'chapter_id'=>$chapter_id,'status'=>1]);
            return $like;
        }else{
            
            $like->status = $like->status?0:1;
            $like->save();
            return $like;
        }
    }
}
