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
 * Returns a regex pattern that normalized the given pattern
 *
 * @param pattern The pattern to inspect
 *
 * @returns a regex pattern that normalized the given pattern
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * normalizePattern('\\\\d');    // '\d'
 * ```
 */
export function normalizePattern(pattern?: string | null): string | null | undefined {
    if (!pattern) {
        return pattern;
    }
    return pattern
    .replace(/\\\\/g, '\\')           // \\ -> \
    .replace(/\\n/g, '\n')            // \n -> 换行符
    .replace(/\\t/g, '\t')            // \t -> 制表符
    .replace(/\\r/g, '\r')            // \r -> 回车符
    .replace(/\\"/g, '"')             // \" -> "
    .replace(/\\'/g, "'");            // \' -> '
}
