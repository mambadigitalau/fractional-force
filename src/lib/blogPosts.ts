export interface BlogSection {
  type: "paragraph" | "heading" | "italic-paragraph" | "separator";
  content?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  dateShort: string;
  category: string;
  tags: string[];
  excerpt: string;
  image: string;
  videoUrl?: string; // Optional video hero
  sections: BlogSection[];
  faq?: { question: string; answer: string }[];
  cta?: string; // Optional closing CTA paragraph (supports HTML)
}

export const blogPosts: BlogPost[] = [
  {
    slug: "ai-agents-for-business",
    title: "AI Agents for Business in 2026: They're Not Assistants. They're Employees.",
    date: "1st March 2026",
    dateShort: "March 2026",
    category: "AI",
    tags: ["AI"],
    excerpt:
      "AI agents are no longer tools you prompt. They're autonomous workers that execute, adapt, and deliver — without hand-holding.",
    image:
      "https://mambadigital.au/wp-content/uploads/2026/03/AI-For-Business.png",
    sections: [
      {
        type: "paragraph",
        content:
          "McKinsey has 40,000 human employees. It also has 25,000 AI agents. It counts them as staff. By the end of this year, the plan is 1:1 parity. Forty thousand people. Forty thousand agents. Same headcount.",
      },
      {
        type: "paragraph",
        content:
          "That's not a press release from a startup trying to get funding. That's the world's most influential consulting firm telling you, out loud, that a quarter of its workforce isn't human. And that number is about to double.",
      },
      {
        type: "paragraph",
        content:
          "If you're a business owner still using AI to rewrite emails and brainstorm Instagram captions, this is your signal that the gap between \"keeping up\" and \"falling behind\" just became a canyon.",
      },
      {
        type: "heading",
        content: "The old model is dead. Here's what replaced it.",
      },
      {
        type: "paragraph",
        content:
          "Two years ago, AI was a conversation. You typed a question. You got an answer. You copied it into a document, tweaked it, and did the actual work yourself. The AI was a well-read colleague who could talk all day but couldn't touch a keyboard.",
      },
      {
        type: "paragraph",
        content:
          "That version of AI still exists. But treating it as the whole picture in March 2026 is like using your smartphone exclusively as a calculator.",
      },
      {
        type: "paragraph",
        content:
          "The shift that happened, quietly and then all at once, is this: AI stopped answering questions and started doing things. Not suggesting. Doing. Booking flights, moving calendar invites, sending follow-up emails, updating your CRM, chasing overdue invoices, screening job applicants, filing reports, and closing support tickets. Without being asked. Without supervision on the routine stuff.",
      },
      {
        type: "paragraph",
        content:
          'The industry calls this "agentic AI." The difference between a chatbot and an AI agent is the difference between someone who tells you what to cook for dinner and someone who goes to the shops, buys the ingredients, and has it on the table by seven.',
      },
      {
        type: "heading",
        content: "What happened in the last 90 days alone",
      },
      {
        type: "paragraph",
        content:
          "If you haven't been paying attention since January, you've missed a lot. Here's the highlight reel, and it's worth reading slowly.",
      },
      {
        type: "paragraph",
        content:
          "Anthropic (the company behind Claude) acquired a startup called Vercept in late February to make Claude better at using computers the way humans do. Clicking buttons. Navigating software. Filling in forms. They also released Claude Opus 4.6 with a one-million-token context window, which means it can hold and process the equivalent of roughly 3,000 pages of text in a single conversation. Then they launched Cowork, a desktop tool that lets Claude read, edit, and create files on your actual computer. Not in a browser window. On your machine, in your folders, touching your files.",
      },
      {
        type: "paragraph",
        content:
          "Apple integrated Claude's agent technology directly into Xcode, their developer tool. The world's most valuable company decided Claude was the engine it wanted powering its development environment.",
      },
      {
        type: "paragraph",
        content:
          "OpenAI merged its web-browsing agent (Operator) and its research agent (Deep Research) into a single system called ChatGPT Agent. It can now browse the web, interact with websites, and produce analyst-grade research reports, all in one flow. Previously those were separate tools. Now it's one employee that can both research and act.",
      },
      {
        type: "paragraph",
        content:
          'Google launched Workspace Studio, which lets anyone create AI agents inside Google Workspace using plain English. No code. You literally type "every Friday, ping me to update my tracker" and it builds the agent. That rolled out to all users on February 27th.',
      },
      {
        type: "paragraph",
        content:
          "Salesforce reported that its Agentforce platform handled 2.8 million customer support requests internally last year, saving hundreds of thousands of employee hours. They closed 22,000 Agentforce deals in Q4 alone. Their AI revenue hit $800 million ARR. That's not a pilot programme. That's a business unit.",
      },
      {
        type: "paragraph",
        content:
          "Devin, the AI software engineer, went from $1 million in annual revenue to $73 million in under a year. Goldman Sachs calls it their first AI employee. It's now authorised for use across US federal government agencies. It merges hundreds of thousands of code changes without a human writing a single line.",
      },
      {
        type: "paragraph",
        content:
          "This isn't next year. This is right now. February and March 2026.",
      },
      {
        type: "heading",
        content:
          "Why this matters more if you have 12 employees than if you have 12,000",
      },
      {
        type: "paragraph",
        content:
          "Here's where the commentary gets it backwards every single time. The business press frames AI agents as an enterprise story. Big companies. Big budgets. Big IT departments.",
      },
      {
        type: "paragraph",
        content: "They're wrong.",
      },
      {
        type: "paragraph",
        content:
          "A company with 500 employees can absorb the cost of people doing routine work. It's wasteful, but it won't kill them. A company with 12 people cannot afford that waste. Every hour your operations manager spends chasing a late payment, formatting a report, or updating a spreadsheet is an hour they're not spending on the work that actually grows your business.",
      },
      {
        type: "paragraph",
        content:
          "The numbers back this up. Deloitte found that if just one in ten Australian small businesses moved one step up the AI adoption ladder, it would add $44 billion to GDP annually. Not globally. Just in Australia.",
      },
      {
        type: "paragraph",
        content:
          "Right now, 40% of Australian businesses with 5 to 19 employees are using AI in some form. But only 5% are what you'd call fully enabled. The other 35% are doing the email-rewriting, caption-generating, surface-level stuff. They've bought a race car and they're using it to drive to the shops.",
      },
      {
        type: "paragraph",
        content:
          "The real opportunity isn't \"using AI.\" It's deploying AI agents on the specific, repeatable, process-driven tasks that eat your team's time for zero strategic value.",
      },
      {
        type: "heading",
        content: "What AI agents actually do in a real business",
      },
      {
        type: "paragraph",
        content:
          "Forget the Silicon Valley demos. Here's what this looks like for a business doing $2 million to $15 million somewhere in Australia.",
      },
      {
        type: "paragraph",
        content:
          "Accounts receivable. Right now, someone on your team chases late invoices. They check the system, draft the email, maybe make a call, update the notes. An AI agent monitors payment terms automatically, sends graduated follow-ups based on how overdue the invoice is, escalates to your accounts manager when it hits a threshold you set, and logs every interaction. Your person handles the exceptions. The agent handles the pattern.",
      },
      {
        type: "paragraph",
        content:
          "Customer enquiries. Not a chatbot that says \"I'll pass this to a human.\" An agent that reads the enquiry, pulls up the customer's history, checks your policies, makes the decision within the guardrails you've set, and closes the ticket. The customer gets a resolution in minutes. Your team handles the 5% of cases that genuinely need a human brain.",
      },
      {
        type: "paragraph",
        content:
          "Recruitment. An agent that screens applications against your criteria, schedules interviews with candidates who pass, sends polite rejections to those who don't, and presents you with a shortlist. Not a filtered inbox. A completed first round.",
      },
      {
        type: "paragraph",
        content:
          "Marketing. An agent that monitors your campaign performance, flags anomalies, pauses underperforming ads, reallocates budget to what's working, and sends you a summary. Not a dashboard you never check. An employee who checks it for you.",
      },
      {
        type: "paragraph",
        content:
          "Sales follow-up. An agent that sends personalised follow-ups to prospects who went quiet, re-engages leads based on their behaviour, books meetings into your calendar, and flags which deals need your personal attention. Your best salesperson never forgets to follow up. Neither does an agent.",
      },
      {
        type: "paragraph",
        content:
          "None of this is theoretical. These systems run today, in production, at scale.",
      },
      {
        type: "heading",
        content: "The honest risks (because someone has to say it)",
      },
      {
        type: "paragraph",
        content: "Two things to be straight about.",
      },
      {
        type: "paragraph",
        content:
          "First, Gartner predicts that more than 40% of agentic AI projects will be scrapped by 2027 because the business value wasn't clear enough upfront. That's not a technology failure. That's a strategy failure. People implementing AI because it sounds impressive, without asking \"what specific problem does this solve and how do we know it's solved?\"",
      },
      {
        type: "paragraph",
        content:
          "Sound familiar? That's the exact same mistake businesses make with marketing. New tool. No strategy. No measurement. Shock and surprise when it doesn't work.",
      },
      {
        type: "paragraph",
        content:
          "Second, giving AI permission to act means you need guardrails. These are not \"set and forget\" systems. The best implementations use a human-in-the-loop model. The agent handles the password reset. You approve the refund over $500. The agent sends the follow-up email. You sign off on the proposal over $10,000. Get the governance right and the risk is minimal. Skip it and you'll spend more time cleaning up messes than you saved.",
      },
      {
        type: "heading",
        content:
          "The keyword everyone's searching and nobody's explaining",
      },
      {
        type: "paragraph",
        content:
          "\"AI agents for business\" is one of the fastest-growing search terms in the world right now. So is \"agentic AI,\" \"AI automation for business,\" and \"AI for small business.\" Search volumes for AI-related terms have exploded since late 2025, and they're still climbing.",
      },
      {
        type: "paragraph",
        content:
          "But here's what those searches tell you: people are looking for clarity. Not hype. Not another breathless article about how AI will change everything. They want someone to tell them, plainly, what this means for their specific business and what they should actually do about it.",
      },
      {
        type: "paragraph",
        content: "So here it is.",
      },
      {
        type: "heading",
        content: "What to do with this. Specifically.",
      },
      {
        type: "paragraph",
        content:
          "Step one. Identify the three tasks in your business that follow a repeatable process and eat the most hours. Late invoice follow-ups. Quote requests. Appointment scheduling. Report generation. Onboarding paperwork. Customer FAQ responses. Data entry. Stock reordering. Pick three.",
      },
      {
        type: "paragraph",
        content:
          "Step two. Rank them by pain. Which one costs you the most time, creates the most frustration, or has the highest error rate? Start there. Not with three. With one.",
      },
      {
        type: "paragraph",
        content:
          "Step three. Match the task to a tool. You don't need a custom-built AI system. Salesforce Agentforce handles CRM and sales automation. Klaviyo's AI handles email flows. Claude handles research, content, and file work. Google Workspace Studio handles internal workflow automation. The tools exist. The question is which problem you point them at.",
      },
      {
        type: "paragraph",
        content:
          "Step four. Set the guardrails. Define what the agent can do autonomously and what requires your approval. Start conservative. Loosen as you build confidence.",
      },
      {
        type: "paragraph",
        content:
          "Step five. Measure. Not \"does this feel like it's working.\" Measure hours saved. Measure error rates. Measure response times. Measure revenue impact. If you can't measure it, you haven't defined the problem well enough.",
      },
      {
        type: "paragraph",
        content:
          "The businesses that win this shift won't be the ones with the fanciest tech stack. They'll be the ones that identified the right problem first and let the technology handle it while their people focused on the work that actually requires a human brain. The judgement calls. The relationships. The decisions that move the business forward.",
      },
      {
        type: "paragraph",
        content:
          "AI stopped being the colleague who gives you advice. It became the one who takes things off your desk, finishes them, and moves on to the next task before you've finished your coffee.",
      },
      {
        type: "paragraph",
        content:
          "The question isn't whether you trust it. It's whether you can afford to keep doing everything manually while your competitors don't.",
      },
    ],
    faq: [
      {
        question: "What is an AI agent?",
        answer:
          "An AI agent is software that can independently complete tasks, make decisions, and take actions without step-by-step human instruction. Unlike chatbots that answer questions in a conversation, AI agents execute entire workflows: sending emails, updating CRM records, chasing invoices, screening job applicants, and managing processes end to end. They access your actual systems and follow your actual rules.",
      },
      {
        question: "How much do AI agents cost for a small business?",
        answer:
          "Less than you'd think. Google Workspace Studio is included with your existing Google subscription. Claude has a free tier and a $20/month pro plan. Specialised tools like Klaviyo's AI or HubSpot's agent features sit inside platforms you may already pay for. Enterprise-grade platforms like Salesforce Agentforce are priced per interaction. Most small businesses can start deploying AI agents for under $100/month, and the ROI typically shows up within weeks, not months.",
      },
      {
        question: "Are AI agents safe to use in my business?",
        answer:
          "Yes, when implemented with proper guardrails. Best practice is a human-in-the-loop model where agents handle routine tasks autonomously (password resets, follow-up emails, data entry) but escalate high-value or sensitive decisions to a human for approval (refunds over a threshold, contract changes, anything customer-facing that's non-standard). Start conservative. Loosen as you build confidence.",
      },
      {
        question:
          "What's the difference between AI agents and chatbots?",
        answer:
          "A chatbot waits for you to ask a question, then gives you an answer. An AI agent takes independent action. It accesses your systems, makes decisions within the rules you've set, and completes multi-step tasks without needing to be prompted at each stage. A chatbot tells you what to cook for dinner. An agent goes to the shops, buys the ingredients, and has it on the table by seven.",
      },
      {
        question:
          "How are Australian businesses using AI agents in 2026?",
        answer:
          "40% of Australian businesses with 5 to 19 employees use AI in some form. The most common applications are customer enquiry handling (27%), reporting and data analysis (25%), and email automation (24%). However, only 5% of Australian SMEs are fully enabled to realise AI's potential. Deloitte estimates that broader AI adoption across small businesses could add $44 billion to Australia's GDP annually.",
      },
    ],
    cta: 'Mamba Digital provides fractional CMO services and strategic marketing leadership for growing Australian businesses. If your marketing feels like one of those repetitive processes that nobody\'s actually steering, <a href="/contact">let\'s have a conversation</a>.',
  },
  {
    slug: "what-is-a-fractional-cmo",
    title:
      "What Is a Fractional CMO? The Complete Guide for Growing Australian Businesses",
    date: "16th February 2026",
    dateShort: "February 2026",
    category: "CMO, Strategy",
    tags: ["CMO", "Strategy"],
    excerpt:
      "The role is senior leadership. Not doing the work. Not managing the work. Deciding which work is worth doing.",
    image:
      "https://mambadigital.au/wp-content/uploads/2026/03/What-is-a-CMO--768x410.jpg",
    sections: [],
  },
  {
    slug: "meta-advantage-plus-backlash",
    title:
      "Meta Advantage+ Backlash: Why Advertisers Are Frustrated – How We Fix It",
    date: "29th November 2025",
    dateShort: "November 2025",
    category: "AI, Paid",
    tags: ["AI", "Paid"],
    excerpt:
      "Meta's black-box automation is frustrating advertisers everywhere. Here's what's actually going on — and how to take back control.",
    image:
      "https://mambadigital.au/wp-content/uploads/2025/12/MetaBacklash_BlogImage_1366-%C3%97-768.png-768x428.jpg",
    sections: [],
  },
  {
    slug: "perth-fractional-cmo",
    title:
      "Why Your Perth Business Needs a Fractional CMO (Not a Full-Time Hire)",
    date: "24th October 2025",
    dateShort: "October 2025",
    category: "CMO",
    tags: ["CMO"],
    excerpt:
      "You don't need a full-time marketing executive. You need the right one, at the right time, for the right scope.",
    image:
      "https://mambadigital.au/wp-content/uploads/2025/10/Why-Your-Perth-Business-Needs-a-Fractional-CMO-768x432.jpg",
    sections: [],
  },
  {
    slug: "paid-social-media-strategy-meta",
    title:
      "Paid Social Media Strategy for Meta Ads: The Financial Edge that Drives Results",
    date: "19th May 2025",
    dateShort: "May 2025",
    category: "Paid, Strategy",
    tags: ["Paid", "Strategy"],
    excerpt:
      "If your ad report doesn't connect to revenue, it's not a report. It's a distraction.",
    image:
      "https://mambadigital.au/wp-content/uploads/2025/05/Blog-Paid-Social-Media-Strategy-for-Meta-V2-768x439.png",
    sections: [],
  },
  {
    slug: "social-media-marketing-strategy-guide",
    title:
      "How to Develop a Social Media Marketing Strategy (Step-by-Step Guide)",
    date: "6th March 2025",
    dateShort: "March 2025",
    category: "Content, Strategy",
    tags: ["Content", "Strategy"],
    excerpt:
      "The highest-ROI channel most businesses ignore. A breakdown of what actually works.",
    image:
      "https://mambadigital.au/wp-content/uploads/2025/03/u5948933713_A_high-resolution_photorealistic_image_of_a_small_d_67d6f04f-86d9-4858-bc8e-5f76e12dbed0-768x439.png",
    sections: [],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(currentSlug: string, count = 3): BlogPost[] {
  return blogPosts.filter((p) => p.slug !== currentSlug).slice(0, count);
}
