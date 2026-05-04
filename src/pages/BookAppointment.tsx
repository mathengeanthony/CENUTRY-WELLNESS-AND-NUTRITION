import React from 'react';

export default function BookAppointment() {
  return (
    <div className="flex-1 bg-gray-50 py-12">
      <div className="container mx-auto max-w-[1400px] px-4 max-w-2xl">
        <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 uppercase tracking-tighter text-center">Book a <span className="text-pink-500">Clinic Appointment</span></h1>
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">First Name</label>
                <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:border-green-500" placeholder="John" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Last Name</label>
                <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:border-green-500" placeholder="Doe" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Service</label>
              <select className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:border-green-500">
                <option>Nutritionist Consultation</option>
                <option>Dietitian Follow-up</option>
                <option>Body Composition Analysis</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Preferred Date</label>
                <input type="date" className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:border-green-500" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Preferred Time</label>
                <input type="time" className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:border-green-500" />
              </div>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg border border-green-100 flex flex-col space-y-1">
              <h4 className="text-sm font-bold text-green-800 uppercase tracking-tight mb-2">Clinic Information</h4>
              <p className="text-xs text-green-700 font-semibold"><span className="text-green-900">Address:</span> Kunjam Arcade, Magadi Road, Ongata Rongai, Kenya</p>
              <p className="text-xs text-green-700 font-semibold"><span className="text-green-900">Phone:</span> +254 736 921630</p>
              <p className="text-xs text-green-700 font-semibold"><span className="text-green-900">Hours:</span> Mon - Sat: 8:00 AM – 7:30 PM | Sun: Open 24 hours</p>
            </div>

            <button type="button" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold uppercase py-4 rounded-lg transition shadow-lg">Confirm Appointment</button>
          </form>
        </div>
      </div>
    </div>
  );
}
