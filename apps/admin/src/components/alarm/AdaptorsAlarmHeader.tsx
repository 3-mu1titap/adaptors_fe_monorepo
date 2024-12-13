'use client';

import { useState, useEffect, useCallback } from 'react';
import { BellDot } from 'lucide-react';
import { Button } from '@repo/ui/components/ui/button';
import { AlarmListModal } from './AlarmListModal';
import { AlarmPaginationType, AlarmType } from '../types/alarm/alarmTypes';
import {
  deleteAlarmData,
  getAlarmData,
} from '@repo/admin/actions/alram/alramAction';

export default function AdaptorsAlarmHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [alarms, setAlarms] = useState<AlarmType[]>([]);
  const [hasNewAlarms, setHasNewAlarms] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLastPage, setIsLastPage] = useState(false);

  const getAlramsData = useCallback(
    async (page: number) => {
      if (isLastPage) return;

      try {
        const alarmMessage: AlarmPaginationType | null = await getAlarmData({
          page,
        });
        if (alarmMessage && alarmMessage.content.length > 0) {
          setAlarms((prevAlarms) => [...prevAlarms, ...alarmMessage.content]);
          setCurrentPage(page);
          setIsLastPage(alarmMessage.last);
          setHasNewAlarms(true);
        }
      } catch (error) {
        console.error('Failed to fetch alarm data:', error);
      }
    },
    [isLastPage]
  );

  useEffect(() => {
    getAlramsData(0);
  }, [getAlramsData]);

  const handleDeleteAlarm = async (uuid: string) => {
    if (await deleteAlarmData({ uuid })) {
      setAlarms((prevAlarms) =>
        prevAlarms.filter((alarm) => alarm.uuid !== uuid)
      );
      if (alarms.length === 1) {
        setHasNewAlarms(false);
      }
    } else {
      alert('알 수 없는 오류로 실패하였습니다.');
    }
  };

  const loadMoreAlarms = () => {
    if (!isLastPage) {
      getAlramsData(currentPage + 1);
    }
  };

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="relative"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-50 border-slate-200 border-[1px]">
          <BellDot className="w-5 h-5 text-black" />
        </div>
        {hasNewAlarms && (
          <span className="absolute top-0 right-0 w-3 h-3 rounded-full bg-adaptorsYellow animate-pulse"></span>
        )}
      </Button>

      <AlarmListModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        alarms={alarms}
        onDeleteAlarm={handleDeleteAlarm}
        loadMoreAlarms={loadMoreAlarms}
        isLastPage={isLastPage}
      />
    </>
  );
}
