git add . && git commit -m "update" && git push && \
pnpm build && \
surge dist/ https://nursyah.surge.sh
