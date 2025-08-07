/*
 * Copyright (c) 2023 Yookue Ltd. All rights reserved.
 *
 * Licensed under the MIT License (the "License")
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
 * Returns whether all the characters in the given text is lowercase alphanumeric
 *
 * @param text The text to check
 *
 * @returns whether all the characters in the given text is lowercase alphanumeric
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * isAlphanumericLower(undefined);    // false
 * isAlphanumericLower('ABC123');    // false
 * isAlphanumericLower('abc123');    // true
 * isAlphanumericLower('--$$##');    // false
 * ```
 */
export function isAlphanumericLower(text?: string | null): boolean {
    return !!text && /^[a-z\d]+$/.test(text);
}
