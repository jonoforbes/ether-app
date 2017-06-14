let typeCache = {};
export function type(label) {
    if (typeCache[label]) {
        throw new Error(`Action type "${label}" is not unqiue"`);
    }
    typeCache[label] = true;
    return label;
}
//# sourceMappingURL=util.js.map