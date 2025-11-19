'use client';

export default function CyberGrid3D() {
  return (
    <div className="absolute inset-0">
      {/* Base grid layer */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(251, 191, 36, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(251, 191, 36, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0',
        }}
      ></div>

      {/* Secondary grid layer for depth */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(251, 191, 36, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(251, 191, 36, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '120px 120px',
          backgroundPosition: '30px 30px',
        }}
      ></div>
    </div>
  );
}
