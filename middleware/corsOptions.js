const whitelist = ['http://localhost', 'http://127.0.0.1']

const corsOptions = {
  origin: function (origin, callback) {

    // ToDo: cambiar !!
    // if (!origin) { callback(new Error('Not allowed by CORS')) }
    if (!origin) { return callback(null, true) }

    for (const item of whitelist) {
      if (origin.startsWith(item)) { // found: request allowed
        return callback(null, true)
      }
    }

    return callback(new Error('Not allowed by CORS'))
  }
}

export default corsOptions