module.exports = async function auth(req) {
  if (!req.session.account) {
    let client_id = process.env.GITHUB_CLIENT_ID
    let redirect_uri = process.env.GITHUB_REDIRECT
    let base = `https://github.com/login/oauth/authorize`
    let href = `${base}?client_id=${client_id}&redirect_uri=${redirect_uri}`
    return {
      statusCode: 403, 
      json: { 
        error: 'not_authorized',
        message: 'please sign in',
        href
      }
    }
  }
}
