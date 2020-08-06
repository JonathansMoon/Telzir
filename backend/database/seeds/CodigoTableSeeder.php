<?php

use App\Models\Codigo;
use Illuminate\Database\Seeder;

class CodigoTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = array(
            [
                'codigo' => '011',
            ],
            [
                'codigo' => '016',
            ],
            [
                'codigo' => '017',
            ],
            [
                'codigo' => '018',
            ]
        );

        Codigo::insert($data);

    }
}
