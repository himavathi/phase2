this.addEventListener('install',function(event){
  event.waitUntil(
    caches.open('my cache')
    .then(function(e){
     e.addAll([
'/index.html',
'/form.html',
'/resume.html',

      ])
    })
)
})
// fetch event
this.addEventListener('fetch',function(event){
event.respondWith(
  caches.open('my cache')
  .then (function(cache)
  {
    return cache.match(event.request)
    .then(function(result){
    return result || fetch(event.request)
    .then(function(result)
    {
      cache.put(event.request,result.clone());
      retutn result;
    })

  })
})

)
})
