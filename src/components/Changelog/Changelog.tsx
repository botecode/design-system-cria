import React, { useState, useMemo } from 'react';
import { Typography } from '../Typography';
import { Button } from '../Button';
import { Card, CardContent, CardHeader } from '../Card';
import { Badge } from '../Badge';
import { spacing } from '../../tokens';
import { Calendar, Tag, User, GitBranch } from 'phosphor-react';

export interface ChangelogEntry {
  id: string;
  version: string;
  date: string;
  type: 'major' | 'minor' | 'patch' | 'hotfix';
  author: string;
  branch?: string;
  title: string;
  description?: string;
  changes: {
    type: 'added' | 'changed' | 'deprecated' | 'removed' | 'fixed' | 'security';
    items: string[];
  }[];
  breaking?: string[];
}

export interface ChangelogProps extends React.HTMLAttributes<HTMLDivElement> {
  entries: ChangelogEntry[];
  itemsPerPage?: number;
  showPagination?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const Changelog: React.FC<ChangelogProps> = ({
  entries,
  itemsPerPage = 5,
  showPagination = true,
  className = '',
  style,
  ...props
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(entries.length / itemsPerPage);
  const paginatedEntries = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return entries.slice(startIndex, endIndex);
  }, [entries, currentPage, itemsPerPage]);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'major': return 'error';
      case 'minor': return 'warning';
      case 'patch': return 'success';
      case 'hotfix': return 'info';
      default: return 'default';
    }
  };

  const getChangeTypeColor = (type: string) => {
    switch (type) {
      case 'added': return 'success';
      case 'changed': return 'warning';
      case 'deprecated': return 'info';
      case 'removed': return 'error';
      case 'fixed': return 'success';
      case 'security': return 'error';
      default: return 'default';
    }
  };

  const getChangeTypeIcon = (type: string) => {
    switch (type) {
      case 'added': return '+';
      case 'changed': return '~';
      case 'deprecated': return '⚠';
      case 'removed': return '-';
      case 'fixed': return '🔧';
      case 'security': return '🔒';
      default: return '•';
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const renderPagination = () => {
    if (!showPagination || totalPages <= 1) return null;

    const pages = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    // Previous button
    if (currentPage > 1) {
      pages.push(
        <Button
          key="prev"
          variant="outline"
          size="sm"
          onClick={() => handlePageChange(currentPage - 1)}
          style={{ marginRight: spacing[2] }}
        >
          Previous
        </Button>
      );
    }

    // Page numbers
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <Button
          key={i}
          variant={i === currentPage ? 'primary' : 'outline'}
          size="sm"
          onClick={() => handlePageChange(i)}
          style={{ marginRight: spacing[2] }}
        >
          {i}
        </Button>
      );
    }

    // Next button
    if (currentPage < totalPages) {
      pages.push(
        <Button
          key="next"
          variant="outline"
          size="sm"
          onClick={() => handlePageChange(currentPage + 1)}
          style={{ marginLeft: spacing[2] }}
        >
          Next
        </Button>
      );
    }

    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: spacing[8],
        gap: spacing[2],
      }}>
        {pages}
      </div>
    );
  };

  return (
    <div
      className={`changelog ${className}`}
      style={{
        width: '100%',
        ...style,
      }}
      {...props}
    >
      {paginatedEntries.map((entry) => (
        <Card key={entry.id} style={{ marginBottom: spacing[6] }}>
          <CardHeader>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: spacing[4],
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: spacing[4] }}>
                <Typography variant="title2" style={{ margin: 0 }}>
                  {entry.title}
                </Typography>
                <Badge variant={getTypeColor(entry.type)} size="sm">
                  {entry.version}
                </Badge>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: spacing[4],
                color: '#666',
                fontSize: '14px',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: spacing[1] }}>
                  <Calendar size={16} />
                  <span>{entry.date}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: spacing[1] }}>
                  <User size={16} />
                  <span>{entry.author}</span>
                </div>
                {entry.branch && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: spacing[1] }}>
                    <GitBranch size={16} />
                    <span>{entry.branch}</span>
                  </div>
                )}
              </div>
            </div>
          </CardHeader>
          
          <CardContent>
            {entry.description && (
              <Typography variant="body" style={{ marginBottom: spacing[4], color: '#666' }}>
                {entry.description}
              </Typography>
            )}

            {entry.changes.map((change, index) => (
              <div key={index} style={{ marginBottom: spacing[4] }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: spacing[2],
                  marginBottom: spacing[2],
                }}>
                  <span style={{ fontSize: '16px' }}>
                    {getChangeTypeIcon(change.type)}
                  </span>
                  <Badge variant={getChangeTypeColor(change.type)} size="sm">
                    {change.type.charAt(0).toUpperCase() + change.type.slice(1)}
                  </Badge>
                </div>
                
                <ul style={{
                  margin: 0,
                  paddingLeft: spacing[6],
                  listStyle: 'none',
                }}>
                  {change.items.map((item, itemIndex) => (
                    <li key={itemIndex} style={{
                      marginBottom: spacing[1],
                      position: 'relative',
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: `-${spacing[4]}`,
                        color: '#666',
                      }}>
                        •
                      </span>
                      <Typography variant="body" style={{ margin: 0 }}>
                        {item}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {entry.breaking && entry.breaking.length > 0 && (
              <div style={{
                marginTop: spacing[4],
                padding: spacing[4],
                backgroundColor: '#fef2f2',
                border: '1px solid #fecaca',
                borderRadius: spacing[2],
              }}>
                <Typography variant="title3" style={{
                  color: '#dc2626',
                  marginBottom: spacing[2],
                  fontWeight: 'bold',
                }}>
                  ⚠️ Breaking Changes
                </Typography>
                <ul style={{
                  margin: 0,
                  paddingLeft: spacing[6],
                  listStyle: 'none',
                }}>
                  {entry.breaking.map((item, index) => (
                    <li key={index} style={{
                      marginBottom: spacing[1],
                      position: 'relative',
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: `-${spacing[4]}`,
                        color: '#dc2626',
                      }}>
                        •
                      </span>
                      <Typography variant="body" style={{ margin: 0, color: '#dc2626' }}>
                        {item}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </CardContent>
        </Card>
      ))}

      {renderPagination()}
    </div>
  );
};

export default Changelog;
