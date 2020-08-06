<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Plano;

class PlanoController extends Controller
{
    public function __construct(Plano $plano) {
        $this->plano = $plano;
    }

    public function buscarPlano() {
        try {
            $plano = $this->plano->all();
        } catch (\Exception $e) {
            $error = "Erro de conexão com o banco de dados: " . $e;
            return response()->json($error, 500);
        }

        return response()->json($plano, 200);
    }
}
