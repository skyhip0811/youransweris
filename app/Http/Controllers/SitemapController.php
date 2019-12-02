<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Chapters;

class SitemapController extends Controller
{
    //

    public function index()
	{
	  $chapter = Chapters::orderBy('updated_at', 'desc')->first();

	  return response()->view('sitemap.index', [
	      'chapter' => $chapter,
	  ])->header('Content-Type', 'text/xml');
	}

	public function chapters()
	{
	    $chapters = Chapters::orderBy('created_at', 'desc')->get();
	    return response()->view('sitemap.chapters', [
	        'chapters' => $chapters,
	    ])->header('Content-Type', 'text/xml');
	}
}
