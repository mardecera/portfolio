#!/usr/bin/env bash
set -uo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

TARGET_PATHS=()

rel_path() {
	local path="$1"
	if [[ "$path" == "$ROOT"/* ]]; then
		echo "${path#"$ROOT"/}"
	else
		echo "$path"
	fi
}

collect_paths() {
	while IFS= read -r -d '' path; do
		TARGET_PATHS+=("$path")
	done < <("$@")
}

git_prune=(\( -path "$ROOT/.git" -o -path "$ROOT/.git/*" \) -prune -o)

# node_modules de cada paquete (./node_modules, apps/foo/node_modules), no los de .pnpm
collect_paths find "$ROOT" \
	"${git_prune[@]}" \
	-type d -name node_modules ! -path "*/node_modules/*" -print0

OTHER_DIRS=(
	dist
	.astro
	.cache
	.vercel
	.netlify
	build
)

for name in "${OTHER_DIRS[@]}"; do
	collect_paths find "$ROOT" -depth \
		"${git_prune[@]}" \
		-type d -name "$name" ! -path "*/node_modules/*" -print0
done

collect_paths find "$ROOT" \
	"${git_prune[@]}" \
	-type f ! -path "*/node_modules/*" \( \
		-name "pnpm-debug.log" -o \
		-name "pnpm-debug.log.*" -o \
		-name "npm-debug.log" -o \
		-name "npm-debug.log.*" -o \
		-name "yarn-debug.log" -o \
		-name "yarn-debug.log.*" -o \
		-name "yarn-error.log" -o \
		-name "yarn-error.log.*" \
	\) -print0

removed=0

if ((${#TARGET_PATHS[@]} > 0)); then
	mapfile -t TARGET_PATHS < <(
		for path in "${TARGET_PATHS[@]}"; do
			printf "%05d%s\n" "${#path}" "$path"
		done | sort -r | cut -c6-
	)

	echo "Eliminando:"
	for path in "${TARGET_PATHS[@]}"; do
		echo "$(rel_path "$path")"
	done

	for path in "${TARGET_PATHS[@]}"; do
		if rm -rf "$path"; then
			removed=1
		else
			echo "  (aviso: no se pudo borrar por completo: $(rel_path "$path"))"
			removed=1
		fi
	done
fi

echo ""
if [[ "$removed" -eq 1 ]]; then
	echo "Se limpió todo correctamente."
else
	echo "No había temporales que borrar. Se limpió todo."
fi
