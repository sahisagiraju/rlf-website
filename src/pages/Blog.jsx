import React, { useState } from 'react';
import { Calendar, User, Tag, Clock, ArrowRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');

    const categories = ['All', 'Youth Development', 'Success Stories', 'Events', 'Community Impact', 'Tips & Advice'];

    const blogPosts = [
        {
            id: 1,
            title: 'Empowering Youth Through Financial Literacy',
            excerpt: 'Learn how our financial literacy program is helping young people build a solid foundation for their financial future...',
            category: 'Youth Development',
            author: 'Sarah Johnson',
            date: 'December 10, 2024',
            readTime: '5 min read',
            image: `${import.meta.env.BASE_URL}assets/imgs/gallery-1.jpg`,
            featured: true
        },
        {
            id: 2,
            title: 'Success Story: From Mentee to College Graduate',
            excerpt: 'Meet Marcus, whose journey from high school student to university success showcases the power of mentorship...',
            category: 'Success Stories',
            author: 'Michael Chen',
            date: 'December 8, 2024',
            readTime: '7 min read',
            image: `${import.meta.env.BASE_URL}assets/imgs/gallery-2.jpg`,
            featured: true
        },
        {
            id: 3,
            title: 'Back to School Event 2024 Recap',
            excerpt: 'Our annual back-to-school event brought together hundreds of students, volunteers, and community members...',
            category: 'Events',
            author: 'Jessica Williams',
            date: 'December 5, 2024',
            readTime: '4 min read',
            image: `${import.meta.env.BASE_URL}images/back-to-school-volunteer.jpg`,
            featured: false
        },
        {
            id: 4,
            title: 'Building Leadership Skills in Young People',
            excerpt: 'Discover the key components of our leadership development program and how it transforms lives...',
            category: 'Youth Development',
            author: 'David Martinez',
            date: 'December 3, 2024',
            readTime: '6 min read',
            image: `${import.meta.env.BASE_URL}images/team-stadium.jpg`,
            featured: false
        },
        {
            id: 5,
            title: 'Community Service: Making a Difference Together',
            excerpt: 'Our community service initiatives connect youth with opportunities to give back and develop character...',
            category: 'Community Impact',
            author: 'Angela Davis',
            date: 'November 30, 2024',
            readTime: '5 min read',
            image: `${import.meta.env.BASE_URL}images/community-service.png`,
            featured: false
        },
        {
            id: 6,
            title: '10 Tips for Parents Supporting Youth Development',
            excerpt: 'Expert advice on how parents can support their children\'s growth and development...',
            category: 'Tips & Advice',
            author: 'Dr. Robert Lee',
            date: 'November 28, 2024',
            readTime: '8 min read',
            image: `${import.meta.env.BASE_URL}assets/imgs/gallery-4.jpg`,
            featured: false
        }
    ];

    const filteredPosts = blogPosts.filter(post => {
        const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const featuredPosts = filteredPosts.filter(post => post.featured);
    const regularPosts = filteredPosts.filter(post => !post.featured);

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 text-white py-20">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
                            RLF Blog
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 mb-8">
                            Stories, insights, and updates from the Ronnia Langston Foundation
                        </p>

                        {/* Search Bar */}
                        <div className="relative max-w-xl mx-auto">
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full px-6 py-4 pl-14 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/30 text-lg"
                            />
                            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
                        </div>
                    </div>
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
                                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Posts */}
            {featuredPosts.length > 0 && (
                <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold mb-8 text-gray-900">Featured Articles</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {featuredPosts.map((post) => (
                                <article
                                    key={post.id}
                                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                                >
                                    <div className="relative overflow-hidden aspect-video">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full font-semibold text-sm">
                                            Featured
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                                            <span className="flex items-center gap-1">
                                                <Calendar className="w-4 h-4" />
                                                {post.date}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-4 h-4" />
                                                {post.readTime}
                                            </span>
                                        </div>
                                        <div className="inline-block bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                                            <Tag className="w-3 h-3 inline mr-1" />
                                            {post.category}
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                                            {post.title}
                                        </h3>
                                        <p className="text-gray-600 mb-4 line-clamp-2">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <span className="flex items-center gap-2 text-sm text-gray-700">
                                                <User className="w-4 h-4" />
                                                {post.author}
                                            </span>
                                            <button className="flex items-center gap-2 text-purple-600 font-semibold hover:gap-3 transition-all">
                                                Read More
                                                <ArrowRight className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Regular Posts Grid */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold mb-8 text-gray-900">Latest Articles</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {regularPosts.map((post) => (
                            <article
                                key={post.id}
                                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                            >
                                <div className="relative overflow-hidden aspect-video">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-4 text-xs text-gray-600 mb-3">
                                        <span className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3" />
                                            {post.date}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Clock className="w-3 h-3" />
                                            {post.readTime}
                                        </span>
                                    </div>
                                    <div className="inline-block bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                                        {post.category}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-gray-700 flex items-center gap-1">
                                            <User className="w-3 h-3" />
                                            {post.author}
                                        </span>
                                        <button className="text-purple-600 font-semibold text-sm hover:gap-2 transition-all flex items-center gap-1">
                                            Read
                                            <ArrowRight className="w-3 h-3" />
                                        </button>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter Signup */}
            <section className="py-16 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Stay Updated
                    </h2>
                    <p className="text-xl text-purple-100 mb-8">
                        Subscribe to our newsletter to receive the latest stories and updates
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/30"
                        />
                        <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors whitespace-nowrap">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;
