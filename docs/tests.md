## Plano de Testes de Software

**Caso de Teste** | **CT01 - Criar conta**
 :--------------: | ------------
**Procedimento**  | 1) Usuário informa nome, sobrenome, email,  data de nascimento e senha. <br>2) A aplicação verifica se os dados são válidos e informa ao usuário caso não sejam.
**Requisitos associados** | RF-001
**Resultado esperado** | Cadastrar usuário
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT02 - Cadastrar produtos**
 :--------------: | ------------
**Procedimento**  | 1) Usuário informa  nome do produto, preço, categoria e faz o upload de uma imagem.<br>2) A aplicação verificar se os dados são válidos e informa ao usuário caso não sejam.
**Requisitos associados** | RF-001
**Resultado esperado** | Cadastro de produtos
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro de produtos
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT03 - Adicionar produtos no carrinho**
 :--------------: | ------------
**Procedimento**  | 1) usuário clica no ícone "+" na borda inefiror dos cards de produtos
**Requisitos associados** | RF-001
**Resultado esperado** | Adicionar o produto e quantidade correta de itens nos carrinhos
**Dados de entrada** | Clique no ícone "+" nos card de produtos.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT04 - Remover produtos no carrinho**
 :--------------: | ------------
**Procedimento**  | 1) usuário clica no ícone "-" na borda inefiror dos cards de produtos
**Requisitos associados** | RF-001
**Resultado esperado** | Remove o produto ou reduz a quantidade  de itens nos carrinhos
**Dados de entrada** | Clique no ícone "-" nos card de produtos.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT05 - Editar itens no carrinho**
 :--------------: | ------------
**Procedimento**  | 1) Na tala de carrinho, usuário clica no ícone com formatyop de lápis, e pode adionar ou remover novos produtos.
**Requisitos associados** | RF-001
**Resultado esperado** | Remove o produto ou reduz a quantidade  de itens nos carrinhos
**Dados de entrada** | Clique no ícone "-" nos card de produtos.
**Resultado obtido** | Sucesso.


**Caso de Teste** | **CT06 - Selecionar supermercado por região   **
 :--------------: | ------------
**Procedimento**  | 1) Usuário escolhe a região desejada na tela de seleção de supermercados. <br>2) A aplicação exibe os supermercados disponíveis na região escolhida.
**Requisitos associados** | RF-003
**Resultado esperado** | Exibir os supermercados corretos com base na região selecionada.
**Dados de entrada** | Seleção de uma região específica na interface.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT07 -  Visualizar preços em 3 supermercados **
 :--------------: | ------------
**Procedimento**  | 1) Usuário adiciona produtos ao carrinho. <br>2) Na tela de carrinho, a aplicação exibe os preços dos produtos e o total da compra em três supermercados diferentes.
**Requisitos associados** | RF-004
**Resultado esperado** | Exibir corretamente os preços dos produtos e o total da compra em três supermercados distintos.
**Dados de entrada** | Adição de produtos ao carrinho.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT08 - Atualizar preços de produtos pelos usuários **
 :--------------: | ------------
**Procedimento**  | 1) Usuário acessa a opção de atualização de preços. <br>2) Insere os novos preços dos produtos desejados. <br>3) A aplicação verifica se os dados são válidos e realiza a atualização.
**Requisitos associados** | RF-005
**Resultado esperado** | Atualização bem-sucedida dos preços dos produtos.
**Dados de entrada** | Inserção de novos preços na opção de atualização.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT09 - Avaliar supermercados  **
 :--------------: | ------------
**Procedimento**  | 1) 1) Usuário acessa a opção de avaliação de supermercados. <br>2) Atribui uma pontuação e escreve um comentário, se desejar.
**Requisitos associados** | RF-006
**Resultado esperado** | Avaliação bem-sucedida do supermercado.
**Dados de entrada** | Atribuição de pontuação e, opcionalmente, um comentário.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT10 - Avaliar produtos   **
 :--------------: | ------------
