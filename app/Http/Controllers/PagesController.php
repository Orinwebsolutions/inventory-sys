<?php

namespace App\Http\Controllers;

// use DB;
use App\item;
use Illuminate\Http\Request;

class PagesController extends Controller
{
    public function home()
    {
        return view('welcome');
    }

    public function about()
    {
        $something = ['1','2','3'];
        return view("pages.about",compact('something'));
    }

    public function allitems()
    {
        // $stocks = item::get();
        $stocks = item::all();
        // $stocks = DB::table('stocks')->get();
        return view("pages.stocks", compact("stocks"));
    }
}
