<?php

use App\Models\Taxa;
use Illuminate\Database\Seeder;

class TaxaTableSeeder extends Seeder
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
                'descricao'         =>  'ONZE_DEZESSEIS',
                'codigo_origem'     =>  '1',
                'codigo_destino'    =>  '2',
                'taxa'       =>  '1.90'
            ],
            [
                'descricao'         =>  'DEZESSEIS_ONZE',
                'codigo_origem'     =>  '2',
                'codigo_destino'    =>  '1',
                'taxa'       =>  '2.90'
            ],
            [
                'descricao'         =>  'ONZE_DEZESSETE',
                'codigo_origem'     =>  '1',
                'codigo_destino'    =>  '3',
                'taxa'       =>  '1.70'
            ],
            [
                'descricao'         =>  'DEZESSETE_ONZE',
                'codigo_origem'     =>  '3',
                'codigo_destino'    =>  '1',
                'taxa'       =>  '2.70'
            ],
            [
                'descricao'         =>  'ONZE_DEZOITO',
                'codigo_origem'     =>  '1',
                'codigo_destino'    =>  '4',
                'taxa'       =>  '0.90'
            ],
            [
                'descricao'         =>  'DEZOITO_ONZE',
                'codigo_origem'     =>  '4',
                'codigo_destino'    =>  '1',
                'taxa'       =>  '1.90'
            ]
        );

        Taxa::insert($data);
    }
}
