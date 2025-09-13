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


const specialExtensions = [
    // Microsoft Office
    'doc', 'docx', 'docm', 'dot', 'dotx', 'dotm',
    'xls', 'xlsx', 'xlsm', 'xlsb', 'xlam', 'xlt', 'xltx', 'xltm',
    'ppt', 'pptx', 'pptm', 'pot', 'potx', 'potm', 'ppsx', 'ppsm', 'pps',
    // WPS Office
    'wps', 'wpt', 'et', 'ett', 'dps', 'dpt',
    // China Office
    'eio', 'eti', 'edp', 'uof', 'uot', 'uos', 'uop', 'smd', 'smt', 'smp',
    // PDF
    'pdf',
    // Archive
    'zip', 'rar', '7z', 'tar', 'gz', 'bz2',
    // Other packages
    'exe', 'msi', 'dmg', 'iso'
];


/**
 * Popup a download dialog by creating a fake download link
 *
 * @param url The url to download
 * @param fileName The default file name to save, when popup the download dialog
 */
export function downloadUrlByElement(url?: string, fileName?: string): void {
    if (!url) {
        return;
    }
    const sameOrigin = new URL(url, window.location.href).origin === window.location.origin;
    const fileExtension = fileName?.split('.').pop()?.toLowerCase();
    const blobHandle = !sameOrigin || specialExtensions.includes(fileExtension ?? '');
    if (!blobHandle) {
        const link = document.createElement('a');
        if (fileName) {
            link.download = fileName;
        }
        link.href = url;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        return;
    }
    window.fetch(url).then(response => {
        if (!response.ok) {
            throw new Error('Network response is not ok');
        }
        return response.blob();
    }).then(blob => {
        const blobUrl = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = blobUrl;
        if (fileName) {
            link.download = fileName;
        }
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(blobUrl);
    }).catch(() => {
        window.open(url, '_blank');
    });
}
