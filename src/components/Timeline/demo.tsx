import React, { useState, useCallback } from 'react';
import { Timeline, TimelineItem } from './Timeline';
import { Typography } from '../Typography';
import { Card, CardContent, CardHeader } from '../Card';
import { Grid, Row, Column } from '../Grid';
import { Button } from '../Button';
import { User, CheckCircle, Warning, Info, Clock, Calendar, Star, Heart, ThumbsUp, MessageCircle, Share, Download } from 'phosphor-react';
import { spacing, colors } from '../../tokens';

const TimelineDemo: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleItemClick = useCallback((item: any) => {
    setSelectedItems((prev) =>
      prev.includes(item.id) ? prev.filter((id) => id !== item.id) : [...prev, item.id]
    );
  }, []);

  // Sample data for different timeline examples
  const activityItems = [
    {
      id: '1',
      title: 'User Registration',
      description: 'New user joined the platform and completed their profile setup',
      timestamp: '2024-01-15T10:30:00Z',
      icon: <User />,
      variant: 'primary' as const,
    },
    {
      id: '2',
      title: 'Task Completed',
      description: 'Project milestone reached successfully with all requirements met',
      timestamp: '2024-01-15T14:20:00Z',
      icon: <CheckCircle />,
      variant: 'success' as const,
    },
    {
      id: '3',
      title: 'Issue Reported',
      description: 'Bug found in production environment affecting user authentication',
      timestamp: '2024-01-15T16:45:00Z',
      icon: <Warning />,
      variant: 'warning' as const,
    },
    {
      id: '4',
      title: 'System Update',
      description: 'Application updated to version 2.1.0 with new features and bug fixes',
      timestamp: '2024-01-15T18:00:00Z',
      icon: <Info />,
      variant: 'info' as const,
    },
  ];

  const projectTimelineItems = [
    {
      id: 'p1',
      title: 'Project Kickoff',
      description: 'Initial project planning and team setup completed',
      timestamp: '2024-01-01T09:00:00Z',
      icon: <Calendar />,
      variant: 'primary' as const,
    },
    {
      id: 'p2',
      title: 'Design Phase',
      description: 'UI/UX design mockups created and approved by stakeholders',
      timestamp: '2024-01-08T14:30:00Z',
      icon: <Star />,
      variant: 'secondary' as const,
    },
    {
      id: 'p3',
      title: 'Development Started',
      description: 'Frontend development began with React components implementation',
      timestamp: '2024-01-15T10:00:00Z',
      icon: <CheckCircle />,
      variant: 'success' as const,
    },
    {
      id: 'p4',
      title: 'Code Review',
      description: 'First code review completed with minor feedback addressed',
      timestamp: '2024-01-20T16:00:00Z',
      icon: <MessageCircle />,
      variant: 'info' as const,
    },
  ];

  const socialActivityItems = [
    {
      id: 's1',
      title: 'Post Liked',
      description: 'Sarah liked your post about React best practices',
      timestamp: '2024-01-15T12:00:00Z',
      icon: <Heart />,
      variant: 'error' as const,
    },
    {
      id: 's2',
      title: 'Comment Received',
      description: 'John commented on your tutorial: "Great explanation!"',
      timestamp: '2024-01-15T13:30:00Z',
      icon: <MessageCircle />,
      variant: 'primary' as const,
    },
    {
      id: 's3',
      title: 'Post Shared',
      description: 'Your article was shared by 5 people in the community',
      timestamp: '2024-01-15T15:00:00Z',
      icon: <Share />,
      variant: 'success' as const,
    },
  ];

  const compactItems = [
    {
      id: 'c1',
      title: 'File Uploaded',
      timestamp: '2024-01-15T11:00:00Z',
      icon: <Download />,
      variant: 'default' as const,
    },
    {
      id: 'c2',
      title: 'Status Updated',
      timestamp: '2024-01-15T11:15:00Z',
      icon: <CheckCircle />,
      variant: 'success' as const,
    },
    {
      id: 'c3',
      title: 'Notification Sent',
      timestamp: '2024-01-15T11:30:00Z',
      icon: <Info />,
      variant: 'info' as const,
    },
  ];

  return (
    <div style={{ padding: spacing[8], minHeight: '100vh' }}>
      <Typography variant="h1" weight="bold" style={{ marginBottom: spacing[6] }}>
        Timeline / Activity Feed
      </Typography>

      <Typography variant="body" style={{ marginBottom: spacing[8] }}>
        A versatile component for displaying sequential events, activities, or updates in chronological order.
      </Typography>

      <Card style={{ marginBottom: spacing[6] }}>
        <CardHeader>
          <Typography variant="h2" weight="semibold">
            Basic Timeline
          </Typography>
        </CardHeader>
        <CardContent>
          <Timeline items={activityItems} />
        </CardContent>
      </Card>

      <Card style={{ marginBottom: spacing[6] }}>
        <CardHeader>
          <Typography variant="h2" weight="semibold">
            Clickable Timeline
          </Typography>
        </CardHeader>
        <CardContent>
          <Timeline 
            items={activityItems.map(item => ({
              ...item,
              selected: selectedItems.includes(item.id)
            }))}
            onItemClick={handleItemClick}
          />
          <Typography variant="bodySmall" style={{ marginTop: spacing[4], color: colors.gray[600] }}>
            Selected items: {selectedItems.length > 0 ? selectedItems.join(', ') : 'None'}
          </Typography>
        </CardContent>
      </Card>

      <Card style={{ marginBottom: spacing[6] }}>
        <CardHeader>
          <Typography variant="h2" weight="semibold">
            Different Sizes
          </Typography>
        </CardHeader>
        <CardContent>
          <Grid gap="lg">
            <Row>
              <Column span={12}>
                <Typography variant="h3" weight="medium" style={{ marginBottom: spacing[3] }}>
                  Small Size
                </Typography>
                <Timeline items={compactItems} size="sm" />
              </Column>
            </Row>
            <Row>
              <Column span={12}>
                <Typography variant="h3" weight="medium" style={{ marginBottom: spacing[3] }}>
                  Medium Size (Default)
                </Typography>
                <Timeline items={compactItems} size="md" />
              </Column>
            </Row>
            <Row>
              <Column span={12}>
                <Typography variant="h3" weight="medium" style={{ marginBottom: spacing[3] }}>
                  Large Size
                </Typography>
                <Timeline items={compactItems} size="lg" />
              </Column>
            </Row>
          </Grid>
        </CardContent>
      </Card>

      <Card style={{ marginBottom: spacing[6] }}>
        <CardHeader>
          <Typography variant="h2" weight="semibold">
            Different Variants
          </Typography>
        </CardHeader>
        <CardContent>
          <Grid gap="lg">
            <Row>
              <Column span={12}>
                <Typography variant="h3" weight="medium" style={{ marginBottom: spacing[3] }}>
                  Default Variant
                </Typography>
                <Timeline items={projectTimelineItems} variant="default" />
              </Column>
            </Row>
            <Row>
              <Column span={12}>
                <Typography variant="h3" weight="medium" style={{ marginBottom: spacing[3] }}>
                  Compact Variant
                </Typography>
                <Timeline items={projectTimelineItems} variant="compact" />
              </Column>
            </Row>
            <Row>
              <Column span={12}>
                <Typography variant="h3" weight="medium" style={{ marginBottom: spacing[3] }}>
                  Detailed Variant
                </Typography>
                <Timeline items={projectTimelineItems} variant="detailed" />
              </Column>
            </Row>
          </Grid>
        </CardContent>
      </Card>

      <Card style={{ marginBottom: spacing[6] }}>
        <CardHeader>
          <Typography variant="h2" weight="semibold">
            Item Styles
          </Typography>
        </CardHeader>
        <CardContent>
          <Grid gap="lg">
            <Row>
              <Column span={12}>
                <Typography variant="h3" weight="medium" style={{ marginBottom: spacing[3] }}>
                  Filled Style (Default)
                </Typography>
                <Timeline 
                  items={socialActivityItems.map(item => ({ ...item, style: 'filled' as const }))} 
                />
              </Column>
            </Row>
            <Row>
              <Column span={12}>
                <Typography variant="h3" weight="medium" style={{ marginBottom: spacing[3] }}>
                  Outlined Style
                </Typography>
                <Timeline 
                  items={socialActivityItems.map(item => ({ ...item, style: 'outlined' as const }))} 
                />
              </Column>
            </Row>
            <Row>
              <Column span={12}>
                <Typography variant="h3" weight="medium" style={{ marginBottom: spacing[3] }}>
                  Ghost Style
                </Typography>
                <Timeline 
                  items={socialActivityItems.map(item => ({ ...item, style: 'ghost' as const }))} 
                />
              </Column>
            </Row>
          </Grid>
        </CardContent>
      </Card>

      <Card style={{ marginBottom: spacing[6] }}>
        <CardHeader>
          <Typography variant="h2" weight="semibold">
            Without Connectors
          </Typography>
        </CardHeader>
        <CardContent>
          <Timeline items={activityItems} showConnector={false} />
        </CardContent>
      </Card>

      <Card style={{ marginBottom: spacing[6] }}>
        <CardHeader>
          <Typography variant="h2" weight="semibold">
            Without Timestamps
          </Typography>
        </CardHeader>
        <CardContent>
          <Timeline items={activityItems} showTimestamps={false} />
        </CardContent>
      </Card>

      <Card style={{ marginBottom: spacing[6] }}>
        <CardHeader>
          <Typography variant="h2" weight="semibold">
            Custom Connector
          </Typography>
        </CardHeader>
        <CardContent>
          <Timeline 
            items={activityItems} 
            connector={<div style={{ 
              width: '2px', 
              height: '20px', 
              backgroundColor: colors.primary[500],
              margin: '0 auto',
              borderRadius: '1px'
            }} />}
          />
        </CardContent>
      </Card>

      <Card style={{ marginBottom: spacing[6] }}>
        <CardHeader>
          <Typography variant="h2" weight="semibold">
            Loading State
          </Typography>
        </CardHeader>
        <CardContent>
          <Timeline items={[]} loading />
        </CardContent>
      </Card>

      <Card style={{ marginBottom: spacing[6] }}>
        <CardHeader>
          <Typography variant="h2" weight="semibold">
            Empty State
          </Typography>
        </CardHeader>
        <CardContent>
          <Timeline items={[]} emptyMessage="No activities yet. Start by creating your first event!" />
        </CardContent>
      </Card>

      <Card style={{ marginBottom: spacing[6] }}>
        <CardHeader>
          <Typography variant="h2" weight="semibold">
            Custom Empty Component
          </Typography>
        </CardHeader>
        <CardContent>
          <Timeline 
            items={[]} 
            emptyComponent={
              <div style={{ 
                textAlign: 'center', 
                padding: spacing[8],
                color: colors.gray[500]
              }}>
                <Clock size={48} style={{ marginBottom: spacing[4], opacity: 0.5 }} />
                <Typography variant="h3" weight="medium" style={{ marginBottom: spacing[2] }}>
                  No Timeline Data
                </Typography>
                <Typography variant="body" style={{ marginBottom: spacing[4] }}>
                  Your timeline will appear here once you start creating events.
                </Typography>
                <Button variant="primary" size="sm">
                  Create First Event
                </Button>
              </div>
            }
          />
        </CardContent>
      </Card>

      <Card style={{ marginBottom: spacing[6] }}>
        <CardHeader>
          <Typography variant="h2" weight="semibold">
            Mixed States
          </Typography>
        </CardHeader>
        <CardContent>
          <Timeline 
            items={[
              {
                id: 'm1',
                title: 'Normal Item',
                description: 'This is a normal timeline item',
                timestamp: '2024-01-15T10:00:00Z',
                icon: <Info />,
                variant: 'default' as const,
              },
              {
                id: 'm2',
                title: 'Loading Item',
                description: 'This item is in loading state',
                timestamp: '2024-01-15T11:00:00Z',
                icon: <Clock />,
                variant: 'primary' as const,
                loading: true,
              },
              {
                id: 'm3',
                title: 'Selected Item',
                description: 'This item is selected',
                timestamp: '2024-01-15T12:00:00Z',
                icon: <CheckCircle />,
                variant: 'success' as const,
                selected: true,
              },
              {
                id: 'm4',
                title: 'Disabled Item',
                description: 'This item is disabled',
                timestamp: '2024-01-15T13:00:00Z',
                icon: <Warning />,
                variant: 'warning' as const,
                disabled: true,
              },
            ]}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default TimelineDemo;
