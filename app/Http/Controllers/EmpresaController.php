<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Empresa;

class EmpresaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            return Empresa::all()->toJson();
        } catch (\Exception $e) {
            $json = [
                'success' => false,
                'error' => [
                    'code' => $e->getCode(),
                    'message' => $e->getMessage(),
                ],
            ];
            return response()->json($json, 400);
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        request()->validate(
            [
                'codigo' => 'required|unique:empresas',
                'nome' => 'required',
                'cnpj' => 'required|cnpj|unique:empresas',
                'email' => 'required|email|unique:empresas',
                'telefone' => 'required|celular_com_ddd',
                'cep' => 'required|formato_cep',
                'rua' => 'required',
                'bairro' => 'required',
                'cidade' => 'required',
                'estado' => 'required',
                'numero' => 'required',
                'complemento' => 'required'
                
            ],
            [
                'required' => 'O :attribute é obrigatorio!',
                'email' => 'O :attribute não é valido!',
                'cnpj' => 'O :attribute não é valido!',
                'unique' => 'O :attribute informado já existe!',
            ],
        );
        try {
            $empresa = Empresa::create($request->all());
            $empresa->save();
            return json_encode($empresa);
        } catch (\Exception $e) {
            $json = [
                'success' => false,
                'error' => [
                    'code' => $e->getCode(),
                    'message' => $e->getMessage(),
                ],
            ];
            return response()->json($json, 400);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try {
            $empresa = Empresa::find($id);
            $empresa->load('usuarios');
            return $empresa;
        } catch (\Exception $e) {
            $json = [
                'success' => false,
                'error' => [
                    'code' => $e->getCode(),
                    'message' => $e->getMessage(),
                ],
            ];

            return response()->json($json, 400);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        request()->validate(
            [
                'codigo' => 'required|unique:empresas,codigo,' . $id . '',
                'nome' => 'required',
                'cnpj' => 'required|cnpj|unique:empresas,cnpj,' . $id . '',
                'email' => 'required|email|unique:empresas,email,' . $id . '',
                'telefone' => 'required|celular_com_ddd|unique:empresas,telefone,' . $id . '',
                'cep' => 'required|formato_cep',
                'rua' => 'required',
                'bairro' => 'required',
                'cidade' => 'required',
                'estado' => 'required',
                'numero' => 'required',
                'complemento' => 'required'
            ],
            [
                'required' => 'O :attribute é obrigatorio!',
                'email' => 'O :attribute não é valido!',
                'cnpj' => 'O :attribute não é valido!',
                'unique' => 'O :attribute informado já existe!',
            ],
        );

        try {
            $empresa = Empresa::findOrFail($id);
            $empresa->update($request->all());
            return json_encode($empresa);
        } catch (\Exception $e) {
            $json = [
                'success' => false,
                'error' => [
                    'code' => $e->getCode(),
                    'message' => $e->getMessage(),
                ],
            ];
            return response()->json($json, 400);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $empresa = Empresa::findOrFail($id);
            $empresa->delete();
            return response('OK', 200);
        } catch (\Exception $e) {
            $json = [
                'success' => false,
                'error' => [
                    'code' => $e->getCode(),
                    'message' => $e->getMessage(),
                ],
            ];
            return response()->json($json, 400);
        }
    }
}
