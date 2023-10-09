# Especificações do Projeto

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

## Personas

### Persona 1 - Maria de Lourdes do Rosário
* Idade: 50 anos
* Perfil: Dona de casa com três filhos adolescentes.
* Necessidade: Procura uma aplicação que facilite a comparação de preços em supermercados próximos.

### Persona 2 - Luiz Carlos
* Idade: 40 anos
* Perfil: Dono de um restaurante.
* Necessidade: Deseja economizar tempo e dinheiro comparando preços de ingredientes para seu restaurante.

### Persona 3 - Frederico Andrada
- Idade: 30 anos
- Perfil: Trabalhador e estudante.
- Necessidade: Busca uma aplicação para comparar e organizar compras mensais.

## Histórias de Usuários

| Tipo  | Descrição |
|--------------------|-----------------------------------------|
| Usuário do Sistema | Pesquisar produtos por descrição/categoria ou adicionar produtos de uma lista|
| Usuário do Sistema |Filtrar pesquisa por região ou supermercado|
| Usuário do Sistema |Solicitar comparação de preços|
| Usuário do Sistema |Solicitar emissão de pedido para supermercados que permitam essa opção.
| Administrador |Cadastrar ou editar produtos|
| Administrador |Cadastrar ou editar supermercados|
| Administrador |Realizar login no sistema|
| Administrador |Executar relatórios estratégicos|


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|-------|-----------------------------------------|----|
|RF-001| Cadastro de produtos com descrição, foto, preço e código | ALTA | 
|RF-002| Seleção de produtos em formato de carrinho para consulta futura    | MÉDIA |
|RF-003| Escolha de supermercados com base na região selecionada   | ALTA | |
|RF-004| Visualização de preços de produtos e total da compra em 3 supermercados   | ALTA |
|RF-005| Atualização de preços pelos usuários   | ALTA |
|RF-006| Avaliação dos supermercados por usuários   | BAIXA |
|RF-007| Avaliação dos produtos com comentários por usuários   | BAIXA |
|RF-008| Indicação de indisponibilidade de produtos em supermercados   | ALTA |
|RF-009| Agrupamento de produtos por categoria   | MEDIA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  | Prioridade |
|-------|-------------------------|----|
|RNF-001| Responsividade do sistema para diferentes tamanhos de tela e navegadores | ALTA | 
|RNF-002| Obtenção da localização do usuário para melhorar os critérios de busca |  ALTA | 
|RNF-003| Armazenamento de dados em nuvem   | ALTA | |
|RNF-004| Armazenamento de dados temporários localmente   | ALTA | |
|RNF-005| Proteção segura de dados de usuários e supermercados com base na LGPD   | ALTA | |
  
## Restrições

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |

