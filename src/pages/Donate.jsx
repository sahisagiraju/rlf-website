import React, { useState } from 'react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Building2, CheckCircle } from 'lucide-react';

const Donate = () => {
    const [donationType, setDonationType] = useState('one-time');
    const [selectedAmount, setSelectedAmount] = useState(null);
    const [customAmount, setCustomAmount] = useState('');
    const [sponsorSubmitted, setSponsorSubmitted] = useState(false);
    const [sponsorFormData, setSponsorFormData] = useState({
        firstName: '',
        lastName: '',
        company: '',
        industry: '',
        phone: '',
        website: '',
        email: '',
        investmentLevel: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        zipCode: '',
        country: ''
    });

    const handleSponsorChange = (e) => {
        setSponsorFormData({
            ...sponsorFormData,
            [e.target.name]: e.target.value
        });
    };

    const handleSponsorSubmit = (e) => {
        e.preventDefault();
        console.log('Sponsor form submitted:', sponsorFormData);
        setSponsorSubmitted(true);

        // Reset after 3 seconds
        setTimeout(() => {
            setSponsorSubmitted(false);
            setSponsorFormData({
                firstName: '',
                lastName: '',
                company: '',
                industry: '',
                phone: '',
                website: '',
                email: '',
                investmentLevel: '',
                addressLine1: '',
                addressLine2: '',
                city: '',
                state: '',
                zipCode: '',
                country: ''
            });
        }, 3000);
    };

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

            {/* Corporate Sponsorship Form */}
            <Section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="flex justify-center mb-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                                <Building2 className="w-8 h-8 text-white" />
                            </div>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Become a Corporate Sponsor
                        </h2>
                        <p className="text-lg text-gray-600">
                            Partner with us to create meaningful impact while enhancing your organization's community engagement
                        </p>
                    </div>

                    <Card className="shadow-2xl">
                        {!sponsorSubmitted ? (
                            <form onSubmit={handleSponsorSubmit} className="space-y-6">
                                {/* Name Row */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            First Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            required
                                            value={sponsorFormData.firstName}
                                            onChange={handleSponsorChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="John"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Last Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            required
                                            value={sponsorFormData.lastName}
                                            onChange={handleSponsorChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>

                                {/* Company & Industry */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Company *
                                        </label>
                                        <input
                                            type="text"
                                            name="company"
                                            required
                                            value={sponsorFormData.company}
                                            onChange={handleSponsorChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="Your Company"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Industry *
                                        </label>
                                        <input
                                            type="text"
                                            name="industry"
                                            required
                                            value={sponsorFormData.industry}
                                            onChange={handleSponsorChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="Technology, Finance, etc."
                                        />
                                    </div>
                                </div>

                                {/* Phone & Website */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Phone *
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            value={sponsorFormData.phone}
                                            onChange={handleSponsorChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="(123) 456-7890"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Website
                                        </label>
                                        <input
                                            type="url"
                                            name="website"
                                            value={sponsorFormData.website}
                                            onChange={handleSponsorChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="https://www.example.com"
                                        />
                                    </div>
                                </div>

                                {/* Email & Investment Level */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={sponsorFormData.email}
                                            onChange={handleSponsorChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="john@company.com"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Estimated Investment Level *
                                        </label>
                                        <select
                                            name="investmentLevel"
                                            required
                                            value={sponsorFormData.investmentLevel}
                                            onChange={handleSponsorChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        >
                                            <option value="">Select Amount</option>
                                            <option value="$100,000-$500,000">$100,000-$500,000</option>
                                            <option value="$500,000-$1,000,000">$500,000-$1,000,000</option>
                                            <option value="$1,000,000+">$1,000,000+</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Headquarters Address */}
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-4">Headquarters Address</h3>
                                </div>

                                {/* Address Line 1 */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Address Line 1 *
                                    </label>
                                    <input
                                        type="text"
                                        name="addressLine1"
                                        required
                                        value={sponsorFormData.addressLine1}
                                        onChange={handleSponsorChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Street address"
                                    />
                                </div>

                                {/* Address Line 2 */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Address Line 2
                                    </label>
                                    <input
                                        type="text"
                                        name="addressLine2"
                                        value={sponsorFormData.addressLine2}
                                        onChange={handleSponsorChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Suite, floor, etc. (optional)"
                                    />
                                </div>

                                {/* City, State, Zip */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            City *
                                        </label>
                                        <input
                                            type="text"
                                            name="city"
                                            required
                                            value={sponsorFormData.city}
                                            onChange={handleSponsorChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="Dallas"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            State *
                                        </label>
                                        <input
                                            type="text"
                                            name="state"
                                            required
                                            value={sponsorFormData.state}
                                            onChange={handleSponsorChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="TX"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Zip Code *
                                        </label>
                                        <input
                                            type="text"
                                            name="zipCode"
                                            required
                                            value={sponsorFormData.zipCode}
                                            onChange={handleSponsorChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="75001"
                                        />
                                    </div>
                                </div>

                                {/* Country */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Country *
                                    </label>
                                    <input
                                        type="text"
                                        name="country"
                                        required
                                        value={sponsorFormData.country}
                                        onChange={handleSponsorChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="United States"
                                    />
                                </div>

                                {/* Submit Button */}
                                <div className="pt-4">
                                    <button
                                        type="submit"
                                        className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-colors shadow-lg hover:shadow-xl"
                                    >
                                        Submit Sponsorship Inquiry
                                    </button>
                                </div>
                            </form>
                        ) : (
                            <div className="text-center py-12">
                                <div className="mb-6 flex justify-center">
                                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                                        <CheckCircle className="w-12 h-12 text-green-600" />
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                    Thank You for Your Interest!
                                </h3>
                                <p className="text-gray-600 text-lg">
                                    Our team will review your information and contact you shortly at {sponsorFormData.email}
                                </p>
                            </div>
                        )}
                    </Card>
                </div>
            </Section>

            {/* Testimonial */}
            <Section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
                <div className="max-w-4xl mx-auto">
                    <Card className="bg-white">
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
