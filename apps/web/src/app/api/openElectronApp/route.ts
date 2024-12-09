import { NextResponse } from 'next/server';
import { exec } from 'child_process';

export async function POST(req: Request): Promise<Response> {
  const body = await req.json();
  const { token } = body;

  // Electron 앱 실행
  const command = `open -a /Applications/adaptor-electron.app --args --token=${token}`;
  return new Promise((resolve) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${error.message}`);
        resolve(
          NextResponse.json(
            { error: 'Failed to open Electron app' },
            { status: 500 }
          )
        );
      } else if (stderr) {
        console.error(`Stderr: ${stderr}`);
        resolve(
          NextResponse.json(
            { error: 'Script execution error' },
            { status: 500 }
          )
        );
      } else {
        console.log(`Stdout: ${stdout}`);
        resolve(
          NextResponse.json(
            { message: 'Electron app opened successfully' },
            { status: 200 }
          )
        );
      }
    });
  });
}
