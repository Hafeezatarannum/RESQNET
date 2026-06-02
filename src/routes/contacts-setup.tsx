import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { DashboardLayout } from "@/components/resqnet/kit";
import { UserPlus, Phone, Trash2, Edit2, Users } from "lucide-react";

export const Route = createFileRoute("/contacts-setup")({
  head: () => ({ meta: [{ title: "Contacts — ResQNet" }] }),
  component: ContactsSetup,
});

function ContactsSetup() {
  const [contacts, setContacts] = useState([
    { id: 1, name: "Meera Singh", relation: "Mother", phone: "+91 98765 11111" },
    { id: 2, name: "Karan Singh", relation: "Brother", phone: "+91 98765 22222" },
  ]);

  const addContact = () => {
    setContacts((c) => [
      ...c,
      { id: Date.now(), name: "New Contact", relation: "Family", phone: "+91 90000 00000" },
    ]);
  };

  const removeContact = (id: number) => {
    setContacts((cs) => cs.filter((c) => c.id !== id));
  };

  return (
    <DashboardLayout withNav>
      <div className="max-w-md mx-auto p-4 md:p-6 w-full space-y-6 pt-8 pb-20">
        
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
              <Users className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Emergency Contacts</h1>
              <p className="text-xs text-muted-foreground">{contacts.length} Active</p>
            </div>
          </div>
          <button 
            onClick={addContact}
            className="flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded-full text-sm font-bold transition-all shadow-md active:scale-95"
          >
            <UserPlus className="h-4 w-4" /> Add
          </button>
        </div>

        <div className="bg-card border border-border rounded-3xl overflow-hidden flex flex-col">
          {contacts.map((c, index) => (
            <div 
              key={c.id} 
              className={`flex items-center justify-between p-4 ${index !== contacts.length - 1 ? 'border-b border-border' : ''} hover:bg-secondary/30 transition-colors`}
            >
              <div className="flex flex-col">
                <span className="font-bold text-foreground text-sm">{c.name}</span>
                <span className="text-xs text-muted-foreground">{c.relation} • {c.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <button className="h-8 w-8 rounded-full bg-success/10 text-success flex items-center justify-center hover:bg-success/20 transition-colors">
                  <Phone className="h-4 w-4" />
                </button>
                <button className="h-8 w-8 rounded-full bg-secondary text-muted-foreground flex items-center justify-center hover:bg-secondary/80 transition-colors">
                  <Edit2 className="h-4 w-4" />
                </button>
                <button 
                  onClick={() => removeContact(c.id)}
                  className="h-8 w-8 rounded-full bg-destructive/10 text-destructive flex items-center justify-center hover:bg-destructive/20 transition-colors"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
          {contacts.length === 0 && (
            <div className="p-8 text-center text-muted-foreground text-sm">
              No contacts added yet.
            </div>
          )}
        </div>

      </div>
    </DashboardLayout>
  );
}
