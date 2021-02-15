# Backend Padre Cícero

## Sistema de gerenciamento de vendas do restaurante Padre Cícero.

## Como executar
```bash
#Clone este repositório
$ git clone https://github.com/patirosa95/padrecicero-backend.git

#Instale as dependências
$ npm install

#Inicie o serviço
$ npm run start

# O servidor irá rodar na porta 3000

```
### Features

O cadastro de categorias do restaurante deve ser feito através de um POST na rota: http://localhost:3000/category/ com o seguinte corpo:

{
	"name":"nomedacategoria"
}

### Features

- [x] Cadastro de produtos
- [x] Execução de vendas
- [x] Listagem das vendas
- [ ] Cadastro de categorias (deve ser através de requisição POST)
- [ ] Quantidade de produtos na execução de venas
