import React, { useState } from 'react';
import { Typography } from '../Typography';
import { Button } from '../Button';
import { Card, CardHeader, CardContent } from '../Card';
import Badge from '../Badge';
import Modal from './Modal';
import { WarningCircle, Info, CheckCircle, XCircle, Star, User, Settings, Trash } from 'phosphor-react';

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
    <div style={{ padding: '24px', maxWidth: '1000px' }}>
      <Typography variant="title1" weight="bold" style={{ marginBottom: '32px' }}>
        Modal Demo
      </Typography>

      {/* Basic Modal */}
      <section style={{ marginBottom: '48px' }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: '16px' }}>
          Basic Modal
        </Typography>
        <Typography variant="body" style={{ marginBottom: '24px' }}>
          A simple modal with title, content, and close button. Click the button to open it.
        </Typography>
        <Button variant="primary" onClick={() => setIsBasicModalOpen(true)}>
          Open Basic Modal
        </Button>
        
        <Modal
          isOpen={isBasicModalOpen}
          onClose={() => setIsBasicModalOpen(false)}
          title="Basic Modal"
        >
          <Typography variant="body" style={{ marginBottom: '16px' }}>
            This is a basic modal with a title and content. You can close it by clicking the X button,
            clicking outside the modal, or pressing the Escape key.
          </Typography>
          <Typography variant="body">
            The modal includes proper focus management and accessibility features.
          </Typography>
        </Modal>
      </section>

      {/* Modal Sizes */}
      <section style={{ marginBottom: '48px' }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: '16px' }}>
          Modal Sizes
        </Typography>
        <Typography variant="body" style={{ marginBottom: '24px' }}>
          Different sizes for different content types and use cases.
        </Typography>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
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
          <Typography variant="body">
            This is a small modal, perfect for simple confirmations or brief messages.
          </Typography>
        </Modal>
        
        <Modal
          isOpen={isLargeModalOpen}
          onClose={() => setIsLargeModalOpen(false)}
          title="Large Modal"
          size="lg"
        >
          <Typography variant="body" style={{ marginBottom: '16px' }}>
            This is a large modal, ideal for forms, detailed content, or complex interactions.
          </Typography>
          <Card variant="elevated">
            <CardHeader>
              <Typography variant="h3" weight="medium">Example Card</Typography>
            </CardHeader>
            <CardContent>
              <Typography variant="body">
                Large modals provide more space for content while maintaining good proportions.
              </Typography>
            </CardContent>
          </Card>
        </Modal>
        
        <Modal
          isOpen={isFullModalOpen}
          onClose={() => setIsFullModalOpen(false)}
          title="Full Screen Modal"
          size="full"
        >
          <Typography variant="body" style={{ marginBottom: '16px' }}>
            This is a full-screen modal that takes up the entire viewport. Perfect for immersive experiences
            or when you need maximum space for content.
          </Typography>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i} variant="elevated">
                <CardContent>
                  <Typography variant="body">Card {i}</Typography>
                </CardContent>
              </Card>
            ))}
          </div>
        </Modal>
      </section>

      {/* Modal Variants */}
      <section style={{ marginBottom: '48px' }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: '16px' }}>
          Modal Variants
        </Typography>
        <Typography variant="body" style={{ marginBottom: '24px' }}>
          Different modal configurations for various use cases.
        </Typography>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
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
          <Typography variant="body" style={{ marginBottom: '16px' }}>
            This modal has no header, giving you more space for content.
          </Typography>
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
          <Typography variant="body" style={{ marginBottom: '16px' }}>
            This modal has no close button in the header. Users must use other methods to close it.
          </Typography>
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
          <Typography variant="body" style={{ marginBottom: '16px' }}>
            This modal cannot be closed by clicking the overlay. Users must use the close button or Escape key.
          </Typography>
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
          <Typography variant="body" style={{ marginBottom: '16px' }}>
            This modal is centered vertically on the screen, providing a balanced appearance.
          </Typography>
          <Button variant="primary" onClick={() => setIsCenteredModalOpen(false)}>
            Close Modal
          </Button>
        </Modal>
      </section>

      {/* Scrollable Modal */}
      <section style={{ marginBottom: '48px' }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: '16px' }}>
          Scrollable Modal
        </Typography>
        <Typography variant="body" style={{ marginBottom: '24px' }}>
          Modals with scrollable content for long forms or extensive information.
        </Typography>
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
          <Typography variant="body" style={{ marginBottom: '16px' }}>
            This modal contains a lot of content that can be scrolled through.
          </Typography>
          {Array.from({ length: 20 }, (_, i) => (
            <Card key={i} variant="elevated" style={{ marginBottom: '16px' }}>
              <CardHeader>
                <Typography variant="h3" weight="medium">Section {i + 1}</Typography>
              </CardHeader>
              <CardContent>
                <Typography variant="body">
                  This is section {i + 1} of the scrollable content. Each section contains
                  different information and can be scrolled through independently.
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Modal>
      </section>

      {/* Form Modal */}
      <section style={{ marginBottom: '48px' }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: '16px' }}>
          Form Modal
        </Typography>
        <Typography variant="body" style={{ marginBottom: '24px' }}>
          A modal containing a form with proper footer and button layout.
        </Typography>
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
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
              <Button variant="outline" onClick={() => setIsFormModalOpen(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={() => setIsFormModalOpen(false)}>
                Save Changes
              </Button>
            </div>
          }
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <Typography variant="body" weight="medium" style={{ marginBottom: '8px' }}>
                Display Name
              </Typography>
              <input
                type="text"
                placeholder="Enter your display name"
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  border: '1px solid var(--cria-gray-300)',
                  borderRadius: 'var(--cria-radius-md)',
                  fontSize: 'var(--cria-font-size-body)',
                  fontFamily: 'var(--cria-font-family)'
                }}
              />
            </div>
            <div>
              <Typography variant="body" weight="medium" style={{ marginBottom: '8px' }}>
                Email
              </Typography>
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  border: '1px solid var(--cria-gray-300)',
                  borderRadius: 'var(--cria-radius-md)',
                  fontSize: 'var(--cria-font-size-body)',
                  fontFamily: 'var(--cria-font-family)'
                }}
              />
            </div>
            <div>
              <Typography variant="body" weight="medium" style={{ marginBottom: '8px' }}>
                Bio
              </Typography>
              <textarea
                placeholder="Tell us about yourself"
                rows={4}
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  border: '1px solid var(--cria-gray-300)',
                  borderRadius: 'var(--cria-radius-md)',
                  fontSize: 'var(--cria-font-size-body)',
                  fontFamily: 'var(--cria-font-family)',
                  resize: 'vertical'
                }}
              />
            </div>
          </div>
        </Modal>
      </section>

      {/* Confirmation Modal */}
      <section style={{ marginBottom: '48px' }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: '16px' }}>
          Confirmation Modal
        </Typography>
        <Typography variant="body" style={{ marginBottom: '24px' }}>
          A modal for confirming destructive actions or important decisions.
        </Typography>
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
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
              <Button variant="outline" onClick={() => setIsConfirmationModalOpen(false)}>
                Cancel
              </Button>
              <Button variant="danger" onClick={() => setIsConfirmationModalOpen(false)}>
                Delete
              </Button>
            </div>
          }
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <WarningCircle size={24} color="var(--cria-warning)" />
            <Typography variant="body" weight="medium">
              Are you sure you want to delete this item?
            </Typography>
          </div>
          <Typography variant="body" color="secondary">
            This action cannot be undone. The item will be permanently removed from your account.
          </Typography>
        </Modal>
      </section>

      {/* Status Modals */}
      <section style={{ marginBottom: '48px' }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: '16px' }}>
          Status Modals
        </Typography>
        <Typography variant="body" style={{ marginBottom: '24px' }}>
          Modals for displaying different types of status messages and information.
        </Typography>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <Info size={24} color="var(--cria-info)" />
            <Typography variant="body" weight="medium">
              Here's some important information
            </Typography>
          </div>
          <Typography variant="body" color="secondary">
            This modal provides additional context or helpful information about a feature or action.
          </Typography>
        </Modal>
        
        <Modal
          isOpen={isSuccessModalOpen}
          onClose={() => setIsSuccessModalOpen(false)}
          title="Success"
          size="sm"
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <CheckCircle size={24} color="var(--cria-success)" />
            <Typography variant="body" weight="medium">
              Operation completed successfully
            </Typography>
          </div>
          <Typography variant="body" color="secondary">
            Your changes have been saved and are now active.
          </Typography>
        </Modal>
        
        <Modal
          isOpen={isWarningModalOpen}
          onClose={() => setIsWarningModalOpen(false)}
          title="Warning"
          size="sm"
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <WarningCircle size={24} color="var(--cria-warning)" />
            <Typography variant="body" weight="medium">
              Please review your settings
            </Typography>
          </div>
          <Typography variant="body" color="secondary">
            Some of your current settings may cause issues. Please review and update them as needed.
          </Typography>
        </Modal>
        
        <Modal
          isOpen={isErrorModalOpen}
          onClose={() => setIsErrorModalOpen(false)}
          title="Error"
          size="sm"
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <XCircle size={24} color="var(--cria-error)" />
            <Typography variant="body" weight="medium">
              Something went wrong
            </Typography>
          </div>
          <Typography variant="body" color="secondary">
            We encountered an error while processing your request. Please try again later.
          </Typography>
        </Modal>
      </section>

      {/* Accessibility */}
      <section style={{ marginBottom: '48px' }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: '16px' }}>
          Accessibility Features
        </Typography>
        <Typography variant="body" style={{ marginBottom: '16px' }}>
          The Modal component includes comprehensive accessibility features:
        </Typography>
        <ul style={{ marginLeft: '24px', marginBottom: '16px' }}>
          <li>
            <Typography variant="body">
              <strong>Focus Management:</strong> Automatically focuses the first focusable element when opened
            </Typography>
          </li>
          <li>
            <Typography variant="body">
              <strong>Keyboard Navigation:</strong> Supports Escape key to close modal
            </Typography>
          </li>
          <li>
            <Typography variant="body">
              <strong>ARIA Attributes:</strong> Proper role="dialog", aria-modal, aria-labelledby, and aria-describedby
            </Typography>
          </li>
          <li>
            <Typography variant="body">
              <strong>Screen Reader Support:</strong> Modal content is properly announced to screen readers
            </Typography>
          </li>
          <li>
            <Typography variant="body">
              <strong>Body Scroll Lock:</strong> Prevents background scrolling when modal is open
            </Typography>
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
