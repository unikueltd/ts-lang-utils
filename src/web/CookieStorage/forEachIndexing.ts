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
 * Processes each storage item, with indexing ability
 *
 * @param callback The callback function that processes each storage item
 *
 * @author David Hsing
 */
export function forEachIndexing(callback?: (value?: string | null, name?: string, index?: number) => void): void {
    if (!document.cookie.length || !callback) {
        return;
    }
    const cookies = document.cookie.split('; ');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        if (!cookie) {
            continue;
        }
        const decode = window.decodeURIComponent(cookie);
        const [name, value] = decode.split('=');
        callback(value, name, i);
    }
}
