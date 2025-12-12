import React, { useState } from 'react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const GetInvolved = () => {
    const [activeTab, setActiveTab] = useState('volunteer');

    const volunteerOpportunities = [
        {
            title: "Mentor",
            description: "Guide and inspire young people through one-on-one mentorship relationships.",
            commitment: "2-4 hours/week",
            icon: "🤝",
            requirements: [
                "Background check required",
                "6-month minimum commitment",
                "Attend orientation training",
                "Regular communication with mentee"
            ]
        },
        {
            title: "Tutor",
            description: "Help students excel academically by providing subject-specific tutoring support.",
            commitment: "3-5 hours/week",
            icon: "📖",
            requirements: [
                "Expertise in subject area",
                "Patient and encouraging attitude",
                "Flexible scheduling",
                "Progress tracking"
            ]
        },
        {
            title: "Event Volunteer",
            description: "Support our community events, fundraisers, and youth activities.",
            commitment: "Flexible",
            icon: "🎉",
            requirements: [
                "Enthusiastic team player",
                "Reliable and punctual",
                "Good communication skills",
                "Event-specific training provided"
            ]
        },
        {
            title: "Workshop Facilitator",
            description: "Lead workshops on career skills, life skills, or creative expression.",
            commitment: "Monthly",
            icon: "🎯",
            requirements: [
                "Professional expertise to share",
                "Public speaking experience",
                "Engaging presentation skills",
                "Curriculum development support"
            ]
        }
    ];

    const partnershipLevels = [
        {
            level: "Community Partner",
            amount: "$5,000+",
            benefits: [
                "Logo on website and materials",
                "Social media recognition",
                "Quarterly impact reports",
                "Invitation to annual gala"
            ],
            color: "from-blue-500 to-cyan-500"
        },
        {
            level: "Program Sponsor",
            amount: "$10,000+",
            benefits: [
                "All Community Partner benefits",
                "Named program sponsorship",
                "Speaking opportunity at events",
                "Custom volunteer opportunities",
                "Executive briefings"
            ],
            color: "from-purple-500 to-pink-500"
        },
        {
            level: "Transformational Partner",
            amount: "$25,000+",
            benefits: [
                "All Program Sponsor benefits",
                "Board advisory role",
                "Exclusive networking events",
                "Strategic partnership development",
                "Custom impact measurement"
            ],
            color: "from-orange-500 to-red-500"
        }
    ];

    const internshipInfo = {
        title: "Internship Opportunities",
        description: "Gain valuable experience while making a difference in the community.",
        positions: [
            {
                role: "Program Coordinator Intern",
                duration: "Summer (12 weeks)",
                responsibilities: [
                    "Assist with program planning and execution",
                    "Support youth participants",
                    "Data collection and reporting",
                    "Event coordination"
                ]
            },
            {
                role: "Marketing & Communications Intern",
                duration: "Semester-based (15 weeks)",
                responsibilities: [
                    "Social media content creation",
                    "Newsletter development",
                    "Photography and videography",
                    "Community outreach"
                ]
            },
            {
                role: "Development Intern",
                duration: "Flexible (10-15 hours/week)",
                responsibilities: [
                    "Grant research and writing",
                    "Donor database management",
                    "Fundraising event support",
                    "Sponsorship outreach"
                ]
            }
        ]
    };

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <Section className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white py-20">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
                        Get Involved
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
                        Join us in empowering youth and creating lasting change in our community
                    </p>
                </div>
            </Section>

            {/* Tabs Navigation */}
            <Section className="py-8 bg-white shadow-sm sticky top-0 z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            { id: 'volunteer', label: 'Volunteer', icon: '🙋' },
                            { id: 'partner', label: 'Partner', icon: '🤝' },
                            { id: 'intern', label: 'Internships', icon: '💼' },
                            { id: 'donate', label: 'Donate', icon: '❤️' }
                        ].map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === tab.id
                                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                <span className="mr-2">{tab.icon}</span>
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Volunteer Section */}
            {activeTab === 'volunteer' && (
                <Section className="py-16">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Volunteer Opportunities
                            </h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                Make a direct impact in the lives of young people by sharing your time, skills, and passion.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                            {volunteerOpportunities.map((opportunity, index) => (
                                <Card key={index} className="hover:shadow-xl transition-all duration-300">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="text-4xl">{opportunity.icon}</div>
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                                {opportunity.title}
                                            </h3>
                                            <p className="text-sm text-blue-600 font-semibold mb-2">
                                                {opportunity.commitment}
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 mb-4">
                                        {opportunity.description}
                                    </p>
                                    <div className="mb-4">
                                        <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                                        <ul className="space-y-1">
                                            {opportunity.requirements.map((req, idx) => (
                                                <li key={idx} className="flex items-start text-sm text-gray-700">
                                                    <span className="text-blue-500 mr-2">•</span>
                                                    {req}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                                        Apply to Volunteer
                                    </Button>
                                </Card>
                            ))}
                        </div>

                        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Not sure where to start?
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Contact our Volunteer Coordinator to discuss the best fit for your skills and interests.
                            </p>
                            <Button variant="outline" size="lg">
                                Schedule a Call
                            </Button>
                        </div>
                    </div>
                </Section>
            )}

            {/* Partnership Section */}
            {activeTab === 'partner' && (
                <Section className="py-16">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Corporate & Community Partnerships
                            </h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                Partner with us to create meaningful impact while enhancing your organization's community engagement.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                            {partnershipLevels.map((level, index) => (
                                <Card
                                    key={index}
                                    className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                                >
                                    <div className={`h-2 rounded-t-xl bg-gradient-to-r ${level.color} -mt-6 -mx-6 mb-6`}></div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                        {level.level}
                                    </h3>
                                    <div className={`text-3xl font-bold bg-gradient-to-r ${level.color} bg-clip-text text-transparent mb-6`}>
                                        {level.amount}
                                    </div>
                                    <ul className="space-y-3 mb-6">
                                        {level.benefits.map((benefit, idx) => (
                                            <li key={idx} className="flex items-start text-gray-700">
                                                <span className="text-blue-500 mr-2 mt-1">✓</span>
                                                <span>{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Button
                                        className={`w-full bg-gradient-to-r ${level.color} hover:opacity-90`}
                                    >
                                        Become a Partner
                                    </Button>
                                </Card>
                            ))}
                        </div>

                        <div className="bg-gray-900 text-white rounded-2xl p-8 md:p-12">
                            <div className="max-w-3xl mx-auto text-center">
                                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                    Custom Partnership Opportunities
                                </h3>
                                <p className="text-gray-300 mb-6">
                                    Every organization is unique. Let's create a partnership that aligns with your values and goals.
                                </p>
                                <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                                    Schedule a Partnership Discussion
                                </Button>
                            </div>
                        </div>
                    </div>
                </Section>
            )}

            {/* Internship Section */}
            {activeTab === 'intern' && (
                <Section className="py-16">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                {internshipInfo.title}
                            </h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                {internshipInfo.description}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                            {internshipInfo.positions.map((position, index) => (
                                <Card key={index} className="hover:shadow-xl transition-all duration-300">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        {position.role}
                                    </h3>
                                    <p className="text-sm text-purple-600 font-semibold mb-4">
                                        {position.duration}
                                    </p>
                                    <h4 className="font-semibold text-gray-900 mb-2">Key Responsibilities:</h4>
                                    <ul className="space-y-2 mb-6">
                                        {position.responsibilities.map((resp, idx) => (
                                            <li key={idx} className="flex items-start text-sm text-gray-700">
                                                <span className="text-blue-500 mr-2">•</span>
                                                {resp}
                                            </li>
                                        ))}
                                    </ul>
                                    <Button variant="outline" className="w-full">
                                        Apply Now
                                    </Button>
                                </Card>
                            ))}
                        </div>

                        <Card className="bg-gradient-to-br from-blue-50 to-purple-50">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                What You'll Gain
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    "Hands-on nonprofit experience",
                                    "Professional development opportunities",
                                    "Networking with community leaders",
                                    "Letter of recommendation",
                                    "Flexible scheduling",
                                    "Meaningful resume builder"
                                ].map((benefit, idx) => (
                                    <div key={idx} className="flex items-center text-gray-700">
                                        <span className="text-blue-500 mr-2">✓</span>
                                        {benefit}
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </div>
                </Section>
            )}

            {/* Donate Section */}
            {activeTab === 'donate' && (
                <Section className="py-16">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Support Our Mission
                        </h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Your generous donation helps us provide life-changing programs to youth in our community.
                        </p>
                        <Card className="bg-gradient-to-br from-purple-50 to-pink-50">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                                {['$25', '$50', '$100', '$250'].map(amount => (
                                    <button
                                        key={amount}
                                        className="py-4 px-6 bg-white rounded-xl font-bold text-gray-900 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg"
                                    >
                                        {amount}
                                    </button>
                                ))}
                            </div>
                            <Button size="lg" className="w-full md:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                                Make a Donation
                            </Button>
                        </Card>
                        <p className="text-sm text-gray-500 mt-6">
                            Ronnia Langston Foundation is a 501(c)(3) tax-exempt organization. Your donation is tax-deductible.
                        </p>
                    </div>
                </Section>
            )}
        </div>
    );
};

export default GetInvolved;
