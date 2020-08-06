<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithoutMiddleware;

class LigacaoTest extends TestCase
{
    use DatabaseTransactions;


    public function testVerificaSeRotaRetornaValorCorreto()
    {
        $data = array(
            "plano"             => "2",
            "minutos"           => "80",
            "codigo_origem"     => "1",
            "codigo_destino"    => "3"
        );

        $this->seed();

        $this->withoutExceptionHandling();

        $response = $this->json('GET', '/api/ligacoes', $data);

        $response
            ->assertStatus(200)
            ->assertJson([
                'comPlano' => 37.4,
                'semPlano' => 136,
            ]);
    }
}
