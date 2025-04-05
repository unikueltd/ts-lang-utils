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


import Cookies, {type CookieSetOptions} from 'universal-cookie';


/**
 * Sets the storage value of the given key
 *
 * @param name the key to inspect
 * @param options the options to set the value
 * @param value the value to set
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * setItem('token', '1234567890');
 * ```
 */
export function setItem(name?: string, value?: boolean | number | string | object | null, options?: CookieSetOptions): void {
    if (!name) {
        return;
    }
    const cookies = new Cookies(null, {path: '/'});
    if (value === undefined || value === null) {
        cookies.remove(name);
        return;
    }
    if (typeof value === 'boolean') {
        cookies.set(name, value ? 'true' : 'false', options);
    } else if (typeof value === 'number') {
        cookies.set(name, value.toString(), options);
    } else if (typeof value === 'string') {
        cookies.set(name, value, options);
    } else if (typeof value === 'object') {
        cookies.set(name, JSON.stringify(value), options);
    }
}
