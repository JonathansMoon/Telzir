<?php

namespace Tests\Feature;

use App\Http\Controllers\Api\LigacaoController;
use App\Http\Requests\LigacaoRequest;
use JMac\Testing\Traits\AdditionalAssertions;
use Tests\TestCase;


class ValidationTest extends TestCase
{
    use AdditionalAssertions;

    public function LigacaoFormRequest()
    {
        $this->assertActionUsesFormRequest(
            LigacaoController::class,
            'valorDaLigacao',
            LigacaoRequest::class
        );
    }

    protected function setUp(): void
    {
        parent::setUp();

        $this->subject = new LigacaoRequest();
    }

    public function testVerifaSeValidacaoEstaIntegra()
    {
        $this->assertEquals([
            "plano"             => "required|numeric",
            "minutos"           => "required|numeric",
            "codigo_origem"     => "required|exists:codigos,id",
            "codigo_destino"    => "required|exists:codigos,id"
    ], $this->subject->rules());
    }
}
