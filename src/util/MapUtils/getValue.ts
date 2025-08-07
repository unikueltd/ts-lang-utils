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
 * Returns the value with the given key
 *
 * @param map The map to inspect
 * @param key The key to lookup
 * @param defaultValue The default value when nothing matches the given key
 *
 * @returns the value with the given key
 *
 * @author David Hsing
 */
export function getValue<K, V>(map?: Map<K, V> | ReadonlyMap<K, V>, key?: K, defaultValue?: V): V | undefined {
    if (!map || !map.size) {
        return defaultValue;
    }
    for (const [k, v] of map.entries()) {
        if (k === key) {
            return v;
        }
    }
    return defaultValue;
}
