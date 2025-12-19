import Image from "next/image";

export function GoldenTicket() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center">
          <Image
            src="/images/golden-ticket.png"
            alt="Golden Ticket"
            width={1000}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
