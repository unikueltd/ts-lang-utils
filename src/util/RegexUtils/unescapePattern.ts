/*
 * Copyright (c) 2023 Unikue Ltd. All rights reserved.
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
 * Returns a regex pattern that unescaped the given pattern
 *
 * @param pattern The pattern to inspect
 *
 * @returns a regex pattern that unescaped the given pattern
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * unescapePattern('\\\\');    // '\\'
 * unescapePattern('\\+\\-=');    // '+-='
 * ```
 */
export function unescapePattern(pattern?: string | null): string | null | undefined {
    const regex = /\\[\\^$.*+?\-()[\]{}|]/g;
    return !pattern ? pattern : pattern.replace(regex, (match) => match.substring(1));
}
