# Lab 2

CodeSandbox: https://codesandbox.io/s/es6-human-bingo-mbzxd1

## ES2017 - Object.entries()

De methode Object.entries() retourneert een array van de eigen opsombare eigenschapparen van de eigenschap [sleutel, waarde] van een bepaald object.

```
const object1 = {
  a: 'somestring',
  b: 42
};

for (const [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}
```

... Verwachte resultaten:

```
> "a: somestring"
> "b: 42"
```
