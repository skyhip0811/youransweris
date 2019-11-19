<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Chapters extends Model
{
    //
    protected $fillable = [
        'redirect','level','name','aurthor_id','content','question','previous_chapter_id','book_id','answer','endchapter','additionalinfo'
    ];

    public function aurthor(){
    	return $this->belongsTo('App\User','aurthor_id');
    }

    public function book(){
    	return $this->belongsTo('App\Books','book_id');
    }

    public function previous_chapter(){
        return $this->belongsTo('App\Chapters','previous_chapter_id');
    }

    public function like(){
        return $this->hasMany('App\Likes','chapter_id')->where('status', '=', 1);
    }
}
