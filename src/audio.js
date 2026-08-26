export function playRustle() {
    try {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return;
  
      const ctx = new Ctx();
      const dur = 0.55;
  
      const buf = ctx.createBuffer(
        1,
        Math.floor(ctx.sampleRate * dur),
        ctx.sampleRate
      );
  
      const d = buf.getChannelData(0);
  
      for (let i = 0; i < d.length; i++) {
        d[i] =
          (Math.random() * 2 - 1) *
          Math.pow(1 - i / d.length, 1.6);
      }
  
      const src = ctx.createBufferSource();
      src.buffer = buf;
  
      const bp = ctx.createBiquadFilter();
      bp.type = "bandpass";
      bp.frequency.value = 1900;
      bp.Q.value = 0.7;
  
      const g = ctx.createGain();
  
      g.gain.setValueAtTime(0.0001, ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(
        0.05,
        ctx.currentTime + 0.09
      );
      g.gain.exponentialRampToValueAtTime(
        0.0001,
        ctx.currentTime + dur
      );
  
      src.connect(bp);
      bp.connect(g);
      g.connect(ctx.destination);
  
      src.start();
  
      src.onended = () => {
        ctx.close().catch(() => {});
      };
    } catch (e) {
      // Audio unavailable
    }
  }