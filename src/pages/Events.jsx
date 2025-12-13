import React from 'react';
import Calendar from '../components/ui/Calendar';
import Section from '../components/ui/Section';

const Events = () => {
  // Sample events data
  const events = [
    {
      date: '2025-12-15',
      title: 'Community Outreach',
      color: 'bg-green-100 text-green-800'
    },
    {
      date: '2025-12-20',
      title: 'Volunteer Training',
      color: 'bg-purple-100 text-purple-800'
    },
    {
      date: '2025-12-25',
      title: 'Holiday Celebration',
      color: 'bg-red-100 text-red-800'
    },
    {
      date: '2025-12-12',
      title: 'Team Meeting',
      color: 'bg-blue-100 text-blue-800'
    },
    {
      date: '2025-12-12',
      title: 'Workshop',
      color: 'bg-yellow-100 text-yellow-800'
    },
    {
      date: '2026-01-05',
      title: 'New Year Kickoff',
      color: 'bg-indigo-100 text-indigo-800'
    },
    {
      date: '2026-01-10',
      title: 'Fundraising Gala',
      color: 'bg-pink-100 text-pink-800'
    }
  ];

  return (
    <div className="min-h-screen">
      <Section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Events Calendar
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay up to date with our upcoming events, workshops, and community activities.
            </p>
          </div>

          <Calendar events={events} />

          {/* Legend */}
          <div className="mt-8 bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Event Types</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded bg-blue-100 border border-blue-200" />
                <span className="text-sm text-gray-600">Meetings</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded bg-green-100 border border-green-200" />
                <span className="text-sm text-gray-600">Outreach</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded bg-purple-100 border border-purple-200" />
                <span className="text-sm text-gray-600">Training</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded bg-pink-100 border border-pink-200" />
                <span className="text-sm text-gray-600">Fundraising</span>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Events;
