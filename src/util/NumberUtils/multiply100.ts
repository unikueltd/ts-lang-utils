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


import { endsWith } from '@/util/StringUtils';
import { toFloat } from './toFloat';


/**
 * Returns a float value from the given source which multiply 100
 *
 * @param source The source value to inspect
 * @param defaultValue The default value if the source cannot be converted
 *
 * @returns a float value from the given source which multiply 100
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * multiply100('0.82');    // 82
 * multiply100('82%');    // 82
 * ```
 */
export function multiply100(source?: number | string | null, defaultValue?: number): number | undefined {
    if (source === undefined || source === null) {
        return defaultValue;
    }
    if (typeof source === 'number') {
        return source * 100;
    }
    if (endsWith(source, '%')) {
        return toFloat(source.replace('%', ''), defaultValue);
    }
    const alias = toFloat(source);
    return (alias === undefined || alias === null) ? defaultValue : (alias * 100);
}
