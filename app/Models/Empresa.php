<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Empresa extends Model
{
    use HasFactory;

    protected $table = 'empresas';

    public $primaryKey = 'id';

    protected $keyType = 'bigInteger';

    protected $casts = [
        'id'        => 'integer',
        'codigo'    => 'integer',
        'cnpj'       => 'string',
        'nome'      => 'string',
        'email'     => 'string',
        'telefone'  => 'string',
        'cep'       => 'string',
        'rua'       => 'string',
        'bairro'  => 'string',
        'cidade'  => 'string',
        'estado'  => 'string',
        'numero'  => 'string',
        'complemento' => 'string'
    ];

    protected $fillable = [
        'id', 'codigo', 'cnpj', 'nome', 'email', 'telefone', 'cep','rua','bairro','cidade','estado','numero','complemento'
    ];
    
    public function usuarios()
    {
        return $this->hasMany('\App\Models\Usuario', 'empresa_id', 'id');
    }
}