**Procedimento**  | 1) Usuário acessa a opção de avaliação de produtos no carrinho. <br>2) Atribui uma pontuação e escreve um comentário para os produtos.
**Requisitos associados** | RF-007
**Resultado esperado** | Avaliação bem-sucedida dos produtos.
**Dados de entrada** | Atribuição de pontuação e, opcionalmente, um comentário.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT11 -  Indicar indisponibilidade de produtos  **
 :--------------: | ------------
**Procedimento**  | 1) Usuário seleciona a opção de indicar a indisponibilidade de um produto em um supermercado. <br>2) Informa qual produto está indisponível.
**Requisitos associados** | RF-008
**Resultado esperado** | Indicação bem-sucedida da indisponibilidade do produto.
**Dados de entrada** | Seleção da opção de indicar indisponibilidade e informação do produto.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT12 -   Agrupar produtos por categoria **
 :--------------: | ------------
**Procedimento**  | 1) Na tela de produtos, os produtos são exibidos agrupados por categoria. <br>2) Usuário verifica se os produtos estão organizados corretamente.
**Requisitos associados** | RF-009
**Resultado esperado** | Exibição correta dos produtos agrupados por categoria.
**Dados de entrada** | Navegação na tela de produtos.
**Resultado obtido** | Sucesso.




## Registro dos Testes de Software

Registro dos Testes de Software

**Caso de Teste** | **TC-01 - Criar uma conta**
 :--------------: | ------------
