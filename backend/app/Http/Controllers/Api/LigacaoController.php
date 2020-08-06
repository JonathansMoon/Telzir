<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\LigacaoRequest;
use App\Repositories\TaxaRepository;
use App\Repositories\PlanoRepository;
use App\Services\LigacaoService;
use App\Models\Plano;
use App\Models\Taxa;
use Cache;

class LigacaoController extends Controller
{
    public function __construct(Plano $plano, Taxa $taxa)
    {
        $this->plano = $plano;
        $this->taxa = $taxa;
    }

    public function bucarValorDaLigacao(LigacaoRequest $request)
    {
        try {
            $taxaRepository = new TaxaRepository($this->taxa);
            $taxaRepository->selectConditions(collect($request->only(['codigo_origem', 'codigo_destino'])));
            $taxa = $taxaRepository->getResult();
        } catch (\Exception $e) {
            return response()->json(['errors' => 'Que pena, ainda não trabalhamos com estes DDDs']);
        }

        $planoRepository = new PlanoRepository($this->plano);
        $planoRepository->selectConditions(collect(['id' => $request->plano]));
        $plano = $planoRepository->getResult();

        $calcularValor = new LigacaoService();
        $valores = $calcularValor->calculoDoValor($taxa, $plano, $request->minutos);

        return response()->json($valores, 200);
    }
}
