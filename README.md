# GeoTest

Benvingut a GeoTest: un joc de geografia catalana per posar a prova els coneixements sobre municipis i comarques.

Juga-hi a [geotest.aleixmorenotelesforo.com](https://geotest.aleixmorenotelesforo.com).

## Què inclou

- Preguntes aleatòries sobre municipis, comarques i províncies de Catalunya.
- Tres modes 1vs1: població, altitud i superfície.
- Tres tests: capital de comarca, comarca d'una capital i província d'una comarca.
- Tres vides per partida, puntuació, rècord i missatges de final de joc.
- Disseny adaptat a escriptori i mòbil.

## Com jugar

Tria un mode al menú i respon seleccionant un botó. En els modes 1vs1, escull el municipi amb la dada més alta; en els tests, escull la resposta correcta entre quatre opcions. Pots tornar al menú en qualsevol moment.

## Executar-lo en local

```bash
git clone https://github.com/TelesforoAleix/geotest.git
cd geotest
npm install
npm start
```

Obre [http://localhost:3000](http://localhost:3000). Per generar la versió de producció:

```bash
npm run build
```

## Tecnologies

React, Context API i CSS.
