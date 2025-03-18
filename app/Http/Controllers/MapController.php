<?php

namespace App\Http\Controllers;

use App\Models\Point;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class MapController extends Controller
{
    public function index()
    {
        $points = Point::all()->where('user_id', Auth::id());
        return Inertia::render('V2/Index', [
            'points' => $points,
        ]);
    }
}
