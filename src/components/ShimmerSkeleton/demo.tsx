import React, { useState } from 'react';
import { ShimmerSkeleton } from './ShimmerSkeleton';
import { Typography } from '../Typography';
import { Card } from '../Card';
import { Button } from '../Button';

export const ShimmerSkeletonDemo: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  const toggleLoading = () => {
    setIsLoading(!isLoading);
  };

  return (
    <div style={{ padding: '24px', maxWidth: '800px' }}>
      <Typography variant="title1" weight="bold" style={{ marginBottom: '16px' }}>
        Shimmer Skeleton Demo
      </Typography>
      
      <Typography variant="body" style={{ marginBottom: '32px' }}>
        The Shimmer Skeleton component provides animated loading placeholders for various content types. 
        Perfect for improving perceived performance and user experience during data loading.
      </Typography>

      {/* Controls */}
      <Card style={{ marginBottom: '32px', padding: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Button onClick={toggleLoading} variant={isLoading ? 'secondary' : 'primary'}>
            {isLoading ? 'Show Content' : 'Show Loading'}
          </Button>
          <Typography variant="body2" color="secondary">
            Toggle between loading and content states
          </Typography>
        </div>
      </Card>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {/* Basic Shapes */}
        <Card style={{ padding: '24px' }}>
          <Typography variant="h3" weight="semiBold" style={{ marginBottom: '16px' }}>
            Basic Shapes
          </Typography>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <Typography variant="body2" weight="medium" style={{ marginBottom: '12px' }}>
                Rectangle (Default)
              </Typography>
              <ShimmerSkeleton />
            </div>

            <div>
              <Typography variant="body2" weight="medium" style={{ marginBottom: '12px' }}>
                Circle
              </Typography>
              <ShimmerSkeleton variant="circle" size="lg" />
            </div>

            <div>
              <Typography variant="body2" weight="medium" style={{ marginBottom: '12px' }}>
                Custom Dimensions
              </Typography>
              <ShimmerSkeleton width="200px" height="50px" />
            </div>
          </div>
        </Card>

        {/* Text Skeleton */}
        <Card style={{ padding: '24px' }}>
          <Typography variant="h3" weight="semiBold" style={{ marginBottom: '16px' }}>
            Text Skeleton
          </Typography>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <Typography variant="body2" weight="medium" style={{ marginBottom: '12px' }}>
                Single Line
              </Typography>
              <ShimmerSkeleton variant="text" lines={1} />
            </div>

            <div>
              <Typography variant="body2" weight="medium" style={{ marginBottom: '12px' }}>
                Multiple Lines
              </Typography>
              <ShimmerSkeleton variant="text" lines={3} />
            </div>

            <div>
              <Typography variant="body2" weight="medium" style={{ marginBottom: '12px' }}>
                Paragraph (5 lines)
              </Typography>
              <ShimmerSkeleton variant="text" lines={5} />
            </div>
          </div>
        </Card>

        {/* Avatar Skeleton */}
        <Card style={{ padding: '24px' }}>
          <Typography variant="h3" weight="semiBold" style={{ marginBottom: '16px' }}>
            Avatar Skeleton
          </Typography>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <Typography variant="body2" weight="medium" style={{ marginBottom: '12px' }}>
                Different Sizes
              </Typography>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                  <ShimmerSkeleton variant="avatar" size="sm" />
                  <Typography variant="caption">Small</Typography>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                  <ShimmerSkeleton variant="avatar" size="md" />
                  <Typography variant="caption">Medium</Typography>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                  <ShimmerSkeleton variant="avatar" size="lg" />
                  <Typography variant="caption">Large</Typography>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Button Skeleton */}
        <Card style={{ padding: '24px' }}>
          <Typography variant="h3" weight="semiBold" style={{ marginBottom: '16px' }}>
            Button Skeleton
          </Typography>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
            <ShimmerSkeleton variant="button" width="80px" />
            <ShimmerSkeleton variant="button" width="120px" />
            <ShimmerSkeleton variant="button" width="160px" />
          </div>
        </Card>

        {/* Card Skeleton */}
        <Card style={{ padding: '24px' }}>
          <Typography variant="h3" weight="semiBold" style={{ marginBottom: '16px' }}>
            Card Skeleton
          </Typography>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <Typography variant="body2" weight="medium" style={{ marginBottom: '12px' }}>
                Standard Card
              </Typography>
              <ShimmerSkeleton variant="card" height="150px" />
            </div>

            <div>
              <Typography variant="body2" weight="medium" style={{ marginBottom: '12px' }}>
                Large Card
              </Typography>
              <ShimmerSkeleton variant="card" height="250px" />
            </div>
          </div>
        </Card>

        {/* Real-world Examples */}
        <Card style={{ padding: '24px' }}>
          <Typography variant="h3" weight="semiBold" style={{ marginBottom: '16px' }}>
            Real-world Examples
          </Typography>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* User Profile Loading */}
            <div>
              <Typography variant="body2" weight="medium" style={{ marginBottom: '12px' }}>
                User Profile Loading
              </Typography>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <ShimmerSkeleton variant="avatar" size="lg" />
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <ShimmerSkeleton variant="text" lines={2} />
                  <ShimmerSkeleton width="60%" height="16px" />
                </div>
              </div>
            </div>

            {/* List Item Loading */}
            <div>
              <Typography variant="body2" weight="medium" style={{ marginBottom: '12px' }}>
                List Item Loading
              </Typography>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[1, 2, 3].map((item) => (
                  <div key={item} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <ShimmerSkeleton variant="avatar" size="md" />
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
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
              <Typography variant="body2" weight="medium" style={{ marginBottom: '12px' }}>
                Content Card Loading
              </Typography>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
                {[1, 2, 3].map((item) => (
                  <ShimmerSkeleton key={item} variant="card" height="200px" />
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Animation Control */}
        <Card style={{ padding: '24px' }}>
          <Typography variant="h3" weight="semiBold" style={{ marginBottom: '16px' }}>
            Animation Control
          </Typography>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <Typography variant="body2" weight="medium" style={{ marginBottom: '12px' }}>
                With Animation (Default)
              </Typography>
              <ShimmerSkeleton variant="text" lines={3} />
            </div>

            <div>
              <Typography variant="body2" weight="medium" style={{ marginBottom: '12px' }}>
                Without Animation
              </Typography>
              <ShimmerSkeleton variant="text" lines={3} animated={false} />
            </div>
          </div>
        </Card>

        {/* Interactive Example */}
        <Card style={{ padding: '24px' }}>
          <Typography variant="h3" weight="semiBold" style={{ marginBottom: '16px' }}>
            Interactive Example
          </Typography>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {isLoading ? (
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <ShimmerSkeleton variant="avatar" size="lg" />
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <ShimmerSkeleton variant="text" lines={2} />
                  <ShimmerSkeleton width="60%" height="16px" />
                  <div style={{ marginTop: '8px' }}>
                    <ShimmerSkeleton variant="text" lines={3} />
                  </div>
                </div>
              </div>
            ) : (
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    backgroundColor: '#7566A1',
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
                  <Typography variant="h4" weight="semiBold" style={{ marginBottom: '4px' }}>
                    John Doe
                  </Typography>
                  <Typography variant="body2" color="secondary" style={{ marginBottom: '12px' }}>
                    Software Engineer
                  </Typography>
                  <Typography variant="body">
                    This is the actual content that would be displayed after loading. 
                    The shimmer skeleton provides a smooth transition from loading state to content.
                  </Typography>
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
