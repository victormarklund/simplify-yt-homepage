const BASE_PATH = "./public";

const server = Bun.serve({
    port: process.env.PORT || 5000,
    hostname: '0.0.0.0',
    async fetch(req) {
        console.log(req);
        const filePath = BASE_PATH + new URL(req.url).pathname;
        const file = Bun.file(filePath);
        return new Response(file);
    },
    error() {
        return new Response(null, { status: 404 });
    },
});

console.log(`Listening on 0.0.0.0:${server.port} ...`);
