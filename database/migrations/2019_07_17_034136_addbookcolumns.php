<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Addbookcolumns extends Migration
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
                $table->integer('total_chapter_numbers')->default(1)->unsigned();
                 $table->integer('max_level')->default(1)->unsigned();
        });
    
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        Schema::table('books', function (Blueprint $table) {
                $table->dropColumn('total_chapter_numbers');
                $table->dropColumn('max_level');
        });
    }
}
