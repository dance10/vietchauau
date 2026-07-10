import TopNav from "./TopNav";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-bg-soft dark:bg-dark-bg text-text-primary transition-colors duration-300">
      {/* Top navigation */}
      <TopNav />
      {/* Main content */}
      <main className="flex-1 pt-14 md:pt-16">{children}</main>
      {/* Footer */}
      <Footer />
    </div>
  );
}
