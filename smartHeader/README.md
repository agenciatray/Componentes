# smartHeader.js

Exibição de topo inteligente. O topo é removido quando o usuário desce na página, quando o usuário começa a retornar para o topo, o topo é exibido novamente.

## Como usar

Adicione o script `smartHeader.js` ao seu site

**CDN**
```
<script type="text/javascript" src="https://raw.githubusercontent.com/agenciatray/Componentes/master/smartHeader/dist/smartHeader.min.js"></script>
```

Após, você deve instanciar o plugin

```javascript
var smartHeader = new smartHeader();
```

O plugin irá, por padrão, alterar seu elemento `<header>`, adicionando a classe `.hide` quando o mesmo não deverá aparecer.

## Configurações opcionais

Alguns itens podem ser personalizados no plugin

### Elemento padrão

Caso você não queira que seu elemento `<header>` seja alterado, você pode setar outro elemento para receber a funcionalidade.

```html
<div class="teste"></div>
```

```javascript
smartHeader.setElement($('.teste'));
```

### Alterar o nome da classe

Se você quiser alterar o nome da classe que oculta o topo, você pode setar outro nome.

```javascript
smartHeader.setNameClass('notShow');
```

### Ocultar no topo

Existe a possíbilidade de esconde o `<header>` também quando o scroll da página estiver no topo

```javascript
smartHeader.setHideTop(true);
```

## Exemplo/Demo

Veja um exemplo do plugin funcionando [DEMO](http://codepen.io/ezanattatray/pen/xOVYZZ)
