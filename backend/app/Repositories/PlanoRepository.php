<?php

namespace App\Repositories;

use Cache;
use App\Repositories\AbstractRepository;

class PlanoRepository extends AbstractRepository
{

    public function getResult()
    {
        cache([
            'plano' =>
            $this->model->first()->minutos
        ], 1800);

        return cache('plano');
    }
}
