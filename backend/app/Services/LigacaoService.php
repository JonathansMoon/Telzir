<?php
namespace App\Services;

class LigacaoService {

    public function calculoDoValor($taxa, $plano, $minutos) {

        $ValorSemPlano = $minutos * $taxa;
        $valorComPlano = 0;

        if($minutos < $plano){
            return ['comPlano' => $valorComPlano, 'semPlano' => $ValorSemPlano];
        }

        $valorComPlano = ($minutos - $plano) * $taxa;
        $valorComPlano += $valorComPlano * 0.1;

        return ['comPlano' => $valorComPlano, 'semPlano' => $ValorSemPlano];
    }
}



