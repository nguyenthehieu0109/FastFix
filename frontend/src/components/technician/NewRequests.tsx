import { useState } from 'react';
import { MapPin, Clock, Star, CheckCircle, X, Filter, Info, ChevronRight, ShieldCheck, AlertCircle, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

export function NewRequests() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedRequest, setSelectedRequest] = useState<any>(null);

  const requests = [
    { id: 1, title: 'Sửa Chữa Điều Hòa Cấp Bách', customer: 'Công Ty John', description: 'Máy lạnh phát ra tiếng lạ, cần sự chú ý ngay lập tức. Có mùi khét nhẹ khi khởi động.', location: 'Trung Tâm, cách 2.3 km', time: 'Ngay Bây Giờ', price: '120.000đ', rating: 4.8, reviews: 142, distance: 2.3, urgency: 'urgent', fullDescription: 'Khách hàng báo cáo máy điều hòa Daikin Inverter phát ra tiếng kêu to và có mùi khét. Cần kiểm tra bảng mạch và motor quạt. Đây là văn phòng làm việc nên cần xử lý gấp trong sáng nay.' },
    { id: 2, title: 'Lắp Đặt Bình Nước Nóng', customer: 'Sarah Martinez', description: 'Cần lắp đặt bình nước nóng 50 gallon mới. Đã có sẵn thiết bị, chỉ cần công lắp.', location: 'Giữa Thành Phố, cách 5.1 km', time: 'Hôm Nay 16:00', price: '200.000đ', rating: 4.9, reviews: 89, distance: 5.1, urgency: 'normal', fullDescription: 'Yêu cầu thợ có tay nghề lắp đặt bình nóng lạnh Ariston 50L. Vị trí lắp đặt đã có đường ống chờ sẵn. Khách hàng yêu cầu kiểm tra kỹ van một chiều và chống giật sau khi lắp.' },
    { id: 3, title: 'Kiểm Tra Tủ Điện', customer: 'Công Ty Tech Solutions', description: 'Kiểm tra an toàn hàng năm cần thiết cho tài sản thương mại.', location: 'Khu Kinh Doanh, cách 8.4 km', time: 'Ngày Mai 09:00', price: '150.000đ', rating: 4.7, reviews: 245, distance: 8.4, urgency: 'low', fullDescription: 'Kiểm tra định kỳ hệ thống tủ điện phân phối cho tòa nhà 3 tầng. Cần đo điện trở cách điện, kiểm tra độ chặt của các tiếp điểm và vệ sinh tủ điện. Yêu cầu có biên bản xác nhận sau khi kiểm tra.' },
  ];

  const filteredRequests = selectedFilter === 'all' ? requests : requests.filter((r) => r.urgency === selectedFilter);

  const urgencyMap: Record<string, { label: string; bg: string; text: string; icon: any }> = {
    urgent: { label: 'Cấp Bách', bg: 'bg-rose-500/10', text: 'text-rose-400', icon: AlertCircle },
    normal: { label: 'Hôm Nay', bg: 'bg-amber-500/10', text: 'text-amber-400', icon: Clock },
    low: { label: 'Đã Lên Lịch', bg: 'bg-blue-500/10', text: 'text-blue-400', icon: Calendar },
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="p-2 md:p-6 space-y-6 pb-20 relative">
      <div>
        <h1 className="text-2xl font-extrabold text-foreground">Yêu Cầu Mới</h1>
        <p className="text-muted-foreground text-sm mt-1">Khám phá các cơ hội việc làm xung quanh bạn</p>
      </div>

      {/* Filters */}
      <div className="flex gap-2 pb-2 overflow-x-auto no-scrollbar sm:flex-wrap">
        {[
          { id: 'all', label: 'Tất Cả' },
          { id: 'urgent', label: 'Cấp Bách' },
          { id: 'normal', label: 'Hôm Nay' },
          { id: 'low', label: 'Đã Lên Lịch' },
        ].map((filter) => (
          <button
            key={filter.id}
            onClick={() => setSelectedFilter(filter.id)}
            className={cn(
              "px-5 py-2 rounded-full text-xs font-bold transition-all border whitespace-nowrap",
              selectedFilter === filter.id
                ? "bg-blue-500 text-white border-blue-500 shadow-lg shadow-blue-500/20"
                : "bg-[#0f172a]/50 text-slate-400 border-white/5 hover:border-white/20"
            )}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Requests List */}
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 gap-4"
      >
        {filteredRequests.map((request) => {
          const urgency = urgencyMap[request.urgency];
          return (
            <motion.div 
              key={request.id} 
              variants={item}
              whileHover={{ scale: 1.01 }}
              className="group bg-[#0f172a]/50 backdrop-blur-md rounded-2xl border border-white/5 p-5 md:p-6 transition-all hover:border-blue-500/30 shadow-xl"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={cn("px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-tighter", urgency.bg, urgency.text)}>
                      {urgency.label}
                    </span>
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">{request.id}</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-blue-400 transition-colors">
                    {request.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-4 h-4 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <ShieldCheck size={10} className="text-blue-400" />
                    </div>
                    <p className="text-sm font-medium text-slate-400">{request.customer}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xl font-black text-blue-400">{request.price}</p>
                  <p className="text-[10px] font-bold text-slate-500 uppercase mt-1">Ước tính</p>
                </div>
              </div>

              <p className="text-sm text-slate-500 mb-6 line-clamp-2 leading-relaxed">
                {request.description}
              </p>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
                  <MapPin size={14} className="text-blue-500/50" />
                  <span className="truncate">{request.location}</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
                  <Clock size={14} className="text-blue-500/50" />
                  <span>{request.time}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-bold">
                  <Star size={14} className="fill-amber-400 text-amber-400" />
                  <span className="text-slate-300">{request.rating}</span>
                  <span className="text-slate-600 font-medium">({request.reviews})</span>
                </div>
                <div className="text-xs font-bold text-slate-500 lg:text-right">
                  {request.distance.toFixed(1)} km <span className="font-medium">gần đây</span>
                </div>
              </div>

              <div className="flex gap-3">
                <button 
                  onClick={() => setSelectedRequest(request)}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white/5 text-slate-300 rounded-xl font-bold text-xs border border-white/5 hover:bg-white/10 transition-all uppercase tracking-widest"
                >
                  <Info size={14} />
                  Chi Tiết
                </button>
                <button className="flex-[2] flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-bold text-xs hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20 uppercase tracking-widest">
                  <CheckCircle size={14} />
                  Nhận Công Việc
                </button>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Details Modal */}
      <AnimatePresence>
        {selectedRequest && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedRequest(null)}
              className="absolute inset-0 bg-[#02050b]/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-lg bg-[#0f172a] border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-blue-500/20">
                    Chi Tiết Công Việc
                  </span>
                  <button 
                    onClick={() => setSelectedRequest(null)}
                    className="p-2 hover:bg-white/5 rounded-full text-slate-500"
                  >
                    <X size={20} />
                  </button>
                </div>

                <h2 className="text-2xl font-black text-foreground mb-2">
                  {selectedRequest.title}
                </h2>
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold">
                    {selectedRequest.customer.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">{selectedRequest.customer}</p>
                    <p className="text-xs text-slate-500">Khách hàng đáng tin cậy</p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <p className="text-sm text-slate-400 leading-relaxed font-medium">
                    {selectedRequest.fullDescription}
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                      <p className="text-[10px] font-black text-slate-500 uppercase mb-1">Thanh Toán</p>
                      <p className="text-lg font-black text-emerald-400">{selectedRequest.price}</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                      <p className="text-[10px] font-black text-slate-500 uppercase mb-1">Thời Gian</p>
                      <p className="text-lg font-black text-blue-400">{selectedRequest.time}</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button 
                    onClick={() => setSelectedRequest(null)}
                    className="flex-1 py-4 bg-white/5 text-slate-400 rounded-2xl font-black text-xs uppercase tracking-widest border border-white/5 hover:bg-white/10"
                  >
                    Đóng
                  </button>
                  <button className="flex-[2] py-4 bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-50 transition-colors shadow-xl shadow-blue-600/30">
                    Chấp Nhận Ngay
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

