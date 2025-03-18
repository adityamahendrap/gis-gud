<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use MatanYadaev\EloquentSpatial\Objects\Polygon;
use MatanYadaev\EloquentSpatial\Traits\HasSpatial;
use MatanYadaev\EloquentSpatial\Objects\Point as PointObject;

class Point extends Model
{
    use HasSpatial;

    protected $fillable = [
        'name',
        'description',
        'latitude',
        'longitude',
        'location',
        'user_id',
        'image_string',
    ];

    protected $casts = [
        'location' => PointObject::class,
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
