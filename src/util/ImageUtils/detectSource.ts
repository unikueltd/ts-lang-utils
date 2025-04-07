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


import {isPromise} from '@/util/ObjectUtils';


/**
 * Detects the image src for the given param
 *
 * @param param the parameter to inspect
 * @param resolve the callback function when resolved
 * @param reject the callback function when rejected
 *
 * @author David Hsing
 */
export function detectSource(param?: string | Promise<string | undefined> | (() => string | undefined | Promise<string | undefined>), resolve?: (res?: string) => void, reject?: () => void): void {
    if (!param) {
        return;
    }
    if (typeof param === 'string') {
        resolve?.(param);
    } else if (typeof param === 'function') {
        const value = param();
        if (typeof value === 'string') {
            resolve?.(value);
        } else if (isPromise(value)) {
            (value as Promise<string | undefined>).then((res) => resolve?.(res)).catch(() => reject?.());
        } else {
            reject?.();
        }
    } else if (isPromise(param)) {
        (param as Promise<string | undefined>).then((res) => resolve?.(res)).catch(() => reject?.());
    }
}
