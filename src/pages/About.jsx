import React from 'react';
import { Target, Eye, Heart, Users, Award, TrendingUp, MapPin, Calendar } from 'lucide-react';
import ImageGallery from '../components/ui/ImageGallery';
import CountUp from '../components/ui/CountUp';

const About = () => {
    const teamPhotos = [
        {
            src: `${import.meta.env.BASE_URL}assets/imgs/group-smiling.jpg`,
            alt: 'RLF team members',
            title: 'Our Team',
            description: 'Dedicated professionals committed to youth empowerment'
        },
        {
            src: `${import.meta.env.BASE_URL}images/hero-group.jpg`,
            alt: 'Community event',
            title: 'Community Engagement',
            description: 'Building strong relationships in our community'
        },
        {
            src: `${import.meta.env.BASE_URL}images/volunteer-mentor.png`,
            alt: 'Mentors and students',
            title: 'Mentorship in Action',
            description: 'Creating meaningful connections'
        },
        {
            src: `${import.meta.env.BASE_URL}assets/imgs/gallery-2.jpg`,
            alt: 'Youth workshop',
            title: 'Youth Development',
            description: 'Empowering the next generation'
        },
        {
            src: `${import.meta.env.BASE_URL}images/team-stadium.jpg`,
            alt: 'Team at stadium',
            title: 'Team Building',
            description: 'Together we achieve more'
        },
        {
            src: `${import.meta.env.BASE_URL}images/back-to-school-volunteer.jpg`,
            alt: 'Volunteers helping',
            title: 'Volunteer Impact',
            description: 'Community members making a difference'
        }
    ];

    const values = [
        {
            icon: Heart,
            title: 'Compassion',
            description: 'We lead with empathy and understanding, creating a supportive environment for every youth we serve.'
        },
        {
            icon: Award,
            title: 'Excellence',
            description: 'We strive for the highest standards in all our programs and services, ensuring quality outcomes.'
        },
        {
            icon: Users,
            title: 'Community',
            description: 'We believe in the power of community and collaboration to create lasting positive change.'
        },
        {
            icon: TrendingUp,
            title: 'Empowerment',
            description: 'We equip youth with the tools, knowledge, and confidence to achieve their full potential.'
        }
    ];

    const milestones = [
        { year: '2013', event: 'Foundation Established', description: 'Ronnia Langston Foundation was founded as a 501(c)(3) non-profit organization' },
        { year: '2015', event: 'First School Partnerships', description: 'Began working with high schools in the Dallas-Fort Worth area' },
        { year: '2018', event: 'University Collaborations', description: 'Expanded to partner with 6 universities for college readiness programs' },
        { year: '2020', event: 'Virtual Programs Launch', description: 'Adapted programs to serve youth during challenging times' },
        { year: '2024', event: '140+ School Partners', description: 'Now serving students across 140+ high schools and 6 universities' }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-600 to-purple-600 text-white py-20">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
                        About Us
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                        Transforming lives since 2013
                    </p>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full font-semibold text-sm mb-6">
                                <Calendar className="w-4 h-4" />
                                Our Story
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                                A Foundation Built on Hope
                            </h2>
                            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                                <p>
                                    The Ronnia Langston Foundation was established in 2013 as a registered 501(c)(3) non-profit organization with a clear mission: to transform the lives of youth around the world through mentoring, financial literacy, entrepreneurship, academic support, and community service opportunities.
                                </p>
                                <p>
                                    What started as a vision to help a few students has grown into a comprehensive program serving thousands of young people across the Dallas-Fort Worth metropolitan area. We partner with over 140 high schools, 6 universities, and municipal court systems to provide life-changing opportunities.
                                </p>
                                <p>
                                    Our programs are designed to address the whole person—developing not just academic skills, but also character, financial literacy, entrepreneurial thinking, and a commitment to community service.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-square rounded-3xl shadow-2xl overflow-hidden">
                                <img
                                    src={`${import.meta.env.BASE_URL}assets/imgs/about-image.jpg`}
                                    alt="Ronnia Langston Foundation - 10+ Years of Impact"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission, Vision & Location */}
            <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Mission */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                                <Target className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Mission</h3>
                            <p className="text-gray-600 leading-relaxed">
                                To transform the lives of youth around the world through mentoring, financial literacy, entrepreneurship, academic and extra-curricular support, and community service opportunities.
                            </p>
                        </div>

                        {/* Vision */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                                <Eye className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Vision</h3>
                            <p className="text-gray-600 leading-relaxed">
                                A world where every young person has access to the resources, mentorship, and opportunities they need to achieve their full potential and become leaders in their communities.
                            </p>
                        </div>

                        {/* Location */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-6">
                                <MapPin className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Location</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Based in Plano, Texas, we serve the Dallas-Fort Worth metropolitan area, working with 140+ high schools and 6 universities to reach thousands of students.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                            Our Core Values
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            The principles that guide everything we do
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <div
                                    key={index}
                                    className="text-center group hover:-translate-y-2 transition-transform duration-300"
                                >
                                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <Icon className="w-10 h-10 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h3>
                                    <p className="text-gray-600">{value.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                            Our Journey
                        </h2>
                        <p className="text-xl text-gray-600">
                            Key milestones in our mission to empower youth
                        </p>
                    </div>

                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

                        {/* Timeline Items */}
                        <div className="space-y-12">
                            {milestones.map((milestone, index) => (
                                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                    {/* Timeline Dot */}
                                    <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg transform -translate-x-1/2"></div>

                                    {/* Content */}
                                    <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                                        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                                            <div className="text-3xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.event}</h3>
                                            <p className="text-gray-600">{milestone.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Gallery */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                            Our People & Community
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Meet the dedicated team and volunteers who make our mission possible
                        </p>
                    </div>
                    <ImageGallery images={teamPhotos} columns={3} />
                </div>
            </section>

            {/* Service Area */}
            <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Serving the Dallas-Fort Worth Community
                        </h2>
                        <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
                            We work with schools, universities, and municipal court systems across the DFW metropolitan area to provide comprehensive youth development programs.
                        </p>
                        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                                <div className="text-4xl font-bold text-yellow-300 mb-2">
                                    <CountUp end={140} suffix="+" duration={2500} />
                                </div>
                                <div className="text-lg font-semibold">High Schools</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                                <div className="text-4xl font-bold text-yellow-300 mb-2">
                                    <CountUp end={6} suffix="+" duration={2500} />
                                </div>
                                <div className="text-lg font-semibold">Universities</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                                <div className="text-4xl font-bold text-yellow-300 mb-2">DFW</div>
                                <div className="text-lg font-semibold">Metropolitan Area</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
