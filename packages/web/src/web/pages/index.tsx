import { useEffect, useMemo, useRef, useState } from "react";
import { cheats, CONSOLES, type Cheat } from "../data/cheats";
import { Starfield } from "../components/starfield";

const KONAMI = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1400);
      }}
      className={`font-display text-[11px] tracking-widest px-3 py-1.5 border-2 transition-all shrink-0 ${
        copied
          ? "bg-[#39FF88] border-[#39FF88] text-[#0A0A12] scale-105"
          : "border-[#39FF88] text-[#39FF88] hover:bg-[#39FF88] hover:text-[#0A0A12]"
      }`}
    >
      {copied ? "COPIED!" : "COPY"}
    </button>
  );
}

function SpinPanel({ pool }: { pool: Cheat[] }) {
  const [pick, setPick] = useState<Cheat | null>(null);
  const [shown, setShown] = useState("");
  const [spinning, setSpinning] = useState(false);
  const timer = useRef<number>(0);

  const spin = () => {
    if (!pool.length || spinning) return;
    const choice = pool[Math.floor(Math.random() * pool.length)];
    setPick(choice);
    setSpinning(true);
    setShown("");
    let i = 0;
    const type = () => {
      i++;
      setShown(choice.code.slice(0, i));
      if (i < choice.code.length) timer.current = window.setTimeout(type, 18);
      else setSpinning(false);
    };
    type();
  };

  useEffect(() => () => clearTimeout(timer.current), []);

  return (
    <section className="vault-rise relative border-2 border-dashed border-[#FFD23F] bg-[#14142B]/80 p-5 md:p-6">
      <div className="flex flex-col md:flex-row md:items-center gap-4 justify-between">
        <div>
          <p className="font-display text-[#FFD23F] text-xs tracking-[0.25em]">RANDOM DROP</p>
          <p className="text-[#8A8AA8] text-sm mt-1">Can't decide? Let the machine pick a code.</p>
        </div>
        <button
          type="button"
          onClick={spin}
          disabled={spinning || !pool.length}
          className="font-display text-sm tracking-widest bg-[#FFD23F] text-[#0A0A12] px-6 py-3 hover:bg-[#FF3D9A] hover:text-white transition-colors disabled:opacity-50 shadow-[4px_4px_0_#FF3D9A] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
        >
          {spinning ? "SPINNING…" : "SPIN"}
        </button>
      </div>
      {pick && (
        <div className="mt-5 bg-[#0A0A12] border border-[#2A2A4A] p-4">
          <p className="font-display text-[11px] tracking-widest text-[#FF3D9A]">
            {pick.game.toUpperCase()} · {pick.consoles.join(" / ")}
          </p>
          <p className="mt-2 text-[#39FF88] text-lg break-words">
            {shown}
            {spinning && <span className="vault-blink">▌</span>}
          </p>
          {!spinning && <p className="mt-2 text-sm text-[#E8E8F0]/90">{pick.effect}</p>}
        </div>
      )}
    </section>
  );
}

function CheatCard({ c, i }: { c: Cheat; i: number }) {
  return (
    <li
      className="vault-card vault-rise bg-[#14142B] border-2 border-[#2A2A4A] p-5"
      style={{ animationDelay: `${Math.min(i, 12) * 40}ms` }}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-wrap gap-1.5">
          {c.consoles.map((p) => (
            <span
              key={p}
              className="font-display text-[10px] tracking-widest bg-[#FFD23F] text-[#0A0A12] px-2 py-0.5"
            >
              {p.toUpperCase()}
            </span>
          ))}
        </div>
        <CopyButton text={c.code} />
      </div>
      <pre className="mt-4 bg-[#0A0A12] border border-[#2A2A4A] p-3 text-[#39FF88] text-[14px] whitespace-pre-wrap break-words">
        {c.code}
      </pre>
      <p className="mt-3 text-[15px] text-[#E8E8F0]">{c.effect}</p>
      <p className="mt-3 text-[12px] text-[#8A8AA8]">
        {c.source} · <span className="text-[#FF3D9A]">unverified in-game</span>
      </p>
    </li>
  );
}

