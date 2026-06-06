"use client";

import { motion } from "framer-motion";

/**
 * Self-contained animated "AI integrated into your business" illustration.
 * A central AI core pulses while orbiting business nodes (web, automation,
 * data, chat) stay connected by animated signal lines. Pure SVG + framer-motion
 * (only transform/opacity animated). On-brand teal (#0E7C7B) + amber (#E8A33D).
 */

const NODES = [
  { id: "web", label: "Web", angle: -90, icon: "M3 9h18M9 21V9M4 4h16a1 1 0 011 1v14a1 1 0 01-1 1H4a1 1 0 01-1-1V5a1 1 0 011-1z" },
  { id: "auto", label: "Automation", angle: -18, icon: "M13 10V3L4 14h7v7l9-11h-7z" },
  { id: "data", label: "Data", angle: 54, icon: "M3 12a9 3 0 0018 0M3 5a9 3 0 0018 0v14a9 3 0 01-18 0zM3 12a9 3 0 0018 0" },
  { id: "chat", label: "Chat", angle: 126, icon: "M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" },
  { id: "growth", label: "Growth", angle: 198, icon: "M3 17l6-6 4 4 8-8M21 7v6h-6" },
];

const CENTER = 200;
const RADIUS = 140;

function polar(angleDeg: number, r: number) {
  const a = (angleDeg * Math.PI) / 180;
  return { x: CENTER + r * Math.cos(a), y: CENTER + r * Math.sin(a) };
}

export default function AiHeroGraphic() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[440px]">
      {/* Soft glow behind */}
      <div
        className="pointer-events-none absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(14,124,123,0.16) 0%, rgba(232,163,61,0.10) 40%, transparent 70%)",
          filter: "blur(20px)",
        }}
        aria-hidden="true"
      />

      <svg
        viewBox="0 0 400 400"
        className="relative h-full w-full"
        role="img"
        aria-label="An AI core connected to business systems: web, automation, data, chat, and growth"
      >
        <defs>
          <linearGradient id="coreGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0E7C7B" />
            <stop offset="100%" stopColor="#E8A33D" />
          </linearGradient>
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0E7C7B" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#0E7C7B" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Rotating orbit ring */}
        <motion.g
          style={{ transformOrigin: "200px 200px" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <circle cx={CENTER} cy={CENTER} r={RADIUS} fill="none" stroke="rgba(14,124,123,0.18)" strokeWidth="1" strokeDasharray="4 6" />
        </motion.g>
        <circle cx={CENTER} cy={CENTER} r={RADIUS - 36} fill="none" stroke="rgba(232,163,61,0.16)" strokeWidth="1" strokeDasharray="2 8" />

        {/* Connection lines + traveling signal pulses */}
        {NODES.map((node, i) => {
          const p = polar(node.angle, RADIUS);
          return (
            <g key={`line-${node.id}`}>
              <line x1={CENTER} y1={CENTER} x2={p.x} y2={p.y} stroke="rgba(14,124,123,0.22)" strokeWidth="1.5" />
              <motion.circle
                r="3.5"
                fill={i % 2 === 0 ? "#0E7C7B" : "#E8A33D"}
                initial={{ cx: CENTER, cy: CENTER, opacity: 0 }}
                animate={{ cx: [CENTER, p.x], cy: [CENTER, p.y], opacity: [0, 1, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.44, ease: "easeInOut" }}
              />
            </g>
          );
        })}

        {/* Orbiting node chips */}
        {NODES.map((node, i) => {
          const p = polar(node.angle, RADIUS);
          return (
            <motion.g
              key={node.id}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
              transition={{
                opacity: { duration: 0.5, delay: 0.3 + i * 0.1 },
                scale: { duration: 0.5, delay: 0.3 + i * 0.1 },
                y: { duration: 3 + i * 0.3, repeat: Infinity, ease: "easeInOut" },
              }}
            >
              <circle cx={p.x} cy={p.y} r="26" fill="#FFFFFF" stroke="rgba(14,124,123,0.20)" strokeWidth="1.5" />
              <g
                transform={`translate(${p.x - 11}, ${p.y - 11})`}
                stroke={i % 2 === 0 ? "#0E7C7B" : "#E8A33D"}
                strokeWidth="1.8"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <svg width="22" height="22" viewBox="0 0 24 24">
                  <path d={node.icon} />
                </svg>
              </g>
            </motion.g>
          );
        })}

        {/* Central AI core */}
        <circle cx={CENTER} cy={CENTER} r="70" fill="url(#coreGlow)" />
        <motion.circle
          cx={CENTER}
          cy={CENTER}
          r="46"
          fill="url(#coreGrad)"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "200px 200px" }}
        />
        <text
          x={CENTER}
          y={CENTER + 7}
          textAnchor="middle"
          fontFamily="var(--font-syne), sans-serif"
          fontSize="26"
          fontWeight="800"
          fill="#FFFFFF"
          letterSpacing="0.5"
        >
          AI
        </text>
      </svg>
    </div>
  );
}
