stage ?= local


dev:
	npm run dev

build:
	npm run build

cf-typegen:
	npm run cf-typegen

deploy:
	npx opennextjs-cloudflare build
	npx opennextjs-cloudflare deploy

generate-migration:
	npx drizzle-kit generate

_migrate:
	@echo "DB_NAME = $(DB_NAME) OPTIONS = $(OPTIONS)"
	npx wrangler d1 migrations apply $(DB_NAME) $(OPTIONS)

migrate:
	make -s _migrate DB_NAME=profile OPTIONS=--local

migrate-remote:
	make -s _migrate DB_NAME=profile OPTIONS=--remote

_resetdb:
	# TODO: drop all tables
	make -s _migrate DB_NAME=$(DB_NAME) OPTIONS="$(OPTIONS)"

resetdb:
	make -s _resetdb DB_NAME=profile OPTIONS=--local

resetdb-remote:
	make -s _resetdb DB_NAME=profile OPTIONS=--remote

_loaddata:
	npx wrangler d1 execute $(DB_NAME) --file ./db/seed.sql $(OPTIONS)

loaddata:
	make -s _loaddata DB_NAME=profile OPTIONS=--local

loaddata-remote:
	make -s _loaddata DB_NAME=profile OPTIONS=--remote

_cleardata:
	npx wrangler d1 execute $(DB_NAME) --file ./db/cleardata.sql $(OPTIONS)

cleardata:
	make -s _cleardata DB_NAME=profile OPTIONS=--local

cleardata-remote:
	make -s _cleardata DB_NAME=profile OPTIONS=--remote

connect-db:
	sqlite3 .wrangler/state/v3/d1/miniflare-D1DatabaseObject/*.sqlite

connect-to-localhost-websocket:
	npx wscat -c ws://localhost:3000/api/ws/1
