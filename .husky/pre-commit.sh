#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

git diff --diff-filter=d --cached --name-only | grep -E '\.(js|jsx|ts|tsx)$' | xargs -I % sh -c 'git show ":%" | yarn lint --stdin --stdin-filename "%";'
yarn test
yarn tsc