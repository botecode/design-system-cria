# AGENT_DEV - Cursor Agent Development Interface

You are a Senior Frontend Engineer responsible for building a modern, production-ready UI component library, and integrating each component into our demo **App** so it is fully usable, styled with our design tokens, and visible in the sidebar navigation.

## Overview

This command implements a comprehensive agent development interface accessible via the "Robot" icon in the top-right corner of the application. The interface provides three main tabs for different agent workflows: "Criar" (Create), "Consertar" (Fix), and "Agente" (Agent).

## Implementation Plan

### Phase 1: Core Infrastructure
- [ ] Create `AgentDev` component with drawer interface
- [ ] Implement tab navigation system (Criar, Consertar, Agente)
- [ ] Add Robot icon to top-right corner of App.tsx
- [ ] Create drawer state management
- [ ] Implement responsive design for mobile/desktop

### Phase 2: Criar (Create) Tab
- [ ] Component type selection tree (Layout → Button, etc.)
- [ ] Text area for prompt input
- [ ] Image upload functionality
- [ ] "Criar" button with validation
- [ ] Form state management
- [ ] Component type mapping to existing design system structure

### Phase 3: Consertar (Fix) Tab
- [ ] Component type selection (same as Criar)
- [ ] Dynamic component list generation
- [ ] Checkbox selection for multiple components
- [ ] Text field for fix description
- [ ] "Consertar" button with validation
- [ ] Selected components state management

### Phase 4: Agente (Agent) Tab
- [ ] GitHub API integration for PR fetching
- [ ] PR filtering by "agent-fix" and "agent-create" tags
- [ ] Merged PRs section with "Em produção" tab
- [ ] Closed PRs section with "Recusado" tab
- [ ] PR status tracking and display
- [ ] Real-time PR updates

### Phase 5: Integration & Polish
- [ ] Connect to Cursor API (future)
- [ ] Add loading states and error handling
- [ ] Implement proper TypeScript types
- [ ] Add comprehensive tests
- [ ] Update sidebar navigation
- [ ] Add to main App.tsx routing

## Component Structure

```
src/components/AgentDev/
├── AgentDev.tsx                 # Main component
├── AgentDev.css                 # Styles
├── index.ts                     # Exports
├── demo.tsx                     # Demo page
├── __tests__/
│   └── AgentDev.test.tsx        # Tests
├── tabs/
│   ├── CriarTab.tsx            # Create tab component
│   ├── ConsertarTab.tsx        # Fix tab component
│   ├── AgenteTab.tsx           # Agent tab component
│   └── index.ts                # Tab exports
├── components/
│   ├── ComponentTypeSelector.tsx # Component type tree
│   ├── ComponentList.tsx        # Component selection list
│   ├── PromptInput.tsx          # Text area with image upload
│   ├── PRList.tsx              # GitHub PR list
│   └── index.ts                # Component exports
└── hooks/
    ├── useComponentTypes.ts     # Component type management
    ├── useGitHubPRs.ts         # GitHub API integration
    └── index.ts                # Hook exports
```

## Detailed Implementation

### 1. AgentDev Component

```typescript
interface AgentDevProps {
  isOpen: boolean;
  onClose: () => void;
  position?: 'left' | 'right' | 'top' | 'bottom';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

interface TabState {
  activeTab: 'criar' | 'consertar' | 'agente';
  criar: {
    selectedType: string | null;
    prompt: string;
    images: File[];
  };
  consertar: {
    selectedType: string | null;
    selectedComponents: string[];
    description: string;
  };
  agente: {
    prs: PR[];
    mergedPRs: PR[];
    closedPRs: PR[];
    loading: boolean;
  };
}
```

### 2. Criar Tab Features

- **Component Type Tree**: Hierarchical selection matching sidebar structure
- **Prompt Input**: Rich text area with markdown support
- **Image Upload**: Drag & drop with preview
- **Validation**: Required fields and file type validation
- **State Management**: Form state with validation

