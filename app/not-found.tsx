import * as React from "react"
import Link from "next/link"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4 overflow-hidden relative">
      {/* Scan Line Effect */}
      <div className="scan-line" />
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="particle particle-1" />
        <div className="particle particle-2" />
        <div className="particle particle-3" />
        <div className="particle particle-4" />
        <div className="particle particle-5" />
      </div>

      <div className="text-center space-y-8 max-w-2xl mx-auto relative z-10">
        {/* Glitchy 404 Text */}
        <div className="glitch-container relative">
          <h1 className="text-9xl md:text-[12rem] font-black glitch-text select-none text-transparent">404</h1>
          <h1 className="absolute inset-0 text-9xl md:text-[12rem] font-black glitch-red select-none text-red-500">
            404
          </h1>
          <h1 className="absolute inset-0 text-9xl md:text-[12rem] font-black glitch-blue select-none text-blue-500">
            404
          </h1>
          <h1 className="absolute inset-0 text-9xl md:text-[12rem] font-black glitch-text-shadow select-none text-slate-100">
            404
          </h1>
          <h1 className="absolute inset-0 text-9xl md:text-[12rem] font-black glitch-text-shadow-2 select-none text-neutral-900">
            404
          </h1>
        </div>

        {/* Error Code Decoration */}
        <div className="flex justify-center gap-2 text-xs font-mono text-neutral-700">
          <span>ERR_</span>
          <span className="typewriter glitch-text">NO_EXIST</span>
          <span className="blink">_</span>
        </div>

        {/* Glitchy Message */}
        <div className="space-y-4 glitch-container">
          <p className="text-xl md:text-2xl glitch-message font-extralight text-neutral-500">This page fell into the void.</p>
          <p className="text-sm md:text-base glitch-subtitle font-extralight text-red-500">
            {"// ERROR: Reality.exe has stopped working"}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link 
            href="/" 
            className="inline-flex items-center justify-center gap-2 h-11 rounded-md px-8 bg-neutral-900 text-neutral-100 border border-neutral-800 hover:bg-neutral-950 hover:border-neutral-600 transition-all glitch-button"
          >
            <Home className="w-4 h-4" />
            Go Home
          </Link>
          <Link 
            href="javascript:window.history.back()" 
            className="inline-flex items-center justify-center gap-2 h-11 rounded-md px-8 text-neutral-500 hover:text-neutral-300 hover:bg-neutral-900/50 transition-all glitch-button"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </Link>
        </div>

        {/* Glitch Lines */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="glitch-line glitch-line-1" />
          <div className="glitch-line glitch-line-2" />
        </div>
      </div>

      {/* Bottom Decoration */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs font-mono text-neutral-800">
        <span className="mr-2">STATUS:</span>
        <span className="text-red-600 animate-pulse">DISCONNECTED</span>
      </div>
    </div>
  )
}
