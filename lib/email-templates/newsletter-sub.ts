export const newSubscriberAdminMessage = (email: string) => {
  return `
    <div style="font-family: Arial, sans-serif; font-size: 16px; color: #333;">
      <h2 style="font-size: 1.5rem; color: #333;">New Subscriber 🎉</h2>
      <p style="margin-bottom: 1rem;">Hi there! A new user has subscribed to the Playacar Homes website.</p>
      <p style="margin-bottom: 1rem;">Email: ${email}</p>
    </div>
  `;
};
