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


/**
 * Returns the length of the given string
 *
 * @param source the source string to check
 *
 * @returns the length of the given string
 *
 * @author David Hsing
 */
export function getLength(source?: string | number | null): number {
    if (source === undefined || source === null) {
        return 0;
    }
    if (typeof source === 'number') {
        return source.toString().length;
    }
    return source.length;
}
