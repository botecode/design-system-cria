# CRIA Flow Editor Implementation Guide

A webflow-like visual page builder for CRIA applications that allows dynamic page creation using our design system components. Accessible via the "Wrench" icon in the top-right corner of the application.

## 🎯 Project Overview

The CRIA Flow Editor enables administrators to create dynamic pages by:
- **Parent Layout Configuration**: Selecting sidebar layouts, margins, and footer components that save to `parent_layout_schema.json`
- **Page-Specific Editing**: Clicking sidebar tabs opens specific page editors (e.g., "Cursos" → `courses_layout_schema.json`)
- **Visual Page Building**: Building content areas with drag-and-drop component blocks
- **Component Linking**: Linking filters and tabs between components
- **JSON Export System**: Exporting page configurations as structured JSON files

### 📋 Fixed Sidebar Structure
The editor will have a fixed sidebar with these main sections:
- **Home** - Main dashboard/overview page
- **Courses & Trilhas** (CURSOS & TRILHAS) - Courses and learning paths
- **Lessons** (AULAS-TUTORIAIS) - Individual lessons and tutorials
- **My Lessons** (MINHAS AULAS) - User's personal lessons
- **Events** (EVENTOS) - Events and live sessions
- **Prompts** (CATÁLOGO DE PROMPTS) - AI prompts catalog
- **Tools** (CAIXA DE FERRAMENTAS) - Tools and utilities

## 📋 Implementation Checklist

### Phase 1: Foundation & Core Structure
- [ ] **1.1** Create CRIA Flow Editor page structure and routing
- [ ] **1.2** Implement fixed sidebar with main navigation sections
- [ ] **1.3** Create parent layout configuration system
- [ ] **1.4** Set up JSON schema for parent_layout_schema.json
- [ ] **1.5** Implement page-specific routing and state management

### Phase 2: Parent Layout Configuration
- [ ] **2.1** Implement "Voltar" (Back) button with navigation
- [ ] **2.2** Create sidebar dropdown with modal carousel for parent layout
- [ ] **2.3** Build margins configuration with visual feedback
- [ ] **2.4** Implement footer selection modal for parent layout
- [ ] **2.5** Add Robot icon functionality (placeholder)
- [ ] **2.6** Create Save button that exports to parent_layout_schema.json

### Phase 3: Page-Specific Editors
- [ ] **3.1** Create Home page editor (home_layout_schema.json)
- [ ] **3.2** Create Courses & Trilhas page editor (courses_layout_schema.json)
- [ ] **3.3** Create Lessons page editor (lessons_layout_schema.json)
- [ ] **3.4** Create My Lessons page editor (my_lessons_layout_schema.json)
- [ ] **3.5** Create Events page editor (events_layout_schema.json)
- [ ] **3.6** Create Prompts page editor (prompts_layout_schema.json)
- [ ] **3.7** Create Tools page editor (tools_layout_schema.json)
- [ ] **3.8** Implement page-specific routing and navigation

### Phase 4: Margins Configuration
- [ ] **4.1** Create margins control interface
- [ ] **4.2** Implement visual margin highlighting
- [ ] **4.3** Add real-time margin preview
- [ ] **4.4** Create margin presets and custom values
- [ ] **4.5** Test margin application and persistence

### Phase 5: Footer Selection System
- [ ] **5.1** Create footer selection modal
- [ ] **5.2** Implement footer preview and selection
- [ ] **5.3** Add sticky footer positioning
- [ ] **5.4** Handle footer responsive behavior
- [ ] **5.5** Test footer integration and persistence

### Phase 6: Content Area Builder
- [ ] **6.1** Create content area with [+] blocks
- [ ] **6.2** Implement component selection modal
- [ ] **6.3** Build CriaGroup categorization system
- [ ] **6.4** Create component preview and placement
- [ ] **6.5** Add component reordering functionality

### Phase 7: Component Groups & Categories
- [ ] **7.1** Implement Courses component group
- [ ] **7.2** Implement Lessons component group
- [ ] **7.3** Implement CustomLearnings component group
- [ ] **7.4** Implement Classrooms component group
- [ ] **7.5** Implement AIPalette component group
- [ ] **7.6** Implement Events component group
- [ ] **7.7** Create component group filtering system

