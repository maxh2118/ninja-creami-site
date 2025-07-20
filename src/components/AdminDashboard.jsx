import React, { useState, useEffect } from 'react';
// RecipeForm zou een aparte, herbruikbare component kunnen zijn
// Voor nu integreren we het hier voor de eenvoud
// import RecipeForm from './RecipeForm'; 

function AdminDashboard() {
    const [submissions, setSubmissions] = useState([]);
    const [secret, setSecret] = useState(null);

    useEffect(() => {
        const storedSecret = sessionStorage.getItem('admin_secret');
        if (!storedSecret) {
            window.location.href = '/admin/login';
        } else {
            setSecret(storedSecret);
            fetchSubmissions(storedSecret);
        }
    }, []);

    const apiBase = import.meta.env.PUBLIC_API_URL;

    const fetchSubmissions = async (currentSecret) => {
        const res = await fetch(`${apiBase}/api/admin/submissions`, {
            headers: { 'Authorization': `Bearer ${currentSecret}` }
        });
        if (res.ok) {
            const data = await res.json();
            setSubmissions(data);
        } else {
            alert('Authenticatie mislukt. Log opnieuw in.');
            sessionStorage.removeItem('admin_secret');
            window.location.href = '/admin/login';
        }
    };
    
    const handleDecision = async (id, action) => {
      if (!confirm(`Weet je zeker dat je dit recept wilt ${action}?`)) return;
      
      const endpoint = action === 'goedkeuren' ? 'approve' : 'delete';
      const res = await fetch(`${apiBase}/api/admin/${endpoint}/${id}`, {
        method: action === 'goedkeuren' ? 'POST' : 'DELETE',
        headers: { 'Authorization': `Bearer ${secret}` }
      });
      
      if (res.ok) {
        alert(`Recept succesvol ${action}.`);
        fetchSubmissions(secret); // Refresh list
      } else {
        alert('Er is iets misgegaan.');
      }
    };

    if (!secret) return <div>Laden...</div>;

    return (
        <div>
            {/* Hier kan in de toekomst de 'voeg recept toe' formulier komen */}

            <h2 class="text-3xl font-serif-display mt-12 mb-6">Ingezonden Recepten</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
                {submissions.length > 0 ? (
                    <ul className="space-y-4">
                        {submissions.map(sub => (
                            <li key={sub.id} className="border-b pb-4 last:border-b-0">
                                <h3 className="text-xl font-bold">{sub.title}</h3>
                                <p className="text-sm text-gray-600">Door: {sub.submitter_name} ({sub.submitter_email || 'geen email'})</p>
                                <div className="mt-4 flex space-x-4">
                                    <button onClick={() => handleDecision(sub.id, 'goedkeuren')} className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600">
                                        Goedkeuren
                                    </button>
                                    <button onClick={() => handleDecision(sub.id, 'verwijderen')} className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600">
                                        Afkeuren
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Geen nieuwe inzendingen.</p>
                )}
            </div>
        </div>
    );
}

export default AdminDashboard;