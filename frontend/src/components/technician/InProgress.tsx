import { useState, useEffect } from 'react';
import { 
  Clock, MapPin, CheckCircle, AlertCircle, Phone, 
  Navigation, MessageSquare, Camera, ChevronRight, X, Star, User
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

export function InProgress() {
  const [showReportModal, setShowReportModal] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(1245); // in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedTime(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h > 0 ? h + ':' : ''}${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const currentJob = {
    id: 'JOB-9921',
    title: 'Sửa Điều Hòa Panasonic Inverter',
    customer: 'Nguyễn Văn B',
    address: '123 Đường Láng, Đống Đa, Hà Nội',
    startTime: '10:30 SA',
    estimatedDuration: '1.5 giờ',
    status: 'Đang thi công',
    price: '250.000 VNĐ',
    progress: 65
  };

  const completedToday = [
    { id: 'JOB-9918', title: 'Lắp Đặt Vòi Nước Bếp', customer: 'Sarah Martinez', completedTime: '13:30', rating: 5, price: '95.000đ' },
    { id: 'JOB-9917', title: 'Thay Thế Ổ Cắm Điện', customer: 'Michael Chen', completedTime: '09:45', rating: 4.8, price: '60.000đ' },
  ];

  return (
    <div className="p-2 md:p-6 space-y-6 pb-20 overflow-x-hidden">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-foreground">Công Việc Đang Thực Hiện</h1>
          <p className="text-muted-foreground text-sm mt-1">Đảm bảo chất lượng và tiến độ thi công</p>
        </div>
        <div className="flex items-center gap-3 bg-blue-500/10 border border-blue-500/20 px-6 py-3 rounded-2xl shadow-lg shadow-blue-500/10">
          <Clock className="w-5 h-5 text-blue-400 animate-pulse" />
          <span className="text-xl font-black text-blue-400 tabular-nums">{formatTime(elapsedTime)}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Job Card */}
        <div className="lg:col-span-2 space-y-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#0f172a]/50 backdrop-blur-md rounded-[32px] border border-white/5 p-8 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8">
              <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-lg text-[10px] font-black uppercase tracking-widest border border-emerald-500/20">
                Đang Làm Việc
              </span>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-xs font-bold text-blue-500 uppercase tracking-widest">{currentJob.id}</p>
                <h2 className="text-3xl font-black text-foreground tracking-tight uppercase">{currentJob.title}</h2>
              </div>

              <div className="flex flex-wrap gap-6 items-center py-6 border-y border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                    <User className="w-6 h-6 text-slate-400" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-500 uppercase">Khách hàng</p>
                    <p className="text-base font-bold text-slate-200">{currentJob.customer}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                    <MapPin className="w-6 h-6 text-slate-400" />
                  </div>
                  <div className="max-w-[200px]">
                    <p className="text-[10px] font-bold text-slate-500 uppercase">Địa điểm</p>
                    <p className="text-sm font-bold text-slate-200 truncate">{currentJob.address}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <p className="text-xs font-bold text-slate-500 uppercase">Tiến độ thực hiện</p>
                  <p className="text-xs font-bold text-blue-400 uppercase">Ước tính còn 35 phút</p>
                </div>
                <div className="h-3 bg-white/5 rounded-full overflow-hidden border border-white/5">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${currentJob.progress}%` }}
                    className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-3 px-6 py-4 bg-white/5 text-slate-300 rounded-xl font-black text-xs uppercase tracking-widest border border-white/5 hover:bg-white/10 transition-all">
                  <Camera size={18} className="text-blue-400" />
                  Chụp ảnh BC
                </button>
                <button 
                  onClick={() => setShowReportModal(true)}
                  className="flex items-center justify-center gap-3 px-6 py-4 bg-rose-500/10 text-rose-400 rounded-xl font-black text-xs uppercase tracking-widest border border-rose-500/20 hover:bg-rose-500/20 transition-all"
                >
                  <AlertCircle size={18} />
                  Báo cáo sự cố
                </button>
              </div>
            </div>
          </motion.div>

          <h3 className="text-lg font-bold text-foreground pt-4">Tóm Tắt Hôm Nay</h3>
          <div className="space-y-3">
            {completedToday.map((job) => (
              <div key={job.id} className="bg-white/5 rounded-2xl border border-white/5 border-l-4 border-l-emerald-500 p-5 flex justify-between items-center group hover:bg-white/[0.08] transition-all">
                <div>
                  <h4 className="font-bold text-slate-200 group-hover:text-emerald-400 transition-colors">{job.title}</h4>
                  <p className="text-xs text-slate-500 mt-1">{job.customer} • Hoàn thành {job.completedTime}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 mb-1">
                    <Star size={12} className="fill-amber-400 text-amber-400" />
                    <span className="text-xs font-bold text-slate-300">{job.rating}</span>
                  </div>
                  <p className="text-sm font-black text-foreground">{job.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar Actions */}
        <div className="space-y-6">
          <div className="bg-[#0f172a]/50 backdrop-blur-md rounded-3xl border border-white/5 p-6 shadow-xl space-y-4">
            <h3 className="text-xs font-black text-slate-500 uppercase tracking-widest">Liên lạc & Bản đồ</h3>
            <div className="flex flex-col gap-3">
              <button className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] transition-all group">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                  <Phone size={18} />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-slate-200">Gọi điện</p>
                  <p className="text-[10px] font-bold text-slate-500 uppercase">Khách hàng</p>
                </div>
              </button>
              <button className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] transition-all group">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all">
                  <Navigation size={18} />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-slate-200">Chỉ đường</p>
                  <p className="text-[10px] font-bold text-slate-500 uppercase">Mở Bản Đồ</p>
                </div>
              </button>
            </div>
          </div>

          <div className="bg-[#0f172a]/50 backdrop-blur-md rounded-3xl border border-white/5 p-8 shadow-xl text-center space-y-6">
            <div>
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Tổng tiền thanh toán</p>
              <p className="text-3xl font-black text-emerald-400">{currentJob.price}</p>
            </div>
            <button className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-sm uppercase tracking-widest shadow-2xl shadow-blue-600/30 hover:bg-blue-500 transition-all flex items-center justify-center gap-3">
              Hoàn thành công việc
              <ChevronRight size={18} />
            </button>
            <p className="text-[10px] text-slate-600 font-bold uppercase tracking-tight">Vui lòng đảm bảo đã chụp chất lượng thi công trước khi kết thúc</p>
          </div>
        </div>
      </div>

      {/* Report Issue Modal */}
      <AnimatePresence>
        {showReportModal && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowReportModal(false)}
              className="absolute inset-0 bg-[#02050b]/90 backdrop-blur-md"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-md bg-[#0f172a] border border-white/10 rounded-[32px] overflow-hidden shadow-2xl"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xl font-black text-foreground uppercase tracking-tight">Báo cáo lỗi/sự cố</h3>
                  <button onClick={() => setShowReportModal(false)} className="p-2 hover:bg-white/5 rounded-full text-slate-500">
                    <X size={20} />
                  </button>
                </div>

                <div className="space-y-6">
                  <div className="space-y-3">
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Loại sự cố</p>
                    <div className="grid grid-cols-2 gap-3">
                      {['Thiếu linh kiện', 'Lỗi kỹ thuật', 'Khách hàng đổi ý', 'Sự cố khác'].map(item => (
                        <button key={item} className="px-4 py-3 rounded-xl bg-white/5 border border-white/5 text-[11px] font-bold text-slate-400 hover:border-blue-500/50 hover:text-white transition-all text-left">
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Mô tả chi tiết</p>
                    <textarea 
                      placeholder="Mô tả cụ thể vấn đề bạn đang gặp phải..."
                      className="w-full h-32 bg-white/5 border border-white/5 rounded-2xl p-4 text-sm text-slate-300 focus:outline-none focus:border-blue-500/50 resize-none"
                    />
                  </div>

                  <button className="w-full py-4 bg-rose-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-rose-600/20 hover:bg-rose-500 transition-all">
                    Gửi báo cáo ngay
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
