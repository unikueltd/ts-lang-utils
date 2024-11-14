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


import {isEmpty} from './isEmpty';


/**
 * Utilities for string
 *
 * @author David Hsing
 */


/**
 * Returns the string that replaced all occurrences in the given text
 *
 * @param text the text to inspect
 * @param search the string or regex to match
 * @param replace the expected replacement string
 *
 * @returns the string that replaced all occurrences in the given text
 *
 * @example
 * ```ts
 * replaceAll(undefined, undefined, undefined);    // undefined
 * replaceAll('foobar-foobar', undefined, 'hello');    // 'foobar-foobar'
 * replaceAll('foobar-foobar', 'foobar', 'hello');    // 'hello-hello'
 * ```
 */
export function replaceAll(text?: string | null, search?: string | RegExp | null, replace?: string | null): string | undefined | null {
    return (isEmpty(text) || !search) ? text : text?.replace(new RegExp(search, 'g'), (replace ?? ''));
}
