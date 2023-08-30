# git add . && git commit -m "update" && git push && \
rm dist/ -rf && pnpm build && \
surge dist/ https://nursyah.surge.sh
