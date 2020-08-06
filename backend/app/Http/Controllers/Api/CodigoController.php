<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Codigo;

class CodigoController extends Controller
{
    public function __construct(Codigo $codigo) {
        $this->codigo = $codigo;
    }

    public function buscarCodigo() {
        try {
            $codigo = $this->codigo->all();
        } catch (\Exception $e) {
            $error = "Erro de conexão com o banco de dados: " . $e;
            return response()->json($error, 500);
        }

        return response()->json($codigo, 200);
    }
}
