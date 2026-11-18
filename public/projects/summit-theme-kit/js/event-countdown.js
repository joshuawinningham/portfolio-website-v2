/* ==========================================================================
   event-countdown.js · Exercise 4 (Day 4)
   <event-countdown date="2027-03-09T09:00:00-07:00"></event-countdown>
   A custom element that shows days, hours and minutes until the date.
   Its CSS lives in its shadow root, and it takes colors from the theme
   through custom properties, which inherit across the shadow boundary.
   ========================================================================== */

class EventCountdown extends HTMLElement {
  connectedCallback() {
    // TODO 4.1  Create the shadow root:
    //           this.attachShadow({ mode: 'open' })
    //           (Guard with `if (!this.shadowRoot)` so it only runs once.)

    // TODO 4.2  Fill it with a <style> block and the markup. Three units,
    //           each a <span class="unit" part="unit"> holding a number and
    //           a label (days, hrs, min). In the <style>:
    //           :host  display: flex; gap: var(--sys-space-2, 0.5rem);
    //           .unit  display: grid; place-items: center; min-width: 4.5rem;
    //                  padding, a radius, and
    //                  background: var(--comp-countdown-bg, #111);
    //                  color: var(--comp-countdown-fg, #fff);
    //           The second value in var() is a fallback for pages without tokens.

    // TODO 4.4  Read the target date: new Date(this.getAttribute('date')).
    //           Compute the milliseconds left, then days, hours and minutes
    //           (Math.floor with 86_400_000, 3_600_000, 60_000).
    //           Write them into the spans. If the date has passed, show 0s.

    // TODO 4.5  Update every 30 seconds with setInterval, and save the id
    //           on `this` so you can clear it.
  }

  disconnectedCallback() {
    // TODO 4.6  clearInterval so a removed element stops ticking.
  }
}

// TODO 4.7  Register the tag. The name must contain a hyphen.
// customElements.define('event-countdown', EventCountdown);
