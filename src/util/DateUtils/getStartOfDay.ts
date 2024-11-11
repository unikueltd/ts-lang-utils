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
 * Utilities for date and time
 *
 * @author David Hsing
 */


/**
 * Returns the start day date of the given date
 *
 * @param date the date to inspect
 *
 * @returns the start day date of the given date
 *
 * @example
 * ```ts
 * getStartOfDay(new Date(2023, 8, 30, 12, 12, 12));    // Date(2023, 8, 30, 0, 0, 0)
 * ```
 */
export function getStartOfDay(date?: Date): Date | undefined {
    if (!date) {
        return undefined;
    }
    const result = new Date(date);
    result.setHours(0, 0, 0, 0);
    return result;
}
