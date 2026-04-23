import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Trash2, Plus, Minus, ShoppingCart, ArrowLeft, Send, User, X} from 'lucide-react';
import { useState } from 'react';

export function Cart() {
  const { cart, removeFromCart, updateQuantity, getTotalPrice, getTotalItems, clearCart } = useCart();
  const navigate = useNavigate();
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const [customerName, setCustomerName] = useState('');

  const handleOpenCheckoutForm = () => {
    if (cart.length === 0) return;
    setShowCheckoutForm(true);
  };

  const handleSendToWhatsApp = () => {
    if (!customerName.trim()) {
      alert('Mohon isi nama Anda terlebih dahulu!');
      return;
    }

    // Build WhatsApp message
    let message = '🛒 *PESANAN BARU*\n\n';
    message += `👤 *Nama:* ${customerName}\n\n`;
    message += `━━━━━━━━━━━━━━━\n`;
    message += `*DETAIL PESANAN:*\n\n`;

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

    // Close modal and reset
    setShowCheckoutForm(false);
    setCustomerName('');

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
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#FF9B00] border-b-4 border-black py-3">
        <div className="container mx-auto px-3">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/')}
              className="bg-white border-4 border-black px-3 py-2 pixel-box-shadow hover:bg-[#FFFFB0] transition-colors flex items-center gap-1 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-[#FF9B00]" />
              <span className="text-xs text-[#FF9B00] hidden xs:inline">KEMBALI</span>
            </button>
            
            <div className="flex items-center gap-2">
              <ShoppingCart className="w-5 h-5 text-white" />
              <h1 className="text-white text-base sm:text-xl">KERANJANG</h1>
            </div>

            <div className="bg-white border-4 border-black px-3 py-2 pixel-box-shadow">
              <span className="text-xs text-[#FF9B00]">{getTotalItems()} ITEM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div
        className="z-10 px-3 sm:px-6 py-8"
        style={{ paddingTop: '80px', paddingBottom: cart.length > 0 ? '220px' : '32px' }}
      >
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
                <div key={item.id} className="bg-black border-4 border-white p-3 sm:p-4 pixel-box-shadow">
                  
                  {/* Row 1: Image + Name + Delete */}
                  <div className="flex gap-3 mb-3">
                    {/* Image */}
                    <div className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 border-4 border-[#FF9B00] overflow-hidden">
                      <ImageWithFallback 
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Name + Price + Delete */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-sm text-[#FFFFB0] leading-tight">{item.name}</h3>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="flex-shrink-0 bg-red-600 border-2 border-black p-1.5 hover:bg-red-700 transition-colors pixel-box-shadow cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5 text-white" />
                        </button>
                      </div>
                      <div className="text-xs text-[#FF9B00] mt-1">{formatPrice(item.price)}</div>
                    </div>
                  </div>

                  {/* Row 2: Quantity Controls + Subtotal */}
                  <div className="flex items-center justify-between gap-3">
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="bg-[#FF9B00] border-2 border-black p-1.5 hover:bg-[#FFFFB0] transition-colors pixel-box-shadow cursor-pointer"
                      >
                        <Minus className="w-3.5 h-3.5 text-white" />
                      </button>
                      
                      <div className="bg-white border-2 border-[#FF9B00] px-3 py-1 min-w-[48px] text-center">
                        <span className="text-sm text-[#FF9B00]">{item.quantity}</span>
                      </div>
                      
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="bg-[#FF9B00] border-2 border-black p-1.5 hover:bg-[#FFFFB0] transition-colors pixel-box-shadow cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5 text-white" />
                      </button>
                    </div>

                    {/* Subtotal */}
                    <div className="text-right">
                      <div className="text-[10px] text-gray-400 mb-0.5">SUBTOTAL</div>
                      <div className="bg-[#FFFFB0] border-2 border-black px-2 py-1">
                        <span className="text-xs text-[#FF9B00] font-bold">
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
        <div className="fixed bottom-0 left-0 right-0 bg-black border-t-4 border-[#FF9B00] py-3">
          <div className="container mx-auto px-3 max-w-4xl">
            <div className="bg-[#1a1a2e] border-4 border-white p-3 pixel-box-shadow">
              {/* Total Info */}
              <div className="flex items-center justify-between mb-3">
                <div>
                  <div className="text-[10px] text-gray-400">Total Item</div>
                  <div className="text-xs text-[#FFFFB0]">{getTotalItems()} pcs</div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-gray-400">TOTAL BAYAR</div>
                  <div className="text-base sm:text-lg text-[#FF9B00]">{formatPrice(getTotalPrice())}</div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-2">
                <button
                  onClick={clearCart}
                  className="flex-shrink-0 bg-red-600 hover:bg-red-700 border-4 border-black py-2.5 px-3 transition-colors pixel-box-shadow cursor-pointer"
                >
                  <Trash2 className="w-4 h-4 text-white" />
                </button>

                {/* Checkout Button */}
              <button
                onClick={handleOpenCheckoutForm}
                className="w-full bg-[#FF9B00] hover:bg-[#FFFFB0] border-4 border-black py-3 px-6 transition-colors pixel-box-shadow flex items-center justify-center gap-3 cursor-pointer"
              >
                <Send className="w-5 h-5 text-white" />
                <span className="text-sm text-white">CHECKOUT VIA WHATSAPP</span>
              </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Checkout Form Modal */}
      {showCheckoutForm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
          <div className="relative w-full max-w-md">
            {/* Modal Box */}
            <div className="bg-black border-8 border-[#FF9B00] pixel-box-shadow">
              {/* Header */}
              <div className="bg-[#FF9B00] border-b-4 border-white p-4 flex items-center justify-between">
                <h2 className="text-base sm:text-lg text-white flex items-center gap-2">
                  <User className="w-5 h-5" />
                  INFORMASI PEMESAN
                </h2>
                <button
                  onClick={() => {
                    setShowCheckoutForm(false);
                    setCustomerName('');
                  }}
                  className="bg-red-600 hover:bg-red-700 border-4 border-white p-2 pixel-box-shadow transition-colors"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>

              {/* Form Content */}
              <div className="p-6">
                <div className="bg-[#1a1a2e] border-2 border-[#FFFFB0] p-4 mb-6">
                  <p className="text-xs text-white text-center mb-2">
                    Silakan isi nama Anda sebelum melanjutkan pesanan ke WhatsApp
                  </p>
                  <div className="h-1 w-full bg-[#FF9B00] my-3" />
                  <div className="text-center">
                    <div className="text-xs text-gray-400 mb-2">Total Pesanan:</div>
                    <div className="inline-block bg-[#FF9B00] border-4 border-white px-6 py-2 pixel-box-shadow">
                      <span className="text-lg text-white">{formatPrice(getTotalPrice())}</span>
                    </div>
                  </div>
                </div>

                {/* Name Input */}
                <div className="mb-6">
                  <label className="block text-xs text-[#FFFFB0] mb-2 flex items-center gap-2">
                    <User className="w-4 h-4" />
                    NAMA LENGKAP <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Masukkan nama Anda..."
                    className="w-full bg-white border-4 border-[#FF9B00] px-4 py-3 text-sm text-[#FF9B00] placeholder:text-gray-400 focus:outline-none focus:border-[#FFFFB0] pixel-box-shadow"
                    autoFocus
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        handleSendToWhatsApp();
                      }
                    }}
                  />
                  <p className="text-[10px] text-gray-400 mt-2">
                    * Nama akan dikirim bersama pesanan Anda
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2">
                  <button
                    onClick={handleSendToWhatsApp}
                    disabled={!customerName.trim()}
                    className="w-full bg-[#FFFFB0] hover:bg-[#FF9B00] disabled:bg-gray-600 border-4 border-black py-3 px-6 transition-colors pixel-box-shadow flex items-center justify-center gap-3 animate-pulse-pixel disabled:animate-none cursor-pointer"
                  >
                    <Send className="w-5 h-5 text-[#FF9B00]" />
                    <span className="text-sm text-[#FF9B00]">PESAN VIA WHATSAPP</span>
                  </button>

                  <button
                    onClick={() => {
                      setShowCheckoutForm(false);
                      setCustomerName('');
                    }}
                    className="w-full bg-white hover:bg-gray-200 border-4 border-black py-2 px-6 transition-colors pixel-box-shadow cursor-pointer"
                  >
                    <span className="text-xs text-gray-700">BATAL</span>
                  </button>
                </div>
              </div>

              {/* Footer Decoration */}
              <div className="bg-[#FF9B00] border-t-4 border-white p-2">
                <div className="text-center text-[10px] text-white">
                  ⚡ PASTIKAN DATA ANDA BENAR ⚡
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
    </div>
  );
}