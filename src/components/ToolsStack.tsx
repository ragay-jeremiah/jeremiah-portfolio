export default function ToolsStack() {
  const categories = [
    {
      title: 'Automation & Integration',
      tools: ['n8n', 'Zapier', 'Make (Integromat)', 'GoHighLevel', 'Stripe API', 'Twilio', 'Anthropic API', 'REST APIs', 'Webhooks', 'IFTTT']
    },
    {
      title: 'CRM & Sales',
      tools: ['HubSpot CRM', 'LinkedIn Sales Navigator', 'Apollo.io', 'Mailchimp', 'Brevo', 'Typeform', 'Leadpages', 'ConvertKit', 'Pipedrive']
    },
    {
      title: 'AI & Language Models',
      tools: ['Claude AI', 'ChatGPT', 'OpenAI', 'Groq AI', 'Perplexity AI', 'Gemini', 'LLaMA', 'Mistral AI']
    }
  ];

  return (
    <section id="tools" className="py-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <p className="text-[#9b87f5] font-semibold tracking-wider uppercase text-sm mb-3 flex items-center gap-3">
          <span className="w-8 h-px bg-[#9b87f5]"></span> Tech stack
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Tools I work with</h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {categories.map((category, idx) => (
          <div key={idx} className="glass-card p-8 rounded-2xl overflow-hidden shadow-2xl">
            <h3 className="text-sm font-bold text-[#9b87f5] uppercase tracking-widest mb-6">
              {category.title}
            </h3>
            
            {/* Custom Marquee built with Tailwind animations */}
            <div className="flex overflow-hidden relative w-full pb-4">
              <div className="flex gap-4 animate-[scroll_40s_linear_infinite] whitespace-nowrap min-w-full">
                {/* Double the list to make it seamless */}
                {[...category.tools, ...category.tools].map((tool, i) => (
                  <span 
                    key={i} 
                    className="inline-block px-4 py-2 bg-slate-800/50 border border-slate-700/50 text-slate-300 rounded-lg text-sm font-medium hover:text-[#9b87f5] hover:border-[#9b87f5] transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            
          </div>
        ))}
      </div>
      
      {/* Adding custom keyframes to standard tailwind isn't supported without config, but we can drop a quick style block or use Tailwind's arbitrary values. Here we add the keyframes via style block. */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </section>
  );
}
