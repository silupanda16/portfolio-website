import React, { useState, useEffect, useMemo, useRef } from 'react';
import { 
  Plus, 
  Download, 
  Upload, 
  Search, 
  Calendar, 
  Phone, 
  MessageSquare, 
  MapPin, 
  Edit3, 
  Trash2, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Filter, 
  ChevronLeft, 
  ChevronRight, 
  ArrowLeft, 
  Sun, 
  Moon, 
  ShieldCheck, 
  FileText,
  X,
  Save,
  RotateCcw
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { useTheme } from '../context/ThemeContext';
import { useLogoModal } from '../context/LogoModalContext';

export interface OwnerNoteEntry {
  id: string;
  workDate: string; // YYYY-MM-DD
  customerName: string;
  customerPhone: string;
  location: string;
  appliance: 'Air Conditioner (AC)' | 'Refrigerator / Fridge' | 'Washing Machine' | 'Smart LED / LCD TV' | 'Other / General Electrical';
  status: 'New Lead' | 'In Progress' | 'Completed' | 'Follow-Up';
  amount: string;
  workNotes: string;
  createdAt: string;
  updatedAt: string;
}

const STORAGE_KEY = 'ss_services_owner_notes_v1';

const INITIAL_DEFAULT_NOTES: OwnerNoteEntry[] = [
  {
    id: 'note-1',
    workDate: new Date().toISOString().split('T')[0],
    customerName: 'Rajesh Mohapatra',
    customerPhone: '9876543210',
    location: 'Near Indian Overseas Bank, Berhampur',
    appliance: 'Refrigerator / Fridge',
    status: 'Completed',
    amount: '₹1,800 (Paid via UPI)',
    workNotes: 'Replaced rear condenser coil, performed nitrogen leak testing, vacuumization with rotary pump, and refilled refrigerant gas. Cooling verified normal.',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'note-2',
    workDate: new Date(Date.now() - 86400000).toISOString().split('T')[0],
    customerName: 'Railway Control Room Officer',
    customerPhone: '9040423413',
    location: 'Railway Station Control Room, Berhampur',
    appliance: 'Air Conditioner (AC)',
    status: 'Completed',
    amount: '₹2,400 (Commercial)',
    workNotes: 'Indoor split AC deep jet cleaning, blower wheel balancing, and PCB circuit calibration for 24/7 continuous operation room.',
    createdAt: new Date(Date.now() - 86400000).toISOString(),
    updatedAt: new Date(Date.now() - 86400000).toISOString(),
  },
  {
    id: 'note-3',
    workDate: new Date(Date.now() - 2 * 86400000).toISOString().split('T')[0],
    customerName: 'Sunita Patnaik',
    customerPhone: '9437123456',
    location: 'Bapuji Nagar Junction, Berhampur',
    appliance: 'Washing Machine',
    status: 'Completed',
    amount: '₹1,400 (Cash)',
    workNotes: 'Front load drum noise diagnosis: replaced worn drum bearing and drive belt. Spin cycle balanced and drainage pump tested.',
    createdAt: new Date(Date.now() - 2 * 86400000).toISOString(),
    updatedAt: new Date(Date.now() - 2 * 86400000).toISOString(),
  },
  {
    id: 'note-4',
    workDate: new Date().toISOString().split('T')[0],
    customerName: 'Dr. K. C. Tripathy',
    customerPhone: '9861098765',
    location: 'Medical Bank Colony 3rd Lane, Berhampur',
    appliance: 'Air Conditioner (AC)',
    status: 'In Progress',
    amount: 'Estimate ₹1,500',
    workNotes: 'Voltas 1.5 Ton split AC not cooling. Flare nut leak detected; copper brazing and R32 gas charging scheduled for afternoon.',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'note-5',
    workDate: new Date().toISOString().split('T')[0],
    customerName: 'Prasanna Sahu',
    customerPhone: '9937012345',
    location: 'Gate Bazar Main Road, Berhampur',
    appliance: 'Smart LED / LCD TV',
    status: 'New Lead',
    amount: 'Pending Inspection',
    workNotes: 'Samsung 43-inch LED TV screen went dark, audio is working fine. Suspecting backlight LED strip failure. Inspection scheduled for 5:30 PM.',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
];

export const OwnerNotesPage: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { openLogoModal } = useLogoModal();
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Notes State with local persistence
  const [notes, setNotes] = useState<OwnerNoteEntry[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch {
      // fallback to initial notes
    }
    return INITIAL_DEFAULT_NOTES;
  });

  // Save to localStorage automatically on changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
    } catch (e) {
      console.error('Failed to save notes to localStorage:', e);
    }
  }, [notes]);

  // Set page meta for stealth/noindex
  useEffect(() => {
    document.title = 'Owner Workspace | S.S. Services Lead Ledger';
    let metaRobots = document.querySelector('meta[name="robots"]');
    const prevRobots = metaRobots?.getAttribute('content') || 'index, follow';
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.setAttribute('name', 'robots');
      document.head.appendChild(metaRobots);
    }
    metaRobots.setAttribute('content', 'noindex, nofollow');

    return () => {
      document.title = 'S.S. Services Berhampur | AC, Refrigerator, Washing Machine & TV Repair Specialist';
      if (metaRobots) {
        metaRobots.setAttribute('content', prevRobots);
      }
    };
  }, []);

  // Filter & Search States
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [applianceFilter, setApplianceFilter] = useState<string>('all');
  const [dateFilter, setDateFilter] = useState<string>('all');
  const [customDate, setCustomDate] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<'desc' | 'asc'>('desc');

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  // Modal / Form State for Add / Edit
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingNote, setEditingNote] = useState<OwnerNoteEntry | null>(null);
  const [notification, setNotification] = useState<string | null>(null);

  // Form Fields
  const [formDate, setFormDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formLocation, setFormLocation] = useState('');
  const [formAppliance, setFormAppliance] = useState<OwnerNoteEntry['appliance']>('Air Conditioner (AC)');
  const [formStatus, setFormStatus] = useState<OwnerNoteEntry['status']>('New Lead');
  const [formAmount, setFormAmount] = useState('');
  const [formNotes, setFormNotes] = useState('');

  // Show auto-dismiss notification
  const triggerNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  // Open Add Modal
  const handleOpenAdd = () => {
    setEditingNote(null);
    setFormDate(new Date().toISOString().split('T')[0]);
    setFormName('');
    setFormPhone('');
    setFormLocation('');
    setFormAppliance('Air Conditioner (AC)');
    setFormStatus('New Lead');
    setFormAmount('');
    setFormNotes('');
    setIsFormOpen(true);
  };

  // Open Edit Modal
  const handleOpenEdit = (note: OwnerNoteEntry) => {
    setEditingNote(note);
    setFormDate(note.workDate);
    setFormName(note.customerName);
    setFormPhone(note.customerPhone);
    setFormLocation(note.location);
    setFormAppliance(note.appliance);
    setFormStatus(note.status);
    setFormAmount(note.amount);
    setFormNotes(note.workNotes);
    setIsFormOpen(true);
  };

  // Save Note (Add or Update)
  const handleSaveNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || !formDate) {
      alert('Please provide customer name and date.');
      return;
    }

    if (editingNote) {
      // Update existing
      setNotes(prev =>
        prev.map(n =>
          n.id === editingNote.id
            ? {
                ...n,
                workDate: formDate,
                customerName: formName.trim(),
                customerPhone: formPhone.trim(),
                location: formLocation.trim(),
                appliance: formAppliance,
                status: formStatus,
                amount: formAmount.trim(),
                workNotes: formNotes.trim(),
                updatedAt: new Date().toISOString(),
              }
            : n
        )
      );
      triggerNotification('Note updated successfully!');
    } else {
      // Add new
      const newEntry: OwnerNoteEntry = {
        id: `note-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
        workDate: formDate,
        customerName: formName.trim(),
        customerPhone: formPhone.trim(),
        location: formLocation.trim(),
        appliance: formAppliance,
        status: formStatus,
        amount: formAmount.trim(),
        workNotes: formNotes.trim(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      setNotes(prev => [newEntry, ...prev]);
      triggerNotification('New lead / work note added!');
    }

    setIsFormOpen(false);
  };

  // Delete Note
  const handleDeleteNote = (id: string, customerName: string) => {
    if (window.confirm(`Are you sure you want to delete note for "${customerName}"?`)) {
      setNotes(prev => prev.filter(n => n.id !== id));
      triggerNotification('Note deleted.');
    }
  };

  // Reset to initial sample notes
  const handleResetToDefault = () => {
    if (window.confirm('Reset notes to default demo ledger? Current unsaved entries will be overwritten.')) {
      setNotes(INITIAL_DEFAULT_NOTES);
      triggerNotification('Reset to sample notes.');
    }
  };

  // Download Notes as Structured .txt File
  const handleDownloadTxt = () => {
    const todayStr = new Date().toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    // Sort notes descending by workDate
    const sorted = [...notes].sort((a, b) => b.workDate.localeCompare(a.workDate));

    let fileContent = `================================================================================
S.S. SERVICES (SILU PANDA) - OWNER LEAD & WORK NOTES LEDGER
Generated: ${todayStr} | Total Records: ${sorted.length}
Primary Contact: +91 ${siteConfig.business.primaryPhone} | Berhampur, Odisha (760004)
================================================================================\n\n`;

    // Group by Date in the text file
    const dateMap = new Map<string, OwnerNoteEntry[]>();
    sorted.forEach(item => {
      const list = dateMap.get(item.workDate) || [];
      list.push(item);
      dateMap.set(item.workDate, list);
    });

    let index = 1;
    dateMap.forEach((items, dateKey) => {
      fileContent += `=========================================\n`;
      fileContent += `📅 DATE: ${dateKey} (${items.length} ${items.length === 1 ? 'Record' : 'Records'})\n`;
      fileContent += `=========================================\n\n`;

      items.forEach(note => {
        fileContent += `[RECORD #${index}] ------------------------------------------\n`;
        fileContent += `Status    : ${note.status.toUpperCase()}\n`;
        fileContent += `Appliance : ${note.appliance}\n`;
        fileContent += `Customer  : ${note.customerName}\n`;
        fileContent += `Phone     : ${note.customerPhone ? `+91 ${note.customerPhone}` : 'N/A'}\n`;
        fileContent += `Location  : ${note.location || 'Berhampur'}\n`;
        fileContent += `Payment   : ${note.amount || 'N/A'}\n`;
        fileContent += `Work Note : ${note.workNotes || 'No extra notes'}\n`;
        fileContent += `Logged At : ${new Date(note.createdAt).toLocaleString('en-IN')}\n\n`;
        index++;
      });
    });

    fileContent += `\n================================================================================
-- SYSTEM RESTORE DATA BLOCK (DO NOT MODIFY BELOW THIS LINE) --
${btoa(encodeURIComponent(JSON.stringify(sorted)))}
================================================================================\n`;

    const blob = new Blob([fileContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `SS_Services_Work_Notes_${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    triggerNotification('Notes downloaded as .txt file!');
  };

  // Import / Load from .txt File
  const handleImportTxt = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const text = event.target?.result as string;
        // Look for encoded restore block
        const marker = '-- SYSTEM RESTORE DATA BLOCK (DO NOT MODIFY BELOW THIS LINE) --';
        if (text.includes(marker)) {
          const parts = text.split(marker);
          const encodedPart = parts[1].split('====')[0].trim();
          const decoded = decodeURIComponent(atob(encodedPart));
          const parsed = JSON.parse(decoded);
          if (Array.isArray(parsed)) {
            setNotes(parsed);
            triggerNotification(`Imported ${parsed.length} notes successfully!`);
            return;
          }
        }

        // If no encoded block, fallback to basic line parsing
        alert('Valid S.S. Services notes backup found, but system restore block is missing or corrupted.');
      } catch (err) {
        console.error('Import error:', err);
        alert('Could not parse the selected text file. Please ensure it was generated by S.S. Services.');
      } finally {
        if (fileInputRef.current) fileInputRef.current.value = '';
      }
    };
    reader.readAsText(file);
  };

  // Filtered & Sorted Notes
  const filteredNotes = useMemo(() => {
    const today = new Date().toISOString().split('T')[0];
    const sevenDaysAgo = new Date(Date.now() - 7 * 86400000).toISOString().split('T')[0];
    const firstDayOfMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString().split('T')[0];

    return notes
      .filter(note => {
        // Search query
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matches =
            note.customerName.toLowerCase().includes(q) ||
            note.customerPhone.includes(q) ||
            note.location.toLowerCase().includes(q) ||
            note.workNotes.toLowerCase().includes(q) ||
            note.amount.toLowerCase().includes(q);
          if (!matches) return false;
        }

        // Status filter
        if (statusFilter !== 'all' && note.status !== statusFilter) {
          return false;
        }

        // Appliance filter
        if (applianceFilter !== 'all' && note.appliance !== applianceFilter) {
          return false;
        }

        // Date filter
        if (dateFilter === 'today' && note.workDate !== today) return false;
        if (dateFilter === 'week' && note.workDate < sevenDaysAgo) return false;
        if (dateFilter === 'month' && note.workDate < firstDayOfMonth) return false;
        if (dateFilter === 'custom' && customDate && note.workDate !== customDate) return false;

        return true;
      })
      .sort((a, b) => {
        if (sortOrder === 'desc') {
          return b.workDate.localeCompare(a.workDate) || b.createdAt.localeCompare(a.createdAt);
        } else {
          return a.workDate.localeCompare(b.workDate) || a.createdAt.localeCompare(b.createdAt);
        }
      });
  }, [notes, searchQuery, statusFilter, applianceFilter, dateFilter, customDate, sortOrder]);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, statusFilter, applianceFilter, dateFilter, customDate, sortOrder, pageSize]);

  // Pagination slicing
  const totalPages = Math.ceil(filteredNotes.length / pageSize) || 1;
  const paginatedNotes = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return filteredNotes.slice(startIndex, startIndex + pageSize);
  }, [filteredNotes, currentPage, pageSize]);

  // Statistics
  const stats = useMemo(() => {
    const today = new Date().toISOString().split('T')[0];
    return {
      total: notes.length,
      today: notes.filter(n => n.workDate === today).length,
      pending: notes.filter(n => n.status === 'New Lead' || n.status === 'In Progress').length,
      completed: notes.filter(n => n.status === 'Completed').length,
    };
  }, [notes]);

  // Status Badge Colors
  const getStatusBadge = (status: OwnerNoteEntry['status']) => {
    switch (status) {
      case 'Completed':
        return 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30';
      case 'In Progress':
        return 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30';
      case 'New Lead':
        return 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30';
      case 'Follow-Up':
        return 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30';
      default:
        return 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#070b14] text-slate-800 dark:text-slate-100 transition-colors duration-200">
      
      {/* Toast Notification */}
      {notification && (
        <div className="fixed top-5 right-5 z-50 px-4 py-2.5 rounded-xl bg-slate-900 text-white dark:bg-amber-500 dark:text-slate-950 font-bold text-xs shadow-2xl flex items-center gap-2 animate-in slide-in-from-top-2 duration-200">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 dark:text-slate-950" />
          <span>{notification}</span>
        </div>
      )}

      {/* Hidden File Input for .txt Restore */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImportTxt}
        accept=".txt"
        className="hidden"
      />

      {/* Top Owner Header */}
      <header className="sticky top-0 z-40 bg-white/95 dark:bg-[#0b1220]/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            
            {/* Brand Logo & Owner Title */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={openLogoModal}
                className="w-11 h-11 sm:w-13 sm:h-13 rounded-full overflow-hidden bg-white p-0.5 shadow-md ring-2 ring-amber-500/40 hover:ring-amber-500 hover:scale-105 transition-all shrink-0 cursor-pointer flex items-center justify-center"
                title="Click to view enlarged Brand Logo Card"
              >
                <img
                  src={siteConfig.business.logo}
                  alt={`${siteConfig.business.name} Logo`}
                  width={52}
                  height={52}
                  className="w-full h-full object-contain rounded-full"
                />
              </button>

              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                    {siteConfig.business.name}
                  </h1>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-amber-500 text-slate-950">
                    Owner Hub
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  Leads, Dates & Work Notes Ledger (Offline & Local Storage)
                </p>
              </div>
            </div>

            {/* Actions: Theme Toggle + Back to Public Website */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Theme Toggle Button */}
              <button
                type="button"
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                className="p-2 sm:p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              >
                {theme === 'light' ? (
                  <Moon className="w-5 h-5 text-slate-700" />
                ) : (
                  <Sun className="w-5 h-5 text-amber-400" />
                )}
              </button>

              {/* View Public Website */}
              <a
                href="/"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-all"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Public Website</span>
                <span className="sm:hidden">Site</span>
              </a>
            </div>

          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* KPI Summary Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Total Notes</span>
              <FileText className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-1">
              {stats.total}
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Stored locally in browser</p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Today's Work</span>
              <Calendar className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-1">
              {stats.today}
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Logged for today</p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Active / Pending</span>
              <Clock className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-amber-600 dark:text-amber-400 mt-1">
              {stats.pending}
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Leads or ongoing repairs</p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Completed Jobs</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400 mt-1">
              {stats.completed}
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Verified & finished</p>
          </div>
        </div>

        {/* Action Bar: Add Note + Download .txt + Import .txt */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 shadow-sm">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={handleOpenAdd}
              className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider bg-amber-500 hover:bg-amber-400 text-slate-950 flex items-center gap-2 shadow-md shadow-amber-500/20 transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Plus className="w-4 h-4 stroke-[3]" />
              <span>Add New Note / Lead</span>
            </button>

            <button
              type="button"
              onClick={handleDownloadTxt}
              className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-emerald-600 hover:bg-emerald-500 text-white flex items-center gap-2 shadow-md shadow-emerald-600/20 transition-all cursor-pointer"
              title="Download entire ledger as a structured, human-readable .txt file"
            >
              <Download className="w-4 h-4" />
              <span>Download Notes (.txt)</span>
            </button>

            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-600 flex items-center gap-2 transition-all cursor-pointer"
              title="Load / restore notes from a previously downloaded .txt file"
            >
              <Upload className="w-4 h-4" />
              <span className="hidden sm:inline">Import .txt File</span>
              <span className="sm:hidden">Import</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleResetToDefault}
              className="px-3 py-2 rounded-xl text-xs font-semibold text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 flex items-center gap-1 transition-colors cursor-pointer"
              title="Reset to sample demo ledger"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Reset Samples</span>
            </button>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 shadow-sm space-y-4">
          <div className="flex flex-col md:flex-row items-center gap-3">
            {/* Search Input */}
            <div className="relative w-full md:flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by customer name, phone, address, notes, amount..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Quick Date Range Filter */}
            <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
              {[
                { id: 'all', label: 'All Dates' },
                { id: 'today', label: 'Today' },
                { id: 'week', label: 'Last 7 Days' },
                { id: 'month', label: 'This Month' },
                { id: 'custom', label: 'Specific Date' }
              ].map(f => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setDateFilter(f.id)}
                  className={`px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    dateFilter === f.id
                      ? 'bg-amber-500 text-slate-950 shadow-sm'
                      : 'bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            {/* Custom Date Picker if selected */}
            {dateFilter === 'custom' && (
              <input
                type="date"
                value={customDate}
                onChange={(e) => setCustomDate(e.target.value)}
                className="px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white"
              />
            )}
          </div>

          {/* Secondary Filters: Status, Appliance & Sort Order */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100 dark:border-slate-700/60 text-xs">
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1.5">
                <Filter className="w-3.5 h-3.5 text-amber-500" />
                <span className="font-bold text-slate-600 dark:text-slate-400">Status:</span>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-2.5 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-semibold focus:outline-none"
                >
                  <option value="all">All Statuses</option>
                  <option value="New Lead">New Lead</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                  <option value="Follow-Up">Follow-Up</option>
                </select>
              </div>

              <div className="flex items-center gap-1.5">
                <span className="font-bold text-slate-600 dark:text-slate-400">Appliance:</span>
                <select
                  value={applianceFilter}
                  onChange={(e) => setApplianceFilter(e.target.value)}
                  className="px-2.5 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-semibold focus:outline-none"
                >
                  <option value="all">All Appliances</option>
                  <option value="Air Conditioner (AC)">AC Service</option>
                  <option value="Refrigerator / Fridge">Refrigerator / Fridge</option>
                  <option value="Washing Machine">Washing Machine</option>
                  <option value="Smart LED / LCD TV">Smart LED / LCD TV</option>
                  <option value="Other / General Electrical">Other / Electrical</option>
                </select>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-600 dark:text-slate-400">Sort by Date:</span>
              <button
                type="button"
                onClick={() => setSortOrder(prev => (prev === 'desc' ? 'asc' : 'desc'))}
                className="px-2.5 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 font-bold text-slate-700 dark:text-slate-200 cursor-pointer"
              >
                {sortOrder === 'desc' ? 'Newest Date First ↓' : 'Oldest Date First ↑'}
              </button>
            </div>
          </div>
        </div>

        {/* Notes Listing Container */}
        <div className="space-y-4">
          
          <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-1">
            <span>
              Showing <strong>{filteredNotes.length === 0 ? 0 : (currentPage - 1) * pageSize + 1}</strong> to <strong>{Math.min(currentPage * pageSize, filteredNotes.length)}</strong> of <strong>{filteredNotes.length}</strong> {filteredNotes.length === 1 ? 'entry' : 'entries'}
            </span>

            <div className="flex items-center gap-2">
              <span>Per page:</span>
              {[5, 10, 20].map(size => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setPageSize(size)}
                  className={`px-2 py-0.5 rounded font-bold transition-colors ${
                    pageSize === size
                      ? 'bg-amber-500 text-slate-950'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Empty State */}
          {filteredNotes.length === 0 && (
            <div className="p-12 text-center rounded-3xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80">
              <AlertCircle className="w-10 h-10 text-amber-500 mx-auto mb-3 opacity-80" />
              <h3 className="text-base font-bold text-slate-900 dark:text-white">No Notes Found</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto mt-1">
                No entries match your search query or filters. Try adjusting the search term or click below to add a new note.
              </p>
              <button
                type="button"
                onClick={handleOpenAdd}
                className="mt-4 px-4 py-2 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 cursor-pointer inline-flex items-center gap-1.5"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Lead Note</span>
              </button>
            </div>
          )}

          {/* Paginated Cards */}
          <div className="grid grid-cols-1 gap-4">
            {paginatedNotes.map((note) => (
              <div
                key={note.id}
                className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 shadow-sm hover:border-amber-500/40 transition-all space-y-3"
              >
                {/* Header row: Date, Status, Appliance, and Actions */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    {/* Date Badge */}
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-extrabold bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                      <Calendar className="w-3.5 h-3.5 text-amber-500" />
                      <span>{note.workDate}</span>
                    </span>

                    {/* Status Badge */}
                    <span className={`px-2.5 py-0.5 rounded-lg text-xs font-extrabold uppercase tracking-wider border ${getStatusBadge(note.status)}`}>
                      {note.status}
                    </span>

                    {/* Appliance Badge */}
                    <span className="px-2.5 py-0.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-900/80 text-slate-600 dark:text-slate-300">
                      {note.appliance}
                    </span>
                  </div>

                  {/* Edit / Delete Buttons */}
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => handleOpenEdit(note)}
                      aria-label="Edit note"
                      className="p-2 rounded-lg text-slate-600 hover:text-amber-600 dark:text-slate-400 dark:hover:text-amber-400 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer"
                      title="Edit this note"
                    >
                      <Edit3 className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDeleteNote(note.id, note.customerName)}
                      aria-label="Delete note"
                      className="p-2 rounded-lg text-slate-600 hover:text-red-500 dark:text-slate-400 dark:hover:text-red-400 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer"
                      title="Delete this note"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Customer Details */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                      {note.customerName}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      {note.location && (
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                          <span>{note.location}</span>
                        </span>
                      )}
                      {note.amount && (
                        <span className="font-bold text-emerald-600 dark:text-emerald-400">
                          Payment: {note.amount}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Direct Contact CTAs for Owner (Tap to call/whatsapp customer) */}
                  {note.customerPhone && (
                    <div className="flex items-center gap-2">
                      <a
                        href={`tel:${note.customerPhone}`}
                        className="px-3 py-1.5 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 flex items-center gap-1 shadow-sm transition-all"
                        title="Direct call customer"
                      >
                        <Phone className="w-3 h-3 fill-current" />
                        <span>{note.customerPhone}</span>
                      </a>

                      <a
                        href={`https://wa.me/91${note.customerPhone}?text=${encodeURIComponent(
                          `Hello ${note.customerName}, Silu Panda here from S.S. Services Berhampur regarding your ${note.appliance} service.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white flex items-center gap-1 shadow-sm transition-all"
                        title="Chat with customer on WhatsApp"
                      >
                        <MessageSquare className="w-3 h-3" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  )}
                </div>

                {/* Work & Diagnostic Notes */}
                {note.workNotes && (
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal whitespace-pre-wrap">
                    {note.workNotes}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-800">
              <button
                type="button"
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-2 rounded-xl text-xs font-bold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 dark:hover:bg-slate-700 flex items-center gap-1 transition-all cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <button
                    key={page}
                    type="button"
                    onClick={() => setCurrentPage(page)}
                    className={`w-8 h-8 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      currentPage === page
                        ? 'bg-amber-500 text-slate-950 shadow-sm'
                        : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-3 py-2 rounded-xl text-xs font-bold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 dark:hover:bg-slate-700 flex items-center gap-1 transition-all cursor-pointer"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>

      </main>

      {/* Note Form Modal (Add / Edit) */}
      {isFormOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-200 overflow-y-auto"
          onClick={() => setIsFormOpen(false)}
        >
          <div
            className="relative max-w-lg w-full bg-white dark:bg-[#0c1322] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 my-8 transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                  <Edit3 className="w-4 h-4" />
                </div>
                <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                  {editingNote ? 'Edit Lead / Work Note' : 'Add New Lead / Work Note'}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setIsFormOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Form Fields */}
            <form onSubmit={handleSaveNote} className="p-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Work Date */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                    Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formDate}
                    onChange={(e) => setFormDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                {/* Status */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                    Status *
                  </label>
                  <select
                    value={formStatus}
                    onChange={(e) => setFormStatus(e.target.value as OwnerNoteEntry['status'])}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="New Lead">New Lead</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                    <option value="Follow-Up">Follow-Up</option>
                  </select>
                </div>
              </div>

              {/* Customer Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                  Customer / Lead Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Chandra Panigrahi"
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. 9876543210"
                    value={formPhone}
                    onChange={(e) => setFormPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                {/* Amount / Quoted */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                    Payment / Amount Info
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. ₹1,500 (Paid UPI)"
                    value={formAmount}
                    onChange={(e) => setFormAmount(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              {/* Area / Address */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                  Location / Area in Berhampur
                </label>
                <input
                  type="text"
                  placeholder="e.g. Near Indian Overseas Bank / Medical Bank Colony"
                  value={formLocation}
                  onChange={(e) => setFormLocation(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              {/* Appliance Type */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                  Appliance Category
                </label>
                <select
                  value={formAppliance}
                  onChange={(e) => setFormAppliance(e.target.value as OwnerNoteEntry['appliance'])}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option value="Air Conditioner (AC)">Air Conditioner (AC)</option>
                  <option value="Refrigerator / Fridge">Refrigerator / Fridge</option>
                  <option value="Washing Machine">Washing Machine</option>
                  <option value="Smart LED / LCD TV">Smart LED / LCD TV</option>
                  <option value="Other / General Electrical">Other / General Electrical</option>
                </select>
              </div>

              {/* Work Notes */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                  Work / Diagnostic Notes
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe problem, spare parts replaced, gas refilled, capacitor rating, warranty status..."
                  value={formNotes}
                  onChange={(e) => setFormNotes(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              {/* Actions */}
              <div className="pt-3 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsFormOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider bg-amber-500 hover:bg-amber-400 text-slate-950 flex items-center gap-1.5 shadow-md shadow-amber-500/20 cursor-pointer"
                >
                  <Save className="w-4 h-4" />
                  <span>{editingNote ? 'Save Changes' : 'Add Note'}</span>
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="mt-16 py-8 border-t border-slate-200 dark:border-slate-800 text-center text-xs text-slate-500 dark:text-slate-400">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>S.S. Services Private Owner Workspace (Offline Local Storage • No Cloud DB Required)</span>
          </div>
          <div>
            Route: <code className="font-mono text-amber-600 dark:text-amber-400 font-bold">/silu-sili123</code>
          </div>
        </div>
      </footer>

    </div>
  );
};
