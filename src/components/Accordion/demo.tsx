import React, { useState } from 'react';
import { Accordion, AccordionItem, AccordionHeader, AccordionContent } from './Accordion';
import { Button } from '../Button/Button';

export const AccordionDemo: React.FC = () => {
  const [controlledOpenItems, setControlledOpenItems] = useState<string[]>(['item1']);

  const handleControlledChange = (openItems: string[]) => {
    setControlledOpenItems(openItems);
  };

  return (
    <div style={{ padding: '24px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Accordion Component Demo</h1>
      
      <section style={{ marginBottom: '32px' }}>
        <h2>Basic Accordion (Multiple Open)</h2>
        <Accordion>
          <AccordionItem id="item1">
            <AccordionHeader>What is React?</AccordionHeader>
            <AccordionContent>
              React is a JavaScript library for building user interfaces, particularly web applications. 
              It was created by Facebook and is now maintained by Meta and the community.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem id="item2">
            <AccordionHeader>What are React Hooks?</AccordionHeader>
            <AccordionContent>
              React Hooks are functions that let you use state and other React features in functional components. 
              They were introduced in React 16.8 and allow you to write cleaner, more reusable code.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem id="item3">
            <AccordionHeader>What is JSX?</AccordionHeader>
            <AccordionContent>
              JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files. 
              It makes it easier to create and manage the structure of your React components.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <section style={{ marginBottom: '32px' }}>
        <h2>Single Open Mode</h2>
        <Accordion allowMultiple={false}>
          <AccordionItem id="single1">
            <AccordionHeader>How do I install React?</AccordionHeader>
            <AccordionContent>
              You can install React using npm or yarn. The most common way is to use Create React App:
              <pre style={{ background: '#f5f5f5', padding: '8px', borderRadius: '4px', marginTop: '8px' }}>
                npx create-react-app my-app
              </pre>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem id="single2">
            <AccordionHeader>What is the Virtual DOM?</AccordionHeader>
            <AccordionContent>
              The Virtual DOM is a JavaScript representation of the real DOM. React uses it to optimize 
              updates by comparing the virtual DOM with the previous version and only updating the parts 
              that have changed.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem id="single3">
            <AccordionHeader>How does React handle events?</AccordionHeader>
            <AccordionContent>
              React uses SyntheticEvent, a cross-browser wrapper around the native event system. 
              This ensures that events work consistently across all browsers and provides additional 
              features like event pooling.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <section style={{ marginBottom: '32px' }}>
        <h2>Bordered Variant</h2>
        <Accordion variant="bordered">
          <AccordionItem id="bordered1">
            <AccordionHeader>Component Lifecycle</AccordionHeader>
            <AccordionContent>
              React components have a lifecycle that consists of three main phases: mounting, updating, and unmounting. 
              Each phase has specific methods that you can override to run code at particular times.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem id="bordered2">
            <AccordionHeader>State vs Props</AccordionHeader>
            <AccordionContent>
              State is internal to a component and can be changed by the component itself. Props are external 
              and are passed down from parent components. Props are read-only and cannot be modified by the child component.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <section style={{ marginBottom: '32px' }}>
        <h2>Different Sizes</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }}>
          <div>
            <h3>Small</h3>
            <Accordion size="sm">
              <AccordionItem id="small1">
                <AccordionHeader>Small Accordion</AccordionHeader>
                <AccordionContent>This is a small sized accordion.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div>
            <h3>Medium</h3>
            <Accordion size="md">
              <AccordionItem id="medium1">
                <AccordionHeader>Medium Accordion</AccordionHeader>
                <AccordionContent>This is a medium sized accordion.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div>
            <h3>Large</h3>
            <Accordion size="lg">
              <AccordionItem id="large1">
                <AccordionHeader>Large Accordion</AccordionHeader>
                <AccordionContent>This is a large sized accordion.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '32px' }}>
        <h2>Default Open Items</h2>
        <Accordion defaultOpenItems={['default1', 'default3']}>
          <AccordionItem id="default1">
            <AccordionHeader>This item is open by default</AccordionHeader>
            <AccordionContent>
              This accordion item is open by default because it's included in the defaultOpenItems array.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem id="default2">
            <AccordionHeader>This item is closed by default</AccordionHeader>
            <AccordionContent>
              This accordion item is closed by default.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem id="default3">
            <AccordionHeader>This item is also open by default</AccordionHeader>
            <AccordionContent>
              This accordion item is also open by default.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <section style={{ marginBottom: '32px' }}>
        <h2>Controlled Mode</h2>
        <p>Currently open items: {controlledOpenItems.join(', ') || 'none'}</p>
        <div style={{ marginBottom: '16px' }}>
          <Button 
            onClick={() => setControlledOpenItems(['item1'])}
            size="sm"
            style={{ marginRight: '8px' }}
          >
            Open Item 1
          </Button>
          <Button 
            onClick={() => setControlledOpenItems(['item2'])}
            size="sm"
            style={{ marginRight: '8px' }}
          >
            Open Item 2
          </Button>
          <Button 
            onClick={() => setControlledOpenItems(['item1', 'item2'])}
            size="sm"
            style={{ marginRight: '8px' }}
          >
            Open Both
          </Button>
          <Button 
            onClick={() => setControlledOpenItems([])}
            size="sm"
          >
            Close All
          </Button>
        </div>
        <Accordion openItems={controlledOpenItems} onChange={handleControlledChange}>
          <AccordionItem id="item1">
            <AccordionHeader>Controlled Item 1</AccordionHeader>
            <AccordionContent>
              This accordion item is controlled by external state. You can control which items are open 
              using the buttons above.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem id="item2">
            <AccordionHeader>Controlled Item 2</AccordionHeader>
            <AccordionContent>
              This is another controlled accordion item. The state is managed by the parent component.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <section style={{ marginBottom: '32px' }}>
        <h2>Accessibility Features</h2>
        <Accordion>
          <AccordionItem id="accessibility1">
            <AccordionHeader>Keyboard Navigation</AccordionHeader>
            <AccordionContent>
              <ul>
                <li>Use <kbd>Tab</kbd> to navigate between accordion headers</li>
                <li>Use <kbd>Enter</kbd> or <kbd>Space</kbd> to toggle items</li>
                <li>Use <kbd>Arrow Up</kbd> and <kbd>Arrow Down</kbd> to navigate between headers</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem id="accessibility2">
            <AccordionHeader>Screen Reader Support</AccordionHeader>
            <AccordionContent>
              <ul>
                <li>Headers have proper ARIA attributes (aria-expanded, aria-controls)</li>
                <li>Content panels have role="region" and aria-labelledby</li>
                <li>State changes are announced to screen readers</li>
                <li>Focus management is handled properly</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  );
};

export default AccordionDemo;
