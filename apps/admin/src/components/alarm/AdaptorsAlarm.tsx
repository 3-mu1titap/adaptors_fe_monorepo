'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlarmType } from '../types/alarm/alarmTypes';
import { getRecentAlarmData } from '@repo/admin/actions/alram/alramAction';
import {
  BellIcon,
  BookOpenIcon,
  CalendarIcon,
  StarIcon,
  CreditCardIcon,
  CheckCircleIcon,
} from 'lucide-react';
import { EventSourcePolyfill, NativeEventSource } from 'event-source-polyfill';

const AlarmTypeName: Record<string, string> = {
  MENTORING_REGISTER: '멘토링 등록',
  SESSION_REGISTER: '세션 등록',
  REVIEW_REGISTER: '리뷰 등록',
  PAY_SESSION: '세션 결제',
  SESSION_CONFIRM: '세션 확정',
};

const AlarmTypeIcon: Record<string, React.ElementType> = {
  MENTORING_REGISTER: BookOpenIcon,
  SESSION_REGISTER: CalendarIcon,
  REVIEW_REGISTER: StarIcon,
  PAY_SESSION: CreditCardIcon,
  SESSION_CONFIRM: CheckCircleIcon,
};

interface User {
  uuid: string;
}

function AdaptorsAlarm({ user }: { user: User }) {
  const [recentAlarm, setRecentAlarm] = useState<AlarmType | null>(null);
  const [eventSource, setEventSource] = useState<EventSourcePolyfill | null>(
    null
  );
  const reconnectTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const connectEventSource = useCallback(() => {
    if (eventSource) {
      return;
    }

    const alarmUrl = `${process.env.NEXT_PUBLIC_ALARM_URL}/api/v1/alarm-service/alarms/connect?userUuid=${user.uuid}`;
    const newEventSource = new EventSourcePolyfill(alarmUrl);

    newEventSource.onopen = () => {
      console.log('알람 서비스 연결');
    };

    newEventSource.onmessage = (event) => {
      const newAlarm = event.data.split(':');
      setRecentAlarm({
        alarmType: newAlarm[0] as keyof typeof AlarmTypeName,
        message: newAlarm[1],
      });
    };

    newEventSource.onerror = (error) => {
      console.error('EventSource error:', error);
      newEventSource.close();
      setEventSource(null);

      setTimeout(() => {
        connectEventSource();
      }, 5000);
    };

    setEventSource(newEventSource);
  }, [user.uuid]);

  useEffect(() => {
    connectEventSource();

    return () => {
      if (eventSource) {
        eventSource.close();
        setEventSource(null);
      }
    };
  }, [connectEventSource]);

  const getAlarmsData = useCallback(async () => {
    try {
      const alarmMessage: AlarmType | null = await getRecentAlarmData();
      if (alarmMessage) {
        setRecentAlarm(alarmMessage);
      }
    } catch (error) {
      console.error('Error fetching alarm data:', error);
    }
  }, []);

  useEffect(() => {
    getAlarmsData();
  }, [getAlarmsData]);

  const getAlarmIcon = (alarmType: keyof typeof AlarmTypeName) => {
    const IconComponent = AlarmTypeIcon[alarmType] || BellIcon;
    return <IconComponent className="h-8 w-8" />;
  };

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto bg-white rounded-lg overflow-hidden">
        <AnimatePresence mode="wait">
          {recentAlarm && (
            <motion.div
              key={recentAlarm.message}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="p-4"
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {getAlarmIcon(recentAlarm.alarmType)}
                  </motion.div>
                </div>
                <div className="flex-1 min-w-0">
                  <motion.h3
                    className="text-lg font-semibold text-gray-900"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {AlarmTypeName[recentAlarm.alarmType]
                      ? AlarmTypeName[recentAlarm.alarmType]
                      : recentAlarm.alarmType}
                  </motion.h3>
                  <motion.p
                    className="text-sm text-gray-500 truncate"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {recentAlarm.message}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default AdaptorsAlarm;
