// Analytics event types
export type AnalyticsEvent = {
  action: string;
  category: string;
  label: string;
  value?: number;
};

// Analytics implementation
class Analytics {
  private static instance: Analytics;
  private isInitialized: boolean = false;

  private constructor() {}

  public static getInstance(): Analytics {
    if (!Analytics.instance) {
      Analytics.instance = new Analytics();
    }
    return Analytics.instance;
  }

  public initialize(): void {
    if (this.isInitialized) return;

    // Initialize your analytics provider here
    // Example: Google Analytics
    // if (typeof window !== 'undefined' && window.gtag) {
    //   this.isInitialized = true;
    // }

    // For now, we'll just log to console
    this.isInitialized = true;
    console.log('Analytics initialized');
  }

  public trackEvent(event: AnalyticsEvent): void {
    if (!this.isInitialized) {
      console.warn('Analytics not initialized');
      return;
    }

    // Log the event (replace with your analytics provider)
    console.log('Analytics Event:', event);

    // Example: Google Analytics
    // if (typeof window !== 'undefined' && window.gtag) {
    //   window.gtag('event', event.action, {
    //     event_category: event.category,
    //     event_label: event.label,
    //     value: event.value,
    //   });
    // }
  }

  // Navigation tracking
  public trackNavigation(path: string): void {
    this.trackEvent({
      action: 'navigation',
      category: 'Navigation',
      label: path,
    });
  }

  // Search tracking
  public trackSearch(query: string): void {
    this.trackEvent({
      action: 'search',
      category: 'Search',
      label: query,
    });
  }

  // Product interaction tracking
  public trackProductInteraction(productId: string, action: string): void {
    this.trackEvent({
      action,
      category: 'Product',
      label: productId,
    });
  }
}

// Export a singleton instance
export const analytics = Analytics.getInstance();

// Initialize analytics when the module is imported
if (typeof window !== 'undefined') {
  analytics.initialize();
} 