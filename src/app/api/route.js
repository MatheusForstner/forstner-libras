import sinais from '../../../db.json';

export async function GET() {
  return new Response(JSON.stringify(sinais), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

