const VoteComponent = ({ score }) => {
    const radius = 50;
    const strokeWidth = 8;
    const normalizedRadius = radius - strokeWidth * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDasharray = `${circumference} ${circumference}`;
    const strokeDashoffset = circumference - (score / 100) * circumference;

    const getScoreColor = (score) => {
        if (score >= 75) return '#10b981'; // emerald-500
        if (score >= 50) return '#eab308'; // yellow-500
        return '#ef4444'; // red-500
    };

    return (
        <div className="flex flex-col items-center">
            <h3 className="font-semibold text-xl mb-4 text-slate-300">Metacritic Score</h3>
            <div className="relative">
                <svg
                    height={radius * 2}
                    width={radius * 2}
                    className="transform -rotate-90"
                >
                    <circle
                        stroke="#475569"
                        fill="transparent"
                        strokeWidth={strokeWidth}
                        r={normalizedRadius}
                        cx={radius}
                        cy={radius}
                    />
                    <circle
                        stroke={getScoreColor(score)}
                        fill="transparent"
                        strokeWidth={strokeWidth}
                        strokeDasharray={strokeDasharray}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                        r={normalizedRadius}
                        cx={radius}
                        cy={radius}
                        className="transition-all duration-1000 ease-in-out"
                    />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-slate-100">{score}</span>
                </div>
            </div>
        </div>
    )
}

export default VoteComponent
