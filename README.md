# GroningenML website

## Aanmaken van een pagina.

Om een pagina aan te maken geeft je een relatief pad op.

```bash
hugo new posts/welcome.md

hugo new projects/hugo.md
```

## Polls (inactive)

Een poll bestaat uit een bestand in `content/polls/*.md` **en** een AlpacaJS configuratie in `static/js/polls/*.js`.

Verder zijn er nog support CSS en JS in bijbehorende `static/*`

## Lokaal testen

```bash
hugo server -D
```
