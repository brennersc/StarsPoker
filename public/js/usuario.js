$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});

//ABRIR MODAL
var novoUsuario = function() {
    $('.modal-title').text('Novo Usuário ');
    $('#id').val('');
    $('#codigo').val('');
    $('#nome').val('');
    $('#email').val('');
    $('#cpf').val('');
    $('#telefone').val('');
    $('#cep').val('');
    $('#cidade').val('');
    $('#estado').val('');
    $('#rua').val('');
    $('#bairro').val('');
    $('#numero').val('');
    $('#complemento').val('');
    $('#empresa_id').val('Selecione...');
    $('#codigoError').addClass('d-none');
    $('#cpfError').addClass('d-none');
    $('#nomeError').addClass('d-none');
    $('#emailError').addClass('d-none');
    $('#telefoneError').addClass('d-none');
    $('#cepError').addClass('d-none');
    $('#cidadeError').addClass('d-none');
    $('#estadoError').addClass('d-none');
    $('#ruaError').addClass('d-none');
    $('#bairroError').addClass('d-none');
    $('#numeroError').addClass('d-none');
    $('#complementoError').addClass('d-none');
    $('#empresa_idError').addClass('d-none');
    $('#dlgUsuario').modal('show');
};

//LISTA USUARIOS
function carregarUsuario() {
    $.getJSON('/api/usuario', function(usuario) {
        for (i = 0; i < usuario.length; i++) {
            linha = montarLinha(usuario[i]);
            $('#tabelaUsuario>tbody').append(linha);
        }
    });
}

//Montar Lista Usuarios
function montarLinha(usuario) {
    var linha =
        "<tr>" +
        "<td>" + usuario.id + "</td>" +
        "<td>" + usuario.nome + "</td>" +
        "<td>" + usuario.email + "</td>" +
        "<td>" + usuario.cpf + "</td>" +
        "<td>" +
        '<div class="btn-group" role="group" aria-label="Basic example">' +
        '<button class="btn btn-sm btn-primary" onClick="editar(' + usuario.id + ')"><i class="far fa-edit"></i> Editar </button> ' +
        '<button class="btn btn-sm btn-danger" onClick="modalremover(' + usuario.id + ')"><i class="far fa-trash-alt"></i> Apagar </button> ' +
        '<button class="btn btn-sm btn-info" onClick="detalhes(' + usuario.id + ')"><i class="far fa-trash-alt"></i> Info </button> ' +
        '</div>' +
        "</td>" +
        "</tr>";
    return linha;
}

//EXIBIR INFOMAÇÕES 
var detalhes = function(id) {
    $('.linhaColaboradores').remove();  
    var linha = null; 
    $.getJSON('/api/usuario/' + id, function(data) {
        $('.modal-title').text('Informações ' + data.nome);
        $('#modalnome').text(data.nome);
        $('#modalemail').text(data.email);
        $('#modalcodigo').text(data.codigo);
        $('#modalcnpj').text(data.cnpj);
        $('#modaltelefone').text(data.telefone);
        $('#modalcep').text(data.cep);
        $('#modalcidade').text(data.cidade);
        $('#modalestado').text(data.estado);
        $('#modalrua').text(data.rua);
        $('#modalbairro').text(data.bairro);
        $('#modalnumero').text(data.numero);
        $('#modalcomplemento').text(data.complemento);

        $('#modalNomeEmpresa').text(data.empresa.nome);
        $('#modalEmailEmpresa').text(data.empresa.email);
        $('#modalCNPJEmpresa').text(data.empresa.cnpj);
        $('#modalTelefoneEmpresa').text(data.empresa.telefone);

        $('#modalCepEmpresa').text(data.empresa.cep);
        $('#modalCidadeEmpresa').text(data.empresa.cidade);
        $('#modalEstadoEmpresa').text(data.empresa.estado);
        $('#modalRuaEmpresa').text(data.empresa.rua);
        $('#modalBairroEmpresa').text(data.empresa.bairro);
        $('#modalNumeroEmpresa').text(data.empresa.numero);
        $('#modalComplementoEmpresa').text(data.empresa.complemento);
        $('.collapse').removeClass('show');

        $('#detalhes').modal('show');
    });    
}

