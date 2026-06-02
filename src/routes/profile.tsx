import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { DashboardLayout } from "@/components/resqnet/kit";
import { useRole } from "@/lib/role";
import {
  Settings,
  HeartPulse,
  Users,
  History,
  LogOut,
  ChevronRight,
  Edit2,
  ShieldCheck,
  Award,
  Star,
  MapPin
} from "lucide-react";

export const Route = createFileRoute("/profile")({
  head: () => ({ meta: [{ title: "Profile — ResQNet" }] }),
  component: Profile,
});

function Profile() {
  const { role } = useRole();

  return (
    <DashboardLayout withNav>
      <div className="max-w-md mx-auto p-4 md:p-6 w-full space-y-6 pt-8 pb-20">
        {role === "volunteer" ? <VolunteerProfile /> : <NeedHelpProfile />}
      </div>
    </DashboardLayout>
  );
}

function NeedHelpProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [medicalData, setMedicalData] = useState({
    bloodType: "O+",
    organDonor: "Yes",
    conditions: "Penicillin, Peanuts, Mild Asthma",
    medications: "Albuterol Inhaler (As needed)"
  });

  return (
    <>
      <div className="flex flex-col items-center gap-3 text-center mb-8">
        <div className="relative">
          <div className="h-24 w-24 rounded-full bg-gradient-to-tr from-brand-blue to-primary flex items-center justify-center text-3xl font-bold text-white shadow-xl shadow-primary/20">
            AS
          </div>
          <button className="absolute bottom-0 right-0 h-8 w-8 bg-card rounded-full flex items-center justify-center border-2 border-background text-muted-foreground hover:text-foreground transition-colors shadow-sm">
            <Edit2 className="h-4 w-4" />
          </button>
        </div>
        <div>
          <h1 className="text-2xl font-bold">Aarav Sharma</h1>
          <p className="text-muted-foreground text-sm">+91 98765 43210</p>
        </div>
      </div>

      <div className="bg-primary/10 border border-primary/20 rounded-3xl p-5 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <HeartPulse className="h-5 w-5 text-primary" />
            <h2 className="font-bold text-lg text-primary">Medical ID</h2>
          </div>
          <button 
            onClick={() => setIsEditing(!isEditing)}
            className="text-primary text-xs font-bold px-3 py-1 bg-background rounded-full border border-primary/20 transition-colors hover:bg-primary/10">
            {isEditing ? "Save" : "Edit"}
          </button>
        </div>
        <div className="grid grid-cols-2 gap-y-4 gap-x-2">
          <div>
            <p className="text-[10px] text-primary/80 uppercase tracking-wider mb-0.5">Blood Type</p>
            {isEditing ? (
              <input 
                className="w-full bg-background border border-border rounded-md px-2 py-1 text-sm font-bold text-foreground focus:outline-none focus:border-primary"
                value={medicalData.bloodType}
                onChange={e => setMedicalData({...medicalData, bloodType: e.target.value})}
              />
            ) : (
              <p className="font-bold text-lg text-foreground">{medicalData.bloodType}</p>
            )}
          </div>
          <div>
            <p className="text-[10px] text-primary/80 uppercase tracking-wider mb-0.5">Organ Donor</p>
            {isEditing ? (
              <input 
                className="w-full bg-background border border-border rounded-md px-2 py-1 text-sm font-bold text-foreground focus:outline-none focus:border-primary"
                value={medicalData.organDonor}
                onChange={e => setMedicalData({...medicalData, organDonor: e.target.value})}
              />
            ) : (
              <p className="font-bold text-lg text-foreground">{medicalData.organDonor}</p>
            )}
          </div>
          <div className="col-span-2">
            <p className="text-[10px] text-primary/80 uppercase tracking-wider mb-0.5">Medical Conditions / Allergies</p>
            {isEditing ? (
              <input 
                className="w-full bg-background border border-border rounded-md px-2 py-1 text-sm font-semibold text-foreground focus:outline-none focus:border-primary"
                value={medicalData.conditions}
                onChange={e => setMedicalData({...medicalData, conditions: e.target.value})}
              />
            ) : (
              <p className="font-semibold text-foreground">{medicalData.conditions}</p>
            )}
          </div>
          <div className="col-span-2">
            <p className="text-[10px] text-primary/80 uppercase tracking-wider mb-0.5">Current Medications</p>
            {isEditing ? (
              <input 
                className="w-full bg-background border border-border rounded-md px-2 py-1 text-sm font-semibold text-foreground focus:outline-none focus:border-primary"
                value={medicalData.medications}
                onChange={e => setMedicalData({...medicalData, medications: e.target.value})}
              />
            ) : (
              <p className="font-semibold text-foreground">{medicalData.medications}</p>
            )}
          </div>
        </div>
      </div>

      <div className="bg-card border border-border rounded-3xl overflow-hidden flex flex-col">
        <Link to="/contacts-setup" className="flex items-center gap-3 p-4 hover:bg-secondary/50 transition-colors border-b border-border">
          <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center text-foreground">
            <Users className="h-4 w-4" />
          </div>
          <span className="flex-1 font-semibold">Emergency Contacts</span>
          <span className="text-xs font-bold bg-primary/10 text-primary px-2 py-0.5 rounded-full">2 Active</span>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
        </Link>
        <Link to="/settings" className="flex items-center gap-3 p-4 hover:bg-secondary/50 transition-colors">
          <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center text-foreground">
            <MapPin className="h-4 w-4" />
          </div>
          <span className="flex-1 font-semibold">Location Settings</span>
          <span className="text-xs font-bold text-muted-foreground">Always On</span>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
        </Link>
      </div>

      <div className="bg-card border border-border rounded-3xl overflow-hidden flex flex-col mt-6">
        <Link to="/" className="flex items-center gap-3 p-4 hover:bg-primary/5 transition-colors text-primary">
          <LogOut className="h-5 w-5" />
          <span className="flex-1 font-bold">Log Out</span>
        </Link>
      </div>
    </>
  );
}

function VolunteerProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [volunteerData, setVolunteerData] = useState({
    certifications: "CPR Certified, Basic First Aid, EMT Basic",
    languages: "English, Hindi, Kannada"
  });

  return (
    <>
      <div className="flex flex-col items-center gap-3 text-center mb-8">
        <div className="relative">
          <div className="h-24 w-24 rounded-full bg-gradient-to-tr from-brand-blue to-emerald-500 flex items-center justify-center text-3xl font-bold text-white shadow-xl shadow-brand-blue/20">
            AS
          </div>
          <div className="absolute -bottom-2 -right-2 h-8 w-8 bg-success rounded-full flex items-center justify-center border-2 border-background text-white shadow-sm" title="Verified First Responder">
            <ShieldCheck className="h-4 w-4" />
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold flex items-center justify-center gap-2">
            Aarav Sharma
          </h1>
          <p className="text-success text-sm font-semibold flex items-center justify-center gap-1">
            <ShieldCheck className="h-3 w-3" /> Verified Responder
          </p>
        </div>
      </div>

      {/* Volunteer Stats Row */}
      <div className="flex items-center justify-between bg-card border border-border rounded-2xl p-4 mb-6">
        <div className="flex flex-col items-center gap-1 flex-1">
          <Star className="h-5 w-5 text-warning" />
          <span className="text-lg font-bold">4.9</span>
          <span className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">Rating</span>
        </div>
        <div className="w-px h-10 bg-border" />
        <div className="flex flex-col items-center gap-1 flex-1">
          <Award className="h-5 w-5 text-primary" />
          <span className="text-lg font-bold">Level 12</span>
          <span className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">Rank</span>
        </div>
        <div className="w-px h-10 bg-border" />
        <div className="flex flex-col items-center gap-1 flex-1">
          <Users className="h-5 w-5 text-brand-blue" />
          <span className="text-lg font-bold">45</span>
          <span className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">Helped</span>
        </div>
      </div>

      <div className="bg-brand-blue/10 border border-brand-blue/20 rounded-3xl p-5 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Award className="h-5 w-5 text-brand-blue" />
            <h2 className="font-bold text-lg text-brand-blue">Responder Profile</h2>
          </div>
          <button 
            onClick={() => setIsEditing(!isEditing)}
            className="text-brand-blue text-xs font-bold px-3 py-1 bg-background rounded-full border border-brand-blue/20 transition-colors hover:bg-brand-blue/10">
            {isEditing ? "Save" : "Edit"}
          </button>
        </div>
        <div className="space-y-4">
          <div>
            <p className="text-[10px] text-brand-blue/80 uppercase tracking-wider mb-1">Certifications</p>
            {isEditing ? (
              <input 
                className="w-full bg-background border border-border rounded-md px-2 py-1 text-sm font-semibold text-foreground focus:outline-none focus:border-brand-blue"
                value={volunteerData.certifications}
                onChange={e => setVolunteerData({...volunteerData, certifications: e.target.value})}
                placeholder="Comma separated (e.g. CPR, Basic First Aid)"
              />
            ) : (
              <div className="flex flex-wrap gap-2">
                {volunteerData.certifications.split(',').filter(Boolean).map((cert, idx) => (
                  <span key={idx} className="px-2 py-1 bg-background border border-border rounded-md text-xs font-semibold">{cert.trim()}</span>
                ))}
              </div>
            )}
          </div>
          <div>
            <p className="text-[10px] text-brand-blue/80 uppercase tracking-wider mb-1">Languages Spoken</p>
            {isEditing ? (
              <input 
                className="w-full bg-background border border-border rounded-md px-2 py-1 text-sm font-semibold text-foreground focus:outline-none focus:border-brand-blue"
                value={volunteerData.languages}
                onChange={e => setVolunteerData({...volunteerData, languages: e.target.value})}
              />
            ) : (
              <p className="font-semibold text-foreground text-sm">{volunteerData.languages}</p>
            )}
          </div>
        </div>
      </div>

      <div className="bg-card border border-border rounded-3xl overflow-hidden flex flex-col">
        <Link to="/history" className="flex items-center gap-3 p-4 hover:bg-secondary/50 transition-colors border-b border-border">
          <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center text-foreground">
            <History className="h-4 w-4" />
          </div>
          <span className="flex-1 font-semibold">Response History</span>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
        </Link>
        <Link to="/settings" className="flex items-center gap-3 p-4 hover:bg-secondary/50 transition-colors border-b border-border">
          <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center text-foreground">
            <Settings className="h-4 w-4" />
          </div>
          <span className="flex-1 font-semibold">Settings</span>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
        </Link>
      </div>

      <div className="bg-card border border-border rounded-3xl overflow-hidden flex flex-col mt-6">
        <Link to="/" className="flex items-center gap-3 p-4 hover:bg-primary/5 transition-colors text-primary">
          <LogOut className="h-5 w-5" />
          <span className="flex-1 font-bold">Log Out</span>
        </Link>
      </div>
    </>
  );
}
