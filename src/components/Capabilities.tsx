import { CheckCircle2 } from 'lucide-react';

export default function Capabilities() {
  const capabilities = [
    {
      title: 'Lead Generation & Prospecting',
      items: [
        'LinkedIn Sales Navigator prospecting',
        'Contact list building and verification',
        'Cold email sequence management',
        'Lead qualification and scoring'
      ]
    },
    {
      title: 'CRM & Data Operations',
      items: [
        'HubSpot & GoHighLevel management',
        'Pipeline setup and maintenance',
        'Workflow automation setup',
        'Data import, deduplication, and hygiene'
      ]
    },
    {
      title: 'Project & Admin Support',
      items: [
        'Project coordination and timelines',
        'Email management and communication',
        'File organization and asset management',
        'Spreadsheet maintenance and reporting'
      ]
    },
    {
      title: 'Automation & AI Workflows',
      items: [
        'n8n workflow design and deployment',
        'AI agent setup (Groq, OpenAI, LLMs)',
        'Email automation and inbox management',
        'Lead pipeline automation end-to-end'
      ]
    }
  ];

  return (
    <section id="capabilities" className="py-24 bg-slate-900/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-12">
          <p className="text-[#9b87f5] font-semibold tracking-wider uppercase text-sm mb-3 flex items-center gap-3">
            <span className="w-8 h-px bg-[#9b87f5]"></span> What I do
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Capabilities</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, idx) => (
            <div key={idx} className="glass-card p-6 rounded-2xl border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#9b87f5]"></span>
                {cap.title}
              </h3>
              <ul className="space-y-4">
                {cap.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-400">
                    <CheckCircle2 size={16} className="text-[#9b87f5] mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
