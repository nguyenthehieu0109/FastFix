import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Sidebar } from '@/components/technician/Sidebar';
import { Header } from '@/components/technician/Header';
import useAuthStore from '@/store/authStore';
import { motion } from 'framer-motion';

export default function TechnicianLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);
  const { user, isAuthenticated, fetchMe } = useAuthStore();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('fastfix_token');
      if (!token || !isAuthenticated) {
        navigate('/?login=technician');
        return;
      }

      // If authenticated but no user data, fetch it
      if (!user) {
        try {
          await fetchMe();
          setIsAuthorized(true);
        } catch {
          navigate('/?login=technician');
        }
      } else {
        setIsAuthorized(true);
      }
    };
    checkAuth();
  }, [user, isAuthenticated, navigate, fetchMe]);

  if (isAuthorized === null) return null;

  return (
    <div className="flex h-screen bg-[#02050b] text-foreground overflow-hidden">
      <Sidebar isOpen={sidebarOpen} />
      
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        
        <main className="flex-1 overflow-auto p-4 md:p-6">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="max-w-7xl mx-auto w-full"
          >
            <Outlet />
          </motion.div>
        </main>
      </div>
    </div>
  );
}
