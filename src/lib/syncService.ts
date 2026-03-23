export function startAutoSync() {
  // Logic to initialize syncing data with Supabase locally
  const interval = setInterval(() => {
    // console.log("Syncing data...");
  }, 60000)

  return () => {
    clearInterval(interval)
  }
}
