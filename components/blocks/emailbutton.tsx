"use client"

import { Copy } from "lucide-react";
import { Button } from "../ui/button";
import { ButtonGroup } from "../ui/button-group";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import Link from "next/link";
import { toast } from "sonner"

export default function EmailButton(){
async function CopyEmail() {
  try {
    await navigator.clipboard.writeText("vitalyyask@gmail.com");
   toast.success("Email copyed to clipbord")
  } catch (err) {
    console.error('Failed to copy text: ', err);
  }

}
    return (
              <ButtonGroup>
                <Button variant="secondary" className="bg-ylime" nativeButton={false} render={<Link href="" />}>
                  vitalyyask@gmail.com
                </Button>
                <Tooltip >
                  <TooltipTrigger render={<Button onClick={CopyEmail} variant="secondary" className="bg-ylime"> <Copy /></Button>} />
                  <TooltipContent>
                    <p>Copy to clipboard</p>
                  </TooltipContent>
                </Tooltip>
              </ButtonGroup>
    )
}