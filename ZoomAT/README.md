# ZoomAT

Plugin de zoom interno

## Como usar

Fazer a chamada do `zoomAT.min.js` e incluir o arquivo `zoomAT.min.css`.

**CDN**
```html
<link rel="stylesheet" href="https://cdn.rawgit.com/agenciatray/Componentes/master/ZoomAT/dist/zoomAT.min.css" type="text/css" />
<script type="text/javascript" src="https://cdn.rawgit.com/agenciatray/Componentes/master/ZoomAT/dist/zoomAT.min.js"></script>
```

Inclua em seu HTML o seguinte código
```html
<div class="box-zoom">
    <img class="box-zoom-lazy" src="{{ link_da_imagem }}" />
</div>
```
_Em `{{link_da_imagem}}` deve ser incluido a URL da imagem a ser exibida inicialmente._

Após a inserção do HTML, você precisa instânciar o plugin da seguinte forma:
```javascript
var zoom = new zoomAT($('.box-zoom'));
```

### Função para alterar a imagem

Também é possível alterar a imagem do zoom, para isso você deve usar a função

```javascript
zoom.setImage('{{ link_da_imagem }}');
```

que em um exemplo de utilização ficará assim

```javascript
$('#thumb').click(function(){
    zoom.setImage($(this).attr('data-image'));
});

```

## Requisitos mínimos

`jQuery 1.3.0`