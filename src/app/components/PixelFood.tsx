export function PixelFood() {
  return (
    <div className="flex gap-8 items-center justify-center flex-wrap">
      {/* Pizza Slice */}
      <div className="animate-bounce-pixel">
        <svg width="40" height="40" viewBox="0 0 40 40" className="pixelated">
          <rect x="8" y="4" width="24" height="4" fill="#FF9B00"/>
          <rect x="12" y="8" width="20" height="4" fill="#FF9B00"/>
          <rect x="16" y="12" width="16" height="4" fill="#FF9B00"/>
          <rect x="20" y="16" width="12" height="4" fill="#FF9B00"/>
          <rect x="24" y="20" width="8" height="4" fill="#FF9B00"/>
          <rect x="28" y="24" width="4" height="4" fill="#FF9B00"/>
          {/* Toppings */}
          <rect x="16" y="8" width="4" height="4" fill="#FFFFB0"/>
          <rect x="24" y="12" width="4" height="4" fill="#FFFFB0"/>
          <rect x="20" y="16" width="4" height="4" fill="#FFFFB0"/>
        </svg>
      </div>

      {/* Bowl of Rice */}
      <div className="animate-float" style={{ animationDelay: '0.5s' }}>
        <svg width="40" height="40" viewBox="0 0 40 40" className="pixelated">
          <rect x="8" y="16" width="24" height="4" fill="#FF9B00"/>
          <rect x="8" y="20" width="4" height="8" fill="#FF9B00"/>
          <rect x="28" y="20" width="4" height="8" fill="#FF9B00"/>
          <rect x="12" y="28" width="16" height="4" fill="#FF9B00"/>
          {/* Rice */}
          <rect x="12" y="12" width="16" height="4" fill="#FFFFB0"/>
          <rect x="16" y="8" width="8" height="4" fill="#FFFFB0"/>
        </svg>
      </div>

      {/* Satay Sticks */}
      <div className="animate-bounce-pixel" style={{ animationDelay: '1s' }}>
        <svg width="40" height="40" viewBox="0 0 40 40" className="pixelated">
          <rect x="12" y="8" width="4" height="4" fill="#FF9B00"/>
          <rect x="12" y="12" width="4" height="4" fill="#FFFFB0"/>
          <rect x="12" y="16" width="4" height="4" fill="#FF9B00"/>
          <rect x="12" y="20" width="4" height="12" fill="#FFFFB0"/>
          
          <rect x="20" y="12" width="4" height="4" fill="#FF9B00"/>
          <rect x="20" y="16" width="4" height="4" fill="#FFFFB0"/>
          <rect x="20" y="20" width="4" height="4" fill="#FF9B00"/>
          <rect x="20" y="24" width="4" height="8" fill="#FFFFB0"/>
        </svg>
      </div>
    </div>
  );
}
