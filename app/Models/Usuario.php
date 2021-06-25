<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    use HasFactory;

    protected $table = 'usuarios';

    public $primaryKey = 'id';

    protected $keyType = 'bigInteger';

    protected $casts = [
        'id'        => 'integer',
        'codigo'    => 'integer',
        'cpf'       => 'string',
        'nome'      => 'string',
        'email'     => 'string',
        'telefone'  => 'string',
        'cep'       => 'string',
        'rua'       => 'string',
        'bairro'  => 'string',
        'cidade'  => 'string',
        'estado'  => 'string',
        'numero'  => 'string',
        'complemento'  => 'string',
        'empresa_id'   => 'integer'
    ];

    protected $fillable = [
        'id', 'codigo', 'cpf', 'nome', 'email', 'telefone', 
        'cep','rua','bairro','cidade','estado','numero','complemento','empresa_id'
    ];
    
    public function empresa()
    {
        return $this->belongsTo('\App\Models\Empresa', 'empresa_id', 'id');
    }
}
