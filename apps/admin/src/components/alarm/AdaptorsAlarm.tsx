'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlarmType } from '../types/alarm/alarmTypes';
import { getRecentAlarmData } from '@repo/admin/actions/alram/alramAction';
import { BellIcon } from 'lucide-react';

function AdaptorsAlarm({ user }: { user: any }) {
  const [recentAlarm, setRecentAlarm] = useState<AlarmType | null>(null);
  const [newAlarm, setNewAlarm] = useState<AlarmType | null>(null);
  const [eventSource, setEventSource] = useState<EventSource | null>(null);

  const connectEventSource = () => {
    const alarmUrl = `${process.env.NEXT_PUBLIC_ALARM_URL}/api/v1/alarm-service/alarms/connect?userUuid=${user.uuid}`;
    const source = new EventSource(alarmUrl);

    source.onopen = () => {
      console.log('alarm 연결 완료');
    };

    source.onmessage = (event) => {
      console.log(event);
    };

    source.onerror = (error) => {
      source.close();
      connectEventSource();
    };

    setEventSource(source);
  };

  useEffect(() => {
    connectEventSource();

    return () => {
      eventSource?.close();
    };
  }, [user.uuid]);

  const getAlramsData = async () => {
    try {
      const alarmMessage: AlarmType | null = await getRecentAlarmData();
      if (alarmMessage) {
        setRecentAlarm(alarmMessage);
      }
    } catch (error) {
      console.error('알람 데이터를 가져오는 중 오류 발생:', error);
    }
  };

  useEffect(() => {
    getAlramsData();
  }, []);

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto">
        <AnimatePresence>
          {newAlarm && (
            <motion.div
              key="new-alarm"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 mb-4"
              role="alert"
            >
              <div className="flex">
                <div className="flex-shrink-0">
                  <BellIcon className="h-5 w-5 text-blue-500" />
                </div>
                <div className="ml-3">
                  <p className="font-bold">{newAlarm.alarmType}</p>
                  <p>{newAlarm.message}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        {recentAlarm && !newAlarm && (
          <div className="bg-white rounded-lg">
            <div className="flex items-center">
              <BellIcon className="h-6 w-6 text-gray-500 mr-2" />
              <div>
                <h3 className="text-sm font-medium text-gray-900">
                  {recentAlarm.alarmType}
                </h3>
                <p className="text-sm text-gray-500">{recentAlarm.message}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdaptorsAlarm;
