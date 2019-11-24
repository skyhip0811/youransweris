<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class comments extends Model
{
    //
    protected $fillable = [
       "user_id","chapter_id",'comment'
    ];
    public function user(){
    	return $this->belongsTo('App\User','user_id');
    }

    public function chapter(){
    	return $this->belongsTo('App\Chapter','chapter_id');
    }
}

