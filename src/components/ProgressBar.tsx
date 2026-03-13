interface ProgressBarProps {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const percentage = Math.round(((current + 1) / total) * 100);

  return (
    <div className="w-full max-w-md space-y-2">
      <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-slate-500">
        <span>Progress</span>
        <span>{current + 1} of {total} ({percentage}%)</span>
      </div>
      <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-indigo-500 transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
