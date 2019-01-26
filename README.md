# GroningenML website

## Aanmaken van een pagina.

Om een pagina aan te maken geeft je een relatief pad op.

```bash
hugo new posts/welcome.md
hugo new guide/hugo.md
```

## Polls

Een poll bestaat uit een bestand in `content/polls/*.md` **en** een AlpacaJS configuratie in `static/js/polls/*.js`.

Verder zijn er nog support CSS en JS in bijbehorende `static/*`

### Handmatig

Je kunt ook gewoon een markdown bestand aanmaken maar je hebt dan nog wel een [frontmatter](https://gohugo.io/content-management/front-matter/) header nodig.

## Starten dev server

```bash
hugo server -D
```
