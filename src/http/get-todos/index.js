let arc = require('@architect/functions')
let auth = require('@architect/shared/auth')
let read = require('@architect/shared/read')

exports.handler = arc.http.async(auth, read)
