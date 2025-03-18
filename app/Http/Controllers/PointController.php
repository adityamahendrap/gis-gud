<?php

namespace App\Http\Controllers;

use App\Models\Point;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use MatanYadaev\EloquentSpatial\Objects\Point as PointObject;

class PointController extends Controller
{
    private $name = 'Point';

    public function index()
    {
        $points = Point::all()->where('user_id', Auth::id());
        // dd($points->toArray());
        return Inertia::render('V2/Point/Index', [
            'name' => $this->name,
            'points' => $points,
        ]);
    }

    public function create()
    {
        $points = Point::all()->where('user_id', Auth::id());
        return Inertia::render('V2/Point/Create', [
            'name' => $this->name,
            'points' => $points,
        ]);
    }

    public function store()
    {
        // dd(request()->all());

        Point::create([
            'name' => request('title'),
            'description' => request('description'),
            'latitude' => request('latitude'),
            'longitude' => request('longitude'),
            'location' => new PointObject(request('latitude'), request('longitude')),
            'user_id' => Auth::id(),
            'image_string' => request('image_string'),
        ]);

        return redirect()->route('points.index');
    }

    public function destroy($id)
    {
        Point::destroy($id);
        return redirect()->route('points.index');
    }
}
