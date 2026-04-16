export function PixelChef() {
  return (
    <div className="animate-bounce-pixel">
      <svg width="80" height="80" viewBox="0 0 80 80" className="pixelated">
        {/* Chef Hat */}
        <rect x="20" y="12" width="40" height="4" fill="white"/>
        <rect x="16" y="16" width="48" height="4" fill="white"/>
        <rect x="16" y="20" width="48" height="8" fill="white"/>
        <rect x="20" y="8" width="4" height="4" fill="white"/>
        <rect x="32" y="4" width="16" height="4" fill="white"/>
        <rect x="56" y="8" width="4" height="4" fill="white"/>
        
        {/* Hat Border */}
        <rect x="16" y="28" width="48" height="4" fill="#FF9B00"/>
        
        {/* Face */}
        <rect x="24" y="32" width="32" height="24" fill="#FFFFB0"/>
        
        {/* Eyes */}
        <rect x="32" y="40" width="4" height="4" fill="black"/>
        <rect x="44" y="40" width="4" height="4" fill="black"/>
        
        {/* Smile */}
        <rect x="32" y="48" width="4" height="4" fill="black"/>
        <rect x="36" y="52" width="8" height="4" fill="black"/>
        <rect x="44" y="48" width="4" height="4" fill="black"/>
        
        {/* Body */}
        <rect x="20" y="56" width="40" height="20" fill="white"/>
        <rect x="28" y="60" width="4" height="12" fill="#FF9B00"/>
        <rect x="36" y="60" width="4" height="12" fill="#FF9B00"/>
        <rect x="44" y="60" width="4" height="12" fill="#FF9B00"/>
      </svg>
    </div>
  );
}
