import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">FS</span>
              </div>
              <span className="text-xl font-bold">FieldSense AI</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              AI-powered field service automation for high-compliance industries. 
              Transform handwritten logs into structured data in seconds.
            </p>
            <div className="text-sm text-gray-500">
              © 2025 FieldSense AI. All rights reserved.
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/demo" className="hover:text-white">Live Demo</Link></li>
              <li><Link href="#features" className="hover:text-white">Features</Link></li>
              <li><Link href="#pricing" className="hover:text-white">Pricing</Link></li>
              <li><Link href="#integrations" className="hover:text-white">Integrations</Link></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="#about" className="hover:text-white">About</Link></li>
              <li><Link href="#contact" className="hover:text-white">Contact</Link></li>
              <li><Link href="#support" className="hover:text-white">Support</Link></li>
              <li><Link href="#privacy" className="hover:text-white">Privacy</Link></li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8 bg-gray-800" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-500">
            Built for banks, ATM service providers, and high-compliance field teams
          </div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-500 hover:text-white text-sm">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-500 hover:text-white text-sm">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
