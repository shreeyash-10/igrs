export default function Stat({ value, label }: { value: string; label: string }) {
    return (
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="text-2xl font-semibold">{value}</div>
            <div className="mt-2 text-sm text-gray-600">{label}</div>
        </div>
    );
}
