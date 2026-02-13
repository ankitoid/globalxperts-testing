import React from "react";
import CiscoLogo from "../../../Assets/logo/Cisco_Webex.png";
import NICELogo from "../../../Assets/logo/nicdd.svg";
import GenesysLogo from "../../../Assets/logo/genesys.svg";
import AWSLogo from "../../../Assets/logo/Amazon_Connect_logo.png";
import AvayaLogo from "../../../Assets/logo/avaya.png";



// --- Single logo item component ---
function IconPill({ label, imgSrc }) {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* White circular background for logo */}
      <div className="bg-white p-2 rounded-full shadow-md border border-gray-200 hover:scale-105 transition-transform">
        <img
          src={imgSrc}
          alt={label}
          className="w-7 h-7 object-contain rounded-full"
        />
      </div>
      <span className="text-[11px] text-gray-800 font-medium mt-1">{label}</span>
    </div>
  );
}

export default function FloatingDownloadSlider() {
  // logos only
  const logos = [
    { id: 1, label: "Cisco", imgSrc: CiscoLogo },
    { id: 2, label: "NICE", imgSrc: NICELogo },
    { id: 3, label: "Genesys", imgSrc: GenesysLogo },
    { id: 4, label: "AWS", imgSrc: AWSLogo },
    { id: 5, label: "Avaya", imgSrc: AvayaLogo },
  ];

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40">
      <div className="bg-white/70 backdrop-blur-md border border-gray-300 rounded-2xl p-3 shadow-lg flex flex-col items-center">
        {/* scroll area */}
        <div className="w-16 h-60 overflow-hidden relative rounded-lg">
          <div
            className="absolute top-0 left-0 w-full"
            style={{ animation: "scroll-vertical 12s linear infinite" }}
          >
            <div className="flex flex-col gap-4 items-center py-2">
              {logos.map((it) => (
                <IconPill key={it.id} label={it.label} imgSrc={it.imgSrc} />
              ))}
            </div>
            {/* duplicate for infinite scroll loop */}
            <div className="flex flex-col gap-4 items-center py-2">
              {logos.map((it) => (
                <IconPill key={`dup-${it.id}`} label={it.label} imgSrc={it.imgSrc} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
