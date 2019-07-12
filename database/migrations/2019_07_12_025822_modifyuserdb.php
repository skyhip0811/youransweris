<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Modifyuserdb extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //add gender column
        Schema::table('users', function (Blueprint $table) {
            $table->char('gender', 2);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //drop gender column
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('votes');
        });
    }
}
