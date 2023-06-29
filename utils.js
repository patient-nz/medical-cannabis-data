export async function json(importUrl, fn = undefined) {
    const target = new URL(importUrl, import.meta.url);
    try {
        const { default: imported } = await import(target, {
            assert: { type: "json" }
        });
        if (fn) {
            if (fn(imported)) {
                return imported;
            }
        } else if (Array.isArray(imported)) {
            return imported
        }
    } catch (error) {
        console.error(error);
    }
    const { pathname } = target;
    const { readFile } = await import("node:fs/promises");
    const contents = await readFile(pathname, "utf-8");
    return JSON.parse(contents);
}