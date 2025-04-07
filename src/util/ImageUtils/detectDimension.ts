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


import {isImage} from './isImage';


/**
 * Read and detect the dimension of the given file
 *
 * @param file the file to inspect
 * @param resolve the callback function to execute when the `file` read success
 * @param reject the callback function to execute when the `file` read failure
 *
 * @author David Hsing
 */
export function detectDimension(file?: File, resolve?: (width?: number, height?: number) => void, reject?: (ev?: ProgressEvent<FileReader> | ErrorEvent) => void): void {
    if (!file || !isImage(file) || !resolve) {
        return;
    }
    const reader = new FileReader();
    reader.addEventListener('load', (ev: ProgressEvent<FileReader>) => {
        const res = (typeof ev.target?.result === 'string') ? ev.target.result : undefined;
        if (!res) {
            reject?.();
            return;
        }
        const image = new Image();
        image.src = res;
        image.addEventListener('load', () => {
            resolve(image.naturalWidth, image.naturalHeight);
        });
        image.addEventListener('error', (ev: ErrorEvent) => reject?.(ev));
    });
    reader.addEventListener('error', (ev: ProgressEvent<FileReader>) => reject?.(ev));
    reader.readAsDataURL(file);
}
