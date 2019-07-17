<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Books extends Model
{
    //
    protected $fillable = [
        'name','author_id','type_id','desc','cover','total_chapter_numbers','max_level'
    ];

    public function aurthor(){
    	return $this->belongsTo('App\User','author_id');
    }

}
