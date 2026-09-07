.PHONY: help install dev build preview

help:
	@echo "install  Install npm dependencies"
	@echo "dev      Start the Vite dev server"
	@echo "build    Build for production"
	@echo "preview  Serve the production build locally"

install:
	npm install

dev:
	npm run dev -- --host 127.0.0.1 --port 5173

build:
	npm run build

preview:
	npm run preview -- --host 127.0.0.1 --port 4173
