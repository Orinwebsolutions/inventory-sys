<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
    public function orderinvoice()
    {
        return $this->hasOne(Order::class);
    }
}
