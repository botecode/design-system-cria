import React, { useState } from 'react';
import { CriaTextHeadline1, CriaTextHeadline2, CriaTextBody1, CriaTextBody2, CriaTextTitle1, CriaTextTitle2 } from '../TextTokens';
import { Button } from '../Button';
import { Card, CardHeader, CardContent } from '../Card';
import { Input } from '../Input';
import { Textarea } from '../Textarea';
import Badge from '../Badge';
import Modal from './Modal';
import { spacing, colors, radii } from '../../tokens';
import { WarningCircle, Info, CheckCircle, XCircle, Star, User, Gear, Trash } from 'phosphor-react';

export const ModalDemo: React.FC = () => {
  const [isBasicModalOpen, setIsBasicModalOpen] = useState(false);
  const [isLargeModalOpen, setIsLargeModalOpen] = useState(false);
  const [isSmallModalOpen, setIsSmallModalOpen] = useState(false);
  const [isFullModalOpen, setIsFullModalOpen] = useState(false);
  const [isCenteredModalOpen, setIsCenteredModalOpen] = useState(false);
  const [isNoHeaderModalOpen, setIsNoHeaderModalOpen] = useState(false);
  const [isNoCloseModalOpen, setIsNoCloseModalOpen] = useState(false);
  const [isNoOverlayModalOpen, setIsNoOverlayModalOpen] = useState(false);
  const [isScrollableModalOpen, setIsScrollableModalOpen] = useState(false);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isWarningModalOpen, setIsWarningModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);

  return (
    <div style={{ padding: spacing[6], maxWidth: '1000px' }}>
      <div style={{ marginBottom: spacing[8] }}>
        <CriaTextHeadline1>
          Modal Demo
        </CriaTextHeadline1>
      </div>

      {/* Basic Modal */}
      <section style={{ marginBottom: spacing[12] }}>
        <div style={{ marginBottom: spacing[4] }}>
          <CriaTextHeadline2>
            Basic Modal
          </CriaTextHeadline2>
        </div>
        <div style={{ marginBottom: spacing[6] }}>
          <CriaTextBody1>
            A simple modal with title, content, and close button. Click the button to open it.
          </CriaTextBody1>
        </div>
        <Button variant="primary" onClick={() => setIsBasicModalOpen(true)}>
          Open Basic Modal
        </Button>
        
        <Modal
          isOpen={isBasicModalOpen}
          onClose={() => setIsBasicModalOpen(false)}
          title="Basic Modal"
        >
          <div style={{ marginBottom: spacing[4] }}>
            <CriaTextBody1>
              This is a basic modal with a title and content. You can close it by clicking the X button,
              clicking outside the modal, or pressing the Escape key.
            </CriaTextBody1>
          </div>
          <CriaTextBody1>
            The modal includes proper focus management and accessibility features.
          </CriaTextBody1>
        </Modal>
      </section>

      {/* Modal Sizes */}
      <section style={{ marginBottom: spacing[12] }}>
        <div style={{ marginBottom: spacing[4] }}>
          <CriaTextHeadline2>
            Modal Sizes
          </CriaTextHeadline2>
        </div>
        <div style={{ marginBottom: spacing[6] }}>
          <CriaTextBody1>
            Different sizes for different content types and use cases.
          </CriaTextBody1>
        </div>
        <div style={{ display: 'flex', gap: spacing[3], flexWrap: 'wrap' }}>
          <Button variant="outline" onClick={() => setIsSmallModalOpen(true)}>
            Small Modal
          </Button>
          <Button variant="outline" onClick={() => setIsBasicModalOpen(true)}>
            Medium Modal
          </Button>
          <Button variant="outline" onClick={() => setIsLargeModalOpen(true)}>
            Large Modal
          </Button>
          <Button variant="outline" onClick={() => setIsFullModalOpen(true)}>
            Full Modal
          </Button>
        </div>
        
        <Modal
          isOpen={isSmallModalOpen}
          onClose={() => setIsSmallModalOpen(false)}
          title="Small Modal"
          size="sm"
        >
          <CriaTextBody1>
            This is a small modal, perfect for simple confirmations or brief messages.
          </CriaTextBody1>
        </Modal>
        
        <Modal
          isOpen={isLargeModalOpen}
          onClose={() => setIsLargeModalOpen(false)}
          title="Large Modal"
          size="lg"
        >
          <div style={{ marginBottom: spacing[4] }}>
            <CriaTextBody1>
              This is a large modal, ideal for forms, detailed content, or complex interactions.
            </CriaTextBody1>
          </div>
          <Card variant="elevated">
            <CardHeader>
              <CriaTextTitle1 >Example Card</CriaTextTitle1>
            </CardHeader>
            <CardContent>
              <CriaTextBody1>
                Large modals provide more space for content while maintaining good proportions.
              </CriaTextBody1>
            </CardContent>
          </Card>
        </Modal>
        
        <Modal
          isOpen={isFullModalOpen}
          onClose={() => setIsFullModalOpen(false)}
          title="Full Screen Modal"
          size="full"
        >
          <div style={{ marginBottom: spacing[4] }}>
            <CriaTextBody1>
              This is a full-screen modal that takes up the entire viewport. Perfect for immersive experiences
              or when you need maximum space for content.
            </CriaTextBody1>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: spacing[4] }}>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i} variant="elevated">
                <CardContent>
                  <CriaTextBody1>Card {i}</CriaTextBody1>
                </CardContent>
              </Card>
            ))}
          </div>
        </Modal>
      </section>

      {/* Modal Variants */}
      <section style={{ marginBottom: spacing[12] }}>
        <div style={{ marginBottom: spacing[4] }}>
          <CriaTextHeadline2>
            Modal Variants
          </CriaTextHeadline2>
        </div>
        <div style={{ marginBottom: spacing[6] }}>
          <CriaTextBody1>
            Different modal configurations for various use cases.
          </CriaTextBody1>
        </div>
        <div style={{ display: 'flex', gap: spacing[3], flexWrap: 'wrap' }}>
          <Button variant="outline" onClick={() => setIsNoHeaderModalOpen(true)}>
            No Header
          </Button>
          <Button variant="outline" onClick={() => setIsNoCloseModalOpen(true)}>
            No Close Button
          </Button>
          <Button variant="outline" onClick={() => setIsNoOverlayModalOpen(true)}>
            No Overlay Click
          </Button>
          <Button variant="outline" onClick={() => setIsCenteredModalOpen(true)}>
            Centered
          </Button>
        </div>
        
        <Modal
          isOpen={isNoHeaderModalOpen}
          onClose={() => setIsNoHeaderModalOpen(false)}
          showHeader={false}
        >
          <div style={{ marginBottom: spacing[4] }}>
            <CriaTextBody1>
              This modal has no header, giving you more space for content.
            </CriaTextBody1>
          </div>
          <Button variant="primary" onClick={() => setIsNoHeaderModalOpen(false)}>
            Close Modal
          </Button>
        </Modal>
        
        <Modal
          isOpen={isNoCloseModalOpen}
          onClose={() => setIsNoCloseModalOpen(false)}
          title="No Close Button"
          showCloseButton={false}
        >
          <div style={{ marginBottom: spacing[4] }}>
            <CriaTextBody1>
              This modal has no close button in the header. Users must use other methods to close it.
            </CriaTextBody1>
          </div>
          <Button variant="primary" onClick={() => setIsNoCloseModalOpen(false)}>
            Close Modal
          </Button>
        </Modal>
        
        <Modal
          isOpen={isNoOverlayModalOpen}
          onClose={() => setIsNoOverlayModalOpen(false)}
          title="No Overlay Click"
          closeOnOverlayClick={false}
        >
          <div style={{ marginBottom: spacing[4] }}>
            <CriaTextBody1>
              This modal cannot be closed by clicking the overlay. Users must use the close button or Escape key.
            </CriaTextBody1>
          </div>
          <Button variant="primary" onClick={() => setIsNoOverlayModalOpen(false)}>
            Close Modal
          </Button>
        </Modal>
        
        <Modal
          isOpen={isCenteredModalOpen}
          onClose={() => setIsCenteredModalOpen(false)}
          title="Centered Modal"
          centered={true}
        >
          <div style={{ marginBottom: spacing[4] }}>
            <CriaTextBody1>
              This modal is centered vertically on the screen, providing a balanced appearance.
            </CriaTextBody1>
          </div>
          <Button variant="primary" onClick={() => setIsCenteredModalOpen(false)}>
            Close Modal
          </Button>
        </Modal>
      </section>

      {/* Scrollable Modal */}
      <section style={{ marginBottom: spacing[12] }}>
        <div style={{ marginBottom: spacing[4] }}>
          <CriaTextHeadline2>
            Scrollable Modal
          </CriaTextHeadline2>
        </div>
        <div style={{ marginBottom: spacing[6] }}>
          <CriaTextBody1>
            Modals with scrollable content for long forms or extensive information.
          </CriaTextBody1>
        </div>
        <Button variant="outline" onClick={() => setIsScrollableModalOpen(true)}>
          Open Scrollable Modal
        </Button>
        
        <Modal
          isOpen={isScrollableModalOpen}
          onClose={() => setIsScrollableModalOpen(false)}
          title="Scrollable Modal"
          size="lg"
          scrollable={true}
        >
          <div style={{ marginBottom: spacing[4] }}>
            <CriaTextBody1>
              This modal contains a lot of content that can be scrolled through.
            </CriaTextBody1>
          </div>
          {Array.from({ length: 20 }, (_, i) => (
            <Card key={i} variant="elevated" style={{ marginBottom: spacing[4] }}>
              <CardHeader>
                <CriaTextTitle1 >Section {i + 1}</CriaTextTitle1>
              </CardHeader>
              <CardContent>
                <CriaTextBody1>
                  This is section {i + 1} of the scrollable content. Each section contains
                  different information and can be scrolled through independently.
                </CriaTextBody1>
              </CardContent>
            </Card>
          ))}
        </Modal>
      </section>

      {/* Form Modal */}
      <section style={{ marginBottom: spacing[12] }}>
        <div style={{ marginBottom: spacing[4] }}>
          <CriaTextHeadline2>
            Form Modal
          </CriaTextHeadline2>
        </div>
        <div style={{ marginBottom: spacing[6] }}>
          <CriaTextBody1>
            A modal containing a form with proper footer and button layout.
          </CriaTextBody1>
        </div>
        <Button variant="outline" onClick={() => setIsFormModalOpen(true)}>
          Open Form Modal
        </Button>
        
        <Modal
          isOpen={isFormModalOpen}
          onClose={() => setIsFormModalOpen(false)}
          title="User Settings"
          size="md"
          showFooter={true}
          footer={
            <div style={{ display: 'flex', gap: spacing[3], justifyContent: 'flex-end' }}>
              <Button variant="outline" onClick={() => setIsFormModalOpen(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={() => setIsFormModalOpen(false)}>
                Save Changes
              </Button>
            </div>
          }
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[4] }}>
            <div>
              <div style={{ marginBottom: spacing[2] }}>
                <CriaTextBody1>
                  Display Name
                </CriaTextBody1>
              </div>
              <Input
                type="text"
                placeholder="Enter your display name"
                style={{ width: '100%' }}
              />
            </div>
            <div>
              <div style={{ marginBottom: spacing[2] }}>
                <CriaTextBody1>
                  Email
                </CriaTextBody1>
              </div>
              <Input
                type="email"
                placeholder="Enter your email"
                style={{ width: '100%' }}
              />
            </div>
            <div>
              <div style={{ marginBottom: spacing[2] }}>
                <CriaTextBody1>
                  Bio
                </CriaTextBody1>
              </div>
              <Textarea
                placeholder="Tell us about yourself"
                rows={4}
                style={{ width: '100%' }}
              />
            </div>
          </div>
        </Modal>
      </section>

      {/* Confirmation Modal */}
      <section style={{ marginBottom: spacing[12] }}>
        <div style={{ marginBottom: spacing[4] }}>
          <CriaTextHeadline2>
            Confirmation Modal
          </CriaTextHeadline2>
        </div>
        <div style={{ marginBottom: spacing[6] }}>
          <CriaTextBody1>
            A modal for confirming destructive actions or important decisions.
          </CriaTextBody1>
        </div>
        <Button variant="danger" onClick={() => setIsConfirmationModalOpen(true)}>
          Delete Item
        </Button>
        
        <Modal
          isOpen={isConfirmationModalOpen}
          onClose={() => setIsConfirmationModalOpen(false)}
          title="Confirm Deletion"
          size="sm"
          showFooter={true}
          footer={
            <div style={{ display: 'flex', gap: spacing[3], justifyContent: 'flex-end' }}>
              <Button variant="outline" onClick={() => setIsConfirmationModalOpen(false)}>
                Cancel
              </Button>
              <Button variant="danger" onClick={() => setIsConfirmationModalOpen(false)}>
                Delete
              </Button>
            </div>
          }
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: spacing[3], marginBottom: spacing[4] }}>
            <WarningCircle size={24} color="var(--cria-warning)" />
            <CriaTextBody1 >
              Are you sure you want to delete this item?
            </CriaTextBody1>
          </div>
          <CriaTextBody2>
            This action cannot be undone. The item will be permanently removed from your account.
          </CriaTextBody2>
        </Modal>
      </section>

      {/* Status Modals */}
      <section style={{ marginBottom: spacing[12] }}>
        <div style={{ marginBottom: spacing[4] }}>
          <CriaTextHeadline2>
            Status Modals
          </CriaTextHeadline2>
        </div>
        <div style={{ marginBottom: spacing[6] }}>
          <CriaTextBody1>
            Modals for displaying different types of status messages and information.
          </CriaTextBody1>
        </div>
        <div style={{ display: 'flex', gap: spacing[3], flexWrap: 'wrap' }}>
          <Button variant="outline" onClick={() => setIsInfoModalOpen(true)}>
            Info Modal
          </Button>
          <Button variant="outline" onClick={() => setIsSuccessModalOpen(true)}>
            Success Modal
          </Button>
          <Button variant="outline" onClick={() => setIsWarningModalOpen(true)}>
            Warning Modal
          </Button>
          <Button variant="outline" onClick={() => setIsErrorModalOpen(true)}>
            Error Modal
          </Button>
        </div>
        
        <Modal
          isOpen={isInfoModalOpen}
          onClose={() => setIsInfoModalOpen(false)}
          title="Information"
          size="sm"
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: spacing[3], marginBottom: spacing[4] }}>
            <Info size={24} color="var(--cria-info)" />
            <CriaTextBody1 >
              Here's some important information
            </CriaTextBody1>
          </div>
          <CriaTextBody2>
            This modal provides additional context or helpful information about a feature or action.
          </CriaTextBody2>
        </Modal>
        
        <Modal
          isOpen={isSuccessModalOpen}
          onClose={() => setIsSuccessModalOpen(false)}
          title="Success"
          size="sm"
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: spacing[3], marginBottom: spacing[4] }}>
            <CheckCircle size={24} color="var(--cria-success)" />
            <CriaTextBody1 >
              Operation completed successfully
            </CriaTextBody1>
          </div>
          <CriaTextBody2>
            Your changes have been saved and are now active.
          </CriaTextBody2>
        </Modal>
        
        <Modal
          isOpen={isWarningModalOpen}
          onClose={() => setIsWarningModalOpen(false)}
          title="Warning"
          size="sm"
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: spacing[3], marginBottom: spacing[4] }}>
            <WarningCircle size={24} color="var(--cria-warning)" />
            <CriaTextBody1 >
              Please review your settings
            </CriaTextBody1>
          </div>
          <CriaTextBody2>
            Some of your current settings may cause issues. Please review and update them as needed.
          </CriaTextBody2>
        </Modal>
        
        <Modal
          isOpen={isErrorModalOpen}
          onClose={() => setIsErrorModalOpen(false)}
          title="Error"
          size="sm"
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: spacing[3], marginBottom: spacing[4] }}>
            <XCircle size={24} color="var(--cria-error)" />
            <CriaTextBody1 >
              Something went wrong
            </CriaTextBody1>
          </div>
          <CriaTextBody2>
            We encountered an error while processing your request. Please try again later.
          </CriaTextBody2>
        </Modal>
      </section>

      {/* Accessibility */}
      <section style={{ marginBottom: spacing[12] }}>
        <div style={{ marginBottom: spacing[4] }}>
          <CriaTextHeadline2>
            Accessibility Features
          </CriaTextHeadline2>
        </div>
        <div style={{ marginBottom: spacing[4] }}>
          <CriaTextBody1>
            The Modal component includes comprehensive accessibility features:
          </CriaTextBody1>
        </div>
        <ul style={{ marginLeft: spacing[6], marginBottom: spacing[4] }}>
          <li>
            <CriaTextBody1>
              <strong>Focus Management:</strong> Automatically focuses the first focusable element when opened
            </CriaTextBody1>
          </li>
          <li>
            <CriaTextBody1>
              <strong>Keyboard Navigation:</strong> Supports Escape key to close modal
            </CriaTextBody1>
          </li>
          <li>
            <CriaTextBody1>
              <strong>ARIA Attributes:</strong> Proper role="dialog", aria-modal, aria-labelledby, and aria-describedby
            </CriaTextBody1>
          </li>
          <li>
            <CriaTextBody1>
              <strong>Screen Reader Support:</strong> Modal content is properly announced to screen readers
            </CriaTextBody1>
          </li>
          <li>
            <CriaTextBody1>
              <strong>Body Scroll Lock:</strong> Prevents background scrolling when modal is open
            </CriaTextBody1>
          </li>
        </ul>
        <Button variant="outline" onClick={() => setIsBasicModalOpen(true)}>
          Test Accessible Modal
        </Button>
      </section>
    </div>
  );
};

export default ModalDemo;
