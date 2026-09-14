export const services = [
  { number: "01", title: "Social Media Management", body: "Your brand deserves more than random posts. We take full ownership of your social media presence. Strategy, content, graphics, scheduling, community engagement, and monthly reporting." },
  { number: "02", title: "Social Media Consulting", body: "Sometimes you do not need a manager. You need an expert to sit across from you and tell you exactly what to fix. One conversation. A complete plan. Real direction." },
  { number: "03", title: "SMM Masterclass", body: "The only social media management course you will ever need. 14 modules built to take you from knowing nothing to landing your first client. Beginners welcome. Limits not." },
  { number: "04", title: "Agency Services", body: "Stop running your brand alone. Our agency packages give you an entire team, strategist, content creator, designer, video editor, and ads manager, working every month." },
];

export const portfolio = [
  { name: "Cresthood Legal LLP", sector: "Legal & Entertainment", body: "IP and entertainment law firm serving creatives. The SMer Space manages their Instagram presence, building a content calendar that positions them as the go-to legal authority for creatives and musicians.", tags: ["EDU Content Calendar", "Caption Writing", "Content Strategy"] },
  { name: "Elvivaskut", sector: "Fashion", body: "Premium bespoke fashion label, Manchester UK, rooted in African heritage and crafted with modern precision.", tags: ["Content Creation", "Graphic Design", "Instagram Management"] },
  { name: "Isoken Smoked Fish Co.", sector: "Food Brand", body: "Premium Nigerian smoked catfish brand, United Kingdom. The SMer Space handled the full digital setup and launch strategy from the ground up.", tags: ["Full-page Optimisation", "Brand Strategy", "Launch Execution"] },
  { name: "DOT Drums Community", sector: "Music & Community", body: "A movement empowering drummers across Africa, with a special focus on women in music.", tags: ["SMM", "Content Strategy", "Community Engagement"] },
  { name: "DILA", sector: "E-Commerce", body: "Pre-launch multi-vendor marketplace built for a new generation of online sellers. Content strategy and calendars built to convert audiences before launch.", tags: ["Content Strategy", "Content Calendars", "Instagram Management"] },
];

export const matchedPackages = [
  { name: "Starter Boost", price: "₦50,000", features: ["Dedicated SMM", "1 platform", "2 posts/week", "2 stories/week", "Monthly calendar", "Brand onboarding"] },
  { name: "Consistency Plus", price: "₦70,000", features: ["Dedicated SMM", "1 platform", "3 posts/week", "3 stories/week", "Caption refinement", "Post boosting"] },
  { name: "Brand Lift", price: "₦80,000", popular: true, features: ["Dedicated SMM", "2 platforms", "3 posts/week", "Brand tone alignment", "Post boosting"] },
  { name: "Growth Edge", price: "₦120,000", features: ["Dedicated SMM", "2 platforms", "4 posts/week", "Monthly analytics report", "12hr DM response"] },
];

export const agencyPackages = [
  { name: "Content Flow", price: "₦150K", features: ["SMM + Designer", "1 platform", "3 posts/week", "Structured direction"] },
  { name: "Visual Growth", price: "₦200K", features: ["SMM + Designer", "2 platforms", "Stronger visual identity", "Monthly review"] },
  { name: "Strategic Presence", price: "₦300K", features: ["SMM + Designer + Editor", "Content strategist", "4 posts/week", "Monthly strategy session"] },
  { name: "Brand Authority", price: "₦500K", popular: true, features: ["Full team + Ads Manager", "3 platforms", "Campaign planning", "Performance tracking"] },
  { name: "Scale & Expansion", price: "₦700K", features: ["Full team + Web Designer", "4 platforms", "Conversion optimization", "In-depth reporting"] },
  { name: "Market Leadership", price: "₦1M", features: ["Full team + Photographer", "5 platforms", "Paid ads scaling", "Quarterly review"] },
  { name: "Brand Expansion Suite", price: "₦1.5M", features: ["Full team + Videographer", "6 posts/week", "Full platform rollout", "Bi-monthly review"] },
  { name: "Authority Builder", price: "₦2M", features: ["Full team", "6 platforms", "Multi-campaign management", "Weekly reporting"] },
  { name: "Market Dominance Plus", price: "₦2.5M", features: ["Full team + Account Manager", "All platforms", "Daily posts", "Weekly strategy calls"] },
  { name: "Industry Leader System", price: "₦3M", features: ["Full elite team", "All platforms managed", "Real-time optimization", "VIP 1hr response"] },
];

export const whatsappNumber = "2349126262410";
export const whatsappLink = (message: string) => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
