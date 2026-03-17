import { useState } from 'react';
import { 
  Calendar, ChevronDown, Star, DollarSign, Search, 
  Filter, Download, CheckCircle2, 
  Briefcase, ChevronRight, ThumbsUp, User as UserIcon
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

export default function TechHistoryPage() {
  const [activeTab, setActiveTab] = useState<'history' | 'reviews'>('history');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const summaryStats = [
    { label: 'Thu Nhập Tháng Này', value: '4.2M đ', icon: DollarSign, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
    { label: 'Đơn Hoàn Thành', value: '28', icon: CheckCircle2, color: 'text-blue-400', bg: 'bg-blue-500/10' },
    { label: 'Đánh Giá TB', value: '4.92', icon: Star, color: 'text-amber-400', bg: 'bg-amber-500/10' },
  ];

  const historyItems = [
    { id: 'REQ-101', serviceName: 'Lắp Đặt Vòi Nước Bếp', customer: 'Sarah Martinez', date: '03-03-2025', price: '95.000đ', rating: 5, description: 'Lắp đặt vòi nước bếp mới thay thế vòi cũ bị hỏng. Đã kiểm tra kỹ các mối nối và áp lực nước.', type: 'Pumbing' },
    { id: 'REQ-098', serviceName: 'Thay Thế Ổ Cắm Điện', customer: 'Michael Chen', date: '02-03-2025', price: '60.000đ', rating: 4.8, description: 'Thay thế 3 ổ cắm điện bị lỏng trong phòng khách. Kiểm tra toàn bộ hệ thống dây điện trong khu vực.', type: 'Electric' },
    { id: 'REQ-095', serviceName: 'Sửa Chữa Điều Hòa', customer: 'Công Ty Tech Solutions', date: '01-03-2025', price: '150.000đ', rating: 4.9, description: 'Bảo trì và sửa chữa hệ thống điều hòa trung tâm. Vệ sinh dàn lạnh và kiểm tra gas.', type: 'HVAC' },
    { id: 'REQ-090', serviceName: 'Bảo Dưỡng Hệ Thống HVAC', customer: 'Tòa Nhà Công Ty Xanh', date: '28-02-2025', price: '85.000đ', rating: 5, description: 'Bảo dưỡng định kỳ hệ thống HVAC tòa nhà văn phòng. Kiểm tra bộ điều khiển và van tiết lưu.', type: 'HVAC' },
  ];

  const reviews = [
    { id: 1, rating: 5, comment: 'Công việc rất tuyệt vời! Kỹ thuật viên rất chuyên nghiệp và lịch sự. Sẽ gọi lại nếu cần.', customer: 'Sarah Martinez', service: 'Lắp Đặt Vòi Nước Bếp', date: '03.03.2025' },
    { id: 2, rating: 4.8, comment: 'Hoàn thành nhanh chóng và chất lượng cao. Rất hài lòng với dịch vụ.', customer: 'Michael Chen', service: 'Thay Thế Ổ Cắm Điện', date: '02.03.2025' },
    { id: 3, rating: 4.9, comment: 'Dịch vụ chuyên nghiệp, giá cả hợp lý. Thợ đến đúng giờ và làm việc cẩn thận.', customer: 'Công Ty Tech Solutions', service: 'Sửa Chữa Điều Hòa', date: '01.03.2025' },
  ];

  const filteredItems = historyItems.filter(item => 
    item.serviceName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-2 md:p-6 space-y-8 pb-20 overflow-x-hidden">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-foreground">Lịch Sử Hoạt Động</h1>
          <p className="text-muted-foreground text-sm mt-1">Theo dõi hiệu suất và thu nhập của bạn</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-slate-300 rounded-2xl font-black text-xs uppercase tracking-widest border border-white/5 transition-all">
          <Download size={16} />
          Xuất Báo Cáo
        </button>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {summaryStats.map((stat, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-[#0f172a]/50 backdrop-blur-md rounded-3xl border border-white/5 p-6 shadow-xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <stat.icon size={64} />
            </div>
            <div className={cn("inline-flex p-3 rounded-2xl mb-4", stat.bg)}>
              <stat.icon className={cn("w-5 h-5", stat.color)} />
            </div>
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{stat.label}</p>
            <p className="text-2xl font-black text-foreground mt-1 tracking-tight">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Tabs Layout */}
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex bg-white/5 p-1 rounded-2xl border border-white/5 w-fit">
            <button 
              onClick={() => setActiveTab('history')}
              className={cn(
                "px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all",
                activeTab === 'history' ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20" : "text-slate-500 hover:text-slate-300"
              )}
            >
              Công việc
            </button>
            <button 
              onClick={() => setActiveTab('reviews')}
              className={cn(
                "px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all",
                activeTab === 'reviews' ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20" : "text-slate-500 hover:text-slate-300"
              )}
            >
              Đánh giá
            </button>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input 
                type="text" 
                placeholder="Tìm kiếm..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-6 py-3 bg-white/5 border border-white/5 rounded-2xl text-xs font-bold text-slate-200 focus:outline-none focus:border-blue-500/50 w-full sm:w-64 transition-all"
              />
            </div>
            <button className="p-3 bg-white/5 border border-white/5 rounded-2xl text-slate-400 hover:text-white transition-all">
              <Filter size={18} />
            </button>
          </div>
        </div>

        {activeTab === 'history' ? (
          <div className="space-y-4">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, idx) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: idx * 0.05 }}
                  className={cn(
                    "bg-[#0f172a]/50 backdrop-blur-md rounded-3xl border transition-all overflow-hidden",
                    expandedId === item.id ? "border-blue-500/30 ring-1 ring-blue-500/20 shadow-2xl" : "border-white/5 hover:border-white/20"
                  )}
                >
                  <button
                    onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                    className="w-full flex flex-col md:flex-row md:items-center justify-between px-8 py-6 text-left gap-4"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-blue-400">
                        <Briefcase size={20} />
                      </div>
                      <div>
                        <h3 className="text-base font-black text-foreground tracking-tight uppercase">{item.serviceName}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{item.id}</span>
                          <span className="w-1 h-1 rounded-full bg-slate-700" />
                          <span className="text-sm font-medium text-slate-400">{item.customer}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-6">
                      <div className="hidden xl:flex flex-col items-end">
                        <p className="text-[10px] font-bold text-slate-500 uppercase">Thanh toán</p>
                        <p className="text-sm font-black text-emerald-400">{item.price}</p>
                      </div>
                      <div className="hidden lg:flex flex-col items-end">
                        <p className="text-[10px] font-bold text-slate-500 uppercase">Ngày</p>
                        <div className="flex items-center gap-1.5 text-slate-300">
                          <Calendar size={12} className="text-blue-500" />
                          <span className="text-xs font-bold">{item.date}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 bg-amber-400/10 px-3 py-1.5 rounded-xl border border-amber-400/20">
                        <Star size={14} className="fill-amber-400 text-amber-400" />
                        <span className="text-xs font-black text-amber-400">{item.rating}</span>
                      </div>
                      <div className={cn(
                        "p-2 rounded-xl bg-white/5 text-slate-500 transition-transform duration-300",
                        expandedId === item.id ? "rotate-180 text-blue-400" : ""
                      )}>
                        <ChevronDown size={20} />
                      </div>
                    </div>
                  </button>

                  <AnimatePresence>
                    {expandedId === item.id && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="border-t border-white/5 bg-white/[0.01]"
                      >
                        <div className="p-8 space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                              <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Mô tả thi công</h4>
                              <p className="text-sm text-slate-400 leading-relaxed font-medium">
                                {item.description}
                              </p>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                                <p className="text-[10px] font-black text-slate-500 uppercase mb-1">Loại hình</p>
                                <p className="text-xs font-bold text-blue-400">{item.type}</p>
                              </div>
                              <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                                <p className="text-[10px] font-black text-slate-500 uppercase mb-1">Trạng thái</p>
                                <div className="flex items-center gap-2">
                                  <CheckCircle2 size={12} className="text-emerald-400" />
                                  <p className="text-xs font-bold text-emerald-400">Hoàn thành</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="space-y-6">
            <AnimatePresence mode="popLayout">
              {reviews.map((review, idx) => (
                <motion.div 
                  key={review.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-[#0f172a]/50 backdrop-blur-md rounded-[32px] border border-white/5 p-8 shadow-xl group hover:border-blue-500/30 transition-all"
                >
                  <div className="flex flex-col md:flex-row justify-between gap-6 mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                        <UserIcon className="w-7 h-7 text-slate-500" />
                      </div>
                      <div>
                        <h4 className="text-lg font-black text-foreground tracking-tight uppercase">{review.customer}</h4>
                        <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">
                          <span>{review.service}</span>
                          <span className="w-1 h-1 rounded-full bg-slate-700" />
                          <span>{review.date}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 bg-amber-400/10 px-4 py-2 rounded-2xl border border-amber-400/20 h-fit">
                      <Star size={18} className="fill-amber-400 text-amber-400" />
                      <span className="text-lg font-black text-amber-500">{review.rating}</span>
                    </div>
                  </div>
                  
                  <blockquote className="text-base text-slate-300 leading-relaxed font-medium italic relative">
                    <span className="text-5xl text-blue-500/20 absolute -top-4 -left-4 font-serif">"</span>
                    {review.comment}
                  </blockquote>

                  <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center">
                    <button className="flex items-center gap-2 text-[10px] font-black text-slate-500 hover:text-blue-400 uppercase tracking-widest transition-colors">
                      <ThumbsUp size={14} />
                      Phản hồi hữu ích
                    </button>
                    <button className="text-[10px] font-black text-blue-500 hover:text-blue-400 uppercase tracking-widest transition-colors">
                      Xem chi tiết đơn hàng
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {filteredItems.length === 0 && searchTerm && (
          <div className="py-20 text-center">
            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/5">
              <Search size={24} className="text-slate-600" />
            </div>
            <p className="text-slate-500 font-bold uppercase text-xs tracking-widest">Không tìm thấy kết quả nào</p>
          </div>
        )}
      </div>
    </div>
  );
}
