<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Taxa extends Model
{
    protected $fillable = ['descricao', 'taxa', 'codigo_origem', 'codigo_destino'];

    public function Codigo() {
        $this->hasOne(Codigo::class);
    }
}
