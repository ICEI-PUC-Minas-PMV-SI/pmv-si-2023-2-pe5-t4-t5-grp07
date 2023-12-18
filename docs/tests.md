## Plano de Testes de Software

**Caso de Teste** | **CT01 - Criar conta**
 :--------------: | ------------
**Procedimento**  | 1) Usuário informa nome, sobrenome, email,  data de nascimento e senha. <br>2) A aplicação verifica se os dados são válidos e informa ao usuário caso não sejam.
**Requisitos associados** | RF-001
**Resultado esperado** | Cadastrar usuário
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT02 - Login**
 :--------------: | ------------
**Procedimento**  | 1) Usuário informa  endereço de e-mail e senha.
**Requisitos associados** | RF-001
**Resultado esperado** | Login
**Dados de entrada** | Inserção de dados válidos no formulário de login
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT03 - Adicionar produtos no carrinho**
 :--------------: | ------------
**Procedimento**  | 1) usuário clica no ícone "+" na borda inefiror dos cards de produtos
**Requisitos associados** | RF-001
**Resultado esperado** | Adicionar o produto e quantidade correta de itens nos carrinhos
**Dados de entrada** | Clique no ícone "+" nos card de produtos.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT04 -  Visualizar preços em 3 supermercados **
 :--------------: | ------------
**Procedimento**  | 1) Usuário adiciona produtos ao carrinho. <br>2) Na tela de carrinho, a aplicação exibe os preços dos produtos e o total da compra em três supermercados diferentes.
**Requisitos associados** | RF-004
**Resultado esperado** | Exibir corretamente os preços dos produtos e o total da compra em três <br>supermercados distintos.
**Dados de entrada** | Adição de produtos ao carrinho.
**Resultado obtido** | Sucesso.


## Registro dos Testes de Software


**Link do vídeo do teste realizado** | [([Evidência de teste.zip](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-2-pe5-t4-t5-grp07/files/13698816/Evidencia.de.teste.zip)
)]
**Resultado do Teste** | Sucesso


## Avaliação dos Testes de Software

Os resultados dos testes de software foram, em sua maioria, positivos, indicando que as funcionalidades desenvolvidas atendem aos requisitos estabelecidos. No entanto, algumas observações foram feitas durante os testes, destacando tanto pontos fortes quanto áreas que precisam de melhoria.

### Pontos Fortes
1. **Cadastro de Conta e Login:** Os testes de criação de conta e login foram bem-sucedidos, indicando que as funcionalidades essenciais para a interação do usuário com a plataforma estão operando corretamente.
2. **Adição de Produtos no Carrinho:** As operações de adição e remoção de produtos no carrinho foram realizadas com sucesso, demonstrando uma experiência de usuário intuitiva.

### Melhorias Propostas
1. **Facilitar o processo de criação de conta e login:** Implementar integração com as principais plataformas como Google, Facebook, etc.
2. **Aprimoramento na Interface de pesquisa de produtos:** Permitir a pesquisa de produtos de forma a facilitar a identificação do produto desejado.
3. **Criar agrupamento de Produtos:** Disponibilizar o agrupamento de produtos por categoria, considerando uma organização mais lógica e intuitiva.

