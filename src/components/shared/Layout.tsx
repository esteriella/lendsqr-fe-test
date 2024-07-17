// import React, { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

// interface LayoutProps {
//   children?: ReactNode;
// };

// const Layout: React.FC<LayoutProps> = () => {
//   return (
//     <div>
//       <Navbar />
//       <div>
//         <Sidebar />
//         <main>
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Layout;
export default function Layout() {
  return (
    <div>
      <Navbar />
      <div>
        <Sidebar />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};