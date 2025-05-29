import { LRUCache } from './lru-cache';

describe('LRUCache', () => {
  it('should store and retrieve values', () => {
    const cache = new LRUCache<string, number>(2);
    cache.put('a', 1);
    expect(cache.get('a')).toBe(1);
  });

  it('should evict least recently used item', () => {
    const cache = new LRUCache<string, number>(2);
    cache.put('a', 1);
    cache.put('b', 2);
    cache.get('a'); // 'a' is now most recently used
    cache.put('c', 3); // 'b' should be evicted
    expect(cache.get('b')).toBeUndefined();
    expect(cache.get('a')).toBe(1);
    expect(cache.get('c')).toBe(3);
  });

  it('should update value and move to most recently used', () => {
    const cache = new LRUCache<string, number>(2);
    cache.put('a', 1);
    cache.put('b', 2);
    cache.put('a', 3);
    expect(cache.get('a')).toBe(3);
    cache.put('c', 4);
    expect(cache.get('b')).toBeUndefined();
  });

  it('should clear the cache', () => {
    const cache = new LRUCache<string, number>(2);
    cache.put('a', 1);
    cache.put('b', 2);
    cache.clear();
    expect(cache.size()).toBe(0);
  });

  it('should throw error for non-positive capacity', () => {
    expect(() => new LRUCache<string, number>(0)).toThrow();
    expect(() => new LRUCache<string, number>(-1)).toThrow();
  });
});
