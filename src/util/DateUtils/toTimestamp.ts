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
 * Converts a date or date string to a timestamp in milliseconds, returns undefined if invalid
 *
 * @param value The date or date string to convert
 *
 * @returns the timestamp in milliseconds, or undefined if invalid
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * toTimestamp('2023-01-01');    // 1672531200000
 * toTimestamp('invalid');    // undefined
 * toTimestamp(new Date('2023-01-01'));    // 1672531200000
 * ```
 */
export function toTimestamp(value?: Date | string | null): number | undefined {
    if (!value) {
        return undefined;
    }
    const timestamp = (typeof value === 'string') ? new Date(value).getTime() : value.getTime();
    return Number.isNaN(timestamp) ? undefined : timestamp;
}
