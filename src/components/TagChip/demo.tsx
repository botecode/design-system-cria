import React, { useState, useCallback } from 'react';
import { TagChip } from './TagChip';
import { Typography } from '../Typography';
import { Card, CardContent, CardHeader } from '../Card';
import { Grid, Row, Column } from '../Grid';
import { Button } from '../Button';
import { 
  Star, 
  Heart, 
  Tag, 
  User, 
  Calendar, 
  MapPin, 
  Clock, 
  Check, 
  X,
  Warning,
  Info,
  CheckCircle,
  WarningCircle
} from 'phosphor-react';

const TagChipDemo: React.FC = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [removableTags, setRemovableTags] = useState<string[]>([
    'React',
    'TypeScript',
    'Design System',
    'Frontend',
    'UI/UX'
  ]);

  const handleTagClick = useCallback((tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  }, []);

  const handleTagRemove = useCallback((tag: string) => {
    setRemovableTags(prev => prev.filter(t => t !== tag));
  }, []);

  const addRandomTag = useCallback(() => {
    const randomTags = ['Vue.js', 'Angular', 'Svelte', 'Node.js', 'Python', 'Go', 'Rust'];
    const randomTag = randomTags[Math.floor(Math.random() * randomTags.length)];
    if (!removableTags.includes(randomTag)) {
      setRemovableTags(prev => [...prev, randomTag]);
    }
  }, [removableTags]);

  return (
    <div style={{ padding: '2rem', minHeight: '100vh' }}>
      <Typography variant="h1" weight="bold" style={{ marginBottom: '2rem' }}>
        Tag / Chip
      </Typography>

      <Typography variant="body" style={{ marginBottom: '2rem' }}>
        Versatile tag and chip components for labels, categories, and interactive elements with multiple variants, sizes, and styles.
      </Typography>

      <Card style={{ marginBottom: '2rem' }}>
        <CardHeader>
          <Typography variant="h2" weight="semibold">
            Basic Variants
          </Typography>
        </CardHeader>
        <CardContent>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <TagChip label="Default" variant="default" />
            <TagChip label="Primary" variant="primary" />
            <TagChip label="Secondary" variant="secondary" />
            <TagChip label="Success" variant="success" />
            <TagChip label="Warning" variant="warning" />
            <TagChip label="Error" variant="error" />
            <TagChip label="Info" variant="info" />
          </div>
        </CardContent>
      </Card>

      <Card style={{ marginBottom: '2rem' }}>
        <CardHeader>
          <Typography variant="h2" weight="semibold">
            Different Styles
          </Typography>
        </CardHeader>
        <CardContent>
          <div style={{ marginBottom: '1.5rem' }}>
            <Typography variant="h3" weight="medium" style={{ marginBottom: '0.75rem' }}>
              Filled (Default)
            </Typography>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <TagChip label="Filled Primary" variant="primary" visualStyle="filled" />
              <TagChip label="Filled Success" variant="success" visualStyle="filled" />
              <TagChip label="Filled Warning" variant="warning" visualStyle="filled" />
            </div>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <Typography variant="h3" weight="medium" style={{ marginBottom: '0.75rem' }}>
              Outlined
            </Typography>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <TagChip label="Outlined Primary" variant="primary" visualStyle="outlined" />
              <TagChip label="Outlined Success" variant="success" visualStyle="outlined" />
              <TagChip label="Outlined Warning" variant="warning" visualStyle="outlined" />
            </div>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <Typography variant="h3" weight="medium" style={{ marginBottom: '0.75rem' }}>
              Soft
            </Typography>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <TagChip label="Soft Primary" variant="primary" visualStyle="soft" />
              <TagChip label="Soft Success" variant="success" visualStyle="soft" />
              <TagChip label="Soft Warning" variant="warning" visualStyle="soft" />
            </div>
          </div>

          <div>
            <Typography variant="h3" weight="medium" style={{ marginBottom: '0.75rem' }}>
              Ghost
            </Typography>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <TagChip label="Ghost Primary" variant="primary" visualStyle="ghost" />
              <TagChip label="Ghost Success" variant="success" visualStyle="ghost" />
              <TagChip label="Ghost Warning" variant="warning" visualStyle="ghost" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card style={{ marginBottom: '2rem' }}>
        <CardHeader>
          <Typography variant="h2" weight="semibold">
            Different Sizes
          </Typography>
        </CardHeader>
        <CardContent>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
            <TagChip label="Small" variant="primary" size="sm" />
            <TagChip label="Medium (Default)" variant="primary" size="md" />
            <TagChip label="Large" variant="primary" size="lg" />
          </div>
        </CardContent>
      </Card>

      <Card style={{ marginBottom: '2rem' }}>
        <CardHeader>
          <Typography variant="h2" weight="semibold">
            With Icons
          </Typography>
        </CardHeader>
        <CardContent>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            <TagChip label="Starred" variant="warning" icon={<Star weight="fill" />} />
            <TagChip label="Liked" variant="error" icon={<Heart weight="fill" />} />
            <TagChip label="Tagged" variant="info" icon={<Tag />} />
            <TagChip label="User" variant="primary" icon={<User />} />
            <TagChip label="Calendar" variant="secondary" icon={<Calendar />} />
            <TagChip label="Location" variant="success" icon={<MapPin />} />
            <TagChip label="Time" variant="warning" icon={<Clock />} />
          </div>
        </CardContent>
      </Card>

      <Card style={{ marginBottom: '2rem' }}>
        <CardHeader>
          <Typography variant="h2" weight="semibold">
            Clickable Tags
          </Typography>
        </CardHeader>
        <CardContent>
          <Typography variant="body" style={{ marginBottom: '1rem', color: '#666' }}>
            Click tags to select/deselect them. Selected: {selectedTags.join(', ') || 'None'}
          </Typography>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {['JavaScript', 'React', 'TypeScript', 'CSS', 'HTML', 'Node.js', 'Python', 'Go'].map(tag => (
              <TagChip
                key={tag}
                label={tag}
                variant="primary"
                visualStyle="outlined"
                clickable
                selected={selectedTags.includes(tag)}
                onClick={() => handleTagClick(tag)}
              />
            ))}
          </div>
        </CardContent>
      </Card>

      <Card style={{ marginBottom: '2rem' }}>
        <CardHeader>
          <Typography variant="h2" weight="semibold">
            Removable Tags
          </Typography>
        </CardHeader>
        <CardContent>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center', marginBottom: '1rem' }}>
            <Button onClick={addRandomTag} size="sm">
              Add Random Tag
            </Button>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {removableTags.map(tag => (
              <TagChip
                key={tag}
                label={tag}
                variant="secondary"
                removable
                onRemove={() => handleTagRemove(tag)}
              />
            ))}
          </div>
        </CardContent>
      </Card>

      <Card style={{ marginBottom: '2rem' }}>
        <CardHeader>
          <Typography variant="h2" weight="semibold">
            Status Indicators
          </Typography>
        </CardHeader>
        <CardContent>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            <TagChip label="Completed" variant="success" icon={<CheckCircle />} />
            <TagChip label="In Progress" variant="warning" icon={<Clock />} />
            <TagChip label="Pending" variant="info" icon={<WarningCircle />} />
            <TagChip label="Error" variant="error" icon={<Warning />} />
            <TagChip label="New" variant="primary" icon={<Info />} />
          </div>
        </CardContent>
      </Card>

      <Card style={{ marginBottom: '2rem' }}>
        <CardHeader>
          <Typography variant="h2" weight="semibold">
            States
          </Typography>
        </CardHeader>
        <CardContent>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
            <TagChip label="Normal" variant="primary" />
            <TagChip label="Selected" variant="primary" selected />
            <TagChip label="Disabled" variant="primary" disabled />
            <TagChip label="Loading" variant="primary" loading />
          </div>
        </CardContent>
      </Card>

      <Card style={{ marginBottom: '2rem' }}>
        <CardHeader>
          <Typography variant="h2" weight="semibold">
            Real-World Examples
          </Typography>
        </CardHeader>
        <CardContent>
          <div style={{ marginBottom: '1.5rem' }}>
            <Typography variant="h3" weight="medium" style={{ marginBottom: '0.75rem' }}>
              Blog Post Tags
            </Typography>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <TagChip label="React" variant="info" visualStyle="soft" />
              <TagChip label="JavaScript" variant="primary" visualStyle="soft" />
              <TagChip label="Frontend" variant="secondary" visualStyle="soft" />
              <TagChip label="Tutorial" variant="success" visualStyle="soft" />
            </div>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <Typography variant="h3" weight="medium" style={{ marginBottom: '0.75rem' }}>
              User Skills
            </Typography>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <TagChip label="Frontend Development" variant="primary" icon={<User />} />
              <TagChip label="UI/UX Design" variant="secondary" icon={<Heart />} />
              <TagChip label="Project Management" variant="success" icon={<Check />} />
            </div>
          </div>

          <div>
            <Typography variant="h3" weight="medium" style={{ marginBottom: '0.75rem' }}>
              Filter Options
            </Typography>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <TagChip label="Price: $0-$50" variant="info" removable />
              <TagChip label="Category: Electronics" variant="info" removable />
              <TagChip label="Brand: Apple" variant="info" removable />
              <TagChip label="In Stock" variant="success" removable />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TagChipDemo;
