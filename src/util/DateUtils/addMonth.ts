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
 * Returns the month calculated date with the source date and the specified amount
 *
 * @param date The date to inspect
 * @param amount The amount to add, negative number means minus
 *
 * @returns the month calculated date with the source date and the specified amount
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * addMonth(new Date(2023, 8, 30), 1);    // Date(2023, 9, 30)
 * ```
 */
export function addMonth(date?: Date, amount?: number): Date | undefined {
    if (!date || !amount) {
        return date;
    }
    const result = new Date(date);
    result.setMonth(date.getMonth() + amount);
    return result;
}
