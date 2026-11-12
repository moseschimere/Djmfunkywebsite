import { NextRequest, NextResponse } from "next/server";

// Handles Stripe events (checkout.session.completed) to trigger order fulfillment/emails.
export async function POST(req: NextRequest) {
  // TODO: verify signature with stripe.webhooks.constructEvent
  // TODO: on checkout.session.completed -> log order, send confirmation email
  return NextResponse.json({ received: true });
}
