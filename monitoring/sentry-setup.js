// Example Sentry integration for both client and server

// CLIENT INTEGRATION
// Add this to the main.jsx file

/*
import React from 'react';
import ReactDOM from 'react-dom/client';
import * as Sentry from "@sentry/react";
import App from './App.jsx';
import './styles/index.css';

// Initialize Sentry (replace with your DSN)
Sentry.init({
  dsn: "https://your-sentry-dsn.ingest.sentry.io/project",
  integrations: [
    new Sentry.BrowserTracing({
      // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
      tracePropagationTargets: ["localhost", /^https:\/\/your-api-domain\.com\/api/],
    }),
    new Sentry.Replay(),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of transactions in development, adjust in production
  // Session Replay
  replaysSessionSampleRate: 0.1, // Sample rate for Replay Sessions (adjust as needed)
  replaysOnErrorSampleRate: 1.0, // Sample rate for Replay Sessions on error
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
*/

// SERVER INTEGRATION
// Add this to the server/src/index.js file

/*
const Sentry = require("@sentry/node");
const { ProfilingIntegration } = require("@sentry/profiling-node");

// Initialize Sentry (replace with your DSN)
Sentry.init({
  dsn: "https://your-sentry-dsn.ingest.sentry.io/project",
  integrations: [
    // Enable HTTP calls tracing
    new Sentry.Integrations.Http({ tracing: true }),
    // Enable Express.js middleware tracing
    new Sentry.Integrations.Express({ app }),
    new ProfilingIntegration(),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of transactions in development
  // Set sampling rate for profiling - this is relative to tracesSampleRate
  profilesSampleRate: 1.0,
});

// The request handler must be the first middleware on the app
app.use(Sentry.Handlers.requestHandler());

// TracingHandler creates a trace for every incoming request
app.use(Sentry.Handlers.tracingHandler());

// All controllers should live here
app.get("/", function rootHandler(req, res) {
  res.end("Hello world!");
});

// The error handler must be before any other error middleware and after all controllers
app.use(Sentry.Handlers.errorHandler());
*/