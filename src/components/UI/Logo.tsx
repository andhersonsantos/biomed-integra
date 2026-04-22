export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative w-14 h-14 flex items-center justify-center">
        {/* DNA + Leaf SVG inspired by attachment */}
        <svg
          viewBox="0 0 100 120"
          className="w-full h-full"
          style={{ filter: 'drop-shadow(0 4px 6px rgba(0, 174, 239, 0.2))' }}
        >
          <defs>
            <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#00AEEF' }} />
              <stop offset="100%" style={{ stopColor: '#003366' }} />
            </linearGradient>
          </defs>
          
          {/* DNA Helix */}
          <g transform="translate(50, 70) scale(1.2)">
            {/* Strands */}
            <path 
              d="M-15,-30 Q0,-20 15,-10 T-15,10 T15,30" 
              fill="none" 
              stroke="url(#logo-grad)" 
              strokeWidth="5" 
              strokeLinecap="round" 
            />
            <path 
              d="M15,-30 Q0,-20 -15,-10 T15,10 T-15,30" 
              fill="none" 
              stroke="url(#logo-grad)" 
              strokeWidth="5" 
              strokeLinecap="round" 
              opacity="0.6"
            />
            {/* Bonds */}
            <line x1="-8" y1="-20" x2="8" y2="-20" stroke="url(#logo-grad)" strokeWidth="2" opacity="0.4" />
            <line x1="-12" y1="0" x2="12" y2="0" stroke="url(#logo-grad)" strokeWidth="2" opacity="0.4" />
            <line x1="-8" y1="20" x2="8" y2="20" stroke="url(#logo-grad)" strokeWidth="2" opacity="0.4" />
          </g>

          {/* Leaf on top */}
          <path 
            d="M50,45 C50,25 75,25 75,45 C75,65 50,65 50,45 Z" 
            fill="url(#logo-grad)"
            transform="translate(0, -10) scale(0.6) translate(33, 30)"
          />
          <path 
            d="M50,45 C50,20 25,20 25,45 C25,70 50,70 50,45 Z" 
            fill="#00AEEF"
            transform="translate(0, -15) scale(0.7) translate(14, 15)"
          />
        </svg>
      </div>
      <div className="flex flex-col">
        <span className="font-display text-sm font-bold text-slate-400 leading-none tracking-[0.2em] mb-1">
          CLÍNICA
        </span>
        <span className="font-display text-2xl font-black text-biomed-blue-dark leading-none tracking-tight">
          Biomed <span className="text-biomed-blue-light italic">Integra</span>
        </span>
      </div>
    </div>
  );
}
