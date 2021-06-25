<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Usuario;

class UsuarioController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $usuario = Usuario::all();
            return json_encode($usuario);
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
                'codigo' => 'required|unique:usuarios',
                'nome' => 'required',
                'cpf' => 'required|cpf|unique:usuarios',
                'email' => 'required|email|unique:usuarios',
                'telefone' => 'required|celular_com_ddd',
                'cep' => 'required|formato_cep',
                'rua' => 'required',
                'bairro' => 'required',
                'cidade' => 'required',
                'estado' => 'required',
                'numero' => 'required',
                'complemento' => 'required',
                'empresa_id' => 'required'
            ],
            [
                'required' => 'O campo :attribute é obrigatorio!',
                'email' => 'O campo :attribute não é valido!',
                'cpf' => 'O campo :attribute não é valido!',
                'unique' => 'O campo :attribute informado já existe!',
            ],
        );

        try {
            $usuario = Usuario::create($request->all());
            $usuario->empresa_id = $request->empresa_id;
            $usuario->save();
            return json_encode($usuario);
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
            $usuario = Usuario::find($id);
            $usuario->load('empresa');
            return json_encode($usuario);
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
                'codigo' => 'required|unique:usuarios,codigo,' . $id . '',
                'nome' => 'required',
                'cpf' => 'required|cpf|unique:usuarios,cpf,' . $id . '',
                'email' => 'required|email|unique:usuarios,email,' . $id . '',
                'telefone' => 'required|celular_com_ddd|unique:usuarios,telefone,' . $id . '',
                'cep' => 'required|formato_cep',
                'rua' => 'required',
                'bairro' => 'required',
                'cidade' => 'required',
                'estado' => 'required',
                'numero' => 'required',
                'complemento' => 'required',
                'empresa_id' => 'required'
            ],
            [
                'required' => 'O campo :attribute é obrigatorio!',
                'email' => 'O campo :attribute não é valido!',
                'cpf' => 'O campo :attribute não é valido!',
                'unique' => 'O campo :attribute informado já existe!',
            ],
        );

        try {
            $usuario = Usuario::findOrFail($id);
            //$usuario->empresa_id = $request->empresa_id;
            $usuario = $usuario->update($request->all());
            return json_encode($usuario);
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
            $usuario = Usuario::findOrFail($id);
            $usuario->delete();
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
