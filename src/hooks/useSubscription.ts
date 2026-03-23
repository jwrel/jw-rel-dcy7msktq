export function useSubscription() {
  return {
    hasAccess: true,
    isLoading: false,
    refresh: () => {},
    result: null,
    userEmail: null,
  }
}
