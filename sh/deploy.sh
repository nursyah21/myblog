rm -rf build/ && \
git add . && git commit -m "$1" && git push && \
blag build && \
surge build/ --domain https://nursyah.surge.sh
