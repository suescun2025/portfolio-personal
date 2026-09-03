import React from 'react';

export const NeonSignTitle = ({ text = "Proyectos Destacados", className = "" }) => {
  return (
    <div className={`neon-sign-wrapper ${className}`}>
      {/* Horizontal mounting rails behind sign */}
      <div className="neon-mounting-rails" aria-hidden="true">
        <span className="neon-mount-bar bar-top" />
        <span className="neon-mount-bar bar-bottom" />
      </div>

      {/* Main Multi-Layer Realistic Neon Sign Header */}
      <h2 className="neon-sign-letters" data-text={text}>
        {/* Layer 1: Dark Outer Channel Letter Casing & Ambient Green Shadow */}
        <span className="neon-layer neon-layer-casing">{text}</span>

        {/* Layer 2: Dark Emerald Glass Border */}
        <span className="neon-layer neon-layer-glass-border" aria-hidden="true">{text}</span>

        {/* Layer 3: Darker Emerald Neon Gas Tube Body */}
        <span className="neon-layer neon-layer-tube" aria-hidden="true">{text}</span>

        {/* Layer 4: Inner Green Core */}
        <span className="neon-layer neon-layer-tube-inner" aria-hidden="true">{text}</span>

        {/* Layer 5: Fine Electrical Current Line (Filamento de Luz Interna) */}
        <span className="neon-layer neon-layer-filament" aria-hidden="true">{text}</span>

        {/* Specular Glints & Hotspots on Glass Curves ("Puntos de Luz / Bombillitas") */}
        <span className="neon-hotspot hotspot-p" aria-hidden="true" title="P" />
        <span className="neon-hotspot hotspot-r" aria-hidden="true" title="r" />
        <span className="neon-hotspot hotspot-o1" aria-hidden="true" title="o" />
        <span className="neon-hotspot hotspot-y" aria-hidden="true" title="y" />
        <span className="neon-hotspot hotspot-e1" aria-hidden="true" title="e" />
        <span className="neon-hotspot hotspot-c1" aria-hidden="true" title="c" />
        <span className="neon-hotspot hotspot-t1" aria-hidden="true" title="t" />
        <span className="neon-hotspot hotspot-o2" aria-hidden="true" title="o" />
        <span className="neon-hotspot hotspot-s1" aria-hidden="true" title="s" />
        
        <span className="neon-hotspot hotspot-d" aria-hidden="true" title="D" />
        <span className="neon-hotspot hotspot-e2" aria-hidden="true" title="e" />
        <span className="neon-hotspot hotspot-s2" aria-hidden="true" title="s" />
        <span className="neon-hotspot hotspot-t2" aria-hidden="true" title="t" />
        <span className="neon-hotspot hotspot-a1" aria-hidden="true" title="a" />
        <span className="neon-hotspot hotspot-c2" aria-hidden="true" title="c" />
        <span className="neon-hotspot hotspot-a2" aria-hidden="true" title="a" />
        <span className="neon-hotspot hotspot-d2" aria-hidden="true" title="d" />
        <span className="neon-hotspot hotspot-o3" aria-hidden="true" title="o" />
        <span className="neon-hotspot hotspot-s3" aria-hidden="true" title="s" />
      </h2>
    </div>
  );
};

