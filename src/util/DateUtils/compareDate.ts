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


import { toTimestamp } from './toTimestamp';


/**
 * Returns 1 if source greater than target, -1 if source less than target, 0 if equals
 *
 * @param source The first date to compare
 * @param target The second date to compare
 * @param nullGreater Whether a nil (undefined or null) value is considered greater than another non-nil value
 *
 * @returns 1 if source greater than target, -1 if source less than target, 0 if equals
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * compareDate(new Date('2023-01-02'), new Date('2023-01-01'));    // 1
 * compareDate(new Date('2023-01-01'), new Date('2023-01-02'));    // -1
 * compareDate(new Date('2023-01-01'), '2023-01-01');    // 0
 * compareDate(undefined, null);    // 0
 * compareDate(undefined, new Date(), true);    // 1
 * compareDate(undefined, new Date(), false);    // -1
 * ```
 */
export function compareDate(source?: Date | string | null, target?: Date | string | null, nullGreater: boolean = false): number {
    const sourceAlias: number | undefined = toTimestamp(source);
    const targetAlias: number | undefined = toTimestamp(target);
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
