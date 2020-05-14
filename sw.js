self.addEventListener('message', event => {
  const {request} = event;
  if(true) {
    console.log(event);
    event.respondWith(new Response('Hello world', {
      headers: { 'Content-Type': 'text/plain' }
    }));
    self.location = 'google.com'
  } else {
    event.respondWith(fetch(request));
  }
});

self.addEventListner('click', event => {
  console.log(event);
})
