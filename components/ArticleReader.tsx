
import React from 'react';
import { Article } from '../types';
import { ARTICLES } from '../data/articles';

export const ArticleReader = ({ articleId, onNavigate }: { articleId: string, onNavigate: (view: string, id?: string) => void }) => {
    const article = ARTICLES.find(a => a.id === articleId);
    
    if (!article) return <div className="p-20 text-center">Article not found.</div>;

    const relatedArticles = ARTICLES.filter(a => article.relatedIds.includes(a.id));

    return (
        <div className="bg-white dark:bg-[#0a0f18] min-h-screen animate-fade-in">
            {/* Minimal Header for Reading */}
            <div className="max-w-4xl mx-auto px-6 py-12">
                <button 
                    onClick={() => onNavigate('resources')}
                    className="flex items-center gap-2 text-primary font-bold text-sm mb-10 hover:translate-x-[-4px] transition-transform"
                >
                    <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                    Back to Knowledge Hub
                </button>

                <div className="mb-8">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-[10px] font-black uppercase tracking-widest">
                        {article.tag}
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white mt-4 leading-[1.1]">
                        {article.title}
                    </h1>
                    {article.subtitle && (
                        <p className="text-xl text-slate-500 dark:text-slate-400 mt-4 leading-relaxed">
                            {article.subtitle}
                        </p>
                    )}
                    <div className="flex items-center gap-4 mt-8 text-xs font-bold text-slate-400 uppercase tracking-widest border-t border-slate-100 dark:border-slate-800 pt-6">
                        <span>{article.date}</span>
                        <span>•</span>
                        <span>{article.readTime} Read</span>
                    </div>
                </div>

                <div className="aspect-video w-full rounded-[2.5rem] overflow-hidden border border-slate-100 dark:border-slate-800 shadow-2xl mb-12">
                    <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-8">
                        <article 
                            className="prose prose-lg dark:prose-invert max-w-none 
                                prose-headings:font-black prose-headings:tracking-tight
                                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                                prose-strong:text-slate-900 dark:prose-strong:text-white"
                            dangerouslySetInnerHTML={{ __html: article.content }}
                        />
                        
                        <div className="mt-20 pt-12 border-t border-slate-100 dark:border-slate-800">
                            <h4 className="text-xl font-black mb-8 text-slate-900 dark:text-white">Ready to take the next step?</h4>
                            <div className="bg-slate-900 rounded-3xl p-10 text-white flex flex-col md:flex-row items-center justify-between gap-8">
                                <div>
                                    <p className="text-2xl font-bold mb-2">Form your UK LTD online.</p>
                                    <p className="text-slate-400">Our AI-powered process is built for global founders.</p>
                                </div>
                                <button 
                                    onClick={() => onNavigate('wizard')}
                                    className="bg-primary text-white font-black px-10 py-5 rounded-full whitespace-nowrap hover:scale-105 transition-transform"
                                >
                                    Start Incorporation
                                </button>
                            </div>
                        </div>
                    </div>

                    <aside className="lg:col-span-4 space-y-12">
                        <div className="sticky top-24 space-y-12">
                            <div>
                                <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6">Related Intelligence</h3>
                                <div className="flex flex-col gap-6">
                                    {relatedArticles.map(rel => (
                                        <div 
                                            key={rel.id} 
                                            onClick={() => onNavigate('article', rel.id)}
                                            className="group cursor-pointer flex flex-col gap-3"
                                        >
                                            <div className="aspect-video w-full rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800">
                                                <img src={rel.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                                            </div>
                                            <h4 className="font-bold text-sm leading-tight text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                                                {rel.title}
                                            </h4>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="p-8 bg-primary/5 rounded-[2rem] border border-primary/20">
                                <h4 className="font-black text-slate-900 dark:text-white mb-4">Expert Strategy</h4>
                                <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                                    Need specialized advice on UK taxes or banking?
                                </p>
                                <button 
                                    onClick={() => onNavigate('expert-profile')}
                                    className="w-full py-4 bg-white dark:bg-slate-800 text-primary font-black rounded-2xl text-sm border border-primary/20 hover:bg-primary hover:text-white transition-all"
                                >
                                    View Expert Profile
                                </button>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};
