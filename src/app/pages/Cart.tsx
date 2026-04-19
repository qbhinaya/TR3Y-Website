import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Trash2, Plus, Minus, ShoppingCart, ArrowLeft, Send } from 'lucide-react';

export function Cart() {
  const { cart, removeFromCart, updateQuantity, getTotalPrice, getTotalItems, clearCart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (cart.length === 0) return;

    // Build WhatsApp message
    let message = '🛒 *PESANAN BARU*\n\n';
    
    cart.forEach((item, index) => {
      const itemTotal = item.price * item.quantity;
      message += `${index + 1}. *${item.name}*\n`;
      message += `   Qty: ${item.quantity}x\n`;
      message += `   Harga: Rp ${item.price.toLocaleString('id-ID')}\n`;
      message += `   Subtotal: Rp ${itemTotal.toLocaleString('id-ID')}\n\n`;
    });

    message += `━━━━━━━━━━━━━━━\n`;
    message += `*TOTAL: Rp ${getTotalPrice().toLocaleString('id-ID')}*\n`;
    message += `Total Item: ${getTotalItems()}\n\n`;
    message += `Mohon konfirmasi pesanan saya. Terima kasih! 🙏`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // WhatsApp number (without +, spaces, or dashes)
    const whatsappNumber = '62895611877758'; // Ganti dengan nomor WA bisnis Anda
    
    // Open WhatsApp
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');

    // Optional: Clear cart after checkout
    // clearCart();
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-[#1a1a2e] relative overflow-hidden scanline">
      {/* Retro CRT Screen Effect */}
      <div className="fixed inset-0 pointer-events-none z-50 bg-gradient-to-b from-transparent via-white/5 to-transparent opacity-20" />
      
      {/* Pixel Grid Background */}
      <div 
        className="fixed inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(0deg, #FF9B00 1px, transparent 1px),
            linear-gradient(90deg, #FF9B00 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}
      />

      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#FF9B00] border-b-4 border-black py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/')}
              className="bg-white border-4 border-black px-4 py-2 pixel-box-shadow hover:bg-[#FFFFB0] transition-colors flex items-center gap-2 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-[#FF9B00]" />
              <span className="text-xs text-[#FF9B00]">KEMBALI</span>
            </button>
            
            <div className="flex items-center gap-2">
              <ShoppingCart className="w-5 h-5 text-white" />
              <h1 className="text-white text-lg sm:text-xl">KERANJANG</h1>
            </div>

            <div className="bg-white border-4 border-black px-4 py-2 pixel-box-shadow">
              <span className="text-xs text-[#FF9B00]">{getTotalItems()} ITEM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="z-10 px-4 sm:px-6 py-8" style={{ paddingTop: '100px', paddingBottom: '300px' }}>
        <div className="container mx-auto max-w-4xl">
          
          {cart.length === 0 ? (
            // Empty Cart
            <div className="text-center py-16">
              <div className="inline-block bg-black border-4 border-white p-8 pixel-box-shadow mb-6">
                <ShoppingCart className="w-16 h-16 text-[#FF9B00] mx-auto mb-4" />
                <h2 className="text-lg text-[#FFFFB0] mb-2">KERANJANG KOSONG</h2>
                <p className="text-xs text-gray-400 mb-6">Belum ada pesanan nih!</p>
                <button
                  onClick={() => navigate('/')}
                  className="bg-[#FF9B00] hover:bg-[#FFFFB0] border-4 border-black px-6 py-3 transition-colors pixel-box-shadow cursor-pointer"
                >
                  <span className="text-xs text-white">MULAI PESAN</span>
                </button>
              </div>
            </div>
          ) : (
            // Cart Items
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="bg-black border-4 border-white p-4 pixel-box-shadow">
                  <div className="flex gap-4">
                    {/* Image */}
                    <div className="w-24 h-24 flex-shrink-0 border-4 border-[#FF9B00] overflow-hidden">
                      <ImageWithFallback 
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1">
                      <h3 className="text-sm sm:text-base text-[#FFFFB0] mb-2">{item.name}</h3>
                      <div className="text-xs text-[#FF9B00] mb-3">{formatPrice(item.price)}</div>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="bg-[#FF9B00] border-2 border-black p-1 hover:bg-[#FFFFB0] transition-colors pixel-box-shadow cursor-pointer"
                        >
                          <Minus className="w-4 h-4 text-white" />
                        </button>
                        
                        <div className="bg-white border-2 border-[#FF9B00] px-4 py-1 min-w-[60px] text-center">
                          <span className="text-sm text-[#FF9B00]">{item.quantity}</span>
                        </div>
                        
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="bg-[#FF9B00] border-2 border-black p-1 hover:bg-[#FFFFB0] transition-colors pixel-box-shadow cursor-pointer"
                        >
                          <Plus className="w-4 h-4 text-white" />
                        </button>

                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="ml-auto bg-red-600 border-2 border-black p-2 hover:bg-red-700 transition-colors pixel-box-shadow cursor-pointer"
                        >
                          <Trash2 className="w-4 h-4 text-white" />
                        </button>
                      </div>
                    </div>

                    {/* Subtotal */}
                    <div className="text-right">
                      <div className="text-[10px] text-gray-400 mb-1">SUBTOTAL</div>
                      <div className="bg-[#FFFFB0] border-2 border-black px-3 py-1">
                        <span className="text-xs text-[#FF9B00]">
                          {formatPrice(item.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Bottom Summary - Fixed */}
      {cart.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-black border-t-4 border-[#FF9B00] py-4">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Summary */}
            <div className="bg-[#1a1a2e] border-4 border-white p-4 pixel-box-shadow mb-4">
              <div className="space-y-2 mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-400">Total Item:</span>
                  <span className="text-sm text-[#FFFFB0]">{getTotalItems()} pcs</span>
                </div>
                <div className="h-1 w-full bg-[#FF9B00]" />
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#FFFFB0]">TOTAL BAYAR:</span>
                  <span className="text-lg text-[#FF9B00]">{formatPrice(getTotalPrice())}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={handleCheckout}
                className="w-full bg-[#FF9B00] hover:bg-[#FFFFB0] border-4 border-black py-3 px-6 transition-colors pixel-box-shadow flex items-center justify-center gap-3 cursor-pointer"
              >
                <Send className="w-5 h-5 text-white" />
                <span className="text-sm text-white">CHECKOUT VIA WHATSAPP</span>
              </button>

              <button
                onClick={clearCart}
                className="w-full mt-2 bg-red-600 hover:bg-red-700 border-4 border-black py-2 px-6 transition-colors pixel-box-shadow cursor-pointer"
              >
                <span className="text-xs text-white">KOSONGKAN KERANJANG</span>
              </button>
            </div>
          </div>
        </div>
      )}
      
    </div>
  );
}