//UPADATE USUARIO
function salvarUsuario() {
    usuario = {
        id: $("#id").val(),
        nome: $("#nome").val(),
        email: $("#email").val(),
        codigo: $('#codigo').val(),
        cpf: $('#cpf').val(),
        telefone: $('#telefone').val(),
        cep: $('#cep').val(),
        cidade: $('#cidade').val(),
        estado: $('#estado').val(),
        rua: $('#rua').val(),
        bairro: $('#bairro').val(),
        numero: $('#numero').val(),
        complemento: $('#complemento').val(),
        empresa_id: $('#empresa_id').val()
    };
    $.ajax({
        type: "PUT",
        url: "/api/usuario/" + usuario.id,
        context: this,
        data: usuario,
        success: function(data) {
            usuario = JSON.parse(data);
            linhas = $("#tabelaUsuario>tbody>tr");
            e = linhas.filter(function(i, e) {
                return (e.cells[0].textContent == usuario.id);
            });
            if (e && e.cells) {
                e[0].cells[0].textContent = usuario.id;
                e[0].cells[1].textContent = usuario.nome;
                e[0].cells[2].textContent = usuario.email;
                e[0].cells[3].textContent = usuario.cpf;
            }else{
                document.location.reload(true);
            }

            $("#dlgUsuario").modal('hide');
        },
        error: function(data) {
            $('#codigoError').addClass('d-none');
            $('#cpfError').addClass('d-none');
            $('#nomeError').addClass('d-none');
            $('#emailError').addClass('d-none');
            $('#telefoneError').addClass('d-none');
            $('#cepError').addClass('d-none');
            $('#cidadeError').addClass('d-none');
            $('#estadoError').addClass('d-none');
            $('#ruaError').addClass('d-none');
            $('#bairroError').addClass('d-none');
            $('#numeroError').addClass('d-none');
            $('#complementoError').addClass('d-none');
            $('#empresa_idError').addClass('d-none');
            var errors = data.responseJSON;
            if ($.isEmptyObject(errors) == false) {
                $.each(errors.errors, function(key, value) {
                    var ErrorID = '#' + key + 'Error';
                    $(ErrorID).removeClass("d-none");
                    $(ErrorID).text(value)
                })
            }
        }
    });
}

//LISTA empresa
function carregarEmpresa() {
    $.getJSON('/api/empresa', function(empresa) {
        if(empresa.length > 0){
            $('.novoUsuario').prop("disabled",false);
            $('.novoUsuario').text("Novo Usuário");
        }else{
            $('.novoUsuario').prop("disabled",true);
            $('.novoUsuario').text("Primeiro Cadastre uma Empresa");            
        }
        for (i = 0; i < empresa.length; i++) {
            select = montarSelect(empresa[i]);
            $('#selectEmpresas>select').append(select);
        }
    });
}
//Montar Lista Empresas
function montarSelect(empresa) {
    var select =
        "<option value='" + empresa.id + "'>" +
            empresa.nome +
        "</option>";
    return select;
}

//CHAMAR MODAL DADOS USUARIO SELECIONADO
var editar = function(id) {
    $.getJSON('/api/usuario/' + id, function(data) {
        $('#id').val(data.id);
        $('#nome').val(data.nome);
        $('#email').val(data.email);
        $('#codigo').val(data.codigo);
        $('#cpf').val(data.cpf);
        $('#telefone').val(data.telefone);
        $('#cep').val(data.cep);
        $('#cidade').val(data.cidade);
        $('#estado').val(data.estado);
        $('#rua').val(data.rua);
        $('#bairro').val(data.bairro);
        $('#numero').val(data.numero);
        $('#complemento').val(data.complemento);
        $('#empresa_id').val(data.empresa_id);
        $('#codigoError').addClass('d-none');
        $('#cpfError').addClass('d-none');
        $('#nomeError').addClass('d-none');
        $('#emailError').addClass('d-none');
        $('#telefoneError').addClass('d-none');
        $('#cepError').addClass('d-none');
        $('#cidadeError').addClass('d-none');
        $('#estadoError').addClass('d-none');
        $('#ruaError').addClass('d-none');
        $('#bairroError').addClass('d-none');
        $('#numeroError').addClass('d-none');
        $('#complementoError').addClass('d-none');
        $('#dlgUsuario').modal('show');
    });
}

