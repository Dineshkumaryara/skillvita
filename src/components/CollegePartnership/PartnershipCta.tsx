'use client';

import { useState } from 'react';
import { CtaCard } from "@/components/ui/cta-card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import CollaborationForm from "@/components/ui/modern-payment-form";

export function PartnershipCta() {
  const [isOpen, setIsOpen] = useState(false);

  const handleGetStarted = () => {
    setIsOpen(true);
  };

  return (
    <>
      <section id="contact" className="w-full py-20 lg:py-32 bg-gray-50 dark:bg-[#09090B]">
        <div className="max-w-7xl mx-auto px-6">
          <CtaCard
            title="Equip Students for Modern Hiring"
            subtitle="Partner With SkillVita"
            description="SkillVita helps students stand out with real capability, real work, and real confidence. Transform your campus into a hub of industry-ready talent with simulations, projects, CRT training, and proof-driven hiring pathways."
            buttonText="Partner With SkillVita"
            imageSrc="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80"
            imageAlt="Students collaborating on campus"
            onButtonClick={handleGetStarted}
          />
        </div>
      </section>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-md p-0 overflow-hidden border-none shadow-2xl">
          <DialogHeader className="sr-only">
            <DialogTitle>College Partnership Request</DialogTitle>
            <DialogDescription>
              Submit your institution details to partner with SkillVita
            </DialogDescription>
          </DialogHeader>
          <CollaborationForm />
        </DialogContent>
      </Dialog>
    </>
  );
}
