<?php

namespace Tests\Unit;

use App\Models\Taxa;
use PHPUnit\Framework\TestCase;

class TaxaTest extends TestCase
{
    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function testVerificaOsCampoDaTabelaTaxa()
    {
        $taxa = new Taxa();

        $expected = [
            'descricao',
            'taxa',
            'codigo_origem',
            'codigo_destino'
        ];

        $arrayCompared = array_diff($expected, $taxa->getFillable());

        $this->assertEquals(0, count($arrayCompared));
    }
}
