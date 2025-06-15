import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">FS</span>
            </div>
            <span className="text-xl font-bold text-gray-900">FieldSense AI</span>
          </Link>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-gray-600 hover:text-gray-900 font-medium">
              Features
            </Link>
            <Link href="#markets" className="text-gray-600 hover:text-gray-900 font-medium">
              Markets
            </Link>
            <Link href="#how-it-works" className="text-gray-600 hover:text-gray-900 font-medium">
              How It Works
            </Link>
          </nav>
          
          {/* CTA */}
          <div className="flex items-center gap-4">
            <Link href="/demo">
              <Button className="bg-indigo-600 hover:bg-indigo-700">
                Try Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
