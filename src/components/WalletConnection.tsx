"use client";

import { FC, useEffect, useState } from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const WalletConnection: FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header className="sticky py-2 top-0 z-50 w-full border-b border-border/40 bg-card shadow-lg">
      <div className="container flex h-14 max-w-screen-xl items-center">
        <div className="mr-4 flex">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <span className="hidden font-bold sm:inline-block">SolTrak</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center">
            <Button variant="ghost" asChild>
              <Link href="/your-wallet">Your Wallet</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/search-wallets">Search Wallets</Link>
            </Button>
          </nav>
          <WalletMultiButton className="wallet-adapter-button" />
        </div>
      </div>
    </header>
  );
};

export default WalletConnection;
