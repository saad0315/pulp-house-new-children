# Comprehensive Project Audit Report

**Date:** January 29, 2026
**Project:** The Pulp House Landing Page
**Focus:** Performance, Accessibility (A11y), Responsiveness

## Executive Summary

**Can you achieve a 98-99 Lighthouse Performance Score?**
**Yes, but it requires significant optimization.**

The current architecture (Next.js App Router) is solid, but the heavy use of client-side animations (`framer-motion`) and complex UI interactions (infinite sliders, before/after comparisons) places a heavy load on the main thread. Achieving a 99 score, especially on mobile, will require:

1.  **Strict Code Splitting:** Reducing the initial JavaScript bundle.
2.  **Lazy Loading:** Deferring off-screen components (specifically `Portfolio`, `BeforeAfter`, and `Timeline`).
3.  **Image Optimization:** enforcing `sizes` props and `priority` attributes.
4.  **Reducing Main Thread Work:** Simplifying or removing heavy animation loops on mobile.

---

## 1. Performance Audit (The Path to 99)

### Critical Issues

*   **Largest Contentful Paint (LCP):**
    *   **Hero Images:** The 3D book mockup in `Hero.tsx` is built with heavy DOM elements and gradients. If this takes too long to render, LCP suffers.
    *   **Font Loading:** `next/font` is used correctly in `layout.tsx`, which is excellent.

*   **Cumulative Layout Shift (CLS):**
    *   **Animations:** Elements animating *in* (`opacity: 0` to `1` with `y` translation) can cause shifts if their initial space isn't reserved.
    *   **Hero Text:** The "Accepting new authors" badge and headline animate in. This must be handled carefully to avoid pushing content down after hydration.

*   **Total Blocking Time (TBT):**
    *   **Framer Motion:** You are using `framer-motion` extensively. On low-end mobile devices, parsing all these animation definitions blocks the main thread.
    *   **Infinite Loops:** The `Portfolio.tsx` component runs a JavaScript interval (`setInterval` calling `nextSlide`) *and* CSS animations. This constant recalculation drains CPU.
    *   **Comparison Component:** `BeforeAfter.tsx` likely uses heavy event listeners for the slider.

### Action Plan for Speed
1.  **Add `priority`** to any image above the fold (though most of your Hero visuals are CSS/DOM-based, which is actually good for loading speed but bad for rendering cost).
2.  **Use `LazyMotion`:** Wrap the app in `<LazyMotion features={domAnimation}>` to drastically reduce the Framer Motion bundle size.
3.  **Defer Heavy Sections:** The `Portfolio`, `Timeline`, and `BeforeAfter` components should likely be lazy-loaded using `next/dynamic` so they don't hydrate until the user scrolls near them.

---

## 2. Accessibility (A11y) Audit

### Critical Issues

*   **Contrast Ratios:**
    *   **Orange/Brand Colors:** Text on `bg-orange-50` or usage of `text-brand` (orange) on white needs to be checked against WCAG AA standards. Orange often fails on white backgrounds for small text.
    *   **Gradients:** Text overlaid on gradients (like in `Portfolio.tsx` cards) often lacks sufficient contrast.

*   **Interactive Elements:**
    *   **Carousel Buttons:** In `Portfolio.tsx`, the arrow buttons (`ChevronLeft`, `ChevronRight`) need `aria-label="Previous slide"` and `aria-label="Next slide"`. Currently, screen readers just see "button".
    *   **Motion Components:** If `m.div` is used as a button (e.g., in `Hero.tsx` or `Timeline.tsx` cards), it *must* have `role="button"` and `tabIndex={0}`, plus `onKeyDown` handlers for Enter/Space.

*   **Images:**
    *   **Decorative Images:** Many background gradients and abstract shapes should be explicitly hidden (`aria-hidden="true"`).
    *   **Alt Text:** Ensure `alt` text in `MadeInUSA.tsx` and `AuthorSuccessSpotlight.tsx` describes the *content* (e.g., "Cover of book 'The Authority Code' by James Sterling") rather than just "Book cover".

---

## 3. Responsiveness Audit

### Critical Issues

*   **Portfolio Carousel (`Portfolio.tsx`):**
    *   **Fixed Widths:** The component uses hardcoded calculations: `window.innerWidth < 768 ? 272 : 320`. This is "adaptive" rather than truly "fluid." On very small screens (iPhone SE, 320px wide), a 272px card leaves almost no margin.
    *   **Overflow:** The infinite mapping logic might cause horizontal scrollbars to appear on the body if `overflow-hidden` isn't strictly applied to the container.

*   **Timeline (`Timeline.tsx`):**
    *   **Sticky Behavior:** The `sticky` positioning for the left column (`The 90-Day Validator`) works great on desktop. On mobile, this stacked layout often results in the user scrolling past the context before seeing the content. The design correctly switches to a column layout, but ensure the text is readable on small devices.

*   **Comparison Component (`BeforeAfter.tsx`):**
    *   **Touch Targets:** The slider handle needs to be large enough for a thumb (min 44x44px target).
    *   **Performance:** Draggable elements on mobile often conflict with page scrolling. Ensure `touch-action: none` or similar handling is applied to the slider handle.

*   **Font Sizes:**
    *   `text-5xl` or `text-7xl` in `Hero.tsx` is massive. On mobile, ensure `break-words` or `hyphens-auto` is enabled, or reduce text size to `text-4xl` to prevent horizontal overflow.

---

## 4. Immediate Recommended Fixes

1.  **Fix Portfolio Keys:** The `Portfolio.tsx` infinite loop logic likely duplicates keys in React (`key={i}` where `i` repeats for the duplicated array). This causes React render errors. Use `key={`${i}-${unique_suffix}`}`.
2.  **Explicit Dimensions:** Ensure the `Compare` component in `BeforeAfter.tsx` has explicit height containers to prevent layout shift during loading.
3.  **Lazy Load Everything Below Hero:**
    *   `Portfolio`
    *   `BeforeAfter`
    *   `Timeline`
    *   `Comparison`
    *   `Spotlight` (in `layout.tsx`)