function Index() {
  const [query, setQuery] = useState("");
  const [consoles, setConsoles] = useState<string[]>([]);
  const [crt, setCrt] = useState(false);
  const [toast, setToast] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);
  const keys = useRef<string[]>([]);

  // Konami code toggles CRT mode. "/" focuses search.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "/" && document.activeElement?.tagName !== "INPUT") {
        e.preventDefault();
        searchRef.current?.focus();
        return;
      }
      keys.current = [...keys.current, e.key].slice(-KONAMI.length);
      if (keys.current.join(",") === KONAMI.join(",")) {
        keys.current = [];
        setCrt((v) => !v);
        setToast("CRT MODE TOGGLED");
        setTimeout(() => setToast(""), 1800);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return cheats.filter((c) => {
      if (consoles.length && !c.consoles.some((p) => consoles.includes(p))) return false;
      if (!q) return true;
      return [c.game, c.code, c.effect, ...c.consoles].some((f) => f.toLowerCase().includes(q));
    });
  }, [query, consoles]);

  const groups = useMemo(() => {
    const map = new Map<string, Cheat[]>();
    for (const c of results) map.set(c.game, [...(map.get(c.game) ?? []), c]);
    return [...map.entries()];
  }, [results]);

  const toggle = (c: string) =>
    setConsoles((prev) => (prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]));

  const gameCount = new Set(cheats.map((c) => c.game)).size;

  return (
    <div className={`${crt ? "vault-crt" : ""} vault-scanlines isolate relative min-h-screen bg-[#0A0A12] text-[#E8E8F0] font-mono overflow-x-hidden`}>
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_#1a0b2e_0%,_#0A0A12_60%)]" />
      <Starfield />

      <main className="relative mx-auto max-w-[1100px] px-5 md:px-6 py-10 md:py-14">
        <header className="mb-10">
          <p className="font-display text-[#FF3D9A] text-sm tracking-[0.3em] flex items-center gap-2">
            PLAYER 1 READY <span className="vault-blink">_</span>
          </p>
          <h1 className="vault-glitch font-display text-[44px] md:text-[80px] leading-[0.95] mt-4">
            <span className="vault-neon-text">CHEAT CODE</span>
            <br />
            <span className="text-[#E8E8F0]">VAULT</span>
          </h1>
          <p className="text-[#8A8AA8] mt-5 max-w-[60ch] leading-relaxed">
            Free, no login. Built for GTA III, IV, and V so far, with PC, PlayStation, Xbox, and phone
            codes.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 font-display text-[11px] tracking-widest">
            <span className="border border-[#2A2A4A] px-3 py-2 text-[#39FF88]">{gameCount} GAMES</span>
            <span className="border border-[#2A2A4A] px-3 py-2 text-[#FF3D9A]">{cheats.length} CODES</span>
            <span className="border border-[#2A2A4A] px-3 py-2 text-[#FFD23F]">{CONSOLES.length} PLATFORMS</span>
          </div>
        </header>

        <SpinPanel pool={cheats} />

        <div className="sticky top-0 z-20 -mx-5 md:-mx-6 px-5 md:px-6 bg-[#0A0A12]/85 backdrop-blur-md py-4 mt-10 border-b border-[#2A2A4A]">
          <div className="relative">
            <input
              ref={searchRef}
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search a game, code, or effect   ( / )"
              className="w-full bg-[#14142B] border-2 border-[#2A2A4A] focus:border-[#39FF88] focus:shadow-[0_0_20px_rgba(57,255,136,.35)] outline-none px-4 py-3 text-[15px] placeholder:text-[#8A8AA8] transition-all"
            />
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {CONSOLES.map((c) => {
              const active = consoles.includes(c);
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => toggle(c)}
                  aria-pressed={active}
                  className={`font-display text-[10px] tracking-widest px-3 py-1.5 border-2 transition-all ${
                    active
                      ? "bg-[#FFD23F] border-[#FFD23F] text-[#0A0A12] -translate-y-0.5"
                      : "border-[#2A2A4A] text-[#8A8AA8] hover:border-[#FFD23F] hover:text-[#FFD23F]"
                  }`}
                >
                  {c.toUpperCase()}
                </button>
              );
            })}
          </div>
        </div>

        <p className="text-[13px] text-[#8A8AA8] mt-6">
          {results.length} {results.length === 1 ? "code" : "codes"} · {groups.length}{" "}
          {groups.length === 1 ? "game" : "games"}
        </p>

        {groups.map(([game, list]) => (
          <section key={game} className="mt-10">
            <div className="flex items-end gap-4 mb-4">
              <h2 className="font-display text-2xl md:text-3xl text-[#E8E8F0]">{game}</h2>
              <div className="h-[2px] flex-1 bg-gradient-to-r from-[#39FF88] via-[#FF3D9A] to-transparent mb-2" />
              <span className="font-display text-[11px] text-[#8A8AA8] mb-2">{list.length}</span>
            </div>
            <ul className="grid gap-5 md:grid-cols-2">
              {list.map((c, i) => (
                <CheatCard key={`${c.game}-${c.code}-${i}`} c={c} i={i} />
              ))}
            </ul>
          </section>
        ))}

        {results.length === 0 && (
          <div className="mt-20 text-center">
            <p className="font-display text-[#FF3D9A] text-xl">GAME OVER</p>
            <p className="text-[#8A8AA8] mt-3">No codes match. Try another search or clear the filters.</p>
          </div>
        )}

        <footer className="mt-20 pt-6 border-t border-[#2A2A4A] text-[12px] text-[#8A8AA8] leading-relaxed">
          Codes come from the published guides listed on each card. Versions and regions differ, so if a
          code fails, check the game's own documentation. Psst: try the Konami code on this page.
        </footer>
      </main>

      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 font-display text-xs tracking-widest bg-[#39FF88] text-[#0A0A12] px-5 py-3 shadow-[4px_4px_0_#FF3D9A] vault-rise">
          {toast}
        </div>
      )}
    </div>
  );
}

export default Index;
