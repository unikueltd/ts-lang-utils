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


import {toFloat} from './toFloat';


/**
 * Returns 1 if source greater than target, -1 if source less than target, 0 if equals
 *
 * @param source The first comparable
 * @param target The second comparable
 * @param nullGreater Whether a nil (undefined or null) value is considered greater than another non-nil value
 *
 * @returns 1 if source greater than target, -1 if source less than target, 0 if equals
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * compare(undefined, null);    // 0
 * compare(3, undefined, true);    // -1
 * compare(3, undefined, false);    // 1
 * compare(3, 2);    // 1
 * compare(2, 3);    // -1
 * ```
 */
export function compare(source?: number | string | null, target?: number | string | null, nullGreater: boolean = false): number {
    const sourceAlias = toFloat(source), targetAlias = toFloat(target);
    if (sourceAlias === targetAlias) {
        return 0;
    }
    if (sourceAlias === undefined) {
        return nullGreater ? 1 : -1;
    }
    if (targetAlias === undefined) {
        return nullGreater ? -1 : 1;
    }
    return (sourceAlias > targetAlias) ? 1 : -1;
}
