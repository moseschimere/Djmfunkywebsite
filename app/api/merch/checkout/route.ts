import { NextRequest, NextResponse } from "next/server";
// import Stripe from "stripe";
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
  const { priceId, quantity } = await req.json();

  // TODO: create Stripe Checkout Session
  // const session = await stripe.checkout.sessions.create({
  //   mode: "payment",
  //   line_items: [{ price: priceId, quantity }],
  //   success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/merch/success`,
  //   cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/merch`,
  // });

  // return NextResponse.json({ url: session.url });
  return NextResponse.json({ url: null });
}
