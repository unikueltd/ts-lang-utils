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


import { downloadUrlByElement } from './downloadUrlByElement';


/**
 * Popup a download dialog by creating a fake download link, as image format
 *
 * @param element The element to download
 * @param fileName The default file name to save, when popup the download dialog
 * @param imageType A string indicating the image format. The default type is image/png
 * @param imageQuality A Number between 0 and 1 indicating the image quality to be used when creating images using file formats that support lossy compression (such as image/jpeg or image/webp)
 *
 * @see "https://developer.mozilla.org/docs/Web/API/HTMLCanvasElement/toDataURL"
 */
export function downloadCanvasElement(element?: HTMLElement | null, fileName?: string, imageType: string = 'image/png', imageQuality = 0.8): void {
    if (!element || !fileName) {
        return;
    }
    const target = element.querySelector<HTMLCanvasElement>('canvas');
    if (target) {
        const url = target.toDataURL(imageType, imageQuality);
        downloadUrlByElement(url, fileName);
    }
}
