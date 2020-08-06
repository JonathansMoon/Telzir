<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTaxasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('taxas', function (Blueprint $table) {
            $table->id();
            $table->string('descricao');
            $table->float('taxa', 10, 2);
            $table->timestamps();

            $table->unsignedBigInteger('codigo_origem');
            $table->foreign('codigo_origem')->references('id')->on('codigos');

            $table->unsignedBigInteger('codigo_destino');
            $table->foreign('codigo_destino')->references('id')->on('codigos');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('taxas');
    }
}
