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
 * Returns the formatted string that represent the given date
 *
 * @param date The date to inspect
 * @param format The date/time format string
 *
 * @returns the formatted string that represent the given date
 *
 * @author David Hsing
 */
export function formatDateTime(date?: Date, format?: string): string | undefined {
    if (!date || !format) {
        return undefined;
    }
    const entries: {[key: string]: number} = {
        'y+': date.getFullYear(),
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': (date.getHours() % 12 == 0) ? 12 : date.getHours() % 12,
        'H+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds(),
        'q+': Math.floor((date.getMonth() + 3) / 3),
        'S': date.getMilliseconds(),
    };
    let result = format;
    for (const entry in entries) {
        const array = new RegExp(`(${entry})`).exec(result);
        if (array) {
            if (/(y+)/.test(entry)) {
                result = result.replace(array[1], entries[entry].toString().substring(4 - array[1].length))
            } else {
                result = result.replace(array[1], (array[1].length === 1) ? (entries[entry].toString()) : (entries[entry].toString().padStart(array[1].length, '0')))
            }
        }
    }
    return result;
}
