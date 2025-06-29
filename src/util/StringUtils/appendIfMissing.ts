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


import {endsWith} from './endsWith';


/**
 * Returns a string that concat the given text and suffix
 *
 * @param text the text to check
 * @param suffix the suffix to append
 *
 * @returns a string that concat the given text and suffix
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * appendIfMissing('foo', 'bar');    // 'foobar'
 * appendIfMissing('foobar', 'bar');    // 'foobar'
 * ```
 */
export function appendIfMissing(text?: string | null, suffix?: string | null): string | null | undefined {
    return (!text || !suffix || endsWith(text, suffix)) ? text : (text + suffix);
}
