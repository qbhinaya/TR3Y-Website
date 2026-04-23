import { ImageWithFallback } from './figma/ImageWithFallback';
import { useCart, FoodItem } from '../context/CartContext';
import { ShoppingCart } from 'lucide-react';

interface FoodCardProps {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  taste: number;
  spicy: number;
}

export function FoodCard({ id, name, price, description, image, taste, spicy }: FoodCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const item: FoodItem = { id, name, price, description, image, taste, spicy };
    addToCart(item);
    
    // Simple feedback
    const button = document.getElementById(`btn-${id}`);
    if (button) {
      button.textContent = 'DITAMBAH! ✓';
      setTimeout(() => {
        button.textContent = 'PESAN';
      }, 1000);
    }
  };

  // Format price to Rupiah
  const formattedPrice = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(price);

  return (
    <div className="bg-black border-4 border-white p-1 pixel-box-shadow hover:scale-105 transition-transform">
      {/* Image - Real photo */}
      <div className="h-40 border-4 border-[#FF9B00] mb-3 relative overflow-hidden">
        <ImageWithFallback 
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
          backgroundImage: `
            linear-gradient(0deg, black 2px, transparent 2px),
            linear-gradient(90deg, black 2px, transparent 2px)
          `,
          backgroundSize: '10px 10px'
        }} />
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
          <span className="text-xs sm:text-sm text-white">{formattedPrice}</span>
        </div>
        
        {/* Description */}
        <p className="text-[9px] sm:text-[10px] text-gray-300 leading-relaxed mb-4">
          {description}
        </p>
        
        {/* Stats bar */}
        <div className="mb-4 space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-[8px] text-[#FFFFB0] w-16">SWEET:</span>
            <div className="flex-1 bg-black border border-[#FF9B00] h-2">
              <div className="h-full bg-[#FF9B00]" style={{ width: `${taste}%` }} />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[8px] text-[#FFFFB0] w-16">SPICY:</span>
            <div className="flex-1 bg-black border border-[#FF9B00] h-2">
              <div className="h-full bg-[#FFFFB0]" style={{ width: `${spicy}%` }} />
            </div>
          </div>
        </div>

        {/* Pesan Button */}
        <button
          id={`btn-${id}`}
          onClick={handleAddToCart}
          className="w-full cursor-pointer bg-[#FFFFB0] hover:bg-[#FF9B00] border-4 border-black py-2 px-4 transition-colors pixel-box-shadow flex items-center justify-center gap-2 group"
        >
          <ShoppingCart className="w-4 h-4 text-[#FF9B00] group-hover:text-white" />
          <span className="text-xs text-[#FF9B00] group-hover:text-white">PESAN</span>
        </button>
      </div>
    </div>
  );
}