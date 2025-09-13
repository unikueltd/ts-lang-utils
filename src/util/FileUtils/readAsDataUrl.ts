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
 * Read and convert the given file to data url
 *
 * @param file The file to inspect
 * @param resolve The callback function to execute when the `file` read success
 * @param reject The callback function to execute when the `file` read failure
 *
 * @author David Hsing
 */
export function readAsDataUrl(file?: File, resolve?: (res?: string) => void, reject?: (ev?: ProgressEvent<FileReader>) => void): void {
    if (!file || !resolve) {
        return;
    }
    const reader = new FileReader();
    reader.addEventListener('load', (ev: ProgressEvent<FileReader>) => {
        resolve((typeof ev.target?.result === 'string') ? ev.target.result : undefined);
    });
    reader.addEventListener('error', (ev: ProgressEvent<FileReader>) => reject?.(ev));
    reader.readAsDataURL(file);
}
