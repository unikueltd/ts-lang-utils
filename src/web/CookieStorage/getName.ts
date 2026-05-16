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


import { get } from '@/util/ArrayUtils/get';
import { substringBefore } from '@/util/StringUtils/substringBefore';


/**
 * Returns the storage key of the given index
 *
 * @param index The index to inspect
 *
 * @returns the storage key of the given index
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * getName(0);
 * ```
 */
export function getName(index?: number): string | null | undefined {
    if (index === undefined || index < 0) {
        return undefined;
    }
    const cookies = document.cookie.split('; ');
    const cookie = get(cookies, index);
    if (!cookie) {
        return undefined;
    }
    const decode = window.decodeURIComponent(cookie);
    return substringBefore(decode, '=');
}
