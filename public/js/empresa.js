$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});

//ABRIR MODAL
var novaEmpresa = function() {
    $('.modal-title').text('Nova Empresa');
    $('#id').val('');
    $('#codigo').val('');
    $('#nome').val('');
    $('#email').val('');
    $('#cnpj').val('');
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

    $('#dlgEmpresa').modal('show');
};

//LISTA Empresas
function carregarEmpresa() {
    $.getJSON('/api/empresa', function(empresa) {
        for (i = 0; i < empresa.length; i++) {
            linha = montarLinha(empresa[i]);
            $('#tabelaEmpresa>tbody').append(linha);
        }
    });
}

//Montar Lista Empresas
function montarLinha(empresa) {
    var linha =
        "<tr>" +
            "<td>" + empresa.id + "</td>" +
            "<td>" + empresa.nome + "</td>" +
            "<td>" + empresa.email + "</td>" +
            "<td>" + empresa.cnpj + "</td>" +
            "<td>" +
                '<div class="btn-group" role="group" aria-label="Basic example">' +
                    '<button class="btn btn-sm btn-primary" onClick="editar(' + empresa.id + ')"><i class="far fa-edit"></i> Editar </button> ' +
                    '<button class="btn btn-sm btn-danger" onClick="modalremover(' + empresa.id + ')"><i class="far fa-trash-alt"></i> Apagar </button> ' +
                    '<button class="btn btn-sm btn-info" onClick="detalhes(' + empresa.id + ')"><i class="far fa-trash-alt"></i> Info </button> ' +
                '</div>' +
            "</td>" +
        "</tr>";
    return linha;
}

//CHAMAR MODAL DADOS Empresas SELECIONADO
var editar = function(id) {
    $.getJSON('/api/empresa/' + id, function(data) {        
        $('.modal-title').text('Editar Empreasa ' + data.nome);
        $('#id').val(data.id);
        $('#nome').val(data.nome);
        $('#email').val(data.email);
        $('#codigo').val(data.codigo);
        $('#cnpj').val(data.cnpj);
        $('#telefone').val(data.telefone);
        $('#cep').val(data.cep);
        $('#cidade').val(data.cidade);
        $('#estado').val(data.estado);
        $('#rua').val(data.rua);
        $('#bairro').val(data.bairro);
        $('#numero').val(data.numero);
        $('#complemento').val(data.complemento);
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
        $('#dlgEmpresa').modal('show');
    });
}

//EXIBIR INFOMAÇÕES
var detalhes = function(id) {
    $('.linhaColaboradores').remove();  
    var linha = null; 
    $.getJSON('/api/empresa/' + id, function(data) {
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
        $('.collapse').removeClass('show');
        for (i = 0; i < data.usuarios.length; i++) {
            linha =
            "<div class='col-6 linhaColaboradores'>"+
                "<div class='card text-white bg-dark border-light'>"+
                    "<div class='card-body'>" +
                        "<h5 class='card-title'>" + data.usuarios[i].nome + "</h5>"+
                        "<p class='card-text'> <b>Email:</b> "+ data.usuarios[i].email +  " </p>"+
                        "<p class='card-text'> <b>CPF:</b> " + data.usuarios[i].cpf + "</p>"+
                        "<p class='card-text'> <b>CPF:</b> " + data.usuarios[i].telefone + "</p>"+
                        "<p>"+
                            "<a class='btn btn-primary' data-toggle='collapse' href='#collapseExample"+data.usuarios[i].id+"' role='button' aria-expanded='false' aria-controls='collapseExample'>Ver mais informações</a>"+
                        "</p>"+
                        "<div class='collapse collapse' id='collapseExample"+data.usuarios[i].id+"'>"+
                            "<div class='card card-body text-white bg-dark border-light'>"+
                                "<h6><b>Cep: </b><span class='card-text'>" + data.usuarios[i].cep + "</span></h6>"+
                                "<h6><b>Cidade: </b><span class='card-text'>" + data.usuarios[i].cidade + "</span></h6>"+
                                "<h6><b>Estado: </b><span class='card-text'>" + data.usuarios[i].etado + "</span></h6>"+
                                "<h6><b>Rua: </b><span class='card-text'>" + data.usuarios[i].rua + "</span></h6>"+
                                "<h6><b>Bairro: </b><span class='card-text'>" + data.usuarios[i].bairro + "</span></h6>"+
                                "<h6><b>Numero: </b><span class='card-text'>" + data.usuarios[i].numero + "</span></h6>"+
                                "<h6><b>Complemento: </b><span class='card-text'>" + data.usuarios[i].complemento + "</span></h6>"+
                            "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>"+
            "</div>";
            $('#colaboradoes').append(linha);
        }
        $('#detalhes').modal('show');
    });    
}

