@extends('layouts.app', ["current" => "usuario"])

@section('content')
    <div class="card text-white bg-dark">
        <div class="card-header">
            <div class="row">
                <div class="col-md-7 col-sm-12">
                    <h3>Usuários</h3>
                </div>
            </div>
        </div>
        <div class="card-body table-responsive">
            <div id="retornar" class="procurar"></div>
            <table class="table table-ordered table-hover table-striped table-dark" id="tabelaUsuario">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>CPF</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>

        </div>
        <div class="card-footer">
            <button class="btn btn-sm btn-primary novoUsuario" onclick="novoUsuario()" role="button" value=""></button>
        </div>
    </div>
    <script src="{{ asset('js/usuario.js') }}" type="text/javascript"></script>

@endsection
@component('usuario.modals.criar') @endcomponent
@component('componentes.excluir') @endcomponent
@component('usuario.modals.info') @endcomponent