**Requisito Associado** | RF-001 - Cadastro de produtos com descrição, foto, preço e código.
**Link do vídeo do teste realizado** | [Vídeo do teste TC-01](https://1drv.ms/u/s!AhD2JqpOUvJChapRtRSQ9vPzbNLwGA?e=mxZs6t)
**Resultado do Teste** | Sucesso

**Caso de Teste** | **TC-02 - Cadastrar produtos**
 :--------------: | ------------
**Requisito Associado** | RF-001 - Cadastro de produtos com descrição, foto, preço e código.
**Link do vídeo do teste realizado** | [Vídeo do teste TC-02](https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar)
**Resultado do Teste** | Sucesso

**Caso de Teste** | **TC-03 - Adicionar produtos no carrinho**
 :--------------: | ------------
**Requisito Associado** | RF-002 - Seleção de produtos em formato de carrinho para consulta futura.
**Link do vídeo do teste realizado** | [Vídeo do teste TC-03](Inserir_Link_Aqui)
**Resultado do Teste** | Sucesso

**Caso de Teste** | **TC-04 - Remover produtos no carrinho**
 :--------------: | ------------
**Requisito Associado** | RF-002 - Seleção de produtos em formato de carrinho para consulta futura.
**Link do vídeo do teste realizado** | [Vídeo do teste TC-04](Inserir_Link_Aqui)
**Resultado do Teste** | Sucesso

**Caso de Teste** | **TC-05 - Editar itens no carrinho**
 :--------------: | ------------
**Requisito Associado** | RF-002 - Seleção de produtos em formato de carrinho para consulta futura.
**Link do vídeo do teste realizado** | [Vídeo do teste TC-05](Inserir_Link_Aqui)
**Resultado do Teste** | Sucesso

**Caso de Teste** | **TC-06 - Selecionar supermercado por região**
 :--------------: | ------------
**Requisito Associado** | RF-003 - Escolha de supermercados com base na região selecionada.
**Link do vídeo do teste realizado** | [Vídeo do teste TC-06](Inserir_Link_Aqui)
**Resultado do Teste** | Sucesso

**Caso de Teste** | **TC-07 - Visualizar preços em 3 supermercados**
 :--------------: | ------------
**Requisito Associado** | RF-004 - Visualização de preços de produtos e total da compra em 3 supermercados.
**Link do vídeo do teste realizado** | [Vídeo do teste TC-07](Inserir_Link_Aqui)
**Resultado do Teste** | Sucesso

**Caso de Teste** | **TC-08 - Atualizar preços de produtos pelos usuários**
 :--------------: | ------------
**Requisito Associado** | RF-005 - Atualização de preços pelos usuários.
**Link do vídeo do teste realizado** | [Vídeo do teste TC-08](Inserir_Link_Aqui)
**Resultado do Teste** | Sucesso

**Caso de Teste** | **TC-09 - Avaliar supermercados**
 :--------------: | ------------
**Requisito Associado** | RF-006 - Avaliação dos supermercados por usuários.
**Link do vídeo do teste realizado** | [Vídeo do teste TC-09](Inserir_Link_Aqui)
**Resultado do Teste** | Sucesso

**Caso de Teste** | **TC-10 - Avaliar produtos**
 :--------------: | ------------
**Requisito Associado** | RF-007 - Avaliação dos produtos com comentários por usuários.
**Link do vídeo do teste realizado** | [Vídeo do teste TC-10](Inserir_Link_Aqui)
**Resultado do Teste** | Sucesso

**Caso de Teste** | **TC-11 - Indicar indisponibilidade de produtos**
 :--------------: | ------------
**Requisito Associado** | RF-008 - Indicação de indisponibilidade de produtos em supermercados.
**Link do vídeo do teste realizado** | [Vídeo do teste TC-11](Inserir_Link_Aqui)
**Resultado do Teste** | Sucesso

**Caso de Teste** | **TC-12 - Agrupar produtos por categoria**
 :--------------: | ------------
**Requisito Associado** | RF-009 - Agrupamento de produtos por categoria.
**Link do vídeo do teste realizado** | [Vídeo do teste TC-12](Inserir_Link_Aqui)
**Resultado do Teste** | Sucesso

## Avaliação dos Testes de Software

Os resultados dos testes de software foram, em sua maioria, positivos, indicando que as funcionalidades desenvolvidas atendem aos requisitos estabelecidos. No entanto, algumas observações foram feitas durante os testes, destacando tanto pontos fortes quanto áreas que precisam de melhoria.

### Pontos Fortes
1. **Cadastro de Conta e Produtos:** Os testes de criação de conta e cadastro de produtos foram bem-sucedidos, indicando que as funcionalidades essenciais para a interação do usuário com a plataforma estão operando corretamente.
2. **Adição e Remoção de Produtos no Carrinho:** As operações de adição e remoção de produtos no carrinho foram realizadas com sucesso, demonstrando uma experiência de usuário intuitiva.
3. **Avaliação de Supermercados e Produtos:** As funcionalidades de avaliação de supermercados e produtos foram concluídas sem problemas, permitindo aos usuários expressar suas opiniões sobre a plataforma.

### Áreas de Melhoria
1. **Atualização de Preços pelos Usuários:** Houve sucesso nos testes dessa funcionalidade, mas é necessário garantir medidas de segurança adicionais para evitar manipulação indevida de preços.
2. **Avaliação de Usuários e Produtos:** As funcionalidades de avaliação de usuários e produtos foram concluídas, mas a baixa prioridade atribuída a elas pode indicar a necessidade de mais incentivos ou destaque na interface para encorajar os usuários a participarem.

### Falhas Detectadas
1. **Indicação de Indisponibilidade de Produtos:** Foi identificado um problema relacionado à indicação de indisponibilidade de produtos em supermercados. O sistema precisa ser aprimorado para garantir que essas informações sejam registradas corretamente.
2. **Agrupamento de Produtos por Categoria:** Embora tenha sido um sucesso nos testes, o agrupamento de produtos por categoria pode ser mais refinado para garantir uma navegação mais fácil e intuitiva.

### Melhorias Propostas
1. **Refinamento na Indicação de Indisponibilidade:** Implementar uma solução robusta para a indicação de indisponibilidade de produtos, garantindo a precisão das informações.
2. **Aprimoramento na Interface de Avaliação:** Investir em melhorias na interface para incentivar mais usuários a participarem das avaliações de supermercados e produtos.
3. **Revisão no Agrupamento de Produtos:** Refinar o agrupamento de produtos por categoria, considerando uma organização mais lógica e intuitiva.

