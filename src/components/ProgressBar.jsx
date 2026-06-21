function ProgressBar({ current, total }) {
  const percentage = ((current + 1) / total) * 100;

  return (
    <div className="progress-wrapper">
      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <span>{Math.round(percentage)}%</span>

      <span>
        {current + 1} of {total}
      </span>
    </div>
  );
}

export default ProgressBar;