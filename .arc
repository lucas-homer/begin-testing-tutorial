@app
learn-rest

@static
folder public

@http
get /login  # create github oauth session
get /logout # clear session

# json api
get /todos
post /todos
put /todos/:key
delete /todos/:key

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
