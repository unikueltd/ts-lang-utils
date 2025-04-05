/*
 * Copyright (c) 2023 Yookue Ltd. All rights reserved.
 *
 * Licensed under the MIT License.
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
 * Sets the storage value of the given key
 *
 * @param key the key to inspect
 * @param value the value to set
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * setItem('token', '1234567890');
 * ```
 */
export function setItem(key?: string, value?: boolean | number | string | object | null): void {
    if (!key) {
        return;
    }
    if (value === undefined || value === null) {
        window.sessionStorage.removeItem(key);
        return;
    }
    if (typeof value === 'boolean') {
        window.sessionStorage.setItem(key, value ? 'true' : 'false');
    } else if (typeof value === 'number') {
        window.sessionStorage.setItem(key, value.toString());
    } else if (typeof value === 'string') {
        window.sessionStorage.setItem(key, value);
    } else if (typeof value === 'object') {
        window.sessionStorage.setItem(key, JSON.stringify(value));
    }
}
