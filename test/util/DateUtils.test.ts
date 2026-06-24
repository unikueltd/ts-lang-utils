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


import { DateUtils } from '@unikue/ts-lang-utils';


describe('DateUtils.test', () => {
    test('Testing addYear', () => {
        expect((DateUtils.addYear(new Date(2023, 8, 30), 1) as Date).getFullYear()).toBe(2024);
        // Leap year clamping: Feb 29, 2024 + 1 year => Feb 28, 2025
        const feb29 = DateUtils.addYear(new Date(2024, 1, 29), 1) as Date;
        expect(feb29.getFullYear()).toBe(2025);
        expect(feb29.getMonth()).toBe(1);
        expect(feb29.getDate()).toBe(28);
    });

    test('Testing addMonth', () => {
        expect((DateUtils.addMonth(new Date(2023, 8, 30), 1) as Date).getMonth()).toBe(9);    // Starts with index 0
        // End-of-month clamping: Jan 31 + 1 month => Feb 28 (2023 is not leap year)
        const jan31 = DateUtils.addMonth(new Date(2023, 0, 31), 1) as Date;
        expect(jan31.getMonth()).toBe(1);
        expect(jan31.getDate()).toBe(28);
        // End-of-month clamping: Mar 31 - 1 month => Feb 28
        const mar31 = DateUtils.addMonth(new Date(2023, 2, 31), -1) as Date;
        expect(mar31.getMonth()).toBe(1);
        expect(mar31.getDate()).toBe(28);
    });

    test('Testing addDay', () => {
        const result = DateUtils.addDay(new Date(2023, 8, 30), 1) as Date;
        expect(result.getMonth()).toBe(9);    // Starts with index 0
        expect(result.getDate()).toBe(1);
    });

    test('Testing compareDate', () => {
        // Normal comparison
        expect(DateUtils.compareDate(new Date('2023-01-02'), new Date('2023-01-01'))).toBe(1);
        expect(DateUtils.compareDate(new Date('2023-01-01'), new Date('2023-01-02'))).toBe(-1);
        expect(DateUtils.compareDate(new Date('2023-01-01'), '2023-01-01')).toBe(0);
        // null/undefined handling
        expect(DateUtils.compareDate(undefined, null)).toBe(0);
        expect(DateUtils.compareDate(null, null)).toBe(0);
        expect(DateUtils.compareDate(undefined, new Date(), true)).toBe(1);
        expect(DateUtils.compareDate(undefined, new Date(), false)).toBe(-1);
        expect(DateUtils.compareDate(new Date(), undefined, true)).toBe(-1);
        expect(DateUtils.compareDate(new Date(), undefined, false)).toBe(1);
    });

    test('Testing formatDateTime', () => {
        const date = new Date(2023, 8, 30, 13, 5, 9);
        expect(DateUtils.formatDateTime(date, 'yyyy-MM-dd')).toBe('2023-09-30');
        expect(DateUtils.formatDateTime(date, 'yyyy-MM-dd HH:mm:ss')).toBe('2023-09-30 13:05:09');
        expect(DateUtils.formatDateTime(date, 'hh:mm:ss')).toBe('01:05:09');
        expect(DateUtils.formatDateTime()).toBeUndefined();
        expect(DateUtils.formatDateTime(undefined)).toBeUndefined();
        expect(DateUtils.formatDateTime(null)).toBeUndefined();
        expect(DateUtils.formatDateTime(date)).toBeUndefined();
    });

    test('Testing getCurrentDateTime', () => {
        expect(DateUtils.getCurrentDateTime()).toBeDefined();
        expect(DateUtils.getCurrentDateTime()).toEqual(expect.any(String));
    });

    test('Testing getCurrentTime', () => {
        expect(DateUtils.getCurrentTime()).toBeDefined();
        expect(DateUtils.getCurrentTime()).toEqual(expect.any(String));
    });

    test('Testing getCurrentDate', () => {
        expect(DateUtils.getCurrentDate()).toBeDefined();
    });

    test('Testing getEndOfDay', () => {
        const result = DateUtils.getEndOfDay(new Date(2023, 8, 30, 12, 12, 12)) as Date;
        expect(result.getHours()).toBe(23);
        expect(result.getMinutes()).toBe(59);
        expect(result.getSeconds()).toBe(59);
        expect(DateUtils.getEndOfDay()).toBeUndefined();
        expect(DateUtils.getEndOfDay(undefined)).toBeUndefined();
        expect(DateUtils.getEndOfDay(null)).toBeUndefined();
    });

    test('Testing getEndOfMonth', () => {
        const result = DateUtils.getEndOfMonth(new Date(2023, 8, 1)) as Date;
        expect(result.getFullYear()).toBe(2023);
        expect(result.getMonth()).toBe(8);
        expect(result.getDate()).toBe(30);
        expect(DateUtils.getEndOfMonth()).toBeUndefined();
        expect(DateUtils.getEndOfMonth(undefined)).toBeUndefined();
        expect(DateUtils.getEndOfMonth(null)).toBeUndefined();
    });

    test('Testing getEndOfYear', () => {
        const result = DateUtils.getEndOfYear(new Date(2023, 8, 30)) as Date;
        expect(result.getFullYear()).toBe(2023);
        expect(result.getMonth()).toBe(11);
        expect(result.getDate()).toBe(31);
        expect(DateUtils.getEndOfYear()).toBeUndefined();
        expect(DateUtils.getEndOfYear(undefined)).toBeUndefined();
        expect(DateUtils.getEndOfYear(null)).toBeUndefined();
    });

    test('Testing getStartOfDay', () => {
        const result = DateUtils.getStartOfDay(new Date(2023, 8, 30, 12, 12, 12)) as Date;
        expect(result.getHours()).toBe(0);
        expect(result.getMinutes()).toBe(0);
        expect(result.getSeconds()).toBe(0);
        expect(DateUtils.getStartOfDay()).toBeUndefined();
        expect(DateUtils.getStartOfDay(undefined)).toBeUndefined();
        expect(DateUtils.getStartOfDay(null)).toBeUndefined();
    });

    test('Testing getStartOfMonth', () => {
        const result = DateUtils.getStartOfMonth(new Date(2023, 8, 30)) as Date;
        expect(result.getFullYear()).toBe(2023);
        expect(result.getMonth()).toBe(8);
        expect(result.getDate()).toBe(1);
        expect(DateUtils.getStartOfMonth()).toBeUndefined();
        expect(DateUtils.getStartOfMonth(undefined)).toBeUndefined();
        expect(DateUtils.getStartOfMonth(null)).toBeUndefined();
    });

    test('Testing getStartOfYear', () => {
        const result = DateUtils.getStartOfYear(new Date(2023, 8, 30)) as Date;
        expect(result.getFullYear()).toBe(2023);
        expect(result.getMonth()).toBe(0);
        expect(result.getDate()).toBe(1);
        expect(DateUtils.getStartOfYear()).toBeUndefined();
        expect(DateUtils.getStartOfYear(undefined)).toBeUndefined();
        expect(DateUtils.getStartOfYear(null)).toBeUndefined();
    });

    test('Testing getTimezone', () => {
        expect(DateUtils.getTimezone()).toBe('+8');
    });

    test('Testing isFirstDayOfMonth', () => {
        expect(DateUtils.isFirstDayOfMonth(new Date(2023, 8, 1))).toBeTruthy();
        expect(DateUtils.isFirstDayOfMonth(new Date(2023, 8, 30))).toBeFalsy();
    });

    test('Testing isLastDayOfMonth', () => {
        expect(DateUtils.isLastDayOfMonth(new Date(2023, 8, 1))).toBeFalsy();
        expect(DateUtils.isLastDayOfMonth(new Date(2023, 8, 30))).toBeTruthy();
    });

    test('Testing isLeapYear', () => {
        expect(DateUtils.isLeapYear(2000)).toBeTruthy();
        expect(DateUtils.isLeapYear(new Date(2020, 0, 1))).toBeTruthy();
    });

    test('Testing isSameYear', () => {
        expect(DateUtils.isSameYear(new Date(2020, 0, 1), new Date(2020, 11, 31))).toBeTruthy();
    });

    test('Testing isSameMonth', () => {
        expect(DateUtils.isSameMonth(new Date(2023, 8, 1), new Date(2023, 8, 30))).toBeTruthy();
    });

    test('Testing isSameDay', () => {
        expect(DateUtils.isSameDay(new Date(2023, 8, 30), new Date(2023, 8, 30))).toBeTruthy();
    });

    test('Testing isWeekend', () => {
        expect(DateUtils.isWeekend(new Date(2023, 8, 30))).toBeTruthy();
    });

    test('Testing isTomorrow', () => {
        expect(DateUtils.isTomorrow()).toBeFalsy();
        expect(DateUtils.isTomorrow(undefined)).toBeFalsy();
        expect(DateUtils.isTomorrow(null)).toBeFalsy();
    });

    test('Testing isYesterday', () => {
        expect(DateUtils.isYesterday()).toBeFalsy();
        expect(DateUtils.isYesterday(undefined)).toBeFalsy();
        expect(DateUtils.isYesterday(null)).toBeFalsy();
    });

    test('Testing toTimestamp', () => {
        expect(DateUtils.toTimestamp('2023-01-01')).toBe(new Date('2023-01-01').getTime());
        expect(DateUtils.toTimestamp(new Date('2023-01-01'))).toBe(new Date('2023-01-01').getTime());
        expect(DateUtils.toTimestamp('invalid')).toBeUndefined();
        expect(DateUtils.toTimestamp(null)).toBeUndefined();
        expect(DateUtils.toTimestamp(undefined)).toBeUndefined();
    });
});
