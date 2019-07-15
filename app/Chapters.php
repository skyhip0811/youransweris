<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Chapters extends Model
{
    //
    protected $fillable = [
        'name','aurthor_id','content','question','previous_chapter_id','book_id','answer','endchapter','additionalinfo'
    ];
}