//CHAMAR MODAL DADOS REMOVER Empresa SELECIONADO
var modalremover = function(id) {
    $('#linha').remove();
    let exlinha;
    $.getJSON('/api/empresa/' + id, function(data) {
        id = data.id;
        nome = data.nome;
        exlinha =
            '<div class="row" id="linha">' +
            '<div class="col-9">' +
            '<strong> Tem certeza que deseja excluir a Empresa ' + nome + ' e seus colaboradores?</strong>' +
            '</div>' +
            '<div class="col-3">' +
            '<button id="apagar" class="btn btn-md btn-danger" onclick="remover(' + id + ')">  Apagar </button>' +
            '</div>' +
            '</div>';
        $('#excluir').append(exlinha);
        $('#remover').modal('show');
    });
}

//REMOVER Empresa
var remover = function(id) {
    $('#linha').remove();
    $('#remover').modal('hide');
    $.ajax({
        type: "DELETE",
        url: "/api/empresa/" + id,
        context: this,
        success: function() {
            linhas = $("#tabelaEmpresa>tbody>tr");
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

//CRIAR Empresa
function criarEmpresa() {
    empresa = {
        id: $("#id").val(),
        nome: $("#nome").val(),
        email: $("#email").val(),
        codigo: $('#codigo').val(),
        cnpj: $('#cnpj').val(),
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
        url: "/api/empresa",
        context: this,
        data: empresa,
        success: function(data) {
            empresa = JSON.parse(data);
            linha = montarLinha(empresa);
            $('#tabelaEmpresa>tbody').append(linha);
            $("#dlgEmpresa").modal('hide');
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

//UPADATE Empresa
function salvarEmpresa() {
    empresa = {
        id: $("#id").val(),
        nome: $("#nome").val(),
        email: $("#email").val(),
        codigo: $('#codigo').val(),
        cnpj: $('#cnpj').val(),
        telefone: $('#telefone').val(),
        cep: $('#cep').val(),
        cidade: $('#cidade').val(),
        estado: $('#estado').val(),
        rua: $('#rua').val(),
        bairro: $('#bairro').val(),
        numero: $('#numero').val(),
        complemento: $('#complemento').val()
    };
    $.ajax({
        type: "PUT",
        url: "/api/empresa/" + empresa.id,
        context: this,
        data: empresa,
        success: function(data) {
            empresa = JSON.parse(data);
            linhas = $("#tabelaEmpresa>tbody>tr");
            e = linhas.filter(function(i, e) {
                return (e.cells[0].textContent == empresa.id);
            });
            if(e) {
                e[0].cells[0].textContent = empresa.id;
                e[0].cells[1].textContent = empresa.nome;
                e[0].cells[2].textContent = empresa.email;
                e[0].cells[3].textContent = empresa.cnpj;
            }else{
                document.location.reload(true);
            }
            $("#dlgEmpresa").modal('hide');
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
$("#formEmpresa").submit(function(event) {
    event.preventDefault();
    if ($("#id").val() != '') {
        salvarEmpresa();
    } else {
        criarEmpresa();
    }
});

//CARREGAR LISTA
$(function() {
    carregarEmpresa();
})