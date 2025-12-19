import React, { useEffect, useState } from 'react';
import Calendar from '../components/ui/Calendar';
import Section from '../components/ui/Section';
import client from '../lib/sanityClient';

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const q = `*[_type == "event" && defined(start)] | order(start asc){
      _id,
      title,
      start,
      end,
      allDay,
      location,
      category,
      colorClass,
      externalLink
    }`;

    client.fetch(q).then((data) => {
      // Map Sanity events to simple calendar entries. Expand multi-day events into each date if needed.
      const mapped = data.flatMap((ev) => {
        const startDate = ev.start ? new Date(ev.start) : null;
        const endDate = ev.end ? new Date(ev.end) : startDate;
        if (!startDate) return [];

        const dates = [];
        // If event spans multiple days, add an entry for each day in the range (inclusive)
        const cur = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
        const last = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
        while (cur <= last) {
          const dateStr = cur.toISOString().slice(0, 10);
          dates.push({
            date: dateStr,
            title: ev.title,
            color: ev.colorClass || (ev.category === 'Outreach' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'),
            meta: ev,
          });
          cur.setDate(cur.getDate() + 1);
        }

        return dates;
      });

      setEvents(mapped);
    }).catch((err) => console.error('Sanity fetch error (events):', err));
  }, []);

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
