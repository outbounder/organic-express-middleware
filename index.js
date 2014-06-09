module.exports = function(plasma, dna){
  plasma.on(dna.reactOn, function(c){
    var app = c.data || c[0].data;
    var middleware = eval(dna.eval)
    if(dna.mount)
      app.use(dna.mount, middleware)
    else
      app.use(middleware)
  })
}