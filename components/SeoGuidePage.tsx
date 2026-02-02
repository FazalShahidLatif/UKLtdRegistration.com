
import React from 'react';

export const SeoGuidePage = ({ onNavigate }: { onNavigate: (view: string) => void }) => {
    return (
        <div className="bg-background-light dark:bg-background-dark text-[#0e141b] dark:text-white transition-colors duration-200 font-sans min-h-screen flex flex-col pb-20 animate-fade-in">
            {/* Region Detection Banner */}
            <div className="bg-primary text-white py-2 px-4 text-center text-sm font-medium">
                <div className="max-w-[1200px] mx-auto flex items-center justify-center gap-2 flex-wrap">
                    <span className="material-symbols-outlined text-lg">location_on</span>
                    <span>Detected Region: <strong>United Arab Emirates</strong> — Switching to <strong>Arabic (العربية)</strong></span>
                    <button className="ml-4 underline underline-offset-2 hover:text-blue-100 transition-colors">Keep English</button>
                </div>
            </div>

            {/* Top Navigation Bar */}
            <header className="border-b border-solid border-[#e8edf3] dark:border-[#2a3a4a] bg-white dark:bg-background-dark sticky top-0 z-50">
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate('landing')}>
                            <div className="text-primary size-6">
                                <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <path clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fillRule="evenodd"></path>
                                </svg>
                            </div>
                            <h2 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">UK Ltd Registration</h2>
                        </div>
                        <nav className="hidden md:flex items-center gap-6">
                            <a className="text-sm font-medium hover:text-primary transition-colors flex flex-col cursor-pointer" onClick={() => onNavigate('landing')}>
                                <span className="text-slate-900 dark:text-white">Services</span>
                                <span className="text-[10px] text-gray-400 -mt-0.5">خدمات</span>
                            </a>
                            <a className="text-sm font-medium hover:text-primary transition-colors flex flex-col cursor-pointer" onClick={() => onNavigate('resources')}>
                                <span className="text-slate-900 dark:text-white">Resources</span>
                                <span className="text-[10px] text-gray-400 -mt-0.5">موارد</span>
                            </a>
                            <a className="text-sm font-medium hover:text-primary transition-colors flex flex-col cursor-pointer">
                                <span className="text-slate-900 dark:text-white">Pricing</span>
                                <span className="text-[10px] text-gray-400 -mt-0.5">تسعير</span>
                            </a>
                        </nav>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="hidden lg:flex items-center bg-[#e8edf3] dark:bg-[#1f2937] rounded-lg px-3 py-1.5 border-none">
                            <span className="material-symbols-outlined text-[#507095] text-lg">search</span>
                            <input className="bg-transparent border-none focus:ring-0 text-sm w-40 placeholder:text-[#507095] outline-none text-slate-900 dark:text-white" placeholder="Search guides... / بحث"/>
                        </div>
                        <button 
                            onClick={() => onNavigate('wizard')}
                            className="bg-primary text-white text-sm font-bold py-2 px-5 rounded-lg hover:bg-opacity-90 transition-all flex flex-col items-center"
                        >
                            <span>Register Now</span>
                            <span className="text-[10px] opacity-80 font-normal">سجل الآن</span>
                        </button>
                    </div>
                </div>
            </header>

            <main className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-grow">
                {/* Breadcrumbs */}
                <nav className="flex items-center gap-2 mb-6 text-sm">
                    <a className="text-[#507095] dark:text-gray-400 hover:text-primary cursor-pointer" onClick={() => onNavigate('landing')}>Home / الرئيسية</a>
                    <span className="text-[#507095] dark:text-gray-400">/</span>
                    <a className="text-[#507095] dark:text-gray-400 hover:text-primary cursor-pointer" onClick={() => onNavigate('resources')}>Resources / موارد</a>
                    <span className="text-[#507095] dark:text-gray-400">/</span>
                    <span className="text-primary font-medium">Guides / أدلة</span>
                </nav>

                {/* Page Heading */}
                <div className="mb-10 max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-[-0.03em] mb-4 text-gray-900 dark:text-white">
                        The Definitive 2025 Guide to UK Company Formation for Global Founders
                        <span className="block text-2xl md:text-3xl font-bold text-primary mt-2" dir="rtl">الدليل الشامل لعام 2025 لتأسيس الشركات البريطانية للمؤسسين العالميين</span>
                    </h1>
                    <div className="flex items-center gap-4 text-sm text-[#507095] dark:text-gray-400">
                        <div className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-base">calendar_today</span>
                            <span>Last updated: October 2025 / آخر تحديث: أكتوبر ٢٠٢٥</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-base">timer</span>
                            <span>12 min read / ١٢ دقيقة للقراءة</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Article Content Area */}
                    <div className="flex-1 max-w-[800px]">
                        {/* SEO High Impact Intro */}
                        <div className="border-l-4 border-primary pl-6 py-2 mb-8">
                            <p className="text-xl leading-relaxed text-[#0e141b] dark:text-gray-200 font-medium mb-4">
                                Establishing a UK Limited Company is the gold standard for global entrepreneurs seeking a prestigious, stable, and low-tax jurisdiction. Whether you are scaling a SaaS business from the USA or managing global logistics, our guide simplifies <strong>UK company formation</strong> into actionable steps for non-residents.
                            </p>
                            <p className="text-lg leading-relaxed text-primary font-medium italic" dir="rtl">
                                يعد تأسيس شركة بريطانية محدودة (LTD) المعيار الذهبي لرواد الأعمال العالميين الباحثين عن ولاية قضائية مرموقة ومستقرة وذات ضرائب منخفضة. سواء كنت تقوم بتوسيع أعمال البرمجيات من الولايات المتحدة أو تدير الخدمات اللوجستية العالمية، فإن دليلنا يبسط عملية تأسيس الشركات في المملكة المتحدة إلى خطوات قابلة للتنفيذ لغير المقيمين.
                            </p>
                        </div>

                        {/* Featured Image */}
                        <div className="rounded-xl overflow-hidden mb-10 shadow-lg border border-gray-100 dark:border-gray-800">
                            <img 
                                alt="Professional business documents and UK registration certificate" 
                                className="w-full h-auto object-cover aspect-video" 
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZpaYn1a8oifig5TF8O9m8gj3TY3bXSKFVyUV1sov6wRrtuyIAePvbouN7LvAk7q3TD5Srx15K4AZ6P2qfAYRRxnnjHN5WJkPGGEr3toD5lq3-s8SLXOWSfDPtIW9jRl87A0nE1b_ga3DlaOgJ6ToHX-7f_qzyH1v_AVfuLytMAf0qXU1Sldyl1ckINSjYZQcb05aOvw5e-zv1mcrAmUtsbhz8EE_KNAs0Qfw36cUKxEoWVr_dJRHUOeGo500u4aVk4plCvbJ9j2kz"
                            />
                        </div>

                        <article className="prose dark:prose-invert max-w-none">
                            <div className="flex flex-col gap-1 mt-8 mb-4">
                                <h2 id="eligibility" className="text-3xl font-bold text-[#0e141b] dark:text-white m-0">1. UK Ltd Registration Eligibility</h2>
                                <span className="text-lg font-normal text-gray-500 block" dir="rtl">١. أهلية تسجيل الشركات المحدودة في بريطانيا</span>
                            </div>
                            
                            <p className="text-slate-700 dark:text-gray-300 mb-3 leading-relaxed">Many international founders mistakenly believe you must be a UK resident to form a limited company. In reality, the <strong>Companies House</strong> requirements are remarkably inclusive:</p>
                            <p className="text-sm bg-gray-50 dark:bg-gray-800/50 p-3 rounded italic text-gray-600 dark:text-gray-400 mb-5" dir="rtl">يعتقد العديد من المؤسسين الدوليين خطأً أنه يجب أن تكون مقيماً في المملكة المتحدة لتأسيس شركة محدودة. في الواقع، متطلبات "سجل الشركات" شاملة للغاية:</p>
                            
                            <ul className="list-disc pl-6 mb-5 text-slate-700 dark:text-gray-300 space-y-2">
                                <li><strong>Nationality:</strong> No restrictions. Any nationality can be a director. / الجنسية: لا توجد قيود</li>
                                <li><strong>Residence:</strong> Directors do not need to live in the UK. / الإقامة: لا يشترط سكن المديرين في بريطانيا</li>
                                <li><strong>Office:</strong> You must have a physical UK registered office address. / المكتب: يجب أن يكون لديك عنوان مكتب مسجل</li>
                            </ul>

                            {/* Inline CTA: Search Bar */}
                            <div className="my-12 p-8 bg-primary/5 dark:bg-primary/10 rounded-xl border border-primary/20 flex flex-col items-center text-center">
                                <h4 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">Check Company Name Availability</h4>
                                <span className="text-lg font-bold text-primary mb-2" dir="rtl">التحقق من توافر اسم الشركة</span>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">Instantly search the official UK registry / ابحث فوراً في السجل البريطاني الرسمي</p>
                                <div className="flex flex-col sm:flex-row w-full max-w-md gap-2">
                                    <input 
                                        className="flex-1 rounded-lg border border-gray-300 dark:bg-gray-800 dark:border-gray-700 focus:ring-primary focus:border-primary px-4 py-2 outline-none text-slate-900 dark:text-white text-sm" 
                                        placeholder="Enter business name / أدخل اسم الشركة..." 
                                        type="text"
                                    />
                                    <button 
                                        onClick={() => onNavigate('wizard')} 
                                        className="bg-primary text-white font-bold px-6 py-2 rounded-lg text-sm flex flex-col items-center justify-center min-w-[120px] hover:bg-primary/90 transition-colors"
                                    >
                                        <span>Check Now</span>
                                        <span className="text-[10px] font-normal">تحقق الآن</span>
                                    </button>
                                </div>
                            </div>

                            <div className="flex flex-col gap-1 mt-8 mb-4">
                                <h2 id="steps" className="text-3xl font-bold text-[#0e141b] dark:text-white m-0">2. Step-by-Step Registration Guide</h2>
                                <span className="text-lg font-normal text-gray-500 block" dir="rtl">٢. دليل التسجيل خطوة بخطوة</span>
                            </div>
                            
                            <p className="text-slate-700 dark:text-gray-300 mb-5 leading-relaxed">The process of <strong>UK Ltd Registration</strong> for global founders can be completed in four primary phases:</p>
                            
                            <div className="flex flex-col gap-1 mt-6 mb-3">
                                <h3 className="text-2xl font-semibold text-[#0e141b] dark:text-white m-0">Phase 1: Company Structure</h3>
                                <span className="text-base font-normal text-gray-500 block" dir="rtl">المرحلة الأولى: هيكل الشركة</span>
                            </div>
                            <p className="text-slate-700 dark:text-gray-300 mb-5 leading-relaxed">Select your Standard Industrial Classification (SIC) code. This 5-digit number informs the government of your business activity.</p>

                            {/* Pro Tip Highlight */}
                            <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-400 p-4 my-6">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="material-symbols-outlined text-amber-600">lightbulb</span>
                                    <span className="font-bold text-amber-800 dark:text-amber-400">Pro Tip for Global Founders / نصيحة للمؤسسين</span>
                                </div>
                                <p className="text-sm text-amber-900 dark:text-amber-200 m-0">Need help with complex cross-border documentation? Visit <a className="font-bold underline cursor-pointer" onClick={() => onNavigate('vendor')}>Blue Ocean Hub</a> for specialized non-resident support.</p>
                            </div>

                            <div className="flex flex-col gap-1 mt-8 mb-4">
                                <h2 id="compliance" className="text-3xl font-bold text-[#0e141b] dark:text-white m-0">3. Compliance Checklist</h2>
                                <span className="text-lg font-normal text-gray-500 block" dir="rtl">٣. قائمة مراجعة الامتثال</span>
                            </div>
                            
                            <ul className="list-disc pl-6 mb-5 text-slate-700 dark:text-gray-300 space-y-2">
                                <li><strong>Confirmation Statement:</strong> Annual filing. / بيان التأكيد: إيداع سنوي</li>
                                <li><strong>Corporation Tax:</strong> Register within 3 months. / ضريبة الشركات: التسجيل خلال ٣ أشهر</li>
                            </ul>

                            {/* Secondary CTA */}
                            <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 p-6 bg-gray-900 text-white rounded-xl">
                                <div className="flex-1">
                                    <h4 className="text-xl font-bold mb-1">Schedule a Consultation</h4>
                                    <p className="text-sm text-gray-400">Speak with a UK tax specialist / تحدث مع أخصائي ضرائب بريطاني</p>
                                </div>
                                <a className="bg-white text-gray-900 px-8 py-3 rounded-lg font-black hover:bg-gray-100 transition-colors flex flex-col items-center cursor-pointer">
                                    <span>Book Now</span>
                                    <span className="text-[10px] font-bold">احجز الآن</span>
                                </a>
                            </div>
                        </article>

                        {/* Author Bio */}
                        <div className="mt-16 p-8 border-t border-gray-200 dark:border-gray-800 flex items-start gap-6 cursor-pointer hover:bg-gray-50 dark:hover:bg-white/5 transition-colors rounded-xl" onClick={() => onNavigate('expert-profile')}>
                            <div className="size-20 rounded-full bg-gray-200 overflow-hidden flex-shrink-0 border-2 border-primary/20">
                                <img 
                                    alt="Author Headshot" 
                                    className="w-full h-full object-cover" 
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVqMj8ld-OXSf1Y2foKSumt6LdaFRNjrBfiL6KLJcozlLnNNQvAkz3ajhmXZAGQgW2YAb3xz02nPoEStfNamP-fc-m-AIteCmWo4QDa9QdX5jSVP7PdEYGBPIlYy1snT2E5EaraQ6uKrbhzaKNZ0LQpSQU2CjBwrhgTJWTkzFwTRivpdePS9Wr-uv8S6U5xz1AVpA21X1-PkBGmNGBd4wJ52ToEnnKwAfJdK-Ku0LaPiD6-gaVOArcdp2gjpcOp-jzmKTQO9ojp_iY"
                                />
                            </div>
                            <div>
                                <h5 className="text-lg font-bold mb-1 text-slate-900 dark:text-white flex items-center gap-2">
                                    Alexander Thorne 
                                    <span className="material-symbols-outlined text-primary text-sm" title="Verified Expert">verified</span>
                                </h5>
                                <p className="text-sm text-primary font-semibold mb-2">Senior Corporate Solicitor / مستشار شركات أول</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Alexander has over 15 years of experience helping international businesses navigate UK law. Click to view full credentials.</p>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <aside className="w-full lg:w-80 flex flex-col gap-8">
                        {/* Table of Contents */}
                        <div className="bg-white dark:bg-[#1a242f] p-6 rounded-xl border border-gray-200 dark:border-gray-800 sticky top-24">
                            <h4 className="text-sm font-bold uppercase tracking-widest text-[#507095] mb-4">On this page / في هذه الصفحة</h4>
                            <nav className="flex flex-col gap-1">
                                <a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary font-semibold cursor-pointer" href="#eligibility">
                                    <span className="material-symbols-outlined text-xl">account_circle</span>
                                    <div className="flex flex-col">
                                        <span className="text-sm">UK Eligibility</span>
                                        <span className="text-[10px] opacity-70">الأهلية في بريطانيا</span>
                                    </div>
                                </a>
                                <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer" href="#steps">
                                    <span className="material-symbols-outlined text-xl">list_alt</span>
                                    <div className="flex flex-col">
                                        <span className="text-sm">Registration Guide</span>
                                        <span className="text-[10px] opacity-70">دليل التسجيل</span>
                                    </div>
                                </a>
                                <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer" href="#compliance">
                                    <span className="material-symbols-outlined text-xl">verified</span>
                                    <div className="flex flex-col">
                                        <span className="text-sm">Compliance Checklist</span>
                                        <span className="text-[10px] opacity-70">قائمة الامتثال</span>
                                    </div>
                                </a>
                            </nav>
                            <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-800">
                                <h4 className="text-sm font-bold uppercase tracking-widest text-[#507095] mb-4">Related / موارد ذات صلة</h4>
                                <ul className="flex flex-col gap-4">
                                    <li>
                                        <a className="group cursor-pointer">
                                            <p className="text-sm font-bold group-hover:text-primary transition-colors text-slate-800 dark:text-white">UK Bank Accounts / الحسابات البنكية</p>
                                            <p className="text-xs text-gray-500 mt-1">4 min read</p>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </aside>
                </div>
            </main>

            {/* Floating Language Toggle */}
            <div className="fixed bottom-6 right-6 z-[60]">
                <button className="bg-white dark:bg-gray-800 shadow-2xl border border-gray-200 dark:border-gray-700 rounded-full pl-4 pr-2 py-2 flex items-center gap-3 hover:scale-105 transition-transform">
                    <div className="flex flex-col items-end">
                        <span className="text-xs font-bold text-gray-900 dark:text-white leading-none">English</span>
                        <span className="text-[10px] text-primary leading-none mt-0.5">العربية</span>
                    </div>
                    <div className="bg-primary text-white size-8 rounded-full flex items-center justify-center">
                        <span className="material-symbols-outlined text-lg">language</span>
                    </div>
                </button>
            </div>

            {/* SEO Rich Footer */}
            <footer className="bg-[#0e141b] text-gray-400 py-16">
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12">
                        <div className="col-span-2">
                            <div className="flex items-center gap-3 text-white mb-6 cursor-pointer" onClick={() => onNavigate('landing')}>
                                <div className="text-primary size-6">
                                    <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                        <path clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fillRule="evenodd"></path>
                                    </svg>
                                </div>
                                <h2 className="text-lg font-bold">UK Ltd Portal</h2>
                            </div>
                            <p className="text-sm leading-relaxed max-w-sm">
                                The UK's leading platform for international company formation, professional registered office addresses, and ongoing corporate compliance.
                            </p>
                            <p className="text-sm mt-4 italic text-gray-500" dir="rtl">المنصة الرائدة في المملكة المتحدة لتأسيس الشركات الدولية وعناوين المكاتب المسجلة المهنية.</p>
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-6">Formation / التأسيس</h4>
                            <ul className="space-y-4 text-sm">
                                <li><a className="hover:text-primary transition-colors cursor-pointer" onClick={() => onNavigate('wizard')}>Standard LTD / شركة محدودة</a></li>
                                <li><a className="hover:text-primary transition-colors cursor-pointer" onClick={() => onNavigate('landing')}>Non-Resident / لغير المقيمين</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-6">Compliance / الامتثال</h4>
                            <ul className="space-y-4 text-sm">
                                <li><a className="hover:text-primary transition-colors cursor-pointer" onClick={() => onNavigate('compliance')}>VAT / ضريبة القيمة المضافة</a></li>
                                <li><a className="hover:text-primary transition-colors cursor-pointer">Director / خدمات المدير</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex flex-col gap-1">
                            <p className="text-xs">© 2025 UK Ltd Registration Portal. All Rights Reserved.</p>
                            <p className="text-[11px] font-semibold text-gray-500">
                                Powered by BookMeThat / بدعم من BookMeThat
                            </p>
                        </div>
                        <div className="flex gap-6 text-xs">
                            <a className="hover:text-white cursor-pointer">Privacy Policy</a>
                            <a className="hover:text-white cursor-pointer">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};
