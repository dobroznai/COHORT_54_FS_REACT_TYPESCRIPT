export interface FeedbackProps {
  onLike: () => void;
  onDislike: () => void;
  like: number;
  dislike: number;
  resetResults: () => void;
}
