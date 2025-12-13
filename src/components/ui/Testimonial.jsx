import React from 'react';
import { Quote } from 'lucide-react';

const Testimonial = ({ testimonials }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
                <div
                    key={index}
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                >
                    <div className="mb-6">
                        <Quote className="w-10 h-10 text-blue-500 opacity-50" />
                    </div>

                    <p className="text-gray-700 text-lg mb-6 leading-relaxed italic">
                        "{testimonial.quote}"
                    </p>

                    <div className="flex items-center gap-4">
                        {testimonial.image && (
                            <div className="relative">
                                <div className="w-16 h-16 rounded-full overflow-hidden ring-4 ring-blue-100">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        )}
                        <div>
                            <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                            <p className="text-gray-600 text-sm">{testimonial.role}</p>
                            {testimonial.organization && (
                                <p className="text-gray-500 text-sm">{testimonial.organization}</p>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Testimonial;
