<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Plano;

class PlanoController extends Controller
{
    public function __construct(Plano $plano)
    {
        $this->plano = $plano;
    }

    public function buscarPlano()
    {
        try {
            cache([
                'plano' =>
                $this->plano->all()
            ], 1800);
        } catch (\Exception $e) {
            $error = "Erro de conexão com o banco de dados: " . $e;
            return response()->json($error, 500);
        }

        return response()->json(cache('plano'), 200);
    }
}
