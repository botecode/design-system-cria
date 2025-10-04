import React, { useState, useRef, useEffect } from 'react';
import { colors, spacing, typography } from '../../tokens';
import { Typography } from '../Typography';
import { Button } from '../Button';
import { Avatar } from '../Avatar';
import { Textarea } from '../Textarea';
import { Modal } from '../Modal';

export interface Comment {
  id: string;
  author: string;
  avatar?: string;
  content: string;
  timestamp: Date;
  replies: Comment[];
}

export interface CommentsSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  comments: Comment[];
  onAddComment: (content: string) => void;
  onAddReply?: (commentId: string, content: string) => void;
  onEditComment?: (commentId: string, content: string) => void;
  onDeleteComment?: (commentId: string) => void;
  placeholder?: string;
  maxLength?: number;
}

export const CommentsSection: React.FC<CommentsSectionProps> = ({
  comments,
  onAddComment,
  onAddReply,
  onEditComment,
  onDeleteComment,
  placeholder = "Add a comment...",
  maxLength = 1000,
  className = '',
  style,
  ...props
}) => {
  const [newComment, setNewComment] = useState('');
  const [editingComment, setEditingComment] = useState<string | null>(null);
  const [editingContent, setEditingContent] = useState('');
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyContent, setReplyContent] = useState('');
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const replyTextareaRef = useRef<HTMLTextAreaElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendComment();
    }
  };

  const handleReplyKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendReply();
    }
  };

  const handleSendComment = () => {
    if (newComment.trim() && onAddComment) {
      onAddComment(newComment.trim());
      setNewComment('');
    }
  };

  const handleSendReply = () => {
    if (replyContent.trim() && replyingTo && onAddReply) {
      onAddReply(replyingTo, replyContent.trim());
      setReplyContent('');
      setReplyingTo(null);
    }
  };

  const handleEdit = (comment: Comment) => {
    setEditingComment(comment.id);
    setEditingContent(comment.content);
  };

  const handleSaveEdit = () => {
    if (editingComment && editingContent.trim() && onEditComment) {
      onEditComment(editingComment, editingContent.trim());
      setEditingComment(null);
      setEditingContent('');
    }
  };

  const handleCancelEdit = () => {
    setEditingComment(null);
    setEditingContent('');
  };

  const handleDelete = (commentId: string) => {
    setDeleteConfirm(commentId);
  };

  const confirmDelete = () => {
    if (deleteConfirm && onDeleteComment) {
      onDeleteComment(deleteConfirm);
      setDeleteConfirm(null);
    }
  };

  const formatTimestamp = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit'
    }).format(date);
  };

  const renderComment = (comment: Comment, depth = 0) => {
    const isEditing = editingComment === comment.id;
    const isReplying = replyingTo === comment.id;

    return (
      <div
        key={comment.id}
        className="cria-comment"
        style={{
          marginLeft: depth * 20,
          marginBottom: 16,
          display: 'flex',
          flexDirection: 'column',
          alignItems: depth > 0 ? 'flex-end' : 'flex-start'
        }}
      >
        <div className="cria-comment__bubble" style={{ 
          display: 'flex', 
          flexDirection: 'column',
          maxWidth: '70%',
          minWidth: '200px'
        }}>
          <div className="cria-comment__header" style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 8, 
            marginBottom: 8,
            padding: '0 4px'
          }}>
            <Avatar 
              src={comment.avatar} 
              name={comment.author} 
              size="sm"
              style={{ flexShrink: 0 }}
            />
            <div style={{ flex: 1, minWidth: 0 }}>
              <Typography variant="body2" weight="semiBold" style={{ color: colors.text.primary }}>
                {comment.author}
              </Typography>
              <Typography variant="caption" style={{ color: colors.text.secondary }}>
                {formatTimestamp(comment.timestamp)}
              </Typography>
            </div>
          </div>

          {isEditing ? (
            <div className="cria-comment__edit" style={{
              backgroundColor: colors.background.primary,
              border: `1px solid ${colors.border.medium}`,
              borderRadius: 12,
              padding: 12
            }}>
              <Textarea
                value={editingContent}
                onChange={(e) => setEditingContent(e.target.value)}
                placeholder="Edit your comment..."
                maxLength={maxLength}
                style={{ marginBottom: 8, border: 'none', backgroundColor: 'transparent' }}
              />
              <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
                <Button size="sm" onClick={handleSaveEdit} disabled={!editingContent.trim()}>
                  Save
                </Button>
                <Button size="sm" variant="secondary" onClick={handleCancelEdit}>
                  Cancel
                </Button>
              </div>
            </div>
          ) : (
            <>
              <div className="cria-comment__content" style={{
                backgroundColor: depth > 0 ? colors.background.secondary : colors.primary,
                color: depth > 0 ? colors.text.primary : colors.white,
                padding: '12px 16px',
                borderRadius: 16,
                position: 'relative',
                marginBottom: 8,
                wordWrap: 'break-word'
              }}>
                <Typography 
                  variant="body2" 
                  style={{ 
                    color: depth > 0 ? colors.text.primary : colors.white, 
                    whiteSpace: 'pre-wrap',
                    margin: 0
                  }}
                >
                  {comment.content}
                </Typography>
                {/* Speech bubble tail */}
                <div style={{
                  position: 'absolute',
                  bottom: -6,
                  left: depth > 0 ? 20 : 20,
                  width: 0,
                  height: 0,
                  borderLeft: '6px solid transparent',
                  borderRight: '6px solid transparent',
                  borderTop: `6px solid ${depth > 0 ? colors.background.secondary : colors.primary}`
                }} />
              </div>

              <div className="cria-comment__actions" style={{ 
                display: 'flex', 
                gap: 8, 
                padding: '0 4px',
                justifyContent: 'flex-end'
              }}>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setReplyingTo(comment.id)}
                  aria-label={`Reply to ${comment.author}`}
                  style={{ fontSize: '12px', padding: '4px 8px' }}
                >
                  Reply
                </Button>
                {onEditComment && (
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => handleEdit(comment)}
                    aria-label={`Edit comment by ${comment.author}`}
                    style={{ fontSize: '12px', padding: '4px 8px' }}
                  >
                    Edit
                  </Button>
                )}
                {onDeleteComment && (
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => handleDelete(comment.id)}
                    aria-label={`Delete comment by ${comment.author}`}
                    style={{ color: colors.error, fontSize: '12px', padding: '4px 8px' }}
                  >
                    Delete
                  </Button>
                )}
              </div>
            </>
          )}

          {isReplying && (
            <div className="cria-comment__reply" style={{ 
              marginTop: 12, 
              padding: 12, 
              backgroundColor: colors.background.primary, 
              borderRadius: 12,
              border: `1px solid ${colors.border.light}`,
              maxWidth: '100%'
            }}>
              <Typography variant="body2" weight="semiBold" style={{ marginBottom: 8, color: colors.text.primary }}>
                Reply to {comment.author}
              </Typography>
              <Textarea
                ref={replyTextareaRef}
                value={replyContent}
                onChange={(e) => setReplyContent(e.target.value)}
                onKeyDown={handleReplyKeyDown}
                placeholder="Write your reply..."
                maxLength={maxLength}
                style={{ marginBottom: 8, border: 'none', backgroundColor: 'transparent' }}
                aria-label={`Reply to ${comment.author}`}
              />
              <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
                <Button size="sm" onClick={handleSendReply} disabled={!replyContent.trim()}>
                  Send Reply
                </Button>
                <Button size="sm" variant="secondary" onClick={() => { setReplyingTo(null); setReplyContent(''); }}>
                  Cancel
                </Button>
              </div>
            </div>
          )}
        </div>

        {comment.replies.map(reply => renderComment(reply, depth + 1))}
      </div>
    );
  };

  return (
    <div
      className={["cria-comments-section", className].filter(Boolean).join(' ')}
      style={style}
      role="region"
      aria-label="Comments"
      {...props}
    >
      <div className="cria-comments-section__header" style={{ marginBottom: spacing[4] }}>
        <Typography variant="h3" weight="semiBold" style={{ color: colors.text.primary }}>
          Comments ({comments.length})
        </Typography>
      </div>

      <div className="cria-comments-section__composer" style={{ marginBottom: spacing[6] }}>
        <Textarea
          ref={textareaRef}
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          maxLength={maxLength}
          style={{ marginBottom: spacing[2] }}
          aria-label="Add a comment"
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="caption" style={{ color: colors.text.secondary }}>
            {newComment.length}/{maxLength} characters
          </Typography>
          <Button onClick={handleSendComment} disabled={!newComment.trim()}>
            Send
          </Button>
        </div>
      </div>

      <div className="cria-comments-section__thread">
        {comments.length === 0 ? (
          <div style={{ textAlign: 'center', padding: spacing[6], color: colors.text.secondary }}>
            <Typography variant="body2">No comments yet. Be the first to comment!</Typography>
          </div>
        ) : (
          comments.map(comment => renderComment(comment))
        )}
      </div>

      {deleteConfirm && (
        <Modal
          isOpen={true}
          onClose={() => setDeleteConfirm(null)}
          title="Delete Comment"
          size="sm"
        >
          <Typography variant="body2" style={{ marginBottom: spacing[4] }}>
            Are you sure you want to delete this comment? This action cannot be undone.
          </Typography>
          <div style={{ display: 'flex', gap: spacing[2], justifyContent: 'flex-end' }}>
            <Button variant="secondary" onClick={() => setDeleteConfirm(null)}>
              Cancel
            </Button>
            <Button variant="danger" onClick={confirmDelete}>
              Confirm
            </Button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default CommentsSection;
