import React, { useState } from 'react';
import { submitFeedback } from '../services/analysisService';

export default function FeedbackModal({ analysisId, darkMode, onClose }) {
    const [rating, setRating] = useState(0);
    const [isCorrect, setIsCorrect] = useState(null);
    const [comment, setComment] = useState('');
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = async () => {
        if (rating === 0 || isCorrect === null) {
            alert('Please provide a rating and verdict correctness');
            return;
        }

        setSubmitting(true);
        try {
            await submitFeedback(analysisId, rating, comment, isCorrect);
            alert('Thank you for your feedback!');
            onClose();
        } catch (error) {
            alert('Failed to submit feedback. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.7)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '1rem'
        }}>
            <div className="glass-card" style={{
                maxWidth: '500px',
                width: '100%',
                background: 'var(--bg-card)',
                border: '1px solid var(--teal-primary)',
                boxShadow: '0 20px 60px rgba(20, 184, 166, 0.3)'
            }}>
                {/* Header */}
                <div style={{
                    borderBottom: '1px solid var(--glass-border)',
                    paddingBottom: '1rem',
                    marginBottom: '1.5rem'
                }}>
                    <h2 style={{
                        fontSize: '1.75rem',
                        fontWeight: 700,
                        color: 'var(--teal-primary)',
                        margin: 0
                    }}>
                        ⭐ Rate this Analysis
                    </h2>
                </div>

                {/* Rating Stars */}
                <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{
                        display: 'block',
                        fontSize: '1rem',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        marginBottom: '0.75rem'
                    }}>
                        How accurate was this result?
                    </label>
                    <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                onClick={() => setRating(star)}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    fontSize: '2.5rem',
                                    cursor: 'pointer',
                                    transition: 'transform 0.2s ease',
                                    filter: star <= rating
                                        ? 'drop-shadow(0 0 8px rgba(251, 191, 36, 0.6))'
                                        : 'none'
                                }}
                                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
                                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            >
                                {star <= rating ? '⭐' : '☆'}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Verdict Correctness */}
                <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{
                        display: 'block',
                        fontSize: '1rem',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        marginBottom: '0.75rem'
                    }}>
                        Was the verdict correct?
                    </label>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <button
                            onClick={() => setIsCorrect(true)}
                            style={{
                                padding: '0.75rem 2rem',
                                borderRadius: '12px',
                                border: isCorrect === true
                                    ? '2px solid #10b981'
                                    : '1px solid var(--glass-border)',
                                background: isCorrect === true
                                    ? 'linear-gradient(135deg, #10b981, #059669)'
                                    : 'var(--glass-bg)',
                                color: isCorrect === true ? 'white' : 'var(--text-secondary)',
                                fontWeight: 600,
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                boxShadow: isCorrect === true
                                    ? '0 4px 12px rgba(16, 185, 129, 0.4)'
                                    : 'none'
                            }}
                        >
                            ✓ Yes
                        </button>
                        <button
                            onClick={() => setIsCorrect(false)}
                            style={{
                                padding: '0.75rem 2rem',
                                borderRadius: '12px',
                                border: isCorrect === false
                                    ? '2px solid #ef4444'
                                    : '1px solid var(--glass-border)',
                                background: isCorrect === false
                                    ? 'linear-gradient(135deg, #ef4444, #dc2626)'
                                    : 'var(--glass-bg)',
                                color: isCorrect === false ? 'white' : 'var(--text-secondary)',
                                fontWeight: 600,
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                boxShadow: isCorrect === false
                                    ? '0 4px 12px rgba(239, 68, 68, 0.4)'
                                    : 'none'
                            }}
                        >
                            ✗ No
                        </button>
                    </div>
                </div>

                {/* Comment */}
                <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{
                        display: 'block',
                        fontSize: '1rem',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        marginBottom: '0.75rem'
                    }}>
                        Additional comments (optional):
                    </label>
                    <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Tell us more..."
                        style={{
                            width: '100%',
                            minHeight: '100px',
                            padding: '1rem',
                            borderRadius: '12px',
                            border: '1px solid var(--glass-border)',
                            background: 'rgba(10, 31, 28, 0.6)',
                            color: 'var(--text-primary)',
                            fontSize: '1rem',
                            resize: 'vertical',
                            fontFamily: 'inherit'
                        }}
                    />
                </div>

                {/* Buttons */}
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                    <button
                        onClick={onClose}
                        disabled={submitting}
                        style={{
                            padding: '0.75rem 1.5rem',
                            borderRadius: '12px',
                            border: '1px solid var(--glass-border)',
                            background: 'var(--glass-bg)',
                            color: 'var(--text-secondary)',
                            fontWeight: 600,
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        Skip
                    </button>
                    <button
                        onClick={handleSubmit}
                        disabled={submitting}
                        className="btn-primary"
                        style={{
                            padding: '0.75rem 2rem',
                            borderRadius: '12px',
                            border: 'none',
                            background: 'linear-gradient(135deg, var(--teal-primary), var(--cyan-accent))',
                            color: 'white',
                            fontWeight: 600,
                            cursor: submitting ? 'not-allowed' : 'pointer',
                            opacity: submitting ? 0.6 : 1,
                            boxShadow: '0 4px 12px rgba(20, 184, 166, 0.4)'
                        }}
                    >
                        {submitting ? 'Submitting...' : 'Submit'}
                    </button>
                </div>
            </div>
        </div>
    );
}
