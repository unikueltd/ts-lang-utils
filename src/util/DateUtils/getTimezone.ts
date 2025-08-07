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
 * Returns the timezone of the given date
 *
 * @param date The date to inspect
 *
 * @returns the timezone of the given date
 *
 * @author David Hsing
 */
export function getTimezone(date: Date = new Date()): string {
    const offset = date.getTimezoneOffset();
    const absOffset = Math.abs(offset);
    const hours = Math.floor(absOffset / 60);
    const minutes = absOffset % 60;
    const minutesOut = minutes > 0 ? ':' + ('0' + minutes).slice(-2) : '';
    return (offset < 0 ? '+' : '-') + hours + minutesOut;
}
