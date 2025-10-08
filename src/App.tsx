import React, { useState } from 'react';
import { Typography, Button, Navigation, ThemeProvider, ThemeToggle } from './index.ts';
import { CriaTextHeadline1, CriaTextTitle1, CriaTextBody1 } from './components/TextTokens';
import { House, TextAa, Mouse, PencilSimple, CheckSquare, ToggleLeft, Bell, ChatCircle, Info, Square, Tag, Tabs, List, CaretDown, Article, Layout, User, Robot } from 'phosphor-react';
import TypographyDemo from './components/Typography/demo';
import ButtonDemo from './components/Button/demo';
import CardDemo from './components/Card/demo';
import BasicCardDemo from './components/Card/BasicCardDemo';
import BadgeDemo from './components/Badge/demo';
import TagChipDemo from './components/TagChip/demo';
import TimelineDemo from './components/Timeline/demo';
import StepperDemo from './components/Stepper/demo';
import NotificationCenterDemo from './components/NotificationCenter/demo';
import { Badge } from './components/Badge';
import TopbarDemo from './components/Topbar/demo';
import DrawerDemo from './components/Drawer/demo';
import BackgroundsDemo from './components/Backgrounds/demo';
import TabsDemo from './components/Tabs/demo';
import TooltipDemo from './components/Tooltip/demo';
import ModalDemo from './components/Modal/demo';
import InputDemo from './components/Input/demo';
import { TextareaDemo } from './components/Textarea/demo';
import { AvatarDemo } from './components/Avatar/demo';
import { CheckboxDemo } from './components/Checkbox/demo';
import { SwitchDemo } from './components/Switch/demo';
import { SnackbarDemo } from './components/Snackbar/demo';
import { NavigationDemo } from './components/Navigation/demo';
import { ColorsDemo } from './components/Colors/demo';
import { AccordionDemo } from './components/Accordion/demo';
import { TextDemo } from './components/Text/demo';
import { DropdownDemo } from './components/Dropdown/demo';
import { RadioGroupDemo } from './components/RadioGroup/demo';
import { BreadcrumbsDemo } from './components/Breadcrumbs/demo';
import { PaginationDemo } from './components/Pagination/demo';
import { ProgressBarDemo } from './components/ProgressBar/demo';
import { VerticalTabsDemo } from './components/VerticalTabs/demo';
import { DatePickerDemo } from './components/DatePicker/demo';
import { FileUploadDemo } from './components/FileUpload/demo';
import { ChatDemo } from './components/Chat/demo';
import CommentsSectionDemo from './components/CommentsSection/demo';
import SliderDemo from './components/Slider/demo';
import ShimmerSkeletonDemo from './components/ShimmerSkeleton/demo';
import PricingPageDemo from './components/PricingPage/demo';
import PageLoadingProgressDemo from './components/PageLoadingProgress/demo';
import CardSelectorDemo from './components/CardSelector/demo';
import FloatingSidebarDemo from './components/FloatingSidebar/demo';
import { RowOfCardsDemo } from './components/RowOfCards/demo';
import SearchFiltersDemo from './components/SearchFilters/demo';
import FilterDropdownDemo from './components/FilterDropdown/demo';
import DividerDemo from './components/Divider/demo';
import GridDemo from './components/Grid/demo';
import ContainerDemo from './components/Container/demo';
import ScrollbarDemo from './components/Scrollbar/demo';
import FooterDemo from './components/Footer/demo';
import MegaMenuDemo from './components/MegaMenu/demo';
import CarouselDemo from './components/Carousel/demo';
import TableDemo from './components/Table/demo';
import EmptyStateDemo from './components/EmptyState/demo';
import ChartsDemo from './components/Charts/demo';
import CriaCourseCardDemo from './components/CriaCourseCard/demo';
import EventsCardsDemo from './components/EventsCards/demo';
import TrilhaCardsDemo from './components/TrilhaCards/demo';
import StatisticMetricCardDemo from './components/StatisticMetricCard/demo';
import CommandPaletteDemo from './components/CommandPalette/demo';
import ChangelogDemo from './components/Changelog/demo';
import AgentDevDemo from './app/views/AgentDev/demo';
import { AgentDev } from './app/views/AgentDev';

