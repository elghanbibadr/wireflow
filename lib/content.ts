export type Lang = 'en' | 'fr';
export const LANGS: Lang[] = ['en', 'fr'];

const en = {
  meta: { title: 'instant AI replies for property managers and hosts', desc: 'Every guest and tenant message answered in under a minute, 24/7. AI automation for property managers, rental hosts, riads and guesthouses.' },
  nav: { services: 'Services', pricing: 'Pricing', faq: 'FAQ', cta: 'Book a free demo' },
  hero: { pill: 'Replying now', pill2: ' to guests at 2 a.m., so you can sleep', h1a: 'Never lose a guest inquiry ', h1b: 'to a slow reply.', lead: '{name} answers every guest and tenant message in under a minute, day and night, using your own prices and house rules. You step in only when it matters.', see: 'See pricing' },
  chat: {
    label: 'Example conversation', inbox: 'Guest inbox', live: 'Live', reply: 'Reply time',
    convos: [
      { m: '2:14 AM, WhatsApp', g: 'Hi! Is the riad free 12–15 March for 2 adults? Is breakfast included?', r: 'Yes, 12–15 March is open and breakfast is included. It’s €95 a night. Shall I send you the booking link?', tag: 'New booking inquiry sent to you', t: 6.4 },
      { m: '9:47 PM, Email', g: 'Can we check in late, around 11 pm?', r: 'Late check-in is fine. I’ll send the door code and directions on the day you arrive.', tag: 'Check-in note added', t: 5.1 },
      { m: '6:05 AM, Website form', g: 'The hot water isn’t working in room 4.', r: 'I’m sorry about that. I’ve marked it urgent and alerted our maintenance team. Someone will contact you shortly.', tag: 'Urgent ticket created and you were alerted', t: 7.2 },
    ],
  },
  channels: ['Email', 'WhatsApp', 'Website forms', 'Instagram', 'Facebook', 'Booking inquiries', 'Maintenance requests', 'Check-in questions'],
  problem: { h2: 'Slow replies quietly cost you bookings', items: [
    ['Guests don’t wait', 'Most travellers message several places at once. The first host to answer usually gets the booking.'],
    ['Same questions, all day', 'Prices, check-in times, parking, breakfast. You answer them again and again.'],
    ['Messages arrive at night', 'Late-evening and weekend inquiries sit unanswered until morning.'] ] },
  how: { h2: 'Live in a few days, not months', steps: [
    ['You share your info', 'Prices, rules, check-in details and your tone of voice. A short form is enough.'],
    ['We build and test it', 'Connected to your email, WhatsApp or website form. You approve every reply style first.'],
    ['It answers, you stay in control', 'Replies go out instantly. Anything unclear is passed to you with an alert.'] ] },
  services: { h2: 'Everything your messages need, in one system', sub: 'Start with instant replies. Add more as your business grows.', items: [
    ['💬', 'Instant inquiry replies', 'Every message answered in under a minute from your own info.'],
    ['🤖', 'AI chatbot', 'Answers guest and tenant questions on your website and WhatsApp.'],
    ['🧭', 'AI agent', 'Checks availability, sends booking links and collects guest details.'],
    ['⭐', 'Review requests and replies', 'Asks for reviews after checkout and drafts replies in your tone.'],
    ['🔧', 'Maintenance sorting', 'Sorts requests by urgency and alerts the right person.'],
    ['🔑', 'Check-in and rent reminders', 'Sends instructions and reminders at the right moment.'],
    ['📊', 'Weekly report', 'Inquiries, reply times and common questions, in one short summary.'],
    ['✍️', 'Listing descriptions', 'Clear titles and descriptions for Airbnb and Booking.'],
    ['🌐', 'Direct booking website', 'Your own site, so you rely less on platform fees.'] ] },
  pricing: { h2: 'Simple pricing, no surprises', sub: 'One setup fee, then a small monthly fee that covers hosting, support and improvements.', month: '/ month', setup: '+ ${n} one-time setup', hot: 'Most popular', plans: [
    { name: 'Starter', setup: 149, price: 39, hot: false, feat: ['Instant inquiry replies', 'Alert to you for tricky messages', 'Email or WhatsApp'] },
    { name: 'Standard', setup: 299, price: 99, hot: true, feat: ['Everything in Starter', 'Check-in and rent reminders', 'Review requests after checkout', 'Monthly support'] },
    { name: 'Full', setup: 599, price: 139, hot: false, feat: ['Everything in Standard', 'Maintenance request sorting', 'Weekly performance report', 'Priority support'] } ] },
  faq: { h2: 'Questions owners ask first', items: [
    ['Is it safe to let AI answer my guests?', 'Replies come only from the information you give us. If a question is outside it, the system doesn’t guess. It passes the message to you.'],
    ['Will it sound robotic?', 'No. We write the replies in your tone, and you approve the style before anything goes live.'],
    ['How long does setup take?', 'A basic inquiry-reply system is usually ready within a few days after we receive your information.'],
    ['Which channels does it work on?', 'Email, WhatsApp and website forms. Instagram and Facebook messages can be added.'],
    ['Can I stay in control?', 'Yes. You choose what it can answer, what it must pass to you, and you can pause it at any time.'],
    ['What if it doesn’t know the answer?', 'It tells the guest you’ll get back to them and sends you an alert straight away.'] ] },
  final: { h2: 'See it answer your own guests', sub: 'Send us one listing and we’ll show you a working demo, free. No commitment.' },
  mail: { subject: 'Free demo request for {name}', body: 'Hi, I manage [number] properties. Here is my listing: ' },
};

