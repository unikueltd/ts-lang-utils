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
 * Utilities for regex
 *
 * @author David Hsing
 */


/**
 * Returns whether the source text can be tested by the given regex, and resets the last index of the regex
 *
 * @param regex the regex to match
 * @param text the source text to check
 *
 * @returns whether the source text can be tested by the given pattern, and resets the last index of the regex
 */
export function testResetting(regex?: RegExp, text?: string | null): boolean {
    if (!regex || !text) {
        return false;
    }
    regex.lastIndex = 0;
    const result = regex.test(text);
    regex.lastIndex = 0;
    return result;
}