### Phase 8: Advanced Component Features
- [ ] **8.1** Implement filter linking between components
- [ ] **8.2** Create tab-based component organization
- [ ] **8.3** Add mandatory field validation for tabs
- [ ] **8.4** Implement component dependency system
- [ ] **8.5** Create component configuration panels

### Phase 9: JSON Export & Import
- [ ] **9.1** Design JSON schema for page configurations
- [ ] **9.2** Implement page configuration serialization
- [ ] **9.3** Create page configuration deserialization
- [ ] **9.4** Add validation for page configurations
- [ ] **9.5** Implement save/load functionality

### Phase 10: Testing & Polish
- [ ] **10.1** Create comprehensive test suite
- [ ] **10.2** Implement accessibility features
- [ ] **10.3** Add responsive design testing
- [ ] **10.4** Performance optimization
- [ ] **10.5** Documentation and examples

---

## 🚀 Current Task: Phase 1.1 - Create CRIA Flow Editor page structure and routing

### Task Description
Set up the basic page structure for the CRIA Flow Editor with proper routing, fixed sidebar navigation, and parent layout configuration system.

### Implementation Steps

#### Step 1: Create CRIA Flow Editor Page Structure
```bash
# Create the main editor page
mkdir -p src/pages/CriaFlowEditor
touch src/pages/CriaFlowEditor/CriaFlowEditor.tsx
touch src/pages/CriaFlowEditor/index.ts
```

#### Step 2: Add Routing to App.tsx
- Add new route for `/cria-flow-editor`
- Create navigation link in sidebar
- Add proper TypeScript types for all page routes

#### Step 3: Create Fixed Sidebar Navigation
- Implement fixed sidebar with 7 main sections
- Add navigation between parent layout and page-specific editors
- Create proper routing for each page type

#### Step 4: Create Parent Layout Configuration
- Top navigation bar with sidebar, margins, footer controls
- Save functionality for parent_layout_schema.json
- Visual feedback for layout changes

#### Step 5: Write Tests
- Component rendering tests
- Routing tests for all page types
- Parent layout configuration tests
- State management tests
- Accessibility tests

#### Step 6: Create Demo Page
- Basic editor interface with fixed sidebar
- Parent layout configuration demo
- Navigation between different page editors

### Expected Output
- Functional CRIA Flow Editor page accessible via `/cria-flow-editor`
- Fixed sidebar with 7 navigation sections
- Parent layout configuration system
- Proper routing for all page types
- Test coverage for core functionality
- Demo page showcasing the editor

### Files to Create/Modify
- `src/pages/CriaFlowEditor/CriaFlowEditor.tsx` (new)
- `src/pages/CriaFlowEditor/index.ts` (new)
- `src/pages/CriaFlowEditor/ParentLayoutEditor.tsx` (new)
- `src/pages/CriaFlowEditor/PageEditor.tsx` (new)
- `src/App.tsx` (modify - add routing)
- `src/pages/CriaFlowEditor/__tests__/CriaFlowEditor.test.tsx` (new)
- `src/pages/CriaFlowEditor/demo.tsx` (new)

### Testing Requirements
- [ ] Page renders without errors
- [ ] Navigation works correctly
- [ ] State management functions properly

### Versioning Requirements
- [ ] Update version using Semantic Versioning after completion
- [ ] Use appropriate version bump: patch (bug fixes), minor (new features), major (breaking changes)
- [ ] Run `npm run release:patch` (or appropriate level) to update version and create git tag
- [ ] Include version update in commit message
- [ ] Accessibility standards met
- [ ] Responsive design works

### Git Workflow
1. Create feature branch: `feature/cria-flow-editor-foundation`
2. Implement changes with tests
3. Run linting and fix issues
4. Commit with conventional commit message
5. Merge to main branch
6. Update this checklist

---

## 📝 JSON Schema Design

### Parent Layout Schema (parent_layout_schema.json)
```json
{
  "parentLayoutId": "string",
  "parentLayoutName": "string",
  "parentLayoutDescription": "string",
  "sidebar": {
    "type": "string",
    "config": {}
  },
  "margins": {
    "top": "number",
    "right": "number",
    "bottom": "number",
    "left": "number"
  },
  "footer": {
    "type": "string",
    "config": {}
  },
  "metadata": {
    "createdAt": "string",
    "updatedAt": "string",
    "version": "string"
  }
}
```

