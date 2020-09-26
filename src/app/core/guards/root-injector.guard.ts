import { InjectFlags, Type, inject } from '@angular/core';
/**
 * Assert core module to be singleton
 */
export class RootInjectorGuard {
    constructor(type: Type<any>) {
        const parent = inject(type, InjectFlags.Optional | InjectFlags.SkipSelf);
        if (parent) {
            throw Error(`[${type}]: trying to create multiple instances,
            but this service should be a singleton.`);
        }
    }
}