
import { Article } from '../types';

export const ARTICLES: Article[] = [
    {
        id: 'formation-guide',
        title: "UK LTD Formation for Non-Residents: Complete Guide",
        subtitle: "Everything a non-resident needs to know about UK LTD formation, from eligibility to ongoing compliance.",
        tag: "Pillar Guide",
        readTime: "15 min",
        date: "Jan 12, 2026",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
        content: `
            <p>Starting a business in another country can feel confusing, especially when you are not familiar with local rules, taxes, and legal requirements. If you are a non-UK resident, you may be wondering whether you can register a UK limited company, what you need to do it, and what responsibilities come after registration.</p>
            
            <p>The UK is one of the most popular countries in the world for non-resident entrepreneurs. Its company registration process is transparent, relatively fast, and open to foreign ownership. However, while forming a UK limited company is straightforward, running it correctly requires understanding certain obligations.</p>
            
            <h3>Overview of UK LTD Formation for Non-Residents</h3>
            <p>A UK limited company (LTD) is a separate legal entity registered with Companies House, the official UK company registrar. Once incorporated, the company exists independently from its owners and directors.</p>
            <ul>
                <li>The UK allows 100% foreign ownership</li>
                <li>Directors and shareholders do not need to live in the UK</li>
                <li>Company registration can be completed entirely online</li>
                <li>The UK has a strong international business reputation</li>
            </ul>

            <h3>Step-by-Step UK LTD Formation Process</h3>
            <p>1. <strong>Choose a Company Name:</strong> Must be unique and end with "Limited" or "Ltd".</p>
            <p>2. <strong>Appoint Directors and Shareholders:</strong> Need full name, DOB, nationality, and addresses.</p>
            <p>3. <strong>Provide a Registered Office Address:</strong> Every UK company must have a physical UK-based address. Most non-residents use a <a href="#guide-address" class="text-primary font-bold">virtual address service</a>.</p>
            <p>4. <strong>Choose SIC Codes:</strong> Describe your business activities (up to four).</p>
            <p>5. <strong>Register with Companies House:</strong> Usually approved within 24 to 48 hours.</p>

            <div class="bg-primary/5 p-6 rounded-xl border border-primary/20 my-8">
                <h4 class="font-bold text-primary mb-2">Need Direct Assistance?</h4>
                <p class="text-sm">If you are planning to move forward, our platform provides a 100% digital onboarding experience tailored for non-residents.</p>
            </div>

            <h3>Ongoing Compliance</h3>
            <p>After registration, a UK LTD must meet requirements like filing annual accounts, submitting a confirmation statement, and filing corporation tax returns. Missing deadlines can result in penalties or company strike-off.</p>
        `,
        relatedIds: ['tax-basics', 'banking-guide', 'address-requirements', 'eligibility-rules']
    },
    {
        id: 'tax-basics',
        title: "UK Tax Basics for Non-Residents with a UK Limited Company",
        tag: "Taxation",
        readTime: "8 min",
        date: "Jan 9, 2026",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
        content: `
            <p>Understanding UK tax obligations is essential for non-residents who own or manage a UK limited company. While the UK allows foreign ownership, tax and compliance responsibilities still apply at the company level.</p>
            
            <h3>Does a UK LTD Pay UK Tax?</h3>
            <p><strong>Yes.</strong> A UK limited company is subject to UK corporation tax on its taxable profits, regardless of where the owner lives.</p>
            
            <h3>Corporation Tax Explained</h3>
            <p>Corporation tax is paid on company profits after allowable expenses. Returns are filed annually, and payment deadlines must be met even for dormant companies.</p>

            <h3>Personal Tax for Non-Resident Directors</h3>
            <p>Being a director of a UK LTD does not automatically make you personally taxable in the UK. Personal tax depends on your country of residence, where work is performed, and double taxation treaties.</p>

            <h3>VAT and Non-Resident Companies</h3>
            <p>VAT registration may be required if you exceed the threshold (£90,000 as of 2025) or if you sell VAT-able goods within the UK.</p>
        `,
        relatedIds: ['formation-guide', 'banking-guide']
    },
    {
        id: 'banking-guide',
        title: "Business Banking for UK LTD Companies Owned by Non-Residents",
        tag: "Banking",
        readTime: "10 min",
        date: "Jan 9, 2026",
        image: "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?auto=format&fit=crop&w=800&q=80",
        content: `
            <p>A UK limited company does not legally require a UK bank account. However, having one is highly recommended to improve credibility, simplify tax payments to HMRC, and separate personal finances.</p>
            
            <h3>Why Banking Is Difficult for Non-Residents</h3>
            <p>Banks must comply with strict Anti-Money Laundering (AML) and Know Your Customer (KYC) regulations. Challenges include no UK residential address and no UK credit history.</p>
            
            <h3>Traditional UK Banks vs Online Banks</h3>
            <p><strong>Traditional Banks:</strong> Often require UK residency and in-person appointments. Rarely the best starting option for non-residents.</p>
            <p><strong>Online Banks & EMIs:</strong> Services like Revolut Business or Wise offer remote onboarding, faster approval, and multi-currency accounts. These are usually the most practical first step.</p>
        `,
        relatedIds: ['formation-guide', 'tax-basics']
    },
    {
        id: 'address-requirements',
        title: "Do I Need a UK Address to Form a UK LTD?",
        tag: "Legal",
        readTime: "6 min",
        date: "Jan 6, 2026",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
        content: `
            <p>Yes, you absolutely need a UK address to form a UK Limited Company (LTD). Every company must have a physical postal address within the same jurisdiction (England/Wales, Scotland, or NI).</p>
            
            <h3>Registered Office vs. Service Address</h3>
            <p><strong>Registered Office:</strong> The "legal home" of the business. Publicly visible and used for official government mail.</p>
            <p><strong>Service Address:</strong> The correspondence address for directors. Can be anywhere in the world, but often kept in the UK for privacy.</p>
            
            <h3>The Solution: Using a Virtual Office</h3>
            <p>For international founders, a Virtual Office is the most efficient solution. It meets all legal requirements without the cost of physical rent. Our platform offers these addresses in prestigious London locations.</p>
        `,
        relatedIds: ['formation-guide', 'eligibility-rules']
    },
    {
        id: 'eligibility-rules',
        title: "Can a Non-Resident Register a UK Limited Company?",
        tag: "Eligibility",
        readTime: "5 min",
        date: "Jan 6, 2026",
        image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80",
        content: `
            <p><strong>Yes</strong>, a non-resident can register a UK Limited Company. There are no restrictions on nationality or residency for directors or shareholders.</p>
            
            <h3>The Legal Framework</h3>
            <p>The Companies Act 2006 serves as the primary legislation, and it contains no provision requiring a director to be a UK resident. In 2026, the process remains streamlined and digital-first.</p>
            
            <h3>Core Requirements</h3>
            <ul>
                <li>A Registered Office Address in the UK</li>
                <li>Appointment of at least one Director (min age 16)</li>
                <li>Identity Verification (usually completed digitally)</li>
                <li>Memorandum and Articles of Association</li>
            </ul>
        `,
        relatedIds: ['formation-guide', 'address-requirements']
    }
];
