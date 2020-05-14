self.addEventListener('click', event => {
  if(true) {
    console.log(event);
    self.location = 'google.com'
  } else {
    event.respondWith(fetch(request));
  }
});
