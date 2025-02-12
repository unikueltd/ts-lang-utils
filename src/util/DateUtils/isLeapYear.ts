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
 * Returns whether the date or year is a leap year
 *
 * @param dateYear the date or year to check
 *
 * @returns whether the date or year is a leap year
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * isLeapYear(2000);    // true
 * isLeapYear(new Date(2000, 0, 1));    // true
 * ```
 */
export function isLeapYear(dateYear?: Date | number): boolean {
    if (dateYear === undefined) {
        return false;
    }
    const year = (dateYear instanceof Date) ? dateYear.getFullYear() : dateYear;
    return (!(year % 4) && !!(year % 100)) || !(year % 400);
}
