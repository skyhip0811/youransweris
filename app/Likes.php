<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Likes extends Model
{
    //

    protected $fillable = [
       "user_id","chapter_id",'status'
    ];
    public function user(){
    	return $this->belongsTo('App\User','user_id');
    }

    public function chapter(){
    	return $this->belongsTo('App\Chapters','chapter_id');
    }
}
