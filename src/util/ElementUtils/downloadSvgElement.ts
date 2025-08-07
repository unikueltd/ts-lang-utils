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


import {downloadUrlByElement} from './downloadUrlByElement';


/**
 * Popup a download dialog by creating a fake download link, as svg format
 *
 * @param element The element to download
 * @param fileName The default file name to save, when popup the download dialog
 *
 * @see "https://developer.mozilla.org/docs/Web/API/HTMLCanvasElement/toDataURL"
 */
export function downloadSvgElement(element?: HTMLElement | null, fileName?: string): void {
    if (!element || !fileName) {
        return;
    }
    const target = element.querySelector<SVGElement>('svg');
    if (target) {
        const data = new XMLSerializer().serializeToString(target!);
        const blob = new Blob([data], {type: 'image/svg+xml;charset=utf-8'});
        const url = URL.createObjectURL(blob);
        downloadUrlByElement(url, fileName);
    }
}
