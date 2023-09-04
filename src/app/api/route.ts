import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const res = await fetch('https://meowfacts.herokuapp.com/?count=3', {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();

  return NextResponse.json({ data });
}
