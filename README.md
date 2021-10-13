# API REST em NodeJs usando Express com testes unitário e deploy automático no Heroku.

API Rest desenvolvida no evento NLW da Rocketseat.

# Projeto

Como forma de obter conhecimento, decidi criar um teste unitário para a aplicação, criar uma pipeline no GitHub Actions e fazer o deploy automático no Heroku.

## Tecnologias usadas

* **NodeJS**
* **TypeScript**
*  **Express**
*  **Jest**
*  **GitHub Actions**
* **Heroku**

# Como executar

* Clone o repositório
* Rode yarn para baixar as dependências
* Rode yarn typeorm migration:run para criar as tabelas do banco de dados.

```
git clone https://github.com/reisstech/NodeAPI.git

cd NodeAPI

yarn

yarn typeorm migration:run
```
