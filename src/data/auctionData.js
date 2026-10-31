// Demo auction data. Replace this with data from your API when a backend is added.
export const initialAuction = {
  id: "auction-001",
  title: "Premium Collectors Auction",
  itemName: "Luxury Chronograph Watch",
  category: "Watches & Accessories",
  description:
    "A timeless chronograph with a polished stainless-steel case, precision movement and an elegant presentation box.",
  startingPrice: 10000,
  endsAt: Date.now() + 15 * 60 * 1000,
  image:
    "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=1200&q=85",
  bids: [
    {
      id: "bid-1",
      bidder: "Aman Singh",
      amount: 15000,
      createdAt: Date.now() - 8 * 60 * 1000,
    },
    {
      id: "bid-2",
      bidder: "Priya Verma",
      amount: 18000,
      createdAt: Date.now() - 5 * 60 * 1000,
    },
    {
      id: "bid-3",
      bidder: "Rahul Sharma",
      amount: 22000,
      createdAt: Date.now() - 2 * 60 * 1000,
    },
  ],
};
