'use client';
import { AppWindowMacIcon } from 'lucide-react';

export default function OpenAppButton() {
  const handleOpenApp = async () => {
    const token = 'jasonahn'; // 로그인 토큰

    const response = await fetch('/api/openElectronApp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token }),
    });

    const result = await response.json();
    if (response.ok) {
      console.log(result.message); // Electron 앱이 성공적으로 실행됨
    } else {
      console.error(result.error); // 오류 처리
    }
  };
  return (
    <div onClick={() => handleOpenApp()} className="flex items-center gap-2">
      <AppWindowMacIcon />
      <span>Application</span>
    </div>
  );
}
