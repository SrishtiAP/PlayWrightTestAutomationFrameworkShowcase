import { test } from './Fixtures/SauceDemoFixture';
//import { test } from '@playwright/test';

export function uniqueName(prefix: string): string {
    const workerIndex = test.info().workerIndex;
    const timestamp = Date.now();
    return `${prefix}_${workerIndex}_${timestamp}`;
}