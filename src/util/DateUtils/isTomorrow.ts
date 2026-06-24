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


import { addDay } from './addDay';
import { isSameDay } from './isSameDay';


/**
 * Returns whether the date is tomorrow
 *
 * @param date The date to check
 *
 * @returns whether the date is tomorrow
 *
 * @author David Hsing
 */
export function isTomorrow(date?: Date | null): boolean {
    return !!date && isSameDay(new Date(), addDay(date, -1));
}
