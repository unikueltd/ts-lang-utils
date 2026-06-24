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


import { parse } from '@imranbarbhuiya/duration';


/**
 * Returns the number of years with parsing the given duration
 *
 * @param duration - the duration string
 *
 * @returns the duration in years
 *
 * @author David Hsing
 */
export function parseToYears(duration?: string | null): number | undefined {
    if (!duration) {
        return undefined;
    }
    const result = parse(duration);
    return (result === undefined) ? undefined : Math.round(result / (1000 * 31556952));
}
