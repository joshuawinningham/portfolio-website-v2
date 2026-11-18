/* ==========================================================================
   theme-picker.js · Exercise 1 (Day 1)
   Switches the event theme by setting data-theme on <html>. The CSS does
   the rest: [data-theme="harbor"] in tokens.css overrides brand tokens.
   ========================================================================== */

// TODO 1.12  Get the <select id="theme-select"> element.

// TODO 1.13  On its "change" event, set the attribute on the root element:
//            document.documentElement.dataset.theme = select.value;

// TODO 1.14  Remember the choice. Save select.value with localStorage.setItem,
//            and on page load read it back with localStorage.getItem, apply it,
//            and set select.value so the dropdown matches.
//            Wrap localStorage calls in try/catch (private windows can throw).

// Bonus 1.15  Show runtime tokens: on an <input type="color">, call
//            document.documentElement.style.setProperty('--brand-primary', input.value)
//            and watch every button change at once. Good to demo in an interview.
