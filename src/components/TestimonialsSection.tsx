import React, { useState } from 'react';
import { TESTIMONIALS_DATA } from '../data';
import { Star, Quote, Edit3, Plus, Check, MessageSquare, ShieldCheck } from 'lucide-react';
import { TestimonialItem } from '../types';

export const TestimonialsSection: React.FC = () => {
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>(() => {
    const saved = localStorage.getItem('connect_biz_testimonials');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return TESTIMONIALS_DATA;
      }
    }
    return TESTIMONIALS_DATA;
  });

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<TestimonialItem | null>(null);

  const startEdit = (item: TestimonialItem) => {
    setEditingId(item.id);
    setEditForm({ ...item });
  };

  const saveEdit = () => {
    if (!editForm) return;
    const updated = testimonials.map((t) =>
      t.id === editForm.id ? { ...editForm, isPlaceholder: false } : t
    );
    setTestimonials(updated);
    localStorage.setItem('connect_biz_testimonials', JSON.stringify(updated));
    setEditingId(null);
    setEditForm(null);
  };

  return (
    <section id="testimonials" className="relative py-24 bg-[#050B18]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B1428] border border-[#008CFF]/40 text-[#00B7FF] text-xs font-semibold tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(0,140,255,0.2)]">
            <MessageSquare className="w-4 h-4 text-[#00B7FF]" />
            CLIENT ENDORSEMENTS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            What Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008CFF] to-[#00B7FF]">
              Clients Say
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#B8C4D9]">
            Real feedback from local business owners, retail shops, and entrepreneurs growing with Connect Biz Media.
          </p>

          {/* Explicit Editable Placeholder Notice Banner */}
          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#008CFF]/10 border border-[#008CFF]/30 text-[11px] text-[#00B7FF]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00B7FF]" />
            <span>Clearly marked as editable placeholder content — click the pencil icon to replace with your real client testimonials</span>
          </div>
        </div>

        {/* 3 Modern Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              id={`testimonial-card-${item.id}`}
              className="relative rounded-2xl bg-[#0B1428]/90 border border-[#008CFF]/25 hover:border-[#00B7FF] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-[0_10px_30px_rgba(0,140,255,0.1)] group"
            >
              <div>
                {/* Header: Rating & Edit Trigger */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  <button
                    onClick={() => startEdit(item)}
                    className="p-1.5 rounded-md bg-[#050B18] text-[#B8C4D9] hover:text-[#00B7FF] border border-[#008CFF]/20 hover:border-[#008CFF] transition-all text-xs flex items-center gap-1"
                    title="Edit this testimonial with your real client story"
                  >
                    <Edit3 className="w-3 h-3" />
                    <span className="text-[10px]">Edit</span>
                  </button>
                </div>

                {/* Placeholder Notice Tag */}
                {item.isPlaceholder && (
                  <div className="mb-3 inline-block text-[10px] font-mono text-[#00B7FF] bg-[#050B18] px-2 py-0.5 rounded border border-[#008CFF]/30">
                    [Editable Client Placeholder]
                  </div>
                )}

                {/* Testimonial Quote */}
                <p className="text-sm text-[#E2E8F0] italic leading-relaxed mb-6">
                  {item.text}
                </p>
              </div>

              {/* Client Profile Info */}
              <div className="pt-4 border-t border-white/5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#008CFF] to-[#00B7FF] flex items-center justify-center text-white font-bold text-xs shadow-[0_0_15px_rgba(0,140,255,0.4)]">
                  {item.avatarText}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    {item.clientName}
                  </h4>
                  <p className="text-xs text-[#00B7FF]">
                    {item.businessName}
                  </p>
                  <p className="text-[11px] text-[#B8C4D9]">
                    {item.businessType}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Edit Modal / Form if active */}
        {editingId && editForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050B18]/85 backdrop-blur-md">
            <div className="relative w-full max-w-lg bg-[#0B1428] border border-[#00B7FF]/50 rounded-2xl p-6 shadow-[0_0_50px_rgba(0,140,255,0.4)]">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Edit3 className="w-5 h-5 text-[#00B7FF]" />
                <span>Replace Placeholder Testimonial</span>
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="text-xs text-[#B8C4D9] block mb-1">
                    Client Name:
                  </label>
                  <input
                    type="text"
                    value={editForm.clientName}
                    onChange={(e) =>
                      setEditForm({ ...editForm, clientName: e.target.value })
                    }
                    className="w-full bg-[#050B18] border border-[#008CFF]/40 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#00B7FF]"
                  />
                </div>

                <div>
                  <label className="text-xs text-[#B8C4D9] block mb-1">
                    Business Name:
                  </label>
                  <input
                    type="text"
                    value={editForm.businessName}
                    onChange={(e) =>
                      setEditForm({ ...editForm, businessName: e.target.value })
                    }
                    className="w-full bg-[#050B18] border border-[#008CFF]/40 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#00B7FF]"
                  />
                </div>

                <div>
                  <label className="text-xs text-[#B8C4D9] block mb-1">
                    Industry / Business Type:
                  </label>
                  <input
                    type="text"
                    value={editForm.businessType}
                    onChange={(e) =>
                      setEditForm({ ...editForm, businessType: e.target.value })
                    }
                    className="w-full bg-[#050B18] border border-[#008CFF]/40 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#00B7FF]"
                  />
                </div>

                <div>
                  <label className="text-xs text-[#B8C4D9] block mb-1">
                    Client Testimonial Review Text:
                  </label>
                  <textarea
                    rows={4}
                    value={editForm.text}
                    onChange={(e) =>
                      setEditForm({ ...editForm, text: e.target.value })
                    }
                    className="w-full bg-[#050B18] border border-[#008CFF]/40 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#00B7FF]"
                  />
                </div>
              </div>

              <div className="mt-6 flex items-center justify-end gap-3">
                <button
                  onClick={() => setEditingId(null)}
                  className="px-4 py-2 rounded-lg border border-white/20 text-xs text-[#B8C4D9] hover:text-white"
                >
                  Cancel
                </button>
                <button
                  onClick={saveEdit}
                  className="inline-flex items-center gap-1.5 px-5 py-2 rounded-lg bg-gradient-to-r from-[#008CFF] to-[#00B7FF] text-white font-semibold text-xs shadow-[0_0_15px_rgba(0,140,255,0.4)]"
                >
                  <Check className="w-4 h-4" />
                  <span>Save Real Testimonial</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
