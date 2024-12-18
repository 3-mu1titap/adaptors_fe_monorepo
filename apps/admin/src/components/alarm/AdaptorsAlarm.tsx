'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlarmType } from '../types/alarm/alarmTypes';
import { getRecentAlarmData } from '@repo/admin/actions/alram/alramAction';
import { BellIcon } from 'lucide-react';
import { EventSourcePolyfill, NativeEventSource } from 'event-source-polyfill';

function AdaptorsAlarm({ user }: { user: { uuid: string } }) {
  const [recentAlarm, setRecentAlarm] = useState<AlarmType | null>(null);
  const [newAlarm, setNewAlarm] = useState<AlarmType | null>(null);
  const eventSourceRef = useRef<EventSource | null>(null);
  const reconnectTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const connectEventSource = useCallback(() => {
    if (eventSourceRef.current) {
      console.log('EventSource already exists. Skipping connection.');
      return;
    }

    const alarmUrl = `${process.env.NEXT_PUBLIC_ALARM_URL}/api/v1/alarm-service/alarms/connect?userUuid=${user.uuid}`;
    const EventSource = EventSourcePolyfill || NativeEventSource;
    const newEventSource = new EventSource(alarmUrl, {
      heartbeatTimeout: 86400000,
    });

    newEventSource.onopen = () => {
      console.log('Alarm connection established');
    };

    newEventSource.onmessage = (event) => {
      try {
        console.log(event.data);
        // const alarmData: AlarmType = JSON.parse(event.data);
        // setNewAlarm(alarmData);
        // setRecentAlarm(alarmData);
      } catch (error) {
        console.error('Error parsing alarm data:', error);
      }
    };

    newEventSource.onerror = (error) => {
      console.error('EventSource error:', error);
      newEventSource.close();
      eventSourceRef.current = null;

      setTimeout(() => {
        connectEventSource();
      }, 5000);
    };

    eventSourceRef.current = newEventSource;
  }, [user.uuid]);

  useEffect(() => {
    connectEventSource();

    return () => {
      if (eventSourceRef.current) {
        eventSourceRef.current.close();
        eventSourceRef.current = null;
      }
      if (reconnectTimeoutRef.current) {
        clearTimeout(reconnectTimeoutRef.current);
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

  const handleDismissNewAlarm = useCallback(() => {
    setNewAlarm(null);
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
              <div className="flex justify-between items-start">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <BellIcon
                      className="h-5 w-5 text-blue-500"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="ml-3">
                    <p className="font-bold">{newAlarm.alarmType}</p>
                    <p>{newAlarm.message}</p>
                  </div>
                </div>
                <button
                  onClick={handleDismissNewAlarm}
                  className="text-blue-500 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  aria-label="Dismiss notification"
                >
                  <span className="sr-only">Dismiss</span>
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        {recentAlarm && !newAlarm && (
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center">
              <BellIcon
                className="h-6 w-6 text-gray-500 mr-2"
                aria-hidden="true"
              />
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
