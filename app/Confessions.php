<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Confessions extends Model
{
    protected $casts = [
        'id' => 'string'
    ];

    public function likes() {
        return $this->hasMany('App\PostInteraction');
    }
}
