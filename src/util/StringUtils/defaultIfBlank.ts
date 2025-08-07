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


import {isBlank} from './isBlank';


/**
 * Returns the default value if the given text is blank, or the text self if it is not blank
 *
 * @param text The text to check
 * @param defaultValue The default value placeholder
 *
 * @returns the default value if the given text is blank, or the text self if it is not blank
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * defaultIfBlank(undefined, 'foobar');    // 'foobar'
 * ```
 */
export function defaultIfBlank(text?: string | null, defaultValue?: string | null): string | null | undefined {
    return isBlank(text) ? defaultValue : text;
}
