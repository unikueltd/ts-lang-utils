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
 * Processes each entry in the map
 *
 * @param map The map to inspect
 * @param callback A callback function that processes each entry
 *
 * @author David Hsing
 */
export function forEach<K, V>(map?: Map<K, V> | ReadonlyMap<K, V>, callback?: (value?: V, key?: K) => void): void {
    if (!map || !map.size || !callback) {
        return;
    }
    for (const [k, v] of map.entries()) {
        callback(v, k);
    }
}
