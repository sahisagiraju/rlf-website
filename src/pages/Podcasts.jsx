import React, { useState, useEffect } from 'react';
import { Play, Calendar, Clock, Headphones, Youtube } from 'lucide-react';
import client, { urlFor } from '../lib/sanityClient';

const Podcasts = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', 'Youth Stories', 'Expert Interviews', 'Community Leaders', 'Educational'];

    const [podcasts, setPodcasts] = useState([]);

    useEffect(() => {
        const q = `*[_type == "podcast"] | order(publishedAt desc){
            _id,
            title,
            episodeNumber,
            duration,
            publishedAt,
            summary,
            description,
            coverImage,
            audioFile,
            "categories": categories[]->title,
            "hosts": hosts[]->name,
            "guests": guests[]->name,
            externalLinks
        }`;

        client.fetch(q).then((data) => {
            const mapped = data.map((p, idx) => ({
                id: p._id || idx,
                title: p.title,
                description: p.summary || (p.description && Array.isArray(p.description) ? (p.description[0]?.children?.map(c => c.text).join(' ') || '') : ''),
                category: p.categories && p.categories.length ? p.categories[0] : 'General',
                date: p.publishedAt ? new Date(p.publishedAt).toLocaleDateString() : '',
                duration: p.duration || '',
                youtubeId: (() => {
                    // try to detect a youtube id in externalLinks
                    if (p.externalLinks && p.externalLinks.length) {
                        const you = p.externalLinks.find(l => l.url && l.url.includes('youtube.com') || (l.url && l.url.includes('youtu.be')));
                        if (you) {
                            const url = you.url;
                            const m = url.match(/(?:v=|youtu\.be\/)([A-Za-z0-9_-]{6,})/);
                            return m ? m[1] : null;
                        }
                    }
                    return null;
                })(),
                featured: idx < 2,
                thumbnail: p.coverImage ? urlFor(p.coverImage).width(1200).auto('format').url() : `${import.meta.env.BASE_URL}assets/imgs/gallery-1.jpg`,
                raw: p,
            }));

            setPodcasts(mapped);
        }).catch(err => console.error('Sanity fetch error (podcasts):', err));
    }, []);

    const filteredPodcasts = podcasts.filter(podcast =>
        selectedCategory === 'All' || podcast.category === selectedCategory
    );

    const featuredPodcasts = filteredPodcasts.filter(p => p.featured);
    const regularPodcasts = filteredPodcasts.filter(p => !p.featured);

    const VideoPlayer = ({ youtubeId, title }) => (
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${youtubeId}`}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0"
            ></iframe>
        </div>
    );

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-pink-600 via-purple-600 to-blue-600 text-white py-20">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="flex justify-center mb-6">
                        <div className="w-20 h-20 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center">
                            <Headphones className="w-10 h-10" />
                        </div>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
                        RLF Podcasts
                    </h1>
                    <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
                        Inspiring conversations about youth development, success stories, and community impact
                    </p>
                </div>
            </section>

            {/* Category Filter */}
            <section className="bg-white border-b border-gray-200 sticky top-0 z-30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-2 rounded-full font-semibold whitespace-nowrap transition-all duration-300 ${
                                    selectedCategory === category
                                        ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-lg'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Podcasts */}
            {featuredPodcasts.length > 0 && (
                <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold mb-8 text-gray-900 flex items-center gap-3">
                            <Youtube className="w-8 h-8 text-red-600" />
                            Featured Episodes
                        </h2>
                        <div className="space-y-12">
                            {featuredPodcasts.map((podcast) => (
                                <article key={podcast.id} className="bg-white rounded-3xl overflow-hidden shadow-xl">
                                    <div className="grid md:grid-cols-2 gap-8 p-8">
                                        <div>
                                            <VideoPlayer youtubeId={podcast.youtubeId} title={podcast.title} />
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <div className="inline-block bg-gradient-to-r from-pink-50 to-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4 w-fit">
                                                Featured
                                            </div>
                                            <h3 className="text-3xl font-bold text-gray-900 mb-4">
                                                {podcast.title}
                                            </h3>
                                            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                                                {podcast.description}
                                            </p>
                                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                                                <span className="flex items-center gap-2">
                                                    <Calendar className="w-4 h-4" />
                                                    {podcast.date}
                                                </span>
                                                <span className="flex items-center gap-2">
                                                    <Clock className="w-4 h-4" />
                                                    {podcast.duration}
                                                </span>
                                                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold">
                                                    {podcast.category}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Regular Podcasts Grid */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold mb-8 text-gray-900">All Episodes</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {regularPodcasts.map((podcast) => (
                            <article
                                key={podcast.id}
                                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                            >
                                <div className="relative">
                                    <div className="aspect-video overflow-hidden bg-gray-200">
                                        <img
                                            src={podcast.thumbnail}
                                            alt={podcast.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                                            <Play className="w-8 h-8 text-purple-600 ml-1" fill="currentColor" />
                                        </div>
                                    </div>
                                    <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                                        <Clock className="w-3 h-3" />
                                        {podcast.duration}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-2 text-xs text-gray-600 mb-3">
                                        <Calendar className="w-3 h-3" />
                                        {podcast.date}
                                    </div>
                                    <div className="inline-block bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                                        {podcast.category}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors line-clamp-2">
                                        {podcast.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm line-clamp-2">
                                        {podcast.description}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Subscribe CTA */}
            <section className="py-16 bg-gradient-to-br from-pink-600 to-purple-600 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Youtube className="w-16 h-16 mx-auto mb-6 opacity-90" />
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Subscribe to Our Channel
                    </h2>
                    <p className="text-xl text-purple-100 mb-8">
                        Don't miss out on new episodes featuring inspiring stories and expert insights
                    </p>
                    <a
                        href="https://youtube.com/@ronnialangstonfoundation"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
                    >
                        <Youtube className="w-6 h-6" />
                        Subscribe on YouTube
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Podcasts;
