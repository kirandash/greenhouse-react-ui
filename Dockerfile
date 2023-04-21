# base node image
FROM node:16-bullseye-slim as base

# set for base and all layer that inherit from it
ENV NODE_ENV production


# Install all node_modules, including dev dependencies
FROM base as deps

WORKDIR /myapp

ADD package.json package-lock.json .npmrc ./
RUN npm install --production=false

# Setup production node_modules
FROM base as production-deps

WORKDIR /myapp

COPY --from=deps /myapp/node_modules /myapp/node_modules
ADD package.json package-lock.json .npmrc ./
RUN npm prune --production

# Build the app
FROM base as build

WORKDIR /myapp

COPY --from=deps /myapp/node_modules /myapp/node_modules
COPY --from=deps /myapp/.storybook /myapp/.storybook


ADD . .
RUN npm run build:tailwind

COPY --from=deps /myapp/style /myapp/style

RUN npm run build-storybook

# Finally, build the production image with minimal footprint
FROM base

WORKDIR /myapp

COPY --from=build /myapp/storybook-static /myapp/storybook-static

ENTRYPOINT [ "./storybook-static/index.html" ]
