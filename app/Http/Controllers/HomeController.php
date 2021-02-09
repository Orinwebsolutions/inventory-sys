<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        // return view('home');
        if (auth()->user()->user_role == 'admin' || auth()->user()->user_role == 'staff'){
            return redirect('/profile');//Redirect to profile page
        }else{
            Auth::logout();
            return redirect('/login');
        }

    }
}
