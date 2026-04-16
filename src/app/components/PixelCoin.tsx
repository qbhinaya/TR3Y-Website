interface PixelCoinProps {
  delay?: string;
}

export function PixelCoin({ delay = '0s' }: PixelCoinProps) {
  return (
    <div className="animate-float" style={{ animationDelay: delay }}>
      <svg width="24" height="24" viewBox="0 0 24 24" className="pixelated">
        <rect x="8" y="4" width="8" height="4" fill="#FFFFB0"/>
        <rect x="4" y="8" width="16" height="8" fill="#FFFFB0"/>
        <rect x="8" y="16" width="8" height="4" fill="#FFFFB0"/>
        
        {/* Coin detail */}
        <rect x="10" y="8" width="4" height="8" fill="#FF9B00"/>
        <rect x="8" y="10" width="8" height="4" fill="#FF9B00"/>
      </svg>
    </div>
  );
}
