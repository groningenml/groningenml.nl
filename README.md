# GroningenML website

## Aanmaken van een pagina.

Om een pagina aan te maken geeft je een relatief pad op.

```bash
hugo new posts/welcome.md

hugo new projects/hugo.md
```

### Front matter

Het je een post gemaakt vergeet dan niet author toe te voegen aan de frontmatter

```frontmatter
---
title: "Deep Squeak"
date: 2019-02-26T10:08:12+01:00
draft: false
author: "Clemens Tolboom"
---
```
## Document a meetup

In `/misc` we have a notebook for each meeting. They could/should have a slides config.

- Create _custom (*.html)_ and _custom (.slides.html)__
- Move these files into `/static/meetups`
- Update

## Polls (inactive)

Een poll bestaat uit een bestand in `content/polls/*.md` **en** een AlpacaJS configuratie in `static/js/polls/*.js`.

Verder zijn er nog support CSS en JS in bijbehorende `static/*`

## Lokaal testen

```bash
hugo server -D
```
