<?php

namespace App\Http\Controllers\VipLandmark\FrontEnd;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    //
    public function index()
    {
        return view('vip_landmark.frontend.layouts.master');
    }
}
