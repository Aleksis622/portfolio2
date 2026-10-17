import Icon from "./Icon";

/* Hero illustration: a real test from MyTrain (tests/Feature/TicketPaymentTest.php), shortened. */
export function HeroCode() {
  return (
    <div className="hero-art">
      <div className="code-window">
        <div className="code-bar">
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
          <span className="code-file">TicketPaymentTest.php</span>
        </div>
        <pre className="code-body">
          <code>
            <span className="k">public function</span> <span className="f">test_full_stripe_payment_flow</span>(){"\n"}
            {"{"}{"\n"}
            {"    "}<span className="v">$this</span>-&gt;<span className="m">actingAs</span>(<span className="v">$user</span>);{"\n"}
            {"    "}<span className="v">$ticket</span> = <span className="v">$this</span>-&gt;<span className="m">buyTicket</span>();{"\n"}
            {"\n"}
            {"    "}<span className="v">$this</span>-&gt;<span className="m">postJson</span>(<span className="s">'/api/payments'</span>, [...]){"\n"}
            {"        "}-&gt;<span className="m">assertCreated</span>(){"\n"}
            {"        "}-&gt;<span className="m">assertJsonPath</span>(<span className="s">'payment.amount'</span>, <span className="s">'3.50'</span>);{"\n"}
            {"\n"}
            {"    "}<span className="c">{"// Stripe's signed webhook marks it paid"}</span>{"\n"}
            {"    "}<span className="v">$this</span>-&gt;<span className="m">webhook</span>(<span className="v">$payment</span>)-&gt;<span className="m">assertOk</span>();{"\n"}
            {"}"}
          </code>
        </pre>
        <div className="code-terminal">
          <span className="prompt">$</span> php artisan test
          <span className="pass">
            <Icon name="check" size={14} /> 83 tests passed
          </span>
        </div>
      </div>

      <span className="float-chip chip-a">React</span>
      <span className="float-chip chip-b">Laravel</span>
      <span className="float-chip chip-c">
        <Icon name="check" size={14} /> Playwright
      </span>
    </div>
  );
}

/* Contact illustration: rising bars, like the "project in mind" picture in the reference. */
export function GrowthArt() {
  return (
    <svg className="growth-art" viewBox="0 0 260 200" aria-hidden="true">
      <ellipse cx="130" cy="186" rx="110" ry="8" className="ga-shadow" />
      <rect x="40" y="140" width="34" height="44" rx="3" className="ga-light" />
      <rect x="92" y="110" width="34" height="74" rx="3" className="ga-teal" />
      <rect x="144" y="74" width="34" height="110" rx="3" className="ga-teal" />
      <rect x="196" y="34" width="34" height="150" rx="3" className="ga-teal-strong" />
      <path d="M30 120 C 80 110, 120 80, 210 18" className="ga-line" />
      <path d="m196 16 16 1-6 15" className="ga-line" />
      <circle cx="57" cy="128" r="4" className="ga-dot" />
      <circle cx="109" cy="98" r="4" className="ga-dot" />
      <circle cx="161" cy="62" r="4" className="ga-dot" />
    </svg>
  );
}
