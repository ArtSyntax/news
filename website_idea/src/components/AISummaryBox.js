import { getSentimentInfo } from '@/lib/categories';

/**
 * AI News Impact Summarizer Box
 * Placed at the top of every article page.
 * Shows 3-line AI summary with sentiment indicator.
 */
export function AISummaryBox({
  summaryPoints = [],
  sentiment = 'neutral',
}) {
  const sentimentInfo = getSentimentInfo(sentiment);

  return (
    <div className="ai-summary-box" role="complementary" aria-label="สรุปข่าวโดย AI">
      <div className="ai-summary-header">
        <span className="ai-badge">
          <svg
            className="ai-sparkle-icon"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="var(--color-secondary)"
          >
            <path d="M12 2L14.09 8.26L20 9.27L15.55 13.97L16.91 20L12 16.9L7.09 20L8.45 13.97L4 9.27L9.91 8.26L12 2Z" />
          </svg>
          FINSYNTAX AI Copilot Summary
        </span>
        <span className={`sentiment-badge ${sentimentInfo.className}`}>
          {sentimentInfo.label}
        </span>
      </div>

      {summaryPoints.length > 0 && (
        <ul className="ai-summary-list">
          {summaryPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
