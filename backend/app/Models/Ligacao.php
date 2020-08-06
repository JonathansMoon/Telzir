<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Ligacao extends Model
{
    protected $fillable = ['minutos_falados', 'codigo_plano', 'codigo_taxa'];

    public function Taxa() {
        $this->hasOne(Taxa::class);
    }

    public function Plano() {
        $this->hasOne(Plano::class);
    }
}
