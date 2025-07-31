# Crisp Chat Integration Setup

## 🚀 Quick Setup Guide

### 1. Get Your Crisp Website ID

1. Go to [Crisp.chat](https://crisp.chat) and create an account
2. Create a new website/project
3. Copy your Website ID from the setup page (looks like: `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`)

### 2. Configure Environment Variables

Create a `.env.local` file in your project root with:

```env
VITE_CRISP_WEBSITE_ID=your-crisp-website-id-here
VITE_CRISP_ENABLED=true
```

**Example:**
```env
VITE_CRISP_WEBSITE_ID=12345678-1234-1234-1234-123456789012
VITE_CRISP_ENABLED=true
```

### 3. Restart Your Development Server

```bash
npm run dev
```

## 🎨 Customization

The chat widget is already configured with your brand colors (`#10B981` - mint green). You can customize more settings in `src/components/ui/CrispChat.tsx`:

```tsx
// Custom chat color
window.$crisp.push(['set', 'chat:color', '#your-color']);

// Custom position
window.$crisp.push(['set', 'chat:position', 'right']); // or 'left'

// Hide on specific pages
window.$crisp.push(['set', 'chat:hide', true]);
```

## 🔧 Advanced Configuration

### User Identification
You can identify users for better support:

```tsx
window.$crisp.push(['set', 'user:email', 'user@example.com']);
window.$crisp.push(['set', 'user:nickname', 'John Doe']);
window.$crisp.push(['set', 'user:company', 'Company Name']);
```

### Custom Events
Track specific actions:

```tsx
window.$crisp.push(['set', 'session:event', [['signup', {}, 'green']]]);
```

### Disable on Mobile
If you want to disable chat on mobile devices:

```tsx
// Add this to your CrispChat component
if (window.innerWidth < 768) {
  window.$crisp.push(['set', 'chat:hide', true]);
}
```

## 🚨 Troubleshooting

### Chat Not Showing Up?
1. Check your Website ID is correct in `.env.local`
2. Make sure `VITE_CRISP_ENABLED=true`
3. Check browser console for errors
4. Verify the script is loading in Network tab

### Environment Variables Not Working?
1. File must be named `.env.local` (not `.env`)
2. Variables must start with `VITE_`
3. Restart your development server after changes
4. Make sure `.env.local` is in your project root

### Chat Showing "YOUR_CRISP_WEBSITE_ID"?
This means your environment variable isn't set up correctly. Double-check the `.env.local` file.

## 📱 Mobile Optimization

The chat widget is responsive by default, but you can customize mobile behavior:

```tsx
// Hide chat button on mobile, show only when clicked
window.$crisp.push(['set', 'chat:position', 'bottom']);
window.$crisp.push(['set', 'chat:mobile:reduce', true]);
```

## 🎯 Local SEO Integration

Since you're targeting Nigerian markets, you can set up automatic messages:

```tsx
// Welcome message for Nigerian visitors
window.$crisp.push(['set', 'message:auto:send', {
  'message': 'Hello! 👋 Looking for software development services in Nigeria? We serve Abuja, Ado Ekiti, and nationwide. How can we help you today?',
  'delay': 5000 // Show after 5 seconds
}]);
```

## 📊 Analytics Integration

Track chat interactions in your analytics:

```tsx
// Listen for chat events
window.$crisp.push(['on', 'chat:initiated', function() {
  // Track in Google Analytics, etc.
  console.log('Chat initiated');
}]);

window.$crisp.push(['on', 'message:sent', function() {
  // Track message sent
  console.log('Message sent by visitor');
}]);
```

That's it! Your Crisp chat is now ready to help convert visitors into clients. 🎉