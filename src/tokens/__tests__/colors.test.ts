import { colors } from '../colors';

describe('Color Tokens', () => {
  describe('Brand Colors', () => {
    it('should have correct primary brand colors', () => {
      expect(colors.primary).toBe('#7566A1');
      expect(colors.primaryLight).toBe('#3A2E52');
    });

    it('should have correct secondary brand colors', () => {
      expect(colors.secondary).toBe('#28DDB9');
      expect(colors.secondaryDark).toBe('#167B7A');
    });
  });

  describe('Text Colors', () => {
    it('should have correct text color hierarchy', () => {
      expect(colors.text.primary).toBe('#374151'); // Dark gray as default
      expect(colors.text.content).toBe('#3A2E52'); // Primary dark for content
      expect(colors.text.secondary).toBe('#6B7280');
      expect(colors.text.disabled).toBe('#9CA3AF');
      expect(colors.text.inverse).toBe('#FFFFFF');
    });

    it('should use dark gray as the default text color', () => {
      // This is the key requirement: ALL TEXT should use dark gray by default
      expect(colors.text.primary).toBe('#374151');
    });

    it('should have content text color for specific content', () => {
      // Content text should use primary dark color
      expect(colors.text.content).toBe('#3A2E52');
      expect(colors.text.content).toBe(colors.primaryLight);
    });
  });

  describe('Semantic Colors', () => {
    it('should have correct semantic colors', () => {
      expect(colors.success).toBe('#10B981');
      expect(colors.warning).toBe('#D97706'); // Darker orange for better contrast
      expect(colors.error).toBe('#DC2626'); // Darker red for better contrast
      expect(colors.info).toBe('#3B82F6');
    });
  });

  describe('Background Colors', () => {
    it('should have correct background colors', () => {
      expect(colors.background).toBe('#F2F4F3');
      expect(colors.backgroundLight).toBe('#FFFFFF');
      expect(colors.backgroundDark).toBe('#1A1A1A');
    });
  });

  describe('Gray Scale', () => {
    it('should have complete gray scale', () => {
      expect(colors.gray[50]).toBe('#F9FAFB');
      expect(colors.gray[100]).toBe('#F3F4F6');
      expect(colors.gray[200]).toBe('#E5E7EB');
      expect(colors.gray[300]).toBe('#D1D5DB');
      expect(colors.gray[400]).toBe('#9CA3AF');
      expect(colors.gray[500]).toBe('#6B7280');
      expect(colors.gray[600]).toBe('#4B5563');
      expect(colors.gray[700]).toBe('#374151');
      expect(colors.gray[800]).toBe('#1F2937');
      expect(colors.gray[900]).toBe('#111827');
    });
  });

  describe('Border Colors', () => {
    it('should have correct border colors', () => {
      expect(colors.border.light).toBe('#E5E7EB');
      expect(colors.border.medium).toBe('#D1D5DB');
      expect(colors.border.dark).toBe('#9CA3AF');
    });
  });

  describe('Color Consistency', () => {
    it('should maintain consistent color relationships', () => {
      // Primary colors should be related
      expect(colors.primary).not.toBe(colors.primaryLight);
      
      // Secondary colors should be related
      expect(colors.secondary).not.toBe(colors.secondaryDark);
      
      // Text content should match primaryLight (the requirement)
      expect(colors.text.content).toBe(colors.primaryLight);
      
      // Semantic colors should be distinct
      expect(colors.success).not.toBe(colors.warning);
      expect(colors.warning).not.toBe(colors.error);
      expect(colors.error).not.toBe(colors.info);
    });
  });
});
