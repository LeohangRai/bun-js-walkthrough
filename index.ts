import figlet from 'figlet';
import helloText from './hello.txt';

const PORT = process.env.PORT ?? 3000

const server = Bun.serve({
    port: PORT,
    fetch() {
        return new Response(figlet.textSync(helloText));
    }
});

console.log(figlet.textSync(`BUN ${Bun.version}`));
console.log("Server is up and running at PORT:", PORT);
