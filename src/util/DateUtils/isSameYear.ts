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
 * Returns whether the given date is same year with the comparison date
 *
 * @param date the date to check
 * @param comparison the date to compare
 *
 * @returns whether the given date is same year with the comparison date
 *
 * @example
 * ```ts
 * isSameYear(new Date(2023, 1, 1), new Date(2023, 8, 30));    // true
 * ```
 */
export function isSameYear(date?: Date, comparison?: Date): boolean {
    return !!date && !!comparison && date.getFullYear() === comparison.getFullYear();
}
