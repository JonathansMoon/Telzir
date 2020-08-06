<?php
namespace App\Repositories;

use Illuminate\Database\Eloquent\Model;

abstract class AbstractRepository {

    protected $model;

    public function __construct(Model $model) {
        $this->model = $model;
    }

    public function selectConditions($conditions) {
        if(!is_null($conditions) and isset($conditions)){
            foreach ($conditions as $key => $value) {
                $this->model = $this->model->where($key, $value);
            }
        }
    }

    public function getResult() {
        return $this->model;
    }
}
