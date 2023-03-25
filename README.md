# typer

"Converted object which have stringifaed values in their properties in regular objects

## Installation

```bash
$ npm i -S typer
```

## Usage

### typer(original)

Typer will return you object with properties in keys, whish was convert from original

```javascript
import { typer } from "typer";
typer({
  a: {
    b: "string",
  },
  b: {
    c: "false",
  },
  c: { d: { e: { c: "undefined" } } },
});
// a: {
//   b: "string",
// },
// b: {
//   c: false,
// },
// c: { d: { e: { c: undefined } } },
```
