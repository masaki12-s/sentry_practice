import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import * as Sentry from "@sentry/vue";
import { BrowserTracing } from "@sentry/tracing";

const app = createApp(App);

Sentry.init({
    app,
    dsn: "http://a09afe50b4344620a9474a4896b8666d@localhost:9000/2",
    integrations: [
        new BrowserTracing({
        routingInstrumentation: Sentry.vueRouterInstrumentation(router),
        tracePropagationTargets: ["localhost", "my-site-url.com", /^\//],
    }),
],
// Set tracesSampleRate to 1.0 to capture 100%
// of transactions for performance monitoring.
// We recommend adjusting this value in production
tracesSampleRate: 1.0,
});
  
app.use(router);
app.mount("#app");