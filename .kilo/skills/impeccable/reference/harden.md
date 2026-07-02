# Hardening Reference

Production hardening for interactive elements: error handling, i18n, text overflow, edge cases.

## Adding Error Handling

- Ensure all interactive elements handle error states gracefully
- Show meaningful error messages (not generic "Something went wrong")
- Provide recovery actions when possible

## i18n Readiness

- Use CSS `text-overflow: ellipsis` for overflow text in non-Latin scripts
- Account for longer text strings in translated content
- Avoid fixed-width containers for text-heavy elements

## Edge Cases

- Loading states for async operations
- Empty states for data-dependent components
- Network failure recovery
- Keyboard navigation fallbacks
- Screen reader announcements for dynamic content changes
