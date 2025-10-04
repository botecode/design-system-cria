import React, { useState } from 'react';
import { CommentsSection, Comment } from './CommentsSection';
import { Typography } from '../Typography';
import { Card } from '../Card';

export const CommentsSectionDemo: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: '1',
      author: 'John Doe',
      avatar: 'https://via.placeholder.com/32',
      content: 'This is a great idea! I think we should definitely move forward with this approach.',
      timestamp: new Date('2024-01-15T10:30:00Z'),
      replies: [
        {
          id: '2',
          author: 'Jane Smith',
          avatar: 'https://via.placeholder.com/32',
          content: 'I agree completely. This will help us scale much better.',
          timestamp: new Date('2024-01-15T11:00:00Z'),
          replies: []
        },
        {
          id: '3',
          author: 'Mike Johnson',
          avatar: 'https://via.placeholder.com/32',
          content: 'What about the timeline? Do we have an estimate for implementation?',
          timestamp: new Date('2024-01-15T11:15:00Z'),
          replies: [
            {
              id: '4',
              author: 'John Doe',
              avatar: 'https://via.placeholder.com/32',
              content: 'I estimate about 2-3 weeks for the initial implementation.',
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
      avatar: 'https://via.placeholder.com/32',
      content: 'I have some concerns about the performance implications. Can we discuss this in more detail?',
      timestamp: new Date('2024-01-15T14:20:00Z'),
      replies: []
    }
  ]);

  const handleAddComment = (content: string) => {
    const newComment: Comment = {
      id: Date.now().toString(),
      author: 'Current User',
      avatar: 'https://via.placeholder.com/32',
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
      avatar: 'https://via.placeholder.com/32',
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
