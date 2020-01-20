<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostInteractionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('post_interactions', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();
            $table->uuid("user_id");
            $table->uuid("post_id");
            $table->boolean("like");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('post_interactions');
    }
}
