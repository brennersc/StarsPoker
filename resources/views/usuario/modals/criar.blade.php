<div class="modal fade" tabindex="-1" role="dialog" id="dlgUsuario">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content text-white bg-dark border-light">
            <form class="form-horizontal" id="formUsuario" enctype="multipart/form-data">
                @csrf
                <div class="modal-header">
                    <h5 class="modal-title">Novo Usuário</h5>
                </div>
                <div class="modal-body">
                    <input type="hidden" id="id" class="form-control bg-dark text-white">

                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="nome" class="control-label">Nome *</label>
                            <div class="input-group">
                                <input type="text" class="form-control bg-dark text-white " id="nome" placeholder="Nome do Usuário">
                            </div>
                            <span class='text-danger' id='nomeError'></span>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="cpf" class="control-label">CPF *</label>
                            <div class="input-group">
                                <input type="text" class="form-control bg-dark text-white" id="cpf" data-mask="000.000.000-00">
                            </div>
                            <span class='text-danger' id='cpfError'></span>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="email" class="control-label">Email *</label>
                            <div class="input-group">
                                <input type="email" class="form-control bg-dark text-white" id="email" placeholder="Email">
                            </div>
                            <span class='text-danger' id='emailError'></span>
                        </div>
                        <div class="form-group col-md-3">
                            <label for="codigo" class="control-label">Codigo *</label>
                            <div class="input-group">
                                <input type="number" class="form-control bg-dark text-white" id="codigo">
                            </div>
                            <span class='text-danger' id='codigoError'></span>
                        </div>
                        <div class="form-group col-md-3">
                            <label for="telefone" class="control-label">Telefone *</label>
                            <div class="input-group">
                                <input type="text" class="form-control bg-dark text-white" id="telefone" data-mask="(00) 00000-0000">
                            </div>
                            <span class='text-danger' id='telefoneError'></span>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-group col-md-2">
                            <label for="cep" class="control-label">CEP *</label>
                            <div class="input-group">
                                <input type="text" class="form-control bg-dark text-white" id="cep" data-mask="00000-000">
                            </div>
                            <span class='text-danger' id='cepError'></span>
                        </div>
                        <div class="form-group col-md-5">
                            <label for="rua" class="control-label">Rua *</label>
                            <div class="input-group">
                                <input type="text" class="form-control bg-dark text-white" id="rua" readonly>
                            </div>
                            <span class='text-danger' id='ruaError'></span>
                        </div>
                        <div class="form-group col-md-5">
                            <label for="bairro" class="control-label">Bairro *</label>
                            <div class="input-group">
                                <input type="text" class="form-control bg-dark text-white" id="bairro" readonly>
                            </div>
                            <span class='text-danger' id='bairroError'></span>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-5">
                            <label for="cidade" class="control-label">Cidade *</label>
                            <div class="input-group">
                                <input type="text" class="form-control bg-dark text-white" id="cidade" readonly>
                            </div>
                            <span class='text-danger' id='cidadeError'></span>
                        </div>
                        <div class="form-group col-md-2">
                            <label for="estado" class="control-label">Estado *</label>
                            <div class="input-group">
                                <input type="text" class="form-control bg-dark text-white" id="estado" readonly>
                            </div>
                            <span class='text-danger' id='estadoError'></span>
                        </div>
                        <div class="form-group col-md-2">
                            <label for="numero" class="control-label">Numero *</label>
                            <div class="input-group">
                                <input type="text" class="form-control bg-dark text-white" id="numero">
                            </div>
                            <span class='text-danger' id='numeroError'></span>
                        </div>
                        <div class="form-group col-md-3">
                            <label for="complemento" class="control-label">Complemento *</label>
                            <div class="input-group">
                                <input type="text" class="form-control bg-dark text-white" id="complemento">
                            </div>
                            <span class='text-danger' id='complementoError'></span>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-12" id="selectEmpresas">
                            <label for="empresa_id" class="control-label" >Selecione a Empresa *</label>
                            <select class="form-control bg-dark text-white" id="empresa_id">
                                <option selected disabled> Selecione... </option>
                            </select>
                            <span class='text-danger' id='empresa_idError'></span>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-success">Salvar</button>
                    <button type="cancel" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                </div>
            </form>
        </div>
    </div>
</div>
