
ARG NODE_VERSION=24.13.0-slim

FROM node:${NODE_VERSION} AS dependencies

# Set working directory
WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci --ignore-scripts

COPY src ./src
COPY prisma ./prisma
COPY public ./public
COPY next.config.ts tsconfig.json postcss.config.mjs prisma.config.ts ./

# Build-time placeholders so Prisma can generate without runtime secrets.
ENV DIRECT_URL="postgresql://postgres:postgres@localhost:5432/postgres"
ENV DATABASE_URL="postgresql://postgres:postgres@localhost:5432/postgres"

RUN npm run build

ENV PORT=8080

RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nextjs
USER nextjs

EXPOSE 8080

CMD ["node", ".next/standalone/server.js"]
