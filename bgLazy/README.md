# bgLazy.js 

Atraso de carregamento de imagens em backgrounds

[Demonstração](http://codepen.io/ezanattatray/pen/XKpjVa)

## Como usar

Adicione o script `bgLazy.js` ao seu site

**CDN**
```html
<script type="text/javascript" src="https://cdn.rawgit.com/agenciatray/Componentes/master/bgLazy/dist/bgLazy.min.js"></script>
```
### Configurando o HTML

Adicione a classe `.bglazy` a `<div>` onde se encontra o background.

Não se esqueça de colocar `style="background: #08324a;"` em sua div, com a cor que represente a imagem, essa cor irá ser apresentada durante o tempo que a imagem não é carregada. Como no exemplo abaixo:

```html
<div class="box bglazy" style="background: #08324a;"></div>
```

### Configurando o JavaScript

Depois dos elemento configurados, voce deve instânciar a função, como no exemplo a seguir:

```js
bgLazy();
```

#### Opcional

Caso não queira usar a classe `.bglazy`, é possível usar outra classe, chamando a função da seguinte forma:

```js
bgLazy('bgtest');
```

## Exemplo

[Demonstração](http://codepen.io/ezanattatray/pen/XKpjVa)

![VanillaJS](http://vanilla-js.com/assets/button.png)
