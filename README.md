# ts-lru-cache
An implementation of LRU (Last Recently Used) cache in TypeScript.

## Description
This library provides a simple and efficient LRU cache implementation using TypeScript. The cache automatically removes the least recently used items when the capacity is exceeded.

## Installation

```
npm install ts-lru-cache
```

## Usage

````typescript
import { LRUCache } from './src/lru-cache';

// Create a cache with a capacity of 3
const cache = new LRUCache<string, number>(3);

cache.put('a', 1);
cache.put('b', 2);
cache.put('c', 3);

console.log(cache.get('a')); // 1

cache.put('d', 4); // 'b' will be evicted (least recently used)

console.log(cache.get('b')); // undefined
console.log(cache.get('c')); // 3
console.log(cache.get('d')); // 4

// Check if a key exists
console.log(cache.has('a')); // true

// Get current cache size
console.log(cache.size()); // 3

// Clear the cache
cache.clear();
console.log(cache.size()); // 0
````

## Advanced Example

You can use any type for keys and values:

````typescript
import { LRUCache } from './src/lru-cache';

// Using numbers as keys and objects as values
const cache = new LRUCache<number, { name: string }>(2);

cache.put(1, { name: 'Alice' });
cache.put(2, { name: 'Bob' });

console.log(cache.get(1)); // { name: 'Alice' }

cache.put(3, { name: 'Charlie' }); // 2 is evicted
console.log(cache.get(2)); // undefined
````

## API

### `constructor(capacity: number)`
Creates a new LRU cache with the specified maximum capacity.

### `put(key, value)`
Adds or updates a value in the cache.

### `get(key)`
Retrieves a value and marks it as recently used.

### `has(key)`
Checks if a key exists in the cache.

### `size()`
Returns the current number of items in the cache.

### `clear()`
Removes all items from the cache.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

1. Fork the repository
2. Create a new branch (`git checkout -b feature/nueva-funcionalidad`)
3. Realiza tus cambios y añade pruebas
4. Ejecuta `npm run build` y `npm test` para asegurarte de que todo funciona
5. Haz commit y push de tus cambios
6. Abre un Pull Request

## License
MIT
