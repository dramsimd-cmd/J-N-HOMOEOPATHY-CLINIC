
J N Homeopathy Clinic - Local HTML App (v3)
------------------------------------------
Files included:
- index.html : Main menu (open this first)
- add_patient.html : Add / Edit patient (saves to browser localStorage)
- view_edit_delete.html : View list, View full details, Edit (opens add_patient prefilled), Delete, Export PDF, Send follow-up reminder
- followup.html : Search and add follow-up entries to patients (unlimited)
- monthly_income.html : Date-range income report and CSV export
- upcoming.html : Separate page that lists upcoming follow-ups in the next N days, with Send Reminder and Open actions
- style.css : Shared styling

How to use:
1. Download and extract the ZIP into a folder (e.g., JNHomeopathyApp_v3).
2. Double-click index.html to open in your browser (Chrome recommended).
3. Add patients in Add Patient. Edit and view from View page. Add follow-ups in Follow-up page.
4. Upcoming page shows follow-ups due in next N days. Use Send Reminder to open WhatsApp web message.
5. Data is stored in browser localStorage (key: jn_patients_v3). To backup, copy the value from browser DevTools Application -> Local Storage, or use CSV exports provided.

Notes:
- WhatsApp: For Indian 10-digit numbers, the app prefixes +91 automatically.
- Export PDF uses browser print dialog.
- Files attached (investigation/repertorial) are stored only as filenames to keep localStorage small.
