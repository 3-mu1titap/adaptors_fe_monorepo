import React, { useRef, useEffect, useCallback } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@repo/ui/components/ui/dialog';
import { ScrollArea } from '@repo/ui/components/ui/scroll-area';
import { Button } from '@repo/ui/components/ui/button';
import { X, Bell } from 'lucide-react';
import { AlarmType } from '../types/alarm/alarmTypes';

interface AlarmListModalProps {
  isOpen: boolean;
  onClose: () => void;
  alarms: AlarmType[];
  onDeleteAlarm: (uuid: string) => void;
  loadMoreAlarms: () => void;
  isLastPage: boolean;
}

export function AlarmListModal({
  isOpen,
  onClose,
  alarms,
  onDeleteAlarm,
  loadMoreAlarms,
  isLastPage,
}: AlarmListModalProps) {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const lastAlarmRef = useRef<HTMLDivElement | null>(null);
  const scrollAreaRef = useRef<HTMLDivElement | null>(null);

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting && !isLastPage) {
        loadMoreAlarms();
      }
    },
    [isLastPage, loadMoreAlarms]
  );

  useEffect(() => {
    if (!isOpen) return;

    const options = {
      root: scrollAreaRef.current,
      rootMargin: '0px',
      threshold: 0.1,
    };

    observerRef.current = new IntersectionObserver(handleObserver, options);

    if (lastAlarmRef.current) {
      observerRef.current.observe(lastAlarmRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [isOpen, handleObserver]);

  useEffect(() => {
    if (lastAlarmRef.current && observerRef.current) {
      observerRef.current.observe(lastAlarmRef.current);
    }
  }, [alarms]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[40rem]">
        <DialogHeader>
          <DialogTitle>Notifications</DialogTitle>
          <DialogDescription className="hidden">
            Here are your notifications. You can delete any notification you no
            longer need.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[500px] w-full pr-4" ref={scrollAreaRef}>
          {alarms.length === 0 ? (
            <p className="text-center text-gray-500 py-4">No notifications</p>
          ) : (
            alarms.map((alarm, index) => (
              <div
                key={alarm.uuid}
                className="mb-4 p-3 bg-gray-50 rounded-lg relative group"
                ref={index === alarms.length - 1 ? lastAlarmRef : null}
              >
                <div className="flex items-start">
                  <Bell className="w-5 h-5 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                  <div className="flex-grow">
                    <h4 className="text-sm font-medium">{alarm.alarmType}</h4>
                    <p className="text-sm text-gray-600">{alarm.message}</p>
                    <span className="text-xs text-gray-400">
                      {new Date(alarm.updatedAt).toLocaleString()}
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="opacity-0 group-hover:opacity-100 transition-opacity absolute top-2 right-2"
                    onClick={() => onDeleteAlarm(alarm.uuid)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))
          )}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
