import { useCallback, useEffect, useMemo, useState } from "react";
import { initialAuction } from "../data/auctionData";
import { getHighestBid } from "../utils/auctionHelpers";

const STORAGE_KEY = "bidarena-auction-v1";

function loadAuction() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : initialAuction;
  } catch {
    return initialAuction;
  }
}

export function useAuction() {
  const [auction, setAuction] = useState(loadAuction);
  const [now, setNow] = useState(Date.now());
  const [notice, setNotice] = useState({ type: "", message: "" });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(auction));
  }, [auction]);

  useEffect(() => {
    const interval = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(interval);
  }, []);

  const highestBid = useMemo(
    () => getHighestBid(auction.bids, auction.startingPrice),
    [auction.bids, auction.startingPrice]
  );

  const isEnded = now >= auction.endsAt;
  const isActive = !isEnded;
  const winner = auction.bids.length
    ? [...auction.bids].sort((a, b) => b.amount - a.amount)[0]
    : null;

  useEffect(() => {
    if (now >= auction.endsAt && !auction.endedAt) {
      setAuction((current) => ({ ...current, endedAt: current.endsAt }));
    }
  }, [now, auction.endsAt, auction.endedAt]);

  const placeBid = useCallback((bidderName, amount) => {
    const cleanName = bidderName.trim();
    const numericAmount = Number(amount);

    if (Date.now() >= auction.endsAt) {
      setNotice({ type: "error", message: "This auction has ended. Bids are closed." });
      return false;
    }
    if (!cleanName) {
      setNotice({ type: "error", message: "Please enter your name." });
      return false;
    }
    if (!Number.isFinite(numericAmount) || numericAmount <= highestBid.amount) {
      setNotice({
        type: "error",
        message: `Your bid must be higher than ${highestBid.amount.toLocaleString("en-IN")}.`,
      });
      return false;
    }

    const newBid = {
      id: crypto.randomUUID(),
      bidder: cleanName,
      amount: numericAmount,
      createdAt: Date.now(),
    };

    setAuction((current) => ({ ...current, bids: [newBid, ...current.bids] }));
    setNotice({ type: "success", message: "Your bid has been placed successfully!" });
    return true;
  }, [auction.endsAt, highestBid.amount]);

  const resetDemo = useCallback(() => {
    const fresh = {
      ...initialAuction,
      endsAt: Date.now() + 15 * 60 * 1000,
      bids: initialAuction.bids.map((bid, index) => ({
        ...bid,
        id: `demo-${Date.now()}-${index}`,
        createdAt: Date.now() - (3 - index) * 60 * 1000,
      })),
      endedAt: undefined,
    };
    setAuction(fresh);
    setNotice({ type: "success", message: "Demo auction has been reset." });
  }, []);

  const dismissNotice = () => setNotice({ type: "", message: "" });

  return {
    auction,
    now,
    isActive,
    isEnded,
    highestBid,
    winner,
    notice,
    placeBid,
    resetDemo,
    dismissNotice,
  };
}
