export function formatEmploymentType(type) {
  if (!type) return "Unknown";
  return type.replace(/_/g, " ").replace(/\b\w/g, c => c.toUpperCase());
}

export function getJobLevel(exp) {
  if (!exp) return "Unknown";

  const n = parseInt(exp);

  if (n <= 1) return "Fresher (0-1)";
  if (n <= 3) return "Entry Level (1-3)";
  if (n <= 5) return "Mid Level (3-5)";
  return "Senior Level (5+)";
}
