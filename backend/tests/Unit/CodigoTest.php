<?php

namespace Tests\Unit;

use App\Models\Codigo;
use PHPUnit\Framework\TestCase;

class CodigoTest extends TestCase
{
    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function testVerificaOsCampoDaTabelaCodigo()
    {
        $codigo = new Codigo();

        $expected = [
            'codigo'
        ];

        $arrayCompared = array_diff($expected, $codigo->getFillable());

        $this->assertEquals(0, count($arrayCompared));
    }
}
