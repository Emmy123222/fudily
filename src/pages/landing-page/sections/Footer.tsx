import { Twitter, Github } from 'lucide-react';
import { Disc as Discord } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 px-4 relative">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Docs</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Community</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Discord</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Twitter</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                <Discord className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-300">
          <p>© 2025 Fungily. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}