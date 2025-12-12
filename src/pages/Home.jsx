import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, BookOpen, TrendingUp, Award, Target, ArrowRight, Sparkles } from 'lucide-react';
import Button from '../components/ui/Button';

const Home = () => {
    const focusAreas = [
        {
            icon: Users,
            title: 'Mentoring',
            description: 'One-on-one guidance to help youth develop confidence, skills, and a vision for their future.',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            icon: TrendingUp,
            title: 'Entrepreneurship',
            description: 'Teaching business fundamentals and fostering innovative thinking to create future leaders.',
            color: 'from-purple-500 to-pink-500'
        },
        {
            icon: BookOpen,
            title: 'Financial Literacy',
            description: 'Empowering youth with essential money management skills for lifelong financial success.',
            color: 'from-orange-500 to-red-500'
        },
        {
            icon: Award,
            title: 'Academic Support',
            description: 'Providing resources and tutoring to help students excel in their educational journey.',
            color: 'from-green-500 to-emerald-500'
        },
        {
            icon: Heart,
            title: 'Community Service',
            description: 'Building character through volunteerism and giving back to the community.',
            color: 'from-pink-500 to-rose-500'
        },
        {
            icon: Sparkles,
            title: 'Arts & Youth Development',
            description: 'Fostering creativity and self-expression through arts programs and cultural activities.',
            color: 'from-indigo-500 to-purple-500'
        }
    ];

    const stats = [
        { number: '140+', label: 'High Schools', description: 'Partner schools in DFW' },
        { number: '6+', label: 'Universities', description: 'College partnerships' },
        { number: '1000+', label: 'Youth Served', description: 'Lives transformed' },
        { number: '10+', label: 'Years', description: 'Of dedicated service' }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative text-white overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/assets/imgs/hero-background.jpg')", backgroundPosition: "center 30%" }}></div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/70 to-pink-900/80"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
                    <div className="text-center animate-fade-in">
                        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
                            Opportunities for <span className="text-yellow-300">Youth</span>
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
                            Transforming lives through mentoring, entrepreneurship, internships, volunteerism, and arts development
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link to="/get-involved">
                                <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-xl flex items-center gap-2">
                                    Get Involved
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </Link>
                            <Link to="/donate">
                                <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                                    <Heart className="w-5 h-5" />
                                    Donate Now
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Wave Divider */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
                    </svg>
                </div>
            </section>

            {/* Mission Statement */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full font-semibold text-sm mb-6">
                                <Target className="w-4 h-4" />
                                Our Mission
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                                Empowering the Next Generation
                            </h2>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                The Ronnia Langston Foundation is dedicated to transforming the lives of youth around the world through comprehensive programs in mentoring, financial literacy, entrepreneurship, academic support, and community service. We work with over 140 high schools and 6 universities in the Dallas-Fort Worth metropolitan area.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="rounded-3xl shadow-2xl overflow-hidden">
                                <img
                                    src="/assets/imgs/mission-image.jpg"
                                    alt="Youth participating in RLF programs"
                                    className="w-full h-full object-cover aspect-[4/3]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Focus Areas */}
            <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                            Our Focus Areas
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Comprehensive programs designed to nurture every aspect of youth development
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {focusAreas.map((area, index) => {
                            const Icon = area.icon;
                            return (
                                <div
                                    key={index}
                                    className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${area.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3 text-gray-900">{area.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{area.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Impact Stats */}
            <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Our Impact
                        </h2>
                        <p className="text-xl text-blue-100">
                            Making a difference in communities across Dallas-Fort Worth
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                                <div className="text-5xl md:text-6xl font-extrabold mb-2 text-yellow-300">
                                    {stat.number}
                                </div>
                                <div className="text-xl font-semibold mb-1">{stat.label}</div>
                                <div className="text-sm text-blue-200">{stat.description}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Volunteer Call to Action */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-3xl p-8 md:p-12 border border-orange-100 shadow-xl">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Users className="w-8 h-8 text-white" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                                Volunteers Needed!
                            </h2>
                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                RLF currently needs volunteers who will help students apply for college and for college scholarships. If you are that person, please complete our Volunteer Form on the Get Involved page.
                            </p>
                            <Link to="/get-involved">
                                <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-2 mx-auto">
                                    Become a Volunteer
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* RLF Student Club */}
            <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-600 px-4 py-2 rounded-full font-semibold text-sm mb-6">
                                <Sparkles className="w-4 h-4" />
                                Student Programs
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                                RLF Student Club
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Join our vibrant student community where young leaders come together to learn, grow, and make a difference. Our student club offers exclusive opportunities for personal development, networking, and community impact.
                            </p>
                            <Link to="/programs">
                                <button className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors duration-300 flex items-center gap-2">
                                    Learn More About Our Programs
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </Link>
                        </div>
                        <div className="relative">
                            <div className="aspect-square rounded-3xl shadow-2xl overflow-hidden">
                                <img
                                    src="/assets/imgs/group-smiling.jpg"
                                    alt="RLF Student Club - Building Future Leaders"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Photo Gallery */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                            Our Impact in Action
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            See the difference we're making in the lives of young people across the Dallas-Fort Worth area
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {/* Large featured image */}
                        <div className="col-span-2 row-span-2">
                            <div className="rounded-2xl overflow-hidden shadow-lg h-full hover:shadow-2xl transition-shadow duration-300">
                                <img
                                    src="/assets/imgs/gallery-1.jpg"
                                    alt="RLF students engaged in learning activities"
                                    className="w-full h-full object-cover object-center"
                                />
                            </div>
                        </div>

                        {/* Smaller gallery images */}
                        <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                            <img
                                src="/assets/imgs/gallery-2.jpg"
                                alt="Youth mentorship session"
                                className="w-full h-full object-cover object-center aspect-square"
                            />
                        </div>

                        <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                            <img
                                src="/assets/imgs/gallery-3.jpg"
                                alt="Community service project"
                                className="w-full h-full object-cover object-center aspect-square"
                            />
                        </div>

                        <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                            <img
                                src="/assets/imgs/gallery-4.jpg"
                                alt="Student achievement celebration"
                                className="w-full h-full object-cover object-center aspect-square"
                            />
                        </div>

                        <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                            <img
                                src="/assets/imgs/gallery-5.jpg"
                                alt="RLF workshop and training"
                                className="w-full h-full object-cover object-center aspect-square"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 bg-gray-900 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Ready to Make a Difference?
                    </h2>
                    <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                        Whether through volunteering, donating, or partnering with us, your support helps transform young lives.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/get-involved">
                            <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                                Get Involved
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </Link>
                        <Link to="/donate">
                            <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                                <Heart className="w-5 h-5" />
                                Support Our Mission
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Spacer for footer visibility */}
            <div className="h-20 bg-gray-100"></div>
        </div>
    );
};

export default Home;

