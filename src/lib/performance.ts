// src/lib/performance.ts

/**
 * Log Web Vitals metrics
 */
export function reportWebVitals(metric: any) {
    if (process.env.NODE_ENV === 'production') {
      // Send to analytics service
      console.log(metric);
      
      // Example: Send to Google Analytics
      if ((window as any).gtag) {
        (window as any).gtag('event', metric.name, {
          value: Math.round(metric.value),
          metric_id: metric.id,
          metric_value: metric.value,
          metric_delta: metric.delta,
        });
      }
    }
  }