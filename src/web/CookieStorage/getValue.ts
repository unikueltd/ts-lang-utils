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


import Cookies, {type CookieGetOptions} from 'universal-cookie';


/**
 * Returns the storage value of the given name
 *
 * @param name The name to inspect
 * @param options The options to get the key
 * @param defaultValue The default value if nil
 *
 * @returns the storage value of the given key
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * getValue('token');
 * ```
 */
export function getValue(name?: string, options?: CookieGetOptions, defaultValue?: string | null): string | null | undefined {
    if (!name) {
        return defaultValue;
    }
    const cookies = new Cookies(null, {path: '/'});
    return cookies.get(name, options);
}
