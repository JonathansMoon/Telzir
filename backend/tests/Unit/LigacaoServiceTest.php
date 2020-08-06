<?php

namespace Tests\Unit;

use App\Services\LigacaoService;
use PHPUnit\Framework\TestCase;

class LigacaoServiceTest extends TestCase
{
    protected function setUp(): void
    {
        parent::setUp();

        $this->object = new LigacaoService();
    }

    public function testVerificaSeCalculoEstaCorreto()
    {
        $this->assertEquals(
            [
                'comPlano' => 37.4,
                'semPlano' => 136,
            ],
            $this->object->calculoDoValor(1.7, 60, 80));
    }
}
