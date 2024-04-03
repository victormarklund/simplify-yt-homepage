FROM oven/bun:1 as base
WORKDIR /usr/src/app

COPY . .

ENV PORT=9010

USER bun

EXPOSE 9010

ENTRYPOINT [ "bun", "run", "server.js" ]
