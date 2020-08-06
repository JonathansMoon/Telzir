<?php
namespace App\Repositories;

use Cache;
use App\Repositories\AbstractRepository;

class TaxaRepository extends AbstractRepository {

    public function getResult() {
        cache([
            'taxa'=>
            $this->model->first()->taxa
        ], 60);

        return cache('taxa');
    }
}