// Import Cartograph font
import './fonts.css';

type DemoSection = 'overview' | 'typography' | 'colors' | 'button' | 'input' | 'textarea' | 'avatar' | 'checkbox' | 'switch' | 'snackbar' | 'modal' | 'tooltip' | 'card' | 'badge' | 'tag-chip' | 'timeline' | 'stepper' | 'notification-center' | 'topbar' | 'drawer' | 'backgrounds' | 'tabs' | 'navigation' | 'accordion' | 'text' | 'dropdown' | 'radio-group' | 'breadcrumbs' | 'pagination' | 'progress-bar' | 'vertical-tabs' | 'date-picker' | 'file-upload' | 'chat' | 'pie-chart' | 'comments-section' | 'slider' | 'shimmer-skeleton' | 'pricing-page' | 'page-loading-progress' | 'card-selector' | 'floating-sidebar' | 'row-of-cards' | 'search-filters' | 'filter-dropdown' | 'divider' | 'grid' | 'container' | 'scrollbar' | 'footer' | 'mega-menu' | 'carousel' | 'table' | 'empty-state' | 'charts' | 'lesson-cards' | 'course-cards' | 'events-cards' | 'trilha-cards' | 'statistic-metric-card' | 'command-palette' | 'agent-dev';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<DemoSection>('overview');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [agentDevOpen, setAgentDevOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Initialize active section from URL hash
  React.useEffect(() => {
    const hash = window.location.hash.slice(1); // Remove the # symbol
    const validSections: DemoSection[] = ['overview', 'typography', 'colors', 'button', 'input', 'textarea', 'avatar', 'checkbox', 'switch', 'snackbar', 'modal', 'tooltip', 'card', 'badge', 'tag-chip', 'timeline', 'stepper', 'notification-center',  'topbar', 'drawer', 'backgrounds', 'tabs', 'navigation', 'accordion', 'text', 'dropdown', 'radio-group', 'breadcrumbs', 'pagination', 'progress-bar', 'vertical-tabs', 'date-picker', 'file-upload', 'chat', 'pie-chart', 'comments-section', 'slider', 'shimmer-skeleton', 'pricing-page', 'page-loading-progress', 'card-selector', 'floating-sidebar', 'row-of-cards', 'search-filters', 'filter-dropdown', 'divider', 'grid', 'container', 'scrollbar', 'footer', 'mega-menu', 'carousel', 'table', 'empty-state', 'charts', 'lesson-cards', 'course-cards', 'events-cards', 'trilha-cards', 'statistic-metric-card', 'command-palette'];
    
    if (hash && validSections.includes(hash as DemoSection)) {
      setActiveSection(hash as DemoSection);
    }
  }, []);

  // Listen for hash changes (back/forward navigation)
  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      const validSections: DemoSection[] = ['overview', 'typography', 'colors', 'button', 'input', 'textarea', 'avatar', 'checkbox', 'switch', 'snackbar', 'modal', 'tooltip', 'card', 'badge', 'tag-chip', 'timeline', 'stepper', 'notification-center',  'topbar', 'drawer', 'backgrounds', 'tabs', 'navigation', 'accordion', 'text', 'dropdown', 'radio-group', 'breadcrumbs', 'pagination', 'progress-bar', 'vertical-tabs', 'date-picker', 'file-upload', 'chat', 'pie-chart', 'comments-section', 'slider', 'shimmer-skeleton', 'pricing-page', 'page-loading-progress', 'card-selector', 'floating-sidebar', 'row-of-cards', 'search-filters', 'filter-dropdown', 'divider', 'grid', 'container', 'scrollbar', 'footer', 'mega-menu', 'carousel', 'table', 'empty-state', 'charts', 'lesson-cards', 'course-cards', 'events-cards', 'trilha-cards', 'statistic-metric-card', 'command-palette'];
      
      if (hash && validSections.includes(hash as DemoSection)) {
        setActiveSection(hash as DemoSection);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Check if we're on mobile
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const sidebarItems = [
    { id: 'overview', label: 'Overview', href: '#overview', icon: <House size={20} /> },
    { 
      id: 'foundations', 
      label: 'Foundations', 
      icon: <Square size={20} />,
      defaultExpanded: true,
      subitems: [
        // Typography is a low-level primitive powering CriaText; hide from sidebar to reduce confusion
        { id: 'colors', label: 'Colors', href: '#colors', icon: <Square size={20} /> },
        { id: 'text', label: 'Text', href: '#text', icon: <Article size={20} /> },
        { id: 'grid', label: 'Grid', href: '#grid', icon: <Layout size={20} /> }
      ]
    },
    { 
      id: 'components', 
      label: 'Components', 
      icon: <Square size={20} />,
      defaultExpanded: true,
      subitems: [
        { id: 'button', label: 'Button', href: '#button', icon: <Mouse size={20} /> },
        { id: 'input', label: 'Input', href: '#input', icon: <PencilSimple size={20} /> },
        { id: 'textarea', label: 'Textarea', href: '#textarea', icon: <TextAa size={20} /> },
        { id: 'avatar', label: 'Avatar', href: '#avatar', icon: <User size={20} /> },
        { id: 'checkbox', label: 'Checkbox', href: '#checkbox', icon: <CheckSquare size={20} /> },
        { id: 'switch', label: 'Switch', href: '#switch', icon: <ToggleLeft size={20} /> },
        { id: 'radio-group', label: 'Radio Group', href: '#radio-group', icon: <CheckSquare size={20} /> },
        { id: 'dropdown', label: 'Dropdown', href: '#dropdown', icon: <CaretDown size={20} /> }
        ,{ id: 'file-upload', label: 'File Upload', href: '#file-upload', icon: <CaretDown size={20} /> }
        ,{ id: 'chat', label: 'Chat', href: '#chat', icon: <ChatCircle size={20} /> }
        ,{ id: 'comments-section', label: 'Comments Section', href: '#comments-section', icon: <ChatCircle size={20} /> }
        ,{ id: 'slider', label: 'Slider', href: '#slider', icon: <List size={20} /> }
        ,{ id: 'shimmer-skeleton', label: 'Shimmer Skeleton', href: '#shimmer-skeleton', icon: <List size={20} /> }
        ,{ id: 'pricing-page', label: 'Pricing Page', href: '#pricing-page', icon: <List size={20} /> }
        ,{ id: 'page-loading-progress', label: 'Page Loading Progress', href: '#page-loading-progress', icon: <List size={20} /> }
        ,{ id: 'card-selector', label: 'Card Selector', href: '#card-selector', icon: <List size={20} /> }
        ,{ id: 'floating-sidebar', label: 'Floating Sidebar', href: '#floating-sidebar', icon: <Layout size={20} /> }
        ,{ id: 'search-filters', label: 'Search Filters', href: '#search-filters', icon: <CaretDown size={20} /> }
        ,{ id: 'filter-dropdown', label: 'Filter Dropdown', href: '#filter-dropdown', icon: <CaretDown size={20} /> }
        ,{ id: 'container', label: 'Container', href: '#container', icon: <Layout size={20} /> }
        ,{ id: 'scrollbar', label: 'Scrollbar', href: '#scrollbar', icon: <Layout size={20} /> }
        ,{ id: 'footer', label: 'Footer', href: '#footer', icon: <Layout size={20} /> }
        ,{ id: 'mega-menu', label: 'Mega Menu', href: '#mega-menu', icon: <Layout size={20} /> }
        ,{ id: 'command-palette', label: 'Command Palette', href: '#command-palette', icon: <List size={20} /> }
        ,{ id: 'carousel', label: 'Carousel', href: '#carousel', icon: <Layout size={20} /> }
        ,{ id: 'table', label: 'Table', href: '#table', icon: <Layout size={20} /> }
        ,{ id: 'empty-state', label: 'Empty State', href: '#empty-state', icon: <Layout size={20} /> }
      ]
    },
    { 
      id: 'content', 
      label: 'Content', 
      icon: <Article size={20} />,
      defaultExpanded: true,
      subitems: [
        { id: 'lesson-cards', label: 'Lesson - Cards', href: '#lesson-cards', icon: <Square size={20} /> },
        { id: 'course-cards', label: 'Course - Cards', href: '#course-cards', icon: <Square size={20} /> },
        { id: 'events-cards', label: 'Events - Cards', href: '#events-cards', icon: <Square size={20} /> },
        { id: 'trilha-cards', label: 'Trilha - Cards', href: '#trilha-cards', icon: <Square size={20} /> }
      ]
    },
    { 
      id: 'layout', 
      label: 'Layout', 
      icon: <Layout size={20} />,
      defaultExpanded: true,
      subitems: [
        { id: 'tabs', label: 'Tabs', href: '#tabs', icon: <Tabs size={20} /> },
        { id: 'accordion', label: 'Accordion', href: '#accordion', icon: <CaretDown size={20} /> },
        { id: 'navigation', label: 'Navigation', href: '#navigation', icon: <List size={20} /> },
        { id: 'breadcrumbs', label: 'Breadcrumbs', href: '#breadcrumbs', icon: <CaretDown size={20} /> },
        { id: 'pagination', label: 'Pagination', href: '#pagination', icon: <List size={20} /> },
        { id: 'progress-bar', label: 'Progress Bar', href: '#progress-bar', icon: <List size={20} /> },
        { id: 'stepper', label: 'Stepper', href: '#stepper', icon: <List size={20} /> },
        { id: 'date-picker', label: 'Date Picker', href: '#date-picker', icon: <List size={20} /> },
        { id: 'charts', label: 'Charts', href: '#charts', icon: <List size={20} /> },
        { id: 'divider', label: 'Divider', href: '#divider', icon: <Layout size={20} /> },
        { id: 'row-of-cards', label: 'Row of Cards', href: '#row-of-cards', icon: <Square size={20} /> },
        { id: 'statistic-metric-card', label: 'Statistic / Metric Card', href: '#statistic-metric-card', icon: <Square size={20} /> },
        { id: 'backgrounds', label: 'Backgrounds', href: '#backgrounds', icon: <Layout size={20} /> }
      ]
    },
    { 
      id: 'feedback', 
      label: 'Feedback', 
      icon: <Bell size={20} />,
      defaultExpanded: true,
      subitems: [
        { id: 'snackbar', label: 'Snackbar', href: '#snackbar', icon: <Bell size={20} /> },
        { id: 'modal', label: 'Modal', href: '#modal', icon: <ChatCircle size={20} /> },
        { id: 'tooltip', label: 'Tooltip', href: '#tooltip', icon: <Info size={20} /> },
        { id: 'badge', label: 'Badge', href: '#badge', icon: <Tag size={20} /> },
        { id: 'tag-chip', label: 'Tag / Chip', href: '#tag-chip', icon: <Tag size={20} /> },
        { id: 'timeline', label: 'Timeline / Activity Feed', href: '#timeline', icon: <List size={20} /> },
        { id: 'stepper', label: 'Stepper / Wizard', href: '#stepper', icon: <CheckSquare size={20} /> },
        { id: 'notification-center', label: 'Notification Center', href: '#notification-center', icon: <Bell size={20} /> },
        { id: 'topbar', label: 'Topbar', href: '#topbar', icon: <List size={20} /> },
        { id: 'drawer', label: 'Drawer', href: '#drawer', icon: <List size={20} /> }
      ]
    }
  ];

  const handleSectionChange = (section: DemoSection) => {
    setActiveSection(section);
    // Update the URL hash without triggering a page reload
    window.history.pushState(null, '', `#${section}`);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div style={{ padding: '0' }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <div style={{ marginBottom: '8px' }}>
                <CriaTextHeadline1>
                  CRIA_UI Design System
                </CriaTextHeadline1>
              </div>
              <div style={{ marginBottom: '16px' }}>
                <CriaTextTitle1>
                  Welcome to CRIA_UI
                </CriaTextTitle1>
              </div>
              <div style={{ marginBottom: '24px' }}>
                <CriaTextTitle1>
                  Getting Started
                </CriaTextTitle1>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
              <div style={{ padding: '20px', backgroundColor: 'var(--cria-surface-primary)', borderRadius: 'var(--cria-radius-md)', border: '1px solid var(--cria-border-primary)' }}>
                <div style={{ marginBottom: '8px' }}>
                  <CriaTextTitle1>
                    🎨 Design Tokens
                  </CriaTextTitle1>
                </div>
                <div style={{ marginBottom: '12px' }}>
                  <CriaTextBody1>
                    Consistent colors, typography, spacing, and elevation.
                  </CriaTextBody1>
                </div>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  <Button variant="outline" size="sm" onClick={() => setActiveSection('typography')}>Explore Typography</Button>
                </div>
              </div>

              <div style={{ padding: '20px', backgroundColor: 'var(--cria-surface-primary)', borderRadius: 'var(--cria-radius-md)', border: '1px solid var(--cria-border-primary)' }}>
                <div style={{ marginBottom: '8px' }}>
                  <CriaTextTitle1>
                    🧩 Components
                  </CriaTextTitle1>
                </div>
                <div style={{ marginBottom: '12px' }}>
                  <CriaTextBody1>
                    Production-ready React components.
                  </CriaTextBody1>
                </div>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  <Button variant="outline" size="sm" onClick={() => setActiveSection('button')}>View Buttons</Button>
                  <Button variant="outline" size="sm" onClick={() => setActiveSection('card')}>See Cards</Button>
                </div>
              </div>

              <div style={{ padding: '20px', backgroundColor: 'var(--cria-surface-primary)', borderRadius: 'var(--cria-radius-md)', border: '1px solid var(--cria-border-primary)' }}>
                <div style={{ marginBottom: '8px' }}>
                  <CriaTextTitle1>
                    ♿ Accessible
                  </CriaTextTitle1>
                </div>
                <div style={{ marginBottom: '12px' }}>
                  <CriaTextBody1>
                    Built with accessibility in mind.
                  </CriaTextBody1>
                </div>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  <Button variant="outline" size="sm" onClick={() => setActiveSection('colors')}>View Colors</Button>
                </div>
              </div>

              <div style={{ padding: '20px', backgroundColor: 'var(--cria-surface-primary)', borderRadius: 'var(--cria-radius-md)', border: '1px solid var(--cria-border-primary)' }}>
                <div style={{ marginBottom: '8px' }}>
                  <CriaTextTitle1>
                    📐 Layout
                  </CriaTextTitle1>
                </div>
                <div style={{ marginBottom: '12px' }}>
                  <CriaTextBody1>
                    Structural components for organizing and presenting content.
                  </CriaTextBody1>
                </div>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  <Button variant="outline" size="sm" onClick={() => setActiveSection('card')}>
                    Open Card
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => setActiveSection('badge')}>
                    Badge
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => setActiveSection('tabs')}>
                    Tabs
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => setActiveSection('accordion')}>
                    Accordion
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => setActiveSection('text')}>
                    Text
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => setActiveSection('dropdown')}>
                    Dropdown
                  </Button>
                </div>
              </div>
            </div>

            {/* Changelog Section */}
            <div style={{ marginTop: '48px' }}>
              <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                <div style={{ marginBottom: '8px' }}>
                  <CriaTextHeadline1>
                    📝 Changelog
                  </CriaTextHeadline1>
                </div>
                <div>
                  <CriaTextBody1>
                    Stay updated with the latest changes and improvements to CRIA_UI
                  </CriaTextBody1>
                </div>
              </div>
              <ChangelogDemo />
            </div>
          </div>
        );
      case 'typography':
        return <TypographyDemo />;
      case 'colors':
        return <ColorsDemo />;
      case 'button':
        return <ButtonDemo />;
      case 'input':
        return <InputDemo />;
      case 'textarea':
        return <TextareaDemo />;
      case 'avatar':
        return <AvatarDemo />;
      case 'checkbox':
        return <CheckboxDemo />;
      case 'switch':
        return <SwitchDemo />;
      case 'snackbar':
        return <SnackbarDemo />;
      case 'modal':
        return <ModalDemo />;
      case 'tooltip':
        return <TooltipDemo />;
      case 'card':
        return <BasicCardDemo />;
      case 'badge':
        return <BadgeDemo />;
      case 'tag-chip':
        return <TagChipDemo />;
      case 'timeline':
        return <TimelineDemo />;
      case 'stepper':
        return <StepperDemo />;
      case 'notification-center':
        return <NotificationCenterDemo />;
      case 'topbar':
        return <TopbarDemo />;
      case 'drawer':
        return <DrawerDemo />;
      case 'backgrounds':
        return <BackgroundsDemo />;
      case 'tabs':
        return <TabsDemo />;
      case 'navigation':
        return <NavigationDemo />;
      case 'accordion':
        return <AccordionDemo />;
        case 'text':
          return <TextDemo />;
      case 'dropdown':
        return <DropdownDemo />;
      case 'radio-group':
        return <RadioGroupDemo />;
      case 'breadcrumbs':
        return <BreadcrumbsDemo />;
      case 'pagination':
        return <PaginationDemo />;
      case 'progress-bar':
        return <ProgressBarDemo />;
      case 'vertical-tabs':
        return <VerticalTabsDemo />;
      case 'date-picker':
        return <DatePickerDemo />;
      case 'file-upload':
        return <FileUploadDemo />;
      case 'chat':
        return <ChatDemo />;
      case 'charts':
        return <ChartsDemo />;
      case 'lesson-cards':
        return <CardDemo />;
      case 'course-cards':
        return <CriaCourseCardDemo />;
      case 'events-cards':
        return <EventsCardsDemo />;
      case 'trilha-cards':
        return <TrilhaCardsDemo />;
      case 'statistic-metric-card':
        return <StatisticMetricCardDemo />;
      case 'command-palette':
        return <CommandPaletteDemo />;
      case 'agent-dev':
        return <AgentDevDemo />;
      case 'comments-section':
        return <CommentsSectionDemo />;
      case 'slider':
        return <SliderDemo />;
      case 'shimmer-skeleton':
        return <ShimmerSkeletonDemo />;
      case 'pricing-page':
        return <PricingPageDemo />;
      case 'page-loading-progress':
        return <PageLoadingProgressDemo />;
      case 'card-selector':
        return <CardSelectorDemo />;
      case 'floating-sidebar':
        return <FloatingSidebarDemo />;
      case 'row-of-cards':
        return <RowOfCardsDemo />;
      case 'search-filters':
        return <SearchFiltersDemo />;
      case 'filter-dropdown':
        return <FilterDropdownDemo />;
      case 'divider':
        return <DividerDemo />;
      case 'grid':
        return <GridDemo />;
      case 'container':
        return <ContainerDemo />;
      case 'scrollbar':
        return <ScrollbarDemo />;
      case 'footer':
        return <FooterDemo />;
      case 'mega-menu':
        return <MegaMenuDemo />;
      case 'carousel':
        return <CarouselDemo />;
      case 'table':
        return <TableDemo />;
      case 'empty-state':
        return <EmptyStateDemo />;
      default:
        return <TypographyDemo />;
    }
  };

      return (
        <ThemeProvider>
          <div style={{ minHeight: '100vh', backgroundColor: 'var(--cria-bg-primary)', position: 'relative' }}>
          {/* Mobile Toggle Button */}
          {isMobile && (
            <button
              onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen);
                if (!mobileMenuOpen) {
                  handleSectionChange('overview');
                }
              }}
              style={{
                position: 'fixed',
                top: '16px',
                left: '16px',
                zIndex: 1001,
                background: 'var(--cria-white)',
                border: '1px solid var(--cria-gray-200)',
                borderRadius: 'var(--cria-radius-sm)',
                padding: '8px',
                cursor: 'pointer',
                boxShadow: 'var(--cria-shadow-sm)'
              }}
              aria-label="Toggle menu"
            >
              <List size={20} />
            </button>
          )}


          <Navigation
            sidebar={{
              title: 'CR_IA.UI',
              titleHref: '#overview',
              subtitle: <Badge variant="secondary" size="lg">v0.40</Badge>,
              items: sidebarItems.map(item => ({
                ...item,
                onClick: item.subitems ? undefined : (e) => {
                  e.preventDefault();
                  handleSectionChange(item.id as DemoSection);
                  if (isMobile) {
                    setMobileMenuOpen(false);
                  }
                },
                subitems: item.subitems?.map(subitem => ({
                  ...subitem,
                  onClick: subitem.subitems ? undefined : (e: React.MouseEvent) => {
                    e.preventDefault();
                    handleSectionChange(subitem.id as DemoSection);
                    if (isMobile) {
                      setMobileMenuOpen(false);
                    }
                  },
                  subitems: subitem.subitems?.map((subsubitem: any) => ({
                    ...subsubitem,
                    onClick: (e: React.MouseEvent) => {
                      e.preventDefault();
                      handleSectionChange(subsubitem.id as DemoSection);
                      if (isMobile) {
                        setMobileMenuOpen(false);
                      }
                    }
                  }))
                }))
              })),
              activeRoute: `#${activeSection}`,
              collapsed: isMobile ? !mobileMenuOpen : sidebarCollapsed,
              onToggle: isMobile ? setMobileMenuOpen : setSidebarCollapsed,
              showToggle: !isMobile
            }}
            variant="sidebar-only"
            style={{ height: '100vh' }}
          />
          
          {/* Main Content */}
          <main style={{ 
            position: 'fixed',
            top: '0',
            left: isMobile ? '0' : (sidebarCollapsed ? '64px' : '256px'),
            right: '0',
            height: '100vh',
            overflowY: 'auto',
            transition: 'left 0.3s ease',
            padding: '16px',
            paddingTop: isMobile ? '60px' : '16px',
            boxSizing: 'border-box',
            zIndex: 1
          }}>
            {/* Header Controls - Top Right */}
            <div style={{
              position: 'fixed',
              top: '20px',
              right: '20px',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              {/* Theme Toggle */}
              <div style={{
                backgroundColor: 'var(--cria-surface-primary)',
                borderRadius: 'var(--cria-radius-md)',
                padding: '8px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                border: '1px solid var(--cria-border-primary)'
              }}>
                <ThemeToggle 
                  variant="icon" 
                  size="sm" 
                  showLabel={false}
                />
              </div>

              {/* Robot Icon */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setAgentDevOpen(true)}
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--cria-primary)',
                  color: 'white',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.1)';
                  e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
                }}
                title="Agent Dev - Desenvolvimento assistido por IA"
              >
                <Robot size={24} />
              </Button>
            </div>

            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
              {renderContent()}
              <div style={{ marginTop: '32px', textAlign: 'center', color: 'var(--cria-text-secondary)' }}>
                Built with ❤️ for CR_IA applications
              </div>
            </div>
          </main>

          {/* Agent Dev Drawer */}
          <AgentDev
            isOpen={agentDevOpen}
            onClose={() => setAgentDevOpen(false)}
            position="right"
            size="lg"
          />
          </div>
        </ThemeProvider>
      );
};

export default App;
