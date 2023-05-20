FROM node:lts

WORKDIR /app
USER node

COPY --chown=node:node  --chmod=744 docker-entrypoint.sh /tmp
ENTRYPOINT [ "/tmp/docker-entrypoint.sh" ]
CMD ["npm", "run", "dev"]
