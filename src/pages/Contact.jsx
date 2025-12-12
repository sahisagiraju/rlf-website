import React, { useState } from 'react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        interest: 'general'
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
    };

    const contactInfo = [
        {
            icon: "📍",
            title: "Visit Us",
            details: [
                "123 Community Drive",
                "Your City, ST 12345"
            ],
            color: "from-blue-500 to-cyan-500"
        },
        {
            icon: "📞",
            title: "Call Us",
            details: [
                "Main: (555) 123-4567",
                "Fax: (555) 123-4568"
            ],
            color: "from-green-500 to-teal-500"
        },
        {
            icon: "📧",
            title: "Email Us",
            details: [
                "info@rlfoundation.org",
                "programs@rlfoundation.org"
            ],
            color: "from-purple-500 to-pink-500"
        },
        {
            icon: "🕐",
            title: "Office Hours",
            details: [
                "Mon-Fri: 9:00 AM - 5:00 PM",
                "Sat-Sun: Closed"
            ],
            color: "from-orange-500 to-red-500"
        }
    ];

    const departments = [
        {
            name: "Programs & Services",
            email: "programs@rlfoundation.org",
            description: "Questions about our youth programs and services"
        },
        {
            name: "Volunteer Coordination",
            email: "volunteer@rlfoundation.org",
            description: "Volunteer opportunities and applications"
        },
        {
            name: "Development & Partnerships",
            email: "partnerships@rlfoundation.org",
            description: "Corporate partnerships and sponsorships"
        },
        {
            name: "Media & Communications",
            email: "media@rlfoundation.org",
            description: "Press inquiries and media requests"
        }
    ];

    const faqs = [
        {
            question: "How can I enroll my child in a program?",
            answer: "Visit our Programs page to learn about available programs, then contact our Programs team at programs@rlfoundation.org or call (555) 123-4567 to begin the enrollment process."
        },
        {
            question: "Do you accept volunteers under 18?",
            answer: "Yes! We have youth volunteer opportunities for ages 14-17 with parental consent. Contact our Volunteer Coordinator for more information."
        },
        {
            question: "How can my company partner with the foundation?",
            answer: "We'd love to discuss partnership opportunities! Email partnerships@rlfoundation.org or use the contact form above selecting 'Partnership Inquiry' as your interest."
        },
        {
            question: "Are donations tax-deductible?",
            answer: "Yes, we are a 501(c)(3) tax-exempt organization. All donations are tax-deductible to the fullest extent allowed by law."
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <Section className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white py-20">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
                        Get in Touch
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
                        We'd love to hear from you. Reach out with questions, ideas, or to learn how you can get involved.
                    </p>
                </div>
            </Section>

            {/* Contact Info Cards */}
            <Section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {contactInfo.map((info, index) => (
                            <Card
                                key={index}
                                className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                            >
                                <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${info.color} flex items-center justify-center text-3xl mb-4`}>
                                    {info.icon}
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-3">
                                    {info.title}
                                </h3>
                                {info.details.map((detail, idx) => (
                                    <p key={idx} className="text-gray-600 text-sm">
                                        {detail}
                                    </p>
                                ))}
                            </Card>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Contact Form & Map Section */}
            <Section className="py-16">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                Send Us a Message
                            </h2>

                            {submitted ? (
                                <Card className="bg-gradient-to-br from-green-50 to-teal-50 border-2 border-green-500">
                                    <div className="text-center py-8">
                                        <div className="text-6xl mb-4">✅</div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                            Message Sent!
                                        </h3>
                                        <p className="text-gray-600">
                                            Thank you for reaching out. We'll get back to you within 24-48 hours.
                                        </p>
                                    </div>
                                </Card>
                            ) : (
                                <Card>
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                                                placeholder="John Doe"
                                            />
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                    Email *
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                                                    placeholder="john@example.com"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                    Phone
                                                </label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                                                    placeholder="(555) 123-4567"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                I'm interested in *
                                            </label>
                                            <select
                                                name="interest"
                                                value={formData.interest}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                                            >
                                                <option value="general">General Inquiry</option>
                                                <option value="programs">Program Information</option>
                                                <option value="volunteer">Volunteering</option>
                                                <option value="partnership">Partnership Opportunity</option>
                                                <option value="donation">Donation Question</option>
                                                <option value="media">Media Inquiry</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Subject *
                                            </label>
                                            <input
                                                type="text"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                                                placeholder="How can we help you?"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Message *
                                            </label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                rows="6"
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors resize-none"
                                                placeholder="Tell us more about your inquiry..."
                                            ></textarea>
                                        </div>

                                        <Button
                                            type="submit"
                                            size="lg"
                                            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                                        >
                                            Send Message
                                        </Button>
                                    </form>
                                </Card>
                            )}
                        </div>

                        {/* Map & Additional Info */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                    Visit Our Office
                                </h2>
                                <Card className="overflow-hidden p-0">
                                    <div className="bg-gradient-to-br from-blue-100 to-purple-100 h-64 flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="text-6xl mb-4">🗺️</div>
                                            <p className="text-gray-700 font-semibold">
                                                Interactive Map
                                            </p>
                                            <p className="text-sm text-gray-600 mt-2">
                                                123 Community Drive<br />
                                                Your City, ST 12345
                                            </p>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <Button
                                            variant="outline"
                                            className="w-full"
                                        >
                                            Get Directions
                                        </Button>
                                    </div>
                                </Card>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    Department Contacts
                                </h3>
                                <div className="space-y-4">
                                    {departments.map((dept, index) => (
                                        <Card key={index} className="hover:shadow-lg transition-shadow">
                                            <h4 className="font-bold text-gray-900 mb-1">
                                                {dept.name}
                                            </h4>
                                            <p className="text-sm text-gray-600 mb-2">
                                                {dept.description}
                                            </p>
                                            <a
                                                href={`mailto:${dept.email}`}
                                                className="text-purple-600 hover:text-purple-700 text-sm font-semibold"
                                            >
                                                {dept.email}
                                            </a>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* FAQ Section */}
            <Section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-lg text-gray-600">
                            Quick answers to common questions
                        </p>
                    </div>

                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <Card key={index} className="hover:shadow-lg transition-shadow">
                                <h3 className="text-lg font-bold text-gray-900 mb-3">
                                    {faq.question}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {faq.answer}
                                </p>
                            </Card>
                        ))}
                    </div>

                    <div className="text-center mt-8">
                        <p className="text-gray-600 mb-4">
                            Don't see your question answered?
                        </p>
                        <Button variant="outline">
                            View All FAQs
                        </Button>
                    </div>
                </div>
            </Section>

            {/* Social Media Section */}
            <Section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Connect With Us
                    </h2>
                    <p className="text-xl opacity-90 mb-8">
                        Follow our journey and stay updated on our impact
                    </p>
                    <div className="flex justify-center gap-6">
                        {[
                            { icon: "📘", name: "Facebook", color: "from-blue-600 to-blue-700" },
                            { icon: "📸", name: "Instagram", color: "from-pink-600 to-purple-600" },
                            { icon: "🐦", name: "Twitter", color: "from-blue-400 to-blue-500" },
                            { icon: "💼", name: "LinkedIn", color: "from-blue-700 to-blue-800" }
                        ].map((social, index) => (
                            <button
                                key={index}
                                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${social.color} flex items-center justify-center text-2xl hover:scale-110 transition-transform duration-300 shadow-lg`}
                                title={social.name}
                            >
                                {social.icon}
                            </button>
                        ))}
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Contact;
