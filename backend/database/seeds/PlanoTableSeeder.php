<?php

use App\Models\Plano;
use Illuminate\Database\Seeder;

class PlanoTableSeeder extends Seeder
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
                'plano'     =>  'Plano Trinta',
                'minutos'    =>  '30'
            ],
            [
                'plano'     =>  'Plano Sessenta',
                'minutos'    =>  '60'
            ],
            [
                'plano'     =>  'Plano Cento e vinte',
                'minutos'    =>  '120'
            ],
        );

        Plano::insert($data);
    }
}
