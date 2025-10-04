import React, { useState } from 'react';
import { CommentsSection, Comment } from './CommentsSection';
import { Typography } from '../Typography';
import { Card } from '../Card';

export const CommentsSectionDemo: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: '1',
      author: 'John Doe',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face',
      content: 'This is a great idea! I think we should definitely move forward with this approach. The design system looks really promising.',
      timestamp: new Date('2024-01-15T10:30:00Z'),
      replies: [
        {
          id: '2',
          author: 'Jane Smith',
          avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face',
          content: 'I agree completely. This will help us scale much better and maintain consistency across all our applications.',
          timestamp: new Date('2024-01-15T11:00:00Z'),
          replies: []
        },
        {
          id: '3',
          author: 'Mike Johnson',
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face',
          content: 'What about the timeline? Do we have an estimate for implementation? Also, how will this affect our current development workflow?',
          timestamp: new Date('2024-01-15T11:15:00Z'),
          replies: [
            {
              id: '4',
              author: 'John Doe',
              avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face',
              content: 'I estimate about 2-3 weeks for the initial implementation. We can start with the core components and gradually add more.',
              timestamp: new Date('2024-01-15T11:30:00Z'),
              replies: []
            }
          ]
        }
      ]
    },
    {
      id: '5',
      author: 'Sarah Wilson',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face',
      content: 'I have some concerns about the performance implications. Can we discuss this in more detail? Also, what about accessibility considerations?',
      timestamp: new Date('2024-01-15T14:20:00Z'),
      replies: []
    }
  ]);

  const handleAddComment = (content: string) => {
    const newComment: Comment = {
      id: Date.now().toString(),
      author: 'Current User',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=32&h=32&fit=crop&crop=face',
      content,
      timestamp: new Date(),
      replies: []
    };
    setComments(prev => [...prev, newComment]);
  };

  const handleAddReply = (commentId: string, content: string) => {
    const newReply: Comment = {
      id: Date.now().toString(),
      author: 'Current User',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=32&h=32&fit=crop&crop=face',
      content,
      timestamp: new Date(),
      replies: []
    };

    const addReplyToComment = (comments: Comment[]): Comment[] => {
      return comments.map(comment => {
        if (comment.id === commentId) {
          return { ...comment, replies: [...comment.replies, newReply] };
        }
        if (comment.replies.length > 0) {
          return { ...comment, replies: addReplyToComment(comment.replies) };
        }
        return comment;
      });
    };

    setComments(addReplyToComment(comments));
  };

  const handleEditComment = (commentId: string, content: string) => {
    const editComment = (comments: Comment[]): Comment[] => {
      return comments.map(comment => {
        if (comment.id === commentId) {
          return { ...comment, content };
        }
        if (comment.replies.length > 0) {
          return { ...comment, replies: editComment(comment.replies) };
        }
        return comment;
      });
    };

    setComments(editComment(comments));
  };

  const handleDeleteComment = (commentId: string) => {
    const deleteComment = (comments: Comment[]): Comment[] => {
      return comments.filter(comment => {
        if (comment.id === commentId) {
          return false;
        }
        if (comment.replies.length > 0) {
          return { ...comment, replies: deleteComment(comment.replies) };
        }
        return true;
      });
    };

    setComments(deleteComment(comments));
  };

  return (
    <div style={{ padding: '24px', maxWidth: '800px' }}>
      <Typography variant="title1" weight="bold" style={{ marginBottom: '16px' }}>
        Comments Section Demo
      </Typography>
      
      <Card style={{ padding: '24px' }}>
        <CommentsSection
          comments={comments}
          onAddComment={handleAddComment}
          onAddReply={handleAddReply}
          onEditComment={handleEditComment}
          onDeleteComment={handleDeleteComment}
          placeholder="Share your thoughts..."
          maxLength={500}
        />
      </Card>
    </div>
  );
};

export default CommentsSectionDemo;
