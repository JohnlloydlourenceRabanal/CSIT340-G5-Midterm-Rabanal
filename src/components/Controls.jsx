function Controls(props) {
  return (
    <div className="flex justify-center gap-4 py-6">
      <button
        className="cursor-pointer rounded-lg bg-[#800020] px-8 py-3 text-xl font-bold text-[#FFF9F2]"
        onClick={props.onStar}
      >
        Star
      </button>
      <button
        className="cursor-pointer rounded-lg bg-[#D45060] px-8 py-3 text-xl font-bold text-[#FFF9F2]"
        onClick={props.onDownload}
      >
        Download
      </button>
      <button
        className="cursor-pointer rounded-lg bg-[#000000] px-8 py-3 text-xl font-bold text-[#FFF9F2]"
        onClick={props.onReport}
      >
        Report issue
      </button>
      <button
        className="cursor-pointer rounded-lg border border-[#800020] px-8 py-3 text-xl font-bold"
        onClick={props.onReset}
      >
        Reset
      </button>
    </div>
  );
}

export default Controls;
