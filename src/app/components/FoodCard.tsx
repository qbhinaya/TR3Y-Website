interface FoodCardProps {
  name: string;
  price: string;
  description: string;
  image?: string;
}

export function FoodCard({ name, price, description }: FoodCardProps) {
  return (
    <div className="bg-black border-4 border-white p-1 pixel-box-shadow hover:scale-105 transition-transform">
      {/* Image placeholder - Pixel style */}
      <div className="bg-gradient-to-br from-[#FF9B00] to-[#FFFFB0] h-40 border-4 border-[#FF9B00] mb-3 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `
            linear-gradient(0deg, black 2px, transparent 2px),
            linear-gradient(90deg, black 2px, transparent 2px)
          `,
          backgroundSize: '10px 10px'
        }} />
        {/* Pixel food icon in center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl">🍜</div>
        </div>
      </div>
      
      {/* Content */}
      <div className="bg-[#1a1a2e] border-2 border-[#FFFFB0] p-4">
        {/* Name */}
        <h3 className="text-sm sm:text-base text-[#FFFFB0] mb-2 uppercase">
          {name}
        </h3>
        
        {/* Divider */}
        <div className="h-1 w-full bg-[#FF9B00] mb-3" />
        
        {/* Price */}
        <div className="bg-[#FF9B00] border-2 border-white inline-block px-3 py-1 mb-3">
          <span className="text-xs sm:text-sm text-white">{price}</span>
        </div>
        
        {/* Description */}
        <p className="text-[9px] sm:text-[10px] text-gray-300 leading-relaxed">
          {description}
        </p>
        
        {/* Stats bar */}
        <div className="mt-4 space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-[8px] text-[#FFFFB0] w-16">TASTE:</span>
            <div className="flex-1 bg-black border border-[#FF9B00] h-2">
              <div className="h-full bg-[#FF9B00]" style={{ width: '95%' }} />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[8px] text-[#FFFFB0] w-16">SPICY:</span>
            <div className="flex-1 bg-black border border-[#FF9B00] h-2">
              <div className="h-full bg-[#FFFFB0]" style={{ width: '70%' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
