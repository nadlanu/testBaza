<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateConfessionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('confessions', function (Blueprint $table) {
            $table->uuid('id');
            // $table->uuid('user_id');
            $table->string('name');
            $table->integer('likes')->default(0);
            $table->integer('dislikes')->default(0);
            $table->string('text');
            $table->timestamps();
            // also add people who liked and location
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('confessions');
    }
}
