/*
 * Copyright (c) 2023 Yookue Ltd. All rights reserved.
 *
 * Licensed under the MIT License (the "License")
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 */


/**
 * Processes each entry in the map, with indexing ability, but not the tailing entry, and returns it
 *
 * @param map The map to inspect
 * @param callback The callback function that processes each entry
 *
 * @returns the tailing entry in the source map
 *
 * @author David Hsing
 */
export function forEachIndexingTailing<K, V>(map?: Map<K, V> | ReadonlyMap<K, V>, callback?: (value?: V, key?: K, index?: number) => void): [K, V] | undefined {
    // noinspection DuplicatedCode
    if (!map || !map.size || !callback) {
        return undefined;
    }
    let index = 0;
    for (const [k, v] of map.entries()) {
        if (index < map.size - 1) {
            callback(v, k, index++);
        } else {
            return [k, v];
        }
    }
    return undefined;
}
