import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// Layouts
import MainLayout from '@/layouts/MainLayout';
import CustomerLayout from '@/layouts/CustomerLayout';
import AdminLayout from '@/layouts/AdminLayout';
import TechnicianLayout from '@/layouts/TechnicianLayout';

// Lazy-loaded pages — Customer
const HomePage = lazy(() => import('@/pages/customer/HomePage'));
const ProfilePage = lazy(() => import('@/pages/customer/ProfilePage'));
const TechnicianListPage = lazy(() => import('@/pages/customer/TechnicianListPage'));
const OrdersPage = lazy(() => import('@/pages/customer/OrdersPage'));
const ContactTechnicianPage = lazy(() => import('@/pages/customer/ContactTechnicianPage'));
const HistoryPage = lazy(() => import('@/pages/customer/HistoryPage'));
const ReviewsPage = lazy(() => import('@/pages/customer/ReviewsPage'));

// Lazy-loaded pages — Admin
const AdminDashboardPage = lazy(() => import('@/pages/admin/AdminDashboardPage'));
const RequestsPage = lazy(() => import('@/pages/admin/RequestsPage'));
const TechniciansPage = lazy(() => import('@/pages/admin/TechniciansPage'));

// Lazy-loaded pages — Technician
const TechDashboardPage = lazy(() => import('@/pages/technician/DashboardPage'));
const TechProfilePage = lazy(() => import('@/pages/technician/ProfilePage'));
const TechNewRequestsPage = lazy(() => import('@/pages/technician/NewRequestsPage'));
const TechAcceptedRequestsPage = lazy(() => import('@/pages/technician/AcceptedRequestsPage'));
const TechInProgressPage = lazy(() => import('@/pages/technician/InProgressPage'));
const TechHistoryPage = lazy(() => import('@/pages/technician/HistoryPage'));

function Loading() {
  return (
    <div className="flex items-center justify-center h-screen bg-[#02050b]">
      <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export default function AppRoutes() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* Public */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
        </Route>

        {/* Customer Portal */}
        <Route path="/customer" element={<CustomerLayout />}>
          <Route index element={<TechnicianListPage />} />
          <Route path="technicians" element={<TechnicianListPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="orders" element={<OrdersPage />} />
          <Route path="contact" element={<ContactTechnicianPage />} />
          <Route path="history" element={<HistoryPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
        </Route>

        {/* Admin */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboardPage />} />
          <Route path="yeu-cau" element={<RequestsPage />} />
          <Route path="ky-thuat-vien" element={<TechniciansPage />} />
        </Route>

        {/* Technician */}
        <Route path="/technician" element={<TechnicianLayout />}>
          <Route index element={<TechDashboardPage />} />
          <Route path="ho-so" element={<TechProfilePage />} />
          <Route path="don-hang/dang-cho" element={<TechNewRequestsPage />} />
          <Route path="don-hang/da-tiep-nhan" element={<TechAcceptedRequestsPage />} />
          <Route path="don-hang/dang-thuc-hien" element={<TechInProgressPage />} />
          <Route path="lich-su" element={<TechHistoryPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
