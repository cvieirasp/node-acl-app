# Node-ACL-App

[![TypeScript version][ts-badge]][typescript-4-4]
[![Node.js version][nodejs-badge]][nodejs]

Projeto em [Node.js][nodejs] visando aplicação de controle de acessos à usuário, validando papéis e permissões. Foi utilizado o projeto da [Rocketseat][https://www.youtube.com/watch?v=AUY2AUAmT44&ab_channel=Rocketseat] para estudos.

Ferramentas e bibliotecas utilizadas:

- [TypeScript][typescript] [4.4][typescript-4-4]
- [bcrypt.js][bcryptjs], sendo uma biblioteca utilizada para hash e coimparação de senhas
- [Express][express]: para fornecer recursos mínimos para construção de servidores web
- [JsonWebToken][jsonwebtoken], sendo uma biblioteca que implementa o JSON Web Token
- [PG][pg] para fazer a interface com o banco de dados Postgres
- [Swagger UI Express][swagger-ui-express] que permite gerar a documentação da API com base em um arquivo swagger.json.
- [TypeORM][typeorm], biblioteca ORM
- [uuid][uuid], utilizado para geração de identificador único universal
- [ESLint][eslint] contendo algumas regras iniciais como recomendações
- [Prettier][prettier] para garantir um estilo de código consistente

### Clonar o repositório

Para clonar o repositório, utilize os seguintes comandos:
```sh
git clone https://github.com/cvieirasp/node-acl-app
cd node-acl-app
yarn
```

## Scripts disponíveis

- `build` - Transpila TypeScript em ES, dentro da pasta **dist** da raíz
- `dev` - Executa o serviço em desenvolvimento
- `format` - Executa a correção dos arquivos na pasta src, conforme configuração do lint
- `lint` - Executa o lint na pasta src
- `start` - Executa o serviço na estrutura já transpilada
- `test` - Executa os testes
- `typeorm` - Mainupulação de migrations

[ts-badge]: https://img.shields.io/badge/TypeScript-4.4-blue.svg
[nodejs-badge]: https://img.shields.io/badge/Node.js-%3E=%2016.5-blue.svg
[nodejs]: https://nodejs.org/dist/latest-v16.x/
[typescript]: https://www.typescriptlang.org/
[typescript-4-4]: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-4.html
[bcryptjs]: https://github.com/dcodeIO/bcrypt.js#readme
[express]: https://expressjs.com/en/4x/api.html
[jsonwebtoken]: https://github.com/auth0/node-jsonwebtoken#readme
[pg]: https://node-postgres.com/
[swagger-ui-express]: https://github.com/scottie1984/swagger-ui-express
[typeorm]: https://typeorm.io/#/
[uuid]: https://github.com/uuidjs/uuid#readme
[eslint]: https://github.com/eslint/eslint
[prettier]: https://prettier.io
