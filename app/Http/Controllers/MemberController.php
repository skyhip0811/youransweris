<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\User;
use Illuminate\Http\Response;
use App\BooksType;
use App\Books;
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
            'question' => ['required', 'string', 'min:2', 'max:50']
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
            'cover' => $data['cover']
        ]);
    }

    protected function createchapter(array $data){

        $id = Auth::user()->id;
        return Chapters::create([
            'name' => $data['name'],
            'aurthor_id' => $id,
            'content' => $data['content'],
            'question' => $data['question'],
            'answer' => $data['answer'],
            'endchapter' => $data['endchapter'],
            'previous_chapter_id' =>$data['previous_chapter_id'],
            'book_id' => $data['book_id'],
            'additionalinfo' =>$data['additionalinfo']
        ]);

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
        $data =  (array) $request->form;
        $file = $request->file->store('public');
        $filename = $request->file->hashName();
        return $request->all();
        $this->createbbok_validator($data)->validate();
        $data['cover'] = $filename;
        $book = $this->createbook($data);
        $data['book_id'] = $book->id;
        $data['endchapter'] = false;
        $data['previous_chapter_id'] = 0;
        $data['answer'] = '';
        $chapter = $this->createchapter($data);
        return $chapter;

    }
}