### Page-Specific Layout Schema (e.g., courses_layout_schema.json)
```json
{
  "pageId": "string",
  "pageName": "string",
  "pageDescription": "string",
  "parentLayoutId": "string",
  "content": [
    {
      "id": "string",
      "type": "string",
      "group": "string",
      "config": {},
      "filters": {},
      "tabs": []
    }
  ],
  "metadata": {
    "createdAt": "string",
    "updatedAt": "string",
    "version": "string"
  }
}
```

---

## 🗂️ Page-to-JSON Mapping

| Sidebar Section | JSON File | Description |
|----------------|-----------|-------------|
| **Home** | `home_layout_schema.json` | Main dashboard/overview page |
| **Courses & Trilhas** | `courses_layout_schema.json` | Courses and learning paths |
| **Lessons** | `lessons_layout_schema.json` | Individual lessons and tutorials |
| **My Lessons** | `my_lessons_layout_schema.json` | User's personal lessons |
| **Events** | `events_layout_schema.json` | Events and live sessions |
| **Prompts** | `prompts_layout_schema.json` | AI prompts catalog |
| **Tools** | `tools_layout_schema.json` | Tools and utilities |

---

## 🎨 Component Groups Structure

### Courses Group
- Last courses added (small card)
- Last courses added (regular card)
- All courses
- Your courses
- Featured courses
- Course categories

### Lessons Group
- Last lessons added (small card)
- Last lessons added (regular card)
- All lessons
- Your lessons
- Finished lessons
- Lesson categories
- Upcoming lessons

### CustomLearnings Group
- Learning paths
- Custom tracks
- Personalized content
- Progress tracking

### Classrooms Group
- Active classrooms
- Classroom events
- Upcoming sessions
- Past sessions

### AIPalette Group
- AI tools
- AI assistants
- AI features
- AI recommendations

### Events Group
- Upcoming events
- Past events
- Event categories
- Event registration

---

## 🔗 Component Linking System

### Filter Linking
- Components can share filter states
- Filter changes propagate to linked components
- Visual indicators show linked components
- Filter dependency management

### Tab Linking
- Components can be organized in tabs
- Each tab can have multiple components
- Mandatory fields for tab content
- Tab switching affects component visibility

---

## 📱 Responsive Design Considerations

- Mobile-first approach
- Touch-friendly drag and drop
- Responsive component previews
- Mobile navigation patterns
- Tablet optimization

---

## ♿ Accessibility Features

- Keyboard navigation support
- Screen reader compatibility
- High contrast mode support
- Focus management
- ARIA labels and descriptions

---

## 🚀 Performance Optimization

- Lazy loading of components
- Virtual scrolling for large lists
- Debounced state updates
- Memoized component renders
- Bundle splitting

---

## 📊 Analytics & Tracking

- Component usage tracking
- Page performance metrics
- User interaction analytics
- Error tracking and reporting

---

## 🔧 Development Tools

- Hot reload support
- Component debugging tools
- State inspection
- Performance profiling
- Error boundaries

---

## 📚 Documentation Requirements

- Component API documentation
- Usage examples
- Best practices guide
- Troubleshooting guide
- Video tutorials

---

## 🧪 Testing Strategy

### Unit Tests
- Component rendering
- State management
- Utility functions
- API interactions

### Integration Tests
- Component interactions
- Data flow
- User workflows
- Error handling

### E2E Tests
- Complete user journeys
- Cross-browser testing
- Performance testing
- Accessibility testing

---

## 🎯 Success Metrics

- Page load time < 2 seconds
- Component drag response < 100ms
- 100% test coverage for core functionality
- WCAG 2.1 AA compliance
- Cross-browser compatibility (Chrome, Firefox, Safari, Edge)

---

## 📋 Next Steps After Completion

1. **User Testing**: Conduct usability testing with administrators
2. **Performance Optimization**: Based on real-world usage data
3. **Feature Enhancements**: Based on user feedback
4. **Documentation**: Create comprehensive user guides
5. **Training**: Develop training materials for administrators

---

*Last Updated: [Current Date]*
*Current Phase: 1.1 - Create CRIA Flow Editor page structure and routing*
*Next Command: `/IMPLEMENT_CRIA_FLOW next please`*
