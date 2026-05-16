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


import { replaceFirst } from './replaceFirst';


/**
 * Returns the string that removed the first occurrence in the given text
 *
 * @param text The text to inspect
 * @param search The string or regex to match
 *
 * @returns the string that removed the first occurrence in the given text
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * removeFirst(undefined, undefined);    // undefined
 * removeFirst('foobar-foobar', undefined);    // 'foobar-foobar'
 * removeFirst('foobar-foobar', 'bar');    // 'foo-foobar'
 * ```
 */
export function removeFirst(text?: string | null, search?: string | RegExp | null): string | null | undefined {
    return replaceFirst(text, search, '');
}
