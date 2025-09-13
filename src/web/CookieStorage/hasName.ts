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


/**
 * Returns whether exists the given storage name
 *
 * @param name The name to inspect
 *
 * @returns whether exists the given storage name
 *
 * @author David Hsing
 * @see "https://github.com/awibox/combo-storage/blob/master/src/components/Cookie.js"
 *
 * @example
 * ```ts
 * hasName('token');
 * ```
 */
export function hasName(name?: string): boolean {
    return !!name && !!document.cookie.match(new RegExp(`(?:^|; )${name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1')}=([^;]*)`));
}
