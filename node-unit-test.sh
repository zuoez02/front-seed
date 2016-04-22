rm -rf report/backend/unit/ && \
mkdir -p report/backend/unit/ && \
mkdir -p report/backend/unit/node_modules/mocha/ && \
touch report/backend/unit/units.html && \
cp node_modules/mocha/mocha.css report/backend/unit/node_modules/mocha/mocha.css && \
node_modules/.bin/gulp mocha:unit | cat node_modules/mocha-html-reporter/docs/head.html - node_modules/mocha-html-reporter/docs/tail.html > report/backend/unit/units.html && \
echo 'Node unit test finished'
