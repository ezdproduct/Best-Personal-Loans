/**
 * Tracks a custom event with Facebook Pixel.
 * @param eventName The name of the event to track (e.g., 'Lead', 'Purchase').
 * @param data Optional data to send with the event.
 */
export const trackFbqEvent = (eventName: string, data?: object) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, data);
  } else {
    console.warn(`Facebook Pixel not initialized. Could not track event: ${eventName}`);
  }
};