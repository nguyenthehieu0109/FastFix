import { useState } from 'react';
import { 
  User, Mail, Phone, MapPin, Briefcase, Edit, Star, 
  ShieldCheck, Award, Settings, LogOut, ChevronRight,
  Target, Zap, Clock
} from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export default function TechProfilePage() {
  const [isEditing, setIsEditing] = useState(false);

  const techInfo = {
    fullName: 'Alex Johnson',
    email: 'alex.johnson@email.com',
    phone: '+84 (0555) 123-4567',
    areas: ['Trung Tâm', 'Giữa Thành Phố', 'Khu Kinh Doanh'],
    specialties: ['Điều Hòa', 'Điện Nước', 'Thiết Bị Bếp'],
    totalJobs: 127,
    completionRate: 98,
    avgRating: 4.85,
    reviewCount: 428,
    since: 'Tháng 1, 2024',
    level: 'Chuyên Gia Vàng',
    certifications: ['Chứng chỉ HVAC Pro', 'An toàn Điện Bậc 3', 'Kỹ thuật Plumbing Quốc tế']
  };

  return (
    <div className="p-2 md:p-6 space-y-8 pb-20 overflow-x-hidden">
      {/* Header Profile Section */}
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[32px] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
        <div className="relative bg-[#0f172a]/80 backdrop-blur-xl rounded-[32px] border border-white/5 p-8 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="relative">
              <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                <div className="w-full h-full rounded-[22px] bg-[#0f172a] flex items-center justify-center overflow-hidden">
                   <User className="w-16 h-16 text-slate-500" />
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-white p-2 rounded-xl shadow-lg border-2 border-[#0f172a]">
                <ShieldCheck size={18} />
              </div>
            </div>

            <div className="flex-1 text-center md:text-left space-y-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-black text-foreground tracking-tight uppercase">{techInfo.fullName}</h1>
                  <p className="text-blue-400 font-bold text-xs uppercase tracking-[0.2em] mt-1">{techInfo.level}</p>
                </div>
                <div className="flex gap-2 justify-center">
                  <button className="p-3 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/5 transition-all text-slate-400">
                    <Settings size={20} />
                  </button>
                  <button 
                    onClick={() => setIsEditing(!isEditing)}
                    className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-xl shadow-blue-600/20"
                  >
                    <Edit size={16} />
                    Chỉnh sửa
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap justify-center md:justify-start gap-6 pt-4">
                <div className="flex items-center gap-2 text-slate-400">
                  <Mail size={16} className="text-blue-500" />
                  <span className="text-sm font-medium">{techInfo.email}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <Phone size={16} className="text-emerald-500" />
                  <span className="text-sm font-medium">{techInfo.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <Clock size={16} className="text-purple-500" />
                  <span className="text-sm font-medium italic">Tham gia {techInfo.since}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Hoàn Thành', value: techInfo.totalJobs, icon: Target, color: 'text-blue-400', bg: 'bg-blue-500/10' },
          { label: 'Tỷ Lệ Thành Công', value: `${techInfo.completionRate}%`, icon: Zap, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
          { label: 'Đánh Giá', value: techInfo.avgRating, icon: Star, color: 'text-amber-400', bg: 'bg-amber-500/10', sub: `${techInfo.reviewCount} Reviews` },
          { label: 'Hạng', value: 'Bạc', icon: Award, color: 'text-purple-400', bg: 'bg-purple-500/10' },
        ].map((stat, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ y: -5 }}
            className="bg-[#0f172a]/50 backdrop-blur-md rounded-3xl border border-white/5 p-6 shadow-xl"
          >
            <div className={cn("inline-flex p-3 rounded-2xl mb-4", stat.bg)}>
              <stat.icon className={cn("w-5 h-5", stat.color)} />
            </div>
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{stat.label}</p>
            <p className="text-2xl font-black text-foreground mt-1">{stat.value}</p>
            {stat.sub && <p className="text-[10px] text-slate-600 font-bold mt-1 uppercase">{stat.sub}</p>}
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Details */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-[#0f172a]/50 backdrop-blur-md rounded-3xl border border-white/5 p-8 shadow-xl">
            <h3 className="text-lg font-black text-foreground uppercase tracking-tight mb-8">Kỹ năng & Chuyên môn</h3>
            
            <div className="space-y-8">
              <div>
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Lĩnh vực chuyên sâu</p>
                <div className="flex flex-wrap gap-2">
                  {techInfo.specialties.map(s => (
                    <span key={s} className="px-5 py-2.5 bg-blue-500/10 text-blue-400 text-xs font-black rounded-xl border border-blue-500/20 uppercase tracking-tight">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Chứng chỉ hành nghề</p>
                <div className="space-y-3">
                  {techInfo.certifications.map(c => (
                    <div key={c} className="flex items-center justify-between p-4 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.04] transition-all group">
                      <div className="flex items-center gap-3">
                        <Award size={18} className="text-amber-500" />
                        <span className="text-sm font-bold text-slate-300">{c}</span>
                      </div>
                      <ChevronRight size={16} className="text-slate-600 group-hover:text-blue-500 transition-all" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Work Areas & Account */}
        <div className="space-y-8">
          <div className="bg-[#0f172a]/50 backdrop-blur-md rounded-3xl border border-white/5 p-8 shadow-xl">
            <h3 className="text-sm font-black text-slate-500 uppercase tracking-widest mb-6">Khu vực phục vụ</h3>
            <div className="space-y-4">
              {techInfo.areas.map(a => (
                <div key={a} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
                  <span className="text-sm font-bold text-slate-300">{a}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#0f172a]/50 backdrop-blur-md rounded-3xl border border-white/5 p-4 shadow-xl">
             <button className="w-full flex items-center justify-center gap-3 py-4 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 rounded-2xl font-black text-xs uppercase tracking-widest transition-all">
                <LogOut size={16} />
                Đăng xuất tài khoản
             </button>
          </div>
        </div>
      </div>
    </div>
  );
}
