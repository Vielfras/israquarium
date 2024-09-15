// IAnimations.ts

export interface FishAnimation {
    id: number;
    size: number; // Scale factor (e.g., 1 for normal size)
    initialX: number; // Percentage (0 to 100)
    initialY: number; // Percentage (0 to 100)
    direction: 'left' | 'right';
    duration: number; // Animation duration in seconds
    delay: number; // Animation delay in seconds
  }
  
  export interface BubbleAnimation {
    id: number;
    size: number; // Width and height in pixels
    initialX: number; // Percentage (0 to 100)
    initialY: number; // Percentage (0 to 100)
    duration: number; // Animation duration in seconds
    delay: number; // Animation delay in seconds
  }