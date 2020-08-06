<?php

namespace Tests\Unit;

use App\Models\Plano;
use PHPUnit\Framework\TestCase;

class PlanoTest extends TestCase
{
    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function testVerificaOsCampoDaTabelaPlano()
    {
        $plano = new Plano();

        $expected = [
            'plano',
            'minutos'
        ];

        $arrayCompared = array_diff($expected, $plano->getFillable());

        $this->assertEquals(0, count($arrayCompared));
    }
}
