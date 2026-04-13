FROM node:20-alpine AS build
WORKDIR /app
COPY package.json package-lock.json .npmrc ./
RUN npm ci && npm install --no-save \
    @rolldown/binding-linux-arm64-musl@1.0.0-rc.15 \
    lightningcss-linux-arm64-musl@1.32.0 \
    @rollup/rollup-linux-arm64-musl@4.60.1
COPY . .
ARG VITE_SUPABASE_URL
ARG VITE_SUPABASE_ANON_KEY
RUN npm run build

FROM caddy:2-alpine
COPY --from=build /app/dist /srv
COPY Caddyfile /etc/caddy/Caddyfile
EXPOSE 80
