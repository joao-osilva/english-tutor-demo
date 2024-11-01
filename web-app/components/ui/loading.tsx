export function LoadingSpinner({ className = "" }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600" />
    </div>
  );
}

export function LoadingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
      <div className="text-center space-y-4">
        <LoadingSpinner className="h-8 w-8" />
        <p className="text-gray-600">Loading...</p>
      </div>
    </div>
  );
}
