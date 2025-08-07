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
 * Returns whether the given date is the first day of month
 *
 * @param date The date to check
 *
 * @returns whether the date is the first day of month
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * isFirstDayOfMonth(new Date(2023, 8, 1));    // true
 * isFirstDayOfMonth(new Date(2023, 8, 30));    // false
 * ```
 */
export function isFirstDayOfMonth(date?: Date): boolean {
    return !!date && date.getDate() === 1;
}
