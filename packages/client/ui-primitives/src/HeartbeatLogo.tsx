import type { IconProps } from './icons/props.ts'

/** Native viewBox of {@link HeartbeatLogo} (width and height in user units). */
export const HEARTBEAT_LOGO_VIEWBOX = { width: 800, height: 800 }

/**
 * Render the mechanical circuit heart icon.
 * @param props.size - width and height in px (default 24).
 * @param props.className - extra class for layout placement.
 * @returns the logo svg.
 */
export function HeartbeatLogo({ size = 24, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      viewBox="0 0 800 800"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <g id="ui-prim-gear-small">
          <circle cx="0" cy="0" r="24" fill="none" stroke="currentColor" strokeWidth="14" />
          <g fill="currentColor">
            <rect x="-7" y="-38" width="14" height="16" rx="3" />
            <rect x="-7" y="22" width="14" height="16" rx="3" />
            <rect x="-38" y="-7" width="16" height="14" rx="3" />
            <rect x="22" y="-7" width="16" height="14" rx="3" />
            <rect x="-7" y="-38" width="14" height="16" rx="3" transform="rotate(45)" />
            <rect x="-7" y="22" width="14" height="16" rx="3" transform="rotate(45)" />
            <rect x="-38" y="-7" width="16" height="14" rx="3" transform="rotate(45)" />
            <rect x="22" y="-7" width="16" height="14" rx="3" transform="rotate(45)" />
          </g>
        </g>

        <mask id="ui-prim-heart-left-cutout">
          <rect width="800" height="800" fill="white" />
          <g transform="translate(256, 312)">
            <circle cx="0" cy="0" r="44" fill="none" stroke="black" strokeWidth="20" />
            <circle cx="0" cy="0" r="16" fill="black" />
            <g fill="black">
              <rect x="-11" y="-68" width="22" height="24" rx="4" />
              <rect x="-11" y="44" width="22" height="24" rx="4" />
              <rect x="-68" y="-11" width="24" height="22" rx="4" />
              <rect x="44" y="-11" width="24" height="22" rx="4" />
              <rect x="-11" y="-68" width="22" height="24" rx="4" transform="rotate(45)" />
              <rect x="-11" y="44" width="22" height="24" rx="4" transform="rotate(45)" />
              <rect x="-68" y="-11" width="24" height="22" rx="4" transform="rotate(45)" />
              <rect x="44" y="-11" width="24" height="22" rx="4" transform="rotate(45)" />
            </g>
          </g>

          <g transform="translate(264, 458) scale(0.85)">
            <circle cx="0" cy="0" r="24" fill="none" stroke="black" strokeWidth="14" />
            <g fill="black">
              <rect x="-7" y="-38" width="14" height="16" rx="3" />
              <rect x="-7" y="22" width="14" height="16" rx="3" />
              <rect x="-38" y="-7" width="16" height="14" rx="3" />
              <rect x="22" y="-7" width="16" height="14" rx="3" />
              <rect x="-7" y="-38" width="14" height="16" rx="3" transform="rotate(45)" />
              <rect x="-7" y="22" width="14" height="16" rx="3" transform="rotate(45)" />
              <rect x="-38" y="-7" width="16" height="14" rx="3" transform="rotate(45)" />
              <rect x="22" y="-7" width="16" height="14" rx="3" transform="rotate(45)" />
            </g>
          </g>

          <polyline points="165,408 212,408" fill="none" stroke="black" strokeWidth="14" strokeLinecap="round" />
          <circle cx="228" cy="408" r="13" fill="none" stroke="black" strokeWidth="12" />
          <polyline points="242,408 282,408 298,395 322,395" fill="none" stroke="black" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />

          <polyline points="330,212 330,248" fill="none" stroke="black" strokeWidth="14" strokeLinecap="round" />
          <circle cx="330" cy="262" r="12" fill="none" stroke="black" strokeWidth="12" />
          <polyline points="342,265 365,288 365,328" fill="none" stroke="black" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />

          <circle cx="398" cy="395" r="88" fill="black" />
        </mask>

        <mask id="ui-prim-chat-cutout">
          <rect width="800" height="800" fill="white" />
          <circle cx="558" cy="576" r="18" fill="black" />
          <circle cx="608" cy="576" r="18" fill="black" />
          <circle cx="658" cy="576" r="18" fill="black" />
        </mask>
      </defs>

      {/* Órbitas Atômicas Animadas */}
      <style>{`
        @keyframes ui-prim-orbit-cw {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes ui-prim-orbit-ccw {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
      `}</style>
      <g style={{ transformOrigin: '398px 395px', animation: 'ui-prim-orbit-cw 14s linear infinite' }}>
        <ellipse cx="398" cy="395" rx="310" ry="120" transform="rotate(30 398 395)" fill="none" stroke="currentColor" strokeWidth="6" strokeDasharray="14 10" opacity="0.45" />
        <circle cx="666" cy="550" r="14" fill="currentColor" />
        <circle cx="130" cy="240" r="10" fill="currentColor" opacity="0.8" />
      </g>

      <g style={{ transformOrigin: '398px 395px', animation: 'ui-prim-orbit-ccw 10s linear infinite' }}>
        <ellipse cx="398" cy="395" rx="305" ry="115" transform="rotate(-35 398 395)" fill="none" stroke="currentColor" strokeWidth="6" strokeDasharray="16 12" opacity="0.4" />
        <circle cx="148" cy="570" r="13" fill="currentColor" />
        <circle cx="648" cy="220" r="11" fill="currentColor" opacity="0.85" />
      </g>

      <g style={{ transformOrigin: '398px 395px', animation: 'ui-prim-orbit-cw 18s linear infinite' }}>
        <ellipse cx="398" cy="395" rx="290" ry="110" transform="rotate(85 398 395)" fill="none" stroke="currentColor" strokeWidth="6" strokeDasharray="12 8" opacity="0.35" />
        <circle cx="372" cy="106" r="12" fill="currentColor" />
        <circle cx="424" cy="684" r="12" fill="currentColor" opacity="0.9" />
      </g>

      {/* Metade Esquerda do Coração (Preenchida e Vazada) */}
      <path
        d="M 398 265 C 365 190, 265 170, 200 225 C 130 285, 135 395, 255 528 L 345 452 L 398 395 Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="12"
        strokeLinejoin="round"
        mask="url(#ui-prim-heart-left-cutout)"
      />

      {/* Lado Direito e Inferior do Coração (Circuitos) */}
      <path d="M 398 265 C 430 195, 520 175, 588 210" fill="none" stroke="currentColor" strokeWidth="18" strokeLinecap="round" />
      <path d="M 628 245 C 685 335, 650 455, 535 562 L 398 662 L 292 568" fill="none" stroke="currentColor" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round" />

      {/* Trilhas Verticais na Ponta Inferior */}
      <line x1="398" y1="470" x2="398" y2="652" stroke="currentColor" strokeWidth="15" strokeLinecap="round" />
      <line x1="360" y1="475" x2="360" y2="520" stroke="currentColor" strokeWidth="13" strokeLinecap="round" />
      <circle cx="360" cy="534" r="12" fill="none" stroke="currentColor" strokeWidth="10" />
      <line x1="360" y1="548" x2="360" y2="625" stroke="currentColor" strokeWidth="13" strokeLinecap="round" />
      <polyline points="315,530 315,585" fill="none" stroke="currentColor" strokeWidth="13" strokeLinecap="round" />

      <line x1="434" y1="475" x2="434" y2="520" stroke="currentColor" strokeWidth="13" strokeLinecap="round" />
      <circle cx="434" cy="534" r="12" fill="none" stroke="currentColor" strokeWidth="10" />
      <line x1="434" y1="548" x2="434" y2="625" stroke="currentColor" strokeWidth="13" strokeLinecap="round" />
      <polyline points="472,600 472,532 490,515" fill="none" stroke="currentColor" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round" />

      {/* Trilhas Superiores e Laterais Direitas */}
      <polyline points="455,212 455,268 428,302" fill="none" stroke="currentColor" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="494,200 494,250" fill="none" stroke="currentColor" strokeWidth="14" strokeLinecap="round" />
      <circle cx="494" cy="264" r="13" fill="none" stroke="currentColor" strokeWidth="10" />
      <polyline points="484,274 452,315" fill="none" stroke="currentColor" strokeWidth="14" strokeLinecap="round" />
      <circle cx="546" cy="242" r="16" fill="currentColor" />

      {/* Trilhas Horizontais Direitas */}
      <polyline points="485,382 555,382 588,350" fill="none" stroke="currentColor" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="598" cy="340" r="12" fill="none" stroke="currentColor" strokeWidth="10" />
      <polyline points="485,416 595,416" fill="none" stroke="currentColor" strokeWidth="14" strokeLinecap="round" />
      <circle cx="610" cy="416" r="13" fill="none" stroke="currentColor" strokeWidth="10" />

      {/* Engrenagem Direita Inferior */}
      <g transform="translate(508, 476) scale(1.08)">
        <use href="#ui-prim-gear-small" />
      </g>

      {/* Engrenagem Central */}
      <g transform="translate(398, 395)">
        <g fill="currentColor">
          <rect x="-15" y="-84" width="30" height="28" rx="5" />
          <rect x="-15" y="56" width="30" height="28" rx="5" />
          <rect x="-84" y="-15" width="28" height="30" rx="5" />
          <rect x="56" y="-15" width="28" height="30" rx="5" />
          <rect x="-15" y="-84" width="30" height="28" rx="5" transform="rotate(45)" />
          <rect x="-15" y="56" width="30" height="28" rx="5" transform="rotate(45)" />
          <rect x="-84" y="-15" width="28" height="30" rx="5" transform="rotate(45)" />
          <rect x="56" y="-15" width="28" height="30" rx="5" transform="rotate(45)" />
        </g>
        <circle cx="0" cy="0" r="62" fill="none" stroke="currentColor" strokeWidth="24" />
        <circle cx="0" cy="0" r="30" fill="none" stroke="currentColor" strokeWidth="12" />
      </g>

      <path
        d="M 625 468 L 668 468 C 708 468, 730 495, 730 538 L 730 605 C 730 638, 708 658, 682 664 L 682 726 L 605 668 L 535 668 C 505 668, 482 648, 474 625 Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="12"
        strokeLinejoin="round"
        mask="url(#ui-prim-chat-cutout)"
      />
    </svg>
  )
}
