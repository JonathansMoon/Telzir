<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Codigo;

class CodigoController extends Controller
{
    public function __construct(Codigo $codigo)
    {
        $this->codigo = $codigo;
    }

    public function buscarCodigo()
    {
        try {
            cache([
                'codigo' =>
                $this->codigo->all()
            ], 1800);
        } catch (\Exception $e) {
            $error = "Erro de conexão com o banco de dados: " . $e;
            return response()->json($error, 500);
        }

        return response()->json(cache('codigo'), 200);
    }
}
