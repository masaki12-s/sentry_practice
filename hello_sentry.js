import { init, captureMessage } from '@sentry/browser';

init({
    dsn: '__DSN__',
    // ...
});

captureMessage('Hello, world');