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
 * Formats the given seconds into a human-readable time string (HH:MM:SS or MM:SS)
 *
 * @param seconds - the number of seconds to format
 * @param forceHour - whether to always include the hour part even when it is zero (defaults to false)
 *
 * @returns the formatted time string, e.g. "03:45" or "01:02:03", or undefined if seconds is absent
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * formatSeconds(36);               // "00:36"
 * formatSeconds(125);              // "02:05"
 * formatSeconds(3661);             // "01:01:01"
 * formatSeconds(36, true);         // "00:00:36"
 * formatSeconds(125, true);        // "00:02:05"
 * formatSeconds(-1);               // "00:00"
 * formatSeconds(Infinity);         // "00:00"
 * formatSeconds();                 // undefined
 * formatSeconds(undefined);        // undefined
 * formatSeconds(null);             // undefined
 * ```
 */
export function formatSeconds(seconds?: number | null, forceHour: boolean = false): string | undefined {
    if (seconds === undefined || seconds === null) {
        return undefined;
    }
    if (seconds < 0 || !Number.isFinite(seconds)) {
        return forceHour ? '00:00:00' : '00:00';
    }
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);
    const pad = (n: number): string => String(n).padStart(2, '0');
    if (h > 0 || forceHour) {
        return `${pad(h)}:${pad(m)}:${pad(s)}`;
    }
    return `${pad(m)}:${pad(s)}`;
}
