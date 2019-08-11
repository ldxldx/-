module.exports = app => {
  class MsgController extends app.Controller {
    * index(req) {

      this.ctx.set('Access-Control-Allow-Origin', 'http://x.localhost.com:8080')

      this.ctx.body = { msg: 'hello world' }
    }
  }
  return MsgController
}