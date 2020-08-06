<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;

class BuscarCodigoTest extends TestCase
{
    use DatabaseTransactions;

    public function testVerificaSeRotaRetornaCodigoCorreto()
    {
        $this->seed();

        $this->withoutExceptionHandling();

        $response = $this->json('GET', '/api/codigo');

        $response->assertStatus(200);
    }
}
