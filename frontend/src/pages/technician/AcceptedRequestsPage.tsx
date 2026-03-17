import { useState } from 'react';
import { Clock, MapPin, User, Eye, ChevronRight, X, Phone, Calendar, ArrowLeft, Navigation } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

export default function TechAcceptedRequestsPage() {
  const [selectedReq, setSelectedReq] = useState<any>(null);
  const [showConfirmStart, setShowConfirmStart] = useState<string | null>(null);

  const acceptedRequests = [
    { 
      id: 'REQ-101', 
      serviceName: 'Sửa điều hòa Panasonic', 
      customer: 'Nguyễn Văn B', 
      phone: '0905 123 456',
      address: '123 Đường Láng, Đống Đa, Hà Nội', 
      time: '10:30 - 10/03/2026', 
      price: '250.000 VNĐ',
      description: 'Máy lạnh không lạnh, chỉ thổi gió. Cần kiểm tra gas và vệ sinh cục nóng.',
      lat: 21.0285,
      lng: 105.8542
    },
    { 
      id: 'REQ-102', 
      serviceName: 'Lắp đặt vòi nước bếp', 
      customer: 'Sarah Martinez', 
      phone: '0988 777 666',
      address: '456 Nguyễn Trãi, Thanh Xuân, Hà Nội', 
      time: '14:00 - 10/03/2026', 
      price: '120.000 VNĐ',
      description: 'Thay vòi nước bồn rửa bát cũ bằng vòi mới khách đã tự mua.',
      lat: 21.0012,
      lng: 105.8123
    },
  ];

  return (
    <div className="p-2 md:p-6 space-y-6 pb-20 overflow-x-hidden">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-foreground">Đơn Hàng Đã Tiếp Nhận</h1>
          <p className="text-muted-foreground text-sm mt-1">Sắp xếp lộ trình di chuyển hiệu quả nhất</p>
        </div>
        <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-blue-400 font-bold text-xs uppercase tracking-widest">{acceptedRequests.length} Công việc chờ</span>
        </div>
      </div>

      <div className="space-y-4">
        <AnimatePresence>
          {acceptedRequests.map((req, idx) => (
            <motion.div
              key={req.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#0f172a]/50 backdrop-blur-md rounded-2xl border border-white/5 p-6 hover:border-blue-500/30 transition-all shadow-xl group"
            >
              <div className="flex flex-col xl:flex-row justify-between gap-6 items-start xl:items-center">
                <div className="flex-1 space-y-4 w-full">
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-0.5 bg-blue-500/10 text-blue-400 rounded-lg text-[10px] font-black uppercase tracking-widest border border-blue-500/20">
                      Đã xác nhận
                    </span>
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">ID: {req.id}</span>
                  </div>
                  
                  <h3 className="text-xl font-black text-foreground group-hover:text-blue-400 transition-colors uppercase tracking-tight">
                    {req.serviceName}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="flex items-center gap-3 p-3 bg-white/[0.03] rounded-xl border border-white/5">
                      <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/10">
                        <User className="w-4 h-4 text-blue-400" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] font-bold text-slate-500 uppercase">Khách hàng</p>
                        <p className="text-sm font-bold text-slate-200 truncate">{req.customer}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white/[0.03] rounded-xl border border-white/5">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/10">
                        <Clock className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] font-bold text-slate-500 uppercase">Hẹn lịch</p>
                        <p className="text-sm font-bold text-slate-200 truncate">{req.time}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white/[0.03] rounded-xl border border-white/5">
                      <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center border border-amber-500/10">
                        <MapPin className="w-4 h-4 text-amber-400" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] font-bold text-slate-500 uppercase">Địa điểm</p>
                        <p className="text-sm font-bold text-slate-200 truncate">{req.address}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-4 min-w-[240px] w-full xl:w-auto self-stretch justify-between py-1">
                  <div className="text-right hidden xl:block">
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Dự kiến</p>
                    <p className="text-2xl font-black text-foreground mt-1">{req.price}</p>
                  </div>
                  
                  <div className="flex gap-2 w-full">
                    <button 
                      onClick={() => setSelectedReq(req)}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white/5 text-slate-400 rounded-xl text-xs font-bold border border-white/5 hover:bg-white/10 transition-all uppercase tracking-widest"
                    >
                      <Eye className="w-4 h-4" />
                      Chi tiết
                    </button>
                    <button 
                      onClick={() => setShowConfirmStart(req.id)}
                      className="flex-[2] flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl text-xs font-black hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/20 uppercase tracking-widest"
                    >
                      Bắt đầu
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedReq && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedReq(null)}
              className="absolute inset-0 bg-[#02050b]/90 backdrop-blur-md"
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative w-full max-w-2xl bg-[#0f172a] border border-white/10 rounded-[32px] overflow-hidden shadow-2xl"
            >
              <div className="p-8 space-y-8">
                <div className="flex items-center justify-between">
                  <button 
                    onClick={() => setSelectedReq(null)}
                    className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                  >
                    <ArrowLeft size={18} />
                    <span className="text-xs font-bold uppercase tracking-widest">Quay lại</span>
                  </button>
                  <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-blue-500/20">
                    Chi tiết đơn hàng
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-black text-foreground mb-4 uppercase tracking-tighter">
                        {selectedReq.serviceName}
                      </h2>
                      <p className="text-sm font-medium text-slate-400 leading-relaxed">
                        {selectedReq.description}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                          <User size={18} className="text-slate-400" />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-slate-500 uppercase">Khách hàng</p>
                          <p className="text-sm font-bold text-slate-200">{selectedReq.customer}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                          <Phone size={18} className="text-slate-400" />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-slate-500 uppercase">Điện thoại</p>
                          <p className="text-sm font-bold text-blue-400">{selectedReq.phone}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-4">
                      <p className="text-[10px] font-bold text-slate-500 uppercase mb-3">Lịch trình & Giá</p>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-slate-400">
                            <Calendar size={14} />
                            <span className="text-xs font-bold">{selectedReq.time}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between pt-4 border-t border-white/5">
                          <span className="text-xs font-bold text-slate-500 uppercase">Thanh toán</span>
                          <span className="text-xl font-black text-emerald-400">{selectedReq.price}</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-600/10 border border-blue-500/20 rounded-2xl p-4 flex items-start gap-3">
                      <MapPin size={18} className="text-blue-400 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[10px] font-bold text-blue-400 uppercase mb-1">Địa chỉ thi công</p>
                        <p className="text-sm font-medium text-slate-300 leading-snug">{selectedReq.address}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button 
                    onClick={() => setSelectedReq(null)}
                    className="flex-1 py-4 bg-white/5 text-slate-400 rounded-2xl font-black text-xs uppercase tracking-widest border border-white/5 hover:bg-white/10"
                  >
                    Đóng
                  </button>
                  <button 
                    onClick={() => {
                      setShowConfirmStart(selectedReq.id);
                      setSelectedReq(null);
                    }}
                    className="flex-[2] py-4 bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-500 transition-colors shadow-2xl shadow-blue-600/40"
                  >
                    Đi tới vị trí khách hàng
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Confirm Start Modal */}
      <AnimatePresence>
        {showConfirmStart && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowConfirmStart(null)}
              className="absolute inset-0 bg-[#02050b]/95 backdrop-blur-xl"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-sm bg-[#0f172a] border border-white/10 rounded-[32px] p-8 text-center"
            >
              <div className="w-20 h-20 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-blue-500/30">
                <Navigation size={32} className="text-blue-400 animate-pulse" />
              </div>
              <h3 className="text-xl font-black text-foreground mb-2 uppercase tracking-tight">Bắt đầu di chuyển?</h3>
              <p className="text-sm text-slate-500 mb-8 leading-relaxed font-medium">
                Hệ thống sẽ gửi thông báo "Thợ đang đến" cho khách hàng. Bạn có chắc chắn muốn bắt đầu ngay bây giờ?
              </p>
              <div className="flex flex-col gap-3">
                <button className="w-full py-4 bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-blue-600/30 hover:bg-blue-500">
                  Xác nhận & Bắt đầu
                </button>
                <button 
                  onClick={() => setShowConfirmStart(null)}
                  className="w-full py-4 text-slate-500 font-black text-xs uppercase tracking-widest hover:text-slate-300"
                >
                  Để sau
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

