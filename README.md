# Full Cycle 3.0 - Desafio Proxy Reverso
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

## Resultados
Para solucionar o problema, foi criado uma imagem para a aplicação node que se comunica diretamente com o mysql, outra imagem contém o servidor nginx com as configurações de redirecionamento. O docker-compose foi utilizado para gerenciar todos os containers e aplicar configurações de volumes e rede. Para o mysql, foi utilizado um script para criar a tabela no banco automaticamente ao inciar o container.

Para sicronizar as aplicações, foi utilizado o [dockerize](https://github.com/jwilder/dockerize). A aplicação node aguarda o mysql para ser iniciado e o nginx aguarda a aplicação node para ser iniciado.

## Descrição
Nesse desafio você colocará em prática o que aprendemos em relação a utilização do nginx como proxy reverso. A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

O retorno da aplicação node.js para o nginx deverá ser:

```sh
<h1>Full Cycle Rocks!</h1>

- Lista de nomes cadastrada no banco de dados..
```

Gere o docker-compose de uma forma que basta apenas rodarmos: docker-compose up -d que tudo deverá estar funcionando e disponível na porta: 8080.

* A linguagem de programação para este desafio é Node/JavaScript.

## Execução

Requer o [docker](https://www.docker.com/) instalado no máquina local. 

Para executa via clone do projeto, siga as etapas:
Execute via docker-compose

```sh
docker-compose up -d --build
```
