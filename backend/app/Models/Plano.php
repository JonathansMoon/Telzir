<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Plano extends Model
{
    protected $fillable = ['plano', 'minutos'];

    public function Ligacao() {
        $this->belongsTo(Ligacao::class);
    }
}
