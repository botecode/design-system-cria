import React, { useState } from 'react';
import { ShimmerSkeleton } from './ShimmerSkeleton';
import { CriaTextHeadline1, CriaTextTitle1, CriaTextTitle2, CriaTextBody1, CriaTextBody2 } from '../TextTokens';
import { spacing, colors, radii } from '../../tokens';
import { Card } from '../Card';
import { Button } from '../Button';

export const ShimmerSkeletonDemo: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  const toggleLoading = () => {
    setIsLoading(!isLoading);
  };

  return (
    <div style={{ padding: spacing[6], maxWidth: '800px' }}>
      <div style={{ marginBottom: spacing[4] }}>
        <CriaTextHeadline1>
          Shimmer Skeleton Demo
        </CriaTextHeadline1>
      </div>
      
      <div style={{ marginBottom: spacing[8] }}>
        <CriaTextBody1>
          The Shimmer Skeleton component provides animated loading placeholders for various content types. 
          Perfect for improving perceived performance and user experience during data loading.
        </CriaTextBody1>
      </div>

      {/* Controls */}
      <Card style={{ marginBottom: spacing[8], padding: spacing[4] }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: spacing[4] }}>
          <Button onClick={toggleLoading} variant={isLoading ? 'secondary' : 'primary'}>
            {isLoading ? 'Show Content' : 'Show Loading'}
          </Button>
          <div style={{ color: colors.text.secondary }}>
            <CriaTextBody2>
              Toggle between loading and content states
            </CriaTextBody2>
          </div>
        </div>
      </Card>

      <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[8] }}>
        {/* Basic Shapes */}
        <Card style={{ padding: spacing[6] }}>
          <div style={{ marginBottom: spacing[4] }}>
            <CriaTextTitle1>
              Basic Shapes
            </CriaTextTitle1>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <div style={{ marginBottom: spacing[3] }}>
                <CriaTextBody2>
                  Rectangle (Default)
                </CriaTextBody2>
              </div>
              <ShimmerSkeleton />
            </div>

            <div>
              <div style={{ marginBottom: spacing[3] }}>
                <CriaTextBody2>
                  Circle
                </CriaTextBody2>
              </div>
              <ShimmerSkeleton variant="circle" size="lg" />
            </div>

            <div>
              <div style={{ marginBottom: spacing[3] }}>
                <CriaTextBody2>
                  Custom Dimensions
                </CriaTextBody2>
              </div>
              <ShimmerSkeleton width="200px" height="50px" />
            </div>
          </div>
        </Card>

        {/* Text Skeleton */}
        <Card style={{ padding: spacing[6] }}>
          <div style={{ marginBottom: spacing[4] }}>
            <CriaTextTitle1>
              Text Skeleton
            </CriaTextTitle1>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <div style={{ marginBottom: spacing[3] }}>
                <CriaTextBody2>
                  Single Line
                </CriaTextBody2>
              </div>
              <ShimmerSkeleton variant="text" lines={1} />
            </div>

            <div>
              <div style={{ marginBottom: spacing[3] }}>
                <CriaTextBody2>
                  Multiple Lines
                </CriaTextBody2>
              </div>
              <ShimmerSkeleton variant="text" lines={3} />
            </div>

            <div>
              <div style={{ marginBottom: spacing[3] }}>
                <CriaTextBody2>
                  Paragraph (5 lines)
                </CriaTextBody2>
              </div>
              <ShimmerSkeleton variant="text" lines={5} />
            </div>
          </div>
        </Card>

        {/* Avatar Skeleton */}
        <Card style={{ padding: spacing[6] }}>
          <div style={{ marginBottom: spacing[4] }}>
            <CriaTextTitle1>
              Avatar Skeleton
            </CriaTextTitle1>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <div style={{ marginBottom: spacing[3] }}>
                <CriaTextBody2>
                  Different Sizes
                </CriaTextBody2>
              </div>
              <div style={{ display: 'flex', gap: spacing[4], alignItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: spacing[2] }}>
                  <ShimmerSkeleton variant="avatar" size="sm" />
                  <CriaTextBody2>Small</CriaTextBody2>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: spacing[2] }}>
                  <ShimmerSkeleton variant="avatar" size="md" />
                  <CriaTextBody2>Medium</CriaTextBody2>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: spacing[2] }}>
                  <ShimmerSkeleton variant="avatar" size="lg" />
                  <CriaTextBody2>Large</CriaTextBody2>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Button Skeleton */}
        <Card style={{ padding: spacing[6] }}>
          <div style={{ marginBottom: spacing[4] }}>
            <CriaTextTitle1>
              Button Skeleton
            </CriaTextTitle1>
          </div>
          <div style={{ display: 'flex', gap: spacing[4], alignItems: 'center', flexWrap: 'wrap' }}>
            <ShimmerSkeleton variant="button" width="80px" />
            <ShimmerSkeleton variant="button" width="120px" />
            <ShimmerSkeleton variant="button" width="160px" />
          </div>
        </Card>

        {/* Card Skeleton */}
        <Card style={{ padding: spacing[6] }}>
          <div style={{ marginBottom: spacing[4] }}>
            <CriaTextTitle1>
              Card Skeleton
            </CriaTextTitle1>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <div style={{ marginBottom: spacing[3] }}>
                <CriaTextBody2>
                  Standard Card
                </CriaTextBody2>
              </div>
              <ShimmerSkeleton variant="card" height="150px" />
            </div>

            <div>
              <div style={{ marginBottom: spacing[3] }}>
                <CriaTextBody2>
                  Large Card
                </CriaTextBody2>
              </div>
              <ShimmerSkeleton variant="card" height="250px" />
            </div>
          </div>
        </Card>

        {/* Real-world Examples */}
        <Card style={{ padding: spacing[6] }}>
          <div style={{ marginBottom: spacing[4] }}>
            <CriaTextTitle1>
              Real-world Examples
            </CriaTextTitle1>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* User Profile Loading */}
            <div>
              <div style={{ marginBottom: spacing[3] }}>
                <CriaTextBody2>
                  User Profile Loading
                </CriaTextBody2>
              </div>
              <div style={{ display: 'flex', gap: spacing[4], alignItems: 'flex-start' }}>
                <ShimmerSkeleton variant="avatar" size="lg" />
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: spacing[2] }}>
                  <ShimmerSkeleton variant="text" lines={2} />
                  <ShimmerSkeleton width="60%" height="16px" />
                </div>
              </div>
            </div>

            {/* List Item Loading */}
            <div>
              <div style={{ marginBottom: spacing[3] }}>
                <CriaTextBody2>
                  List Item Loading
                </CriaTextBody2>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[3] }}>
                {[1, 2, 3].map((item) => (
                  <div key={item} style={{ display: 'flex', gap: spacing[3], alignItems: 'center' }}>
                    <ShimmerSkeleton variant="avatar" size="md" />
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: spacing[1] }}>
                      <ShimmerSkeleton width="40%" height="16px" />
                      <ShimmerSkeleton width="70%" height="14px" />
                    </div>
                    <ShimmerSkeleton variant="button" width="60px" />
                  </div>
                ))}
              </div>
            </div>

            {/* Content Card Loading */}
            <div>
              <div style={{ marginBottom: spacing[3] }}>
                <CriaTextBody2>
                  Content Card Loading
                </CriaTextBody2>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: spacing[4] }}>
                {[1, 2, 3].map((item) => (
                  <ShimmerSkeleton key={item} variant="card" height="200px" />
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Animation Control */}
        <Card style={{ padding: spacing[6] }}>
          <div style={{ marginBottom: spacing[4] }}>
            <CriaTextTitle1>
              Animation Control
            </CriaTextTitle1>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <div style={{ marginBottom: spacing[3] }}>
                <CriaTextBody2>
                  With Animation (Default)
                </CriaTextBody2>
              </div>
              <ShimmerSkeleton variant="text" lines={3} />
            </div>

            <div>
              <div style={{ marginBottom: spacing[3] }}>
                <CriaTextBody2>
                  Without Animation
                </CriaTextBody2>
              </div>
              <ShimmerSkeleton variant="text" lines={3} animated={false} />
            </div>
          </div>
        </Card>

        {/* Interactive Example */}
        <Card style={{ padding: spacing[6] }}>
          <div style={{ marginBottom: spacing[4] }}>
            <CriaTextTitle1>
              Interactive Example
            </CriaTextTitle1>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[4] }}>
            {isLoading ? (
              <div style={{ display: 'flex', gap: spacing[4], alignItems: 'flex-start' }}>
                <ShimmerSkeleton variant="avatar" size="lg" />
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: spacing[2] }}>
                  <ShimmerSkeleton variant="text" lines={2} />
                  <ShimmerSkeleton width="60%" height="16px" />
                  <div style={{ marginTop: '8px' }}>
                    <ShimmerSkeleton variant="text" lines={3} />
                  </div>
                </div>
              </div>
            ) : (
              <div style={{ display: 'flex', gap: spacing[4], alignItems: 'flex-start' }}>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    backgroundColor: colors.primary[500],
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                  }}
                >
                  JD
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ marginBottom: '4px' }}>
                    <CriaTextTitle2>
                      John Doe
                    </CriaTextTitle2>
                  </div>
                  <div style={{ color: colors.text.secondary, marginBottom: spacing[3] }}>
                    <CriaTextBody2>
                      Software Engineer
                    </CriaTextBody2>
                  </div>
                  <CriaTextBody1>
                    This is the actual content that would be displayed after loading. 
                    The shimmer skeleton provides a smooth transition from loading state to content.
                  </CriaTextBody1>
                </div>
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ShimmerSkeletonDemo;
