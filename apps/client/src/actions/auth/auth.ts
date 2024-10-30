'use server';
export async function postLogin(requestBody: any) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/sign-in`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    }
  );
  if (!res.ok) {
    console.log(res);
    throw new Error('Network response was not ok');
  }
  const result = await res.json();
  console.log(result);
  return result;
}
