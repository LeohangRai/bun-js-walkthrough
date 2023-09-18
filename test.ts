/* 
    This code was generated using the Cursor IDE after feeding it with the official documentation of Bun.js
*/

const server = Bun.serve({
  async fetch(req) {
    const url = new URL(req.url);
    switch (url.pathname) {
      case '/':
        return new Response('Home page!');
      case '/about':
        return new Response('About page!');
      case '/contact':
        return new Response('Contact page!');
      case '/hash':
        const password = url.searchParams.get('password');
        if (password) {
          const hashedPassword = await Bun.password.hash(password, {
            algorithm: 'bcrypt',
            cost: 10
          });
          return new Response(hashedPassword);
        } else {
          return new Response('Please provide a password query parameter.');
        }
      default:
        return new Response('404 - Not Found');
    }
  }
});

console.log(`Listening on http://localhost:${server.port}`);