//CHAMAR MODAL DADOS REMOVER USUARIO SELECIONADO
var modalremover = function(id) {
    $('#linha').remove();
    $exlinha = 0;
    $.getJSON('/api/usuario/' + id, function(data) {
        id = data.id;
        nome = data.nome;
        exlinha =
            '<div class="row" id="linha">' +
            '<div class="col-9">' +
            '<strong> Tem certeza que deseja excluir o usuário: ' + nome + '?</strong>' +
            '</div>' +
            '<div class="col-3">' +
            '<button id="apagar" class="btn btn-md btn-danger" onclick="remover(' + id + ')">  Apagar </button>' +
            '</div>' +
            '</div>';
        $('#excluir').append(exlinha);
        $('#remover').modal('show');
    });
}

//REMOVER USUARIO
var remover = function(id) {
    $('#linha').remove();
    $('#remover').modal('hide');
    $.ajax({
        type: "DELETE",
        url: "/api/usuario/" + id,
        context: this,
        success: function() {
            linhas = $("#tabelaUsuario>tbody>tr");
            e = linhas.filter(function(i, elemento) {
                return elemento.cells[0].textContent == id;
            });
            if (e)
                e.remove();
        },
        error: function(error) {
            console.log(error);
        }
    });
}

//CRIAR USUARIO
function criarusuario() {
    usuario = {
        id: $("#id").val(),
        nome: $("#nome").val(),
        email: $("#email").val(),
        codigo: $('#codigo').val(),
        cpf: $('#cpf').val(),
        telefone: $('#telefone').val(),
        cep: $('#cep').val(),
        cidade: $('#cidade').val(),
        estado: $('#estado').val(),
        rua: $('#rua').val(),
        bairro: $('#bairro').val(),
        numero: $('#numero').val(),
        complemento: $('#complemento').val(),
        empresa_id: $('#empresa_id').val()
    };
    $.ajax({
        type: "POST",
        url: "/api/usuario",
        context: this,
        data: usuario,
        success: function(data) {
            usuario = JSON.parse(data);
            linha = montarLinha(usuario);
            $('#tabelaUsuario>tbody').append(linha);
            $("#dlgUsuario").modal('hide');
        },
        error: function(data) {
            $('#codigoError').addClass('d-none');
            $('#cpfError').addClass('d-none');
            $('#nomeError').addClass('d-none');
            $('#emailError').addClass('d-none');
            $('#telefoneError').addClass('d-none');
            $('#cepError').addClass('d-none');
            $('#cidadeError').addClass('d-none');
            $('#estadoError').addClass('d-none');
            $('#ruaError').addClass('d-none');
            $('#bairroError').addClass('d-none');
            $('#numeroError').addClass('d-none');
            $('#complementoError').addClass('d-none');
            var errors = data.responseJSON;
            if ($.isEmptyObject(errors) == false) {
                $.each(errors.errors, function(key, value) {
                    var ErrorID = '#' + key + 'Error';
                    $(ErrorID).removeClass("d-none");
                    $(ErrorID).text(value)
                })
            }
        }
    });
}

//ENVIAR FORMULARIO 
$("#formUsuario").submit(function(event) {
    event.preventDefault();
    if ($("#id").val() != '') {
        salvarUsuario();
    } else {
        criarusuario();
    }
});

//CARREGAR LISTA
$(function() {
    carregarUsuario();
    carregarEmpresa()
});