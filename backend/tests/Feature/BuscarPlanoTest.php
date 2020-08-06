<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;

class BuscarPlanoTest extends TestCase
{
    use DatabaseTransactions;

    public function testVerificaSeRotaRetornaPlanoCorreto()
    {
        $this->seed();

        $this->withoutExceptionHandling();

        $response = $this->json('GET', '/api/plano');

        $response->assertStatus(200);
    }
}
