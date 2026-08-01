"use client";

import { Copy } from "lucide-react";
import { Button } from "../ui/button";
import { ButtonGroup } from "../ui/button-group";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import Link from "next/link";
import { toast } from "@/components/ui/toast";

export default function EmailButton() {
  async function CopyEmail() {
    try {
      await navigator.clipboard.writeText("vitalyyask@gmail.com");
      toast.add({ title: "Email copyed to clipbord", type: "success" });
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  }
  return (
    <ButtonGroup>
      <Button
        variant="secondary"
        nativeButton={false}
        render={<Link href="" />}
      >
        vitalyyask@gmail.com
      </Button>
      <Tooltip>
        <TooltipTrigger
          render={
            <Button variant="secondary" onClick={CopyEmail} size="icon">
              <Copy />
            </Button>
          }
        />
        <TooltipContent>Copy to clipboard</TooltipContent>
      </Tooltip>
    </ButtonGroup>
  );
}
