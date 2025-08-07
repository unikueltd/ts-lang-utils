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
 * Returns the key with the given value
 *
 * @param map The map to inspect
 * @param value The value to lookup
 * @param defaultKey The default key when nothing matches the given value
 *
 * @returns the key with the given value
 *
 * @author David Hsing
 */
export function getKey<K, V>(map?: Map<K, V> | ReadonlyMap<K, V>, value?: V, defaultKey?: K): K | undefined {
    if (!map || !map.size) {
        return defaultKey;
    }
    for (const [k, v] of map.entries()) {
        if (v === value) {
            return k;
        }
    }
    return defaultKey;
}
