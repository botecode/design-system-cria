# FIX Command - Component Issue Resolution

## Purpose
This command provides a systematic approach to fix component issues, ensure proper compilation, and maintain design system consistency.

## Process

### 1. **Chrome MCP Validation**
- Use Chrome MCP to navigate to the app and take screenshots
- Check console for errors using `mcp_Chrome_DevTools_list_console_messages`
- Verify the component renders correctly and follows design guidelines
- Take before/after screenshots to document fixes

### 2. **Visual Quality Checks**
- **Empty Page**: Ensure the page loads with content, not blank
- **Broken Styling**: Components should have proper backgrounds, borders, spacing
- **Overflow Issues**: Elements should not overflow or overlap inappropriately
- **Design Consistency**: All components must follow CRIA design system guidelines

### 3. **Error Resolution**
- Fix any console errors that prevent proper rendering
- Address TypeScript/JavaScript compilation issues
- Resolve CSS/styling conflicts
- Ensure proper prop handling and component structure

### 4. **Testing & Prevention**
- Write tests to prevent regression of the fixed issue
- Add visual regression tests if applicable
- Update component documentation if needed
- Verify all related components still work correctly

### 5. **Documentation**
- Document the root cause of the issue
- Explain the fix implemented
- Note any breaking changes or considerations
- Update component demos if styling changed

## Example Issues to Watch For
- Components without backgrounds or borders
- Text/elements overflowing page boundaries
- Missing spacing or padding
- Broken layouts or overlapping elements
- Console errors preventing proper rendering
- Missing or incorrect styling tokens

## Success Criteria
- ✅ App compiles without errors
- ✅ Console is clean (no errors/warnings)
- ✅ Component follows design system guidelines
- ✅ Visual quality is maintained
- ✅ Tests pass and prevent regression
- ✅ Screenshots show proper rendering

## Usage
When a component issue is reported, follow this process to ensure comprehensive resolution and maintain design system quality.
