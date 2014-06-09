# organic-express-middleware

Organelle constructing by `eval` a middleware and mounting it to expressjs app.

## dna

    {
      "source": "plasma/organic-express-middleware",
      "reactOn": "ExpressServer",
      "eval": "require("body-parser")()",
      "mount": undefined
    }

### `reactOn` property

Should be either `ExpressServer` chemical with [expected structure](https://github.com/outbounder/organic-express-server#emitready-chemical) or array of chemicals where the first one is mapped as `ExpressServer` chemical.

### `eval` property

String source code which will be evaled and results passed to `app.use` of expressjs app.

### `mount` property

Optional, string url which will be used to mount 'eval'-ed middleware function.