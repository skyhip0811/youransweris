<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserRead extends Model
{
    //
    protected $fillable = [
       "user_id","chapter_id"
    ];
    public function user(){
    	return $this->belongsTo('App\User','user_id');
    }

    public function chapter(){
    	return $this->belongsTo('App\Chapters','chapter_id');
    }
}
