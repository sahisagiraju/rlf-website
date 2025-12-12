import React, { useState } from 'react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Donate = () => {
    const [donationType, setDonationType] = useState('one-time');
    const [selectedAmount, setSelectedAmount] = useState(null);
    const [customAmount, setCustomAmount] = useState('');

    const donationAmounts = [25, 50, 100, 250, 500, 1000];

    const impactExamples = [
        {
            amount: "$25",
            impact: "Provides school supplies for one student for a semester",
            icon: "📚"
        },
        {
            amount: "$50",
            impact: "Funds one tutoring session for a small group",
            icon: "✏️"
        },
        {
            amount: "$100",
            impact: "Sponsors one youth for a leadership workshop",
            icon: "🌟"
        },
        {
            amount: "$250",
            impact: "Covers mentorship program costs for one youth for 3 months",
            icon: "🤝"
        },
        {
            amount: "$500",
            impact: "Funds a complete college application support package",
            icon: "🎓"
        },
        {
            amount: "$1,000",
            impact: "Sponsors an entire program cohort for one month",
            icon: "💼"
        }
    ];

    const otherWays = [
        {
            title: "Planned Giving",
            description: "Leave a lasting legacy through your will, trust, or estate plan.",
            icon: "📜",
            color: "from-blue-500 to-cyan-500"
        },
        {
            title: "Stock Donations",
            description: "Donate appreciated securities and receive tax benefits.",
            icon: "📈",
            color: "from-green-500 to-teal-500"
        },
        {
            title: "Matching Gifts",
            description: "Double your impact through your employer's matching program.",
            icon: "🔄",
            color: "from-purple-500 to-pink-500"
        },
        {
            title: "In-Kind Donations",
            description: "Contribute goods, services, or equipment to support our programs.",
            icon: "🎁",
            color: "from-orange-500 to-red-500"
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <Section className="bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 text-white py-20">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
                        Make a Difference Today
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
                        Your generosity empowers youth to reach their full potential and build brighter futures
                    </p>
                </div>
            </Section>

            {/* Donation Form Section */}
            <Section className="py-16">
                <div className="max-w-4xl mx-auto">
                    <Card className="shadow-2xl">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Choose Your Donation
                            </h2>
                            <p className="text-gray-600">
                                Every contribution makes a meaningful impact in a young person's life
                            </p>
                        </div>

                        {/* Donation Type Toggle */}
                        <div className="flex justify-center gap-4 mb-8">
                            <button
                                onClick={() => setDonationType('one-time')}
                                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${donationType === 'one-time'
                                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                One-Time
                            </button>
                            <button
                                onClick={() => setDonationType('monthly')}
                                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${donationType === 'monthly'
                                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                Monthly
                                <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">Sustaining</span>
                            </button>
                        </div>

                        {/* Amount Selection */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                            {donationAmounts.map(amount => (
                                <button
                                    key={amount}
                                    onClick={() => {
                                        setSelectedAmount(amount);
                                        setCustomAmount('');
                                    }}
                                    className={`py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 ${selectedAmount === amount
                                            ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105'
                                            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                                        }`}
                                >
                                    ${amount}
                                </button>
                            ))}
                        </div>

                        {/* Custom Amount */}
                        <div className="mb-8">
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Or enter a custom amount:
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-xl">$</span>
                                <input
                                    type="number"
                                    value={customAmount}
                                    onChange={(e) => {
                                        setCustomAmount(e.target.value);
                                        setSelectedAmount(null);
                                    }}
                                    placeholder="Enter amount"
                                    className="w-full pl-10 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none text-lg"
                                />
                            </div>
                        </div>

                        {/* Donate Button */}
                        <Button
                            size="lg"
                            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-xl py-6"
                            disabled={!selectedAmount && !customAmount}
                        >
                            {donationType === 'monthly' ? 'Start Monthly Donation' : 'Donate Now'}
                        </Button>

                        <p className="text-center text-sm text-gray-500 mt-4">
                            🔒 Secure payment processing • Tax-deductible donation
                        </p>
                    </Card>
                </div>
            </Section>

            {/* Impact Section */}
            <Section className="py-16 bg-gradient-to-br from-gray-50 to-purple-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Your Impact
                        </h2>
                        <p className="text-lg text-gray-600">
                            See how your donation transforms lives
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {impactExamples.map((example, index) => (
                            <Card
                                key={index}
                                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="text-4xl mb-4">{example.icon}</div>
                                <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">
                                    {example.amount}
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    {example.impact}
                                </p>
                            </Card>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Monthly Giving Benefits */}
            <Section className="py-16 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Join Our Sustaining Circle
                        </h2>
                        <p className="text-xl opacity-90">
                            Monthly donors provide the stable foundation that powers our programs year-round
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: "💝",
                                title: "Consistent Impact",
                                description: "Your monthly gift ensures continuous support for youth programs"
                            },
                            {
                                icon: "📊",
                                title: "Exclusive Updates",
                                description: "Receive special impact reports and behind-the-scenes stories"
                            },
                            {
                                icon: "🎯",
                                title: "Simplified Giving",
                                description: "Set it once and make a difference every month automatically"
                            }
                        ].map((benefit, index) => (
                            <div key={index} className="text-center">
                                <div className="text-5xl mb-4">{benefit.icon}</div>
                                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                                <p className="opacity-90">{benefit.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Button
                            size="lg"
                            className="bg-white text-purple-600 hover:bg-gray-100"
                            onClick={() => setDonationType('monthly')}
                        >
                            Become a Monthly Donor
                        </Button>
                    </div>
                </div>
            </Section>

            {/* Other Ways to Give */}
            <Section className="py-16">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Other Ways to Give
                        </h2>
                        <p className="text-lg text-gray-600">
                            Explore additional options to support our mission
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {otherWays.map((way, index) => (
                            <Card
                                key={index}
                                className="hover:shadow-xl transition-all duration-300"
                            >
                                <div className="flex items-start gap-4">
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${way.color} flex items-center justify-center text-3xl flex-shrink-0`}>
                                        {way.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                                            {way.title}
                                        </h3>
                                        <p className="text-gray-600 mb-4">
                                            {way.description}
                                        </p>
                                        <Button variant="outline" size="sm">
                                            Learn More
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Tax Information */}
            <Section className="py-12 bg-gray-100">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Tax-Deductible Donation
                    </h3>
                    <p className="text-gray-600 mb-2">
                        Ronnia Langston Foundation, Inc. is a 501(c)(3) tax-exempt organization.
                    </p>
                    <p className="text-gray-600">
                        <strong>EIN:</strong> XX-XXXXXXX • Your donation is tax-deductible to the fullest extent allowed by law.
                    </p>
                </div>
            </Section>

            {/* Testimonial */}
            <Section className="py-16">
                <div className="max-w-4xl mx-auto">
                    <Card className="bg-gradient-to-br from-purple-50 to-pink-50">
                        <div className="text-center">
                            <div className="text-5xl mb-4">💬</div>
                            <blockquote className="text-xl text-gray-700 italic mb-4">
                                "Supporting the Ronnia Langston Foundation has been one of the most rewarding decisions.
                                Seeing the direct impact on young lives in our community is truly inspiring."
                            </blockquote>
                            <p className="font-semibold text-gray-900">— Sarah Johnson</p>
                            <p className="text-gray-600">Monthly Donor since 2020</p>
                        </div>
                    </Card>
                </div>
            </Section>
        </div>
    );
};

export default Donate;
