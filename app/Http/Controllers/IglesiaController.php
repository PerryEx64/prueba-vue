<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Iglesia;

class IglesiaController extends Controller
{
    public function index()
    {
        $iglesias = Iglesia::all();
        return $iglesias;
    }

    public function store(Request $request)
    {
        $iglesia = Blog::create($request->post());
        return response()->json([
            'iglesia'=>$iglesia
        ]);
    }
}