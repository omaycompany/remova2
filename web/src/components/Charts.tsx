type BarChartProps = {
  title?: string;
  labels: string[];
  values: number[];
  maxValue?: number;
  height?: number;
};

export function BarChart({ title, labels, values, maxValue, height = 180 }: BarChartProps) {
  const count = Math.max(values.length, 1);
  const w = 400;
  const h = height;
  const padding = 24;
  const gap = 8;
  const innerW = w - padding * 2;
  const barW = Math.max(1, (innerW - gap * (count - 1)) / count);
  const max = maxValue ?? Math.max(...values, 1);

  return (
    <div className="w-full">
      {title ? <div className="mb-2 text-sm opacity-70">{title}</div> : null}
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto">
        <rect x={0} y={0} width={w} height={h} fill="transparent" />
        {values.map((v, i) => {
          const x = padding + i * (barW + gap);
          const barH = Math.max(2, (v / max) * (h - padding * 2));
          const y = h - padding - barH;
          return (
            <g key={i}>
              <rect
                x={x}
                y={y}
                width={barW}
                height={barH}
                rx={4}
                className="fill-primary/80"
              >
                <title>{`${labels[i] ?? i + 1}: ${v}`}</title>
              </rect>
              <text
                x={x + barW / 2}
                y={h - padding / 2}
                textAnchor="middle"
                className="fill-current opacity-60 md:text-[10px] text-[9px]"
              >
                {labels[i] ?? ''}
              </text>
            </g>
          );
        })}
        <line
          x1={padding}
          y1={h - padding}
          x2={w - padding}
          y2={h - padding}
          className="stroke-base-300"
          strokeWidth={1}
        />
      </svg>
    </div>
  );
}

type SparklineProps = {
  points: number[];
  height?: number;
  strokeClassName?: string;
};

export function Sparkline({ points, height = 60, strokeClassName = "stroke-primary" }: SparklineProps) {
  const w = 240;
  const h = height;
  const padding = 8;
  const innerW = w - padding * 2;
  const innerH = h - padding * 2;
  const max = Math.max(...points, 1);
  const stepX = innerW / Math.max(points.length - 1, 1);
  const d = points
    .map((v, i) => {
      const x = padding + i * stepX;
      const y = padding + innerH - (v / max) * innerH;
      return `${i === 0 ? 'M' : 'L'}${x},${y}`;
    })
    .join(' ');

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto">
      <path d={d} fill="none" className={`${strokeClassName}`} strokeWidth={2} />
    </svg>
  );
}

