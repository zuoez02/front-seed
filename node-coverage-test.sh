rm -rf coverage/ && \
rm -rf report/backend/coverage/ &&\
./node_modules/.bin/babel-node ./node_modules/.bin/isparta cover --report text --report html ./node_modules/.bin/_mocha -- --reporter dot test/server/*.js
mkdir -p report/backend/ && \
mv coverage/ report/backend/ && \
rm -rf coverage/
