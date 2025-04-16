// components/StarRating.jsx
import React from 'react';

/**
 * A scalable and customizable star rating component
 * @param {Object} props - Component props
 * @param {number} props.rating - The rating value (e.g., 4.9)
 * @param {number} props.maxStars - Maximum number of stars (default: 5)
 * @param {string} props.fillColor - Color of filled stars (default: gold)
 * @param {string} props.strokeColor - Color of star outlines (default: same as fillColor)
 * @param {number} props.size - Size multiplier for the component (default: 1)
 * @param {number} props.spacing - Space between stars as a ratio of star size (default: 0.2)
 * @param {string} props.className - Additional CSS classes to apply
 * @param {string} props.id - ID for the SVG element
 * @param {Object} props.style - Additional inline styles
 */
const StarRating = ({
  rating = 4.9,
  maxStars = 5,
  fillColor = '#FFD700', // Gold
  strokeColor = '#FFD700', // Gold
  size = 1,
  spacing = 0.2,
  className = '',
  id = 'stars',
  style = {},
  ...restProps
}) => {
  // Ensure rating is within bounds
  const normalizedRating = Math.max(0, Math.min(rating, maxStars));
  
  // Calculate stars
  const fullStars = Math.floor(normalizedRating);
  const partialStar = normalizedRating % 1;
  const emptyStars = maxStars - fullStars - (partialStar > 0 ? 1 : 0);
  
  // Base star dimensions and spacing
  const baseStarWidth = 50;
  const baseStarHeight = 50;
  const starWidth = baseStarWidth * size;
  const starHeight = baseStarHeight * size;
  const starSpacing = starWidth * spacing;
  
  // Calculate SVG dimensions
  const svgWidth = maxStars * starWidth + (maxStars - 1) * starSpacing;
  const svgHeight = starHeight;
  
  // Use the provided strokeColor or default to fillColor
  const actualStrokeColor = strokeColor || fillColor;
  
  // Star path definition (standard 5-pointed star)
  const starPath = "M25 10 L32.9 29.6 L53.1 29.6 L36.9 41.4 L43.1 60 L25 47 L6.9 60 L13.1 41.4 L-3.1 29.6 L17.1 29.6 Z";
  
  // Generate unique IDs for clip paths
  const clipPathId = `star-clip-${id || Math.random().toString(36).substr(2, 9)}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${svgWidth} ${svgHeight}`}
      width={svgWidth}
      height={svgHeight}
      className={className}
      id={id}
      style={style}
      aria-label={`${normalizedRating} out of ${maxStars} stars`}
      role="img"
      {...restProps}
    >
      <defs>
        {partialStar > 0 && (
          <clipPath id={clipPathId}>
            <rect 
              x={fullStars * (starWidth + starSpacing)} 
              y="0" 
              width={starWidth * partialStar} 
              height={starHeight}
            />
          </clipPath>
        )}
      </defs>
      
      {/* Full Stars */}
      {Array.from({ length: fullStars }).map((_, i) => (
        <path
          key={`full-star-${i}`}
          d={starPath}
          fill={fillColor}
          transform={`translate(${i * (starWidth + starSpacing)}, 0) scale(${size})`}
        />
      ))}
      
      {/* Partial Star (if any) */}
      {partialStar > 0 && (
        <>
          <path
            d={starPath}
            fill={fillColor}
            transform={`translate(${fullStars * (starWidth + starSpacing)}, 0) scale(${size})`}
            clipPath={`url(#${clipPathId})`}
          />
          <path
            d={starPath}
            fill="none"
            stroke={actualStrokeColor}
            strokeWidth={1}
            transform={`translate(${fullStars * (starWidth + starSpacing)}, 0) scale(${size})`}
          />
        </>
      )}
      
      {/* Empty Stars */}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <path
          key={`empty-star-${i}`}
          d={starPath}
          fill="none"
          stroke={actualStrokeColor}
          strokeWidth={1}
          transform={`translate(${(fullStars + (partialStar > 0 ? 1 : 0) + i) * (starWidth + starSpacing)}, 0) scale(${size})`}
        />
      ))}
    </svg>
  );
};

export default StarRating;