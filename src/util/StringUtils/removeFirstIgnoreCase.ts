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


import {replaceFirstIgnoreCase} from './replaceFirstIgnoreCase';


/**
 * Returns the string that removed the first occurrence in the given text, case-insensitive
 *
 * @param text the text to inspect
 * @param search the string or regex to match
 *
 * @returns the string that removed the first occurrence in the given text, case-insensitive
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * removeFirstIgnoreCase(undefined, undefined);    // undefined
 * removeFirstIgnoreCase('foobar-foobar', undefined);    // 'foobar-foobar'
 * removeFirstIgnoreCase('foobar-foobar', 'BAR');    // 'foo-foobar'
 * ```
 */
export function removeFirstIgnoreCase(text?: string | null, search?: string | RegExp | null): string | null | undefined {
    return replaceFirstIgnoreCase(text, search, '');
}
