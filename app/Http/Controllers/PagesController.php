<?php

namespace App\Http\Controllers;

use App\item;
use Illuminate\Http\Request;

class PagesController extends Controller
{

    public function index()
    {
        return view('welcome');
    }

    public function about()
    {
        return view('pages.about');
    }

}
