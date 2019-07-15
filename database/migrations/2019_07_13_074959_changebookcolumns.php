<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Changebookcolumns extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::table('books', function (Blueprint $table) {
            $table->string('cover')->default('')->change();
        });

        Schema::table('chapters', function (Blueprint $table) {
            $table->string('question')->default('')->change();
            $table->string('additionalinfo')->default('')->nullable()->change();
            $table->string('previous_chapter_id')->nullable()->change();
            $table->string('answer')->default('')->nullable()->change();
            $table->string('endchapter')->default(false)->change();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        
    }
}
