// src/Component/Redirect/Canonical.jsx
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

export default function Canonical() {
  const location = useLocation();
  const cleanPath = location.pathname.replace(/\/+$/, "");
  const canonical = `https://globalxperts.net${cleanPath || "/"}`;

  return (
    <Helmet>
      <link rel="canonical" href={canonical} />
    </Helmet>
  );
}
