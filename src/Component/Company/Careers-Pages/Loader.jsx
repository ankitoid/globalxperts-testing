export default function Loader() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white/70 backdrop-blur-sm z-50 mt-15">
            <div className="relative w-20 h-20">
                <div className="absolute inset-0 rounded-full border-4 border-emerald-600 animate-ping"></div>
                <div className="absolute inset-0 rounded-full border-4 border-emerald-700 animate-pulse"></div>
            </div>
        </div>
    );
}

