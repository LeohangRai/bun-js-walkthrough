import figlet from 'figlet';
import helloText from './hello.txt';

const PORT = process.env.PORT ?? 3000

const server = Bun.serve({
    port: PORT,
    fetch(req: Request) {
        const url = new URL(req.url);
        switch(url.pathname) {
            case '/':
            case '/home':
                return new Response(figlet.textSync(helloText));
            case '/about':
                return new Response(figlet.textSync('About Page'));
            case '/file':
                return new Response(Bun.file('./animal-farm-orwell.txt'));
            case '/video':                
                return new Response(Bun.file('./video.mp4').stream())
            default:
                return new Response(figlet.textSync('404 NOT FOUND'));
        }
    }
});

console.log(figlet.textSync(`BUN ${Bun.version}`));
console.log("Server is up and running at PORT:", PORT);
