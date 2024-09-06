## Bug Report: Problema com o Modo de Exibição e Seleção de Período na Dashboard do Firefly III

| Campo | Descrição |
| ----- | --------- |
| **Título** | Problema com o modo de exibição e seleção de período na dashboard do Firefly III |
| **Descrição** | Ao fazer login no Firefly III, o modo de exibição da página está no modo escuro, enquanto o padrão é o modo claro, e não há opção de alternar entre os modos. Além disso, ao tentar selecionar um novo período no canto superior direito da dashboard, a página não atualiza conforme o período selecionado e continua mostrando a data de agosto e setembro juntas. |

## Dados do Bug

| Nome                     | Valor                 |
|------------------------- |-----------------------|
| **Ambiente de Teste**    | Linux: Xubuntu        |
| **Navegador**            | Google Chrome v95.0   |
| **Versão do Firefly III**| v5.6.4                |
| **Data e Hora do Teste** | 05 de setembro de 2024, 22h00 |

| Criticidade | Alta |
|-------------|------|

## Pré-condição

| Nº | Descrição |
|----|-----------|
| 1  | O usuário deve estar logado no Firefly III e na dashboard inicial. |

## Passos para Reproduzir

| Nº | Ação | Resultado Esperado |
| -- | ---- | ------------------ |
| 1  | Faça login na conta do Firefly III | Usuário é autenticado e direcionado para a dashboard |
| 2  | Observe que o display da página está no modo escuro | A página deve estar no modo claro por padrão |
| 3  | Tente mudar o modo de exibição para claro (não existe a opção) | A opção para mudar para o modo claro deve estar disponível |
| 4  | No canto superior direito, clique na opção de seleção de período | A página deve mostrar a lista de períodos disponíveis |
| 5  | Selecione um novo período (ex: setembro) | A dashboard deve atualizar para exibir os dados do novo período selecionado |
| 6  | Observe que o período não muda e a data continua combinando agosto e setembro | A data deve refletir apenas o novo período selecionado |

## Resultado Atual

| Descrição |
|-----------|
| A página carrega no modo escuro sem opção de alternância. A seleção de um novo período não atualiza a dashboard, permanecendo no mesmo período anterior (agosto-setembro). |

## Pós-condição

| Nº | Descrição |
|----|-----------|
| 1  | A dashboard deve ser atualizada para refletir o período selecionado. |

## Evidências

| Descrição |
|-----------|
| Video da tela mostrando o modo escuro ativo, falta de opção para alternar para o modo claro e o comportamento da seleção de períodos não atualizando. |

