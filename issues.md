# BookCAT — Current Issues & Future Development Plan

Use this as a GitHub issue summary / planning note.

## Current issues / limitations

### 1) Some Discover content still needs final production polish
- A few Discover sections still show signs of mock or placeholder content during development.
- The page is feature-rich, but some data sources and fallbacks need tighter cleanup and consistency.
- Impact: users may see incomplete or uneven content depending on API availability.

### 2) External service dependency handling needs stronger fallback states
- Several features rely on Supabase Edge Functions, Gemini, Google Books, NYT Books, and RSS sources.
- If one service fails or rate-limits, the UI should degrade more gracefully.
- Impact: occasional empty states, slower loads, or partial functionality.

### 3) Mobile experience can still be improved
- The app already has responsive sections, but the overall mobile UX can be refined further.
- Areas like reading sessions, community chat, exchange flows, and long lists need extra polish on smaller screens.
- Impact: desktop experience feels stronger than mobile in some areas.

### 4) Offline support is not complete yet
- The app currently depends on live backend access for most core features.
- Reading progress, social features, and discovery tools need offline-aware behavior.
- Impact: users cannot fully rely on the app when connectivity is weak or unavailable.

### 5) Analytics and visual reporting can be expanded
- Stats are already useful, but the dashboard can become more insightful with deeper charts and trends.
- Possible gaps include yearly comparisons, reading patterns, goal forecasting, and stronger milestones.
- Impact: the analytics experience is good, but not yet best-in-class.

### 6) Content organization and naming consistency need cleanup
- Some component/file names are inconsistent or typo-like, which makes maintenance harder.
- Impact: codebase readability and long-term maintainability can be improved.

### 7) Import/export and data portability are missing
- There is no full export/import flow for user reading data yet.
- Impact: users cannot easily migrate or back up their library and reading history.

### 8) Accessibility and UX details still need review
- Some forms, modals, and interactive views would benefit from a more complete accessibility pass.
- Impact: keyboard navigation, screen reader support, and error feedback can be stronger.

## Future development plans

### Product roadmap
- [ ] Mobile app with React Native
- [ ] Book annotations and highlights
- [ ] Audiobook integration
- [ ] Reading challenges and badges
- [ ] Book club features
- [ ] Advanced statistics and visualizations
- [ ] Goodreads / LibraryThing import
- [ ] Offline support with PWA
- [ ] Multi-language support
- [ ] Dark mode improvements
- [ ] Export reading data
- [ ] Integration with library catalogs

### Nice-to-have improvements
- [ ] Better empty states and loading skeletons
- [ ] More robust error handling for all external APIs
- [ ] Improved mobile navigation and touch interactions
- [ ] Performance optimization for realtime updates
- [ ] More consistent naming and file structure cleanup
- [ ] Better test coverage for critical flows
- [ ] More customizable user profiles and privacy controls

## Suggested GitHub issue labels
- bug
- enhancement
- ui/ux
- performance
- mobile
- backend
- good first issue
- roadmap

## Short issue description template

### Title
Brief summary of the problem or feature request

### What happened
Describe the current behavior or missing capability.

### What should happen
Describe the expected result.

### Steps to reproduce
1. Open the relevant page
2. Perform the action
3. Observe the issue

### Notes
- Add screenshots if available
- Mention the browser/device if relevant
- Link related issues or PRs
