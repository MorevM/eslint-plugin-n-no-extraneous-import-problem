# eslint-plugin-n > no-extraneous-import problem

This repository shows a problem with the `no-extraneous-import` rule of the `eslint-plugin-n`.

## Steps to reproduce:

```bash
npm install && npm run lint:example
```

The rule `no-extraneous-import` warns about `~configurations/foo` import, 
although according to the path defined in the `tsconfig.json` 
this is an internal import.

This only happens for paths that contain the `~` or `@` character at the beginning. \
E.g. alias `#configurations/*` is working as expected, but `~configurations/*` is not.