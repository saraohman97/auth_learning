"use client";

import { TreeDeciduous, Wallet } from "lucide-react";
import { Button } from "../ui/button";

export const Social = () => {
  return (
    <div className="flex items-center w-full gap-x-2">
      <Button
        className="w-full flex items-center justify-center"
        variant="outline"
      >
        <TreeDeciduous />
      </Button>
      <Button
        className="w-full flex items-center justify-center"
        variant="outline"
      >
        <Wallet />
      </Button>
    </div>
  );
};
