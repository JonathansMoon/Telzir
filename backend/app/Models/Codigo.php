<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Codigo extends Model
{
    protected $fillable = ['codigo'];

    public function Taxa() {
        return $this->belongsTo(Taxa::class);
    }
}
