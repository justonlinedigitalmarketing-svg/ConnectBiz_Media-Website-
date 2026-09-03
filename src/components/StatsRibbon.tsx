import React, { useState, useEffect } from 'react';
import { StatItem } from '../types';
import { INITIAL_STATS } from '../data';
import {
  FolderCheck,
  HeartHandshake,
  Headphones,
  Layers,
  Edit3,
  Check,
  RotateCcw,
  ArrowRight
} from 'lucide-react';

interface StatsRibbonProps {
  onOpenQuote: () => void;
}

export const StatsRibbon: React.FC<StatsRibbonProps> = ({ onOpenQuote }) => {
  const [stats, setStats] = useState<StatItem[]>(() => {
    const saved = localStorage.getItem('connect_biz_stats');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return INITIAL_STATS;
      }
    }
    return INITIAL_STATS;
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState<StatItem[]>(stats);

  useEffect(() => {
    setEditForm(stats);
  }, [stats]);

  const handleSave = () => {
    setStats(editForm);
    localStorage.setItem('connect_biz_stats', JSON.stringify(editForm));
    setIsEditing(false);
  };

  const handleReset = () => {
    setStats(INITIAL_STATS);
    setEditForm(INITIAL_STATS);
    localStorage.removeItem('connect_biz_stats');
    setIsEditing(false);
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FolderCheck':
        return FolderCheck;
      case 'HeartHandshake':
        return HeartHandshake;
      case 'Headphones':
        return Headphones;
      case 'Layers':
      default:
        return Layers;
    }
  };

  return (
    <section id="stats" className="relative py-12 bg-[#050B18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Stats Ribbon Card */}
        <div className="relative rounded-2xl bg-gradient-to-r from-[#0B1428] via-[#0D1C38] to-[#0B1428] border border-[#008CFF]/40 shadow-[0_10px_40px_rgba(0,140,255,0.2)] p-6 sm:p-8 overflow-hidden">
          {/* Subtle electric blue ambient ray */}
          <div className="absolute top-0 right-1/4 w-96 h-24 bg-[#00B7FF]/15 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-96 h-24 bg-[#008CFF]/15 blur-3xl pointer-events-none" />

          {/* Admin Edit Trigger Top-Right */}
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#008CFF]/20">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00B7FF] animate-pulse" />
              <span className="text-xs font-semibold text-[#B8C4D9] uppercase tracking-wider">
                Live Business Performance Metrics
              </span>
            </div>

            <button
              id="edit-stats-toggle-btn"
              onClick={() => setIsEditing(!isEditing)}
              className="inline-flex items-center gap-1.5 text-xs text-[#00B7FF] hover:text-white bg-[#008CFF]/10 hover:bg-[#008CFF]/20 px-3 py-1.5 rounded-lg border border-[#008CFF]/30 transition-all cursor-pointer"
              title="Click to edit statistics numbers"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>{isEditing ? 'Cancel Edit' : 'Edit Numbers'}</span>
            </button>
          </div>

          {/* If Editing Mode is On */}
          {isEditing && (
            <div className="mb-8 p-4 rounded-xl bg-[#050B18]/90 border border-[#00B7FF]/40 shadow-inner">
              <div className="text-xs font-medium text-[#00B7FF] mb-3">
                Customize Statistics (Changes are saved in your browser):
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {editForm.map((item, idx) => (
                  <div key={item.id} className="space-y-2">
                    <label className="text-[11px] font-medium text-[#B8C4D9] block">
                      Stat {idx + 1} Value:
                    </label>
                    <input
                      type="text"
                      value={item.value}
                      onChange={(e) => {
                        const next = [...editForm];
                        next[idx] = { ...next[idx], value: e.target.value };
                        setEditForm(next);
                      }}
                      className="w-full bg-[#0B1428] border border-[#008CFF]/40 rounded-lg px-3 py-1.5 text-sm text-white focus:outline-none focus:border-[#00B7FF]"
                    />
                    <input
                      type="text"
                      value={item.label}
                      onChange={(e) => {
                        const next = [...editForm];
                        next[idx] = { ...next[idx], label: e.target.value };
                        setEditForm(next);
                      }}
                      className="w-full bg-[#0B1428] border border-[#008CFF]/20 rounded-lg px-3 py-1 text-xs text-[#B8C4D9] focus:outline-none focus:border-[#00B7FF]"
                      placeholder="Label"
                    />
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-end gap-3 pt-3 border-t border-white/10">
                <button
                  id="reset-stats-btn"
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 text-xs text-[#B8C4D9] hover:text-white px-3 py-1.5 rounded-lg border border-white/20 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Default</span>
                </button>
                <button
                  id="save-stats-btn"
                  onClick={handleSave}
                  className="inline-flex items-center gap-1.5 text-xs text-white bg-gradient-to-r from-[#008CFF] to-[#00B7FF] px-4 py-1.5 rounded-lg font-semibold shadow-[0_0_15px_rgba(0,140,255,0.4)] transition-all"
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>Save Changes</span>
                </button>
              </div>
            </div>
          )}

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 items-center">
            {stats.map((stat) => {
              const Icon = getIcon(stat.iconName);
              return (
                <div
                  key={stat.id}
                  className="flex flex-col items-center sm:items-start text-center sm:text-left p-2 group"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-8 h-8 rounded-lg bg-[#008CFF]/15 border border-[#008CFF]/30 flex items-center justify-center text-[#00B7FF] group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight glow-text-blue">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-white mt-1">
                    {stat.label}
                  </div>
                  {stat.sublabel && (
                    <div className="text-[11px] text-[#B8C4D9] mt-0.5 max-w-[180px]">
                      {stat.sublabel}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Quick Action Ribbon CTA */}
            <div className="col-span-2 lg:col-span-1 flex flex-col justify-center items-center lg:items-end">
              <button
                id="stats-get-quote-btn"
                onClick={onOpenQuote}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-gradient-to-r from-[#008CFF] to-[#00B7FF] text-white font-bold text-xs tracking-wider shadow-[0_0_25px_rgba(0,140,255,0.4)] hover:shadow-[0_0_35px_rgba(0,183,255,0.7)] hover:scale-105 transition-all cursor-pointer whitespace-nowrap"
              >
                <span>GET FREE QUOTE</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