export type Content = typeof en;

const fr: Content = {
  meta: { title: 'réponses instantanées par IA pour gestionnaires immobiliers et hôtes', desc: 'Chaque message de voyageur ou de locataire reçoit une réponse en moins d’une minute, 24 h/24. Automatisation IA pour gestionnaires immobiliers, hôtes, riads et maisons d’hôtes.' },
  nav: { services: 'Services', pricing: 'Tarifs', faq: 'FAQ', cta: 'Réserver une démo gratuite' },
  hero: { pill: 'Réponse en cours', pill2: ' aux voyageurs à 2 h du matin, pour que vous puissiez dormir', h1a: 'Ne perdez plus jamais une demande de voyageur ', h1b: 'à cause d’une réponse tardive.', lead: '{name} répond à chaque message de voyageur ou de locataire en moins d’une minute, jour et nuit, avec vos propres tarifs et règles. Vous n’intervenez que lorsque c’est nécessaire.', see: 'Voir les tarifs' },
  chat: {
    label: 'Exemple de conversation', inbox: 'Boîte de réception', live: 'En direct', reply: 'Temps de réponse',
    convos: [
      { m: '2 h 14, WhatsApp', g: 'Bonjour ! Le riad est-il libre du 12 au 15 mars pour 2 adultes ? Le petit-déjeuner est-il inclus ?', r: 'Oui, le riad est libre du 12 au 15 mars et le petit-déjeuner est inclus. Le tarif est de 95 € la nuit. Souhaitez-vous le lien de réservation ?', tag: 'Nouvelle demande de réservation transmise au propriétaire', t: 6.4 },
      { m: '21 h 47, E-mail', g: 'Pouvons-nous arriver tard, vers 23 h ?', r: 'Une arrivée tardive est possible. Je vous enverrai le code de la porte et l’itinéraire le jour de votre arrivée.', tag: 'Note d’arrivée ajoutée', t: 5.1 },
      { m: '6 h 05, Formulaire du site', g: 'Il n’y a pas d’eau chaude dans la chambre 4.', r: 'Je suis désolé pour ce désagrément. J’ai marqué le problème comme urgent et prévenu notre équipe de maintenance. Quelqu’un vous contactera très vite.', tag: 'Ticket urgent créé et propriétaire alerté', t: 7.2 },
    ],
  },
  channels: ['E-mail', 'WhatsApp', 'Formulaires du site', 'Instagram', 'Facebook', 'Demandes de réservation', 'Demandes de maintenance', 'Questions sur l’arrivée'],
  problem: { h2: 'Les réponses tardives vous font perdre des réservations en silence', items: [
    ['Les voyageurs n’attendent pas', 'La plupart des voyageurs écrivent à plusieurs hébergements à la fois. Le premier hôte à répondre obtient généralement la réservation.'],
    ['Les mêmes questions, toute la journée', 'Tarifs, heure d’arrivée, parking, petit-déjeuner. Vous y répondez encore et encore.'],
    ['Des messages arrivent la nuit', 'Les demandes de fin de soirée et du week-end restent sans réponse jusqu’au lendemain.'] ] },
  how: { h2: 'Opérationnel en quelques jours, pas en quelques mois', steps: [
    ['Vous partagez vos informations', 'Tarifs, règles, détails d’arrivée et votre ton. Un court formulaire suffit.'],
    ['Nous le construisons et le testons', 'Connecté à votre e-mail, WhatsApp ou formulaire de site. Vous validez d’abord le style des réponses.'],
    ['Il répond, vous gardez le contrôle', 'Les réponses partent instantanément. Tout ce qui n’est pas clair vous est transmis avec une alerte.'] ] },
  services: { h2: 'Tout ce dont vos messages ont besoin, dans un seul système', sub: 'Commencez par les réponses instantanées. Ajoutez le reste au fil de votre croissance.', items: [
    ['💬', 'Réponses instantanées aux demandes', 'Chaque message reçoit une réponse en moins d’une minute, à partir de vos informations.'],
    ['🤖', 'Chatbot IA', 'Répond aux questions des voyageurs et locataires sur votre site et WhatsApp.'],
    ['🧭', 'Agent IA', 'Vérifie les disponibilités, envoie les liens de réservation et recueille les informations des voyageurs.'],
    ['⭐', 'Demandes d’avis et réponses', 'Demande des avis après le départ et rédige des réponses dans votre ton.'],
    ['🔧', 'Tri des demandes de maintenance', 'Classe les demandes par urgence et alerte la bonne personne.'],
    ['🔑', 'Rappels d’arrivée et de loyer', 'Envoie les consignes et rappels au bon moment.'],
    ['📊', 'Rapport hebdomadaire', 'Demandes, temps de réponse et questions fréquentes, dans un court résumé.'],
    ['✍️', 'Descriptions d’annonces', 'Titres et descriptions clairs pour Airbnb et Booking.'],
    ['🌐', 'Site de réservation directe', 'Votre propre site, pour dépendre moins des frais des plateformes.'] ] },
  pricing: { h2: 'Des tarifs simples, sans surprise', sub: 'Des frais d’installation uniques, puis un petit abonnement mensuel qui couvre l’hébergement, le support et les améliorations.', month: '/ mois', setup: '+ ${n} d’installation unique', hot: 'Le plus populaire', plans: [
    { name: 'Essentiel', setup: 300, price: 100, hot: false, feat: ['Réponses instantanées aux demandes', 'Alerte pour les messages délicats', 'E-mail ou WhatsApp'] },
    { name: 'Standard', setup: 500, price: 180, hot: true, feat: ['Tout ce qui est inclus dans Essentiel', 'Rappels d’arrivée et de loyer', 'Demandes d’avis après le départ', 'Support mensuel'] },
    { name: 'Complet', setup: 800, price: 300, hot: false, feat: ['Tout ce qui est inclus dans Standard', 'Tri des demandes de maintenance', 'Rapport de performance hebdomadaire', 'Support prioritaire'] } ] },
  faq: { h2: 'Les questions que se posent d’abord les propriétaires', items: [
    ['Est-il sûr de laisser l’IA répondre à mes voyageurs ?', 'Les réponses reposent uniquement sur les informations que vous nous donnez. Si une question sort de ce cadre, le système ne devine pas : il vous transmet le message.'],
    ['Cela sonnera-t-il robotique ?', 'Non. Nous rédigeons les réponses dans votre ton, et vous validez le style avant la mise en service.'],
    ['Combien de temps dure l’installation ?', 'Un système de réponse de base est généralement prêt quelques jours après réception de vos informations.'],
    ['Sur quels canaux fonctionne-t-il ?', 'E-mail, WhatsApp et formulaires de site. Les messages Instagram et Facebook peuvent être ajoutés.'],
    ['Puis-je garder le contrôle ?', 'Oui. Vous choisissez ce à quoi il peut répondre, ce qu’il doit vous transmettre, et vous pouvez le mettre en pause à tout moment.'],
    ['Et s’il ne connaît pas la réponse ?', 'Il indique au voyageur que vous reviendrez vers lui et vous envoie aussitôt une alerte.'] ] },
  final: { h2: 'Voyez-le répondre à vos propres voyageurs', sub: 'Envoyez-nous une annonce et nous vous montrons une démo fonctionnelle, gratuitement. Sans engagement.' },
  mail: { subject: 'Demande de démo gratuite {name}', body: 'Bonjour, je gère [nombre] logements. Voici mon annonce : ' },
};

export const content: Record<Lang, Content> = { en, fr };
