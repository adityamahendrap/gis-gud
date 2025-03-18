<?php

use App\Http\Controllers\MapController;
use App\Http\Controllers\PointController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return redirect()->route('login');
});

Route::get('/dashboard', function () {
    return redirect()->route('map.index');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/map', [MapController::class, 'index'])->name('map.index');
    Route::get('/map/points', [PointController::class, 'index'])->name('points.index');
    Route::get('/map/points/create', [PointController::class, 'create'])->name('points.create');
    Route::post('/map/points', [PointController::class, 'store'])->name('points.store');
    Route::get('/map/points/{id}/delete', [PointController::class, 'destroy'])->name('points.destroy');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
