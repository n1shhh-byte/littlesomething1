export default function Ending({ endingRef }) {
    return (
      <div
        className="ending"
        ref={endingRef}
        data-testid="ending-scene"
        style={{ pointerEvents: "none" }}
      >
        <p className="end-l1">That&rsquo;s all.</p>
        <p className="end-l2">I just hope I made you smile. ♡</p>
        <p className="end-sig">&mdash; Nishant</p>
      </div>
    );
  }