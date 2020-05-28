 ENTRY_POINT=src/index.html
 PARCEL=node_modules/.bin/parcel
 NODE_MODULES=node_modules
 PARCEL=$(NODE_MODULES)/.bin/parcel
 PRETTIER=$(NODE_MODULES)/.bin/prettier

install:
	npm i

start:
	$(PARCEL) $(ENTRY_POINT)

build:
	$(PARCEL) build $(ENTRY_POINT)

prettier:
	$(PRETTIER) \
		--config .prettierrc.yaml \
		--write src
