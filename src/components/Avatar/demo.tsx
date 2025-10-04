import React, { useState } from 'react';
import { Typography } from '../Typography';
import { Avatar, AvatarUpload } from './index';
import { Card, CardContent, CardHeader, CardFooter } from '../Card';
import { User, UserCircle, UserMinus, UserPlus, CheckCircle, X } from 'phosphor-react';

export const AvatarDemo: React.FC = () => {
  const [selectedAvatar, setSelectedAvatar] = useState<string | null>(null);

  return (
    <div style={{ padding: '0' }}>
      <Typography variant="h1" style={{ marginBottom: '32px' }}>
        Avatar Component
      </Typography>

      <Typography variant="body" style={{ marginBottom: '32px' }}>
        The Avatar component displays user profile images, initials, or icons with various sizes, 
        shapes, and status indicators. Perfect for user profiles, chat interfaces, and user lists.
      </Typography>

      {/* Basic Examples */}
      <Card style={{ marginBottom: '32px' }}>
        <CardHeader>
          <Typography variant="h3">Basic Examples</Typography>
        </CardHeader>
        <CardContent>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Image Avatar */}
            <div>
              <Typography variant="body" weight="medium" style={{ marginBottom: '12px' }}>
                Image Avatar
              </Typography>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <Avatar
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                  alt="John Doe"
                  size="md"
                />
                <Avatar
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
                  alt="Jane Smith"
                  size="md"
                />
                <Avatar
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
                  alt="Mike Johnson"
                  size="md"
                />
              </div>
            </div>

            {/* Initials Avatar */}
            <div>
              <Typography variant="body" weight="medium" style={{ marginBottom: '12px' }}>
                Initials Avatar
              </Typography>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <Avatar initials="JD" name="John Doe" size="md" />
                <Avatar initials="JS" name="Jane Smith" size="md" />
                <Avatar initials="MJ" name="Mike Johnson" size="md" />
                <Avatar initials="AB" name="Alice Brown" size="md" />
              </div>
            </div>

            {/* Icon Avatar */}
            <div>
              <Typography variant="body" weight="medium" style={{ marginBottom: '12px' }}>
                Icon Avatar
              </Typography>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <Avatar icon={<User size={20} />} size="md" />
                <Avatar icon={<UserCircle size={20} />} size="md" />
                <Avatar icon={<UserPlus size={20} />} size="md" />
                <Avatar icon={<UserMinus size={20} />} size="md" />
              </div>
            </div>

            {/* Default Avatar */}
            <div>
              <Typography variant="body" weight="medium" style={{ marginBottom: '12px' }}>
                Default Avatar (no props)
              </Typography>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <Avatar size="md" />
                <Avatar size="md" />
                <Avatar size="md" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Sizes */}
      <Card style={{ marginBottom: '32px' }}>
        <CardHeader>
          <Typography variant="h3">Sizes</Typography>
        </CardHeader>
        <CardContent>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <Typography variant="body" weight="medium" style={{ marginBottom: '12px' }}>
                All Size Variants
              </Typography>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                  <Avatar initials="XS" size="sm" />
                  <Typography variant="caption">Small</Typography>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                  <Avatar initials="MD" size="md" />
                  <Typography variant="caption">Medium</Typography>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                  <Avatar initials="LG" size="lg" />
                  <Typography variant="caption">Large</Typography>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                  <Avatar initials="XL" size="xl" />
                  <Typography variant="caption">Extra Large</Typography>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Variants */}
      <Card style={{ marginBottom: '32px' }}>
        <CardHeader>
          <Typography variant="h3">Variants</Typography>
        </CardHeader>
        <CardContent>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <Typography variant="body" weight="medium" style={{ marginBottom: '12px' }}>
                Shape Variants
              </Typography>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                  <Avatar initials="C" variant="circle" size="lg" />
                  <Typography variant="caption">Circle</Typography>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                  <Avatar initials="R" variant="rounded" size="lg" />
                  <Typography variant="caption">Rounded</Typography>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                  <Avatar initials="S" variant="square" size="lg" />
                  <Typography variant="caption">Square</Typography>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Status Indicators */}
      <Card style={{ marginBottom: '32px' }}>
        <CardHeader>
          <Typography variant="h3">Status Indicators</Typography>
        </CardHeader>
        <CardContent>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <Typography variant="body" weight="medium" style={{ marginBottom: '12px' }}>
                Online Status
              </Typography>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                  <Avatar initials="ON" status="online" size="lg" />
                  <Typography variant="caption">Online</Typography>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                  <Avatar initials="OF" status="offline" size="lg" />
                  <Typography variant="caption">Offline</Typography>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                  <Avatar initials="AW" status="away" size="lg" />
                  <Typography variant="caption">Away</Typography>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                  <Avatar initials="BU" status="busy" size="lg" />
                  <Typography variant="caption">Busy</Typography>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Custom Colors */}
      <Card style={{ marginBottom: '32px' }}>
        <CardHeader>
          <Typography variant="h3">Custom Colors</Typography>
        </CardHeader>
        <CardContent>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <Typography variant="body" weight="medium" style={{ marginBottom: '12px' }}>
                Background and Text Colors
              </Typography>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <Avatar
                  initials="RB"
                  backgroundColor="#ff6b6b"
                  textColor="#ffffff"
                  size="lg"
                />
                <Avatar
                  initials="GB"
                  backgroundColor="#4ecdc4"
                  textColor="#ffffff"
                  size="lg"
                />
                <Avatar
                  initials="PB"
                  backgroundColor="#45b7d1"
                  textColor="#ffffff"
                  size="lg"
                />
                <Avatar
                  initials="YB"
                  backgroundColor="#f9ca24"
                  textColor="#333333"
                  size="lg"
                />
                <Avatar
                  initials="OG"
                  backgroundColor="#f0932b"
                  textColor="#ffffff"
                  size="lg"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* States */}
      <Card style={{ marginBottom: '32px' }}>
        <CardHeader>
          <Typography variant="h3">States</Typography>
        </CardHeader>
        <CardContent>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <Typography variant="body" weight="medium" style={{ marginBottom: '12px' }}>
                Different States
              </Typography>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                  <Avatar initials="LD" loading size="lg" />
                  <Typography variant="caption">Loading</Typography>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                  <Avatar initials="DS" disabled size="lg" />
                  <Typography variant="caption">Disabled</Typography>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                  <Avatar 
                    initials="CL" 
                    clickable 
                    size="lg" 
                    onClick={() => setSelectedAvatar('CL')}
                    style={{ 
                      cursor: 'pointer',
                      opacity: selectedAvatar === 'CL' ? 0.7 : 1 
                    }}
                  />
                  <Typography variant="caption">Clickable</Typography>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Advanced Features */}
      <Card style={{ marginBottom: '32px' }}>
        <CardHeader>
          <Typography variant="h3">Advanced Features</Typography>
        </CardHeader>
        <CardContent>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Auto-generated initials */}
            <div>
              <Typography variant="body" weight="medium" style={{ marginBottom: '12px' }}>
                Auto-generated Initials
              </Typography>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <Avatar name="John Doe" size="lg" />
                <Avatar name="Mary Jane Watson" size="lg" />
                <Avatar email="alice.brown@example.com" size="lg" />
                <Avatar email="mike.johnson.smith@company.com" size="lg" />
              </div>
            </div>

            {/* Fallback handling */}
            <div>
              <Typography variant="body" weight="medium" style={{ marginBottom: '12px' }}>
                Fallback Handling
              </Typography>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <Avatar
                  src="invalid-url.jpg"
                  fallback="FB"
                  alt="User with broken image"
                  size="lg"
                />
                <Avatar
                  src=""
                  initials="NI"
                  alt="User with no image"
                  size="lg"
                />
              </div>
            </div>

            {/* Custom icons */}
            <div>
              <Typography variant="body" weight="medium" style={{ marginBottom: '12px' }}>
                Custom Icons
              </Typography>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <Avatar icon={<CheckCircle size={20} />} size="lg" />
                <Avatar icon={<X size={20} />} size="lg" />
                <Avatar icon={<UserCircle size={20} />} size="lg" />
                <Avatar icon={<UserPlus size={20} />} size="lg" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stacked Avatars */}
      <Card style={{ marginBottom: '32px' }}>
        <CardHeader>
          <Typography variant="h3">Stacked Avatars</Typography>
        </CardHeader>
        <CardContent>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <Typography variant="body" weight="medium" style={{ marginBottom: '12px' }}>
                Overlapping Avatars
              </Typography>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                    alt="John Doe"
                    size="md"
                    style={{ 
                      border: '2px solid white',
                      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                      zIndex: 4
                    }}
                  />
                  <Avatar
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
                    alt="Jane Smith"
                    size="md"
                    style={{ 
                      marginLeft: '-12px',
                      border: '2px solid white',
                      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                      zIndex: 3
                    }}
                  />
                  <Avatar
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
                    alt="Mike Johnson"
                    size="md"
                    style={{ 
                      marginLeft: '-12px',
                      border: '2px solid white',
                      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                      zIndex: 2
                    }}
                  />
                  <Avatar
                    initials="+5"
                    size="md"
                    backgroundColor="var(--cria-gray-500)"
                    textColor="white"
                    style={{ 
                      marginLeft: '-12px',
                      border: '2px solid white',
                      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                      zIndex: 1,
                      cursor: 'pointer'
                    }}
                    onClick={() => alert('5 more users')}
                  />
                </div>
                <Typography variant="body2" color="secondary" style={{ marginLeft: '8px' }}>
                  8 team members
                </Typography>
              </div>
            </div>

            <div>
              <Typography variant="body" weight="medium" style={{ marginBottom: '12px' }}>
                Different Sizes
              </Typography>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                {/* Small stacked avatars */}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar initials="A" size="sm" style={{ border: '2px solid white', zIndex: 3 }} />
                  <Avatar initials="B" size="sm" style={{ marginLeft: '-8px', border: '2px solid white', zIndex: 2 }} />
                  <Avatar initials="C" size="sm" style={{ marginLeft: '-8px', border: '2px solid white', zIndex: 1 }} />
                </div>

                {/* Medium stacked avatars */}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar initials="D" size="md" style={{ border: '2px solid white', zIndex: 3 }} />
                  <Avatar initials="E" size="md" style={{ marginLeft: '-12px', border: '2px solid white', zIndex: 2 }} />
                  <Avatar initials="F" size="md" style={{ marginLeft: '-12px', border: '2px solid white', zIndex: 1 }} />
                </div>

                {/* Large stacked avatars */}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar initials="G" size="lg" style={{ border: '2px solid white', zIndex: 3 }} />
                  <Avatar initials="H" size="lg" style={{ marginLeft: '-16px', border: '2px solid white', zIndex: 2 }} />
                  <Avatar initials="I" size="lg" style={{ marginLeft: '-16px', border: '2px solid white', zIndex: 1 }} />
                </div>
              </div>
            </div>

            <div>
              <Typography variant="body" weight="medium" style={{ marginBottom: '12px' }}>
                With Status Indicators
              </Typography>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                    alt="Online User"
                    size="md"
                    status="online"
                    style={{ 
                      border: '2px solid white',
                      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                      zIndex: 4
                    }}
                  />
                  <Avatar
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
                    alt="Away User"
                    size="md"
                    status="away"
                    style={{ 
                      marginLeft: '-12px',
                      border: '2px solid white',
                      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                      zIndex: 3
                    }}
                  />
                  <Avatar
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
                    alt="Busy User"
                    size="md"
                    status="busy"
                    style={{ 
                      marginLeft: '-12px',
                      border: '2px solid white',
                      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                      zIndex: 2
                    }}
                  />
                  <Avatar
                    initials="+2"
                    size="md"
                    backgroundColor="var(--cria-gray-500)"
                    textColor="white"
                    style={{ 
                      marginLeft: '-12px',
                      border: '2px solid white',
                      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                      zIndex: 1,
                      cursor: 'pointer'
                    }}
                    onClick={() => alert('2 more users')}
                  />
                </div>
                <Typography variant="body2" color="secondary" style={{ marginLeft: '8px' }}>
                  Active team members
                </Typography>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Examples */}
      <Card style={{ marginBottom: '32px' }}>
        <CardHeader>
          <Typography variant="h3">Interactive Examples</Typography>
        </CardHeader>
        <CardContent>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <Typography variant="body" weight="medium" style={{ marginBottom: '12px' }}>
                Clickable Avatars
              </Typography>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <Avatar
                  initials="U1"
                  clickable
                  size="lg"
                  onClick={() => alert('Avatar 1 clicked!')}
                />
                <Avatar
                  initials="U2"
                  clickable
                  size="lg"
                  onClick={() => alert('Avatar 2 clicked!')}
                />
                <Avatar
                  initials="U3"
                  clickable
                  size="lg"
                  onClick={() => alert('Avatar 3 clicked!')}
                />
              </div>
            </div>

            <div>
              <Typography variant="body" weight="medium" style={{ marginBottom: '12px' }}>
                User List Example
              </Typography>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  { name: 'Alice Johnson', status: 'online' as const },
                  { name: 'Bob Smith', status: 'away' as const },
                  { name: 'Carol Davis', status: 'offline' as const },
                  { name: 'David Wilson', status: 'busy' as const },
                ].map((user, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '8px',
                      border: '1px solid var(--cria-gray-200)',
                      borderRadius: 'var(--cria-radius-md)',
                      cursor: 'pointer',
                    }}
                    onClick={() => alert(`${user.name} selected!`)}
                  >
                    <Avatar
                      name={user.name}
                      status={user.status}
                      size="md"
                    />
                    <div>
                      <Typography variant="body" weight="medium">
                        {user.name}
                      </Typography>
                      <Typography variant="caption" color="secondary">
                        {user.status}
                      </Typography>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Avatar Upload */}
      <Card style={{ marginBottom: '32px' }}>
        <CardHeader>
          <Typography variant="h3">Avatar Upload</Typography>
        </CardHeader>
        <CardContent>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
            <AvatarUpload size="lg" label="Upload profile image" />
            <AvatarUpload size="md" label="Upload avatar" />
          </div>
        </CardContent>
      </Card>

      {/* Accessibility Note */}
      <Card>
        <CardHeader>
          <Typography variant="h3">Accessibility Features</Typography>
        </CardHeader>
        <CardContent>
          <Typography variant="body">
            The Avatar component includes comprehensive accessibility features:
          </Typography>
          <ul style={{ marginTop: '16px', paddingLeft: '24px' }}>
            <li><strong>ARIA labels:</strong> Proper labeling with alt text or aria-label</li>
            <li><strong>Role attributes:</strong> Uses 'img' role for non-image avatars</li>
            <li><strong>Keyboard navigation:</strong> Full keyboard support for clickable avatars</li>
            <li><strong>Screen reader support:</strong> Clear descriptions for different avatar types</li>
            <li><strong>Focus management:</strong> Proper focus indicators and tab order</li>
            <li><strong>Status indicators:</strong> Visual status with aria-hidden for decorative elements</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};
