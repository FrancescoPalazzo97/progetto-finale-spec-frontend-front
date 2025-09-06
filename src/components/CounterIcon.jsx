const CounterIcon = ({ count }) => {

    if (count === 0) return null;
    return (
        <span className="absolute size-4 -top-3 -right-3">
            <span className="relative inline-flex size-4 rounded-full bg-rose-500"></span>
            <span className="absolute inset-1 flex items-center justify-center text-xs text-slate-100">{count}</span>
        </span>
    )
}

export default CounterIcon
