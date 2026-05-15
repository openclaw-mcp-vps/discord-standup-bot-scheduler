export default function Home() {
  const faqs = [
    {
      q: 'How does the standup bot work?',
      a: 'Add the bot to your Discord server, configure your standup schedule and questions, and it will automatically prompt your team at the set time. Responses are collected and summarized for team leads.'
    },
    {
      q: 'Do team members need to install anything?',
      a: 'No. Team members simply respond to the bot in Discord as they normally would. Only the manager needs to set up the web dashboard.'
    },
    {
      q: 'Can I customize the standup questions?',
      a: 'Yes. You can define your own questions, set different schedules per channel, and choose how summaries are delivered — via DM or a dedicated channel.'
    }
  ]

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-sm font-medium px-3 py-1 rounded-full mb-6">
          For Discord-native engineering teams
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Automate async standups<br />in your Discord channels
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Schedule recurring standup prompts, collect team responses, and get AI-generated summaries — all inside Discord. No extra tools, no context switching.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Get started — $15/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. Instant setup.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-3 gap-6 mb-20 text-center">
        {[
          { icon: '⏰', label: 'Scheduled prompts', desc: 'Daily or custom cron schedules per channel' },
          { icon: '📋', label: 'Response collection', desc: 'Aggregates replies automatically via webhooks' },
          { icon: '📊', label: 'Team summaries', desc: 'Digest sent to leads after each standup round' }
        ].map((f) => (
          <div key={f.label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">{f.icon}</div>
            <div className="text-white font-semibold text-sm mb-1">{f.label}</div>
            <div className="text-[#8b949e] text-xs">{f.desc}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm mb-2 uppercase tracking-wide">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$15</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited Discord servers',
              'Custom standup schedules',
              'AI-generated summaries',
              'Webhook & cron management',
              'Priority email support'
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff]">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Subscribe now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-white font-semibold mb-2">{faq.q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs mt-20">
        © {new Date().getFullYear()} Discord Standup Bot. All rights reserved.
      </footer>
    </main>
  )
}
