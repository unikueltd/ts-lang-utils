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


import { DurationUtils } from '@unikue/ts-lang-utils';


describe('DurationUtils.test', () => {
    test('Testing formatSeconds', () => {
        expect(DurationUtils.formatSeconds(36)).toBe('00:36');
        expect(DurationUtils.formatSeconds(125)).toBe('02:05');
        expect(DurationUtils.formatSeconds(3661)).toBe('01:01:01');
        expect(DurationUtils.formatSeconds(36, true)).toBe('00:00:36');
        expect(DurationUtils.formatSeconds(125, true)).toBe('00:02:05');
        expect(DurationUtils.formatSeconds(-1)).toBe('00:00');
        expect(DurationUtils.formatSeconds(Infinity)).toBe('00:00');
        expect(DurationUtils.formatSeconds()).toBeUndefined();
        expect(DurationUtils.formatSeconds(undefined)).toBeUndefined();
        expect(DurationUtils.formatSeconds(null)).toBeUndefined();
    });

    test('Testing parseToDays', () => {
        expect(DurationUtils.parseToDays('1d')).toBe(1);
    });

    test('Testing parseToHours', () => {
        expect(DurationUtils.parseToHours('1h')).toBe(1);
    });

    test('Testing parseToMillis', () => {
        expect(DurationUtils.parseToMillis('1s')).toBe(1000);
        expect(DurationUtils.parseToMillis()).toBeUndefined();
        expect(DurationUtils.parseToMillis(undefined)).toBeUndefined();
        expect(DurationUtils.parseToMillis(null)).toBeUndefined();
    });

    test('Testing parseToMinutes', () => {
        expect(DurationUtils.parseToMinutes('1m')).toBe(1);
        expect(DurationUtils.parseToMinutes('60s')).toBe(1);
        expect(DurationUtils.parseToMinutes()).toBeUndefined();
        expect(DurationUtils.parseToMinutes(undefined)).toBeUndefined();
        expect(DurationUtils.parseToMinutes(null)).toBeUndefined();
    });

    test('Testing parseToMonths', () => {
        expect(DurationUtils.parseToMonths('1y')).toBe(12);
        expect(DurationUtils.parseToMonths()).toBeUndefined();
        expect(DurationUtils.parseToMonths(undefined)).toBeUndefined();
        expect(DurationUtils.parseToMonths(null)).toBeUndefined();
    });

    test('Testing parseToSeconds', () => {
        expect(DurationUtils.parseToSeconds('1s')).toBe(1);
        expect(DurationUtils.parseToSeconds('1m')).toBe(60);
        expect(DurationUtils.parseToSeconds()).toBeUndefined();
        expect(DurationUtils.parseToSeconds(undefined)).toBeUndefined();
        expect(DurationUtils.parseToSeconds(null)).toBeUndefined();
    });

    test('Testing parseToWeeks', () => {
        expect(DurationUtils.parseToWeeks()).toBeUndefined();
        expect(DurationUtils.parseToWeeks(undefined)).toBeUndefined();
        expect(DurationUtils.parseToWeeks(null)).toBeUndefined();
    });

    test('Testing parseToYears', () => {
        expect(DurationUtils.parseToYears('1y')).toBe(1);
        expect(DurationUtils.parseToYears()).toBeUndefined();
        expect(DurationUtils.parseToYears(undefined)).toBeUndefined();
        expect(DurationUtils.parseToYears(null)).toBeUndefined();
    });
});
