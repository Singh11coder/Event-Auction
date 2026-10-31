# BidArena — Event Auction System

A React + Vite + Tailwind CSS demo for a single-item timed auction.

## Run locally

```bash
npm install
npm run dev
```

## Included

- Item details and starting price
- Participant name and bid submission
- Bid validation (new bid must exceed current highest bid)
- Current highest bid and bidder
- Bid history
- Countdown timer and automatic bid closure
- Winner/result display
- Light/dark mode saved in localStorage
- Auction state saved in localStorage
- Responsive layout

## Important demo limitation

This version is frontend-only. It stores state in the current browser's localStorage. It is suitable for demonstrating the flow, but it is **not a secure multi-user auction**. For a real event, move auction timing, bid validation, bid ordering, and winner selection to a backend API/database and broadcast updates with WebSockets. The server must be the source of truth.
