# Plugin add2Cart.js

A função add2Cart possibilita inserir um produto ao carrinho diretamente da home, ou de qualquer outra página sem a necessidade de atualizar a página ou ser redirecionado.

## Como usar

1. Adicione o arquivo [add2Cart.js](https://github.com/agenciatray/Componentes/blob/master/add2Cart/add2Cart.js) ao seu projeto.
2. Insira os elementos presentes no arquivo [index.html](https://github.com/agenciatray/Componentes/blob/master/add2Cart/index.html). Alguns elementos são opcionais, como segue:
    1. Botão menos(opcional)
    2. Botão mais(opcional)
    3. Input de Quantidade(opcional)
    4. Botão adicionar ao carrinho(obrigatório)
3. Instancie o plugin da seguinte forma:
```javascript
var add2Cart = new add2Cart();
```

## Função de feedback(BETA)

O sistema está preparado para dar feedbacks aos usuários, para isto, siga os passos a seguir:

1. Crie uma modal de feedback de sucesso
2. Adicione o seguinte código após instânciar o plugin add2Cart.js

```javascript
add2Cart.activeSuccess(element);
```

que ficará da seguinte forma

```javascript
var add2Cart = new add2Cart();
add2Cart.activeSuccess($('.addCartModal'));
```

O `element` deve ser o componente que após adicionado o produto ao carrinho, receberá durante **2 segundos** a classe `active`.