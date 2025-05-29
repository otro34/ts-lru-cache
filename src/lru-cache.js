"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LRUCache = void 0;
class LRUCache {
    constructor(capacity) {
        if (capacity <= 0)
            throw new Error('Capacity must be greater than 0');
        this.capacity = capacity;
        this.cache = new Map();
    }
    get(key) {
        if (!this.cache.has(key))
            return undefined;
        const value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value);
        return value;
    }
    put(key, value) {
        if (this.cache.has(key)) {
            this.cache.delete(key);
        }
        else if (this.cache.size >= this.capacity) {
            const oldestKey = this.cache.keys().next().value;
            if (oldestKey !== undefined) {
                this.cache.delete(oldestKey);
            }
        }
        this.cache.set(key, value);
    }
    has(key) {
        return this.cache.has(key);
    }
    size() {
        return this.cache.size;
    }
    clear() {
        this.cache.clear();
    }
}
exports.LRUCache = LRUCache;
