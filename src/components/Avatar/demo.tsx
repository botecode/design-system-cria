import React, { useState } from 'react';
import { CriaTextHeadline1, CriaTextHeadline2, CriaTextBody1, CriaTextBody2, CriaTextTitle1 } from '../TextTokens';
import { Avatar, AvatarUpload, AvatarWithName } from './index';
import { Card, CardContent, CardHeader, CardFooter } from '../Card';
import { User, UserCircle, UserMinus, UserPlus, CheckCircle, X } from 'phosphor-react';
import { spacing, colors, radii } from '../../tokens';

export const AvatarDemo: React.FC = () => {
  const [selectedAvatar, setSelectedAvatar] = useState<string | null>(null);

  return (
    <div style={{ padding: '0' }}>
      <CriaTextHeadline1 style={{ marginBottom: spacing[8] }}>
        Avatar Component
      </CriaTextHeadline1>

      <CriaTextBody1 style={{ marginBottom: spacing[8] }}>
        The Avatar component displays user profile images, initials, or icons with various sizes, 
        shapes, and status indicators. Perfect for user profiles, chat interfaces, and user lists.
      </CriaTextBody1>

      {/* Basic Examples */}
      <Card style={{ marginBottom: spacing[8] }}>
        <CardHeader>
          <CriaTextTitle1>Basic Examples</CriaTextTitle1>
        </CardHeader>
        <CardContent>
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[6] }}>
            {/* Image Avatar */}
            <div>
              <CriaTextBody1 style={{ marginBottom: spacing[3] }}>
                Image Avatar
              </CriaTextBody1>
              <div style={{ display: 'flex', gap: spacing[4], alignItems: 'center' }}>
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
              <CriaTextBody1 style={{ marginBottom: spacing[3] }}>
                Initials Avatar
              </CriaTextBody1>
              <div style={{ display: 'flex', gap: spacing[4], alignItems: 'center' }}>
                <Avatar initials="JD" name="John Doe" size="md" />
                <Avatar initials="JS" name="Jane Smith" size="md" />
                <Avatar initials="MJ" name="Mike Johnson" size="md" />
                <Avatar initials="AB" name="Alice Brown" size="md" />
              </div>
            </div>

            {/* Icon Avatar */}
            <div>
              <CriaTextBody1 style={{ marginBottom: spacing[3] }}>
                Icon Avatar
              </CriaTextBody1>
              <div style={{ display: 'flex', gap: spacing[4], alignItems: 'center' }}>
                <Avatar icon={<User size={20} />} size="md" />
                <Avatar icon={<UserCircle size={20} />} size="md" />
                <Avatar icon={<UserPlus size={20} />} size="md" />
                <Avatar icon={<UserMinus size={20} />} size="md" />
              </div>
            </div>

            {/* Default Avatar */}
            <div>
              <CriaTextBody1 style={{ marginBottom: spacing[3] }}>
                Default Avatar (no props)
              </CriaTextBody1>
              <div style={{ display: 'flex', gap: spacing[4], alignItems: 'center' }}>
                <Avatar size="md" />
                <Avatar size="md" />
                <Avatar size="md" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Sizes */}
      <Card style={{ marginBottom: spacing[8] }}>
        <CardHeader>
          <CriaTextTitle1>Sizes</CriaTextTitle1>
        </CardHeader>
        <CardContent>
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[6] }}>
            <div>
              <CriaTextBody1 style={{ marginBottom: spacing[3] }}>
                All Size Variants
              </CriaTextBody1>
              <div style={{ display: 'flex', gap: spacing[4], alignItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: spacing[2] }}>
                  <Avatar initials="XS" size="sm" />
                  <CriaTextBody2>Small</CriaTextBody2>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: spacing[2] }}>
                  <Avatar initials="MD" size="md" />
                  <CriaTextBody2>Medium</CriaTextBody2>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: spacing[2] }}>
                  <Avatar initials="LG" size="lg" />
                  <CriaTextBody2>Large</CriaTextBody2>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: spacing[2] }}>
                  <Avatar initials="XL" size="xl" />
                  <CriaTextBody2>Extra Large</CriaTextBody2>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Variants */}
      <Card style={{ marginBottom: spacing[8] }}>
        <CardHeader>
          <CriaTextTitle1>Variants</CriaTextTitle1>
        </CardHeader>
        <CardContent>
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[6] }}>
            <div>
              <div style={{ marginBottom: '12px' }}>
                <CriaTextBody1>
                  Shape Variants
                </CriaTextBody1>
              </div>
              <div style={{ display: 'flex', gap: spacing[4], alignItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: spacing[2] }}>
                  <Avatar initials="C" variant="circle" size="lg" />
                  <CriaTextBody2>Circle</CriaTextBody2>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: spacing[2] }}>
                  <Avatar initials="R" variant="rounded" size="lg" />
                  <CriaTextBody2>Rounded</CriaTextBody2>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: spacing[2] }}>
                  <Avatar initials="S" variant="square" size="lg" />
                  <CriaTextBody2>Square</CriaTextBody2>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Status Indicators */}
      <Card style={{ marginBottom: spacing[8] }}>
        <CardHeader>
          <CriaTextTitle1>Status Indicators</CriaTextTitle1>
        </CardHeader>
        <CardContent>
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[6] }}>
            <div>
              <div style={{ marginBottom: '12px' }}>
                <CriaTextBody1>
                  Online Status
                </CriaTextBody1>
              </div>
              <div style={{ display: 'flex', gap: spacing[4], alignItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: spacing[2] }}>
                  <Avatar initials="ON" status="online" size="lg" />
                  <CriaTextBody2>Online</CriaTextBody2>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: spacing[2] }}>
                  <Avatar initials="OF" status="offline" size="lg" />
                  <CriaTextBody2>Offline</CriaTextBody2>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: spacing[2] }}>
                  <Avatar initials="AW" status="away" size="lg" />
                  <CriaTextBody2>Away</CriaTextBody2>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: spacing[2] }}>
                  <Avatar initials="BU" status="busy" size="lg" />
                  <CriaTextBody2>Busy</CriaTextBody2>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Custom Colors */}
      <Card style={{ marginBottom: spacing[8] }}>
        <CardHeader>
          <CriaTextTitle1>Custom Colors</CriaTextTitle1>
        </CardHeader>
        <CardContent>
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[6] }}>
            <div>
              <div style={{ marginBottom: '12px' }}>
                <CriaTextBody1>
                  Background and Text Colors
                </CriaTextBody1>
              </div>
              <div style={{ display: 'flex', gap: spacing[4], alignItems: 'center' }}>
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
      <Card style={{ marginBottom: spacing[8] }}>
        <CardHeader>
          <CriaTextTitle1>States</CriaTextTitle1>
        </CardHeader>
        <CardContent>
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[6] }}>
            <div>
              <div style={{ marginBottom: '12px' }}>
                <CriaTextBody1>
                  Different States
                </CriaTextBody1>
              </div>
              <div style={{ display: 'flex', gap: spacing[4], alignItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: spacing[2] }}>
                  <Avatar initials="LD" loading size="lg" />
                  <CriaTextBody2>Loading</CriaTextBody2>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: spacing[2] }}>
                  <Avatar initials="DS" disabled size="lg" />
                  <CriaTextBody2>Disabled</CriaTextBody2>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: spacing[2] }}>
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
                  <CriaTextBody2>Clickable</CriaTextBody2>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Advanced Features */}
      <Card style={{ marginBottom: spacing[8] }}>
        <CardHeader>
          <CriaTextTitle1>Advanced Features</CriaTextTitle1>
        </CardHeader>
        <CardContent>
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[6] }}>
            {/* Auto-generated initials */}
            <div>
              <div style={{ marginBottom: '12px' }}>
                <CriaTextBody1>
                  Auto-generated Initials
                </CriaTextBody1>
              </div>
              <div style={{ display: 'flex', gap: spacing[4], alignItems: 'center' }}>
                <Avatar name="John Doe" size="lg" />
                <Avatar name="Mary Jane Watson" size="lg" />
                <Avatar email="alice.brown@example.com" size="lg" />
                <Avatar email="mike.johnson.smith@company.com" size="lg" />
              </div>
            </div>

            {/* Fallback handling */}
            <div>
              <div style={{ marginBottom: '12px' }}>
                <CriaTextBody1>
                  Fallback Handling
                </CriaTextBody1>
              </div>
              <div style={{ display: 'flex', gap: spacing[4], alignItems: 'center' }}>
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
              <div style={{ marginBottom: '12px' }}>
                <CriaTextBody1>
                  Custom Icons
                </CriaTextBody1>
              </div>
              <div style={{ display: 'flex', gap: spacing[4], alignItems: 'center' }}>
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
      <Card style={{ marginBottom: spacing[8] }}>
        <CardHeader>
          <CriaTextTitle1>Stacked Avatars</CriaTextTitle1>
        </CardHeader>
        <CardContent>
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[6] }}>
            <div>
              <div style={{ marginBottom: '12px' }}>
                <CriaTextBody1>
                  Overlapping Avatars
                </CriaTextBody1>
              </div>
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
                <div style={{ color: colors.text.secondary, marginLeft: '8px' }}>
                  <CriaTextBody2>
                    8 team members
                  </CriaTextBody2>
                </div>
              </div>
            </div>

            <div>
              <div style={{ marginBottom: '12px' }}>
                <CriaTextBody1>
                  Different Sizes
                </CriaTextBody1>
              </div>
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
              <div style={{ marginBottom: '12px' }}>
                <CriaTextBody1>
                  With Status Indicators
                </CriaTextBody1>
              </div>
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
                <div style={{ color: colors.text.secondary, marginLeft: '8px' }}>
                  <CriaTextBody2>
                    Active team members
                  </CriaTextBody2>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Examples */}
      <Card style={{ marginBottom: spacing[8] }}>
        <CardHeader>
          <CriaTextTitle1>Interactive Examples</CriaTextTitle1>
        </CardHeader>
        <CardContent>
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[6] }}>
            <div>
              <div style={{ marginBottom: '12px' }}>
                <CriaTextBody1>
                  Clickable Avatars
                </CriaTextBody1>
              </div>
              <div style={{ display: 'flex', gap: spacing[4], alignItems: 'center' }}>
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
              <div style={{ marginBottom: '12px' }}>
                <CriaTextBody1>
                  User List Example
                </CriaTextBody1>
              </div>
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
                      <CriaTextBody1>
                        {user.name}
                      </CriaTextBody1>
                      <div style={{ color: colors.text.secondary }}>
                        <CriaTextBody2>
                          {user.status}
                        </CriaTextBody2>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Avatar with Name */}
      <Card style={{ marginBottom: spacing[8] }}>
        <CardHeader>
          <CriaTextTitle1>Avatar with Name</CriaTextTitle1>
        </CardHeader>
        <CardContent>
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[6] }}>
            <div>
              <div style={{ marginBottom: '12px' }}>
                <CriaTextBody1>
                  Basic Examples
                </CriaTextBody1>
              </div>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
                <AvatarWithName
                  name="Sarah Wilson"
                  avatarProps={{
                    src: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
                    alt: "Sarah Wilson"
                  }}
                />
                <AvatarWithName
                  name="David Brown"
                  avatarProps={{
                    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
                    alt: "David Brown"
                  }}
                />
                <AvatarWithName
                  name="Emily Johnson"
                  avatarProps={{
                    initials: "EJ",
                    backgroundColor: "#7566A1",
                    textColor: "#ffffff"
                  }}
                />
              </div>
            </div>

            <div>
              <div style={{ marginBottom: '12px' }}>
                <CriaTextBody1>
                  Size Variants
                </CriaTextBody1>
              </div>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
                <AvatarWithName
                  name="Small Size"
                  size="sm"
                  avatarProps={{
                    initials: "SM",
                    backgroundColor: "#4ecdc4",
                    textColor: "#ffffff"
                  }}
                />
                <AvatarWithName
                  name="Medium Size"
                  size="md"
                  avatarProps={{
                    initials: "MD",
                    backgroundColor: "#45b7d1",
                    textColor: "#ffffff"
                  }}
                />
                <AvatarWithName
                  name="Large Size"
                  size="lg"
                  avatarProps={{
                    initials: "LG",
                    backgroundColor: "#f9ca24",
                    textColor: "#333333"
                  }}
                />
              </div>
            </div>

            <div>
              <div style={{ marginBottom: '12px' }}>
                <CriaTextBody1>
                  Style Variants
                </CriaTextBody1>
              </div>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
                <AvatarWithName
                  name="Default Style"
                  variant="default"
                  avatarProps={{
                    initials: "DF",
                    backgroundColor: "#ff6b6b",
                    textColor: "#ffffff"
                  }}
                />
                <AvatarWithName
                  name="Outlined Style"
                  variant="outlined"
                  avatarProps={{
                    initials: "OL",
                    backgroundColor: "#4ecdc4",
                    textColor: "#ffffff"
                  }}
                />
                <AvatarWithName
                  name="Filled Style"
                  variant="filled"
                  avatarProps={{
                    initials: "FL",
                    backgroundColor: "#45b7d1",
                    textColor: "#ffffff"
                  }}
                />
              </div>
            </div>

            <div>
              <div style={{ marginBottom: '12px' }}>
                <CriaTextBody1>
                  Interactive Examples
                </CriaTextBody1>
              </div>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
                <AvatarWithName
                  name="Clickable User"
                  clickable
                  avatarProps={{
                    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
                    alt: "Clickable User"
                  }}
                  onClick={() => alert('User clicked!')}
                />
                <AvatarWithName
                  name="Team Member"
                  clickable
                  variant="outlined"
                  avatarProps={{
                    initials: "TM",
                    backgroundColor: "#7566A1",
                    textColor: "#ffffff"
                  }}
                  onClick={() => alert('Team member selected!')}
                />
              </div>
            </div>

            <div>
              <div style={{ marginBottom: '12px' }}>
                <CriaTextBody1>
                  Generic Avatar with Name Examples
                </CriaTextBody1>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  { name: 'Dr. Sarah Wilson', image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face' },
                  { name: 'Prof. David Brown', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face' },
                  { name: 'Dr. Emily Johnson', initials: 'EJ' },
                  { name: 'Prof. Michael Davis', initials: 'MD' },
                ].map((instructor, index) => (
                  <AvatarWithName
                    key={index}
                    name={instructor.name}
                    variant="outlined"
                    avatarProps={{
                      src: instructor.image,
                      initials: instructor.initials,
                      backgroundColor: instructor.initials ? '#7566A1' : undefined,
                      textColor: instructor.initials ? '#ffffff' : undefined,
                      alt: instructor.name
                    }}
                    clickable
                    onClick={() => alert(`Viewing ${instructor.name}'s profile`)}
                  />
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Avatar Upload */}
      <Card style={{ marginBottom: spacing[8] }}>
        <CardHeader>
          <CriaTextTitle1>Avatar Upload</CriaTextTitle1>
        </CardHeader>
        <CardContent>
              <div style={{ display: 'flex', gap: spacing[6], alignItems: 'center', flexWrap: 'wrap' }}>
            <AvatarUpload size="lg" label="Upload profile image" />
            <AvatarUpload size="md" label="Upload avatar" />
          </div>
        </CardContent>
      </Card>

      {/* Accessibility Note */}
      <Card>
        <CardHeader>
          <CriaTextTitle1>Accessibility Features</CriaTextTitle1>
        </CardHeader>
        <CardContent>
          <CriaTextBody1>
            The Avatar component includes comprehensive accessibility features:
          </CriaTextBody1>
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
