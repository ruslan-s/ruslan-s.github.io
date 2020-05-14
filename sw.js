self.addEventListener('fetch', event => {
  const {request} = event;
  // обрабатываем request чтоб понять, что от нас хотят
  //...
  if(true) {
    console.log(event);
    event.respondWith(new Response('Hello world', /* вместо строки можно Blob или ArrayBuffer */ {
      headers: { 'Content-Type': 'text/plain' }
    }));
  } else {
    event.respondWith(fetch(request)); // если не наш случай, отправляем запрос на сервер,
    // тут так же можно заморочится с кэшем
  }
});