### 3. Consertar Tab Features

- **Component Selection**: Dynamic list based on selected type
- **Multi-select**: Checkbox interface for multiple components
- **Fix Description**: Text area for detailed fix instructions
- **Component Discovery**: Auto-detect available components
- **Validation**: Ensure at least one component selected

### 4. Agente Tab Features

- **GitHub Integration**: Fetch PRs with specific labels
- **PR Filtering**: Filter by "agent-fix" and "agent-create" tags
- **Status Tracking**: Separate merged and closed PRs
- **Real-time Updates**: Poll for new PRs
- **PR Details**: Show PR title, description, and status

## API Integration

### GitHub API Endpoints
```typescript
// Fetch PRs with specific labels
GET /repos/{owner}/{repo}/issues?labels=agent-fix,agent-create&state=all

// PR details
GET /repos/{owner}/{repo}/pulls/{pull_number}

// PR status
GET /repos/{owner}/{repo}/pulls/{pull_number}/merge
```

### Component Type Mapping
```typescript
const componentTypes = {
  'Layout': ['Card', 'Container', 'Grid', 'Divider'],
  'Forms': ['Button', 'Input', 'Checkbox', 'RadioGroup'],
  'Navigation': ['Sidebar', 'Topbar', 'Breadcrumb'],
  'Feedback': ['Modal', 'Snackbar', 'Tooltip'],
  'Data Display': ['Table', 'Badge', 'Avatar'],
  'Content': ['Typography', 'Text', 'Image']
};
```

## Styling & Design

- **Design System Integration**: Use existing CRIA tokens
- **Responsive Design**: Mobile-first approach
- **Accessibility**: WCAG 2.1 AA compliance
- **Dark Mode**: Support for theme switching
- **Animations**: Smooth transitions and micro-interactions

## Testing Strategy

### Unit Tests
- Component rendering and props
- Form validation logic
- State management
- API integration mocks

### Integration Tests
- Tab navigation
- Form submission flow
- GitHub API integration
- Error handling

### E2E Tests
- Complete user workflows
- Cross-browser compatibility
- Mobile responsiveness

## Future Enhancements

### Phase 6: Cursor Integration
- [ ] Cursor API connection
- [ ] Real-time agent communication
- [ ] Progress tracking
- [ ] Result display

### Phase 7: Advanced Features
- [ ] Agent history and logs
- [ ] Custom agent configurations
- [ ] Batch operations
- [ ] Export/import functionality

## Implementation Commands

### Development Workflow
1. **Setup**: Create component structure and basic layout
2. **Core**: Implement drawer and tab system
3. **Criar**: Build create tab with form functionality
4. **Consertar**: Build fix tab with component selection
5. **Agente**: Build agent tab with GitHub integration
6. **Integration**: Connect to main app and sidebar
7. **Testing**: Comprehensive test coverage
8. **Polish**: Final styling and accessibility

### Git Workflow
- Create feature branch: `feature/agent-dev-interface`
- Follow conventional commits
- Create PR with "agent-create" label
- Merge after review and testing

## Success Criteria

- [ ] Robot icon visible in top-right corner
- [ ] Drawer opens/closes smoothly
- [ ] All three tabs functional
- [ ] Component type selection works
- [ ] Form validation implemented
- [ ] GitHub PR integration working
- [ ] Responsive design complete
- [ ] Accessibility standards met
- [ ] Tests passing
- [ ] Documentation complete

## Dependencies

- **Existing**: Drawer, Button, Input, Typography components
- **New**: GitHub API client, file upload handling
- **External**: GitHub REST API, file handling libraries

## Timeline

- **Phase 1-2**: 2-3 days (Core infrastructure + Criar tab)
- **Phase 3-4**: 2-3 days (Consertar + Agente tabs)
- **Phase 5**: 1-2 days (Integration & polish)
- **Total**: 5-8 days for complete implementation

---

**Next Steps**: Execute `/AGENT_DEV next please` to begin implementation of the next phase.