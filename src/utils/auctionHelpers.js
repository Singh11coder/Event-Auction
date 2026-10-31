export function getHighestBid(bids = [], startingPrice = 0) {
  if (!bids.length) return { amount: startingPrice, bidder: "Starting price" };

  return bids.reduce(
    (highest, bid) =>
      bid.amount > highest.amount
        ? { amount: bid.amount, bidder: bid.bidder }
        : highest,
    { amount: startingPrice, bidder: "Starting price" }
  );
}

export function getTimeParts(milliseconds) {
  const totalSeconds = Math.max(0, Math.floor(milliseconds / 1000));
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}
