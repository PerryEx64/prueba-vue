<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Iglesia extends Model
{
    use HasFactory;
    protected $table = 'iglesia';
    

    public function region()
    {
        return $this->belongsTo(Region::Class, 'region_id');
    }
}