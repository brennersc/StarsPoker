@extends('layouts.app', ["current" => "empresa"])

@section('content')
    <div class="card border border-dark text-white bg-dark">
        <div class="card-header">
            <div class="row">
                <div class="col-md-7 col-sm-12">
                    <h3>Empresas</h3>
                </div>
            </div>
        </div>
        <div class="card-body table-responsive">
            <div id="retornar" class="procurar"></div>
            <table class="table table-ordered table-hover table-striped table-dark" id="tabelaEmpresa">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Empresa</th>
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
            <button class="btn btn-sm btn-primary" onclick="novaEmpresa()" role="button">Nova Empresa</a>
        </div>
    </div>
    <script src="{{ asset('js/empresa.js') }}" type="text/javascript"></script>
    
@endsection
@component('empresa.modals.criar') @endcomponent
@component('componentes.excluir') @endcomponent
@component('empresa.modals.info') @endcomponent