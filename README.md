<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/d/total.svg" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/v/stable.svg" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/license.svg" alt="License"></a>
</p>

# Instalar projeto </br>
## Para rodar o projeto em sua maquina siga os passos: </br>

1- Instale o XAMPP para que tenha o PHP em sua ultima verção e o banco de dados MYSQL.</br>
	https://www.apachefriends.org/pt_br/index.html

2- Instale o Composer para genteciar suas dependecias PHP.</br>
	https://getcomposer.org/download/

3- Ultilize o Terninal da sua maquina para</br>

	- Instale o FrameWork Laravel
		composer global require laravel/installer

	- Clone o Projeto
		git clone {LINK AQUI}

	- Entre no Projeto pelo terminal e execute
		composer install
	
	- Gere a key para ultilizar o projeto
		php artisan key:generate
     
4 - Altere o arquivo .env.example para .env </br>

5 - Altere o conteudo do arquivo .env com as configurações de banco de dados </br>
    - banco de dados </br>
    DB_CONNECTION=mysql </br>
    DB_HOST=127.0.0.1 </br>
    DB_PORT=3306 </br>
    DB_DATABASE= {SEU BANCO} </br>
    DB_USERNAME=root </br> 
    DB_PASSWORD= </br>
 </br>

6 - Execute as migrations na linha de comando: php artisan migrate </br>

7 - Inicie a aplicação: php artisan serve </br>

8 - Acesse http://localhost:8000 </br>

</br></br></br>

## Desafio Desenvolvedor Full-Stack - Stars Poker #

## Introdução
Olá, muito obrigado por participar do nosso processo seletivo.
Estamos expandindo nossa equipe de desenvolvimento. Desse modo, buscamos alguém em busca de um aprendizado contínuo e disposto a atuar auxiliando nas demandas de frontend e backend  da nossa equipe.

Nesse sentido, montamos esse desafio para saber um pouco mais sobre seus conhecimentos na área. 

## Instruções
Para o frontend desse desafio deve ser utilizado javascript/html/css e é permitida a utilização de qualquer tipo de framework. 

Quanto ao backend pode ser desenvolvido na linguagem em que você se sentir mais confortável.

## Desafio
No Grupo Stars possuímos diversas empresas e gostaríamos de cadastrar essas empresas e os colaboradores que fazem parte dela. Dessa forma, sua missão é criar uma solução que permita cadastrar/visualizar nossas empresas e seus respectivos colaboradores. 

Um empresa deve possuir os seguintes campos: 
    -Código
    -CNPJ
    -Nome
    -Email 
    -Telefone 
    -Endereço

Um colaborador deve possuir os seguintes campos:
    -Código
    -CPF
    -Nome 
    -Email
    -Telefone
    -Endereço
    -Empresa 
