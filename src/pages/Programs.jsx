import React from 'react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Programs = () => {
    const programs = [
        {
            id: 1,
            title: "Youth Mentorship Program",
            description: "One-on-one mentorship connecting young people with experienced professionals who guide them through personal and academic challenges.",
            features: [
                "Weekly mentoring sessions",
                "Goal setting and accountability",
                "Career exploration and guidance",
                "Life skills development"
            ],
            icon: "👥",
            color: "from-purple-500 to-pink-500"
        },
        {
            id: 2,
            title: "Academic Excellence Initiative",
            description: "Comprehensive tutoring and educational support to help students achieve their full academic potential.",
            features: [
                "Free tutoring in core subjects",
                "SAT/ACT prep courses",
                "College application assistance",
                "Scholarship guidance"
            ],
            icon: "📚",
            color: "from-blue-500 to-cyan-500"
        },
        {
            id: 3,
            title: "Leadership Development",
            description: "Empowering youth to become confident leaders in their communities through workshops and hands-on experiences.",
            features: [
                "Leadership workshops",
                "Public speaking training",
                "Community service projects",
                "Youth council participation"
            ],
            icon: "🌟",
            color: "from-orange-500 to-red-500"
        },
        {
            id: 4,
            title: "Career Readiness Program",
            description: "Preparing young people for successful careers through skill-building, internships, and professional networking.",
            features: [
                "Resume and interview prep",
                "Internship placements",
                "Professional networking events",
                "Industry exposure visits"
            ],
            icon: "💼",
            color: "from-green-500 to-teal-500"
        },
        {
            id: 5,
            title: "Arts & Creative Expression",
            description: "Fostering creativity and self-expression through various artistic mediums and cultural activities.",
            features: [
                "Music and performing arts",
                "Visual arts workshops",
                "Creative writing programs",
                "Cultural celebrations"
            ],
            icon: "🎨",
            color: "from-pink-500 to-purple-500"
        },
        {
            id: 6,
            title: "Health & Wellness",
            description: "Promoting physical and mental well-being through sports, fitness activities, and wellness education.",
            features: [
                "Sports and fitness programs",
                "Mental health support",
                "Nutrition education",
                "Stress management workshops"
            ],
            icon: "💪",
            color: "from-cyan-500 to-blue-500"
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <Section className="bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 text-white py-20">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
                        Our Programs
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
                        Comprehensive programs designed to empower youth and unlock their full potential
                    </p>
                </div>
            </Section>

            {/* Programs Grid */}
            <Section className="py-16">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Transformative Opportunities
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Each program is carefully crafted to address specific needs and create lasting impact in the lives of young people.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {programs.map((program, index) => (
                            <Card
                                key={program.id}
                                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${program.color} flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    {program.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                    {program.title}
                                </h3>
                                <p className="text-gray-600 mb-4 leading-relaxed">
                                    {program.description}
                                </p>
                                <ul className="space-y-2 mb-6">
                                    {program.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start text-gray-700">
                                            <span className="text-green-500 mr-2 mt-1">✓</span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Button
                                    variant="outline"
                                    className="w-full group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:text-white group-hover:border-transparent transition-all duration-300"
                                >
                                    Learn More
                                </Button>
                            </Card>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Impact Stats */}
            <Section className="bg-gradient-to-br from-gray-900 to-gray-800 text-black py-16">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                        Program Impact
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { number: "500+", label: "Youth Served Annually" },
                            { number: "95%", label: "Program Satisfaction" },
                            { number: "1000+", label: "Mentoring Hours" },
                            { number: "85%", label: "College Enrollment Rate" }
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-gray-300 text-lg">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* CTA Section */}
            <Section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Ready to Get Started?
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                        Join one of our programs and start your journey to success today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                            Apply Now
                        </Button>
                        <Button size="lg" variant="outline">
                            Contact Us
                        </Button>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Programs;
