# Prueba Tecnica - JS

## Indice
-   [Ejercicio](#ejercicio)
-   [Requisitos de instalación](#requisitos-de-instalación)
-   [Instalación](#instalación)
-   [Scripts](#scripts)

## Ejercicio
Utilizando el archivo `index.js`, ubicado en la raiz del proyecto, crea una función pura llamada `isPalindrome`, la cual recibe un parámetro de tipo *string* llamado `str`. Esa función debe retornar un valor de tipo *booleano* el cual me diga si el *string* que le he pasado como parámetro es o no un palíndromo (https://es.wikipedia.org/wiki/Pal%C3%ADndromo).

Para desarrollar este ejercicio, te vamos a pedir que hagas un fork de este proyecto (no hagas ningún commit sobre este repositorio, porque será eliminado), y lo subas a un repositorio tuyo (github, bitbucket, gitlab, etc) y nos envíes la url de ese repositorio por email.

> Como *nice to have* estaría bueno que por cada cambio que hagas sobre el proyecto envies un commit (en tu propio repositorio) comentando lo que hiciste, así podremos ver la línea de tiempo como fuiste resolviendo el ejercicio.

## Requerimientos
- Ese string puede ser una cadena única o múltiples cadenas que formen una frase
- Debe retornar un error del tipo `throw` cuando el valor que se recibe como parámetro no es un string
- No estan contemplado palabras o frases que utilicen tildes.
- No estan contemplado ningún tipo de caracteres especiales.
- Tu código debe pasar cada uno de los test unitarios que están creados para este ejercicio

### Ejemplos de palindromos:

- `Ana lava lana`
- `A ti no bonita`
- `Arriba birra`

## Requisitos de instalación
-   Node v12.13 (LTS)

## Instalación
- Instalar dependencias 
```
npm install
```

## Scripts

- Para ejecutar los tests:
```
npm run test
```
