/*
 * Copyright (c) 2023 Unikue Ltd. All rights reserved.
 *
 * Licensed under the MIT License.
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
 * Processes each storage item, with breakable ability
 *
 * @param callback The callback function that processes each storage item, returns `false` means break
 *
 * @author David Hsing
 */
export function forEachBreakable(callback?: (value?: string | null, key?: string) => boolean): void {
    if (!window.sessionStorage.length || !callback) {
        return;
    }
    for (let i = 0; i < window.sessionStorage.length; i++) {
        const key = window.sessionStorage.key(i);
        if (key) {
            if (!callback(window.sessionStorage.getItem(key), key)) {
                break;
            }
        }
    }
}
