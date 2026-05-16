/*
 * Copyright (c) 2023 Unikue Ltd. All rights reserved.
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


import Cookies, { type CookieSetOptions } from 'universal-cookie';


/**
 * Removes the storage item of the given name
 *
 * @param name The name to remove
 * @param options The options to remove the value
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * removeItem('token');
 * ```
 */
export function removeItem(name?: string, options?: CookieSetOptions): void {
    if (!name) {
        return;
    }
    const cookies = new Cookies(null, { path: '/' });
    cookies.remove(name, options);
}
